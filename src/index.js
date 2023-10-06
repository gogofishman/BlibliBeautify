// ==UserScript==
// @name         bilbili界面美化
// @description  让我们给B站界面变得现代一些吧
// @namespace    none
// @version      1.0.4
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

import './css/主界面.css';
import './css/弹幕栏.css';
import './css/右.css';
import './css/导航栏.css';
import './css/左.css';
import './css/播放器.css';

//不加载iframe
if (window === window.parent) {
  Print('加载脚本');
  
  window.onload = script;
}