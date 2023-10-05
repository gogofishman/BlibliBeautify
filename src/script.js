import { Print, sleep, WaitUntilAction } from './func';

export function script () {
  unsafeWindow.originSetSize = () => {};
  unsafeWindow.setSize = () => {};
  
  //等到第二次加载完app
  WaitUntilAction(
    () => document.getElementsByClassName(
      'left-container scroll-sticky').length > 0,
    () => {})
    .then(() => {
      run();
    });
  
  //进度条动画显示
  WaitUntilAction(
    () => document.getElementsByClassName('bpx-player-control-wrap')[0],
    (e) => {
      (async function f () {
        await sleep(1000);
        e.classList.add('showAni');
      })();
    });
}

async function run () {
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
  await sleep(500);
  right.classList.add('showAni');
  document.getElementById('viewbox_report').classList.add('showAni');
  document.getElementById('arc_toolbar_report').classList.add('showAni');
  document.getElementsByClassName(
    'left-container-under-player')[0].classList.add('showAni');
}