/*! For license information please see 6606.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6606],{"6392":function(t,n,o){o.d(n,{"a":function(){return createCommonjsModule},"b":function(){return i},"c":function(){return s},"g":function(){return getDefaultExportFromCjs}});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,n,o){return t(o={"path":n,"exports":{},"require":function(t,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}var s=createCommonjsModule((function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var s=typeof i;if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&t.push(a)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var u in i)n.call(i,u)&&i[u]&&t.push(u);else t.push(i.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"6606":function(t,n,o){o.r(n),o.d(n,{"taro_navigator_core":function(){return u}});var i=o(9529),s=o(4881),a=o(6392),u=function(){function e(t){(0,i.r)(this,t),this.onSuccess=(0,i.c)(this,"cuccess",7),this.onFail=(0,i.c)(this,"fail",7),this.onComplete=(0,i.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,n=t.openType,o=t.onSuccess,i=t.onFail,a=t.onComplete,u=Promise.resolve();switch(n){case"navigate":u=s.ZPm.navigateTo({"url":this.url});break;case"redirect":u=s.ZPm.redirectTo({"url":this.url});break;case"switchTab":u=s.ZPm.switchTab({"url":this.url});break;case"reLaunch":u=s.ZPm.reLaunch({"url":this.url});break;case"navigateBack":u=s.ZPm.navigateBack({"delta":this.delta});break;case"exit":u=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}u&&u.then((function(t){o.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){a.emit()}))},e.prototype.render=function(){var t,n=this.isHover,o=this.hoverClass;return(0,i.h)(i.H,{"class":(0,a.c)((t={},t[o]=n,t))})},e}();u.style=".navigator-hover{background:#efefef}"}}]);