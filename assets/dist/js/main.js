/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);




// import burgerAnimation from './utils/burgerAnimation';

document.addEventListener('DOMContentLoaded', function () {
  // fallback for ie and edge:
  Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__["default"])();
  object_fit_images__WEBPACK_IMPORTED_MODULE_1___default()();

  //fallback safari
  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();
}, false);

/***/ }),

/***/ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * css-vars-ponyfill
 * v1.17.2
 * https://github.com/jhildenbiddle/css-vars-ponyfill
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
    return arr2;
  }
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/*!
 * get-css-data
 * v1.6.3
 * https://github.com/jhildenbiddle/get-css-data
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function getUrls(urls) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var settings = {
    mimeType: options.mimeType || null,
    onBeforeSend: options.onBeforeSend || Function.prototype,
    onSuccess: options.onSuccess || Function.prototype,
    onError: options.onError || Function.prototype,
    onComplete: options.onComplete || Function.prototype
  };
  var urlArray = Array.isArray(urls) ? urls : [urls];
  var urlQueue = Array.apply(null, Array(urlArray.length)).map(function (x) {
    return null;
  });
  function isValidCss() {
    var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var isHTML = cssText.trim().charAt(0) === "<";
    return !isHTML;
  }
  function onError(xhr, urlIndex) {
    settings.onError(xhr, urlArray[urlIndex], urlIndex);
  }
  function onSuccess(responseText, urlIndex) {
    var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
    responseText = returnVal === false ? "" : returnVal || responseText;
    urlQueue[urlIndex] = responseText;
    if (urlQueue.indexOf(null) === -1) {
      settings.onComplete(urlQueue);
    }
  }
  var parser = document.createElement("a");
  urlArray.forEach(function (url, i) {
    parser.setAttribute("href", url);
    parser.href = String(parser.href);
    var isIElte9 = Boolean(document.all && !window.atob);
    var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
    if (isIElte9CORS) {
      var isSameProtocol = parser.protocol === location.protocol;
      if (isSameProtocol) {
        var xdr = new XDomainRequest();
        xdr.open("GET", url);
        xdr.timeout = 0;
        xdr.onprogress = Function.prototype;
        xdr.ontimeout = Function.prototype;
        xdr.onload = function () {
          if (isValidCss(xdr.responseText)) {
            onSuccess(xdr.responseText, i);
          } else {
            onError(xdr, i);
          }
        };
        xdr.onerror = function (err) {
          onError(xdr, i);
        };
        setTimeout(function () {
          xdr.send();
        }, 0);
      } else {
        console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
        onError(null, i);
      }
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      if (settings.mimeType && xhr.overrideMimeType) {
        xhr.overrideMimeType(settings.mimeType);
      }
      settings.onBeforeSend(xhr, url, i);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 && isValidCss(xhr.responseText)) {
            onSuccess(xhr.responseText, i);
          } else {
            onError(xhr, i);
          }
        }
      };
      xhr.send();
    }
  });
}

/**
 * Gets CSS data from <style> and <link> nodes (including @imports), then
 * returns data in order processed by DOM. Allows specifying nodes to
 * include/exclude and filtering CSS data using RegEx.
 *
 * @preserve
 * @param {object}   [options] The options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes.
 * @param {string}   [options.include] CSS selector matching <link> and <style>
 *                   nodes to include
 * @param {string}   [options.exclude] CSS selector matching <link> and <style>
 *                   nodes to exclude
 * @param {object}   [options.filter] Regular expression used to filter node CSS
 *                   data. Each block of CSS data is tested against the filter,
 *                   and only matching data is included.
 * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
 *                   collected from a stylesheet's runtime values instead of its
 *                   text content. This is required to get accurate CSS data
 *                   when a stylesheet has been modified using the deleteRule()
 *                   or insertRule() methods because these modifications will
 *                   not be reflected in the stylesheet's text content.
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments.
 * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
 *                   1) CSS text, 2) source node reference, and 3) the source
 *                   URL as arguments.
 * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
 *                   object for inspection, 2) soure node reference, and 3) the
 *                   source URL that failed (either a <link> href or an @import)
 *                   as arguments
 * @param {function} [options.onComplete] Callback after all nodes have been
 *                   processed. Passes 1) concatenated CSS text, 2) an array of
 *                   CSS text in DOM order, and 3) an array of nodes in DOM
 *                   order as arguments.
 *
 * @example
 *
 *   getCssData({
 *     rootElement: document,
 *     include    : 'style,link[rel="stylesheet"]',
 *     exclude    : '[href="skip.css"]',
 *     filter     : /red/,
 *     useCSSOM   : false,
 *     onBeforeSend(xhr, node, url) {
 *       // ...
 *     }
 *     onSuccess(cssText, node, url) {
 *       // ...
 *     }
 *     onError(xhr, node, url) {
 *       // ...
 *     },
 *     onComplete(cssText, cssArray, nodeArray) {
 *       // ...
 *     }
 *   });
 */
function getCssData(options) {
  var regex = {
    cssComments: /\/\*[\s\S]+?\*\//g,
    cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
  };
  var settings = {
    rootElement: options.rootElement || document,
    include: options.include || 'style,link[rel="stylesheet"]',
    exclude: options.exclude || null,
    filter: options.filter || null,
    useCSSOM: options.useCSSOM || false,
    onBeforeSend: options.onBeforeSend || Function.prototype,
    onSuccess: options.onSuccess || Function.prototype,
    onError: options.onError || Function.prototype,
    onComplete: options.onComplete || Function.prototype
  };
  var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function (node) {
    return !matchesSelector(node, settings.exclude);
  });
  var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function (x) {
    return null;
  });
  function handleComplete() {
    var isComplete = cssArray.indexOf(null) === -1;
    if (isComplete) {
      var cssText = cssArray.join("");
      settings.onComplete(cssText, cssArray, sourceNodes);
    }
  }
  function handleSuccess(cssText, cssIndex, node, sourceUrl) {
    var returnVal = settings.onSuccess(cssText, node, sourceUrl);
    cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
    resolveImports(cssText, node, sourceUrl, function (resolvedCssText, errorData) {
      if (cssArray[cssIndex] === null) {
        errorData.forEach(function (data) {
          return settings.onError(data.xhr, node, data.url);
        });
        if (!settings.filter || settings.filter.test(resolvedCssText)) {
          cssArray[cssIndex] = resolvedCssText;
        } else {
          cssArray[cssIndex] = "";
        }
        handleComplete();
      }
    });
  }
  function parseImportData(cssText, baseUrl) {
    var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var importData = {};
    importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function (rule) {
      return ignoreRules.indexOf(rule) === -1;
    });
    importData.urls = importData.rules.map(function (rule) {
      return rule.replace(regex.cssImports, "$1");
    });
    importData.absoluteUrls = importData.urls.map(function (url) {
      return getFullUrl(url, baseUrl);
    });
    importData.absoluteRules = importData.rules.map(function (rule, i) {
      var oldUrl = importData.urls[i];
      var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
      return rule.replace(oldUrl, newUrl);
    });
    return importData;
  }
  function resolveImports(cssText, node, baseUrl, callbackFn) {
    var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var importData = parseImportData(cssText, baseUrl, __errorRules);
    if (importData.rules.length) {
      getUrls(importData.absoluteUrls, {
        onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
          settings.onBeforeSend(xhr, node, url);
        },
        onSuccess: function onSuccess(cssText, url, urlIndex) {
          var returnVal = settings.onSuccess(cssText, node, url);
          cssText = returnVal === false ? "" : returnVal || cssText;
          var responseImportData = parseImportData(cssText, url, __errorRules);
          responseImportData.rules.forEach(function (rule, i) {
            cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
          });
          return cssText;
        },
        onError: function onError(xhr, url, urlIndex) {
          __errorData.push({
            xhr: xhr,
            url: url
          });
          __errorRules.push(importData.rules[urlIndex]);
          resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
        },
        onComplete: function onComplete(responseArray) {
          responseArray.forEach(function (importText, i) {
            cssText = cssText.replace(importData.rules[i], importText);
          });
          resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
        }
      });
    } else {
      callbackFn(cssText, __errorData);
    }
  }
  if (sourceNodes.length) {
    sourceNodes.forEach(function (node, i) {
      var linkHref = node.getAttribute("href");
      var linkRel = node.getAttribute("rel");
      var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase() === "stylesheet";
      var isStyle = node.nodeName === "STYLE";
      if (isLink) {
        getUrls(linkHref, {
          mimeType: "text/css",
          onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
            settings.onBeforeSend(xhr, node, url);
          },
          onSuccess: function onSuccess(cssText, url, urlIndex) {
            var sourceUrl = getFullUrl(linkHref, location.href);
            handleSuccess(cssText, i, node, sourceUrl);
          },
          onError: function onError(xhr, url, urlIndex) {
            cssArray[i] = "";
            settings.onError(xhr, node, url);
            handleComplete();
          }
        });
      } else if (isStyle) {
        var cssText = node.textContent;
        if (settings.useCSSOM) {
          cssText = Array.apply(null, node.sheet.cssRules).map(function (rule) {
            return rule.cssText;
          }).join("");
        }
        handleSuccess(cssText, i, node, location.href);
      } else {
        cssArray[i] = "";
        handleComplete();
      }
    });
  } else {
    settings.onComplete("", []);
  }
}
function getFullUrl(url) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
  var d = document.implementation.createHTMLDocument("");
  var b = d.createElement("base");
  var a = d.createElement("a");
  d.head.appendChild(b);
  d.body.appendChild(a);
  b.href = base;
  a.href = url;
  return a.href;
}
function matchesSelector(elm, selector) {
  var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
  return matches.call(elm, selector);
}
var balancedMatch = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);
  var r = range(a, b, str);
  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}
function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}
balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;
  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;
    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b, i + 1);
      }
      i = ai < bi && ai >= 0 ? ai : bi;
    }
    if (begs.length) {
      result = [left, right];
    }
  }
  return result;
}
function parseCss(css) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaults = {
    onlyVars: false,
    removeComments: false
  };
  var settings = _extends({}, defaults, options);
  var errors = [];
  function error(msg) {
    throw new Error("CSS parse error: ".concat(msg));
  }
  function match(re) {
    var m = re.exec(css);
    if (m) {
      css = css.slice(m[0].length);
      return m;
    }
  }
  function open() {
    return match(/^{\s*/);
  }
  function close() {
    return match(/^}/);
  }
  function whitespace() {
    match(/^\s*/);
  }
  function comment() {
    whitespace();
    if (css[0] !== "/" || css[1] !== "*") {
      return;
    }
    var i = 2;
    while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
      i++;
    }
    if (!css[i]) {
      return error("end of comment is missing");
    }
    var str = css.slice(2, i);
    css = css.slice(i + 2);
    return {
      type: "comment",
      comment: str
    };
  }
  function comments() {
    var cmnts = [];
    var c;
    while (c = comment()) {
      cmnts.push(c);
    }
    return settings.removeComments ? [] : cmnts;
  }
  function selector() {
    whitespace();
    while (css[0] === "}") {
      error("extra closing bracket");
    }
    var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
    if (m) {
      return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
        return m.replace(/,/g, "‌");
      }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
        return s.replace(/\u200C/g, ",");
      });
    }
  }
  function declaration() {
    match(/^([;\s]*)+/);
    var comment_regexp = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g;
    var prop = match(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) {
      return;
    }
    prop = prop[0].trim();
    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    }
    var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
    var ret = {
      type: "declaration",
      property: prop.replace(comment_regexp, ""),
      value: val ? val[0].replace(comment_regexp, "").trim() : ""
    };
    match(/^[;\s]*/);
    return ret;
  }
  function declarations() {
    if (!open()) {
      return error("missing '{'");
    }
    var d;
    var decls = comments();
    while (d = declaration()) {
      decls.push(d);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("missing '}'");
    }
    return decls;
  }
  function keyframe() {
    whitespace();
    var vals = [];
    var m;
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (vals.length) {
      return {
        type: "keyframe",
        values: vals,
        declarations: declarations()
      };
    }
  }
  function at_keyframes() {
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) {
      return;
    }
    var vendor = m[1];
    m = match(/^([-\w]+)\s*/);
    if (!m) {
      return error("@keyframes missing name");
    }
    var name = m[1];
    if (!open()) {
      return error("@keyframes missing '{'");
    }
    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) {
      return error("@keyframes missing '}'");
    }
    return {
      type: "keyframes",
      name: name,
      vendor: vendor,
      keyframes: frames
    };
  }
  function at_page() {
    var m = match(/^@page */);
    if (m) {
      var sel = selector() || [];
      return {
        type: "page",
        selectors: sel,
        declarations: declarations()
      };
    }
  }
  function at_fontface() {
    var m = match(/^@font-face\s*/);
    if (m) {
      return {
        type: "font-face",
        declarations: declarations()
      };
    }
  }
  function at_supports() {
    var m = match(/^@supports *([^{]+)/);
    if (m) {
      return {
        type: "supports",
        supports: m[1].trim(),
        rules: rules()
      };
    }
  }
  function at_host() {
    var m = match(/^@host\s*/);
    if (m) {
      return {
        type: "host",
        rules: rules()
      };
    }
  }
  function at_media() {
    var m = match(/^@media *([^{]+)/);
    if (m) {
      return {
        type: "media",
        media: m[1].trim(),
        rules: rules()
      };
    }
  }
  function at_custom_m() {
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (m) {
      return {
        type: "custom-media",
        name: m[1].trim(),
        media: m[2].trim()
      };
    }
  }
  function at_document() {
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (m) {
      return {
        type: "document",
        document: m[2].trim(),
        vendor: m[1] ? m[1].trim() : null,
        rules: rules()
      };
    }
  }
  function at_x() {
    var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
    if (m) {
      return {
        type: m[1],
        name: m[2].trim()
      };
    }
  }
  function at_rule() {
    whitespace();
    if (css[0] === "@") {
      var ret = at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();
      if (ret && settings.onlyVars) {
        var hasVarFunc = false;
        if (ret.declarations) {
          hasVarFunc = ret.declarations.some(function (decl) {
            return /var\(/.test(decl.value);
          });
        } else {
          var arr = ret.keyframes || ret.rules || [];
          hasVarFunc = arr.some(function (obj) {
            return (obj.declarations || []).some(function (decl) {
              return /var\(/.test(decl.value);
            });
          });
        }
        return hasVarFunc ? ret : {};
      }
      return ret;
    }
  }
  function rule() {
    if (settings.onlyVars) {
      var balancedMatch$$1 = balancedMatch("{", "}", css);
      if (balancedMatch$$1) {
        var hasVarDecl = balancedMatch$$1.pre.indexOf(":root") !== -1 && /--\S*\s*:/.test(balancedMatch$$1.body);
        var hasVarFunc = /var\(/.test(balancedMatch$$1.body);
        if (!hasVarDecl && !hasVarFunc) {
          css = css.slice(balancedMatch$$1.end + 1);
          return {};
        }
      }
    }
    var sel = selector() || [];
    var decls = !settings.onlyVars ? declarations() : declarations().filter(function (decl) {
      var hasVarDecl = sel.some(function (s) {
        return s.indexOf(":root") !== -1;
      }) && /^--\S/.test(decl.property);
      var hasVarFunc = /var\(/.test(decl.value);
      return hasVarDecl || hasVarFunc;
    });
    if (!sel.length) {
      error("selector missing");
    }
    return {
      type: "rule",
      selectors: sel,
      declarations: decls
    };
  }
  function rules(core) {
    if (!core && !open()) {
      return error("missing '{'");
    }
    var node;
    var rules = comments();
    while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
      if (node.type) {
        rules.push(node);
      }
      rules = rules.concat(comments());
    }
    if (!core && !close()) {
      return error("missing '}'");
    }
    return rules;
  }
  return {
    type: "stylesheet",
    stylesheet: {
      rules: rules(true),
      errors: errors
    }
  };
}
function stringifyCss(tree) {
  var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var cb = arguments.length > 2 ? arguments[2] : undefined;
  var renderMethods = {
    charset: function charset(node) {
      return "@charset " + node.name + ";";
    },
    comment: function comment(node) {
      return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
    },
    "custom-media": function customMedia(node) {
      return "@custom-media " + node.name + " " + node.media + ";";
    },
    declaration: function declaration(node) {
      return node.property + ":" + node.value + ";";
    },
    document: function document(node) {
      return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
    },
    "font-face": function fontFace(node) {
      return "@font-face" + "{" + visit(node.declarations) + "}";
    },
    host: function host(node) {
      return "@host" + "{" + visit(node.rules) + "}";
    },
    import: function _import(node) {
      return "@import " + node.name + ";";
    },
    keyframe: function keyframe(node) {
      return node.values.join(",") + "{" + visit(node.declarations) + "}";
    },
    keyframes: function keyframes(node) {
      return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
    },
    media: function media(node) {
      return "@media " + node.media + "{" + visit(node.rules) + "}";
    },
    namespace: function namespace(node) {
      return "@namespace " + node.name + ";";
    },
    page: function page(node) {
      return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
    },
    rule: function rule(node) {
      var decls = node.declarations;
      if (decls.length) {
        return node.selectors.join(",") + "{" + visit(decls) + "}";
      }
    },
    supports: function supports(node) {
      return "@supports " + node.supports + "{" + visit(node.rules) + "}";
    }
  };
  function visit(nodes) {
    var buf = "";
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (cb) {
        cb(n);
      }
      var txt = renderMethods[n.type](n);
      if (txt) {
        buf += txt;
        if (txt.length && n.selectors) {
          buf += delim;
        }
      }
    }
    return buf;
  }
  return visit(tree.stylesheet.rules);
}
function walkCss(node, fn) {
  node.rules.forEach(function (rule) {
    if (rule.rules) {
      walkCss(rule, fn);
      return;
    }
    if (rule.keyframes) {
      rule.keyframes.forEach(function (keyframe) {
        if (keyframe.type === "keyframe") {
          fn(keyframe.declarations, rule);
        }
      });
      return;
    }
    if (!rule.declarations) {
      return;
    }
    fn(rule.declarations, node);
  });
}
var VAR_PROP_IDENTIFIER = "--";
var VAR_FUNC_IDENTIFIER = "var";
var variableStore = {
  dom: {},
  temp: {},
  user: {}
};
function transformVars(cssText) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaults = {
    fixNestedCalc: true,
    onlyVars: false,
    persist: false,
    preserve: false,
    variables: {},
    onWarning: function onWarning() {}
  };
  var settings = _extends({}, defaults, options);
  var map = settings.persist ? variableStore.dom : variableStore.temp = JSON.parse(JSON.stringify(variableStore.dom));
  var cssTree = parseCss(cssText, {
    onlyVars: settings.onlyVars
  });
  cssTree.stylesheet.rules.forEach(function (rule) {
    var varNameIndices = [];
    if (rule.type !== "rule") {
      return;
    }
    if (rule.selectors.length !== 1 || rule.selectors[0] !== ":root") {
      return;
    }
    rule.declarations.forEach(function (decl, i) {
      var prop = decl.property;
      var value = decl.value;
      if (prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
        map[prop] = value;
        varNameIndices.push(i);
      }
    });
    if (!settings.preserve) {
      for (var i = varNameIndices.length - 1; i >= 0; i--) {
        rule.declarations.splice(varNameIndices[i], 1);
      }
    }
  });
  Object.keys(variableStore.user).forEach(function (key) {
    map[key] = variableStore.user[key];
  });
  if (Object.keys(settings.variables).length) {
    var newRule = {
      declarations: [],
      selectors: [":root"],
      type: "rule"
    };
    Object.keys(settings.variables).forEach(function (key) {
      var prop = "--".concat(key.replace(/^-+/, ""));
      var value = settings.variables[key];
      if (settings.persist) {
        variableStore.user[prop] = value;
      }
      if (map[prop] !== value) {
        map[prop] = value;
        newRule.declarations.push({
          type: "declaration",
          property: prop,
          value: value
        });
      }
    });
    if (settings.preserve && newRule.declarations.length) {
      cssTree.stylesheet.rules.push(newRule);
    }
  }
  walkCss(cssTree.stylesheet, function (declarations, node) {
    var decl;
    var resolvedValue;
    var value;
    for (var i = 0; i < declarations.length; i++) {
      decl = declarations[i];
      value = decl.value;
      if (decl.type !== "declaration") {
        continue;
      }
      if (!value || value.indexOf(VAR_FUNC_IDENTIFIER + "(") === -1) {
        continue;
      }
      resolvedValue = resolveValue(value, map, settings);
      if (resolvedValue !== decl.value) {
        if (!settings.preserve) {
          decl.value = resolvedValue;
        } else {
          declarations.splice(i, 0, {
            type: decl.type,
            property: decl.property,
            value: resolvedValue
          });
          i++;
        }
      }
    }
  });
  if (settings.fixNestedCalc) {
    fixNestedCalc(cssTree.stylesheet.rules);
  }
  return stringifyCss(cssTree);
}
function fixNestedCalc(rules) {
  var reCalcExp = /(-[a-z]+-)?calc\(/;
  rules.forEach(function (rule) {
    if (rule.declarations) {
      rule.declarations.forEach(function (decl) {
        var oldValue = decl.value;
        var newValue = "";
        while (reCalcExp.test(oldValue)) {
          var rootCalc = balancedMatch("calc(", ")", oldValue || "");
          oldValue = oldValue.slice(rootCalc.end);
          while (reCalcExp.test(rootCalc.body)) {
            var nestedCalc = balancedMatch(reCalcExp, ")", rootCalc.body);
            rootCalc.body = "".concat(nestedCalc.pre, "(").concat(nestedCalc.body, ")").concat(nestedCalc.post);
          }
          newValue += "".concat(rootCalc.pre, "calc(").concat(rootCalc.body);
          newValue += !reCalcExp.test(oldValue) ? ")".concat(rootCalc.post) : "";
        }
        decl.value = newValue || decl.value;
      });
    }
  });
}
function resolveValue(value, map) {
  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var __recursiveFallback = arguments.length > 3 ? arguments[3] : undefined;
  if (value.indexOf("var(") === -1) {
    return value;
  }
  var valueData = balancedMatch("(", ")", value);
  function resolveFunc(value) {
    var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
    var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
    var match = map.hasOwnProperty(name) ? String(map[name]) : undefined;
    var replacement = match || (fallback ? String(fallback) : undefined);
    var unresolvedFallback = __recursiveFallback || value;
    if (!match) {
      settings.onWarning('variable "'.concat(name, '" is undefined'));
    }
    if (replacement && replacement !== "undefined" && replacement.length > 0) {
      return resolveValue(replacement, map, settings, unresolvedFallback);
    } else {
      return "var(".concat(unresolvedFallback, ")");
    }
  }
  if (!valueData) {
    if (value.indexOf("var(") !== -1) {
      settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
    }
    return value;
  } else if (valueData.pre.slice(-3) === "var") {
    var isEmptyVarFunc = valueData.body.trim().length === 0;
    if (isEmptyVarFunc) {
      settings.onWarning("var() must contain a non-whitespace string");
      return value;
    } else {
      return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, map, settings);
    }
  } else {
    return valueData.pre + "(".concat(resolveValue(valueData.body, map, settings), ")") + resolveValue(valueData.post, map, settings);
  }
}
var name = "css-vars-ponyfill";
var isBrowser = typeof window !== "undefined";
var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
var consoleMsgPrefix = "cssVars(): ";
var defaults = {
  rootElement: isBrowser ? document : null,
  shadowDOM: false,
  include: "style,link[rel=stylesheet]",
  exclude: "",
  variables: {},
  fixNestedCalc: true,
  onlyLegacy: true,
  onlyVars: false,
  preserve: false,
  silent: false,
  updateDOM: true,
  updateURLs: true,
  watch: null,
  onBeforeSend: function onBeforeSend() {},
  onSuccess: function onSuccess() {},
  onWarning: function onWarning() {},
  onError: function onError() {},
  onComplete: function onComplete() {}
};
var regex = {
  cssComments: /\/\*[\s\S]+?\*\//g,
  cssKeyframes: /@(?:-\w*-)?keyframes/,
  cssRootRules: /(?::root\s*{\s*[^}]*})/g,
  cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
  cssVars: /(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
};
var cssVarsObserver = null;
var debounceTimer = null;
var isShadowDOMReady = false;

/**
 * Fetches, parses, and transforms CSS custom properties from specified
 * <style> and <link> elements into static values, then appends a new <style>
 * element with static values to the DOM to provide CSS custom property
 * compatibility for legacy browsers. Also provides a single interface for
 * live updates of runtime values in both modern and legacy browsers.
 *
 * @preserve
 * @param {object}   [options] Options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes.
 * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
 *                   and <style> nodes will be processed.
 * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
 *                   matching <link re="stylesheet"> and <style> nodes to
 *                   process
 * @param {string}   [options.exclude] CSS selector matching <link
 *                   rel="stylehseet"> and <style> nodes to exclude from those
 *                   matches by options.include
 * @param {object}   [options.variables] A map of custom property name/value
 *                   pairs. Property names can omit or include the leading
 *                   double-hyphen (—), and values specified will override
 *                   previous values.
 * @param {boolean}  [options.fixNestedCalc=true] Removes nested 'calc' keywords
 *                   for legacy browser compatibility.
 * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
 *                   only generate legacy-compatible CSS in browsers that lack
 *                   native support (i.e., legacy browsers)
 * @param {boolean}  [options.onlyVars=false] Determines if CSS rulesets and
 *                   declarations without a custom property value should be
 *                   removed from the ponyfill-generated CSS
 * @param {boolean}  [options.preserve=false] Determines if the original CSS
 *                   custom property declaration will be retained in the
 *                   ponyfill-generated CSS.
 * @param {boolean}  [options.silent=false] Determines if warning and error
 *                   messages will be displayed on the console
 * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
 *                   update the DOM after processing CSS custom properties
 * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
 *                   convert relative url() paths to absolute urls.
 * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
 *                   be created that will execute the ponyfill when a <link> or
 *                   <style> DOM mutation is observed.
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments.
 * @param {function} [options.onSuccess] Callback after CSS data has been
 *                   collected from each node and before CSS custom properties
 *                   have been transformed. Allows modifying the CSS data before
 *                   it is transformed by returning any string value (or false
 *                   to skip). Passes 1) CSS text, 2) source node reference, and
 *                   3) the source URL as arguments.
 * @param {function} [options.onWarning] Callback after each CSS parsing warning
 *                   has occurred. Passes 1) a warning message as an argument.
 * @param {function} [options.onError] Callback after a CSS parsing error has
 *                   occurred or an XHR request has failed. Passes 1) an error
 *                   message, and 2) source node reference, 3) xhr, and 4 url as
 *                   arguments.
 * @param {function} [options.onComplete] Callback after all CSS has been
 *                   processed, legacy-compatible CSS has been generated, and
 *                   (optionally) the DOM has been updated. Passes 1) a CSS
 *                   string with CSS variable values resolved, 2) a reference to
 *                   the appended <style> node, 3) an object containing all
 *                   custom properies names and values, and 4) the ponyfill
 *                   execution time in milliseconds.
 *
 * @example
 *
 *   cssVars({
 *     rootElement  : document,
 *     shadowDOM    : false,
 *     include      : 'style,link[rel="stylesheet"]',
 *     exclude      : '',
 *     variables    : {},
 *     fixNestedCalc: true,
 *     onlyLegacy   : true,
 *     onlyVars     : false,
 *     preserve     : false,
 *     silent       : false,
 *     updateDOM    : true,
 *     updateURLs   : true,
 *     watch        : false,
 *     onBeforeSend(xhr, node, url) {},
 *     onSuccess(cssText, node, url) {},
 *     onWarning(message) {},
 *     onError(message, node, xhr, url) {},
 *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
 *   });
 */
function cssVars() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var settings = _extends({}, defaults, options);
  var styleNodeId = name;
  settings.exclude = "#".concat(styleNodeId) + (settings.exclude ? ",".concat(settings.exclude) : "");
  settings._benchmark = !settings._benchmark ? getTimeStamp() : settings._benchmark;
  function handleError(message, sourceNode, xhr, url) {
    if (!settings.silent) {
      console.error("".concat(consoleMsgPrefix).concat(message, "\n"), sourceNode);
    }
    settings.onError(message, sourceNode, xhr, url);
  }
  function handleWarning(message) {
    if (!settings.silent) {
      console.warn("".concat(consoleMsgPrefix).concat(message));
    }
    settings.onWarning(message);
  }
  if (!isBrowser) {
    return;
  }
  if (settings.watch === false && cssVarsObserver) {
    cssVarsObserver.disconnect();
  }
  if (settings.watch) {
    addMutationObserver(settings, styleNodeId);
    cssVarsDebounced(settings);
  } else if (document.readyState !== "loading") {
    var isShadowElm = settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host;
    if (isNativeSupport && settings.onlyLegacy) {
      if (settings.updateDOM) {
        var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
        Object.keys(settings.variables).forEach(function (key) {
          var prop = "--".concat(key.replace(/^-+/, ""));
          var value = settings.variables[key];
          targetElm.style.setProperty(prop, value);
        });
      }
    } else if (isShadowElm && !isShadowDOMReady) {
      getCssData({
        rootElement: defaults.rootElement,
        include: defaults.include,
        exclude: settings.exclude,
        onSuccess: function onSuccess(cssText, node, url) {
          var cssRootDecls = (cssText.match(regex.cssRootRules) || []).join("");
          return cssRootDecls || false;
        },
        onComplete: function onComplete(cssText, cssArray, nodeArray) {
          transformVars(cssText, {
            persist: true
          });
          isShadowDOMReady = true;
          cssVars(settings);
        }
      });
    } else {
      getCssData({
        rootElement: settings.rootElement,
        include: settings.include,
        exclude: settings.exclude,
        filter: settings.onlyVars ? regex.cssVars : null,
        onBeforeSend: settings.onBeforeSend,
        onSuccess: function onSuccess(cssText, node, url) {
          var returnVal = settings.onSuccess(cssText, node, url);
          cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
          node.setAttribute("data-cssvars", "");
          if (settings.updateURLs) {
            var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
            cssUrls.forEach(function (cssUrl) {
              var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
              var newUrl = getFullUrl$1(oldUrl, url);
              cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
            });
          }
          return cssText;
        },
        onError: function onError(xhr, node, url) {
          var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
          var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
          var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
          handleError(errorMsg, node, xhr, responseUrl);
        },
        onComplete: function onComplete(cssText, cssArray, nodeArray) {
          var cssMarker = /\/\*__CSSVARSPONYFILL-(\d+)__\*\//g;
          var cssSettings = JSON.stringify({
            include: settings.include,
            exclude: settings.exclude,
            variables: settings.variables,
            fixNestedCalc: settings.fixNestedCalc,
            onlyVars: settings.onlyVars,
            preserve: settings.preserve,
            silent: settings.silent,
            updateURLs: settings.updateURLs
          });
          var styleNode = settings.rootElement.querySelector("#".concat(styleNodeId)) || document.createElement("style");
          var prevData = styleNode.__cssVars || {};
          var isSameData = prevData.cssText === cssText && prevData.settings === cssSettings;
          var hasKeyframesWithVars;
          if (isSameData) {
            cssText = styleNode.textContent;
            if (!settings.silent) {
              console.info("".concat(consoleMsgPrefix, "No changes"), styleNode);
            }
          } else {
            styleNode.__cssVars = {
              cssText: cssText,
              settings: cssSettings
            };
            cssText = cssArray.map(function (css, i) {
              return regex.cssVars.test(css) ? css : "/*__CSSVARSPONYFILL-".concat(i, "__*/");
            }).join("");
            try {
              cssText = transformVars(cssText, {
                fixNestedCalc: settings.fixNestedCalc,
                onlyVars: settings.onlyVars,
                persist: settings.updateDOM,
                preserve: settings.preserve,
                variables: settings.variables,
                onWarning: handleWarning
              });
              hasKeyframesWithVars = regex.cssKeyframes.test(cssText);
              cssText = cssText.replace(cssMarker, function (match, group1) {
                return cssArray[group1];
              });
            } catch (err) {
              var errorThrown = false;
              cssArray.forEach(function (cssText, i) {
                try {
                  cssText = transformVars(cssText, settings);
                } catch (err) {
                  var errorNode = nodeArray[i - 0];
                  errorThrown = true;
                  handleError(err.message, errorNode);
                }
              });
              if (!errorThrown) {
                handleError(err.message || err);
              }
            }
          }
          if (settings.shadowDOM) {
            var elms = [settings.rootElement].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));
            for (var i = 0, elm; elm = elms[i]; ++i) {
              if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                var shadowSettings = _extends({}, settings, {
                  rootElement: elm.shadowRoot,
                  variables: variableStore.dom
                });
                cssVars(shadowSettings);
              }
            }
          }
          if (!isSameData && nodeArray && nodeArray.length) {
            var cssNodes = settings.rootElement.querySelectorAll("link[data-cssvars],style[data-cssvars]") || settings.rootElement.querySelectorAll('link[rel+="stylesheet"],style');
            var lastNode = cssNodes ? cssNodes[cssNodes.length - 1] : null;
            if (lastNode) {
              lastNode.parentNode.insertBefore(styleNode, lastNode.nextSibling);
            } else {
              var targetNode = settings.rootElement.head || settings.rootElement.body || settings.rootElement;
              targetNode.appendChild(styleNode);
            }
            if (settings.updateDOM) {
              styleNode.setAttribute("id", styleNodeId);
              styleNode.textContent = cssText;
              if (hasKeyframesWithVars) {
                fixKeyframes(settings.rootElement);
              }
            }
            settings.onComplete(cssText, styleNode, JSON.parse(JSON.stringify(settings.updateDOM ? variableStore.dom : variableStore.temp)), getTimeStamp() - settings._benchmark);
          }
        }
      });
    }
  } else {
    document.addEventListener("DOMContentLoaded", function init(evt) {
      cssVars(options);
      document.removeEventListener("DOMContentLoaded", init);
    });
  }
}
function cssVarsDebounced(settings) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function () {
    settings._benchmark = null;
    cssVars(settings);
  }, 100);
}
function addMutationObserver(settings, ignoreId) {
  if (!window.MutationObserver) {
    return;
  }
  var isLink = function isLink(node) {
    return node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
  };
  var isStyle = function isStyle(node) {
    return node.tagName === "STYLE" && (ignoreId ? node.id !== ignoreId : true);
  };
  if (cssVarsObserver) {
    cssVarsObserver.disconnect();
  }
  settings.watch = defaults.watch;
  cssVarsObserver = new MutationObserver(function (mutations) {
    var hasCSSMutation = mutations.some(function (mutation) {
      var isCSSMutation = false;
      if (mutation.type === "attributes") {
        isCSSMutation = isLink(mutation.target) || isStyle(mutation.target);
      } else if (mutation.type === "childList") {
        var addedNodes = Array.apply(null, mutation.addedNodes);
        var removedNodes = Array.apply(null, mutation.removedNodes);
        isCSSMutation = [].concat(addedNodes, removedNodes).some(function (node) {
          var isValidLink = isLink(node) && !node.disabled;
          var isValidStyle = isStyle(node) && regex.cssVars.test(node.textContent);
          return isValidLink || isValidStyle;
        });
      }
      return isCSSMutation;
    });
    if (hasCSSMutation) {
      cssVarsDebounced(settings);
    }
  });
  cssVarsObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["disabled", "href"],
    childList: true,
    subtree: true
  });
}
function fixKeyframes(rootElement) {
  var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (prop) {
    return getComputedStyle(document.body)[prop];
  })[0];
  if (animationNameProp) {
    var allNodes = rootElement.getElementsByTagName("*");
    var keyframeNodes = [];
    var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
    for (var i = 0, len = allNodes.length; i < len; i++) {
      var node = allNodes[i];
      var animationName = getComputedStyle(node)[animationNameProp];
      if (animationName !== "none") {
        node.style[animationNameProp] += nameMarker;
        keyframeNodes.push(node);
      }
    }
    void document.body.offsetHeight;
    for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
      var nodeStyle = keyframeNodes[_i].style;
      nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
    }
  }
}
function getFullUrl$1(url) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
  var d = document.implementation.createHTMLDocument("");
  var b = d.createElement("base");
  var a = d.createElement("a");
  d.head.appendChild(b);
  d.body.appendChild(a);
  b.href = base;
  a.href = url;
  return a.href;
}
function getTimeStamp() {
  return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
}
/* harmony default export */ __webpack_exports__["default"] = (cssVars);

/***/ }),

/***/ "./node_modules/object-fit-images/dist/ofi.common-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! npm.im/object-fit-images 3.2.4 */


var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {
  style: {
    'object-position': 1
  }
} : new Image();
var supportsObjectFit = ('object-fit' in testImg.style);
var supportsObjectPosition = ('object-position' in testImg.style);
var supportsOFI = ('background-size' in testImg.style);
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;
function createPlaceholder(w, h) {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
}
function polyfillCurrentSrc(el) {
  if (el.srcset && !supportsCurrentSrc && window.picturefill) {
    var pf = window.picturefill._;
    // parse srcset with picturefill where currentSrc isn't available
    if (!el[pf.ns] || !el[pf.ns].evaled) {
      // force synchronous srcset parsing
      pf.fillImg(el, {
        reselect: true
      });
    }
    if (!el[pf.ns].curSrc) {
      // force picturefill to parse srcset
      el[pf.ns].supported = false;
      pf.fillImg(el, {
        reselect: true
      });
    }

    // retrieve parsed currentSrc, if any
    el.currentSrc = el[pf.ns].curSrc || el.src;
  }
}
function getStyle(el) {
  var style = getComputedStyle(el).fontFamily;
  var parsed;
  var props = {};
  while ((parsed = propRegex.exec(style)) !== null) {
    props[parsed[1]] = parsed[2];
  }
  return props;
}
function setPlaceholder(img, width, height) {
  // Default: fill width, no height
  var placeholder = createPlaceholder(width || 1, height || 0);

  // Only set placeholder if it's different
  if (nativeGetAttribute.call(img, 'src') !== placeholder) {
    nativeSetAttribute.call(img, 'src', placeholder);
  }
}
function onImageReady(img, callback) {
  // naturalWidth is only available when the image headers are loaded,
  // this loop will poll it every 100ms.
  if (img.naturalWidth) {
    callback(img);
  } else {
    setTimeout(onImageReady, 100, img, callback);
  }
}
function fixOne(el) {
  var style = getStyle(el);
  var ofi = el[OFI];
  style['object-fit'] = style['object-fit'] || 'fill'; // default value

  // Avoid running where unnecessary, unless OFI had already done its deed
  if (!ofi.img) {
    // fill is the default behavior so no action is necessary
    if (style['object-fit'] === 'fill') {
      return;
    }

    // Where object-fit is supported and object-position isn't (Safari < 10)
    if (!ofi.skipTest &&
    // unless user wants to apply regardless of browser support
    supportsObjectFit &&
    // if browser already supports object-fit
    !style['object-position'] // unless object-position is used
    ) {
      return;
    }
  }

  // keep a clone in memory while resetting the original to a blank
  if (!ofi.img) {
    ofi.img = new Image(el.width, el.height);
    ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
    ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

    // preserve for any future cloneNode calls
    // https://github.com/bfred-it/object-fit-images/issues/53
    nativeSetAttribute.call(el, "data-ofi-src", el.src);
    if (el.srcset) {
      nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
    }
    setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

    // remove srcset because it overrides src
    if (el.srcset) {
      el.srcset = '';
    }
    try {
      keepSrcUsable(el);
    } catch (err) {
      if (window.console) {
        console.warn('https://bit.ly/ofi-old-browser');
      }
    }
  }
  polyfillCurrentSrc(ofi.img);
  el.style.backgroundImage = "url(\"" + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + "\")";
  el.style.backgroundPosition = style['object-position'] || 'center';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundOrigin = 'content-box';
  if (/scale-down/.test(style['object-fit'])) {
    onImageReady(ofi.img, function () {
      if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
        el.style.backgroundSize = 'contain';
      } else {
        el.style.backgroundSize = 'auto';
      }
    });
  } else {
    el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
  }
  onImageReady(ofi.img, function (img) {
    setPlaceholder(el, img.naturalWidth, img.naturalHeight);
  });
}
function keepSrcUsable(el) {
  var descriptors = {
    get: function get(prop) {
      return el[OFI].img[prop ? prop : 'src'];
    },
    set: function set(value, prop) {
      el[OFI].img[prop ? prop : 'src'] = value;
      nativeSetAttribute.call(el, "data-ofi-" + prop, value); // preserve for any future cloneNode
      fixOne(el);
      return value;
    }
  };
  Object.defineProperty(el, 'src', descriptors);
  Object.defineProperty(el, 'currentSrc', {
    get: function () {
      return descriptors.get('currentSrc');
    }
  });
  Object.defineProperty(el, 'srcset', {
    get: function () {
      return descriptors.get('srcset');
    },
    set: function (ss) {
      return descriptors.set(ss, 'srcset');
    }
  });
}
function hijackAttributes() {
  function getOfiImageMaybe(el, name) {
    return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
  }
  if (!supportsObjectPosition) {
    HTMLImageElement.prototype.getAttribute = function (name) {
      return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
    };
    HTMLImageElement.prototype.setAttribute = function (name, value) {
      return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
    };
  }
}
function fix(imgs, opts) {
  var startAutoMode = !autoModeEnabled && !imgs;
  opts = opts || {};
  imgs = imgs || 'img';
  if (supportsObjectPosition && !opts.skipTest || !supportsOFI) {
    return false;
  }

  // use imgs as a selector or just select all images
  if (imgs === 'img') {
    imgs = document.getElementsByTagName('img');
  } else if (typeof imgs === 'string') {
    imgs = document.querySelectorAll(imgs);
  } else if (!('length' in imgs)) {
    imgs = [imgs];
  }

  // apply fix to all
  for (var i = 0; i < imgs.length; i++) {
    imgs[i][OFI] = imgs[i][OFI] || {
      skipTest: opts.skipTest
    };
    fixOne(imgs[i]);
  }
  if (startAutoMode) {
    document.body.addEventListener('load', function (e) {
      if (e.target.tagName === 'IMG') {
        fix(e.target, {
          skipTest: opts.skipTest
        });
      }
    }, true);
    autoModeEnabled = true;
    imgs = 'img'; // reset to a generic selector for watchMQ
  }

  // if requested, watch media queries for object-fit change
  if (opts.watchMQ) {
    window.addEventListener('resize', fix.bind(null, imgs, {
      skipTest: opts.skipTest
    }));
  }
}
fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;
hijackAttributes();
module.exports = fix;

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }
      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }
      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }
      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);
      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;
      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    };

    // w.scrollBy
    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }
        original.elementScroll.call(this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
        return;
      }
      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
        return;
      }
      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();
      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }
  if (true) {
    // commonjs
    module.exports = {
      polyfill: polyfill
    };
  } else {}
})();

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./assets/src/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ninaregli/Local Sites/nina-starter-theme/app/public/wp-content/themes/nina-startertheme/assets/src/js/main.js */"./assets/src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ2V0LWNzcy1kYXRhL2Rpc3QvZ2V0LWNzcy1kYXRhLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhbGFuY2VkLW1hdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UtY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RyaW5naWZ5LWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3dhbGstY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdHJhbnNmb3JtLWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtZml0LWltYWdlcy9kaXN0L29maS5jb21tb24tanMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjc3NWYXJzIiwib2JqZWN0Rml0SW1hZ2VzIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJnZXRVcmxzIiwidXJscyIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXR0aW5ncyIsIm1pbWVUeXBlIiwib25CZWZvcmVTZW5kIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwib25Db21wbGV0ZSIsInVybEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwidXJsUXVldWUiLCJhcHBseSIsIm1hcCIsIngiLCJpc1ZhbGlkQ3NzIiwiY3NzVGV4dCIsImlzSFRNTCIsInRyaW0iLCJjaGFyQXQiLCJ4aHIiLCJ1cmxJbmRleCIsInJlc3BvbnNlVGV4dCIsInJldHVyblZhbCIsImluZGV4T2YiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInVybCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJocmVmIiwiU3RyaW5nIiwiaXNJRWx0ZTkiLCJCb29sZWFuIiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzSUVsdGU5Q09SUyIsImhvc3QiLCJzcGxpdCIsImxvY2F0aW9uIiwiaXNTYW1lUHJvdG9jb2wiLCJwcm90b2NvbCIsInhkciIsIlhEb21haW5SZXF1ZXN0Iiwib3BlbiIsInRpbWVvdXQiLCJvbnByb2dyZXNzIiwib250aW1lb3V0Iiwib25sb2FkIiwib25lcnJvciIsImVyciIsInNldFRpbWVvdXQiLCJzZW5kIiwiY29uc29sZSIsIndhcm4iLCJjb25jYXQiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZ2V0Q3NzRGF0YSIsInJlZ2V4IiwiY3NzQ29tbWVudHMiLCJjc3NJbXBvcnRzIiwicm9vdEVsZW1lbnQiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImZpbHRlciIsInVzZUNTU09NIiwic291cmNlTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm1hdGNoZXNTZWxlY3RvciIsImNzc0FycmF5IiwiaGFuZGxlQ29tcGxldGUiLCJpc0NvbXBsZXRlIiwiam9pbiIsImhhbmRsZVN1Y2Nlc3MiLCJjc3NJbmRleCIsInNvdXJjZVVybCIsInJlc29sdmVJbXBvcnRzIiwicmVzb2x2ZWRDc3NUZXh0IiwiZXJyb3JEYXRhIiwiZGF0YSIsInRlc3QiLCJwYXJzZUltcG9ydERhdGEiLCJiYXNlVXJsIiwiaWdub3JlUnVsZXMiLCJpbXBvcnREYXRhIiwicnVsZXMiLCJyZXBsYWNlIiwibWF0Y2giLCJydWxlIiwiYWJzb2x1dGVVcmxzIiwiZ2V0RnVsbFVybCIsImFic29sdXRlUnVsZXMiLCJvbGRVcmwiLCJuZXdVcmwiLCJjYWxsYmFja0ZuIiwiX19lcnJvckRhdGEiLCJfX2Vycm9yUnVsZXMiLCJyZXNwb25zZUltcG9ydERhdGEiLCJwdXNoIiwicmVzcG9uc2VBcnJheSIsImltcG9ydFRleHQiLCJsaW5rSHJlZiIsImdldEF0dHJpYnV0ZSIsImxpbmtSZWwiLCJpc0xpbmsiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNTdHlsZSIsInRleHRDb250ZW50Iiwic2hlZXQiLCJjc3NSdWxlcyIsImJhc2UiLCJkIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJiIiwiYSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJlbG0iLCJzZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwiYmFsYW5jZWRNYXRjaCIsImJhbGFuY2VkIiwic3RyIiwiUmVnRXhwIiwibWF5YmVNYXRjaCIsInIiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwicHJlIiwic2xpY2UiLCJwb3N0IiwicmVnIiwibSIsImJlZ3MiLCJiZWciLCJsZWZ0IiwicmlnaHQiLCJyZXN1bHQiLCJhaSIsImJpIiwicG9wIiwicGFyc2VDc3MiLCJjc3MiLCJkZWZhdWx0cyIsIm9ubHlWYXJzIiwicmVtb3ZlQ29tbWVudHMiLCJfZXh0ZW5kcyIsImVycm9ycyIsImVycm9yIiwibXNnIiwiRXJyb3IiLCJyZSIsImV4ZWMiLCJjbG9zZSIsIndoaXRlc3BhY2UiLCJjb21tZW50IiwidHlwZSIsImNvbW1lbnRzIiwiY21udHMiLCJjIiwicyIsImRlY2xhcmF0aW9uIiwiY29tbWVudF9yZWdleHAiLCJwcm9wIiwidmFsIiwicmV0IiwicHJvcGVydHkiLCJ2YWx1ZSIsImRlY2xhcmF0aW9ucyIsImRlY2xzIiwia2V5ZnJhbWUiLCJ2YWxzIiwidmFsdWVzIiwiYXRfa2V5ZnJhbWVzIiwidmVuZG9yIiwibmFtZSIsImZyYW1lIiwiZnJhbWVzIiwia2V5ZnJhbWVzIiwiYXRfcGFnZSIsInNlbCIsInNlbGVjdG9ycyIsImF0X2ZvbnRmYWNlIiwiYXRfc3VwcG9ydHMiLCJzdXBwb3J0cyIsImF0X2hvc3QiLCJhdF9tZWRpYSIsIm1lZGlhIiwiYXRfY3VzdG9tX20iLCJhdF9kb2N1bWVudCIsImF0X3giLCJhdF9ydWxlIiwiaGFzVmFyRnVuYyIsInNvbWUiLCJkZWNsIiwiYXJyIiwib2JqIiwiYmFsYW5jZWRNYXRjaCQkMSIsImhhc1ZhckRlY2wiLCJjb3JlIiwic3R5bGVzaGVldCIsInN0cmluZ2lmeUNzcyIsInRyZWUiLCJkZWxpbSIsImNiIiwicmVuZGVyTWV0aG9kcyIsImNoYXJzZXQiLCJ2aXNpdCIsImltcG9ydCIsIl9pbXBvcnQiLCJuYW1lc3BhY2UiLCJwYWdlIiwibm9kZXMiLCJidWYiLCJuIiwidHh0Iiwid2Fsa0NzcyIsImZuIiwiVkFSX1BST1BfSURFTlRJRklFUiIsIlZBUl9GVU5DX0lERU5USUZJRVIiLCJ2YXJpYWJsZVN0b3JlIiwiZG9tIiwidGVtcCIsInVzZXIiLCJ0cmFuc2Zvcm1WYXJzIiwiZml4TmVzdGVkQ2FsYyIsInBlcnNpc3QiLCJwcmVzZXJ2ZSIsInZhcmlhYmxlcyIsIm9uV2FybmluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNzc1RyZWUiLCJ2YXJOYW1lSW5kaWNlcyIsInNwbGljZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJuZXdSdWxlIiwicmVzb2x2ZWRWYWx1ZSIsInJlc29sdmVWYWx1ZSIsInJlQ2FsY0V4cCIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJyb290Q2FsYyIsIm5lc3RlZENhbGMiLCJfX3JlY3Vyc2l2ZUZhbGxiYWNrIiwidmFsdWVEYXRhIiwicmVzb2x2ZUZ1bmMiLCJmYWxsYmFjayIsImhhc093blByb3BlcnR5IiwicmVwbGFjZW1lbnQiLCJ1bnJlc29sdmVkRmFsbGJhY2siLCJpc0VtcHR5VmFyRnVuYyIsImlzQnJvd3NlciIsImlzTmF0aXZlU3VwcG9ydCIsIkNTUyIsImNvbnNvbGVNc2dQcmVmaXgiLCJzaGFkb3dET00iLCJvbmx5TGVnYWN5Iiwic2lsZW50IiwidXBkYXRlRE9NIiwidXBkYXRlVVJMcyIsIndhdGNoIiwiY3NzS2V5ZnJhbWVzIiwiY3NzUm9vdFJ1bGVzIiwiY3NzVXJscyIsImNzc1ZhcnNPYnNlcnZlciIsImRlYm91bmNlVGltZXIiLCJpc1NoYWRvd0RPTVJlYWR5Iiwic3R5bGVOb2RlSWQiLCJfYmVuY2htYXJrIiwiZ2V0VGltZVN0YW1wIiwiaGFuZGxlRXJyb3IiLCJtZXNzYWdlIiwic291cmNlTm9kZSIsImhhbmRsZVdhcm5pbmciLCJkaXNjb25uZWN0IiwiYWRkTXV0YXRpb25PYnNlcnZlciIsImNzc1ZhcnNEZWJvdW5jZWQiLCJpc1NoYWRvd0VsbSIsInNoYWRvd1Jvb3QiLCJ0YXJnZXRFbG0iLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY3NzUm9vdERlY2xzIiwibm9kZUFycmF5IiwiY3NzVXJsIiwiZ2V0RnVsbFVybCQxIiwicmVzcG9uc2VVcmwiLCJyZXNwb25zZVVSTCIsInN0YXR1c1RleHQiLCJlcnJvck1zZyIsImNzc01hcmtlciIsImNzc1NldHRpbmdzIiwic3R5bGVOb2RlIiwicXVlcnlTZWxlY3RvciIsInByZXZEYXRhIiwiX19jc3NWYXJzIiwiaXNTYW1lRGF0YSIsImhhc0tleWZyYW1lc1dpdGhWYXJzIiwiaW5mbyIsImdyb3VwMSIsImVycm9yVGhyb3duIiwiZXJyb3JOb2RlIiwiZWxtcyIsIl90b0NvbnN1bWFibGVBcnJheSIsInNoYWRvd1NldHRpbmdzIiwiY3NzTm9kZXMiLCJsYXN0Tm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInRhcmdldE5vZGUiLCJmaXhLZXlmcmFtZXMiLCJpbml0IiwiZXZ0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsImlnbm9yZUlkIiwiTXV0YXRpb25PYnNlcnZlciIsInRhZ05hbWUiLCJpZCIsIm11dGF0aW9ucyIsImhhc0NTU011dGF0aW9uIiwibXV0YXRpb24iLCJpc0NTU011dGF0aW9uIiwidGFyZ2V0IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzVmFsaWRMaW5rIiwiZGlzYWJsZWQiLCJpc1ZhbGlkU3R5bGUiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUZpbHRlciIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhbmltYXRpb25OYW1lUHJvcCIsImdldENvbXB1dGVkU3R5bGUiLCJhbGxOb2RlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwia2V5ZnJhbWVOb2RlcyIsIm5hbWVNYXJrZXIiLCJsZW4iLCJhbmltYXRpb25OYW1lIiwib2Zmc2V0SGVpZ2h0IiwiX2kiLCJfbGVuIiwibm9kZVN0eWxlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsIk9GSSIsInByb3BSZWdleCIsInRlc3RJbWciLCJJbWFnZSIsInN1cHBvcnRzT2JqZWN0Rml0Iiwic3VwcG9ydHNPYmplY3RQb3NpdGlvbiIsInN1cHBvcnRzT0ZJIiwic3VwcG9ydHNDdXJyZW50U3JjIiwiY3VycmVudFNyYyIsIm5hdGl2ZUdldEF0dHJpYnV0ZSIsIm5hdGl2ZVNldEF0dHJpYnV0ZSIsImF1dG9Nb2RlRW5hYmxlZCIsImNyZWF0ZVBsYWNlaG9sZGVyIiwidyIsImgiLCJwb2x5ZmlsbEN1cnJlbnRTcmMiLCJlbCIsInNyY3NldCIsInBpY3R1cmVmaWxsIiwicGYiLCJfIiwibnMiLCJldmFsZWQiLCJmaWxsSW1nIiwicmVzZWxlY3QiLCJjdXJTcmMiLCJzdXBwb3J0ZWQiLCJzcmMiLCJnZXRTdHlsZSIsImZvbnRGYW1pbHkiLCJwYXJzZWQiLCJwcm9wcyIsInNldFBsYWNlaG9sZGVyIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsIm9uSW1hZ2VSZWFkeSIsImNhbGxiYWNrIiwibmF0dXJhbFdpZHRoIiwiZml4T25lIiwib2ZpIiwic2tpcFRlc3QiLCJuYXR1cmFsSGVpZ2h0Iiwia2VlcFNyY1VzYWJsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kT3JpZ2luIiwiYmFja2dyb3VuZFNpemUiLCJkZXNjcmlwdG9ycyIsImdldCIsInNldCIsImRlZmluZVByb3BlcnR5Iiwic3MiLCJoaWphY2tBdHRyaWJ1dGVzIiwiZ2V0T2ZpSW1hZ2VNYXliZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJmaXgiLCJpbWdzIiwib3B0cyIsInN0YXJ0QXV0b01vZGUiLCJlIiwid2F0Y2hNUSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsIiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsImVsZW1lbnRTY3JvbGwiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJpc01pY3Jvc29mdEJyb3dzZXIiLCJ1c2VyQWdlbnQiLCJ1c2VyQWdlbnRQYXR0ZXJucyIsIlJPVU5ESU5HX1RPTEVSQU5DRSIsIm5hdmlnYXRvciIsInkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZWFzZSIsImsiLCJNYXRoIiwiY29zIiwiUEkiLCJzaG91bGRCYWlsT3V0IiwiZmlyc3RBcmciLCJiZWhhdmlvciIsIlR5cGVFcnJvciIsImhhc1Njcm9sbGFibGVTcGFjZSIsImF4aXMiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FuT3ZlcmZsb3ciLCJvdmVyZmxvd1ZhbHVlIiwiaXNTY3JvbGxhYmxlIiwiaXNTY3JvbGxhYmxlWSIsImlzU2Nyb2xsYWJsZVgiLCJmaW5kU2Nyb2xsYWJsZVBhcmVudCIsInN0ZXAiLCJjb250ZXh0IiwidGltZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwic3RhcnRYIiwic3RhcnRZIiwibWV0aG9kIiwic2Nyb2xsYWJsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNtb290aFNjcm9sbCIsInNjcm9sbFgiLCJwYWdlWE9mZnNldCIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsInRvcCIsIlN5bnRheEVycm9yIiwic2Nyb2xsYWJsZVBhcmVudCIsInBhcmVudFJlY3RzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50UmVjdHMiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ3lCO0FBQ1I7QUFDUztBQUNqRDs7QUFHQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3ZE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Q0FBQyxDQUFDNkQsUUFBUSxDQUFDO1lBQ1R2UyxJQUFJLEVBQUU0VixXQUFXLENBQUM1VixJQUFJO1lBQ3RCeVYsR0FBRyxFQUFFRyxXQUFXLENBQUNILEdBQUc7WUFDcEIvQixRQUFRLEVBQUU7VUFDWixDQUFDLENBQUM7UUFDSjtNQUNGLENBQUMsTUFBTTtRQUNMO1FBQ0FoRixDQUFDLENBQUM2RCxRQUFRLENBQUM7VUFDVHZTLElBQUksRUFBRThWLFdBQVcsQ0FBQzlWLElBQUk7VUFDdEJ5VixHQUFHLEVBQUVLLFdBQVcsQ0FBQ0wsR0FBRztVQUNwQi9CLFFBQVEsRUFBRTtRQUNaLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQztFQUNIO0VBRUEsSUFBSSxJQUE0RCxFQUFFO0lBQ2hFO0lBQ0E1QixNQUFNLENBQUNDLE9BQU8sR0FBRztNQUFFN2IsUUFBUSxFQUFFQTtJQUFTLENBQUM7RUFDekMsQ0FBQyxNQUFNLEVBR047QUFFSCxDQUFDLEVBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hiSCx3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBvYmplY3RGaXRJbWFnZXMgZnJvbSAnb2JqZWN0LWZpdC1pbWFnZXMnO1xuaW1wb3J0IGNzc1ZhcnMgZnJvbSAnY3NzLXZhcnMtcG9ueWZpbGwnO1xuaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwtcG9seWZpbGwnO1xuLy8gaW1wb3J0IGJ1cmdlckFuaW1hdGlvbiBmcm9tICcuL3V0aWxzL2J1cmdlckFuaW1hdGlvbic7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAvLyBmYWxsYmFjayBmb3IgaWUgYW5kIGVkZ2U6XG4gIGNzc1ZhcnMoKTtcbiAgb2JqZWN0Rml0SW1hZ2VzKCk7XG5cbiAgLy9mYWxsYmFjayBzYWZhcmlcbiAgc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG5cblxuXG59LCBmYWxzZSk7XG4iLCIvKiFcbiAqIGdldC1jc3MtZGF0YVxuICogdjEuNi4zXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamhpbGRlbmJpZGRsZS9nZXQtY3NzLWRhdGFcbiAqIChjKSAyMDE4LTIwMTkgSm9obiBIaWxkZW5iaWRkbGUgPGh0dHA6Ly9oaWxkZW5iaWRkbGUuY29tPlxuICogTUlUIGxpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gZ2V0VXJscyh1cmxzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgICAgbWltZVR5cGU6IG9wdGlvbnMubWltZVR5cGUgfHwgbnVsbCxcbiAgICAgICAgb25CZWZvcmVTZW5kOiBvcHRpb25zLm9uQmVmb3JlU2VuZCB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uU3VjY2Vzczogb3B0aW9ucy5vblN1Y2Nlc3MgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvbkVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvbkNvbXBsZXRlOiBvcHRpb25zLm9uQ29tcGxldGUgfHwgRnVuY3Rpb24ucHJvdG90eXBlXG4gICAgfTtcbiAgICB2YXIgdXJsQXJyYXkgPSBBcnJheS5pc0FycmF5KHVybHMpID8gdXJscyA6IFsgdXJscyBdO1xuICAgIHZhciB1cmxRdWV1ZSA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHVybEFycmF5Lmxlbmd0aCkpLm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRDc3MoKSB7XG4gICAgICAgIHZhciBjc3NUZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBcIlwiO1xuICAgICAgICB2YXIgaXNIVE1MID0gY3NzVGV4dC50cmltKCkuY2hhckF0KDApID09PSBcIjxcIjtcbiAgICAgICAgcmV0dXJuICFpc0hUTUw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRXJyb3IoeGhyLCB1cmxJbmRleCkge1xuICAgICAgICBzZXR0aW5ncy5vbkVycm9yKHhociwgdXJsQXJyYXlbdXJsSW5kZXhdLCB1cmxJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXNwb25zZVRleHQsIHVybEluZGV4KSB7XG4gICAgICAgIHZhciByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MocmVzcG9uc2VUZXh0LCB1cmxBcnJheVt1cmxJbmRleF0sIHVybEluZGV4KTtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0gcmV0dXJuVmFsID09PSBmYWxzZSA/IFwiXCIgOiByZXR1cm5WYWwgfHwgcmVzcG9uc2VUZXh0O1xuICAgICAgICB1cmxRdWV1ZVt1cmxJbmRleF0gPSByZXNwb25zZVRleHQ7XG4gICAgICAgIGlmICh1cmxRdWV1ZS5pbmRleE9mKG51bGwpID09PSAtMSkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZSh1cmxRdWV1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHVybEFycmF5LmZvckVhY2goZnVuY3Rpb24odXJsLCBpKSB7XG4gICAgICAgIHBhcnNlci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XG4gICAgICAgIHBhcnNlci5ocmVmID0gU3RyaW5nKHBhcnNlci5ocmVmKTtcbiAgICAgICAgdmFyIGlzSUVsdGU5ID0gQm9vbGVhbihkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgdmFyIGlzSUVsdGU5Q09SUyA9IGlzSUVsdGU5ICYmIHBhcnNlci5ob3N0LnNwbGl0KFwiOlwiKVswXSAhPT0gbG9jYXRpb24uaG9zdC5zcGxpdChcIjpcIilbMF07XG4gICAgICAgIGlmIChpc0lFbHRlOUNPUlMpIHtcbiAgICAgICAgICAgIHZhciBpc1NhbWVQcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbCA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgICAgICBpZiAoaXNTYW1lUHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGRyLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICB4ZHIudGltZW91dCA9IDA7XG4gICAgICAgICAgICAgICAgeGRyLm9ucHJvZ3Jlc3MgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgeGRyLm9udGltZW91dCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB4ZHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkQ3NzKHhkci5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeGRyLnJlc3BvbnNlVGV4dCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKHhkciwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhkci5vbmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoeGRyLCBpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHhkci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkludGVybmV0IEV4cGxvcmVyIDkgQ3Jvc3MtT3JpZ2luIChDT1JTKSByZXF1ZXN0cyBtdXN0IHVzZSB0aGUgc2FtZSBwcm90b2NvbCAoXCIuY29uY2F0KHVybCwgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICBvbkVycm9yKG51bGwsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSkge1xuICAgICAgICAgICAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKHNldHRpbmdzLm1pbWVUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIHVybCwgaSk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgJiYgaXNWYWxpZENzcyh4aHIucmVzcG9uc2VUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKHhoci5yZXNwb25zZVRleHQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcih4aHIsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBHZXRzIENTUyBkYXRhIGZyb20gPHN0eWxlPiBhbmQgPGxpbms+IG5vZGVzIChpbmNsdWRpbmcgQGltcG9ydHMpLCB0aGVuXG4gKiByZXR1cm5zIGRhdGEgaW4gb3JkZXIgcHJvY2Vzc2VkIGJ5IERPTS4gQWxsb3dzIHNwZWNpZnlpbmcgbm9kZXMgdG9cbiAqIGluY2x1ZGUvZXhjbHVkZSBhbmQgZmlsdGVyaW5nIENTUyBkYXRhIHVzaW5nIFJlZ0V4LlxuICpcbiAqIEBwcmVzZXJ2ZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMucm9vdEVsZW1lbnQ9ZG9jdW1lbnRdIFJvb3QgZWxlbWVudCB0byB0cmF2ZXJzZSBmb3JcbiAqICAgICAgICAgICAgICAgICAgIDxsaW5rPiBhbmQgPHN0eWxlPiBub2Rlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmluY2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGluaz4gYW5kIDxzdHlsZT5cbiAqICAgICAgICAgICAgICAgICAgIG5vZGVzIHRvIGluY2x1ZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmV4Y2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGluaz4gYW5kIDxzdHlsZT5cbiAqICAgICAgICAgICAgICAgICAgIG5vZGVzIHRvIGV4Y2x1ZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLmZpbHRlcl0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gZmlsdGVyIG5vZGUgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBkYXRhLiBFYWNoIGJsb2NrIG9mIENTUyBkYXRhIGlzIHRlc3RlZCBhZ2FpbnN0IHRoZSBmaWx0ZXIsXG4gKiAgICAgICAgICAgICAgICAgICBhbmQgb25seSBtYXRjaGluZyBkYXRhIGlzIGluY2x1ZGVkLlxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMudXNlQ1NTT009ZmFsc2VdIERldGVybWluZXMgaWYgQ1NTIGRhdGEgd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgY29sbGVjdGVkIGZyb20gYSBzdHlsZXNoZWV0J3MgcnVudGltZSB2YWx1ZXMgaW5zdGVhZCBvZiBpdHNcbiAqICAgICAgICAgICAgICAgICAgIHRleHQgY29udGVudC4gVGhpcyBpcyByZXF1aXJlZCB0byBnZXQgYWNjdXJhdGUgQ1NTIGRhdGFcbiAqICAgICAgICAgICAgICAgICAgIHdoZW4gYSBzdHlsZXNoZWV0IGhhcyBiZWVuIG1vZGlmaWVkIHVzaW5nIHRoZSBkZWxldGVSdWxlKClcbiAqICAgICAgICAgICAgICAgICAgIG9yIGluc2VydFJ1bGUoKSBtZXRob2RzIGJlY2F1c2UgdGhlc2UgbW9kaWZpY2F0aW9ucyB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBub3QgYmUgcmVmbGVjdGVkIGluIHRoZSBzdHlsZXNoZWV0J3MgdGV4dCBjb250ZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25CZWZvcmVTZW5kXSBDYWxsYmFjayBiZWZvcmUgWEhSIGlzIHNlbnQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgdGhlIFhIUiBvYmplY3QsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vblN1Y2Nlc3NdIENhbGxiYWNrIG9uIGVhY2ggQ1NTIG5vZGUgcmVhZC4gUGFzc2VzXG4gKiAgICAgICAgICAgICAgICAgICAxKSBDU1MgdGV4dCwgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlIHNvdXJjZVxuICogICAgICAgICAgICAgICAgICAgVVJMIGFzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uRXJyb3JdIENhbGxiYWNrIG9uIGVhY2ggZXJyb3IuIFBhc3NlcyAxKSB0aGUgWEhSXG4gKiAgICAgICAgICAgICAgICAgICBvYmplY3QgZm9yIGluc3BlY3Rpb24sIDIpIHNvdXJlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlXG4gKiAgICAgICAgICAgICAgICAgICBzb3VyY2UgVVJMIHRoYXQgZmFpbGVkIChlaXRoZXIgYSA8bGluaz4gaHJlZiBvciBhbiBAaW1wb3J0KVxuICogICAgICAgICAgICAgICAgICAgYXMgYXJndW1lbnRzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNvbXBsZXRlXSBDYWxsYmFjayBhZnRlciBhbGwgbm9kZXMgaGF2ZSBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQuIFBhc3NlcyAxKSBjb25jYXRlbmF0ZWQgQ1NTIHRleHQsIDIpIGFuIGFycmF5IG9mXG4gKiAgICAgICAgICAgICAgICAgICBDU1MgdGV4dCBpbiBET00gb3JkZXIsIGFuZCAzKSBhbiBhcnJheSBvZiBub2RlcyBpbiBET01cbiAqICAgICAgICAgICAgICAgICAgIG9yZGVyIGFzIGFyZ3VtZW50cy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgZ2V0Q3NzRGF0YSh7XG4gKiAgICAgcm9vdEVsZW1lbnQ6IGRvY3VtZW50LFxuICogICAgIGluY2x1ZGUgICAgOiAnc3R5bGUsbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyxcbiAqICAgICBleGNsdWRlICAgIDogJ1tocmVmPVwic2tpcC5jc3NcIl0nLFxuICogICAgIGZpbHRlciAgICAgOiAvcmVkLyxcbiAqICAgICB1c2VDU1NPTSAgIDogZmFsc2UsXG4gKiAgICAgb25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9XG4gKiAgICAgb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICAgIG9uRXJyb3IoeGhyLCBub2RlLCB1cmwpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH0sXG4gKiAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgbm9kZUFycmF5KSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9XG4gKiAgIH0pO1xuICovIGZ1bmN0aW9uIGdldENzc0RhdGEob3B0aW9ucykge1xuICAgIHZhciByZWdleCA9IHtcbiAgICAgICAgY3NzQ29tbWVudHM6IC9cXC9cXCpbXFxzXFxTXSs/XFwqXFwvL2csXG4gICAgICAgIGNzc0ltcG9ydHM6IC8oPzpAaW1wb3J0XFxzKikoPzp1cmxcXChcXHMqKT8oPzpbJ1wiXSkoW14nXCJdKikoPzpbJ1wiXSkoPzpcXHMqXFwpKT8oPzpbXjtdKjspL2dcbiAgICB9O1xuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgICAgcm9vdEVsZW1lbnQ6IG9wdGlvbnMucm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQsXG4gICAgICAgIGluY2x1ZGU6IG9wdGlvbnMuaW5jbHVkZSB8fCAnc3R5bGUsbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyxcbiAgICAgICAgZXhjbHVkZTogb3B0aW9ucy5leGNsdWRlIHx8IG51bGwsXG4gICAgICAgIGZpbHRlcjogb3B0aW9ucy5maWx0ZXIgfHwgbnVsbCxcbiAgICAgICAgdXNlQ1NTT006IG9wdGlvbnMudXNlQ1NTT00gfHwgZmFsc2UsXG4gICAgICAgIG9uQmVmb3JlU2VuZDogb3B0aW9ucy5vbkJlZm9yZVNlbmQgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvblN1Y2Nlc3M6IG9wdGlvbnMub25TdWNjZXNzIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25FcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25Db21wbGV0ZTogb3B0aW9ucy5vbkNvbXBsZXRlIHx8IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIH07XG4gICAgdmFyIHNvdXJjZU5vZGVzID0gQXJyYXkuYXBwbHkobnVsbCwgc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5pbmNsdWRlKSkuZmlsdGVyKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuICFtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2V0dGluZ3MuZXhjbHVkZSk7XG4gICAgfSk7XG4gICAgdmFyIGNzc0FycmF5ID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoc291cmNlTm9kZXMubGVuZ3RoKSkubWFwKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tcGxldGUoKSB7XG4gICAgICAgIHZhciBpc0NvbXBsZXRlID0gY3NzQXJyYXkuaW5kZXhPZihudWxsKSA9PT0gLTE7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICB2YXIgY3NzVGV4dCA9IGNzc0FycmF5LmpvaW4oXCJcIik7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5LCBzb3VyY2VOb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VjY2Vzcyhjc3NUZXh0LCBjc3NJbmRleCwgbm9kZSwgc291cmNlVXJsKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgc291cmNlVXJsKTtcbiAgICAgICAgY3NzVGV4dCA9IHJldHVyblZhbCAhPT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ocmV0dXJuVmFsKSA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IGNzc1RleHQ7XG4gICAgICAgIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIHNvdXJjZVVybCwgZnVuY3Rpb24ocmVzb2x2ZWRDc3NUZXh0LCBlcnJvckRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjc3NBcnJheVtjc3NJbmRleF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlcnJvckRhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5vbkVycm9yKGRhdGEueGhyLCBub2RlLCBkYXRhLnVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy5maWx0ZXIgfHwgc2V0dGluZ3MuZmlsdGVyLnRlc3QocmVzb2x2ZWRDc3NUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjc3NBcnJheVtjc3NJbmRleF0gPSByZXNvbHZlZENzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXlbY3NzSW5kZXhdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlSW1wb3J0RGF0YShjc3NUZXh0LCBiYXNlVXJsKSB7XG4gICAgICAgIHZhciBpZ25vcmVSdWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gICAgICAgIHZhciBpbXBvcnREYXRhID0ge307XG4gICAgICAgIGltcG9ydERhdGEucnVsZXMgPSAoY3NzVGV4dC5yZXBsYWNlKHJlZ2V4LmNzc0NvbW1lbnRzLCBcIlwiKS5tYXRjaChyZWdleC5jc3NJbXBvcnRzKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpZ25vcmVSdWxlcy5pbmRleE9mKHJ1bGUpID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltcG9ydERhdGEudXJscyA9IGltcG9ydERhdGEucnVsZXMubWFwKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnJlcGxhY2UocmVnZXguY3NzSW1wb3J0cywgXCIkMVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltcG9ydERhdGEuYWJzb2x1dGVVcmxzID0gaW1wb3J0RGF0YS51cmxzLm1hcChmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRGdWxsVXJsKHVybCwgYmFzZVVybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnREYXRhLmFic29sdXRlUnVsZXMgPSBpbXBvcnREYXRhLnJ1bGVzLm1hcChmdW5jdGlvbihydWxlLCBpKSB7XG4gICAgICAgICAgICB2YXIgb2xkVXJsID0gaW1wb3J0RGF0YS51cmxzW2ldO1xuICAgICAgICAgICAgdmFyIG5ld1VybCA9IGdldEZ1bGxVcmwoaW1wb3J0RGF0YS5hYnNvbHV0ZVVybHNbaV0sIGJhc2VVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGUucmVwbGFjZShvbGRVcmwsIG5ld1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW1wb3J0RGF0YTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgYmFzZVVybCwgY2FsbGJhY2tGbikge1xuICAgICAgICB2YXIgX19lcnJvckRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IFtdO1xuICAgICAgICB2YXIgX19lcnJvclJ1bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBbXTtcbiAgICAgICAgdmFyIGltcG9ydERhdGEgPSBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgYmFzZVVybCwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgaWYgKGltcG9ydERhdGEucnVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBnZXRVcmxzKGltcG9ydERhdGEuYWJzb2x1dGVVcmxzLCB7XG4gICAgICAgICAgICAgICAgb25CZWZvcmVTZW5kOiBmdW5jdGlvbiBvbkJlZm9yZVNlbmQoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyhjc3NUZXh0LCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJldHVyblZhbCA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUltcG9ydERhdGEgPSBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgdXJsLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUltcG9ydERhdGEucnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHJ1bGUsIHJlc3BvbnNlSW1wb3J0RGF0YS5hYnNvbHV0ZVJ1bGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NUZXh0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcih4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgX19lcnJvckRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHI6IHhocixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfX2Vycm9yUnVsZXMucHVzaChpbXBvcnREYXRhLnJ1bGVzW3VybEluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4sIF9fZXJyb3JEYXRhLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShyZXNwb25zZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihpbXBvcnRUZXh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKGltcG9ydERhdGEucnVsZXNbaV0sIGltcG9ydFRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgYmFzZVVybCwgY2FsbGJhY2tGbiwgX19lcnJvckRhdGEsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFja0ZuKGNzc1RleHQsIF9fZXJyb3JEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc291cmNlTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZU5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSwgaSkge1xuICAgICAgICAgICAgdmFyIGxpbmtIcmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgdmFyIGxpbmtSZWwgPSBub2RlLmdldEF0dHJpYnV0ZShcInJlbFwiKTtcbiAgICAgICAgICAgIHZhciBpc0xpbmsgPSBub2RlLm5vZGVOYW1lID09PSBcIkxJTktcIiAmJiBsaW5rSHJlZiAmJiBsaW5rUmVsICYmIGxpbmtSZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgICAgICB2YXIgaXNTdHlsZSA9IG5vZGUubm9kZU5hbWUgPT09IFwiU1RZTEVcIjtcbiAgICAgICAgICAgIGlmIChpc0xpbmspIHtcbiAgICAgICAgICAgICAgICBnZXRVcmxzKGxpbmtIcmVmLCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBcInRleHQvY3NzXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlU2VuZDogZnVuY3Rpb24gb25CZWZvcmVTZW5kKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoY3NzVGV4dCwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZVVybCA9IGdldEZ1bGxVcmwobGlua0hyZWYsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VjY2Vzcyhjc3NUZXh0LCBpLCBub2RlLCBzb3VyY2VVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXlbaV0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25FcnJvcih4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVzZUNTU09NKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBBcnJheS5hcHBseShudWxsLCBub2RlLnNoZWV0LmNzc1J1bGVzKS5tYXAoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlU3VjY2Vzcyhjc3NUZXh0LCBpLCBub2RlLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3NzQXJyYXlbaV0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUoXCJcIiwgW10pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFVybCh1cmwpIHtcbiAgICB2YXIgYmFzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgZCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKTtcbiAgICB2YXIgYiA9IGQuY3JlYXRlRWxlbWVudChcImJhc2VcIik7XG4gICAgdmFyIGEgPSBkLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGQuaGVhZC5hcHBlbmRDaGlsZChiKTtcbiAgICBkLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgYi5ocmVmID0gYmFzZTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGEuaHJlZjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsbSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGVsbS5tYXRjaGVzIHx8IGVsbS5tYXRjaGVzU2VsZWN0b3IgfHwgZWxtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbG0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS5tc01hdGNoZXNTZWxlY3RvciB8fCBlbG0ub01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsbSwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDc3NEYXRhO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0LWNzcy1kYXRhLmVzbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gYmFsYW5jZWQ7XG5mdW5jdGlvbiBiYWxhbmNlZChhLCBiLCBzdHIpIHtcbiAgaWYgKGEgaW5zdGFuY2VvZiBSZWdFeHApIGEgPSBtYXliZU1hdGNoKGEsIHN0cik7XG4gIGlmIChiIGluc3RhbmNlb2YgUmVnRXhwKSBiID0gbWF5YmVNYXRjaChiLCBzdHIpO1xuXG4gIHZhciByID0gcmFuZ2UoYSwgYiwgc3RyKTtcblxuICByZXR1cm4gciAmJiB7XG4gICAgc3RhcnQ6IHJbMF0sXG4gICAgZW5kOiByWzFdLFxuICAgIHByZTogc3RyLnNsaWNlKDAsIHJbMF0pLFxuICAgIGJvZHk6IHN0ci5zbGljZShyWzBdICsgYS5sZW5ndGgsIHJbMV0pLFxuICAgIHBvc3Q6IHN0ci5zbGljZShyWzFdICsgYi5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1heWJlTWF0Y2gocmVnLCBzdHIpIHtcbiAgdmFyIG0gPSBzdHIubWF0Y2gocmVnKTtcbiAgcmV0dXJuIG0gPyBtWzBdIDogbnVsbDtcbn1cblxuYmFsYW5jZWQucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIHJhbmdlKGEsIGIsIHN0cikge1xuICB2YXIgYmVncywgYmVnLCBsZWZ0LCByaWdodCwgcmVzdWx0O1xuICB2YXIgYWkgPSBzdHIuaW5kZXhPZihhKTtcbiAgdmFyIGJpID0gc3RyLmluZGV4T2YoYiwgYWkgKyAxKTtcbiAgdmFyIGkgPSBhaTtcblxuICBpZiAoYWkgPj0gMCAmJiBiaSA+IDApIHtcbiAgICBiZWdzID0gW107XG4gICAgbGVmdCA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgIGJlZ3MucHVzaChpKTtcbiAgICAgICAgYWkgPSBzdHIuaW5kZXhPZihhLCBpICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKGJlZ3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVnID0gYmVncy5wb3AoKTtcbiAgICAgICAgaWYgKGJlZyA8IGxlZnQpIHtcbiAgICAgICAgICBsZWZ0ID0gYmVnO1xuICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgIH1cblxuICAgICAgICBiaSA9IHN0ci5pbmRleE9mKGIsIGkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgfVxuXG4gICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogQmFzZWQgb24gY3NzIHBhcnNlci9jb21waWxlciBieSBOeENoZ1xuICogaHR0cHM6Ly9naXRodWIuY29tL054dENoZy9waWVjZXMvdHJlZS9tYXN0ZXIvanMvY3NzX3BhcnNlclxuICovXG5cblxuLy8gRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IGJhbGFuY2VkIGZyb20gJ2JhbGFuY2VkLW1hdGNoJztcblxuXG4vLyBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFBhcnNlcyBDU1Mgc3RyaW5nIGFuZCBnZW5lcmF0ZXMgQVNUIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgY3NzIFRoZSBDU1Mgc3RyaW5ndCB0byBiZSBjb252ZXJ0ZWQgdG8gYW4gQVNUXG4gKiBAcGFyYW0ge29iamVjdH0gIFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5vbmx5VmFycz1mYWxzZV0gUmVtb3ZlIGRlY2xhcmF0aW9ucyB0aGF0IGRvIG5vdFxuICogICAgICAgICAgICAgICAgICBjb250YWluIGEgQ1NTIHZhcmlhYmxlIGZyb20gdGhlIHJldHVybiB2YWx1ZS4gTm90ZSB0aGF0XG4gKiAgICAgICAgICAgICAgICAgIEBmb250LWZhY2UgYW5kIEBrZXlmcmFtZSBydWxlcyByZXF1aXJlIGFsbCBkZWNsYXJhdGlvbnMgdG9cbiAqICAgICAgICAgICAgICAgICAgYmUgcmV0dXJuZWQgaWYgYSBDU1MgdmFyaWFibGUgaXMgdXNlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVtb3ZlQ29tbWVudHM9ZmFsc2VdIFJlbW92ZSBjb21tZW50cyBmcm9tIHJldHVybmVkXG4gKiAgICAgICAgICAgICAgICAgIG9iamVjdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ3NzKGNzcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIG9ubHlWYXJzICAgICAgOiBmYWxzZSxcbiAgICAgICAgcmVtb3ZlQ29tbWVudHM6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCBlcnJvcnMgICA9IFtdO1xuXG4gICAgLy8gRXJyb3JzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENTUyBwYXJzZSBlcnJvcjogJHttc2d9YCk7XG4gICAgfVxuXG4gICAgLy8gUmVnRXhcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTWF0Y2ggcmVnZXhwIGFuZCByZXR1cm4gY2FwdHVyZXNcbiAgICBmdW5jdGlvbiBtYXRjaChyZSkge1xuICAgICAgICBjb25zdCBtID0gcmUuZXhlYyhjc3MpO1xuXG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjc3MgPSBjc3Muc2xpY2UobVswXS5sZW5ndGgpO1xuXG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiBtYXRjaCgvXntcXHMqLyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaCgvXn0vKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xuICAgICAgICBtYXRjaCgvXlxccyovKTtcbiAgICB9XG5cbiAgICAvLyBDb21tZW50c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKGNzc1swXSAhPT0gJy8nIHx8IGNzc1sxXSAhPT0gJyonKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IDI7XG5cbiAgICAgICAgd2hpbGUgKGNzc1tpXSAmJiAoY3NzW2ldICE9PSAnKicgfHwgY3NzW2kgKyAxXSAhPT0gJy8nKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjc3NbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignZW5kIG9mIGNvbW1lbnQgaXMgbWlzc2luZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyID0gY3NzLnNsaWNlKDIsIGkpO1xuXG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShpICsgMik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGUgICA6ICdjb21tZW50JyxcbiAgICAgICAgICAgIGNvbW1lbnQ6IHN0clxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbW1lbnRzKCkge1xuICAgICAgICBjb25zdCBjbW50cyA9IFtdO1xuICAgICAgICBsZXQgYztcblxuICAgICAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICAgICAgICBjbW50cy5wdXNoKGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJlbW92ZUNvbW1lbnRzID8gW10gOiBjbW50cztcbiAgICB9XG5cbiAgICAvLyBTZWxlY3RvclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBzZWxlY3RvcigpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIHdoaWxlIChjc3NbMF0gPT09ICd9Jykge1xuICAgICAgICAgICAgZXJyb3IoJ2V4dHJhIGNsb3NpbmcgYnJhY2tldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eKChcIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKid8W157XSkrKS8pO1xuXG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVswXVxuICAgICAgICAgICAgICAgIC50cmltKCkgLy8gcmVtb3ZlIGFsbCBjb21tZW50cyBmcm9tIHNlbGVjdG9yc1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXiovXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKicvZywgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yZXBsYWNlKC8sL2csICdcXHUyMDBDJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3BsaXQoL1xccyooPyFbXihdKlxcKSksXFxzKi8pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1xcdTIwMEMvZywgJywnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlY2xhcmF0aW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbigpIHtcbiAgICAgICAgbWF0Y2goL14oWztcXHNdKikrLyk7IC8vIGlnbm9yZSBlbXB0eSBkZWNsYXJhdGlvbnMgKyB3aGl0ZXNwYWNlXG5cbiAgICAgICAgY29uc3QgY29tbWVudF9yZWdleHAgPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZztcbiAgICAgICAgbGV0IHByb3AgPSBtYXRjaCgvXihcXCo/Wy0jLypcXFxcXFx3XSsoXFxbWzAtOWEtel8tXStcXF0pPylcXHMqLyk7XG5cbiAgICAgICAgaWYgKCFwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wID0gcHJvcFswXS50cmltKCk7XG5cbiAgICAgICAgaWYgKCFtYXRjaCgvXjpcXHMqLykpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcigncHJvcGVydHkgbWlzc2luZyBcXCc6XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBRdW90ZXMgcmVnZXggcmVwZWF0cyB2ZXJiYXRpbSBpbnNpZGUgYW5kIG91dHNpZGUgcGFyZW50aGVzZXNcbiAgICAgICAgY29uc3QgdmFsID0gbWF0Y2goL14oKD86XFwvXFwqLio/XFwqXFwvfCcoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoKFxccyonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFteKV0qPylcXHMqXFwpfFtefTtdKSspLyk7XG4gICAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgICAgIHR5cGUgICAgOiAnZGVjbGFyYXRpb24nLFxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AucmVwbGFjZShjb21tZW50X3JlZ2V4cCwgJycpLFxuICAgICAgICAgICAgdmFsdWUgICA6IHZhbCA/IHZhbFswXS5yZXBsYWNlKGNvbW1lbnRfcmVnZXhwLCAnJykudHJpbSgpIDogJydcbiAgICAgICAgfTtcblxuICAgICAgICBtYXRjaCgvXls7XFxzXSovKTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignbWlzc2luZyBcXCd7XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZDtcbiAgICAgICAgbGV0IGRlY2xzID0gY29tbWVudHMoKTtcblxuICAgICAgICB3aGlsZSAoKGQgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgICAgICAgZGVjbHMucHVzaChkKTtcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ21pc3NpbmcgXFwnfVxcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY2xzO1xuICAgIH1cblxuICAgIC8vIEtleWZyYW1lc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBrZXlmcmFtZSgpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGNvbnN0IHZhbHMgPSBbXTtcbiAgICAgICAgbGV0IG07XG5cbiAgICAgICAgd2hpbGUgKChtID0gbWF0Y2goL14oKFxcZCtcXC5cXGQrfFxcLlxcZCt8XFxkKyklP3xbYS16XSspXFxzKi8pKSkge1xuICAgICAgICAgICAgdmFscy5wdXNoKG1bMV0pO1xuICAgICAgICAgICAgbWF0Y2goL14sXFxzKi8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ2tleWZyYW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgICAgICA6IHZhbHMsXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0X2tleWZyYW1lcygpIHtcbiAgICAgICAgbGV0IG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/a2V5ZnJhbWVzXFxzKi8pO1xuXG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gbVsxXTtcblxuICAgICAgICBtID0gbWF0Y2goL14oWy1cXHddKylcXHMqLyk7XG5cbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0BrZXlmcmFtZXMgbWlzc2luZyBuYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lID0gbVsxXTtcblxuICAgICAgICBpZiAoIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdAa2V5ZnJhbWVzIG1pc3NpbmcgXFwne1xcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZyYW1lO1xuICAgICAgICBsZXQgZnJhbWVzID0gY29tbWVudHMoKTtcblxuICAgICAgICB3aGlsZSAoKGZyYW1lID0ga2V5ZnJhbWUoKSkpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignQGtleWZyYW1lcyBtaXNzaW5nIFxcJ31cXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlICAgICA6ICdrZXlmcmFtZXMnLFxuICAgICAgICAgICAgbmFtZSAgICAgOiBuYW1lLFxuICAgICAgICAgICAgdmVuZG9yICAgOiB2ZW5kb3IsXG4gICAgICAgICAgICBrZXlmcmFtZXM6IGZyYW1lc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEAgUnVsZXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gYXRfcGFnZSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQHBhZ2UgKi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsID0gc2VsZWN0b3IoKSB8fCBbXTtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdwYWdlJywgc2VsZWN0b3JzOiBzZWwsIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKCkgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9mb250ZmFjZSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGZvbnQtZmFjZVxccyovKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ2ZvbnQtZmFjZScsIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9zdXBwb3J0cygpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQHN1cHBvcnRzICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdzdXBwb3J0cycsIHN1cHBvcnRzOiBtWzFdLnRyaW0oKSwgcnVsZXM6IHJ1bGVzKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9ob3N0KCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AaG9zdFxccyovKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ2hvc3QnLCBydWxlczogcnVsZXMoKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X21lZGlhKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AbWVkaWEgKihbXntdKykvKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ21lZGlhJywgbWVkaWE6IG1bMV0udHJpbSgpLCBydWxlczogcnVsZXMoKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2N1c3RvbV9tKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AY3VzdG9tLW1lZGlhXFxzKygtLVteXFxzXSspXFxzKihbXns7XSspOy8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnY3VzdG9tLW1lZGlhJywgbmFtZTogbVsxXS50cmltKCksIG1lZGlhOiBtWzJdLnRyaW0oKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2RvY3VtZW50KCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AKFstXFx3XSspP2RvY3VtZW50ICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdkb2N1bWVudCcsIGRvY3VtZW50OiBtWzJdLnRyaW0oKSwgdmVuZG9yOiBtWzFdID8gbVsxXS50cmltKCkgOiBudWxsLCBydWxlczogcnVsZXMoKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3goKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkAoaW1wb3J0fGNoYXJzZXR8bmFtZXNwYWNlKVxccyooW147XSspOy8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiBtWzFdLCBuYW1lOiBtWzJdLnRyaW0oKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3J1bGUoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoY3NzWzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGF0X2tleWZyYW1lcygpIHx8IGF0X3N1cHBvcnRzKCkgfHwgYXRfaG9zdCgpIHx8IGF0X21lZGlhKCkgfHwgYXRfY3VzdG9tX20oKSB8fCBhdF9wYWdlKCkgfHwgYXRfZG9jdW1lbnQoKSB8fCBhdF9mb250ZmFjZSgpIHx8IGF0X3goKTtcblxuICAgICAgICAgICAgaWYgKHJldCAmJiBzZXR0aW5ncy5vbmx5VmFycykge1xuICAgICAgICAgICAgICAgIGxldCBoYXNWYXJGdW5jID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBAcGFnZSwgQGZvbnQtZmFjZVxuICAgICAgICAgICAgICAgIGlmIChyZXQuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhckZ1bmMgPSByZXQuZGVjbGFyYXRpb25zLnNvbWUoZGVjbCA9PiAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcywgQG1lZGlhLCBAc3VwcG9ydHMsIGV0Yy5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gcmV0LmtleWZyYW1lcyB8fCByZXQucnVsZXMgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzVmFyRnVuYyA9IGFyci5zb21lKG9iaiA9PiAob2JqLmRlY2xhcmF0aW9ucyB8fCBbXSkuc29tZShkZWNsID0+IC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzVmFyRnVuYyA/IHJldCA6IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUnVsZXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gcnVsZSgpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLm9ubHlWYXJzKSB7XG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlZE1hdGNoID0gYmFsYW5jZWQoJ3snLCAnfScsIGNzcyk7XG5cbiAgICAgICAgICAgIC8vIFdoZW4gb25seVZhcnM6dHJ1ZSwgc2tpcCBydWxzZXQgaWYgaXQgZG9lcyBub3QgY29udGFpbiBhIDpyb290XG4gICAgICAgICAgICAvLyB2YXJpYWJsZSBkZWNsYXJhdGlvbiBvZiBhIHZhcmlhYmxlIGZ1bmN0aW9uIHZhbHVlXG4gICAgICAgICAgICBpZiAoYmFsYW5jZWRNYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1ZhckRlY2wgPSBiYWxhbmNlZE1hdGNoLnByZS5pbmRleE9mKCc6cm9vdCcpICE9PSAtMSAmJiAvLS1cXFMqXFxzKjovLnRlc3QoYmFsYW5jZWRNYXRjaC5ib2R5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNWYXJGdW5jID0gL3ZhclxcKC8udGVzdChiYWxhbmNlZE1hdGNoLmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNWYXJEZWNsICYmICFoYXNWYXJGdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IGNzcy5zbGljZShiYWxhbmNlZE1hdGNoLmVuZCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWwgICA9IHNlbGVjdG9yKCkgfHwgW107XG4gICAgICAgIGNvbnN0IGRlY2xzID0gIXNldHRpbmdzLm9ubHlWYXJzID8gZGVjbGFyYXRpb25zKCkgOiBkZWNsYXJhdGlvbnMoKS5maWx0ZXIoZGVjbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNWYXJEZWNsID0gc2VsLnNvbWUocyA9PiBzLmluZGV4T2YoJzpyb290JykgIT09IC0xKSAmJiAvXi0tXFxTLy50ZXN0KGRlY2wucHJvcGVydHkpO1xuICAgICAgICAgICAgY29uc3QgaGFzVmFyRnVuYyA9IC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBoYXNWYXJEZWNsIHx8IGhhc1ZhckZ1bmM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2VsLmxlbmd0aCkge1xuICAgICAgICAgICAgZXJyb3IoJ3NlbGVjdG9yIG1pc3NpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdydWxlJyxcbiAgICAgICAgICAgIHNlbGVjdG9ycyAgIDogc2VsLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bGVzKGNvcmUpIHtcbiAgICAgICAgaWYgKCFjb3JlICYmICFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignbWlzc2luZyBcXCd7XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IHJ1bGVzID0gY29tbWVudHMoKTtcblxuICAgICAgICB3aGlsZSAoY3NzLmxlbmd0aCAmJiAoY29yZSB8fCBjc3NbMF0gIT09ICd9JykgJiYgKG5vZGUgPSBhdF9ydWxlKCkgfHwgcnVsZSgpKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb3JlICYmICFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ21pc3NpbmcgXFwnfVxcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgc3R5bGVzaGVldDoge1xuICAgICAgICAgICAgcnVsZXM6IHJ1bGVzKHRydWUpLFxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLy8gRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IHBhcnNlQ3NzO1xuIiwiLyoqXG4gKiBCYXNlZCBvbiBjc3MgcGFyc2VyL2NvbXBpbGVyIGJ5IE54Q2hnXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTnh0Q2hnL3BpZWNlcy90cmVlL21hc3Rlci9qcy9jc3NfcGFyc2VyXG4gKi9cblxuXG4vLyBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIENvbXBpbGVzIENTUyBBU1QgdG8gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICAgdHJlZSBDU1MgQVNUIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9ICAgW2RlbGltPScnXSBDU1MgcnVsZSBkZWxpbWl0ZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBiZWZvcmUgZWFjaCBub2RlIGlzIHByb2Nlc3NlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5Q3NzKHRyZWUsIGRlbGltID0gJycsIGNiKSB7XG4gICAgY29uc3QgcmVuZGVyTWV0aG9kcyA9IHtcbiAgICAgICAgY2hhcnNldChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BjaGFyc2V0ICcgKyBub2RlLm5hbWUgKyAnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbW1lbnQobm9kZSkge1xuICAgICAgICAgICAgLy8gUHJlc2VydmUgcG9ueWZpbGwgbWFya2VyIGNvbW1lbnRzXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb21tZW50LmluZGV4T2YoJ19fQ1NTVkFSU1BPTllGSUxMJykgPT09IDAgPyAnLyonICsgbm9kZS5jb21tZW50ICsgJyovJyA6ICcnO1xuICAgICAgICB9LFxuICAgICAgICAnY3VzdG9tLW1lZGlhJyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BjdXN0b20tbWVkaWEgJyArIG5vZGUubmFtZSArICcgJyArIG5vZGUubWVkaWEgKyAnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnByb3BlcnR5ICsgJzonICsgbm9kZS52YWx1ZSArICc7JztcbiAgICAgICAgfSxcbiAgICAgICAgZG9jdW1lbnQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAJyArIChub2RlLnZlbmRvciB8fCAnJykgKyAnZG9jdW1lbnQgJyArIG5vZGUuZG9jdW1lbnQgKyAneycgKyB2aXNpdChub2RlLnJ1bGVzKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgJ2ZvbnQtZmFjZScobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAZm9udC1mYWNlJyArICd7JyArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgaG9zdChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Bob3N0JyArICd7JyArIHZpc2l0KG5vZGUucnVsZXMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBpbXBvcnQobm9kZSkge1xuICAgICAgICAgICAgLy8gRklYRURcbiAgICAgICAgICAgIHJldHVybiAnQGltcG9ydCAnICsgbm9kZS5uYW1lICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBrZXlmcmFtZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS52YWx1ZXMuam9pbignLCcpICsgJ3snICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBrZXlmcmFtZXMobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAJyArIChub2RlLnZlbmRvciB8fCAnJykgKyAna2V5ZnJhbWVzICcgKyBub2RlLm5hbWUgKyAneycgKyB2aXNpdChub2RlLmtleWZyYW1lcykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIG1lZGlhKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBub2RlLm1lZGlhICsgJ3snICsgdmlzaXQobm9kZS5ydWxlcykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIG5hbWVzcGFjZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BuYW1lc3BhY2UgJyArIG5vZGUubmFtZSArICc7JztcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BwYWdlICcgKyAobm9kZS5zZWxlY3RvcnMubGVuZ3RoID8gbm9kZS5zZWxlY3RvcnMuam9pbignLCAnKSA6ICcnKSArICd7JyArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgcnVsZShub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNscyA9IG5vZGUuZGVjbGFyYXRpb25zO1xuXG4gICAgICAgICAgICBpZiAoZGVjbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2VsZWN0b3JzLmpvaW4oJywnKSArICd7JyArIHZpc2l0KGRlY2xzKSArICd9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VwcG9ydHMobm9kZSkge1xuICAgICAgICAgICAgLy8gRklYRURcbiAgICAgICAgICAgIHJldHVybiAnQHN1cHBvcnRzICcgKyBub2RlLnN1cHBvcnRzICsgJ3snICsgdmlzaXQobm9kZS5ydWxlcykgKyAnfSc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdmlzaXQobm9kZXMpIHtcbiAgICAgICAgbGV0IGJ1ZiA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBub2Rlc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2Iobik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IHJlbmRlck1ldGhvZHNbbi50eXBlXShuKTtcblxuICAgICAgICAgICAgaWYgKHR4dCkge1xuICAgICAgICAgICAgICAgIGJ1ZiArPSB0eHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodHh0Lmxlbmd0aCAmJiBuLnNlbGVjdG9ycykge1xuICAgICAgICAgICAgICAgICAgICBidWYgKz0gZGVsaW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXQodHJlZS5zdHlsZXNoZWV0LnJ1bGVzKTtcbn1cblxuXG4vLyBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5Q3NzO1xuIiwiLyoqXG4gKiBCYXNlZCBvbiByZXdvcmstdmlzaXQgYnkgcmV3b3JrY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmV3b3JrY3NzL3Jld29yay12aXNpdFxuICovXG5cblxuLy8gRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBWaXNpdCBgbm9kZWAgZGVjbGFyYXRpb25zIHJlY3Vyc2l2ZWx5IGFuZCBpbnZva2UgYGZuKGRlY2xhcmF0aW9ucywgbm9kZSlgLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiB3YWxrQ3NzKG5vZGUsIGZuKXtcbiAgICBub2RlLnJ1bGVzLmZvckVhY2goZnVuY3Rpb24ocnVsZSl7XG4gICAgICAgIC8vIEBtZWRpYSBldGNcbiAgICAgICAgaWYgKHJ1bGUucnVsZXMpIHtcbiAgICAgICAgICAgIHdhbGtDc3MocnVsZSwgZm4pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBrZXlmcmFtZXNcbiAgICAgICAgaWYgKHJ1bGUua2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICBydWxlLmtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleWZyYW1lKXtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ZnJhbWUudHlwZSA9PT0gJ2tleWZyYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBmbihrZXlmcmFtZS5kZWNsYXJhdGlvbnMsIHJ1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAY2hhcnNldCwgQGltcG9ydCBldGNcbiAgICAgICAgaWYgKCFydWxlLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm4ocnVsZS5kZWNsYXJhdGlvbnMsIG5vZGUpO1xuICAgIH0pO1xufVxuXG5cbi8vIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCB3YWxrQ3NzO1xuIiwiLyoqXG4gKiBCYXNlZCBvbiByZXdvcmstdmFycyBieSByZXdvcmtjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXdvcmtjc3MvcmV3b3JrLXZhcnNcbiAqL1xuXG5cbi8vIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCBiYWxhbmNlZCAgICAgZnJvbSAnYmFsYW5jZWQtbWF0Y2gnO1xuaW1wb3J0IHBhcnNlQ3NzICAgICBmcm9tICcuL3BhcnNlLWNzcyc7XG5pbXBvcnQgc3RyaW5naWZ5Q3NzIGZyb20gJy4vc3RyaW5naWZ5LWNzcyc7XG5pbXBvcnQgd2Fsa0NzcyAgICAgIGZyb20gJy4vd2Fsay1jc3MnO1xuXG5cbi8vIENvbnN0YW50cyAmIFZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFZBUl9QUk9QX0lERU5USUZJRVIgPSAnLS0nO1xuY29uc3QgVkFSX0ZVTkNfSURFTlRJRklFUiA9ICd2YXInO1xuY29uc3QgdmFyaWFibGVTdG9yZSAgICAgICA9IHtcbiAgICAvLyBQZXJzaXN0ZWQgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyAobWF0Y2hlcyBtb2Rlcm4gYnJvd3NlcnMpXG4gICAgZG9tIDoge30sXG4gICAgLy8gTm9uLXBlcnNpc3RlZCBjdXN0b20gcHJvcGVydGllcyB2YWx1ZXNcbiAgICB0ZW1wOiB7fSxcbiAgICAvLyBQZXJzaXN0ZWQgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBwYXNzZWQgdXNpbmcgb3B0aW9ucy52YXJpYWJsZXNcbiAgICB1c2VyOiB7fVxufTtcblxuXG4vLyBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFRyYW5zZm9ybXMgVzNDLXN0eWxlIENTUyB2YXJpYWJsZXMgdG8gc3RhdGljIHZhbHVlcyBhbmQgcmV0dXJucyBhbiB1cGRhdGVkXG4gKiBDU1Mgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGNzc1RleHQgQ1NTIGNvbnRhaW5pbmcgdmFyaWFibGUgZGVmaW5pdGlvbnMgYW5kIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5maXhOZXN0ZWRDYWxjPXRydWVdIFJlbW92ZXMgbmVzdGVkICdjYWxjJyBrZXl3b3Jkc1xuICogICAgICAgICAgICAgICAgICAgZm9yIGxlZ2FjeSBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5vbmx5VmFycz1mYWxzZV0gUmVtb3ZlIGRlY2xhcmF0aW9ucyB0aGF0IGRvIG5vdFxuICogICAgICAgICAgICAgICAgICAgY29udGFpbiBhIENTUyB2YXJpYWJsZSBmcm9tIHRoZSByZXR1cm4gdmFsdWUuIE5vdGUgdGhhdFxuICogICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSBhbmQgQGtleWZyYW1lIHJ1bGVzIHJlcXVpcmUgYWxsIGRlY2xhcmF0aW9ucyB0b1xuICogICAgICAgICAgICAgICAgICAgYmUgcmV0dXJuZWQgaWYgYSBDU1MgdmFyaWFibGUgaXMgdXNlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnBlcnNpc3Q9ZmFsc2VdIFBlcnNpc3RzIG9wdGlvbnMudmFyaWFibGVzLFxuICogICAgICAgICAgICAgICAgICAgYWxsb3dpbmcgdmFyaWFibGVzIHNldCBpbiBwcmV2aW91cyBjYWxscyB0byBiZSBhcHBsaWVkIGluXG4gKiAgICAgICAgICAgICAgICAgICBzdWJzZXF1ZW50IGNhbGxzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMucHJlc2VydmU9ZmFsc2VdIFByZXNlcnZlIENTUyB2YXJpYWJsZSBkZWZpbml0aW9uc1xuICogICAgICAgICAgICAgICAgICAgYW5kIGZ1bmN0aW9ucyBpbiB0aGUgcmV0dXJuIHZhbHVlLCBhbGxvd2luZyBcImxpdmVcIiB2YXJpYWJsZVxuICogICAgICAgICAgICAgICAgICAgdXBkYXRlcyB2aWEgSmF2YVNjcmlwdCB0byBjb250aW51ZSB3b3JraW5nIGluIGJyb3dzZXJzIHdpdGhcbiAqICAgICAgICAgICAgICAgICAgIG5hdGl2ZSBDU1MgdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnZhcmlhYmxlcz17fV0gQ1NTIHZhcmlhYmxlIGRlZmluaXRpb25zIHRvIGluY2x1ZGVcbiAqICAgICAgICAgICAgICAgICAgIGR1cmluZyB0cmFuc2Zvcm1hdGlvbi4gQ2FuIGJlIHVzZWQgdG8gYWRkIG5ldyBvdmVycmlkZVxuICogICAgICAgICAgICAgICAgICAgZXhpc2l0bmcgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbldhcm5pbmddIENhbGxiYWNrIG9uIGVhY2ggdHJhbnNmb3JtYXRpb25cbiAqICAgICAgICAgICAgICAgICAgIHdhcm5pbmcuIFBhc3NlcyAxKSB3YXJuaW5nTWVzc2FnZSBhcyBhbiBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcnMoY3NzVGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIGZpeE5lc3RlZENhbGM6IHRydWUsXG4gICAgICAgIG9ubHlWYXJzICAgICA6IGZhbHNlLFxuICAgICAgICBwZXJzaXN0ICAgICAgOiBmYWxzZSxcbiAgICAgICAgcHJlc2VydmUgICAgIDogZmFsc2UsXG4gICAgICAgIHZhcmlhYmxlcyAgICA6IHt9LFxuICAgICAgICBvbldhcm5pbmcoKSB7fVxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgbWFwICAgICAgPSBzZXR0aW5ncy5wZXJzaXN0ID8gdmFyaWFibGVTdG9yZS5kb20gOiB2YXJpYWJsZVN0b3JlLnRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlU3RvcmUuZG9tKSk7XG5cbiAgICAvLyBDb252ZXJ0IGNzc1RleHQgdG8gQVNUICh0aGlzIGNvdWxkIHRocm93IGVycm9ycylcbiAgICBjb25zdCBjc3NUcmVlID0gcGFyc2VDc3MoY3NzVGV4dCwge1xuICAgICAgICBvbmx5VmFyczogc2V0dGluZ3Mub25seVZhcnNcbiAgICB9KTtcblxuICAgIC8vIERlZmluZSB2YXJpYWJsZXNcbiAgICBjc3NUcmVlLnN0eWxlc2hlZXQucnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIGNvbnN0IHZhck5hbWVJbmRpY2VzID0gW107XG5cbiAgICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IHZhcmlhYmxlcyBkZWNsYXJlZCBmb3IgYDpyb290YCBhcmUgc3VwcG9ydGVkXG4gICAgICAgIGlmIChydWxlLnNlbGVjdG9ycy5sZW5ndGggIT09IDEgfHwgcnVsZS5zZWxlY3RvcnNbMF0gIT09ICc6cm9vdCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVjbCwgaSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcCA9IGRlY2wucHJvcGVydHk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRlY2wudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZihWQVJfUFJPUF9JREVOVElGSUVSKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1hcFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHZhck5hbWVJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG9wdGlvbmFsbHkgcmVtb3ZlIGAtLSpgIHByb3BlcnRpZXMgZnJvbSB0aGUgcnVsZVxuICAgICAgICBpZiAoIXNldHRpbmdzLnByZXNlcnZlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmFyTmFtZUluZGljZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5zcGxpY2UodmFyTmFtZUluZGljZXNbaV0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZXN0b3JlIHBlcnNpc3RlZCB1c2VyIHZhbHVlc1xuICAgIE9iamVjdC5rZXlzKHZhcmlhYmxlU3RvcmUudXNlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBtYXBba2V5XSA9IHZhcmlhYmxlU3RvcmUudXNlcltrZXldO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHZhcmlhYmxlcyBkZWZpbmVkIGluIHNldHRpbmdzLnZhcmlhYmxlc1xuICAgIGlmIChPYmplY3Qua2V5cyhzZXR0aW5ncy52YXJpYWJsZXMpLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXdSdWxlID0ge1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdG9ycyAgIDogWyc6cm9vdCddLFxuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAncnVsZSdcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncy52YXJpYWJsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIHByb3BlcnR5IG5hbWVzIHRvIGxlYWRpbmcgJy0tJyBzdHlsZVxuICAgICAgICAgICAgY29uc3QgcHJvcCAgPSBgLS0ke2tleS5yZXBsYWNlKC9eLSsvLCAnJyl9YDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2V0dGluZ3MudmFyaWFibGVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFBlcnNpc3Qgc2V0dGluZ3MudmFyaWFibGVzIHZhbHVlc1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnBlcnNpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVN0b3JlLnVzZXJbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIG1hcCB2YWx1ZSB3aXRoIHNldHRpbmdzLnZhcmlhYmxlcyB2YWx1ZVxuICAgICAgICAgICAgaWYgKG1hcFtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXBbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgZGVjbGFyYXRpb24gdG8gbmV3UnVsZVxuICAgICAgICAgICAgICAgIG5ld1J1bGUuZGVjbGFyYXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogJ2RlY2xhcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3AsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgbmV3IDpyb290IHJ1bGVzZXRcbiAgICAgICAgaWYgKHNldHRpbmdzLnByZXNlcnZlICYmIG5ld1J1bGUuZGVjbGFyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY3NzVHJlZS5zdHlsZXNoZWV0LnJ1bGVzLnB1c2gobmV3UnVsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXNvbHZlIHZhcmlhYmxlc1xuICAgIHdhbGtDc3MoY3NzVHJlZS5zdHlsZXNoZWV0LCBmdW5jdGlvbihkZWNsYXJhdGlvbnMsIG5vZGUpIHtcbiAgICAgICAgbGV0IGRlY2w7XG4gICAgICAgIGxldCByZXNvbHZlZFZhbHVlO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNsYXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlY2wgPSBkZWNsYXJhdGlvbnNbaV07XG4gICAgICAgICAgICB2YWx1ZSA9IGRlY2wudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIHNraXAgY29tbWVudHNcbiAgICAgICAgICAgIGlmIChkZWNsLnR5cGUgIT09ICdkZWNsYXJhdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2tpcCB2YWx1ZXMgdGhhdCBkb24ndCBjb250YWluIHZhcmlhYmxlIGZ1bmN0aW9uc1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5pbmRleE9mKFZBUl9GVU5DX0lERU5USUZJRVIgKyAnKCcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlZFZhbHVlID0gcmVzb2x2ZVZhbHVlKHZhbHVlLCBtYXAsIHNldHRpbmdzKTtcblxuICAgICAgICAgICAgaWYgKHJlc29sdmVkVmFsdWUgIT09IGRlY2wudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLnByZXNlcnZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2wudmFsdWUgPSByZXNvbHZlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNwbGljZShpLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogZGVjbC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGRlY2wucHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogcmVzb2x2ZWRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIGFoZWFkIG9mIHByZXNlcnZlZCBkZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGaXggbmVzdGVkIGNhbGMoKSB2YWx1ZXNcbiAgICBpZiAoc2V0dGluZ3MuZml4TmVzdGVkQ2FsYykge1xuICAgICAgICBmaXhOZXN0ZWRDYWxjKGNzc1RyZWUuc3R5bGVzaGVldC5ydWxlcyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIENTUyBzdHJpbmdcbiAgICByZXR1cm4gc3RyaW5naWZ5Q3NzKGNzc1RyZWUpO1xufVxuXG5cbi8vIEZ1bmN0aW9ucyAoUHJpdmF0ZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFJlbW92ZXMgbmVzdGVkIGNhbGMga2V5d29yZHMgZm9yIGxlZ2FjeSBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBFeGFtcGxlOiBjYWxjKDEgKyBjYWxjKDIgKyBjYWxjKDMgKyAzKSkpID0+IGNhbGMoMSArICgyICsgKDMgKyAzKSkpXG4gKlxuICogQHBhcmFtIHthcnJheX0gcnVsZXNcbiAqL1xuZnVuY3Rpb24gZml4TmVzdGVkQ2FsYyhydWxlcykge1xuICAgIGNvbnN0IHJlQ2FsY0V4cCA9IC8oLVthLXpdKy0pP2NhbGNcXCgvOyAvLyBNYXRjaCBcImNhbGMoXCIgb3IgXCItdmVuZG9yLWNhbGMoXCJcblxuICAgIHJ1bGVzLmZvckVhY2gocnVsZSA9PiB7XG4gICAgICAgIGlmIChydWxlLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChkZWNsID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBkZWNsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlQ2FsY0V4cC50ZXN0KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb290Q2FsYyA9IGJhbGFuY2VkKCdjYWxjKCcsICcpJywgb2xkVmFsdWUgfHwgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gb2xkVmFsdWUuc2xpY2Uocm9vdENhbGMuZW5kKTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocmVDYWxjRXhwLnRlc3Qocm9vdENhbGMuYm9keSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZENhbGMgPSBiYWxhbmNlZChyZUNhbGNFeHAsICcpJywgcm9vdENhbGMuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RDYWxjLmJvZHkgPSBgJHtuZXN0ZWRDYWxjLnByZX0oJHtuZXN0ZWRDYWxjLmJvZHl9KSR7bmVzdGVkQ2FsYy5wb3N0fWA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBgJHtyb290Q2FsYy5wcmV9Y2FsYygke3Jvb3RDYWxjLmJvZHl9YDtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gIXJlQ2FsY0V4cC50ZXN0KG9sZFZhbHVlKSA/IGApJHtyb290Q2FsYy5wb3N0fWAgOiAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWNsLnZhbHVlID0gbmV3VmFsdWUgfHwgZGVjbC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgQ1NTIHZhcigpIGZ1bmN0aW9uKHMpIHdpdGggYG1hcGAgZGF0YSBvciBmYWxsYmFjayB2YWx1ZShzKS4gUmV0dXJuc1xuICogb3JpZ2luYWwgYHZhbHVlYCBpZiB1bmFibGUgdG8gcmVzb2x2ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgU3RyaW5nIGNvbnRhaW5pbmcgQ1NTIHZhcigpIGZ1bmN0aW9ucyB0byByZXNvbHZlXG4gKiBAcGFyYW0ge29iamVjdH0gbWFwIENTUyBjdXN0b20gcHJvcGVydHkga2V5L3ZhbHVlc1xuICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIFNldHRpbmdzIG9iamVjdCBwYXNzZWQgZnJvbSB0cmFuc2Zvcm1WYXJzKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBbX19yZWN1cnNpdmVGYWxsYmFja10gRmFsbGJhY2sgd2hlbiB1bmFibGUgdG8gcmVzb2x2ZSBDU1NcbiAqICAgICAgICAgICAgICAgICB2YXIoKSBmdW5jdGlvbiB0byBhIG1hcCBvciBmYWxsYmFjayB2YWx1ZS4gQWxsb3dzIHJlc3RvcmluZ1xuICogICAgICAgICAgICAgICAgIG9yaWdpbmFsIHZhcigpIGZ1bmN0aW9uIGZyb20gcmVjdXJzaXZlIHJlc29sdmVWYWx1ZSgpIGNhbGxzLlxuICogQHJldHVybiB7c3RyaW5nfSBDU1MgdmFsdWUgd2l0aCB2YXIoKSBmdW5jdGlvbihzKSByZXNvbHZlZCB0byBtYXAgb3IgZmFsbGJhY2tcbiAqICAgICAgICAgICAgICAgICAgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgIHJlc29sdmVWYWx1ZSgnMTBweCB2YXIoLS14KSAzMHB4JywgeyctLXgnOicyMHB4J30sIHsuLi5zZXR0aW5nc30pO1xuICogICAvLyA9PiAnMTBweCAyMHB4IDMwcHgnXG4gKlxuICogICByZXNvbHZlVmFsdWUoJzEwcHgnLCB7fSwgey4uLnNldHRpbmdzfSk7XG4gKiAgIC8vID0+ICcxMHB4J1xuICovXG5mdW5jdGlvbiByZXNvbHZlVmFsdWUodmFsdWUsIG1hcCwgc2V0dGluZ3MgPSB7fSwgX19yZWN1cnNpdmVGYWxsYmFjaykge1xuICAgIGlmICh2YWx1ZS5pbmRleE9mKCd2YXIoJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZURhdGEgPSBiYWxhbmNlZCgnKCcsICcpJywgdmFsdWUpO1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgY29udGVudHMgb2YgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBmdW5jdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFN0cmluZyBjb250YWluaW5nIGNvbnRlbnRzIG9mIENTUyB2YXIoKSBmdW5jdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogICByZXNvbHZlRnVuYygnLS14LCB2YXIoLS15LCBncmVlbiknKVxuICAgICAqICAgLy8gPT4gbWFwWyctLXgnXSBvciBtYXBbJy0teSddIG9yICdncmVlbidcbiAgICAgKlxuICAgICAqICAgcmVzb2x2ZUZ1bmMoJy0tZmFpbCcpXG4gICAgICogICAvLyA9PiAndmFyKC0tZmFpbCknIHdoZW4gbWFwWyctLWZhaWwnXSBkb2VzIG5vdCBleGlzdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVGdW5jKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgICAgICAgICAgICAgICA9IHZhbHVlLnNwbGl0KCcsJylbMF0ucmVwbGFjZSgvW1xcc1xcblxcdF0vZywgJycpO1xuICAgICAgICBjb25zdCBmYWxsYmFjayAgICAgICAgICAgPSAodmFsdWUubWF0Y2goLyg/OlxccyosXFxzKil7MX0oLiopPy8pIHx8IFtdKVsxXTtcbiAgICAgICAgY29uc3QgbWF0Y2ggICAgICAgICAgICAgID0gbWFwLmhhc093blByb3BlcnR5KG5hbWUpID8gU3RyaW5nKG1hcFtuYW1lXSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ICAgICAgICA9IG1hdGNoIHx8IChmYWxsYmFjayA/IFN0cmluZyhmYWxsYmFjaykgOiB1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCB1bnJlc29sdmVkRmFsbGJhY2sgPSBfX3JlY3Vyc2l2ZUZhbGxiYWNrIHx8IHZhbHVlO1xuXG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhgdmFyaWFibGUgXCIke25hbWV9XCIgaXMgdW5kZWZpbmVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVwbGFjZW1lbnQgJiYgcmVwbGFjZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlcGxhY2VtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlVmFsdWUocmVwbGFjZW1lbnQsIG1hcCwgc2V0dGluZ3MsIHVucmVzb2x2ZWRGYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYHZhcigke3VucmVzb2x2ZWRGYWxsYmFja30pYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGJhbGFuY2VkIGJyYWNlIGRhdGFcbiAgICBpZiAoIXZhbHVlRGF0YSkge1xuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZigndmFyKCcpICE9PSAtMSkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKGBtaXNzaW5nIGNsb3NpbmcgXCIpXCIgaW4gdGhlIHZhbHVlIFwiJHt2YWx1ZX1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvLyBCYWxhbmNlZCBicmFjZSBkYXRhIGlzIHZhcigpIGZ1bmN0aW9uXG4gICAgZWxzZSBpZiAodmFsdWVEYXRhLnByZS5zbGljZSgtMykgPT09ICd2YXInKSB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHlWYXJGdW5jID0gdmFsdWVEYXRhLmJvZHkudHJpbSgpLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAoaXNFbXB0eVZhckZ1bmMpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uV2FybmluZygndmFyKCkgbXVzdCBjb250YWluIGEgbm9uLXdoaXRlc3BhY2Ugc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdmFsdWVEYXRhLnByZS5zbGljZSgwLC0zKVxuICAgICAgICAgICAgICAgICsgcmVzb2x2ZUZ1bmModmFsdWVEYXRhLmJvZHkpXG4gICAgICAgICAgICAgICAgKyByZXNvbHZlVmFsdWUodmFsdWVEYXRhLnBvc3QsIG1hcCwgc2V0dGluZ3MpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEJhbGFuY2VkIGJyYWNlIGRhdGEgaXMgTk9UIHZhcigpIGZ1bmN0aW9uXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB2YWx1ZURhdGEucHJlXG4gICAgICAgICAgICArIGAoJHtyZXNvbHZlVmFsdWUodmFsdWVEYXRhLmJvZHksIG1hcCwgc2V0dGluZ3MpfSlgXG4gICAgICAgICAgICArIHJlc29sdmVWYWx1ZSh2YWx1ZURhdGEucG9zdCwgbWFwLCBzZXR0aW5ncylcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVZhcnM7XG5leHBvcnQgeyB2YXJpYWJsZVN0b3JlIH07IiwiLy8gRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IGdldENzc0RhdGEgICAgICAgICAgZnJvbSAnZ2V0LWNzcy1kYXRhJztcbmltcG9ydCB0cmFuc2Zvcm1Dc3MgICAgICAgIGZyb20gJy4vdHJhbnNmb3JtLWNzcyc7XG5pbXBvcnQgeyB2YXJpYWJsZVN0b3JlIH0gICBmcm9tICcuL3RyYW5zZm9ybS1jc3MnO1xuaW1wb3J0IHsgbmFtZSBhcyBwa2dOYW1lIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuXG4vLyBDb25zdGFudHMgJiBWYXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBpc0Jyb3dzZXIgICAgICAgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmNvbnN0IGlzTmF0aXZlU3VwcG9ydCA9IGlzQnJvd3NlciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1Muc3VwcG9ydHMgJiYgd2luZG93LkNTUy5zdXBwb3J0cygnKC0tYTogMCknKTtcblxuY29uc3QgY29uc29sZU1zZ1ByZWZpeCA9ICdjc3NWYXJzKCk6ICc7XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICAvLyBUYXJnZXRzXG4gICAgcm9vdEVsZW1lbnQgIDogaXNCcm93c2VyID8gZG9jdW1lbnQgOiBudWxsLFxuICAgIHNoYWRvd0RPTSAgICA6IGZhbHNlLFxuICAgIC8vIFNvdXJjZXNcbiAgICBpbmNsdWRlICAgICAgOiAnc3R5bGUsbGlua1tyZWw9c3R5bGVzaGVldF0nLFxuICAgIGV4Y2x1ZGUgICAgICA6ICcnLFxuICAgIHZhcmlhYmxlcyAgICA6IHt9LCAgICAvLyB0cmFuc2Zvcm1Dc3NcbiAgICAvLyBPcHRpb25zXG4gICAgZml4TmVzdGVkQ2FsYzogdHJ1ZSwgIC8vIHRyYW5zZm9ybUNzc1xuICAgIG9ubHlMZWdhY3kgICA6IHRydWUsICAvLyBjc3NWYXJzXG4gICAgb25seVZhcnMgICAgIDogZmFsc2UsIC8vIGNzc1ZhcnMsIHBhcnNlQ1NTXG4gICAgcHJlc2VydmUgICAgIDogZmFsc2UsIC8vIHRyYW5zZm9ybUNzc1xuICAgIHNpbGVudCAgICAgICA6IGZhbHNlLCAvLyBjc3NWYXJzXG4gICAgdXBkYXRlRE9NICAgIDogdHJ1ZSwgIC8vIGNzc1ZhcnNcbiAgICB1cGRhdGVVUkxzICAgOiB0cnVlLCAgLy8gY3NzVmFyc1xuICAgIHdhdGNoICAgICAgICA6IG51bGwsICAvLyBjc3NWYXJzXG4gICAgLy8gQ2FsbGJhY2tzXG4gICAgb25CZWZvcmVTZW5kKCkge30sICAgIC8vIGNzc1ZhcnNcbiAgICBvblN1Y2Nlc3MoKSB7fSwgICAgICAgLy8gY3NzVmFyc1xuICAgIG9uV2FybmluZygpIHt9LCAgICAgICAvLyB0cmFuc2Zvcm1Dc3NcbiAgICBvbkVycm9yKCkge30sICAgICAgICAgLy8gY3NzVmFyc1xuICAgIG9uQ29tcGxldGUoKSB7fSAgICAgICAvLyBjc3NWYXJzXG59O1xuY29uc3QgcmVnZXggPSB7XG4gICAgLy8gQ1NTIGNvbW1lbnRzXG4gICAgY3NzQ29tbWVudHM6IC9cXC9cXCpbXFxzXFxTXSs/XFwqXFwvL2csXG4gICAgLy8gQ1NTIGtleWZyYW1lcyAoQGtleWZyYW1lcyAmIEAtVkVORE9SLWtleWZyYW1lcylcbiAgICBjc3NLZXlmcmFtZXM6IC9AKD86LVxcdyotKT9rZXlmcmFtZXMvLFxuICAgIC8vIENTUyByb290IHZhcnNcbiAgICBjc3NSb290UnVsZXM6IC8oPzo6cm9vdFxccyp7XFxzKltefV0qfSkvZyxcbiAgICAvLyBDU1MgdXJsKC4uLikgdmFsdWVzXG4gICAgY3NzVXJsczogL3VybFxcKCg/IVsnXCJdPyg/OmRhdGF8aHR0cHxcXC9cXC8pOilbJ1wiXT8oW14nXCIpXSopWydcIl0/XFwpL2csXG4gICAgLy8gQ1NTIHZhcmlhYmxlIDpyb290IGRlY2xhcmF0aW9ucyBhbmQgdmFyKCkgZnVuY3Rpb24gdmFsdWVzXG4gICAgY3NzVmFyczogLyg/Oig/Ojpyb290XFxzKntcXHMqW147XSo7KlxccyopfCg/OnZhclxcKFxccyopKSgtLVteOildKykoPzpcXHMqWzopXSkvXG59O1xuXG4vLyBNdXRhdGlvbiBvYnNlcnZlciByZWZlcmVuY2UgY3JlYXRlZCB2aWEgb3B0aW9ucy53YXRjaFxubGV0IGNzc1ZhcnNPYnNlcnZlciA9IG51bGw7XG5cbi8vIERlYm91bmNlIHRpbWVyIHVzZWQgd2l0aCBvcHRpb25zLndhdGNoXG5sZXQgZGVib3VuY2VUaW1lciA9IG51bGw7XG5cbi8vIEluZGljYXRlcyBpZiBkb2N1bWVudC1sZXZlbCBjdXN0b20gcHJvcGVydHkgdmFsdWVzIGhhdmUgYmVlbiBwYXJzZWQsIHN0b3JlZCxcbi8vIGFuZCByZWFkeSBmb3IgdXNlIHdpdGggb3B0aW9ucy5zaGFkb3dET01cbmxldCBpc1NoYWRvd0RPTVJlYWR5ID0gZmFsc2U7XG5cblxuLy8gRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBGZXRjaGVzLCBwYXJzZXMsIGFuZCB0cmFuc2Zvcm1zIENTUyBjdXN0b20gcHJvcGVydGllcyBmcm9tIHNwZWNpZmllZFxuICogPHN0eWxlPiBhbmQgPGxpbms+IGVsZW1lbnRzIGludG8gc3RhdGljIHZhbHVlcywgdGhlbiBhcHBlbmRzIGEgbmV3IDxzdHlsZT5cbiAqIGVsZW1lbnQgd2l0aCBzdGF0aWMgdmFsdWVzIHRvIHRoZSBET00gdG8gcHJvdmlkZSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gKiBjb21wYXRpYmlsaXR5IGZvciBsZWdhY3kgYnJvd3NlcnMuIEFsc28gcHJvdmlkZXMgYSBzaW5nbGUgaW50ZXJmYWNlIGZvclxuICogbGl2ZSB1cGRhdGVzIG9mIHJ1bnRpbWUgdmFsdWVzIGluIGJvdGggbW9kZXJuIGFuZCBsZWdhY3kgYnJvd3NlcnMuXG4gKlxuICogQHByZXNlcnZlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnJvb3RFbGVtZW50PWRvY3VtZW50XSBSb290IGVsZW1lbnQgdG8gdHJhdmVyc2UgZm9yXG4gKiAgICAgICAgICAgICAgICAgICA8bGluaz4gYW5kIDxzdHlsZT4gbm9kZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5zaGFkb3dET009ZmFsc2VdIERldGVybWluZXMgaWYgc2hhZG93IERPTSA8bGluaz5cbiAqICAgICAgICAgICAgICAgICAgIGFuZCA8c3R5bGU+IG5vZGVzIHdpbGwgYmUgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgW29wdGlvbnMuaW5jbHVkZT1cInN0eWxlLGxpbmtbcmVsPXN0eWxlc2hlZXRdXCJdIENTUyBzZWxlY3RvclxuICogICAgICAgICAgICAgICAgICAgbWF0Y2hpbmcgPGxpbmsgcmU9XCJzdHlsZXNoZWV0XCI+IGFuZCA8c3R5bGU+IG5vZGVzIHRvXG4gKiAgICAgICAgICAgICAgICAgICBwcm9jZXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5leGNsdWRlXSBDU1Mgc2VsZWN0b3IgbWF0Y2hpbmcgPGxpbmtcbiAqICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlaHNlZXRcIj4gYW5kIDxzdHlsZT4gbm9kZXMgdG8gZXhjbHVkZSBmcm9tIHRob3NlXG4gKiAgICAgICAgICAgICAgICAgICBtYXRjaGVzIGJ5IG9wdGlvbnMuaW5jbHVkZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMudmFyaWFibGVzXSBBIG1hcCBvZiBjdXN0b20gcHJvcGVydHkgbmFtZS92YWx1ZVxuICogICAgICAgICAgICAgICAgICAgcGFpcnMuIFByb3BlcnR5IG5hbWVzIGNhbiBvbWl0IG9yIGluY2x1ZGUgdGhlIGxlYWRpbmdcbiAqICAgICAgICAgICAgICAgICAgIGRvdWJsZS1oeXBoZW4gKOKAlCksIGFuZCB2YWx1ZXMgc3BlY2lmaWVkIHdpbGwgb3ZlcnJpZGVcbiAqICAgICAgICAgICAgICAgICAgIHByZXZpb3VzIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLmZpeE5lc3RlZENhbGM9dHJ1ZV0gUmVtb3ZlcyBuZXN0ZWQgJ2NhbGMnIGtleXdvcmRzXG4gKiAgICAgICAgICAgICAgICAgICBmb3IgbGVnYWN5IGJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLm9ubHlMZWdhY3k9dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgb25seSBnZW5lcmF0ZSBsZWdhY3ktY29tcGF0aWJsZSBDU1MgaW4gYnJvd3NlcnMgdGhhdCBsYWNrXG4gKiAgICAgICAgICAgICAgICAgICBuYXRpdmUgc3VwcG9ydCAoaS5lLiwgbGVnYWN5IGJyb3dzZXJzKVxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMub25seVZhcnM9ZmFsc2VdIERldGVybWluZXMgaWYgQ1NTIHJ1bGVzZXRzIGFuZFxuICogICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zIHdpdGhvdXQgYSBjdXN0b20gcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlXG4gKiAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIHBvbnlmaWxsLWdlbmVyYXRlZCBDU1NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnByZXNlcnZlPWZhbHNlXSBEZXRlcm1pbmVzIGlmIHRoZSBvcmlnaW5hbCBDU1NcbiAqICAgICAgICAgICAgICAgICAgIGN1c3RvbSBwcm9wZXJ0eSBkZWNsYXJhdGlvbiB3aWxsIGJlIHJldGFpbmVkIGluIHRoZVxuICogICAgICAgICAgICAgICAgICAgcG9ueWZpbGwtZ2VuZXJhdGVkIENTUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnNpbGVudD1mYWxzZV0gRGV0ZXJtaW5lcyBpZiB3YXJuaW5nIGFuZCBlcnJvclxuICogICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNvbnNvbGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnVwZGF0ZURPTT10cnVlXSBEZXRlcm1pbmVzIGlmIHRoZSBwb255ZmlsbCB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICB1cGRhdGUgdGhlIERPTSBhZnRlciBwcm9jZXNzaW5nIENTUyBjdXN0b20gcHJvcGVydGllc1xuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMudXBkYXRlVVJMcz10cnVlXSBEZXRlcm1pbmVzIGlmIHRoZSBwb255ZmlsbCB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBjb252ZXJ0IHJlbGF0aXZlIHVybCgpIHBhdGhzIHRvIGFic29sdXRlIHVybHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy53YXRjaD1mYWxzZV0gRGV0ZXJtaW5lcyBpZiBhIE11dGF0aW9uT2JzZXJ2ZXIgd2lsbFxuICogICAgICAgICAgICAgICAgICAgYmUgY3JlYXRlZCB0aGF0IHdpbGwgZXhlY3V0ZSB0aGUgcG9ueWZpbGwgd2hlbiBhIDxsaW5rPiBvclxuICogICAgICAgICAgICAgICAgICAgPHN0eWxlPiBET00gbXV0YXRpb24gaXMgb2JzZXJ2ZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkJlZm9yZVNlbmRdIENhbGxiYWNrIGJlZm9yZSBYSFIgaXMgc2VudC4gUGFzc2VzXG4gKiAgICAgICAgICAgICAgICAgICAxKSB0aGUgWEhSIG9iamVjdCwgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlXG4gKiAgICAgICAgICAgICAgICAgICBzb3VyY2UgVVJMIGFzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uU3VjY2Vzc10gQ2FsbGJhY2sgYWZ0ZXIgQ1NTIGRhdGEgaGFzIGJlZW5cbiAqICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZCBmcm9tIGVhY2ggbm9kZSBhbmQgYmVmb3JlIENTUyBjdXN0b20gcHJvcGVydGllc1xuICogICAgICAgICAgICAgICAgICAgaGF2ZSBiZWVuIHRyYW5zZm9ybWVkLiBBbGxvd3MgbW9kaWZ5aW5nIHRoZSBDU1MgZGF0YSBiZWZvcmVcbiAqICAgICAgICAgICAgICAgICAgIGl0IGlzIHRyYW5zZm9ybWVkIGJ5IHJldHVybmluZyBhbnkgc3RyaW5nIHZhbHVlIChvciBmYWxzZVxuICogICAgICAgICAgICAgICAgICAgdG8gc2tpcCkuIFBhc3NlcyAxKSBDU1MgdGV4dCwgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCBhbmRcbiAqICAgICAgICAgICAgICAgICAgIDMpIHRoZSBzb3VyY2UgVVJMIGFzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uV2FybmluZ10gQ2FsbGJhY2sgYWZ0ZXIgZWFjaCBDU1MgcGFyc2luZyB3YXJuaW5nXG4gKiAgICAgICAgICAgICAgICAgICBoYXMgb2NjdXJyZWQuIFBhc3NlcyAxKSBhIHdhcm5pbmcgbWVzc2FnZSBhcyBhbiBhcmd1bWVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uRXJyb3JdIENhbGxiYWNrIGFmdGVyIGEgQ1NTIHBhcnNpbmcgZXJyb3IgaGFzXG4gKiAgICAgICAgICAgICAgICAgICBvY2N1cnJlZCBvciBhbiBYSFIgcmVxdWVzdCBoYXMgZmFpbGVkLiBQYXNzZXMgMSkgYW4gZXJyb3JcbiAqICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsIGFuZCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIDMpIHhociwgYW5kIDQgdXJsIGFzXG4gKiAgICAgICAgICAgICAgICAgICBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNvbXBsZXRlXSBDYWxsYmFjayBhZnRlciBhbGwgQ1NTIGhhcyBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQsIGxlZ2FjeS1jb21wYXRpYmxlIENTUyBoYXMgYmVlbiBnZW5lcmF0ZWQsIGFuZFxuICogICAgICAgICAgICAgICAgICAgKG9wdGlvbmFsbHkpIHRoZSBET00gaGFzIGJlZW4gdXBkYXRlZC4gUGFzc2VzIDEpIGEgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBzdHJpbmcgd2l0aCBDU1MgdmFyaWFibGUgdmFsdWVzIHJlc29sdmVkLCAyKSBhIHJlZmVyZW5jZSB0b1xuICogICAgICAgICAgICAgICAgICAgdGhlIGFwcGVuZGVkIDxzdHlsZT4gbm9kZSwgMykgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsXG4gKiAgICAgICAgICAgICAgICAgICBjdXN0b20gcHJvcGVyaWVzIG5hbWVzIGFuZCB2YWx1ZXMsIGFuZCA0KSB0aGUgcG9ueWZpbGxcbiAqICAgICAgICAgICAgICAgICAgIGV4ZWN1dGlvbiB0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgY3NzVmFycyh7XG4gKiAgICAgcm9vdEVsZW1lbnQgIDogZG9jdW1lbnQsXG4gKiAgICAgc2hhZG93RE9NICAgIDogZmFsc2UsXG4gKiAgICAgaW5jbHVkZSAgICAgIDogJ3N0eWxlLGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsXG4gKiAgICAgZXhjbHVkZSAgICAgIDogJycsXG4gKiAgICAgdmFyaWFibGVzICAgIDoge30sXG4gKiAgICAgZml4TmVzdGVkQ2FsYzogdHJ1ZSxcbiAqICAgICBvbmx5TGVnYWN5ICAgOiB0cnVlLFxuICogICAgIG9ubHlWYXJzICAgICA6IGZhbHNlLFxuICogICAgIHByZXNlcnZlICAgICA6IGZhbHNlLFxuICogICAgIHNpbGVudCAgICAgICA6IGZhbHNlLFxuICogICAgIHVwZGF0ZURPTSAgICA6IHRydWUsXG4gKiAgICAgdXBkYXRlVVJMcyAgIDogdHJ1ZSxcbiAqICAgICB3YXRjaCAgICAgICAgOiBmYWxzZSxcbiAqICAgICBvbkJlZm9yZVNlbmQoeGhyLCBub2RlLCB1cmwpIHt9LFxuICogICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHt9LFxuICogICAgIG9uV2FybmluZyhtZXNzYWdlKSB7fSxcbiAqICAgICBvbkVycm9yKG1lc3NhZ2UsIG5vZGUsIHhociwgdXJsKSB7fSxcbiAqICAgICBvbkNvbXBsZXRlKGNzc1RleHQsIHN0eWxlTm9kZSwgY3NzVmFyaWFibGVzLCBiZW5jaG1hcmspIHt9XG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBjc3NWYXJzKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHNldHRpbmdzICAgID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0eWxlTm9kZUlkID0gcGtnTmFtZTtcblxuICAgIC8vIEFsd2F5cyBleGNsdWRlIHN0eWxlTm9kZUlkIGVsZW1lbnQsIHdoaWNoIGlzIHRoZSBnZW5lcmF0ZWQgPHN0eWxlPiBub2RlXG4gICAgLy8gY29udGFpbmluZyBwcmV2aW91c2x5IHRyYW5zZm9ybWVkIENTUy5cbiAgICBzZXR0aW5ncy5leGNsdWRlID0gYCMke3N0eWxlTm9kZUlkfWAgKyAoc2V0dGluZ3MuZXhjbHVkZSA/IGAsJHtzZXR0aW5ncy5leGNsdWRlfWAgOiAnJyk7XG5cbiAgICAvLyBTdG9yZSBiZW5jaG1hcmsgc3RhcnQgdGltZVxuICAgIHNldHRpbmdzLl9iZW5jaG1hcmsgPSAhc2V0dGluZ3MuX2JlbmNobWFyayA/IGdldFRpbWVTdGFtcCgpIDogc2V0dGluZ3MuX2JlbmNobWFyaztcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKG1lc3NhZ2UsIHNvdXJjZU5vZGUsIHhociwgdXJsKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2lsZW50KSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7Y29uc29sZU1zZ1ByZWZpeH0ke21lc3NhZ2V9XFxuYCwgc291cmNlTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0aW5ncy5vbkVycm9yKG1lc3NhZ2UsIHNvdXJjZU5vZGUsIHhociwgdXJsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVXYXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaWxlbnQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2NvbnNvbGVNc2dQcmVmaXh9JHttZXNzYWdlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vIEV4aXQgaWYgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgKGUuZy4gTm9kZSlcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGlzY29ubmVjdCBleGlzdGluZyBNdXRhdGlvbk9ic2VydmVyXG4gICAgaWYgKHNldHRpbmdzLndhdGNoID09PSBmYWxzZSAmJiBjc3NWYXJzT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3NzVmFyc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgLyByZWNyZWF0ZSBNdXRhdGlvbk9ic2VydmVyXG4gICAgaWYgKHNldHRpbmdzLndhdGNoKSB7XG4gICAgICAgIGFkZE11dGF0aW9uT2JzZXJ2ZXIoc2V0dGluZ3MsIHN0eWxlTm9kZUlkKTtcbiAgICAgICAgY3NzVmFyc0RlYm91bmNlZChzZXR0aW5ncyk7XG4gICAgfVxuICAgIC8vIFZlcmlmeSByZWFkeVN0YXRlIHRvIGVuc3VyZSBhbGwgPGxpbms+IGFuZCA8c3R5bGU+IG5vZGVzIGFyZSBhdmFpbGFibGVcbiAgICBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgY29uc3QgaXNTaGFkb3dFbG0gPSBzZXR0aW5ncy5zaGFkb3dET00gfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQuc2hhZG93Um9vdCB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5ob3N0O1xuXG4gICAgICAgIC8vIE5hdGl2ZSBzdXBwb3J0XG4gICAgICAgIGlmIChpc05hdGl2ZVN1cHBvcnQgJiYgc2V0dGluZ3Mub25seUxlZ2FjeSkge1xuICAgICAgICAgICAgLy8gQXBwbHkgc2V0dGluZ3MudmFyaWFibGVzXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MudXBkYXRlRE9NKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxtID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQuaG9zdCB8fCAoc2V0dGluZ3Mucm9vdEVsZW1lbnQgPT09IGRvY3VtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogc2V0dGluZ3Mucm9vdEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHZhcmlhYmxlcyB1c2luZyBuYXRpdmUgbWV0aG9kc1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzLnZhcmlhYmxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBwcm9wZXJ0eSBuYW1lcyB0byBsZWFkaW5nICctLScgc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCAgPSBgLS0ke2tleS5yZXBsYWNlKC9eLSsvLCAnJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzZXR0aW5ncy52YXJpYWJsZXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbG0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFBvbnlmaWxsOiBIYW5kbGUgcm9vdEVsZW1lbnQgc2V0IHRvIGEgc2hhZG93IGhvc3Qgb3Igcm9vdFxuICAgICAgICBlbHNlIGlmIChpc1NoYWRvd0VsbSAmJiAhaXNTaGFkb3dET01SZWFkeSkge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBkb2N1bWVudC1sZXZlbCBDU1NcbiAgICAgICAgICAgIGdldENzc0RhdGEoe1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBkZWZhdWx0cy5yb290RWxlbWVudCxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBkZWZhdWx0cy5pbmNsdWRlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IHNldHRpbmdzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NSb290RGVjbHMgPSAoY3NzVGV4dC5tYXRjaChyZWdleC5jc3NSb290UnVsZXMpIHx8IFtdKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gb25seSBtYXRjaGluZyA6cm9vdCB7Li4ufSBibG9ja3NcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1Jvb3REZWNscyB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIG5vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gQ1NTLCB3aGljaCBzdG9yZXMgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBmcm9tXG4gICAgICAgICAgICAgICAgICAgIC8vIGNzc1RleHQgaW4gdmFyaWFibGVTdG9yZS4gVGhpcyBzdGVwIGVuc3VyZXMgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZVN0b3JlIGNvbnRhaW5zIGFsbCBkb2N1bWVudC1sZXZlbCBjdXN0b20gcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIGZvciBzdWJzZXF1ZW50IHBvbnlmaWxsIGNhbGxzLlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Dc3MoY3NzVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpc1NoYWRvd0RPTVJlYWR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBwb255ZmlsbCBhZ2FpbiB0byBwcm9jZXNzIHRoZSByb290RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWFsbHkgc3BlY2lmaWVkLiBWYWx1ZXMgc3RvcmVkIGluIHZhcmlhYmxlU3RvcmUgd2lsbFxuICAgICAgICAgICAgICAgICAgICAvLyBiZSB1c2VkIHRvIHRyYW5zZm9ybSB2YWx1ZXMgaW4gc2hhZG93IGhvc3Qvcm9vdCBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgY3NzVmFycyhzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUG9ueWZpbGw6IFByb2Nlc3MgQ1NTXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2V0Q3NzRGF0YSh7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IHNldHRpbmdzLnJvb3RFbGVtZW50LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHNldHRpbmdzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogc2V0dGluZ3MuZXhjbHVkZSxcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZpbHRlciBkb2VzIGEgdGVzdCBvbiBlYWNoIGJsb2NrIG9mIENTUy4gQW4gYWRkaXRpb25hbFxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBpcyB1c2VkIGluIHRoZSBwYXJzZXIgdG8gcmVtb3ZlIGluZGl2aWR1YWxcbiAgICAgICAgICAgICAgICAvLyBkZWNsYXJhdGlvbnMuXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBzZXR0aW5ncy5vbmx5VmFycyA/IHJlZ2V4LmNzc1ZhcnMgOiBudWxsLFxuICAgICAgICAgICAgICAgIG9uQmVmb3JlU2VuZDogc2V0dGluZ3Mub25CZWZvcmVTZW5kLFxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHJldHVyblZhbCAhPT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ocmV0dXJuVmFsKSA9PT0gZmFsc2UgPyAnJyA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBhdHRyaWJ1dGUgdG8gaW5kaWNhdGUgbm9kZSBoYXMgYmVlbiBwcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3NzdmFycycsICcnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHJlbGF0aXZlIHVybCguLi4pIHZhbHVlcyB0byBhYnNvbHV0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXBkYXRlVVJMcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzVXJscyA9IGNzc1RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY29tbWVudHMgdG8gYXZvaWQgcHJvY2Vzc2luZyBAaW1wb3J0IGluIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UocmVnZXguY3NzQ29tbWVudHMsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIHVybCguLi4pIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRjaChyZWdleC5jc3NVcmxzKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVXJscy5mb3JFYWNoKGNzc1VybCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkVXJsID0gY3NzVXJsLnJlcGxhY2UocmVnZXguY3NzVXJscywgJyQxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gZ2V0RnVsbFVybChvbGRVcmwsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKGNzc1VybCwgY3NzVXJsLnJlcGxhY2Uob2xkVXJsLCBuZXdVcmwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVycm9yKHhociwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVXJsID0geGhyLnJlc3BvbnNlVVJMIHx8IGdldEZ1bGxVcmwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGV4dCAgPSB4aHIuc3RhdHVzVGV4dCA/IGAoJHt4aHIuc3RhdHVzVGV4dH0pYCA6ICdVbnNwZWNpZmllZCBFcnJvcicgKyAoeGhyLnN0YXR1cyA9PT0gMCA/ICcgKHBvc3NpYmx5IENPUlMgcmVsYXRlZCknIDogJycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1zZyAgICA9IGBDU1MgWEhSIEVycm9yOiAke3Jlc3BvbnNlVXJsfSAke3hoci5zdGF0dXN9ICR7c3RhdHVzVGV4dH1gO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVycm9yTXNnLCBub2RlLCB4aHIsIHJlc3BvbnNlVXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIG5vZGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NNYXJrZXIgICA9IC9cXC9cXCpfX0NTU1ZBUlNQT05ZRklMTC0oXFxkKylfX1xcKlxcLy9nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NTZXR0aW5ncyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgICAgICA6IHNldHRpbmdzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlICAgICAgOiBzZXR0aW5ncy5leGNsdWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzICAgIDogc2V0dGluZ3MudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4TmVzdGVkQ2FsYzogc2V0dGluZ3MuZml4TmVzdGVkQ2FsYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlWYXJzICAgICA6IHNldHRpbmdzLm9ubHlWYXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmUgICAgIDogc2V0dGluZ3MucHJlc2VydmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWxlbnQgICAgICAgOiBzZXR0aW5ncy5zaWxlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVVUkxzICAgOiBzZXR0aW5ncy51cGRhdGVVUkxzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU5vZGUgID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c3R5bGVOb2RlSWR9YCkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkRhdGEgICA9IHN0eWxlTm9kZS5fX2Nzc1ZhcnMgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2FtZURhdGEgPSBwcmV2RGF0YS5jc3NUZXh0ID09PSBjc3NUZXh0ICYmIHByZXZEYXRhLnNldHRpbmdzID09PSBjc3NTZXR0aW5ncztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzS2V5ZnJhbWVzV2l0aFZhcnM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBjc3NUZXh0IHRvIGV4aXN0aW5nIHRyYW5zZm9ybWVkIENTU1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHN0eWxlTm9kZS50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3Muc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGAke2NvbnNvbGVNc2dQcmVmaXh9Tm8gY2hhbmdlc2AsIHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSBkYXRhIGZvciBjb21wYXJpc29uIG9uIHN1YnNlcXVlbnQgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTm9kZS5fX2Nzc1ZhcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogY3NzU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbmNhdGVuYXRlIGNzc0FycmF5IGl0ZW1zLCByZXBsYWNpbmcgdGhvc2UgdGhhdCBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGNvbnRhaW4gYSBDU1MgY3VzdG9tIHByb3BlcnR5IGRlY2xhcmFpb24gb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHdpdGggYSB0ZW1wb3JhcnkgbWFya2VyIC4gQWZ0ZXIgdGhlIENTUyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtZWQsIHRoZSBtYXJrZXJzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoaW5nIGNzc0FycmF5IGl0ZW0uIFRoaXMgb3B0aW1pemF0aW9uIGlzIGRvbmUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIHByb2Nlc3NpbmcgQ1NTIHRoYXQgd2lsbCBub3QgY2hhbmdlIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3VsdHMgb2YgdGhlIHBvbnlmaWxsLlxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc0FycmF5Lm1hcCgoY3NzLCBpKSA9PiByZWdleC5jc3NWYXJzLnRlc3QoY3NzKSA/IGNzcyA6IGAvKl9fQ1NTVkFSU1BPTllGSUxMLSR7aX1fXyovYCkuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHRyYW5zZm9ybUNzcyhjc3NUZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeE5lc3RlZENhbGM6IHNldHRpbmdzLmZpeE5lc3RlZENhbGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlWYXJzICAgICA6IHNldHRpbmdzLm9ubHlWYXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ICAgICAgOiBzZXR0aW5ncy51cGRhdGVET00sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlICAgICA6IHNldHRpbmdzLnByZXNlcnZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgICAgOiBzZXR0aW5ncy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uV2FybmluZyAgICA6IGhhbmRsZVdhcm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0tleWZyYW1lc1dpdGhWYXJzID0gcmVnZXguY3NzS2V5ZnJhbWVzLnRlc3QoY3NzVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIG1hcmtlcnMgd2l0aCBhcHByb3ByaWF0ZSBjc3NBcnJheSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShjc3NNYXJrZXIsIChtYXRjaCwgZ3JvdXAxKSA9PiBjc3NBcnJheVtncm91cDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvclRocm93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSBjc3NBcnJheSB0byBkZXRlY3QgQ1NTIHRleHQgYW5kIG5vZGUocylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zaWJpbGUgZm9yIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0FycmF5LmZvckVhY2goKGNzc1RleHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSB0cmFuc2Zvcm1Dc3MoY3NzVGV4dCwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JOb2RlID0gbm9kZUFycmF5W2kgLSAwXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyLm1lc3NhZ2UsIGVycm9yTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBldmVudCB0aGUgZXJyb3IgdGhyb3duIHdhcyBub3QgZHVlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtQ3NzLCBoYW5kbGUgdGhlIG9yaWdpbmFsIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3Mgc2hhZG93IERPTVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2hhZG93RE9NKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbG1zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnJvb3RFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZXMgb3ZlciBhbGwgZWxlbWVudHMgaW4gcm9vdEVsZW1lbnQgYW5kIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjc3NWYXJzIG9uIGVhY2ggc2hhZG93Um9vdCwgcGFzc2luZyBkb2N1bWVudC1sZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXMgYXMgb3B0aW9ucy52YXJpYWJsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgZWxtOyAoZWxtID0gZWxtc1tpXSk7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbG0uc2hhZG93Um9vdCAmJiBlbG0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBlbG0uc2hhZG93Um9vdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyAgOiB2YXJpYWJsZVN0b3JlLmRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NWYXJzKHNoYWRvd1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2FtZURhdGEgJiYgbm9kZUFycmF5ICYmIG5vZGVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc05vZGVzID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tkYXRhLWNzc3ZhcnNdLHN0eWxlW2RhdGEtY3NzdmFyc10nKSB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbCs9XCJzdHlsZXNoZWV0XCJdLHN0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0Tm9kZSA9IGNzc05vZGVzID8gY3NzTm9kZXNbY3NzTm9kZXMubGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgcG9ueWZpbGwgPHN0eWxlPiBhZnRlciBsYXN0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlTm9kZSwgbGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHBvbnlmaWxsIDxzdHlsZT4gYWZ0ZXIgbGFzdCBsaW5rL3N0eWxlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBzZXR0aW5ncy5yb290RWxlbWVudC5oZWFkIHx8IHNldHRpbmdzLnJvb3RFbGVtZW50LmJvZHkgfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVET00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIHN0eWxlTm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0tleWZyYW1lc1dpdGhWYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeEtleWZyYW1lcyhzZXR0aW5ncy5yb290RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MudXBkYXRlRE9NID8gdmFyaWFibGVTdG9yZS5kb20gOiB2YXJpYWJsZVN0b3JlLnRlbXApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUaW1lU3RhbXAoKSAtIHNldHRpbmdzLl9iZW5jaG1hcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWxheSBmdW5jdGlvbiB1bnRpbCBET01Db250ZW50TG9hZGVkIGV2ZW50IGlzIGZpcmVkXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIGluaXQoZXZ0KSB7XG4gICAgICAgICAgICBjc3NWYXJzKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBEZWJvdW5jZXMgY3NzVmFycygpIGNhbGxzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gKi9cbmZ1bmN0aW9uIGNzc1ZhcnNEZWJvdW5jZWQoc2V0dGluZ3MpIHtcbiAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldHRpbmdzLl9iZW5jaG1hcmsgPSBudWxsO1xuICAgICAgICBjc3NWYXJzKHNldHRpbmdzKTtcbiAgICB9LCAxMDApO1xufVxuXG5cbi8vIEZ1bmN0aW9ucyAoUHJpdmF0ZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIENyZWF0ZXMgbXV0YXRpb24gb2JzZXJ2ZXIgdGhhdCBleGVjdXRlcyB0aGUgcG9ueWZpbGwgd2hlbiBhIDxsaW5rPiBvciA8c3R5bGU+XG4gKiBET00gbXV0YXRpb24gaXMgb2JzZXJ2ZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gaWdub3JlSWRcbiAqL1xuZnVuY3Rpb24gYWRkTXV0YXRpb25PYnNlcnZlcihzZXR0aW5ncywgaWdub3JlSWQpIHtcbiAgICBpZiAoIXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0xpbmsgID0gbm9kZSA9PiBub2RlLnRhZ05hbWUgPT09ICdMSU5LJyAmJiAobm9kZS5nZXRBdHRyaWJ1dGUoJ3JlbCcpIHx8ICcnKS5pbmRleE9mKCdzdHlsZXNoZWV0JykgIT09IC0xO1xuICAgIGNvbnN0IGlzU3R5bGUgPSBub2RlID0+IG5vZGUudGFnTmFtZSA9PT0gJ1NUWUxFJyAmJiAoaWdub3JlSWQgPyBub2RlLmlkICE9PSBpZ25vcmVJZCA6IHRydWUpO1xuXG4gICAgaWYgKGNzc1ZhcnNPYnNlcnZlcikge1xuICAgICAgICBjc3NWYXJzT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIHNldHRpbmdzLndhdGNoID0gZGVmYXVsdHMud2F0Y2g7XG5cbiAgICBjc3NWYXJzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaGFzQ1NTTXV0YXRpb24gPSBtdXRhdGlvbnMuc29tZSgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NTU011dGF0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgICBpc0NTU011dGF0aW9uID0gaXNMaW5rKG11dGF0aW9uLnRhcmdldCkgfHwgaXNTdHlsZShtdXRhdGlvbi50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRlZE5vZGVzICAgPSBBcnJheS5hcHBseShudWxsLCBtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkTm9kZXMgPSBBcnJheS5hcHBseShudWxsLCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXG4gICAgICAgICAgICAgICAgaXNDU1NNdXRhdGlvbiA9IFtdLmNvbmNhdChhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMpLnNvbWUobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRMaW5rICA9IGlzTGluayhub2RlKSAmJiAhbm9kZS5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZFN0eWxlID0gaXNTdHlsZShub2RlKSAmJiByZWdleC5jc3NWYXJzLnRlc3Qobm9kZS50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpc1ZhbGlkTGluayB8fCBpc1ZhbGlkU3R5bGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXNDU1NNdXRhdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc0NTU011dGF0aW9uKSB7XG4gICAgICAgICAgICBjc3NWYXJzRGVib3VuY2VkKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3NzVmFyc09ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXMgICAgIDogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2Rpc2FibGVkJywgJ2hyZWYnXSxcbiAgICAgICAgY2hpbGRMaXN0ICAgICAgOiB0cnVlLFxuICAgICAgICBzdWJ0cmVlICAgICAgICA6IHRydWVcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaXhlcyBpc3N1ZSB3aXRoIGtleWZyYW1lIHByb3BlcnRpZXMgc2V0IHVzaW5nIENTUyBjdXN0b20gcHJvcGVydHkgbm90IGJlaW5nXG4gKiBhcHBsaWVkIHByb3Blcmx5IGluIHNvbWUgbGVnYWN5IChJRSkgYW5kIG1vZGVybiAoU2FmYXJpKSBicm93c2Vycy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdEVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZml4S2V5ZnJhbWVzKHJvb3RFbGVtZW50KSB7XG4gICAgY29uc3QgYW5pbWF0aW9uTmFtZVByb3AgPSBbXG4gICAgICAgICdhbmltYXRpb24tbmFtZScsXG4gICAgICAgICctbW96LWFuaW1hdGlvbi1uYW1lJyxcbiAgICAgICAgJy13ZWJraXQtYW5pbWF0aW9uLW5hbWUnXG4gICAgXS5maWx0ZXIocHJvcCA9PiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpW3Byb3BdKVswXTtcblxuICAgIGlmIChhbmltYXRpb25OYW1lUHJvcCkge1xuICAgICAgICBjb25zdCBhbGxOb2RlcyAgICAgID0gcm9vdEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcbiAgICAgICAgY29uc3Qga2V5ZnJhbWVOb2RlcyA9IFtdO1xuICAgICAgICBjb25zdCBuYW1lTWFya2VyICAgID0gJ19fQ1NTVkFSU1BPTllGSUxMLUtFWUZSQU1FU19fJztcblxuICAgICAgICAvLyBNb2RpZnkgYW5pbWF0aW9uIG5hbWVcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFsbE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlICAgICAgICAgID0gYWxsTm9kZXNbaV07XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25OYW1lID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKVthbmltYXRpb25OYW1lUHJvcF07XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb25OYW1lICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXSArPSBuYW1lTWFya2VyO1xuICAgICAgICAgICAgICAgIGtleWZyYW1lTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvcmNlIHJlZmxvd1xuICAgICAgICB2b2lkIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8vIFJlc3RvcmUgYW5pbWF0aW9uIG5hbWVcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleWZyYW1lTm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVTdHlsZSA9IGtleWZyYW1lTm9kZXNbaV0uc3R5bGU7XG5cbiAgICAgICAgICAgIG5vZGVTdHlsZVthbmltYXRpb25OYW1lUHJvcF0gPSBub2RlU3R5bGVbYW5pbWF0aW9uTmFtZVByb3BdLnJlcGxhY2UobmFtZU1hcmtlciwgJycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgZnVsbHkgcXVhbGlmaWVkIFVSTCBmcm9tIHJlbGF0aXZlIFVSTCBhbmQgKG9wdGlvbmFsKSBiYXNlIFVSTFxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9IHVybFxuICogQHBhcmFtICAge3N0cmluZ30gW2Jhc2U9bG9jYXRpb24uaHJlZl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsLCBiYXNlID0gbG9jYXRpb24uaHJlZikge1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xuICAgIGNvbnN0IGIgPSBkLmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcbiAgICBjb25zdCBhID0gZC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoYik7XG4gICAgZC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGIuaHJlZiA9IGJhc2U7XG4gICAgYS5ocmVmID0gdXJsO1xuXG4gICAgcmV0dXJuIGEuaHJlZjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGltZSBzdGFtcCBpbiBtaWxsaXNlY29uZHNcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRUaW1lU3RhbXAoKSB7XG4gICAgcmV0dXJuIGlzQnJvd3NlciAmJiAod2luZG93LnBlcmZvcm1hbmNlIHx8IHt9KS5ub3cgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cblxuXG4vLyBFeHBvcnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBjc3NWYXJzO1xuIiwiLyohIG5wbS5pbS9vYmplY3QtZml0LWltYWdlcyAzLjIuNCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgT0ZJID0gJ2JmcmVkLWl0Om9iamVjdC1maXQtaW1hZ2VzJztcbnZhciBwcm9wUmVnZXggPSAvKG9iamVjdC1maXR8b2JqZWN0LXBvc2l0aW9uKVxccyo6XFxzKihbLS5cXHdcXHMlXSspL2c7XG52YXIgdGVzdEltZyA9IHR5cGVvZiBJbWFnZSA9PT0gJ3VuZGVmaW5lZCcgPyB7c3R5bGU6IHsnb2JqZWN0LXBvc2l0aW9uJzogMX19IDogbmV3IEltYWdlKCk7XG52YXIgc3VwcG9ydHNPYmplY3RGaXQgPSAnb2JqZWN0LWZpdCcgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c09iamVjdFBvc2l0aW9uID0gJ29iamVjdC1wb3NpdGlvbicgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c09GSSA9ICdiYWNrZ3JvdW5kLXNpemUnIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNDdXJyZW50U3JjID0gdHlwZW9mIHRlc3RJbWcuY3VycmVudFNyYyA9PT0gJ3N0cmluZyc7XG52YXIgbmF0aXZlR2V0QXR0cmlidXRlID0gdGVzdEltZy5nZXRBdHRyaWJ1dGU7XG52YXIgbmF0aXZlU2V0QXR0cmlidXRlID0gdGVzdEltZy5zZXRBdHRyaWJ1dGU7XG52YXIgYXV0b01vZGVFbmFibGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyKHcsIGgpIHtcblx0cmV0dXJuIChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nXCIgKyB3ICsgXCInIGhlaWdodD0nXCIgKyBoICsgXCInJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuZnVuY3Rpb24gcG9seWZpbGxDdXJyZW50U3JjKGVsKSB7XG5cdGlmIChlbC5zcmNzZXQgJiYgIXN1cHBvcnRzQ3VycmVudFNyYyAmJiB3aW5kb3cucGljdHVyZWZpbGwpIHtcblx0XHR2YXIgcGYgPSB3aW5kb3cucGljdHVyZWZpbGwuXztcblx0XHQvLyBwYXJzZSBzcmNzZXQgd2l0aCBwaWN0dXJlZmlsbCB3aGVyZSBjdXJyZW50U3JjIGlzbid0IGF2YWlsYWJsZVxuXHRcdGlmICghZWxbcGYubnNdIHx8ICFlbFtwZi5uc10uZXZhbGVkKSB7XG5cdFx0XHQvLyBmb3JjZSBzeW5jaHJvbm91cyBzcmNzZXQgcGFyc2luZ1xuXHRcdFx0cGYuZmlsbEltZyhlbCwge3Jlc2VsZWN0OiB0cnVlfSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlbFtwZi5uc10uY3VyU3JjKSB7XG5cdFx0XHQvLyBmb3JjZSBwaWN0dXJlZmlsbCB0byBwYXJzZSBzcmNzZXRcblx0XHRcdGVsW3BmLm5zXS5zdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdHBmLmZpbGxJbWcoZWwsIHtyZXNlbGVjdDogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdC8vIHJldHJpZXZlIHBhcnNlZCBjdXJyZW50U3JjLCBpZiBhbnlcblx0XHRlbC5jdXJyZW50U3JjID0gZWxbcGYubnNdLmN1clNyYyB8fCBlbC5zcmM7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcblx0dmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZm9udEZhbWlseTtcblx0dmFyIHBhcnNlZDtcblx0dmFyIHByb3BzID0ge307XG5cdHdoaWxlICgocGFyc2VkID0gcHJvcFJlZ2V4LmV4ZWMoc3R5bGUpKSAhPT0gbnVsbCkge1xuXHRcdHByb3BzW3BhcnNlZFsxXV0gPSBwYXJzZWRbMl07XG5cdH1cblx0cmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBzZXRQbGFjZWhvbGRlcihpbWcsIHdpZHRoLCBoZWlnaHQpIHtcblx0Ly8gRGVmYXVsdDogZmlsbCB3aWR0aCwgbm8gaGVpZ2h0XG5cdHZhciBwbGFjZWhvbGRlciA9IGNyZWF0ZVBsYWNlaG9sZGVyKHdpZHRoIHx8IDEsIGhlaWdodCB8fCAwKTtcblxuXHQvLyBPbmx5IHNldCBwbGFjZWhvbGRlciBpZiBpdCdzIGRpZmZlcmVudFxuXHRpZiAobmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoaW1nLCAnc3JjJykgIT09IHBsYWNlaG9sZGVyKSB7XG5cdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoaW1nLCAnc3JjJywgcGxhY2Vob2xkZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG9uSW1hZ2VSZWFkeShpbWcsIGNhbGxiYWNrKSB7XG5cdC8vIG5hdHVyYWxXaWR0aCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBpbWFnZSBoZWFkZXJzIGFyZSBsb2FkZWQsXG5cdC8vIHRoaXMgbG9vcCB3aWxsIHBvbGwgaXQgZXZlcnkgMTAwbXMuXG5cdGlmIChpbWcubmF0dXJhbFdpZHRoKSB7XG5cdFx0Y2FsbGJhY2soaW1nKTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KG9uSW1hZ2VSZWFkeSwgMTAwLCBpbWcsIGNhbGxiYWNrKTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaXhPbmUoZWwpIHtcblx0dmFyIHN0eWxlID0gZ2V0U3R5bGUoZWwpO1xuXHR2YXIgb2ZpID0gZWxbT0ZJXTtcblx0c3R5bGVbJ29iamVjdC1maXQnXSA9IHN0eWxlWydvYmplY3QtZml0J10gfHwgJ2ZpbGwnOyAvLyBkZWZhdWx0IHZhbHVlXG5cblx0Ly8gQXZvaWQgcnVubmluZyB3aGVyZSB1bm5lY2Vzc2FyeSwgdW5sZXNzIE9GSSBoYWQgYWxyZWFkeSBkb25lIGl0cyBkZWVkXG5cdGlmICghb2ZpLmltZykge1xuXHRcdC8vIGZpbGwgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igc28gbm8gYWN0aW9uIGlzIG5lY2Vzc2FyeVxuXHRcdGlmIChzdHlsZVsnb2JqZWN0LWZpdCddID09PSAnZmlsbCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXaGVyZSBvYmplY3QtZml0IGlzIHN1cHBvcnRlZCBhbmQgb2JqZWN0LXBvc2l0aW9uIGlzbid0IChTYWZhcmkgPCAxMClcblx0XHRpZiAoXG5cdFx0XHQhb2ZpLnNraXBUZXN0ICYmIC8vIHVubGVzcyB1c2VyIHdhbnRzIHRvIGFwcGx5IHJlZ2FyZGxlc3Mgb2YgYnJvd3NlciBzdXBwb3J0XG5cdFx0XHRzdXBwb3J0c09iamVjdEZpdCAmJiAvLyBpZiBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgb2JqZWN0LWZpdFxuXHRcdFx0IXN0eWxlWydvYmplY3QtcG9zaXRpb24nXSAvLyB1bmxlc3Mgb2JqZWN0LXBvc2l0aW9uIGlzIHVzZWRcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHQvLyBrZWVwIGEgY2xvbmUgaW4gbWVtb3J5IHdoaWxlIHJlc2V0dGluZyB0aGUgb3JpZ2luYWwgdG8gYSBibGFua1xuXHRpZiAoIW9maS5pbWcpIHtcblx0XHRvZmkuaW1nID0gbmV3IEltYWdlKGVsLndpZHRoLCBlbC5oZWlnaHQpO1xuXHRcdG9maS5pbWcuc3Jjc2V0ID0gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3Jjc2V0XCIpIHx8IGVsLnNyY3NldDtcblx0XHRvZmkuaW1nLnNyYyA9IG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY1wiKSB8fCBlbC5zcmM7XG5cblx0XHQvLyBwcmVzZXJ2ZSBmb3IgYW55IGZ1dHVyZSBjbG9uZU5vZGUgY2FsbHNcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMvaXNzdWVzLzUzXG5cdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3JjXCIsIGVsLnNyYyk7XG5cdFx0aWYgKGVsLnNyY3NldCkge1xuXHRcdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3Jjc2V0XCIsIGVsLnNyY3NldCk7XG5cdFx0fVxuXG5cdFx0c2V0UGxhY2Vob2xkZXIoZWwsIGVsLm5hdHVyYWxXaWR0aCB8fCBlbC53aWR0aCwgZWwubmF0dXJhbEhlaWdodCB8fCBlbC5oZWlnaHQpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNyY3NldCBiZWNhdXNlIGl0IG92ZXJyaWRlcyBzcmNcblx0XHRpZiAoZWwuc3Jjc2V0KSB7XG5cdFx0XHRlbC5zcmNzZXQgPSAnJztcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGtlZXBTcmNVc2FibGUoZWwpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0aWYgKHdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignaHR0cHM6Ly9iaXQubHkvb2ZpLW9sZC1icm93c2VyJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cG9seWZpbGxDdXJyZW50U3JjKG9maS5pbWcpO1xuXG5cdGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFxcXCJcIiArICgob2ZpLmltZy5jdXJyZW50U3JjIHx8IG9maS5pbWcuc3JjKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykpICsgXCJcXFwiKVwiO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBzdHlsZVsnb2JqZWN0LXBvc2l0aW9uJ10gfHwgJ2NlbnRlcic7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0Jztcblx0ZWwuc3R5bGUuYmFja2dyb3VuZE9yaWdpbiA9ICdjb250ZW50LWJveCc7XG5cblx0aWYgKC9zY2FsZS1kb3duLy50ZXN0KHN0eWxlWydvYmplY3QtZml0J10pKSB7XG5cdFx0b25JbWFnZVJlYWR5KG9maS5pbWcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChvZmkuaW1nLm5hdHVyYWxXaWR0aCA+IGVsLndpZHRoIHx8IG9maS5pbWcubmF0dXJhbEhlaWdodCA+IGVsLmhlaWdodCkge1xuXHRcdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2F1dG8nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gc3R5bGVbJ29iamVjdC1maXQnXS5yZXBsYWNlKCdub25lJywgJ2F1dG8nKS5yZXBsYWNlKCdmaWxsJywgJzEwMCUgMTAwJScpO1xuXHR9XG5cblx0b25JbWFnZVJlYWR5KG9maS5pbWcsIGZ1bmN0aW9uIChpbWcpIHtcblx0XHRzZXRQbGFjZWhvbGRlcihlbCwgaW1nLm5hdHVyYWxXaWR0aCwgaW1nLm5hdHVyYWxIZWlnaHQpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24ga2VlcFNyY1VzYWJsZShlbCkge1xuXHR2YXIgZGVzY3JpcHRvcnMgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiBnZXQocHJvcCkge1xuXHRcdFx0cmV0dXJuIGVsW09GSV0uaW1nW3Byb3AgPyBwcm9wIDogJ3NyYyddO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUsIHByb3ApIHtcblx0XHRcdGVsW09GSV0uaW1nW3Byb3AgPyBwcm9wIDogJ3NyYyddID0gdmFsdWU7XG5cdFx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgKFwiZGF0YS1vZmktXCIgKyBwcm9wKSwgdmFsdWUpOyAvLyBwcmVzZXJ2ZSBmb3IgYW55IGZ1dHVyZSBjbG9uZU5vZGVcblx0XHRcdGZpeE9uZShlbCk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9O1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdzcmMnLCBkZXNjcmlwdG9ycyk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ2N1cnJlbnRTcmMnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXNjcmlwdG9ycy5nZXQoJ2N1cnJlbnRTcmMnKTsgfVxuXHR9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnc3Jjc2V0Jywge1xuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVzY3JpcHRvcnMuZ2V0KCdzcmNzZXQnKTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChzcykgeyByZXR1cm4gZGVzY3JpcHRvcnMuc2V0KHNzLCAnc3Jjc2V0Jyk7IH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhpamFja0F0dHJpYnV0ZXMoKSB7XG5cdGZ1bmN0aW9uIGdldE9maUltYWdlTWF5YmUoZWwsIG5hbWUpIHtcblx0XHRyZXR1cm4gZWxbT0ZJXSAmJiBlbFtPRkldLmltZyAmJiAobmFtZSA9PT0gJ3NyYycgfHwgbmFtZSA9PT0gJ3NyY3NldCcpID8gZWxbT0ZJXS5pbWcgOiBlbDtcblx0fVxuXHRpZiAoIXN1cHBvcnRzT2JqZWN0UG9zaXRpb24pIHtcblx0XHRIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0cmV0dXJuIG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGdldE9maUltYWdlTWF5YmUodGhpcywgbmFtZSksIG5hbWUpO1xuXHRcdH07XG5cblx0XHRIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiBuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChnZXRPZmlJbWFnZU1heWJlKHRoaXMsIG5hbWUpLCBuYW1lLCBTdHJpbmcodmFsdWUpKTtcblx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpeChpbWdzLCBvcHRzKSB7XG5cdHZhciBzdGFydEF1dG9Nb2RlID0gIWF1dG9Nb2RlRW5hYmxlZCAmJiAhaW1ncztcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdGltZ3MgPSBpbWdzIHx8ICdpbWcnO1xuXG5cdGlmICgoc3VwcG9ydHNPYmplY3RQb3NpdGlvbiAmJiAhb3B0cy5za2lwVGVzdCkgfHwgIXN1cHBvcnRzT0ZJKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gdXNlIGltZ3MgYXMgYSBzZWxlY3RvciBvciBqdXN0IHNlbGVjdCBhbGwgaW1hZ2VzXG5cdGlmIChpbWdzID09PSAnaW1nJykge1xuXHRcdGltZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGltZ3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0aW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW1ncyk7XG5cdH0gZWxzZSBpZiAoISgnbGVuZ3RoJyBpbiBpbWdzKSkge1xuXHRcdGltZ3MgPSBbaW1nc107XG5cdH1cblxuXHQvLyBhcHBseSBmaXggdG8gYWxsXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuXHRcdGltZ3NbaV1bT0ZJXSA9IGltZ3NbaV1bT0ZJXSB8fCB7XG5cdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdH07XG5cdFx0Zml4T25lKGltZ3NbaV0pO1xuXHR9XG5cblx0aWYgKHN0YXJ0QXV0b01vZGUpIHtcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnKSB7XG5cdFx0XHRcdGZpeChlLnRhcmdldCwge1xuXHRcdFx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sIHRydWUpO1xuXHRcdGF1dG9Nb2RlRW5hYmxlZCA9IHRydWU7XG5cdFx0aW1ncyA9ICdpbWcnOyAvLyByZXNldCB0byBhIGdlbmVyaWMgc2VsZWN0b3IgZm9yIHdhdGNoTVFcblx0fVxuXG5cdC8vIGlmIHJlcXVlc3RlZCwgd2F0Y2ggbWVkaWEgcXVlcmllcyBmb3Igb2JqZWN0LWZpdCBjaGFuZ2Vcblx0aWYgKG9wdHMud2F0Y2hNUSkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXguYmluZChudWxsLCBpbWdzLCB7XG5cdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdH0pKTtcblx0fVxufVxuXG5maXguc3VwcG9ydHNPYmplY3RGaXQgPSBzdXBwb3J0c09iamVjdEZpdDtcbmZpeC5zdXBwb3J0c09iamVjdFBvc2l0aW9uID0gc3VwcG9ydHNPYmplY3RQb3NpdGlvbjtcblxuaGlqYWNrQXR0cmlidXRlcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpeDtcbiIsIi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=