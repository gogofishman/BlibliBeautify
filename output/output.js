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

GM_addStyle(`.showAni {
    opacity: 1 !important;
}

body {
    overflow-x: hidden !important;
}

body.header-v3 {
    background-color: black !important;
}

.video-container-v1 {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 2560px !important;
    flex-wrap: wrap !important;
    position: static !important;
}

.video-container-v1 .left-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    z-index: 0 !important;
}

.bpx-player-container {
    box-shadow: 0 0 0 !important;
    -webkit-box-shadow: 0 0 0 !important;
}

#playerWrap {
    order: -1;
    background-color: black;
    height: calc(100vh - 108px - 64px) !important;
    min-height: 480px !important;
    z-index: 99 !important;
    display: flex !important;
    justify-content: center !important;
    box-shadow: 3px 2px 10px 0px rgba(0, 0, 0, .5);
}

#playerWrap #bilibili-player:not([class="mode-webscreen"]) {
    width: 100% !important;
    height: 100% !important;
    max-width: 2450px !important;
}

#bilibili-player-placeholder {
    display: none !important;
}

#bilibili-player-placeholder-bottom {
    display: none !important;
}

#bottomDiv {
    min-width: 1130px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

/*白幕*/
#white_top{
    width: 100%;
    height: 35vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255 255 255));
}

#white_bottom{
    width: 100%;
    flex: 1;
    background: white;
}

#white {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    height: calc(100% - 100vh);
    transition: height 1s;
}
.video-container-v1 .right-container {
    padding-left: 60px !important;
    margin-left: 0 !important;
    opacity: 0;
    transition: opacity 0.5s;
}

.up-info--left .up-avatar-wrap {
    width: 70px!important;
    height: 70px!important;
}

.up-info--left .bili-avatar {
    width: 100% !important;
    height: 100% !important;
}


/*去广告*/
.video-card-ad-small {
    display: none !important;
}

#slide_ad {
    display: none !important;
}
.mini-header {
    background-color: black !important;
}

.bili-header span {
    color: white !important;
}

.mini-header .right-entry .right-entry__outside .right-entry-icon {
    color: white !important;
}


.mini-header__arrow {
    color: white !important;
}

.v-popover.is-bottom-start span, .v-popover.is-bottom span {
    color: inherit !important;
}

/*搜索*/
.center-search__bar, .bili-header .right-entry {
    opacity: 0;
    transition: opacity 1.5s;
}

.center-search__bar > #nav-searchform {
    border-radius: 20px !important;
    border: 1px solid #525252 !important;
    transition: background-color .7s, border-top-color .7s, border-left-color .7s, border-right-color .7s !important;
    background: #1e1e1e !important;
}

.center-search__bar > #nav-searchform:hover {
    background: white !important;
}

.center-search__bar.is-focus > #nav-searchform {
    opacity: 1 !important;
    background: white !important;
    border-radius: 20px 20px 0 0 !important;
    border: 1px solid #ffffff !important;
}

.bili-header .search-panel {
    border-radius: 0 0 20px 20px !important;
}

.bili-header .center-search-container .center-search__bar .nav-search-btn {
    background: transparent !important;
}

.bili-header .center-search-container .center-search__bar .nav-search-btn:hover {
    background: transparent !important;
}

.bili-header .center-search-container .center-search__bar #nav-searchform.is-actived .nav-search-content, .bili-header .center-search-container .center-search__bar #nav-searchform.is-focus .nav-search-content {
    background: transparent !important;
}

.bili-header .center-search-container .center-search__bar .nav-search-content .nav-search-input:active {
    background: transparent !important;
}

.bili-header .center-search-container .center-search__bar .nav-search-content .nav-search-input:focus {
    background: transparent !important;
}

.bili-header .center-search-container .center-search__bar .nav-search-content .nav-search-input {
    font-size: 16px !important;
}

.nav-search-btn > svg {
    color: #525252 !important;
}

/*屏蔽不显示的*/
.download-entry {
    display: none !important;
}

a[href="//game.bilibili.com/platform"], a[href="//game.bilibili.com/"], a[href="//show.bilibili.com/platform/home.html?msource=pc_web"] {
    display: none !important;
}

div[class="vip-wrap"] {
    display: none !important;
}

.v-popover-wrap.left-loc-entry {
    display: none !important;
}
.video-title {
    font-size: 23px !important;
    color: black !important;
    font-weight: bold !important;
}

#leftDiv {
    width: 70vw;
    min-width: 650px;
    max-width: 1550px;
}

#viewbox_report, #arc_toolbar_report, .left-container-under-player {
    opacity: 0;
    transition: opacity 0.5s;
}

.video-ai-assistant {
    z-index: 1 !important;
}

/*去广告*/
.video-container-v1 #bannerAd {
    display: none !important;
}

.reply-header .reply-notice {
    display: none !important;
}
.bpx-player-sending-area:before {
    display: none !important;
}

.bpx-player-sending-area {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s;
}

.bpx-player-sending-bar {
    width: 50vw !important;
    background: rgba(0, 0, 0, 0.7) !important;
    box-shadow: 0 2px 8px 5px rgba(20, 20, 20, 0.5) !important;
    padding-left: 50px !important;
    padding-right: 80px !important;
    border-radius: 0 0 25px 25px !important;
    z-index: 9999 !important;
}

.bpx-player-video-info {
    color: rgb(230, 230, 230) !important;
}

#sendingHover {
    position: absolute;
    height: 25%;
    width: 100%;
}

#sendingHover:hover .bpx-player-sending-area {
    opacity: 1 !important;
}

/*变色*/
.bpx-player-video-inputbar {
    background: rgba(20, 20, 20, 0.9) !important;
    border: 1.5px solid rgba(251, 114, 153, 0.8) !important;
    border-radius: 10px !important;
}

.bpx-player-sending-bar .bpx-player-video-inputbar .bpx-player-dm-input {
    color: rgb(251, 114, 153) !important;
}

.bui-button .bui-area {
    background-color: rgba(251, 114, 153, 0.8) !important;
}

/*全屏状态下*/
.bpx-player-control-bottom-center .bpx-player-sending-bar {
    background: rgba(20, 20, 20, 0) !important;
    box-shadow: 0 0 0 0 !important;
}
.bpx-player-control-wrap {
    opacity: 0;
    transition: opacity 1.5s;
}

.bpx-player-top-issue{
    display: none !important;
}

div[class="bpx-player-ctrl-btn bpx-player-ctrl-wide"][aria-label="宽屏"][role="button"]{
    display: none !important;
}

.bpx-player-shadow-progress-area{
    height: 3px !important;
}
.bpx-player-progress-schedule-current{
    background-color: #fb7299;
}
div[id="biliMainHeader"][class="z-top-container"] {
    background-color: black !important;
}
.home-container{
        display: flex;
    justify-content: center;
    background-color: black;
}

#__next .main-container {
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    max-width: 2560px !important;
    flex-wrap: wrap !important;
    position: static !important;
}

#__next .main-container > #bilibili-player-wrap:not([class="video_playerFullScreen__VWP96"]) {
    order: -1;
    background-color: black;
    height: calc(100vh - 108px - 64px) !important;
    min-height: 480px !important;
    z-index: 99 !important;
    box-shadow: 3px 2px 10px 0px rgba(0, 0, 0, .5);
    padding-right: 0 !important;
}

#__next #bilibili-player-wrap > .video_playerInner__0_RRO {
    display: flex !important;
    justify-content: center;
}

.navTools_floatNavExp__fCiyO{
    display: none !important;
}

.video_playerInner__0_RRO #bilibili-player:not([class="arzeus_wrap__KPR1i"])  {
    width: 100% !important;
    height: 100% !important;
    max-width: 2450px !important;
}

.main-container > #bottomDiv *{
    box-sizing: unset;
}
.main-container .plp-r.sticky {
    padding-top: 108px !important;
    padding-left: 60px !important;
    left: 0 !important;
    display: none;
    opacity: 0;
    transition: opacity 0.5s;
}


.vipPaybar_container__GsBut {
    display: none;
}
.bpx-player-top-wrap {
    color: black !important;
    position: static !important;
    display: block !important;
    height: 108px !important;
    padding-top: 22px !important;
}

.bpx-player-top-mask, .bpx-player-top-follow {
    display: none;
}

.bpx-player-top-title {
    font-size: 23px !important;
    color: black !important;
    font-weight: bold !important;
    margin: 0 0 6px !important;
    line-height: 34px !important;
}

.bpx-player-top-wrap > .mediainfo_mediaDesc__0JJwL {
    font-size: 13px;
    color: #9499A0;
    line-height: 18px;
}

#player-title, .mediainfo_mediaDesc__0JJwL {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.toolbar , .mediainfo_mediaInfo__Cpow4 ,#comment-module{
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

textarea[class="reply-box-textarea"]{
    box-sizing: border-box !important;
}
#__next #sendingHover{
    opacity: 0;
    transition: opacity 0.5s;
}

#__next #sendingHover:hover{
    opacity: 1 !important;
}

.bpx-player-dm-setting-wrap{
    bottom: auto !important;
}

.bpx-player-container[data-screen=full] .bpx-player-dm-setting-wrap, .bpx-player-container[data-screen=web] .bpx-player-dm-setting-wrap{
    bottom: 63px !important;
}

/*全屏状态下*/
.squirtle-wide-screen .bpx-player-sending-bar {
    background: rgba(20, 20, 20, 0) !important;
    box-shadow: 0 0 0 0 !important;
}
.squirtle-controller.squirtle-pgc .squirtle-progress-timeline{
    background-color: #fb7299;
}

.squirtle-controller .squirtle-progress-common.ease .squirtle-progress-bar{
    height: 3px;
}

.video_playerNormal__YTwJq #bilibili-player{
    max-width: 2450px;
}
`);

//不加载iframe
if (window === window.parent) {
  Print('加载脚本');

  window.onload = () => {
    unsafeWindow.originSetSize = () => {};
    unsafeWindow.setSize = () => {};

    //等到第二次加载完app
    WaitUntilAction(
        () => document.getElementById('nav-searchform'),
        () => {})
      .then(() => {
        run();
      });

    //进度条动画显示
    WaitUntilAction(
      () => document.getElementsByClassName(
        'bpx-player-control-wrap')[0],
      (e) => {
        (async function f() {
          await sleep(1000);
          e.classList.add('showAni');

          //当点击网页全屏时隐藏导航栏
          let button = document.querySelector(
            'div[class="bpx-player-ctrl-btn bpx-player-ctrl-web"][aria-label="网页全屏"]'
            );
          button.addEventListener('click', () => {
            let navigationBar = document.getElementById(
              'biliMainHeader');
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
  let url = document.querySelector('meta[property="og:url"]')
    .content;
  const regex = new RegExp("www.bilibili.com\\/(?<type>.*?)\\/");
  let url_type = '';
  if (regex.exec(url)) {
    url_type = regex.exec(url)
      .groups['type'];
  }

  //视频站点
  if (url_type === 'video') {
    //改变播放器下方元素结构
    let leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";
    leftDiv.appendChild(document.getElementById('viewbox_report'));
    leftDiv.appendChild(document.getElementById(
      'arc_toolbar_report'));
    leftDiv.appendChild(
      document.getElementsByClassName(
        'left-container-under-player')[0]);

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
      document.getElementsByClassName('bpx-player-sending-area')[
        0]);
    let vedio = document.querySelector(
      'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]'
      );
    vedio.appendChild(sendingHover);

    //动画显示效果
    await sleep(400);
    right.classList.add('showAni');
    document.getElementById('viewbox_report')
      .classList.add('showAni');
    document.getElementById('arc_toolbar_report')
      .classList.add('showAni');
    document.getElementsByClassName(
      'left-container-under-player')[0].classList.add('showAni');

    //添加白幕
    let white = document.createElement("div");
    white.id = "white";
    white.style.height = document.body.scrollHeight - window
      .scrollY - window.innerHeight + 'px';
    document.getElementById('bottomDiv')
      .appendChild(white);

    let white_top = document.createElement("div");
    white_top.id = "white_top";
    let white_bottom = document.createElement("div");
    white_bottom.id = "white_bottom";

    white.appendChild(white_top);
    white.appendChild(white_bottom);

    window.addEventListener('scroll', () => {
      white.style.height = document.body.scrollHeight - window
        .scrollY -
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
    leftDiv.appendChild(document.getElementsByClassName('toolbar')[
      0]);
    leftDiv.appendChild(
      document.getElementsByClassName(
        'mediainfo_mediaInfo__Cpow4')[0]);
    leftDiv.appendChild(document.getElementById('comment-module'));

    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDiv";
    bottomDiv.appendChild(leftDiv);
    let right = document.getElementsByClassName(
      'plp-r sticky')[0];
    bottomDiv.appendChild(right);

    let parentDiv = document.getElementsByClassName(
      'main-container')[0];
    parentDiv.insertBefore(bottomDiv,
      document.getElementsByClassName('plp-l sticky')[0]);
    //移动简介到标题下方
    let desc = document.getElementsByClassName(
      'mediainfo_mediaDesc__0JJwL')[1];
    document.getElementsByClassName('bpx-player-top-wrap')[0]
      .appendChild(desc);

    //创建弹幕栏激活区域
    let sendingHover = document.createElement("div");
    sendingHover.id = 'sendingHover';
    sendingHover.appendChild(
      document.getElementsByClassName('bpx-player-sending-area')[
        0]);
    let vedio = document.querySelector(
      'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]'
      );
    vedio.appendChild(sendingHover);

    //改变部分样式
    document.getElementsByClassName(
      'bpx-player-top-title')[0].style.width = 'auto !important';

    //动画显示效果
    document.getElementsByClassName('toolbar')[0].style.display =
      'flex';
    document.getElementsByClassName(
      'mediainfo_mediaInfo__Cpow4')[0].style.display = 'flex';
    document.getElementById('comment-module')
      .style.display = 'block';
    document.getElementsByClassName('plp-r sticky')[0].style
      .display = 'block';

    await sleep(500);

    document.getElementsByClassName(
      'mediainfo_mediaDesc__0JJwL')[0].classList.add('showAni');
    document.getElementById('player-title')
      .classList.add('showAni');
    document.getElementsByClassName('toolbar')[0].classList.add(
      'showAni');
    document.getElementsByClassName(
      'mediainfo_mediaInfo__Cpow4')[0].classList.add('showAni');
    document.getElementById('comment-module')
      .classList.add('showAni');
    document.getElementsByClassName('plp-r sticky')[0].classList
      .add('showAni');
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
  document.getElementsByClassName('center-search__bar')[0].style
    .opacity = '1';
  document.querySelector('ul[class="right-entry"]')
    .classList.add('showAni');

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
async function WaitUntilAction(element, action = (element) => element
  .remove(),
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