// ==UserScript==
// @name         bilbili界面美化
// @description  让我们给B站界面变得现代一些吧!
// @namespace    none
// @version      1.1.7
// @author       gogofishman
// @license      MIT
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/bangumi/*
// @match        *://*.bilibili.com/read/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

"use strict";

//不加载iframe
if (window === window.parent) {
    Print('加载脚本');

    window.onload = () => {
        unsafeWindow.originSetSize = () => {
        };
        unsafeWindow.setSize = () => {
        };

        //等到第二次加载完app
        WaitUntilAction(
            () => document.getElementById('nav-searchform'),
            () => {
            })
            .then(() => {
                run();
            });

        //进度条动画显示
        WaitUntilAction(
            () => document.getElementsByClassName('bpx-player-control-wrap')[0],
            (e) => {
                (async function f() {
                    await sleep(1000);
                    e.classList.add('showAni');

                    //当点击网页全屏时隐藏导航栏
                    let button = document.querySelector(
                        'div[class="bpx-player-ctrl-btn bpx-player-ctrl-web"][aria-label="网页全屏"]');
                    button.addEventListener('click', () => {
                        let navigationBar = document.getElementById('biliMainHeader');
                        if (navigationBar.style.display !== 'none') {
                            navigationBar.style.display = 'none';
                        } else {
                            navigationBar.style.display = '';
                        }
                    });
                })();
            });
    }
}

async function run() {

    //判断当前站点
    let url = document.querySelector('meta[property="og:url"]').content;
    const regex = new RegExp("www.bilibili.com\\/(?<type>.*?)\\/");
    let url_type = '';
    if (regex.exec(url)) {
        url_type = regex.exec(url).groups['type'];
    }

    //视频站点
    if (url_type === 'video') {
        //改变播放器下方元素结构
        let leftDiv = document.createElement("div");
        leftDiv.id = "leftDiv";
        leftDiv.appendChild(document.getElementById('viewbox_report'));
        leftDiv.appendChild(document.getElementById('arc_toolbar_report'));
        leftDiv.appendChild(
            document.getElementsByClassName('left-container-under-player')[0]);

        let bottomDiv = document.createElement("div");
        bottomDiv.id = "bottomDiv";
        bottomDiv.appendChild(leftDiv);
        let right = document.getElementsByClassName(
            'right-container is-in-large-ab')[0];
        bottomDiv.appendChild(right);

        let parentDiv = document.getElementsByClassName(
            'left-container scroll-sticky')[0];
        parentDiv.appendChild(bottomDiv);

        //创建弹幕栏激活区域
        let sendingHover = document.createElement("div");
        sendingHover.id = 'sendingHover';
        sendingHover.appendChild(
            document.getElementsByClassName('bpx-player-sending-area')[0]);
        let vedio = document.querySelector(
            'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]');
        vedio.appendChild(sendingHover);

        //动画显示效果
        await sleep(400);
        right.classList.add('showAni');
        document.getElementById('viewbox_report').classList.add('showAni');
        document.getElementById('arc_toolbar_report').classList.add('showAni');
        document.getElementsByClassName(
            'left-container-under-player')[0].classList.add('showAni');

        //添加白幕
        let white = document.createElement("div");
        white.id = "white";
        white.style.height = document.body.scrollHeight - window.scrollY - window.innerHeight + 'px';
        document.getElementById('bottomDiv').appendChild(white);

        let white_top = document.createElement("div");
        white_top.id = "white_top";
        let white_bottom = document.createElement("div");
        white_bottom.id = "white_bottom";

        white.appendChild(white_top);
        white.appendChild(white_bottom);

        window.addEventListener('scroll', () => {
            white.style.height = document.body.scrollHeight - window.scrollY -
                window.innerHeight + 'px';
        });
    }

    //番剧站点
    if (url_type === 'bangumi') {
        //改变播放器下方元素结构
        let leftDiv = document.createElement("div");
        leftDiv.id = "leftDiv";
        leftDiv.appendChild(
            document.getElementsByClassName('bpx-player-top-wrap')[0]);
        leftDiv.appendChild(document.getElementsByClassName('toolbar')[0]);
        leftDiv.appendChild(
            document.getElementsByClassName('mediainfo_mediaInfo__Cpow4')[0]);
        leftDiv.appendChild(document.getElementById('comment-module'));

        let bottomDiv = document.createElement("div");
        bottomDiv.id = "bottomDiv";
        bottomDiv.appendChild(leftDiv);
        let right = document.getElementsByClassName(
            'plp-r sticky')[0];
        bottomDiv.appendChild(right);

        let parentDiv = document.getElementsByClassName('main-container')[0];
        parentDiv.insertBefore(bottomDiv,
            document.getElementsByClassName('plp-l sticky')[0]);
        //移动简介到标题下方
        let desc = document.getElementsByClassName('mediainfo_mediaDesc__0JJwL')[1];
        document.getElementsByClassName('bpx-player-top-wrap')[0].appendChild(desc);

        //创建弹幕栏激活区域
        let sendingHover = document.createElement("div");
        sendingHover.id = 'sendingHover';
        sendingHover.appendChild(
            document.getElementsByClassName('bpx-player-sending-area')[0]);
        let vedio = document.querySelector(
            'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]');
        vedio.appendChild(sendingHover);

        //改变部分样式
        document.getElementsByClassName(
            'bpx-player-top-title')[0].style.width = 'auto !important';

        //动画显示效果
        document.getElementsByClassName('toolbar')[0].style.display = 'flex';
        document.getElementsByClassName(
            'mediainfo_mediaInfo__Cpow4')[0].style.display = 'flex';
        document.getElementById('comment-module').style.display = 'block';
        document.getElementsByClassName('plp-r sticky')[0].style.display = 'block';

        await sleep(500);

        document.getElementsByClassName(
            'mediainfo_mediaDesc__0JJwL')[0].classList.add('showAni');
        document.getElementById('player-title').classList.add('showAni');
        document.getElementsByClassName('toolbar')[0].classList.add('showAni');
        document.getElementsByClassName(
            'mediainfo_mediaInfo__Cpow4')[0].classList.add('showAni');
        document.getElementById('comment-module').classList.add('showAni');
        document.getElementsByClassName('plp-r sticky')[0].classList.add('showAni');
    }

    //专栏站点
    if (url_type === 'read') {
        //删除右键复制的后缀
        let element = document.getElementById('article-content');
        element.addEventListener("copy", function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }, true);
    }

    //通用
    document.getElementsByClassName('center-search__bar')[0].style.opacity = '1';
    document.querySelector('ul[class="right-entry"]').classList.add('showAni');

}


function Print(text) {
    console.log(`[B站美化] - ${text}`);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 异步执行当某个元素出现时立马某个动作
 * @param {function} element 返回指定元素的函数
 * @param {function} action 执行动作,参数为element得到的元素,默认remove
 * @param {number} num action执行次数，默认1次，-1为不限定次数直到超时才停止
 * @param {number} step 每次检查间隔时间 ms
 * @param {number} timeOut 超时时间 ms
 * @returns {Promise<void>}
 * @constructor
 */
async function WaitUntilAction(element, action = (element) => element.remove(),
                               num = 1, step = 50, timeOut = 1000 * 10) {
    let count = 0;
    let _num = 0;
    let outCount = timeOut / step;

    try {
        while (count <= outCount) {
            count++;
            await sleep(step);

            let _c = element();
            if (_c) {
                //执行动作
                action(_c);
                if (_num < num) {
                    break;
                }
                _num++;
            }

        }
    } catch (e) {
        console.log('WaitUntilAction错误：', e);
    }
}
