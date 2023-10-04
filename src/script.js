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
      right.style.zIndex = 1;
      
      let parentDiv = document.getElementsByClassName(
        'left-container scroll-sticky')[0];
      parentDiv.appendChild(bottomDiv);
      
      //创建弹幕栏激活区域
      let sendingHover = document.createElement("div");
      sendingHover.id = 'sendingHover';
      sendingHover.appendChild(
        document.getElementsByClassName('bpx-player-sending-area')[0]);
      
      document.querySelector(
        'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]')
        .appendChild(sendingHover);
    });
  
}