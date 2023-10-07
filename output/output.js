// ==UserScript==
// @name         bilbili界面美化
// @description  让我们给B站界面变得现代一些吧!
// @namespace    none
// @version      1.1.2
// @author       gogofishman
// @license      MIT
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/bangumi/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ const __webpack_modules__ = ({

    /***/ 257:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.showAni {
    opacity: 1 !important;
}

body {
    overflow-x: hidden !important;
}

body.header-v3 {
    background-color: black!important;
}

.video-container-v1 {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 2560px !important;
    flex-wrap: wrap !important;
    position: static!important;
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
    box-shadow: 3px 2px 10px 0px rgba(0,0,0,.5);
}

#playerWrap #bilibili-player:not([class="mode-webscreen"])  {
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
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 818:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.video-container-v1 .right-container {
    padding-left: 60px !important;
    margin-left: 0 !important;
    opacity: 0;
    transition: opacity 1.5s;
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
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 504:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.mini-header {
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
    transition: background-color .7s !important;
    background: #1e1e1e !important;
}

.center-search__bar > #nav-searchform:hover {
    background: white !important;
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
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 208:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.video-title {
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
    transition: opacity 1.5s;
}

/*去广告*/
.video-container-v1 #bannerAd {
    display: none !important;
}

.reply-header .reply-notice {
    display: none !important;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 746:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.bpx-player-sending-area:before {
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

.bpx-player-control-bottom-center .bpx-player-sending-bar {
    background: rgba(20, 20, 20, 0) !important;
    box-shadow: 0 0 0 0 !important;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 180:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.bpx-player-control-wrap {
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
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 117:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `div[id="biliMainHeader"][class="z-top-container"] {
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
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 547:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.main-container .plp-r.sticky {
    padding-top: 108px !important;
    padding-left: 60px !important;
    left: 0 !important;
    display: none;
    opacity: 0;
    transition: opacity 1.5s;
}


.vipPaybar_container__GsBut {
    display: none;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 91:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.bpx-player-top-wrap {
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
    transition: opacity 1.5s ease-in-out;
}

.toolbar , .mediainfo_mediaInfo__Cpow4 ,#comment-module{
    display: none;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 123:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `#__next #sendingHover{
    opacity: 0;
    transition: opacity 0.5s;
}

#__next #sendingHover:hover{
    opacity: 1 !important;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 373:
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports

      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `.squirtle-controller.squirtle-pgc .squirtle-progress-timeline{
    background-color: #fb7299;
}

.squirtle-controller .squirtle-progress-common.ease .squirtle-progress-bar{
    height: 3px;
}

.video_playerNormal__YTwJq #bilibili-player{
    max-width: 2450px;
}`, '']);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ 645:
    /***/ ((module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        const list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map((item) => {
            let content = '';
            const needLayer = typeof item[5] !== 'undefined';
            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }
            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }
            if (needLayer) {
              content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += '}';
            }
            if (item[2]) {
              content += '}';
            }
            if (item[4]) {
              content += '}';
            }
            return content;
          }).join('');
        };

        // import a list of modules into the list
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }
          const alreadyImportedModules = {};
          if (dedupe) {
            for (let k = 0; k < this.length; k++) {
              const id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (let _k = 0; _k < modules.length; _k++) {
            const item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };
      /***/ }),

    /***/ 81:
    /***/ ((module) => {
      module.exports = function (i) {
        return i[1];
      };
      /***/ }),

    /***/ 379:
    /***/ ((module) => {
      const stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        let result = -1;
        for (let i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }
        return result;
      }
      function modulesToDom(list, options) {
        const idCountMap = {};
        const identifiers = [];
        for (let i = 0; i < list.length; i++) {
          const item = list[i];
          const id = options.base ? item[0] + options.base : item[0];
          const count = idCountMap[id] || 0;
          const identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          const indexByIdentifier = getIndexByIdentifier(identifier);
          const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };
          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            const updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier,
              updater,
              references: 1,
            });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        const api = options.domAPI(options);
        api.update(obj);
        const updater = function updater(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
              return;
            }
            api.update(obj = newObj);
          } else {
            api.remove();
          }
        };
        return updater;
      }
      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        let lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];
          for (let i = 0; i < lastIdentifiers.length; i++) {
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }
          const newLastIdentifiers = modulesToDom(newList, options);
          for (let _i = 0; _i < lastIdentifiers.length; _i++) {
            const _identifier = lastIdentifiers[_i];
            const _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();
              stylesInDOM.splice(_index, 1);
            }
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/ }),

    /***/ 569:
    /***/ ((module) => {
      const memo = {};

      /* istanbul ignore next  */
      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          let styleTarget = document.querySelector(target);

          // Special case to return head of iframe instead of iframe itself
          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }

      /* istanbul ignore next  */
      function insertBySelector(insert, style) {
        const target = getTarget(insert);
        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;
      /***/ }),

    /***/ 216:
    /***/ ((module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        const element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;
      /***/ }),

    /***/ 565:
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        const nonce = true ? __webpack_require__.nc : 0;
        if (nonce) {
          styleElement.setAttribute('nonce', nonce);
        }
      }
      module.exports = setAttributesWithoutAttributes;
      /***/ }),

    /***/ 795:
    /***/ ((module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        let css = '';
        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }
        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }
        const needLayer = typeof obj.layer !== 'undefined';
        if (needLayer) {
          css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
        }
        css += obj.css;
        if (needLayer) {
          css += '}';
        }
        if (obj.media) {
          css += '}';
        }
        if (obj.supports) {
          css += '}';
        }
        const { sourceMap } = obj;
        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
        }

        // For old IE
        /* istanbul ignore if  */
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }
        styleElement.parentNode.removeChild(styleElement);
      }

      /* istanbul ignore next  */
      function domAPI(options) {
        if (typeof document === 'undefined') {
          return {
            update: function update() {},
            remove: function remove() {},
          };
        }
        const styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;
      /***/ }),

    /***/ 589:
    /***/ ((module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
      /***/ }),

    /** *** */ });
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */ }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = __webpack_module_cache__[moduleId] = {
      /** *** */ id: moduleId,
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */ };
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */ }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/compat get default export */
  /** *** */ (() => {
    /** *** */ // getDefaultExport function for compatibility with non-harmony modules
    /** *** */ __webpack_require__.n = (module) => {
      /** *** */ const getter = module && module.__esModule
      /** *** */ ? () => (module.default)
      /** *** */ : () => (module);
      /** *** */ __webpack_require__.d(getter, { a: getter });
      /** *** */ return getter;
      /** *** */ };
    /** *** */ })();
  /** *** */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ }
        /** *** */ }
      /** *** */ };
    /** *** */ })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ })();
  /** *** */
  /** *** */ /* webpack/runtime/nonce */
  /** *** */ (() => {
    /** *** */ __webpack_require__.nc = undefined;
    /** *** */ })();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    // CONCATENATED MODULE: ./src/func.js
    function Print(text) {
      console.log(`[B站美化] - ${text}`);
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    /**
 * @param {function} element 返回指定元素的函数
 * @param {function} action 执行动作,参数为element得到的元素,默认remove
 * @param {number} num action执行次数，默认1次，-1为不限定次数直到超时才停止
 * @param {number} step 每次检查间隔时间 ms
 * @param {number} timeOut 超时时间 ms
 * @returns {Promise<void>}
 * @constructor
 */
    async function WaitUntilAction(
      element,
      action = (element) => element.remove(),
      num = 1,
      step = 50,
      timeOut = 1000 * 10,
    ) {
      let count = 0;
      let _num = 0;
      const outCount = timeOut / step;

      try {
        while (count <= outCount) {
          count++;
          await sleep(step);

          const _c = element();
          if (_c) {
            // 执行动作
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
    // CONCATENATED MODULE: ./src/script.js

    function script() {
      unsafeWindow.originSetSize = () => {};
      unsafeWindow.setSize = () => {};

      WaitUntilAction(
        () => document.getElementById('nav-searchform'),
        () => {},
      )
        .then(() => {
          run();
        });

      WaitUntilAction(
        () => document.getElementsByClassName('bpx-player-control-wrap')[0],
        (e) => {
          (async function f() {
            await sleep(1000);
            e.classList.add('showAni');

            const button = document.querySelector('div[class="bpx-player-ctrl-btn bpx-player-ctrl-web"][aria-label="网页全屏"]');
            button.addEventListener('click', () => {
              const navigationBar = document.getElementById('biliMainHeader');
              if (navigationBar.style.display !== 'none') {
                navigationBar.style.display = 'none';
              } else {
                navigationBar.style.display = '';
              }
            });
          }());
        },
      );
    }

    async function run() {
      const url = document.querySelector('meta[property="og:url"]').content;
      const regex = new RegExp('www.bilibili.com\\/(?<type>.*?)\\/');
      let url_type = '';
      if (regex.exec(url)) {
        url_type = regex.exec(url).groups.type;
      }

      // 视频站点
      if (url_type === 'video') {
        const leftDiv = document.createElement('div');
        leftDiv.id = 'leftDiv';
        leftDiv.appendChild(document.getElementById('viewbox_report'));
        leftDiv.appendChild(document.getElementById('arc_toolbar_report'));
        leftDiv.appendChild(
          document.getElementsByClassName('left-container-under-player')[0],
        );

        const bottomDiv = document.createElement('div');
        bottomDiv.id = 'bottomDiv';
        bottomDiv.appendChild(leftDiv);
        const right = document.getElementsByClassName(
          'right-container is-in-large-ab',
        )[0];
        bottomDiv.appendChild(right);

        const parentDiv = document.getElementsByClassName(
          'left-container scroll-sticky',
        )[0];
        parentDiv.appendChild(bottomDiv);

        const sendingHover = document.createElement('div');
        sendingHover.id = 'sendingHover';
        sendingHover.appendChild(
          document.getElementsByClassName('bpx-player-sending-area')[0],
        );
        const vedio = document.querySelector(
          'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]',
        );
        vedio.appendChild(sendingHover);

        // 动画显示效果
        await sleep(500);
        right.classList.add('showAni');
        document.getElementById('viewbox_report').classList.add('showAni');
        document.getElementById('arc_toolbar_report').classList.add('showAni');
        document.getElementsByClassName(
          'left-container-under-player',
        )[0].classList.add('showAni');
      }

      // 番剧站点
      if (url_type === 'bangumi') {
        const leftDiv = document.createElement('div');
        leftDiv.id = 'leftDiv';
        leftDiv.appendChild(document.getElementsByClassName('bpx-player-top-wrap')[0]);
        leftDiv.appendChild(document.getElementsByClassName('toolbar')[0]);
        leftDiv.appendChild(document.getElementsByClassName('mediainfo_mediaInfo__Cpow4')[0]);
        leftDiv.appendChild(document.getElementById('comment-module'));

        const bottomDiv = document.createElement('div');
        bottomDiv.id = 'bottomDiv';
        bottomDiv.appendChild(leftDiv);
        const right = document.getElementsByClassName(
          'plp-r sticky',
        )[0];
        bottomDiv.appendChild(right);

        const parentDiv = document.getElementsByClassName('main-container')[0];
        parentDiv.insertBefore(bottomDiv, document.getElementsByClassName('plp-l sticky')[0]);
        const desc = document.getElementsByClassName('mediainfo_mediaDesc__0JJwL')[1];
        document.getElementsByClassName('bpx-player-top-wrap')[0].appendChild(desc);

        const sendingHover = document.createElement('div');
        sendingHover.id = 'sendingHover';
        sendingHover.appendChild(
          document.getElementsByClassName('bpx-player-sending-area')[0],
        );
        const vedio = document.querySelector(
          'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]',
        );
        vedio.appendChild(sendingHover);

        // 改变部分样式
        document.getElementsByClassName('bpx-player-top-title')[0].style.width = 'auto !important';

        // 动画显示效果
        document.getElementsByClassName('toolbar')[0].style.display = 'flex';
        document.getElementsByClassName('mediainfo_mediaInfo__Cpow4')[0].style.display = 'flex';
        document.getElementById('comment-module').style.display = 'block';
        document.getElementsByClassName('plp-r sticky')[0].style.display = 'block';

        await sleep(500);

        document.getElementsByClassName('mediainfo_mediaDesc__0JJwL')[0].classList.add('showAni');
        document.getElementById('player-title').classList.add('showAni');
        document.getElementsByClassName('toolbar')[0].classList.add('showAni');
        document.getElementsByClassName('mediainfo_mediaInfo__Cpow4')[0].classList.add('showAni');
        document.getElementById('comment-module').classList.add('showAni');
        document.getElementsByClassName('plp-r sticky')[0].classList.add('showAni');
      }

      // 通用
      document.getElementsByClassName('center-search__bar')[0].classList.add(
        'showAni',
      );
      document.querySelector('ul[class="right-entry"]').classList.add('showAni');
    }
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
    const injectStylesIntoStyleTag = __webpack_require__(379);
    const injectStylesIntoStyleTag_default = /* #__PURE__ */__webpack_require__.n(injectStylesIntoStyleTag);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
    const styleDomAPI = __webpack_require__(795);
    const styleDomAPI_default = /* #__PURE__ */__webpack_require__.n(styleDomAPI);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
    const insertBySelector = __webpack_require__(569);
    const insertBySelector_default = /* #__PURE__ */__webpack_require__.n(insertBySelector);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
    const setAttributesWithoutAttributes = __webpack_require__(565);
    const setAttributesWithoutAttributes_default = /* #__PURE__ */__webpack_require__.n(setAttributesWithoutAttributes);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
    const insertStyleElement = __webpack_require__(216);
    const insertStyleElement_default = /* #__PURE__ */__webpack_require__.n(insertStyleElement);
    // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
    const styleTagTransform = __webpack_require__(589);
    const styleTagTransform_default = /* #__PURE__ */__webpack_require__.n(styleTagTransform);
    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/主界面.css
    const _ = __webpack_require__(257);
    // CONCATENATED MODULE: ./src/css/主界面.css

    const options = {};

    options.styleTagTransform = (styleTagTransform_default());
    options.setAttributes = (setAttributesWithoutAttributes_default());

    options.insert = insertBySelector_default().bind(null, 'head');

    options.domAPI = (styleDomAPI_default());
    options.insertStyleElement = (insertStyleElement_default());

    const update = injectStylesIntoStyleTag_default()(_/* default */.Z, options);

    /* harmony default export */ const css_ = (_/* default */.Z && _/* default */.Z.locals ? _/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/弹幕栏.css
    const cjs_js_src_css_ = __webpack_require__(746);
    // CONCATENATED MODULE: ./src/css/弹幕栏.css

    const _options = {};

    _options.styleTagTransform = (styleTagTransform_default());
    _options.setAttributes = (setAttributesWithoutAttributes_default());

    _options.insert = insertBySelector_default().bind(null, 'head');

    _options.domAPI = (styleDomAPI_default());
    _options.insertStyleElement = (insertStyleElement_default());

    const _update = injectStylesIntoStyleTag_default()(cjs_js_src_css_/* default */.Z, _options);

    /* harmony default export */ const src_css_ = (cjs_js_src_css_/* default */.Z && cjs_js_src_css_/* default */.Z.locals ? cjs_js_src_css_/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/右.css
    const dist_cjs_js_src_css_ = __webpack_require__(818);
    // CONCATENATED MODULE: ./src/css/右.css

    const css_options = {};

    css_options.styleTagTransform = (styleTagTransform_default());
    css_options.setAttributes = (setAttributesWithoutAttributes_default());

    css_options.insert = insertBySelector_default().bind(null, 'head');

    css_options.domAPI = (styleDomAPI_default());
    css_options.insertStyleElement = (insertStyleElement_default());

    const css_update = injectStylesIntoStyleTag_default()(dist_cjs_js_src_css_/* default */.Z, css_options);

    /* harmony default export */ const src_css_0 = (dist_cjs_js_src_css_/* default */.Z && dist_cjs_js_src_css_/* default */.Z.locals ? dist_cjs_js_src_css_/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/导航栏.css
    const css_loader_dist_cjs_js_src_css_ = __webpack_require__(504);
    // CONCATENATED MODULE: ./src/css/导航栏.css

    const src_css_options = {};

    src_css_options.styleTagTransform = (styleTagTransform_default());
    src_css_options.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options.insert = insertBySelector_default().bind(null, 'head');

    src_css_options.domAPI = (styleDomAPI_default());
    src_css_options.insertStyleElement = (insertStyleElement_default());

    const src_css_update = injectStylesIntoStyleTag_default()(css_loader_dist_cjs_js_src_css_/* default */.Z, src_css_options);

    /* harmony default export */ const src_css_1 = (css_loader_dist_cjs_js_src_css_/* default */.Z && css_loader_dist_cjs_js_src_css_/* default */.Z.locals ? css_loader_dist_cjs_js_src_css_/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/左.css
    const node_modules_css_loader_dist_cjs_js_src_css_ = __webpack_require__(208);
    // CONCATENATED MODULE: ./src/css/左.css

    const src_css_options_0 = {};

    src_css_options_0.styleTagTransform = (styleTagTransform_default());
    src_css_options_0.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_0.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_0.domAPI = (styleDomAPI_default());
    src_css_options_0.insertStyleElement = (insertStyleElement_default());

    const src_css_update_0 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_/* default */.Z, src_css_options_0);

    /* harmony default export */ const src_css_2 = (node_modules_css_loader_dist_cjs_js_src_css_/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/播放器.css
    const node_modules_css_loader_dist_cjs_js_src_css_0 = __webpack_require__(180);
    // CONCATENATED MODULE: ./src/css/播放器.css

    const src_css_options_1 = {};

    src_css_options_1.styleTagTransform = (styleTagTransform_default());
    src_css_options_1.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_1.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_1.domAPI = (styleDomAPI_default());
    src_css_options_1.insertStyleElement = (insertStyleElement_default());

    const src_css_update_1 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_0/* default */.Z, src_css_options_1);

    /* harmony default export */ const src_css_3 = (node_modules_css_loader_dist_cjs_js_src_css_0/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_0/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_0/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/番剧/主界面.css
    const node_modules_css_loader_dist_cjs_js_src_css_1 = __webpack_require__(117);
    // CONCATENATED MODULE: ./src/css/番剧/主界面.css

    const src_css_options_2 = {};

    src_css_options_2.styleTagTransform = (styleTagTransform_default());
    src_css_options_2.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_2.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_2.domAPI = (styleDomAPI_default());
    src_css_options_2.insertStyleElement = (insertStyleElement_default());

    const src_css_update_2 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_1/* default */.Z, src_css_options_2);

    /* harmony default export */ const src_css_4 = (node_modules_css_loader_dist_cjs_js_src_css_1/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_1/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_1/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/番剧/弹幕栏.css
    const node_modules_css_loader_dist_cjs_js_src_css_2 = __webpack_require__(123);
    // CONCATENATED MODULE: ./src/css/番剧/弹幕栏.css

    const src_css_options_3 = {};

    src_css_options_3.styleTagTransform = (styleTagTransform_default());
    src_css_options_3.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_3.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_3.domAPI = (styleDomAPI_default());
    src_css_options_3.insertStyleElement = (insertStyleElement_default());

    const src_css_update_3 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_2/* default */.Z, src_css_options_3);

    /* harmony default export */ const src_css_5 = (node_modules_css_loader_dist_cjs_js_src_css_2/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_2/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_2/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/番剧/播放器.css
    const node_modules_css_loader_dist_cjs_js_src_css_3 = __webpack_require__(373);
    // CONCATENATED MODULE: ./src/css/番剧/播放器.css

    const src_css_options_4 = {};

    src_css_options_4.styleTagTransform = (styleTagTransform_default());
    src_css_options_4.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_4.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_4.domAPI = (styleDomAPI_default());
    src_css_options_4.insertStyleElement = (insertStyleElement_default());

    const src_css_update_4 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_3/* default */.Z, src_css_options_4);

    /* harmony default export */ const src_css_6 = (node_modules_css_loader_dist_cjs_js_src_css_3/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_3/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_3/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/番剧/左.css
    const node_modules_css_loader_dist_cjs_js_src_css_4 = __webpack_require__(91);
    // CONCATENATED MODULE: ./src/css/番剧/左.css

    const src_css_options_5 = {};

    src_css_options_5.styleTagTransform = (styleTagTransform_default());
    src_css_options_5.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_5.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_5.domAPI = (styleDomAPI_default());
    src_css_options_5.insertStyleElement = (insertStyleElement_default());

    const src_css_update_5 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_4/* default */.Z, src_css_options_5);

    /* harmony default export */ const src_css_7 = (node_modules_css_loader_dist_cjs_js_src_css_4/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_4/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_4/* default */.Z.locals : undefined);

    // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/番剧/右.css
    const node_modules_css_loader_dist_cjs_js_src_css_5 = __webpack_require__(547);
    // CONCATENATED MODULE: ./src/css/番剧/右.css

    const src_css_options_6 = {};

    src_css_options_6.styleTagTransform = (styleTagTransform_default());
    src_css_options_6.setAttributes = (setAttributesWithoutAttributes_default());

    src_css_options_6.insert = insertBySelector_default().bind(null, 'head');

    src_css_options_6.domAPI = (styleDomAPI_default());
    src_css_options_6.insertStyleElement = (insertStyleElement_default());

    const src_css_update_6 = injectStylesIntoStyleTag_default()(node_modules_css_loader_dist_cjs_js_src_css_5/* default */.Z, src_css_options_6);

    /* harmony default export */ const src_css_8 = (node_modules_css_loader_dist_cjs_js_src_css_5/* default */.Z && node_modules_css_loader_dist_cjs_js_src_css_5/* default */.Z.locals ? node_modules_css_loader_dist_cjs_js_src_css_5/* default */.Z.locals : undefined);

    // CONCATENATED MODULE: ./src/index.js
    // ==UserScript==
    // @name         bilbili界面美化
    // @description  让我们给B站界面变得现代一些吧!
    // @namespace    none
    // @version      1.1.2
    // @author       gogofishman
    // @license      MIT
    // @match        *://*.bilibili.com/video/*
    // @match        *://*.bilibili.com/bangumi/*
    // @run-at       document-start
    // @grant        GM_addStyle
    // @grant        unsafeWindow
    // ==/UserScript==

    // 导入vieo样式

    // 不加载iframe
    if (window === window.parent) {
      Print('加载脚本');

      window.onload = script;
    }

    if (document.getElementById('modal-refreshsucc')) {
      document.getElementById('modal-refreshsucc').click();
    } else {
      document.getElementById('modal-refreshfail').click();
    }
  })();
/** *** */ })();
