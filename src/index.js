// ==UserScript==
// @name         bilbili界面美化
// @namespace    none
// @version      1.0.2
// @description  B站自带版式有一种古典的美，让我们给它变得现代一些吧
// @author       gogofishman
// @license      MIT
// @match        *://*.bilibili.com/video/*
// @run-at        document-start
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

//不加载iframe
if (window === window.parent) {
  Print('加载脚本');
  
  window.onload = script;
}