// ==UserScript==
// @name         bilbili界面美化
// @description  让我们给B站界面变得现代一些吧!
// @namespace    none
// @version      1.1.1
// @author       gogofishman
// @license      MIT
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/bangumi/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

'use strict';

import { Print } from './func';
import { script } from './script';

//导入vieo样式
import './css/主界面.css';
import './css/弹幕栏.css';
import './css/右.css';
import './css/导航栏.css';
import './css/左.css';
import './css/播放器.css';
//导入番剧样式
import './css/番剧/主界面.css';
import './css/番剧/弹幕栏.css';
import './css/番剧/播放器.css';
import './css/番剧/左.css';
import './css/番剧/右.css';

//不加载iframe
if (window === window.parent) {
  Print('加载脚本');
  
  window.onload = script;
}

if (document.getElementById('modal-refreshsucc')){
  document.getElementById('modal-refreshsucc').click();
}else{
  document.getElementById('modal-refreshfail').click();
}