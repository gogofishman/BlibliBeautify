// ==UserScript==
// @name         bilbili界面美化
// @namespace    none
// @version      1.0.1
// @author       gogofishman
// @license      MIT
// @match        *://*.bilibili.com/video/*
// @run-at        document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

/*! For license information please see main.js.LICENSE.txt */
(() => {
  const n = {
    257: (n, e, t) => {
      t.d(e, { Z: () => l });
      const r = t(81);
      const o = t.n(r);
      const a = t(645);
      const i = t.n(a)()(o());
      i.push([
        n.id,
        'body {\n    overflow-x: hidden !important;\n}\n\n.video-container-v1 .left-container {\n    display: grid;\n    position: absolute !important;\n    box-sizing: border-box;\n    left: 0;\n    width: 100%;\n    padding-left: 20px;\n    padding-right: 20px;\n    background-color: white;\n    z-index: 0 !important;\n}\n\n.bpx-player-container {\n    box-shadow: 0 0 0 !important;\n    -webkit-box-shadow: 0 0 0 !important;\n}\n\n#playerWrap {\n    order: -1;\n    background-color: black;\n    height: 80vh !important;\n    min-height: 480px !important;\n    z-index: 99 !important;\n}\n\n#bilibili-player {\n    width: 100% !important;\n    height: 100% !important;\n}\n\n#bilibili-player-placeholder {\n    width: 150% !important;\n    left: -20px !important;\n}\n\n#bilibili-player-placeholder-bottom {\n    display: none !important;\n}\n\n#bottomDiv {\n    display: flex;\n    justify-content: center;\n}',
        '']);
      const l = i;
    },
    818: (n, e, t) => {
      t.d(e, { Z: () => l });
      const r = t(81);
      const o = t.n(r);
      const a = t(645);
      const i = t.n(a)()(o());
      i.push([
        n.id,
        '.video-container-v1 .right-container {\n    z-index: -20;\n    margin-left: 60px !important;\n}\n\n/*去广告*/\n.video-card-ad-small {\n    display: none !important;\n}\n#slide_ad{\n    display: none!important;\n}',
        '']);
      const l = i;
    },
    504: (n, e, t) => {
      t.d(e, { Z: () => l });
      const r = t(81);
      const o = t.n(r);
      const a = t(645);
      const i = t.n(a)()(o());
      i.push([
        n.id,
        '.mini-header {\n    background-color: black !important;\n}\n\n.bili-header span {\n    color: white !important;\n}\n\n.mini-header .right-entry .right-entry__outside .right-entry-icon {\n    color: white !important;\n}\n\n.download-entry {\n    display: none !important;\n}\n\n.mini-header__arrow {\n    color: white !important;\n}',
        '']);
      const l = i;
    },
    208: (n, e, t) => {
      t.d(e, { Z: () => l });
      const r = t(81);
      const o = t.n(r);
      const a = t(645);
      const i = t.n(a)()(o());
      i.push([
        n.id,
        '.video-title {\n    font-size: 23px !important;\n    color: black !important;\n    font-weight: bold !important;\n}\n\n#leftDiv {\n    width: 70vw;\n    max-width: 1550px;\n}\n\n/*去广告*/\n.video-container-v1 #bannerAd {\n    display: none !important;\n}\n\n.reply-header .reply-notice {\n    display: none !important;\n}',
        '']);
      const l = i;
    },
    746: (n, e, t) => {
      t.d(e, { Z: () => l });
      const r = t(81);
      const o = t.n(r);
      const a = t(645);
      const i = t.n(a)()(o());
      i.push([
        n.id,
        '.bpx-player-sending-area:before {\n    display: none !important;\n}\n\n.bpx-player-sending-area {\n    position: absolute;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    opacity: 0;\n    transition: opacity 0.5s;\n}\n\n.bpx-player-sending-bar {\n    width: 50vw !important;\n    background: rgba(20, 20, 20, 0.7) !important;\n    box-shadow: 0 2px 8px 5px rgba(20, 20, 20, 0.5) !important;\n    padding-left: 50px !important;\n    padding-right: 80px !important;\n    border-radius: 0 0 25px 25px !important;\n    z-index: 9999!important;\n}\n\n.bpx-player-video-info {\n    color: rgb(230, 230, 230) !important;\n}\n\n#sendingHover {\n    position: absolute;\n    height: 25%;\n    width: 100%;\n}\n\n#sendingHover:hover .bpx-player-sending-area {\n    opacity: 1 !important;\n}\n\n/*变色*/\n.bpx-player-video-inputbar {\n    background: rgba(20, 20, 20, 0.9) !important;\n    border: 1.5px solid rgba(251, 114, 153, 0.5) !important;\n}\n\n.bpx-player-sending-bar .bpx-player-video-inputbar .bpx-player-dm-input {\n    color: rgb(251, 114, 153) !important;\n}\n\n.bui-button .bui-area{\n    background-color: rgba(251, 114, 153, 0.8) !important;\n}',
        '']);
      const l = i;
    },
    645: (n) => {
      n.exports = function (n) {
        const e = [];
        return e.toString = function () {
          return this.map(((e) => {
            let t = '';
            const r = void 0 !== e[5];
            return e[4] && (t += '@supports ('.concat(e[4], ') {')), e[2] &&
            (t += '@media '.concat(e[2], ' {')), r &&
            (t += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '',
              ' {')), t += n(e), r && (t += '}'), e[2] && (t += '}'), e[4] &&
            (t += '}'), t;
          })).join('');
        }, e.i = function (n, t, r, o, a) {
          typeof n === 'string' && (n = [[null, n, void 0]]);
          const i = {};
          if (r) for (let l = 0; l < this.length; l++) {
            const d = this[l][0];
            d != null && (i[d] = !0);
          }
          for (let s = 0; s < n.length; s++) {
            const p = [].concat(n[s]);
            r && i[p[0]] || (void 0 !== a && (void 0 === p[5] ||
            (p[1] = '@layer'.concat(p[5].length > 0 ? ' '.concat(p[5]) : '',
              ' {').concat(p[1], '}')), p[5] = a), t &&
            (p[2] ? (p[1] = '@media '.concat(p[2], ' {')
              .concat(p[1], '}'), p[2] = t) : p[2] = t), o &&
            (p[4] ? (p[1] = '@supports ('.concat(p[4], ') {')
              .concat(p[1], '}'), p[4] = o) : p[4] = ''.concat(o)), e.push(p));
          }
        }, e;
      };
    },
    81: (n) => { n.exports = function (n) { return n[1]; }; },
    379: (n) => {
      const e = [];
      
      function t (n) {
        for (var t = -1, r = 0; r < e.length; r++) if (e[r].identifier === n) {
          t = r;
          break;
        }
        return t;
      }
      
      function r (n, r) {
        for (var a = {}, i = [], l = 0; l < n.length; l++) {
          const d = n[l];
          const s = r.base ? d[0] + r.base : d[0];
          const p = a[s] || 0;
          const c = ''.concat(s, ' ').concat(p);
          a[s] = p + 1;
          const u = t(c);
          const m = {
            css: d[1],
            media: d[2],
            sourceMap: d[3],
            supports: d[4],
            layer: d[5],
          };
          if (u !== -1) e[u].references++, e[u].updater(m); else {
            const f = o(m, r);
            r.byIndex = l, e.splice(l, 0,
              { identifier: c, updater: f, references: 1 });
          }
          i.push(c);
        }
        return i;
      }
      
      function o (n, e) {
        const t = e.domAPI(e);
        return t.update(n), function (e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap ===
              n.sourceMap && e.supports === n.supports && e.layer ===
              n.layer) return;
            t.update(n = e);
          } else t.remove();
        };
      }
      
      n.exports = function (n, o) {
        let a = r(n = n || [], o = o || {});
        return function (n) {
          n = n || [];
          for (let i = 0; i < a.length; i++) {
            const l = t(a[i]);
            e[l].references--;
          }
          for (var d = r(n, o), s = 0; s < a.length; s++) {
            const p = t(a[s]);
            e[p].references === 0 && (e[p].updater(), e.splice(p, 1));
          }
          a = d;
        };
      };
    },
    569: (n) => {
      const e = {};
      n.exports = function (n, t) {
        const r = (function (n) {
          if (void 0 === e[n]) {
            let t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof
              window.HTMLIFrameElement) try { t = t.contentDocument.head; } catch (n) { t = null; }
            e[n] = t;
          }
          return e[n];
        }(n));
        if (!r) throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(t);
      };
    },
    216: (n) => {
      n.exports = function (n) {
        const e = document.createElement('style');
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    565: (n, e, t) => {
      n.exports = function (n) {
        const e = t.nc;
        e && n.setAttribute('nonce', e);
      };
    },
    795: (n) => {
      n.exports = function (n) {
        if (typeof document === 'undefined') return {
          update () {},
          remove () {},
        };
        const e = n.insertStyleElement(n);
        return {
          update (t) {
            !(function (n, e, t) {
              let r = '';
              t.supports &&
              (r += '@supports ('.concat(t.supports, ') {')), t.media &&
              (r += '@media '.concat(t.media, ' {'));
              const o = void 0 !== t.layer;
              o && (r += '@layer'.concat(
                t.layer.length > 0 ? ' '.concat(t.layer) : '',
                ' {')), r += t.css, o && (r += '}'), t.media &&
              (r += '}'), t.supports && (r += '}');
              const a = t.sourceMap;
              a && typeof btoa !== 'undefined' &&
              (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                ' */')), e.styleTagTransform(r, n, e.options);
            }(e, n, t));
          }, remove () {
            !(function (n) {
              if (n.parentNode === null) return !1;
              n.parentNode.removeChild(n);
            }(e));
          },
        };
      };
    },
    589: (n) => {
      n.exports = function (
        n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
  };
  const e = {};
  
  function t (r) {
    const o = e[r];
    if (void 0 !== o) return o.exports;
    const a = e[r] = { id: r, exports: {} };
    return n[r](a, a.exports, t), a.exports;
  }
  
  t.n = (n) => {
    const e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }, t.d = (n, e) => {
    for (const r in e) t.o(e, r) && !t.o(n, r) &&
    Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
  }, t.o = (n, e) => Object.prototype.hasOwnProperty.call(n,
    e), t.nc = void 0, (() => {
    function n (n) { return new Promise(((e) => setTimeout(e, n))); }
    
    const e = t(379);
    const r = t.n(e);
    const o = t(795);
    const a = t.n(o);
    const i = t(569);
    const l = t.n(i);
    const d = t(565);
    const s = t.n(d);
    const p = t(216);
    const c = t.n(p);
    const u = t(589);
    const m = t.n(u);
    const f = t(257);
    const h = {};
    h.styleTagTransform = m(), h.setAttributes = s(), h.insert = l()
      .bind(null, 'head'), h.domAPI = a(), h.insertStyleElement = c(), r()(f.Z,
      h), f.Z && f.Z.locals && f.Z.locals;
    const b = t(746);
    const y = {};
    y.styleTagTransform = m(), y.setAttributes = s(), y.insert = l()
      .bind(null, 'head'), y.domAPI = a(), y.insertStyleElement = c(), r()(b.Z,
      y), b.Z && b.Z.locals && b.Z.locals;
    const v = t(818);
    const g = {};
    g.styleTagTransform = m(), g.setAttributes = s(), g.insert = l()
      .bind(null, 'head'), g.domAPI = a(), g.insertStyleElement = c(), r()(v.Z,
      g), v.Z && v.Z.locals && v.Z.locals;
    const x = t(504);
    const w = {};
    w.styleTagTransform = m(), w.setAttributes = s(), w.insert = l()
      .bind(null, 'head'), w.domAPI = a(), w.insertStyleElement = c(), r()(x.Z,
      w), x.Z && x.Z.locals && x.Z.locals;
    const Z = t(208);
    const C = {};
    C.styleTagTransform = m(), C.setAttributes = s(), C.insert = l()
      .bind(null, 'head'), C.domAPI = a(), C.insertStyleElement = c(), r()(Z.Z,
      C), Z.Z && Z.Z.locals && Z.Z.locals, window === window.parent &&
    ('加载脚本', console.log(
      '[B站美化] - 加载脚本'), window.onload = function () {
      unsafeWindow.originSetSize = () => {}, unsafeWindow.setSize = () => {}, (async function (
        e, t = ((n) => n.remove()), r = 1, o = 50, a = 1e4) {
        let i = 0;
        let l = 0;
        const d = a / o;
        try {
          for (; i <= d;) {
            i++, await n(o);
            const a = e();
            if (a) {
              if (t(a), l < r) break;
              l++;
            }
          }
        } catch (n) { console.log('WaitUntilAction错误：', n); }
      }((() => document.getElementsByClassName(
        'left-container scroll-sticky').length > 0), (() => {}))).then((() => {
        const n = document.createElement('div');
        n.id = 'leftDiv', n.appendChild(
          document.getElementById('viewbox_report')), n.appendChild(
          document.getElementById('arc_toolbar_report')), n.appendChild(
          document.getElementsByClassName('left-container-under-player')[0]);
        const e = document.createElement('div');
        e.id = 'bottomDiv', e.appendChild(n);
        const t = document.getElementsByClassName(
          'right-container is-in-large-ab')[0];
        e.appendChild(t), t.style.zIndex = 1, document.getElementsByClassName(
          'left-container scroll-sticky')[0].appendChild(e);
        const r = document.createElement('div');
        r.id = 'sendingHover', r.appendChild(document.getElementsByClassName(
          'bpx-player-sending-area')[0]), document.querySelector(
          'div[class="bpx-player-primary-area"][aria-label="哔哩哔哩播放器"]')
          .appendChild(r);
      }));
    });
  })();
})();
