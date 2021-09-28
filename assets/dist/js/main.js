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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/* harmony import */ var _utils_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/slider */ "./assets/src/js/utils/slider.js");
/* harmony import */ var _utils_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_slider__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', function () {
  // fallback for ie and edge:
  Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__["default"])();
  object_fit_images__WEBPACK_IMPORTED_MODULE_1___default()(); //fallback safari

  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();
}, false);

/***/ }),

/***/ "./assets/src/js/utils/slider.js":
/*!***************************************!*\
  !*** ./assets/src/js/utils/slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// console.log('hellogugug');

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
    var pf = window.picturefill._; // parse srcset with picturefill where currentSrc isn't available

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
    } // retrieve parsed currentSrc, if any


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
  var placeholder = createPlaceholder(width || 1, height || 0); // Only set placeholder if it's different

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
    } // Where object-fit is supported and object-position isn't (Safari < 10)


    if (!ofi.skipTest && // unless user wants to apply regardless of browser support
    supportsObjectFit && // if browser already supports object-fit
    !style['object-position'] // unless object-position is used
    ) {
      return;
    }
  } // keep a clone in memory while resetting the original to a blank


  if (!ofi.img) {
    ofi.img = new Image(el.width, el.height);
    ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
    ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src; // preserve for any future cloneNode calls
    // https://github.com/bfred-it/object-fit-images/issues/53

    nativeSetAttribute.call(el, "data-ofi-src", el.src);

    if (el.srcset) {
      nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
    }

    setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height); // remove srcset because it overrides src

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
  } // use imgs as a selector or just select all images


  if (imgs === 'img') {
    imgs = document.getElementsByTagName('img');
  } else if (typeof imgs === 'string') {
    imgs = document.querySelectorAll(imgs);
  } else if (!('length' in imgs)) {
    imgs = [imgs];
  } // apply fix to all


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
  } // if requested, watch media queries for object-fit change


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
  'use strict'; // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document; // return if scroll behavior is supported and polyfill is not forced

    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    } // globals


    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468; // object gathering original scroll methods

    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    }; // define timing method

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
      } // throw error when behavior is not supported


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
      var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

      elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

      value = ease(elapsed);
      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;
      context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

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
      var startTime = now(); // define scroll context

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
      } // scroll looping over a frame


      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    } // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo


    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    }; // w.scrollBy


    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    }; // Element.prototype.scroll and Element.prototype.scrollTo


    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    }; // Element.prototype.scrollBy


    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    }; // Element.prototype.scrollIntoView


    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

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

/***/ 0:
/*!*************************************!*\
  !*** multi ./assets/src/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ninaregli/Local Sites/starterthemegulp4/app/public/wp-content/themes/ninastartertheme/assets/src/js/main.js */"./assets/src/js/main.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvdXRpbHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ2V0LWNzcy1kYXRhL2Rpc3QvZ2V0LWNzcy1kYXRhLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhbGFuY2VkLW1hdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UtY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RyaW5naWZ5LWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3dhbGstY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdHJhbnNmb3JtLWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtZml0LWltYWdlcy9kaXN0L29maS5jb21tb24tanMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjc3NWYXJzIiwib2JqZWN0Rml0SW1hZ2VzIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJnZXRVcmxzIiwidXJscyIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXR0aW5ncyIsIm1pbWVUeXBlIiwib25CZWZvcmVTZW5kIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwib25Db21wbGV0ZSIsInVybEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwidXJsUXVldWUiLCJhcHBseSIsIm1hcCIsIngiLCJpc1ZhbGlkQ3NzIiwiY3NzVGV4dCIsImlzSFRNTCIsInRyaW0iLCJjaGFyQXQiLCJ4aHIiLCJ1cmxJbmRleCIsInJlc3BvbnNlVGV4dCIsInJldHVyblZhbCIsImluZGV4T2YiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInVybCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJocmVmIiwiU3RyaW5nIiwiaXNJRWx0ZTkiLCJCb29sZWFuIiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzSUVsdGU5Q09SUyIsImhvc3QiLCJzcGxpdCIsImxvY2F0aW9uIiwiaXNTYW1lUHJvdG9jb2wiLCJwcm90b2NvbCIsInhkciIsIlhEb21haW5SZXF1ZXN0Iiwib3BlbiIsInRpbWVvdXQiLCJvbnByb2dyZXNzIiwib250aW1lb3V0Iiwib25sb2FkIiwib25lcnJvciIsImVyciIsInNldFRpbWVvdXQiLCJzZW5kIiwiY29uc29sZSIsIndhcm4iLCJjb25jYXQiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZ2V0Q3NzRGF0YSIsInJlZ2V4IiwiY3NzQ29tbWVudHMiLCJjc3NJbXBvcnRzIiwicm9vdEVsZW1lbnQiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImZpbHRlciIsInVzZUNTU09NIiwic291cmNlTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm1hdGNoZXNTZWxlY3RvciIsImNzc0FycmF5IiwiaGFuZGxlQ29tcGxldGUiLCJpc0NvbXBsZXRlIiwiam9pbiIsImhhbmRsZVN1Y2Nlc3MiLCJjc3NJbmRleCIsInNvdXJjZVVybCIsInJlc29sdmVJbXBvcnRzIiwicmVzb2x2ZWRDc3NUZXh0IiwiZXJyb3JEYXRhIiwiZGF0YSIsInRlc3QiLCJwYXJzZUltcG9ydERhdGEiLCJiYXNlVXJsIiwiaWdub3JlUnVsZXMiLCJpbXBvcnREYXRhIiwicnVsZXMiLCJyZXBsYWNlIiwibWF0Y2giLCJydWxlIiwiYWJzb2x1dGVVcmxzIiwiZ2V0RnVsbFVybCIsImFic29sdXRlUnVsZXMiLCJvbGRVcmwiLCJuZXdVcmwiLCJjYWxsYmFja0ZuIiwiX19lcnJvckRhdGEiLCJfX2Vycm9yUnVsZXMiLCJyZXNwb25zZUltcG9ydERhdGEiLCJwdXNoIiwicmVzcG9uc2VBcnJheSIsImltcG9ydFRleHQiLCJsaW5rSHJlZiIsImdldEF0dHJpYnV0ZSIsImxpbmtSZWwiLCJpc0xpbmsiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNTdHlsZSIsInRleHRDb250ZW50Iiwic2hlZXQiLCJjc3NSdWxlcyIsImJhc2UiLCJkIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJiIiwiYSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJlbG0iLCJzZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwiYmFsYW5jZWQiLCJzdHIiLCJSZWdFeHAiLCJtYXliZU1hdGNoIiwiciIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJwcmUiLCJzbGljZSIsInBvc3QiLCJyZWciLCJtIiwiYmVncyIsImJlZyIsImxlZnQiLCJyaWdodCIsInJlc3VsdCIsImFpIiwiYmkiLCJwb3AiLCJwYXJzZUNzcyIsImNzcyIsImRlZmF1bHRzIiwib25seVZhcnMiLCJyZW1vdmVDb21tZW50cyIsIl9leHRlbmRzIiwiZXJyb3JzIiwiZXJyb3IiLCJtc2ciLCJFcnJvciIsInJlIiwiZXhlYyIsImNsb3NlIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJ0eXBlIiwiY29tbWVudHMiLCJjbW50cyIsImMiLCJzIiwiZGVjbGFyYXRpb24iLCJjb21tZW50X3JlZ2V4cCIsInByb3AiLCJ2YWwiLCJyZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiZGVjbGFyYXRpb25zIiwiZGVjbHMiLCJrZXlmcmFtZSIsInZhbHMiLCJ2YWx1ZXMiLCJhdF9rZXlmcmFtZXMiLCJ2ZW5kb3IiLCJuYW1lIiwiZnJhbWUiLCJmcmFtZXMiLCJrZXlmcmFtZXMiLCJhdF9wYWdlIiwic2VsIiwic2VsZWN0b3JzIiwiYXRfZm9udGZhY2UiLCJhdF9zdXBwb3J0cyIsInN1cHBvcnRzIiwiYXRfaG9zdCIsImF0X21lZGlhIiwibWVkaWEiLCJhdF9jdXN0b21fbSIsImF0X2RvY3VtZW50IiwiYXRfeCIsImF0X3J1bGUiLCJoYXNWYXJGdW5jIiwic29tZSIsImRlY2wiLCJhcnIiLCJvYmoiLCJiYWxhbmNlZE1hdGNoIiwiaGFzVmFyRGVjbCIsImNvcmUiLCJzdHlsZXNoZWV0Iiwic3RyaW5naWZ5Q3NzIiwidHJlZSIsImRlbGltIiwiY2IiLCJyZW5kZXJNZXRob2RzIiwiY2hhcnNldCIsInZpc2l0IiwiaW1wb3J0IiwibmFtZXNwYWNlIiwicGFnZSIsIm5vZGVzIiwiYnVmIiwibiIsInR4dCIsIndhbGtDc3MiLCJmbiIsIlZBUl9QUk9QX0lERU5USUZJRVIiLCJWQVJfRlVOQ19JREVOVElGSUVSIiwidmFyaWFibGVTdG9yZSIsImRvbSIsInRlbXAiLCJ1c2VyIiwidHJhbnNmb3JtVmFycyIsImZpeE5lc3RlZENhbGMiLCJwZXJzaXN0IiwicHJlc2VydmUiLCJ2YXJpYWJsZXMiLCJvbldhcm5pbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjc3NUcmVlIiwidmFyTmFtZUluZGljZXMiLCJzcGxpY2UiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwibmV3UnVsZSIsInJlc29sdmVkVmFsdWUiLCJyZXNvbHZlVmFsdWUiLCJyZUNhbGNFeHAiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwicm9vdENhbGMiLCJuZXN0ZWRDYWxjIiwiX19yZWN1cnNpdmVGYWxsYmFjayIsInZhbHVlRGF0YSIsInJlc29sdmVGdW5jIiwiZmFsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGxhY2VtZW50IiwidW5yZXNvbHZlZEZhbGxiYWNrIiwiaXNFbXB0eVZhckZ1bmMiLCJpc0Jyb3dzZXIiLCJpc05hdGl2ZVN1cHBvcnQiLCJDU1MiLCJjb25zb2xlTXNnUHJlZml4Iiwic2hhZG93RE9NIiwib25seUxlZ2FjeSIsInNpbGVudCIsInVwZGF0ZURPTSIsInVwZGF0ZVVSTHMiLCJ3YXRjaCIsImNzc0tleWZyYW1lcyIsImNzc1Jvb3RSdWxlcyIsImNzc1VybHMiLCJjc3NWYXJzT2JzZXJ2ZXIiLCJkZWJvdW5jZVRpbWVyIiwiaXNTaGFkb3dET01SZWFkeSIsInN0eWxlTm9kZUlkIiwicGtnTmFtZSIsIl9iZW5jaG1hcmsiLCJnZXRUaW1lU3RhbXAiLCJoYW5kbGVFcnJvciIsIm1lc3NhZ2UiLCJzb3VyY2VOb2RlIiwiaGFuZGxlV2FybmluZyIsImRpc2Nvbm5lY3QiLCJhZGRNdXRhdGlvbk9ic2VydmVyIiwiY3NzVmFyc0RlYm91bmNlZCIsImlzU2hhZG93RWxtIiwic2hhZG93Um9vdCIsInRhcmdldEVsbSIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjc3NSb290RGVjbHMiLCJub2RlQXJyYXkiLCJ0cmFuc2Zvcm1Dc3MiLCJjc3NVcmwiLCJyZXNwb25zZVVybCIsInJlc3BvbnNlVVJMIiwic3RhdHVzVGV4dCIsImVycm9yTXNnIiwiY3NzTWFya2VyIiwiY3NzU2V0dGluZ3MiLCJzdHlsZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicHJldkRhdGEiLCJfX2Nzc1ZhcnMiLCJpc1NhbWVEYXRhIiwiaGFzS2V5ZnJhbWVzV2l0aFZhcnMiLCJpbmZvIiwiZ3JvdXAxIiwiZXJyb3JUaHJvd24iLCJlcnJvck5vZGUiLCJlbG1zIiwic2hhZG93U2V0dGluZ3MiLCJjc3NOb2RlcyIsImxhc3ROb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwidGFyZ2V0Tm9kZSIsImZpeEtleWZyYW1lcyIsImluaXQiLCJldnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiaWdub3JlSWQiLCJNdXRhdGlvbk9ic2VydmVyIiwidGFnTmFtZSIsImlkIiwibXV0YXRpb25zIiwiaGFzQ1NTTXV0YXRpb24iLCJtdXRhdGlvbiIsImlzQ1NTTXV0YXRpb24iLCJ0YXJnZXQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiaXNWYWxpZExpbmsiLCJkaXNhYmxlZCIsImlzVmFsaWRTdHlsZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlRmlsdGVyIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImFuaW1hdGlvbk5hbWVQcm9wIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImFsbE5vZGVzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJrZXlmcmFtZU5vZGVzIiwibmFtZU1hcmtlciIsImxlbiIsImFuaW1hdGlvbk5hbWUiLCJvZmZzZXRIZWlnaHQiLCJub2RlU3R5bGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiT0ZJIiwicHJvcFJlZ2V4IiwidGVzdEltZyIsIkltYWdlIiwic3VwcG9ydHNPYmplY3RGaXQiLCJzdXBwb3J0c09iamVjdFBvc2l0aW9uIiwic3VwcG9ydHNPRkkiLCJzdXBwb3J0c0N1cnJlbnRTcmMiLCJjdXJyZW50U3JjIiwibmF0aXZlR2V0QXR0cmlidXRlIiwibmF0aXZlU2V0QXR0cmlidXRlIiwiYXV0b01vZGVFbmFibGVkIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCJ3IiwiaCIsInBvbHlmaWxsQ3VycmVudFNyYyIsImVsIiwic3Jjc2V0IiwicGljdHVyZWZpbGwiLCJwZiIsIl8iLCJucyIsImV2YWxlZCIsImZpbGxJbWciLCJyZXNlbGVjdCIsImN1clNyYyIsInN1cHBvcnRlZCIsInNyYyIsImdldFN0eWxlIiwiZm9udEZhbWlseSIsInBhcnNlZCIsInByb3BzIiwic2V0UGxhY2Vob2xkZXIiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwib25JbWFnZVJlYWR5IiwiY2FsbGJhY2siLCJuYXR1cmFsV2lkdGgiLCJmaXhPbmUiLCJvZmkiLCJza2lwVGVzdCIsIm5hdHVyYWxIZWlnaHQiLCJrZWVwU3JjVXNhYmxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRPcmlnaW4iLCJiYWNrZ3JvdW5kU2l6ZSIsImRlc2NyaXB0b3JzIiwiZ2V0Iiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJzcyIsImhpamFja0F0dHJpYnV0ZXMiLCJnZXRPZmlJbWFnZU1heWJlIiwiSFRNTEltYWdlRWxlbWVudCIsImZpeCIsImltZ3MiLCJvcHRzIiwic3RhcnRBdXRvTW9kZSIsImUiLCJ3YXRjaE1RIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyIsIkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNDUk9MTF9USU1FIiwib3JpZ2luYWwiLCJzY3JvbGwiLCJzY3JvbGxUbyIsInNjcm9sbEJ5IiwiZWxlbWVudFNjcm9sbCIsInNjcm9sbEVsZW1lbnQiLCJzY3JvbGxJbnRvVmlldyIsImlzTWljcm9zb2Z0QnJvd3NlciIsInVzZXJBZ2VudCIsInVzZXJBZ2VudFBhdHRlcm5zIiwiUk9VTkRJTkdfVE9MRVJBTkNFIiwibmF2aWdhdG9yIiwieSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJlYXNlIiwiayIsIk1hdGgiLCJjb3MiLCJQSSIsInNob3VsZEJhaWxPdXQiLCJmaXJzdEFyZyIsImJlaGF2aW9yIiwiVHlwZUVycm9yIiwiaGFzU2Nyb2xsYWJsZVNwYWNlIiwiYXhpcyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJjYW5PdmVyZmxvdyIsIm92ZXJmbG93VmFsdWUiLCJpc1Njcm9sbGFibGUiLCJpc1Njcm9sbGFibGVZIiwiaXNTY3JvbGxhYmxlWCIsImZpbmRTY3JvbGxhYmxlUGFyZW50Iiwic3RlcCIsImNvbnRleHQiLCJ0aW1lIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImVsYXBzZWQiLCJzdGFydFRpbWUiLCJzdGFydFgiLCJzdGFydFkiLCJtZXRob2QiLCJzY3JvbGxhYmxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic21vb3RoU2Nyb2xsIiwic2Nyb2xsWCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3ZEO0FBQ0FDLG1FQUFPO0FBQ1BDLDBEQUFlLEdBSHdDLENBS3ZEOztBQUNBQyw4REFBWSxDQUFDQyxRQUFiO0FBSUQsQ0FWRCxFQVVHLEtBVkgsRTs7Ozs7Ozs7Ozs7QUNSQSw2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDT0E7OztBQUFBLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQWlCQTtBQUNiLE1BQUlDLFVBQVVDLFVBQVVDLE1BQVZELEdBQW1CLENBQW5CQSxJQUF3QkEsVUFBVSxDQUFWQSxNQUFpQkUsU0FBekNGLEdBQXFEQSxVQUFVLENBQVZBLENBQXJEQSxHQUFvRSxFQUFsRjtBQUNBLE1BQUlHLFdBQVc7QUFDWEMsY0FBVUwsUUFBUUssUUFBUkwsSUFBb0IsSUFEbkI7QUFFWE0sa0JBQWNOLFFBQVFNLFlBQVJOLElBQXdCTyxTQUFTQyxTQUZwQztBQUdYQyxlQUFXVCxRQUFRUyxTQUFSVCxJQUFxQk8sU0FBU0MsU0FIOUI7QUFJWEUsYUFBU1YsUUFBUVUsT0FBUlYsSUFBbUJPLFNBQVNDLFNBSjFCO0FBS1hHLGdCQUFZWCxRQUFRVyxVQUFSWCxJQUFzQk8sU0FBU0M7QUFMaEMsR0FBZjtBQU9BLE1BQUlJLFdBQVdDLE1BQU1DLE9BQU5ELENBQWNkLElBQWRjLElBQXNCZCxJQUF0QmMsR0FBNkIsQ0FBRWQsSUFBRixDQUE1QztBQUNBLE1BQUlnQixXQUFXRixNQUFNRyxLQUFOSCxDQUFZLElBQVpBLEVBQWtCQSxNQUFNRCxTQUFTVixNQUFmVyxDQUFsQkEsRUFBMENJLEdBQTFDSixDQUE4QyxVQUFTSyxDQUFULEVBQVNBO0FBQ2xFLFdBQU8sSUFBUDtHQURXTCxDQUFmOztBQUdBLFdBQVNNLFVBQVQsR0FBU0E7QUFDTCxRQUFJQyxVQUFVbkIsVUFBVUMsTUFBVkQsR0FBbUIsQ0FBbkJBLElBQXdCQSxVQUFVLENBQVZBLE1BQWlCRSxTQUF6Q0YsR0FBcURBLFVBQVUsQ0FBVkEsQ0FBckRBLEdBQW9FLEVBQWxGO0FBQ0EsUUFBSW9CLFNBQVNELFFBQVFFLElBQVJGLEdBQWVHLE1BQWZILENBQXNCLENBQXRCQSxNQUE2QixHQUExQztBQUNBLFlBQVFDLE1BQVI7OztBQUVKLFdBQVNYLE9BQVQsQ0FBaUJjLEdBQWpCLEVBQXNCQyxRQUF0QixFQUFzQkE7QUFDbEJyQixhQUFTTSxPQUFUTixDQUFpQm9CLEdBQWpCcEIsRUFBc0JRLFNBQVNhLFFBQVRiLENBQXRCUixFQUEwQ3FCLFFBQTFDckI7OztBQUVKLFdBQVNLLFNBQVQsQ0FBbUJpQixZQUFuQixFQUFpQ0QsUUFBakMsRUFBaUNBO0FBQzdCLFFBQUlFLFlBQVl2QixTQUFTSyxTQUFUTCxDQUFtQnNCLFlBQW5CdEIsRUFBaUNRLFNBQVNhLFFBQVRiLENBQWpDUixFQUFxRHFCLFFBQXJEckIsQ0FBaEI7QUFDQXNCLG1CQUFlQyxjQUFjLEtBQWRBLEdBQXNCLEVBQXRCQSxHQUEyQkEsYUFBYUQsWUFBdkRBO0FBQ0FYLGFBQVNVLFFBQVRWLElBQXFCVyxZQUFyQlg7O0FBQ0EsUUFBSUEsU0FBU2EsT0FBVGIsQ0FBaUIsSUFBakJBLE1BQWlCLENBQVcsQ0FBaEMsRUFBbUM7QUFDL0JYLGVBQVNPLFVBQVRQLENBQW9CVyxRQUFwQlg7Ozs7QUFHUixNQUFJeUIsU0FBU3JDLFNBQVNzQyxhQUFUdEMsQ0FBdUIsR0FBdkJBLENBQWI7QUFDQW9CLFdBQVNtQixPQUFUbkIsQ0FBaUIsVUFBU29CLEdBQVQsRUFBY0MsQ0FBZCxFQUFjQTtBQUMzQkosV0FBT0ssWUFBUEwsQ0FBb0IsTUFBcEJBLEVBQTRCRyxHQUE1Qkg7QUFDQUEsV0FBT00sSUFBUE4sR0FBY08sT0FBT1AsT0FBT00sSUFBZEMsQ0FBZFA7QUFDQSxRQUFJUSxXQUFXQyxRQUFROUMsU0FBUytDLEdBQVQvQyxJQUFTK0MsQ0FBUUMsT0FBT0MsSUFBaENILENBQWY7QUFDQSxRQUFJSSxlQUFlTCxZQUFZUixPQUFPYyxJQUFQZCxDQUFZZSxLQUFaZixDQUFrQixHQUFsQkEsRUFBdUIsQ0FBdkJBLE1BQThCZ0IsU0FBU0YsSUFBVEUsQ0FBY0QsS0FBZEMsQ0FBb0IsR0FBcEJBLEVBQXlCLENBQXpCQSxDQUE3RDs7QUFDQSxRQUFJSCxZQUFKLEVBQWtCO0FBQ2QsVUFBSUksaUJBQWlCakIsT0FBT2tCLFFBQVBsQixLQUFvQmdCLFNBQVNFLFFBQWxEOztBQUNBLFVBQUlELGNBQUosRUFBb0I7QUFDaEIsWUFBSUUsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsWUFBSUUsSUFBSkYsQ0FBUyxLQUFUQSxFQUFnQmhCLEdBQWhCZ0I7QUFDQUEsWUFBSUcsT0FBSkgsR0FBYyxDQUFkQTtBQUNBQSxZQUFJSSxVQUFKSixHQUFpQnpDLFNBQVNDLFNBQTFCd0M7QUFDQUEsWUFBSUssU0FBSkwsR0FBZ0J6QyxTQUFTQyxTQUF6QndDOztBQUNBQSxZQUFJTSxNQUFKTixHQUFhO0FBQ1QsY0FBSTdCLFdBQVc2QixJQUFJdEIsWUFBZlAsQ0FBSixFQUFrQztBQUM5QlYsc0JBQVV1QyxJQUFJdEIsWUFBZGpCLEVBQTRCd0IsQ0FBNUJ4QjtXQURKLE1BRU87QUFDSEMsb0JBQVFzQyxHQUFSdEMsRUFBYXVCLENBQWJ2Qjs7U0FKUnNDOztBQU9BQSxZQUFJTyxPQUFKUCxHQUFjLFVBQVNRLEdBQVQsRUFBU0E7QUFDbkI5QyxrQkFBUXNDLEdBQVJ0QyxFQUFhdUIsQ0FBYnZCO1NBREpzQzs7QUFHQVMsbUJBQVc7QUFDUFQsY0FBSVUsSUFBSlY7U0FESlMsRUFFRyxDQUZIQTtPQWhCSixNQW1CTztBQUNIRSxnQkFBUUMsSUFBUkQsQ0FBYSxnRkFBZ0ZFLE1BQWhGLENBQXVGN0IsR0FBdkYsRUFBNEYsR0FBNUYsQ0FBYjJCO0FBQ0FqRCxnQkFBUSxJQUFSQSxFQUFjdUIsQ0FBZHZCOztLQXZCUixNQXlCTztBQUNILFVBQUljLE1BQU0sSUFBSXNDLGNBQUosRUFBVjtBQUNBdEMsVUFBSTBCLElBQUoxQixDQUFTLEtBQVRBLEVBQWdCUSxHQUFoQlI7O0FBQ0EsVUFBSXBCLFNBQVNDLFFBQVRELElBQXFCb0IsSUFBSXVDLGdCQUE3QixFQUErQztBQUMzQ3ZDLFlBQUl1QyxnQkFBSnZDLENBQXFCcEIsU0FBU0MsUUFBOUJtQjs7O0FBRUpwQixlQUFTRSxZQUFURixDQUFzQm9CLEdBQXRCcEIsRUFBMkI0QixHQUEzQjVCLEVBQWdDNkIsQ0FBaEM3Qjs7QUFDQW9CLFVBQUl3QyxrQkFBSnhDLEdBQXlCO0FBQ3JCLFlBQUlBLElBQUl5QyxVQUFKekMsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsY0FBSUEsSUFBSTBDLE1BQUoxQyxLQUFlLEdBQWZBLElBQXNCTCxXQUFXSyxJQUFJRSxZQUFmUCxDQUExQixFQUF3RDtBQUNwRFYsc0JBQVVlLElBQUlFLFlBQWRqQixFQUE0QndCLENBQTVCeEI7V0FESixNQUVPO0FBQ0hDLG9CQUFRYyxHQUFSZCxFQUFhdUIsQ0FBYnZCOzs7T0FMWmM7O0FBU0FBLFVBQUlrQyxJQUFKbEM7O0dBOUNSWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkdBOzs7QUFBQSxTQUFTdUQsVUFBVCxDQUFvQm5FLE9BQXBCLEVBQW9CQTtBQUNwQixNQUFJb0UsUUFBUTtBQUNSQyxpQkFBYSxtQkFETDtBQUVSQyxnQkFBWTtBQUZKLEdBQVo7QUFJQSxNQUFJbEUsV0FBVztBQUNYbUUsaUJBQWF2RSxRQUFRdUUsV0FBUnZFLElBQXVCUixRQUR6QjtBQUVYZ0YsYUFBU3hFLFFBQVF3RSxPQUFSeEUsSUFBbUIsOEJBRmpCO0FBR1h5RSxhQUFTekUsUUFBUXlFLE9BQVJ6RSxJQUFtQixJQUhqQjtBQUlYMEUsWUFBUTFFLFFBQVEwRSxNQUFSMUUsSUFBa0IsSUFKZjtBQUtYMkUsY0FBVTNFLFFBQVEyRSxRQUFSM0UsSUFBb0IsS0FMbkI7QUFNWE0sa0JBQWNOLFFBQVFNLFlBQVJOLElBQXdCTyxTQUFTQyxTQU5wQztBQU9YQyxlQUFXVCxRQUFRUyxTQUFSVCxJQUFxQk8sU0FBU0MsU0FQOUI7QUFRWEUsYUFBU1YsUUFBUVUsT0FBUlYsSUFBbUJPLFNBQVNDLFNBUjFCO0FBU1hHLGdCQUFZWCxRQUFRVyxVQUFSWCxJQUFzQk8sU0FBU0M7QUFUaEMsR0FBZjtBQVdBLE1BQUlvRSxjQUFjL0QsTUFBTUcsS0FBTkgsQ0FBWSxJQUFaQSxFQUFrQlQsU0FBU21FLFdBQVRuRSxDQUFxQnlFLGdCQUFyQnpFLENBQXNDQSxTQUFTb0UsT0FBL0NwRSxDQUFsQlMsRUFBMkU2RCxNQUEzRTdELENBQWtGLFVBQVNpRSxJQUFULEVBQVNBO0FBQ3pHLFlBQVFDLGdCQUFnQkQsSUFBaEJDLEVBQXNCM0UsU0FBU3FFLE9BQS9CTSxDQUFSO0dBRGNsRSxDQUFsQjtBQUdBLE1BQUltRSxXQUFXbkUsTUFBTUcsS0FBTkgsQ0FBWSxJQUFaQSxFQUFrQkEsTUFBTStELFlBQVkxRSxNQUFsQlcsQ0FBbEJBLEVBQTZDSSxHQUE3Q0osQ0FBaUQsVUFBU0ssQ0FBVCxFQUFTQTtBQUNyRSxXQUFPLElBQVA7R0FEV0wsQ0FBZjs7QUFHQSxXQUFTb0UsY0FBVCxHQUFTQTtBQUNMLFFBQUlDLGFBQWFGLFNBQVNwRCxPQUFUb0QsQ0FBaUIsSUFBakJBLE1BQWlCLENBQVcsQ0FBN0M7O0FBQ0EsUUFBSUUsVUFBSixFQUFnQjtBQUNaLFVBQUk5RCxVQUFVNEQsU0FBU0csSUFBVEgsQ0FBYyxFQUFkQSxDQUFkO0FBQ0E1RSxlQUFTTyxVQUFUUCxDQUFvQmdCLE9BQXBCaEIsRUFBNkI0RSxRQUE3QjVFLEVBQXVDd0UsV0FBdkN4RTs7OztBQUdSLFdBQVNnRixhQUFULENBQXVCaEUsT0FBdkIsRUFBZ0NpRSxRQUFoQyxFQUEwQ1AsSUFBMUMsRUFBZ0RRLFNBQWhELEVBQWdEQTtBQUM1QyxRQUFJM0QsWUFBWXZCLFNBQVNLLFNBQVRMLENBQW1CZ0IsT0FBbkJoQixFQUE0QjBFLElBQTVCMUUsRUFBa0NrRixTQUFsQ2xGLENBQWhCO0FBQ0FnQixjQUFVTyxjQUFjeEIsU0FBZHdCLElBQTJCVyxRQUFRWCxTQUFSVyxNQUF1QixLQUFsRFgsR0FBMEQsRUFBMURBLEdBQStEQSxhQUFhUCxPQUF0RkE7QUFDQW1FLG1CQUFlbkUsT0FBZm1FLEVBQXdCVCxJQUF4QlMsRUFBOEJELFNBQTlCQyxFQUF5QyxVQUFTQyxlQUFULEVBQTBCQyxTQUExQixFQUEwQkE7QUFDL0QsVUFBSVQsU0FBU0ssUUFBVEwsTUFBdUIsSUFBM0IsRUFBaUM7QUFDN0JTLGtCQUFVMUQsT0FBVjBELENBQWtCLFVBQVNDLElBQVQsRUFBU0E7QUFDdkIsaUJBQU90RixTQUFTTSxPQUFUTixDQUFpQnNGLEtBQUtsRSxHQUF0QnBCLEVBQTJCMEUsSUFBM0IxRSxFQUFpQ3NGLEtBQUsxRCxHQUF0QzVCLENBQVA7U0FESnFGOztBQUdBLGFBQUtyRixTQUFTc0UsTUFBZCxJQUF3QnRFLFNBQVNzRSxNQUFUdEUsQ0FBZ0J1RixJQUFoQnZGLENBQXFCb0YsZUFBckJwRixDQUF4QixFQUErRDtBQUMzRDRFLG1CQUFTSyxRQUFUTCxJQUFxQlEsZUFBckJSO1NBREosTUFFTztBQUNIQSxtQkFBU0ssUUFBVEwsSUFBcUIsRUFBckJBOzs7QUFFSkM7O0tBVlJNOzs7QUFjSixXQUFTSyxlQUFULENBQXlCeEUsT0FBekIsRUFBa0N5RSxPQUFsQyxFQUFrQ0E7QUFDOUIsUUFBSUMsY0FBYzdGLFVBQVVDLE1BQVZELEdBQW1CLENBQW5CQSxJQUF3QkEsVUFBVSxDQUFWQSxNQUFpQkUsU0FBekNGLEdBQXFEQSxVQUFVLENBQVZBLENBQXJEQSxHQUFvRSxFQUF0RjtBQUNBLFFBQUk4RixhQUFhLEVBQWpCO0FBQ0FBLGVBQVdDLEtBQVhELEdBQVdDLENBQVM1RSxRQUFRNkUsT0FBUjdFLENBQWdCZ0QsTUFBTUMsV0FBdEJqRCxFQUFtQyxFQUFuQ0EsRUFBdUM4RSxLQUF2QzlFLENBQTZDZ0QsTUFBTUUsVUFBbkRsRCxLQUFrRSxFQUEzRTRFLEVBQStFdEIsTUFBL0VzQixDQUFzRixVQUFTRyxJQUFULEVBQVNBO0FBQ3RHLGFBQU9MLFlBQVlsRSxPQUFaa0UsQ0FBb0JLLElBQXBCTCxNQUFvQkssQ0FBVyxDQUF0QztLQURPSCxDQUFYRDtBQUdBQSxlQUFXaEcsSUFBWGdHLEdBQWtCQSxXQUFXQyxLQUFYRCxDQUFpQjlFLEdBQWpCOEUsQ0FBcUIsVUFBU0ksSUFBVCxFQUFTQTtBQUM1QyxhQUFPQSxLQUFLRixPQUFMRSxDQUFhL0IsTUFBTUUsVUFBbkI2QixFQUErQixJQUEvQkEsQ0FBUDtLQURjSixDQUFsQkE7QUFHQUEsZUFBV0ssWUFBWEwsR0FBMEJBLFdBQVdoRyxJQUFYZ0csQ0FBZ0I5RSxHQUFoQjhFLENBQW9CLFVBQVMvRCxHQUFULEVBQVNBO0FBQ25ELGFBQU9xRSxXQUFXckUsR0FBWHFFLEVBQWdCUixPQUFoQlEsQ0FBUDtLQURzQk4sQ0FBMUJBO0FBR0FBLGVBQVdPLGFBQVhQLEdBQTJCQSxXQUFXQyxLQUFYRCxDQUFpQjlFLEdBQWpCOEUsQ0FBcUIsVUFBU0ksSUFBVCxFQUFlbEUsQ0FBZixFQUFlQTtBQUMzRCxVQUFJc0UsU0FBU1IsV0FBV2hHLElBQVhnRyxDQUFnQjlELENBQWhCOEQsQ0FBYjtBQUNBLFVBQUlTLFNBQVNILFdBQVdOLFdBQVdLLFlBQVhMLENBQXdCOUQsQ0FBeEI4RCxDQUFYTSxFQUF1Q1IsT0FBdkNRLENBQWI7QUFDQSxhQUFPRixLQUFLRixPQUFMRSxDQUFhSSxNQUFiSixFQUFxQkssTUFBckJMLENBQVA7S0FIdUJKLENBQTNCQTtBQUtBLFdBQU9BLFVBQVA7OztBQUVKLFdBQVNSLGNBQVQsQ0FBd0JuRSxPQUF4QixFQUFpQzBELElBQWpDLEVBQXVDZSxPQUF2QyxFQUFnRFksVUFBaEQsRUFBZ0RBO0FBQzVDLFFBQUlDLGNBQWN6RyxVQUFVQyxNQUFWRCxHQUFtQixDQUFuQkEsSUFBd0JBLFVBQVUsQ0FBVkEsTUFBaUJFLFNBQXpDRixHQUFxREEsVUFBVSxDQUFWQSxDQUFyREEsR0FBb0UsRUFBdEY7O0FBQ0EsUUFBSTBHLGVBQWUxRyxVQUFVQyxNQUFWRCxHQUFtQixDQUFuQkEsSUFBd0JBLFVBQVUsQ0FBVkEsTUFBaUJFLFNBQXpDRixHQUFxREEsVUFBVSxDQUFWQSxDQUFyREEsR0FBb0UsRUFBdkY7O0FBQ0EsUUFBSThGLGFBQWFILGdCQUFnQnhFLE9BQWhCd0UsRUFBeUJDLE9BQXpCRCxFQUFrQ2UsWUFBbENmLENBQWpCOztBQUNBLFFBQUlHLFdBQVdDLEtBQVhELENBQWlCN0YsTUFBckIsRUFBNkI7QUFDekJKLGNBQVFpRyxXQUFXSyxZQUFuQnRHLEVBQWlDO0FBQzdCUSxzQkFBYyxTQUFTQSxZQUFULENBQXNCa0IsR0FBdEIsRUFBMkJRLEdBQTNCLEVBQWdDUCxRQUFoQyxFQUFnQ0E7QUFDMUNyQixtQkFBU0UsWUFBVEYsQ0FBc0JvQixHQUF0QnBCLEVBQTJCMEUsSUFBM0IxRSxFQUFpQzRCLEdBQWpDNUI7U0FGeUI7QUFJN0JLLG1CQUFXLFNBQVNBLFNBQVQsQ0FBbUJXLE9BQW5CLEVBQTRCWSxHQUE1QixFQUFpQ1AsUUFBakMsRUFBaUNBO0FBQ3hDLGNBQUlFLFlBQVl2QixTQUFTSyxTQUFUTCxDQUFtQmdCLE9BQW5CaEIsRUFBNEIwRSxJQUE1QjFFLEVBQWtDNEIsR0FBbEM1QixDQUFoQjtBQUNBZ0Isb0JBQVVPLGNBQWMsS0FBZEEsR0FBc0IsRUFBdEJBLEdBQTJCQSxhQUFhUCxPQUFsREE7QUFDQSxjQUFJd0YscUJBQXFCaEIsZ0JBQWdCeEUsT0FBaEJ3RSxFQUF5QjVELEdBQXpCNEQsRUFBOEJlLFlBQTlCZixDQUF6QjtBQUNBZ0IsNkJBQW1CWixLQUFuQlksQ0FBeUI3RSxPQUF6QjZFLENBQWlDLFVBQVNULElBQVQsRUFBZWxFLENBQWYsRUFBZUE7QUFDNUNiLHNCQUFVQSxRQUFRNkUsT0FBUjdFLENBQWdCK0UsSUFBaEIvRSxFQUFzQndGLG1CQUFtQk4sYUFBbkJNLENBQWlDM0UsQ0FBakMyRSxDQUF0QnhGLENBQVZBO1dBREp3RjtBQUdBLGlCQUFPeEYsT0FBUDtTQVh5QjtBQWE3QlYsaUJBQVMsU0FBU0EsT0FBVCxDQUFpQmMsR0FBakIsRUFBc0JRLEdBQXRCLEVBQTJCUCxRQUEzQixFQUEyQkE7QUFDaENpRixzQkFBWUcsSUFBWkgsQ0FBaUI7QUFDYmxGLGlCQUFLQSxHQURRO0FBRWJRLGlCQUFLQTtBQUZRLFdBQWpCMEU7O0FBSUFDLHVCQUFhRSxJQUFiRixDQUFrQlosV0FBV0MsS0FBWEQsQ0FBaUJ0RSxRQUFqQnNFLENBQWxCWTs7QUFDQXBCLHlCQUFlbkUsT0FBZm1FLEVBQXdCVCxJQUF4QlMsRUFBOEJNLE9BQTlCTixFQUF1Q2tCLFVBQXZDbEIsRUFBbURtQixXQUFuRG5CLEVBQWdFb0IsWUFBaEVwQjtTQW5CeUI7QUFxQjdCNUUsb0JBQVksU0FBU0EsVUFBVCxDQUFvQm1HLGFBQXBCLEVBQW9CQTtBQUM1QkEsd0JBQWMvRSxPQUFkK0UsQ0FBc0IsVUFBU0MsVUFBVCxFQUFxQjlFLENBQXJCLEVBQXFCQTtBQUN2Q2Isc0JBQVVBLFFBQVE2RSxPQUFSN0UsQ0FBZ0IyRSxXQUFXQyxLQUFYRCxDQUFpQjlELENBQWpCOEQsQ0FBaEIzRSxFQUFxQzJGLFVBQXJDM0YsQ0FBVkE7V0FESjBGO0FBR0F2Qix5QkFBZW5FLE9BQWZtRSxFQUF3QlQsSUFBeEJTLEVBQThCTSxPQUE5Qk4sRUFBdUNrQixVQUF2Q2xCLEVBQW1EbUIsV0FBbkRuQixFQUFnRW9CLFlBQWhFcEI7O0FBekJ5QixPQUFqQ3pGO0tBREosTUE2Qk87QUFDSDJHLGlCQUFXckYsT0FBWHFGLEVBQW9CQyxXQUFwQkQ7Ozs7QUFHUixNQUFJN0IsWUFBWTFFLE1BQWhCLEVBQXdCO0FBQ3BCMEUsZ0JBQVk3QyxPQUFaNkMsQ0FBb0IsVUFBU0UsSUFBVCxFQUFlN0MsQ0FBZixFQUFlQTtBQUMvQixVQUFJK0UsV0FBV2xDLEtBQUttQyxZQUFMbkMsQ0FBa0IsTUFBbEJBLENBQWY7QUFDQSxVQUFJb0MsVUFBVXBDLEtBQUttQyxZQUFMbkMsQ0FBa0IsS0FBbEJBLENBQWQ7QUFDQSxVQUFJcUMsU0FBU3JDLEtBQUtzQyxRQUFMdEMsS0FBa0IsTUFBbEJBLElBQTRCa0MsUUFBNUJsQyxJQUF3Q29DLE9BQXhDcEMsSUFBbURvQyxRQUFRRyxXQUFSSCxPQUEwQixZQUExRjtBQUNBLFVBQUlJLFVBQVV4QyxLQUFLc0MsUUFBTHRDLEtBQWtCLE9BQWhDOztBQUNBLFVBQUlxQyxNQUFKLEVBQVk7QUFDUnJILGdCQUFRa0gsUUFBUmxILEVBQWtCO0FBQ2RPLG9CQUFVLFVBREk7QUFFZEMsd0JBQWMsU0FBU0EsWUFBVCxDQUFzQmtCLEdBQXRCLEVBQTJCUSxHQUEzQixFQUFnQ1AsUUFBaEMsRUFBZ0NBO0FBQzFDckIscUJBQVNFLFlBQVRGLENBQXNCb0IsR0FBdEJwQixFQUEyQjBFLElBQTNCMUUsRUFBaUM0QixHQUFqQzVCO1dBSFU7QUFLZEsscUJBQVcsU0FBU0EsU0FBVCxDQUFtQlcsT0FBbkIsRUFBNEJZLEdBQTVCLEVBQWlDUCxRQUFqQyxFQUFpQ0E7QUFDeEMsZ0JBQUk2RCxZQUFZZSxXQUFXVyxRQUFYWCxFQUFxQnhELFNBQVNWLElBQTlCa0UsQ0FBaEI7QUFDQWpCLDBCQUFjaEUsT0FBZGdFLEVBQXVCbkQsQ0FBdkJtRCxFQUEwQk4sSUFBMUJNLEVBQWdDRSxTQUFoQ0Y7V0FQVTtBQVNkMUUsbUJBQVMsU0FBU0EsT0FBVCxDQUFpQmMsR0FBakIsRUFBc0JRLEdBQXRCLEVBQTJCUCxRQUEzQixFQUEyQkE7QUFDaEN1RCxxQkFBUy9DLENBQVQrQyxJQUFjLEVBQWRBO0FBQ0E1RSxxQkFBU00sT0FBVE4sQ0FBaUJvQixHQUFqQnBCLEVBQXNCMEUsSUFBdEIxRSxFQUE0QjRCLEdBQTVCNUI7QUFDQTZFOztBQVpVLFNBQWxCbkY7T0FESixNQWdCTyxJQUFJd0gsT0FBSixFQUFhO0FBQ2hCLFlBQUlsRyxVQUFVMEQsS0FBS3lDLFdBQW5COztBQUNBLFlBQUluSCxTQUFTdUUsUUFBYixFQUF1QjtBQUNuQnZELG9CQUFVUCxNQUFNRyxLQUFOSCxDQUFZLElBQVpBLEVBQWtCaUUsS0FBSzBDLEtBQUwxQyxDQUFXMkMsUUFBN0I1RyxFQUF1Q0ksR0FBdkNKLENBQTJDLFVBQVNzRixJQUFULEVBQVNBO0FBQzFELG1CQUFPQSxLQUFLL0UsT0FBWjtXQURNUCxFQUVQc0UsSUFGT3RFLENBRUYsRUFGRUEsQ0FBVk87OztBQUlKZ0Usc0JBQWNoRSxPQUFkZ0UsRUFBdUJuRCxDQUF2Qm1ELEVBQTBCTixJQUExQk0sRUFBZ0N2QyxTQUFTVixJQUF6Q2lEO09BUEcsTUFRQTtBQUNISixpQkFBUy9DLENBQVQrQyxJQUFjLEVBQWRBO0FBQ0FDOztLQS9CUkw7R0FESixNQW1DTztBQUNIeEUsYUFBU08sVUFBVFAsQ0FBb0IsRUFBcEJBLEVBQXdCLEVBQXhCQTs7OztBQUlSLFNBQVNpRyxVQUFULENBQW9CckUsR0FBcEIsRUFBb0JBO0FBQ2hCLE1BQUkwRixPQUFPekgsVUFBVUMsTUFBVkQsR0FBbUIsQ0FBbkJBLElBQXdCQSxVQUFVLENBQVZBLE1BQWlCRSxTQUF6Q0YsR0FBcURBLFVBQVUsQ0FBVkEsQ0FBckRBLEdBQW9FNEMsU0FBU1YsSUFBeEY7QUFDQSxNQUFJd0YsSUFBSW5JLFNBQVNvSSxjQUFUcEksQ0FBd0JxSSxrQkFBeEJySSxDQUEyQyxFQUEzQ0EsQ0FBUjtBQUNBLE1BQUlzSSxJQUFJSCxFQUFFN0YsYUFBRjZGLENBQWdCLE1BQWhCQSxDQUFSO0FBQ0EsTUFBSUksSUFBSUosRUFBRTdGLGFBQUY2RixDQUFnQixHQUFoQkEsQ0FBUjtBQUNBQSxJQUFFSyxJQUFGTCxDQUFPTSxXQUFQTixDQUFtQkcsQ0FBbkJIO0FBQ0FBLElBQUVPLElBQUZQLENBQU9NLFdBQVBOLENBQW1CSSxDQUFuQko7QUFDQUcsSUFBRTNGLElBQUYyRixHQUFTSixJQUFUSTtBQUNBQyxJQUFFNUYsSUFBRjRGLEdBQVMvRixHQUFUK0Y7QUFDQSxTQUFPQSxFQUFFNUYsSUFBVDs7O0FBR0osU0FBUzRDLGVBQVQsQ0FBeUJvRCxHQUF6QixFQUE4QkMsUUFBOUIsRUFBOEJBO0FBQzFCLE1BQUlDLFVBQVVGLElBQUlFLE9BQUpGLElBQWVBLElBQUlwRCxlQUFuQm9ELElBQXNDQSxJQUFJRyxxQkFBMUNILElBQW1FQSxJQUFJSSxrQkFBdkVKLElBQTZGQSxJQUFJSyxpQkFBakdMLElBQXNIQSxJQUFJTSxnQkFBeEk7QUFDQSxTQUFPSixRQUFRSyxJQUFSTCxDQUFhRixHQUFiRSxFQUFrQkQsUUFBbEJDLENBQVA7OztBQzdTSixvQkFBaUJNLFFBQWpCOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JaLENBQWxCLEVBQXFCRCxDQUFyQixFQUF3QmMsR0FBeEIsRUFBd0JBO0FBQ3RCLE1BQUliLGFBQWFjLE1BQWpCLEVBQXlCZCxJQUFJZSxXQUFXZixDQUFYZSxFQUFjRixHQUFkRSxDQUFKZjtBQUN6QixNQUFJRCxhQUFhZSxNQUFqQixFQUF5QmYsSUFBSWdCLFdBQVdoQixDQUFYZ0IsRUFBY0YsR0FBZEUsQ0FBSmhCO0FBRXpCLE1BQUlpQixJQUFJQyxNQUFNakIsQ0FBTmlCLEVBQVNsQixDQUFUa0IsRUFBWUosR0FBWkksQ0FBUjtBQUVBLFNBQU9ELEtBQUs7QUFDVkUsV0FBT0YsRUFBRSxDQUFGQSxDQURHO0FBRVZHLFNBQUtILEVBQUUsQ0FBRkEsQ0FGSztBQUdWSSxTQUFLUCxJQUFJUSxLQUFKUixDQUFVLENBQVZBLEVBQWFHLEVBQUUsQ0FBRkEsQ0FBYkgsQ0FISztBQUlWVixVQUFNVSxJQUFJUSxLQUFKUixDQUFVRyxFQUFFLENBQUZBLElBQU9oQixFQUFFN0gsTUFBbkIwSSxFQUEyQkcsRUFBRSxDQUFGQSxDQUEzQkgsQ0FKSTtBQUtWUyxVQUFNVCxJQUFJUSxLQUFKUixDQUFVRyxFQUFFLENBQUZBLElBQU9qQixFQUFFNUgsTUFBbkIwSTtBQUxJLEdBQVo7OztBQVNGLFNBQVNFLFVBQVQsQ0FBb0JRLEdBQXBCLEVBQXlCVixHQUF6QixFQUF5QkE7QUFDdkIsTUFBSVcsSUFBSVgsSUFBSTFDLEtBQUowQyxDQUFVVSxHQUFWVixDQUFSO0FBQ0EsU0FBT1csSUFBSUEsRUFBRSxDQUFGQSxDQUFKQSxHQUFXLElBQWxCOzs7QUFHRlosU0FBU0ssS0FBVEwsR0FBaUJLLEtBQWpCTDs7QUFDQSxTQUFTSyxLQUFULENBQWVqQixDQUFmLEVBQWtCRCxDQUFsQixFQUFxQmMsR0FBckIsRUFBcUJBO0FBQ25CLE1BQUlZLElBQUosRUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsTUFBNUI7QUFDQSxNQUFJQyxLQUFLakIsSUFBSWhILE9BQUpnSCxDQUFZYixDQUFaYSxDQUFUO0FBQ0EsTUFBSWtCLEtBQUtsQixJQUFJaEgsT0FBSmdILENBQVlkLENBQVpjLEVBQWVpQixLQUFLLENBQXBCakIsQ0FBVDtBQUNBLE1BQUkzRyxJQUFJNEgsRUFBUjs7QUFFQSxNQUFJQSxNQUFNLENBQU5BLElBQVdDLEtBQUssQ0FBcEIsRUFBdUI7QUFDckJOLFdBQU8sRUFBUEE7QUFDQUUsV0FBT2QsSUFBSTFJLE1BQVh3Sjs7QUFFQSxXQUFPekgsS0FBSyxDQUFMQSxJQUFLLENBQU0ySCxNQUFsQixFQUEwQjtBQUN4QixVQUFJM0gsS0FBSzRILEVBQVQsRUFBYTtBQUNYTCxhQUFLM0MsSUFBTDJDLENBQVV2SCxDQUFWdUg7QUFDQUssYUFBS2pCLElBQUloSCxPQUFKZ0gsQ0FBWWIsQ0FBWmEsRUFBZTNHLElBQUksQ0FBbkIyRyxDQUFMaUI7T0FGRixNQUdPLElBQUlMLEtBQUt0SixNQUFMc0osSUFBZSxDQUFuQixFQUFzQjtBQUMzQkksaUJBQVMsQ0FBRUosS0FBS08sR0FBTFAsRUFBRixFQUFjTSxFQUFkLENBQVRGO09BREssTUFFQTtBQUNMSCxjQUFNRCxLQUFLTyxHQUFMUCxFQUFOQzs7QUFDQSxZQUFJQSxNQUFNQyxJQUFWLEVBQWdCO0FBQ2RBLGlCQUFPRCxHQUFQQztBQUNBQyxrQkFBUUcsRUFBUkg7OztBQUdGRyxhQUFLbEIsSUFBSWhILE9BQUpnSCxDQUFZZCxDQUFaYyxFQUFlM0csSUFBSSxDQUFuQjJHLENBQUxrQjs7O0FBR0Y3SCxVQUFJNEgsS0FBS0MsRUFBTEQsSUFBV0EsTUFBTSxDQUFqQkEsR0FBcUJBLEVBQXJCQSxHQUEwQkMsRUFBOUI3SDs7O0FBR0YsUUFBSXVILEtBQUt0SixNQUFULEVBQWlCO0FBQ2YwSixlQUFTLENBQUVGLElBQUYsRUFBUUMsS0FBUixDQUFUQzs7OztBQUlKLFNBQU9BLE1BQVA7OztBQy9CRixTQUFTSSxRQUFULENBQWtCQyxHQUFsQixFQUFrQkE7TUFBS2pLLDhFQUFVLEU7TUFDdkJrSyxXQUFXO0FBQ2JDLGNBQWdCLEtBREg7QUFFYkMsb0JBQWdCO0FBRkgsRzs7TUFJWGhLLFdBQVdpSyxTQUFjLEVBQWRBLEVBQWtCSCxRQUFsQkcsRUFBNEJySyxPQUE1QnFLLEM7O01BQ1hDLFNBQVcsRTs7V0FJUkMsSyxDQUFNQyxHLEVBQUFBO1VBQ0wsSUFBSUMsS0FBSixDQUFJQSwyQkFBMEJELEdBQTFCQyxDQUFKLEM7OztXQU1EdkUsSyxDQUFNd0UsRSxFQUFBQTtRQUNMbkIsSUFBSW1CLEdBQUdDLElBQUhELENBQVFULEdBQVJTLEM7O1FBRU5uQixDLEVBQUc7QUFDSFUsWUFBTUEsSUFBSWIsS0FBSmEsQ0FBVVYsRUFBRSxDQUFGQSxFQUFLckosTUFBZitKLENBQU5BO2FBRU9WLEM7Ozs7V0FJTnJHLEksR0FBQUE7V0FDRWdELE1BQU0sT0FBTkEsQzs7O1dBR0YwRSxLLEdBQUFBO1dBQ0UxRSxNQUFNLElBQU5BLEM7OztXQUdGMkUsVSxHQUFBQTtBQUNMM0UsVUFBTSxNQUFOQTs7O1dBS0s0RSxPLEdBQUFBO0FBQ0xEOztRQUVJWixJQUFJLENBQUpBLE1BQVcsR0FBWEEsSUFBa0JBLElBQUksQ0FBSkEsTUFBVyxHLEVBQUs7Ozs7UUFJbENoSSxJQUFJLEM7O1dBRURnSSxJQUFJaEksQ0FBSmdJLE1BQVdBLElBQUloSSxDQUFKZ0ksTUFBVyxHQUFYQSxJQUFrQkEsSUFBSWhJLElBQUksQ0FBUmdJLE1BQWUsR0FBNUNBLEMsRUFBa0Q7QUFDckRoSTs7O1NBR0NnSSxJQUFJaEksQ0FBSmdJLEMsRUFBUTthQUNGTSxNQUFNLDJCQUFOQSxDOzs7UUFHTDNCLE1BQU1xQixJQUFJYixLQUFKYSxDQUFVLENBQVZBLEVBQWFoSSxDQUFiZ0ksQztBQUVaQSxVQUFNQSxJQUFJYixLQUFKYSxDQUFVaEksSUFBSSxDQUFkZ0ksQ0FBTkE7V0FFTztBQUNIYyxZQUFTLFNBRE47QUFFSEQsZUFBU2xDO0FBRk4sSzs7O1dBTUZvQyxRLEdBQUFBO1FBQ0NDLFFBQVEsRTtRQUNWQyxDOztXQUVJQSxJQUFJSixTLEVBQVk7QUFDcEJHLFlBQU1wRSxJQUFOb0UsQ0FBV0MsQ0FBWEQ7OztXQUdHN0ssU0FBU2dLLGNBQVRoSyxHQUEwQixFQUExQkEsR0FBK0I2SyxLOzs7V0FLakM3QyxRLEdBQUFBO0FBQ0x5Qzs7V0FFT1osSUFBSSxDQUFKQSxNQUFXLEcsRUFBSztBQUNuQk0sWUFBTSx1QkFBTkE7OztRQUdFaEIsSUFBSXJELE1BQU0sNENBQU5BLEM7O1FBRU5xRCxDLEVBQUc7YUFDSUEsRUFBRSxDQUFGQSxFQUNGakksSUFERWlJLEdBRUZ0RCxPQUZFc0QsQ0FFTSwrQ0FGTkEsRUFFc0QsRUFGdERBLEVBR0Z0RCxPQUhFc0QsQ0FHTSxrQ0FITkEsRUFHMEMsVUFBU0EsQ0FBVCxFQUFTQTtlQUMzQ0EsRUFBRXRELE9BQUZzRCxDQUFVLElBQVZBLEVBQWdCLEdBQWhCQSxDO09BSlJBLEVBTUYzRyxLQU5FMkcsQ0FNSSxvQkFOSkEsRUFPRnRJLEdBUEVzSSxDQU9FLFVBQVM0QixDQUFULEVBQVNBO2VBQ0hBLEVBQUVsRixPQUFGa0YsQ0FBVSxTQUFWQSxFQUFxQixHQUFyQkEsQztPQVJSNUIsQzs7OztXQWVONkIsVyxHQUFBQTtBQUNMbEYsVUFBTSxZQUFOQTtRQUVNbUYsaUJBQWlCLGtDO1FBQ25CQyxPQUFPcEYsTUFBTSx5Q0FBTkEsQzs7U0FFTm9GLEksRUFBTTs7OztBQUlYQSxXQUFPQSxLQUFLLENBQUxBLEVBQVFoSyxJQUFSZ0ssRUFBUEE7O1NBRUtwRixNQUFNLE9BQU5BLEMsRUFBZ0I7YUFDVnFFLE1BQU0sc0JBQU5BLEM7OztRQUlMZ0IsTUFBTXJGLE1BQU0sc0dBQU5BLEM7UUFDTnNGLE1BQU07QUFDUlQsWUFBVSxhQURGO0FBRVJVLGdCQUFVSCxLQUFLckYsT0FBTHFGLENBQWFELGNBQWJDLEVBQTZCLEVBQTdCQSxDQUZGO0FBR1JJLGFBQVVILE1BQU1BLElBQUksQ0FBSkEsRUFBT3RGLE9BQVBzRixDQUFlRixjQUFmRSxFQUErQixFQUEvQkEsRUFBbUNqSyxJQUFuQ2lLLEVBQU5BLEdBQWtEO0FBSHBELEs7QUFNWnJGLFVBQU0sU0FBTkE7V0FFT3NGLEc7OztXQUdGRyxZLEdBQUFBO1NBQ0F6SSxNLEVBQVE7YUFDRnFILE1BQU0sYUFBTkEsQzs7O1FBR1A1QyxDO1FBQ0FpRSxRQUFRWixVOztXQUVKckQsSUFBSXlELGEsRUFBZ0I7QUFDeEJRLFlBQU0vRSxJQUFOK0UsQ0FBV2pFLENBQVhpRTtBQUNBQSxjQUFRQSxNQUFNL0gsTUFBTitILENBQWFaLFVBQWJZLENBQVJBOzs7U0FHQ2hCLE8sRUFBUzthQUNITCxNQUFNLGFBQU5BLEM7OztXQUdKcUIsSzs7O1dBS0ZDLFEsR0FBQUE7QUFDTGhCO1FBRU1pQixPQUFPLEU7UUFDVHZDLEM7O1dBRUlBLElBQUlyRCxNQUFNLHFDQUFOQSxDLEVBQStDO0FBQ3ZENEYsV0FBS2pGLElBQUxpRixDQUFVdkMsRUFBRSxDQUFGQSxDQUFWdUM7QUFDQTVGLFlBQU0sT0FBTkE7OztRQUdBNEYsS0FBSzVMLE0sRUFBUTthQUNOO0FBQ0g2SyxjQUFjLFVBRFg7QUFFSGdCLGdCQUFjRCxJQUZYO0FBR0hILHNCQUFjQTtBQUhYLE87Ozs7V0FRTkssWSxHQUFBQTtRQUNEekMsSUFBSXJELE1BQU0seUJBQU5BLEM7O1NBRUhxRCxDLEVBQUc7Ozs7UUFJRjBDLFNBQVMxQyxFQUFFLENBQUZBLEM7QUFFZkEsUUFBSXJELE1BQU0sY0FBTkEsQ0FBSnFEOztTQUVLQSxDLEVBQUc7YUFDR2dCLE1BQU0seUJBQU5BLEM7OztRQUdMMkIsT0FBTzNDLEVBQUUsQ0FBRkEsQzs7U0FFUnJHLE0sRUFBUTthQUNGcUgsTUFBTSx3QkFBTkEsQzs7O1FBR1A0QixLO1FBQ0FDLFNBQVNwQixVOztXQUVMbUIsUUFBUU4sVSxFQUFhO0FBQ3pCTyxhQUFPdkYsSUFBUHVGLENBQVlELEtBQVpDO0FBQ0FBLGVBQVNBLE9BQU92SSxNQUFQdUksQ0FBY3BCLFVBQWRvQixDQUFUQTs7O1NBR0N4QixPLEVBQVM7YUFDSEwsTUFBTSx3QkFBTkEsQzs7O1dBR0o7QUFDSFEsWUFBVyxXQURSO0FBRUhtQixZQUFXQSxJQUZSO0FBR0hELGNBQVdBLE1BSFI7QUFJSEksaUJBQVdEO0FBSlIsSzs7O1dBVUZFLE8sR0FBQUE7UUFDQy9DLElBQUlyRCxNQUFNLFVBQU5BLEM7O1FBQ05xRCxDLEVBQUc7VUFDR2dELE1BQU1uRSxjQUFjLEU7YUFDbkI7QUFBRTJDLGNBQU0sTUFBUjtBQUFnQnlCLG1CQUFXRCxHQUEzQjtBQUFnQ1osc0JBQWNBO0FBQTlDLE87Ozs7V0FHTmMsVyxHQUFBQTtRQUNDbEQsSUFBSXJELE1BQU0sZ0JBQU5BLEM7O1FBQ05xRCxDLEVBQUc7YUFBUztBQUFFd0IsY0FBTSxXQUFSO0FBQXFCWSxzQkFBY0E7QUFBbkMsTzs7OztXQUVYZSxXLEdBQUFBO1FBQ0NuRCxJQUFJckQsTUFBTSxxQkFBTkEsQzs7UUFDTnFELEMsRUFBRzthQUFTO0FBQUV3QixjQUFNLFVBQVI7QUFBb0I0QixrQkFBVXBELEVBQUUsQ0FBRkEsRUFBS2pJLElBQUxpSSxFQUE5QjtBQUEyQ3ZELGVBQU9BO0FBQWxELE87Ozs7V0FFWDRHLE8sR0FBQUE7UUFDQ3JELElBQUlyRCxNQUFNLFdBQU5BLEM7O1FBQ05xRCxDLEVBQUc7YUFBUztBQUFFd0IsY0FBTSxNQUFSO0FBQWdCL0UsZUFBT0E7QUFBdkIsTzs7OztXQUVYNkcsUSxHQUFBQTtRQUNDdEQsSUFBSXJELE1BQU0sa0JBQU5BLEM7O1FBQ05xRCxDLEVBQUc7YUFBUztBQUFFd0IsY0FBTSxPQUFSO0FBQWlCK0IsZUFBT3ZELEVBQUUsQ0FBRkEsRUFBS2pJLElBQUxpSSxFQUF4QjtBQUFxQ3ZELGVBQU9BO0FBQTVDLE87Ozs7V0FFWCtHLFcsR0FBQUE7UUFDQ3hELElBQUlyRCxNQUFNLHlDQUFOQSxDOztRQUNOcUQsQyxFQUFHO2FBQVM7QUFBRXdCLGNBQU0sY0FBUjtBQUF3Qm1CLGNBQU0zQyxFQUFFLENBQUZBLEVBQUtqSSxJQUFMaUksRUFBOUI7QUFBMkN1RCxlQUFPdkQsRUFBRSxDQUFGQSxFQUFLakksSUFBTGlJO0FBQWxELE87Ozs7V0FFWHlELFcsR0FBQUE7UUFDQ3pELElBQUlyRCxNQUFNLDhCQUFOQSxDOztRQUNOcUQsQyxFQUFHO2FBQVM7QUFBRXdCLGNBQU0sVUFBUjtBQUFvQnZMLGtCQUFVK0osRUFBRSxDQUFGQSxFQUFLakksSUFBTGlJLEVBQTlCO0FBQTJDMEMsZ0JBQVExQyxFQUFFLENBQUZBLElBQU9BLEVBQUUsQ0FBRkEsRUFBS2pJLElBQUxpSSxFQUFQQSxHQUFxQixJQUF4RTtBQUE4RXZELGVBQU9BO0FBQXJGLE87Ozs7V0FFWGlILEksR0FBQUE7UUFDQzFELElBQUlyRCxNQUFNLHlDQUFOQSxDOztRQUNOcUQsQyxFQUFHO2FBQVM7QUFBRXdCLGNBQU14QixFQUFFLENBQUZBLENBQVI7QUFBYzJDLGNBQU0zQyxFQUFFLENBQUZBLEVBQUtqSSxJQUFMaUk7QUFBcEIsTzs7OztXQUVYMkQsTyxHQUFBQTtBQUNMckM7O1FBRUlaLElBQUksQ0FBSkEsTUFBVyxHLEVBQUs7VUFDVnVCLE1BQU1RLGtCQUFrQlUsYUFBbEJWLElBQW1DWSxTQUFuQ1osSUFBZ0RhLFVBQWhEYixJQUE4RGUsYUFBOURmLElBQStFTSxTQUEvRU4sSUFBNEZnQixhQUE1RmhCLElBQTZHUyxhQUE3R1QsSUFBOEhpQixNOztVQUV0SXpCLE9BQU9wTCxTQUFTK0osUSxFQUFVO1lBQ3RCZ0QsYUFBYSxLOztZQUdiM0IsSUFBSUcsWSxFQUFjO0FBQ2xCd0IsdUJBQWEzQixJQUFJRyxZQUFKSCxDQUFpQjRCLElBQWpCNUIsQ0FBc0I7bUJBQVEsUUFBUTdGLElBQVIsQ0FBYTBILEtBQUszQixLQUFsQixDO1dBQTlCRixDQUFiMkI7ZUFHQztjQUNLRyxNQUFNOUIsSUFBSWEsU0FBSmIsSUFBaUJBLElBQUl4RixLQUFyQndGLElBQThCLEU7QUFFMUMyQix1QkFBYUcsSUFBSUYsSUFBSkUsQ0FBUztvQkFBUUMsSUFBSTVCLFlBQUo0QixJQUFvQixFLEVBQUlILEksQ0FBSztxQkFBUSxRQUFRekgsSUFBUixDQUFhMEgsS0FBSzNCLEtBQWxCLEM7O1dBQXRENEIsQ0FBYkg7OztlQUdHQSxhQUFhM0IsR0FBYjJCLEdBQW1CLEU7OzthQUd2QjNCLEc7Ozs7V0FNTnJGLEksR0FBQUE7UUFDRC9GLFNBQVMrSixRLEVBQVU7VUFDYnFELG1CQUFnQjdFLGNBQVMsR0FBVEEsRUFBYyxHQUFkQSxFQUFtQnNCLEdBQW5CdEIsQzs7VUFJbEI2RSxnQixFQUFlO1lBQ1RDLGFBQWFELGlCQUFjckUsR0FBZHFFLENBQWtCNUwsT0FBbEI0TCxDQUEwQixPQUExQkEsTUFBMEIsQ0FBYyxDQUF4Q0EsSUFBNkMsWUFBWTdILElBQVosQ0FBaUI2SCxpQkFBY3RGLElBQS9CLEM7WUFDMURpRixhQUFhLFFBQVF4SCxJQUFSLENBQWE2SCxpQkFBY3RGLElBQTNCLEM7O2FBRWR1RixVLElBQUFBLENBQWVOLFUsRUFBWTtBQUM1QmxELGdCQUFNQSxJQUFJYixLQUFKYSxDQUFVdUQsaUJBQWN0RSxHQUFkc0UsR0FBb0IsQ0FBOUJ2RCxDQUFOQTtpQkFFTyxFOzs7OztRQUtic0MsTUFBUW5FLGNBQWMsRTtRQUN0QndELFNBQVN4TCxTQUFTK0osUUFBbEJ5QixHQUE2QkQsY0FBN0JDLEdBQThDRCxlQUFlakgsTUFBZmlILENBQXNCO1VBQ2hFOEIsYUFBYWxCLElBQUlhLElBQUpiLENBQVM7ZUFBS3BCLEVBQUV2SixPQUFGdUosQ0FBVSxPQUFWQSxNQUFVLENBQWMsQztPQUF0Q29CLEtBQTRDLFFBQVE1RyxJQUFSLENBQWEwSCxLQUFLNUIsUUFBbEIsQztVQUN6RDBCLGFBQWEsUUFBUXhILElBQVIsQ0FBYTBILEtBQUszQixLQUFsQixDO2FBRVorQixjQUFjTixVO0tBSjJCeEIsQzs7U0FPL0NZLElBQUlyTSxNLEVBQVE7QUFDYnFLLFlBQU0sa0JBQU5BOzs7V0FHRztBQUNIUSxZQUFjLE1BRFg7QUFFSHlCLGlCQUFjRCxHQUZYO0FBR0haLG9CQUFjQztBQUhYLEs7OztXQU9GNUYsSyxDQUFNMEgsSSxFQUFBQTtTQUNOQSxJLElBQUFBLENBQVN4SyxNLEVBQVE7YUFDWHFILE1BQU0sYUFBTkEsQzs7O1FBR1B6RixJO1FBQ0FrQixRQUFRZ0YsVTs7V0FFTGYsSUFBSS9KLE1BQUorSixLQUFleUQsUUFBUXpELElBQUksQ0FBSkEsTUFBVyxHQUFsQ0EsTUFBMkNuRixPQUFPb0ksYUFBYS9HLE1BQS9EOEQsQyxFQUF3RTtVQUN2RW5GLEtBQUtpRyxJLEVBQU07QUFDWC9FLGNBQU1hLElBQU5iLENBQVdsQixJQUFYa0I7OztBQUdKQSxjQUFRQSxNQUFNbkMsTUFBTm1DLENBQWFnRixVQUFiaEYsQ0FBUkE7OztTQUdDMEgsSSxJQUFBQSxDQUFTOUMsTyxFQUFTO2FBQ1pMLE1BQU0sYUFBTkEsQzs7O1dBR0p2RSxLOzs7U0FHSjtBQUNIK0UsVUFBTSxZQURIO0FBRUg0QyxnQkFBWTtBQUNSM0gsYUFBT0EsTUFBTSxJQUFOQSxDQURDO0FBRVJzRSxjQUFRQTtBQUZBO0FBRlQsRzs7O0FDbFdYLFNBQVNzRCxZQUFULENBQXNCQyxJQUF0QixFQUFzQkE7TUFBTUMsNEVBQVEsRTtNQUFJQyxvRDtNQUM5QkMsZ0JBQWdCO0FBQ2xCQyw4QkFBUW5KLElBQVJtSixFQUFRbko7YUFDRyxjQUFjQSxLQUFLb0gsSUFBbkIsR0FBMEIsRztLQUZuQjtBQUlsQnBCLDhCQUFRaEcsSUFBUmdHLEVBQVFoRzthQUVHQSxLQUFLZ0csT0FBTGhHLENBQWFsRCxPQUFia0QsQ0FBcUIsbUJBQXJCQSxNQUE4QyxDQUE5Q0EsR0FBa0QsT0FBT0EsS0FBS2dHLE9BQVosR0FBc0IsSUFBeEVoRyxHQUErRSxFO0tBTnhFO3lDQVFIQSxJLEVBQUFBO2FBQ0osbUJBQW1CQSxLQUFLb0gsSUFBeEIsR0FBK0IsR0FBL0IsR0FBcUNwSCxLQUFLZ0ksS0FBMUMsR0FBa0QsRztLQVQzQztBQVdsQjFCLHNDQUFZdEcsSUFBWnNHLEVBQVl0RzthQUNEQSxLQUFLMkcsUUFBTDNHLEdBQWdCLEdBQWhCQSxHQUFzQkEsS0FBSzRHLEtBQTNCNUcsR0FBbUMsRztLQVo1QjtBQWNsQnRGLGdDQUFTc0YsSUFBVHRGLEVBQVNzRjthQUNFLE9BQU9BLEtBQUttSCxNQUFMbkgsSUFBZSxFQUF0QixJQUE0QixXQUE1QixHQUEwQ0EsS0FBS3RGLFFBQS9DLEdBQTBELEdBQTFELEdBQWdFME8sTUFBTXBKLEtBQUtrQixLQUFYa0ksQ0FBaEUsR0FBb0YsRztLQWY3RTttQ0FpQk5wSixJLEVBQUFBO2FBQ0QsZUFBZSxHQUFmLEdBQXFCb0osTUFBTXBKLEtBQUs2RyxZQUFYdUMsQ0FBckIsR0FBZ0QsRztLQWxCekM7QUFvQmxCdkwsd0JBQUttQyxJQUFMbkMsRUFBS21DO2FBQ00sVUFBVSxHQUFWLEdBQWdCb0osTUFBTXBKLEtBQUtrQixLQUFYa0ksQ0FBaEIsR0FBb0MsRztLQXJCN0I7QUF1QmxCQyw2QkFBT3JKLElBQVBxSixFQUFPcko7YUFFSSxhQUFhQSxLQUFLb0gsSUFBbEIsR0FBeUIsRztLQXpCbEI7QUEyQmxCTCxnQ0FBUy9HLElBQVQrRyxFQUFTL0c7YUFDRUEsS0FBS2lILE1BQUxqSCxDQUFZSyxJQUFaTCxDQUFpQixHQUFqQkEsSUFBd0IsR0FBeEJBLEdBQThCb0osTUFBTXBKLEtBQUs2RyxZQUFYdUMsQ0FBOUJwSixHQUF5RCxHO0tBNUJsRDtBQThCbEJ1SCxrQ0FBVXZILElBQVZ1SCxFQUFVdkg7YUFDQyxPQUFPQSxLQUFLbUgsTUFBTG5ILElBQWUsRUFBdEIsSUFBNEIsWUFBNUIsR0FBMkNBLEtBQUtvSCxJQUFoRCxHQUF1RCxHQUF2RCxHQUE2RGdDLE1BQU1wSixLQUFLdUgsU0FBWDZCLENBQTdELEdBQXFGLEc7S0EvQjlFO0FBaUNsQnBCLDBCQUFNaEksSUFBTmdJLEVBQU1oSTthQUNLLFlBQVlBLEtBQUtnSSxLQUFqQixHQUF5QixHQUF6QixHQUErQm9CLE1BQU1wSixLQUFLa0IsS0FBWGtJLENBQS9CLEdBQW1ELEc7S0FsQzVDO0FBb0NsQkUsa0NBQVV0SixJQUFWc0osRUFBVXRKO2FBQ0MsZ0JBQWdCQSxLQUFLb0gsSUFBckIsR0FBNEIsRztLQXJDckI7QUF1Q2xCbUMsd0JBQUt2SixJQUFMdUosRUFBS3ZKO2FBQ00sWUFBWUEsS0FBSzBILFNBQUwxSCxDQUFlNUUsTUFBZjRFLEdBQXdCQSxLQUFLMEgsU0FBTDFILENBQWVLLElBQWZMLENBQW9CLElBQXBCQSxDQUF4QkEsR0FBb0QsRUFBaEUsSUFBc0UsR0FBdEUsR0FBNEVvSixNQUFNcEosS0FBSzZHLFlBQVh1QyxDQUE1RSxHQUF1RyxHO0tBeENoRztBQTBDbEIvSCx3QkFBS3JCLElBQUxxQixFQUFLckI7VUFDSzhHLFFBQVE5RyxLQUFLNkcsWTs7VUFFZkMsTUFBTTFMLE0sRUFBUTtlQUNQNEUsS0FBSzBILFNBQUwxSCxDQUFlSyxJQUFmTCxDQUFvQixHQUFwQkEsSUFBMkIsR0FBM0JBLEdBQWlDb0osTUFBTXRDLEtBQU5zQyxDQUFqQ3BKLEdBQWdELEc7O0tBOUM3QztBQWlEbEI2SCxnQ0FBUzdILElBQVQ2SCxFQUFTN0g7YUFFRSxlQUFlQSxLQUFLNkgsUUFBcEIsR0FBK0IsR0FBL0IsR0FBcUN1QixNQUFNcEosS0FBS2tCLEtBQVhrSSxDQUFyQyxHQUF5RCxHOztBQW5EbEQsRzs7V0F1RGJBLEssQ0FBTUksSyxFQUFBQTtRQUNQQyxNQUFNLEU7O1NBRUwsSUFBSXRNLElBQUksQyxFQUFHQSxJQUFJcU0sTUFBTXBPLE0sRUFBUStCLEcsRUFBSztVQUM3QnVNLElBQUlGLE1BQU1yTSxDQUFOcU0sQzs7VUFFTlAsRSxFQUFJO0FBQ0pBLFdBQUdTLENBQUhUOzs7VUFHRVUsTUFBTVQsY0FBY1EsRUFBRXpELElBQWhCaUQsRUFBc0JRLENBQXRCUixDOztVQUVSUyxHLEVBQUs7QUFDTEYsZUFBT0UsR0FBUEY7O1lBRUlFLElBQUl2TyxNQUFKdU8sSUFBY0QsRUFBRWhDLFMsRUFBVztBQUMzQitCLGlCQUFPVCxLQUFQUzs7Ozs7V0FLTEEsRzs7O1NBR0pMLE1BQU1MLEtBQUtGLFVBQUxFLENBQWdCN0gsS0FBdEJrSSxDOzs7QUNsRlgsU0FBU1EsT0FBVCxDQUFpQjVKLElBQWpCLEVBQXVCNkosRUFBdkIsRUFBdUJBO0FBQ25CN0osT0FBS2tCLEtBQUxsQixDQUFXL0MsT0FBWCtDLENBQW1CLFVBQVNxQixJQUFULEVBQVNBO1FBRXBCQSxLQUFLSCxLLEVBQU87QUFDWjBJLGNBQVF2SSxJQUFSdUksRUFBY0MsRUFBZEQ7Ozs7UUFNQXZJLEtBQUtrRyxTLEVBQVc7QUFDaEJsRyxXQUFLa0csU0FBTGxHLENBQWVwRSxPQUFmb0UsQ0FBdUIsVUFBUzBGLFFBQVQsRUFBU0E7WUFDeEJBLFNBQVNkLElBQVRjLEtBQWtCLFUsRUFBWTtBQUM5QjhDLGFBQUc5QyxTQUFTRixZQUFaZ0QsRUFBMEJ4SSxJQUExQndJOztPQUZSeEk7Ozs7U0FVQ0EsS0FBS3dGLFksRUFBYzs7OztBQUl4QmdELE9BQUd4SSxLQUFLd0YsWUFBUmdELEVBQXNCN0osSUFBdEI2SjtHQXhCSjdKOzs7QUNDSixJQUFNOEosc0JBQXNCLElBQTVCO0FBQ0EsSUFBTUMsc0JBQXNCLEtBQTVCO0FBQ0EsSUFBTUMsZ0JBQXNCO0FBRXhCQyxPQUFNLEVBRmtCO0FBSXhCQyxRQUFNLEVBSmtCO0FBTXhCQyxRQUFNO0FBTmtCLENBQTVCOztBQXNDQSxTQUFTQyxhQUFULENBQXVCOU4sT0FBdkIsRUFBdUJBO01BQVNwQiw4RUFBVSxFO01BQ2hDa0ssV0FBVztBQUNiaUYsbUJBQWUsSUFERjtBQUViaEYsY0FBZSxLQUZGO0FBR2JpRixhQUFlLEtBSEY7QUFJYkMsY0FBZSxLQUpGO0FBS2JDLGVBQWUsRUFMRjtBQU1iQztBQU5hLEc7O01BUVhuUCxXQUFXaUssU0FBYyxFQUFkQSxFQUFrQkgsUUFBbEJHLEVBQTRCckssT0FBNUJxSyxDOztNQUNYcEosTUFBV2IsU0FBU2dQLE9BQVRoUCxHQUFtQjBPLGNBQWNDLEdBQWpDM08sR0FBdUMwTyxjQUFjRSxJQUFkRixHQUFxQlUsS0FBS0MsS0FBTEQsQ0FBV0EsS0FBS0UsU0FBTEYsQ0FBZVYsY0FBY0MsR0FBN0JTLENBQVhBLEM7TUFHdkVHLFVBQVUzRixTQUFTNUksT0FBVDRJLEVBQWtCO0FBQzlCRyxjQUFVL0osU0FBUytKO0FBRFcsR0FBbEJILEM7QUFLaEIyRixVQUFRaEMsVUFBUmdDLENBQW1CM0osS0FBbkIySixDQUF5QjVOLE9BQXpCNE4sQ0FBaUMsVUFBU3hKLElBQVQsRUFBU0E7UUFDaEN5SixpQkFBaUIsRTs7UUFFbkJ6SixLQUFLNEUsSUFBTDVFLEtBQWMsTSxFQUFROzs7O1FBS3RCQSxLQUFLcUcsU0FBTHJHLENBQWVqRyxNQUFmaUcsS0FBMEIsQ0FBMUJBLElBQStCQSxLQUFLcUcsU0FBTHJHLENBQWUsQ0FBZkEsTUFBc0IsTyxFQUFTOzs7O0FBSWxFQSxTQUFLd0YsWUFBTHhGLENBQWtCcEUsT0FBbEJvRSxDQUEwQixVQUFTa0gsSUFBVCxFQUFlcEwsQ0FBZixFQUFlQTtVQUMvQnFKLE9BQU8rQixLQUFLNUIsUTtVQUNaQyxRQUFRMkIsS0FBSzNCLEs7O1VBRWZKLFFBQVFBLEtBQUsxSixPQUFMMEosQ0FBYXNELG1CQUFidEQsTUFBc0MsQyxFQUFHO0FBQ2pEckssWUFBSXFLLElBQUpySyxJQUFZeUssS0FBWnpLO0FBQ0EyTyx1QkFBZS9JLElBQWYrSSxDQUFvQjNOLENBQXBCMk47O0tBTlJ6Sjs7U0FXSy9GLFNBQVNpUCxRLEVBQVU7V0FDZixJQUFJcE4sSUFBSTJOLGVBQWUxUCxNQUFmMFAsR0FBd0IsQyxFQUFHM04sS0FBSyxDLEVBQUdBLEcsRUFBSztBQUNqRGtFLGFBQUt3RixZQUFMeEYsQ0FBa0IwSixNQUFsQjFKLENBQXlCeUosZUFBZTNOLENBQWYyTixDQUF6QnpKLEVBQTRDLENBQTVDQTs7O0dBekJad0o7QUErQkFHLFNBQU9DLElBQVBELENBQVloQixjQUFjRyxJQUExQmEsRUFBZ0MvTixPQUFoQytOLENBQXdDO0FBQ3BDN08sUUFBSStPLEdBQUovTyxJQUFXNk4sY0FBY0csSUFBZEgsQ0FBbUJrQixHQUFuQmxCLENBQVg3TjtHQURKNk87O01BS0lBLE9BQU9DLElBQVBELENBQVkxUCxTQUFTa1AsU0FBckJRLEVBQWdDNVAsTSxFQUFRO1FBQ2xDK1AsVUFBVTtBQUNadEUsb0JBQWMsRUFERjtBQUVaYSxpQkFBYyxDQUFDLE9BQUQsQ0FGRjtBQUdaekIsWUFBYztBQUhGLEs7QUFNaEIrRSxXQUFPQyxJQUFQRCxDQUFZMVAsU0FBU2tQLFNBQXJCUSxFQUFnQy9OLE9BQWhDK04sQ0FBd0M7VUFFOUJ4RSxtQkFBYTBFLElBQUkvSixPQUFKK0osQ0FBWSxLQUFaQSxFQUFtQixFQUFuQkEsQ0FBYjFFLEM7VUFDQUksUUFBUXRMLFNBQVNrUCxTQUFUbFAsQ0FBbUI0UCxHQUFuQjVQLEM7O1VBR1ZBLFNBQVNnUCxPLEVBQVM7QUFDbEJOLHNCQUFjRyxJQUFkSCxDQUFtQnhELElBQW5Cd0QsSUFBMkJwRCxLQUEzQm9EOzs7VUFJQTdOLElBQUlxSyxJQUFKckssTUFBY3lLLEssRUFBTztBQUNyQnpLLFlBQUlxSyxJQUFKckssSUFBWXlLLEtBQVp6SztBQUdBZ1AsZ0JBQVF0RSxZQUFSc0UsQ0FBcUJwSixJQUFyQm9KLENBQTBCO0FBQ3RCbEYsZ0JBQVUsYUFEWTtBQUV0QlUsb0JBQVVILElBRlk7QUFHdEJJLGlCQUFVQTtBQUhZLFNBQTFCdUU7O0tBZlJIOztRQXdCSTFQLFNBQVNpUCxRQUFUalAsSUFBcUI2UCxRQUFRdEUsWUFBUnNFLENBQXFCL1AsTSxFQUFRO0FBQ2xEeVAsY0FBUWhDLFVBQVJnQyxDQUFtQjNKLEtBQW5CMkosQ0FBeUI5SSxJQUF6QjhJLENBQThCTSxPQUE5Qk47Ozs7QUFLUmpCLFVBQVFpQixRQUFRaEMsVUFBaEJlLEVBQTRCLFVBQVMvQyxZQUFULEVBQXVCN0csSUFBdkIsRUFBdUJBO1FBQzNDdUksSTtRQUNBNkMsYTtRQUNBeEUsSzs7U0FFQyxJQUFJekosSUFBSSxDLEVBQUdBLElBQUkwSixhQUFhekwsTSxFQUFRK0IsRyxFQUFLO0FBQzFDb0wsYUFBTzFCLGFBQWExSixDQUFiMEosQ0FBUDBCO0FBQ0EzQixjQUFRMkIsS0FBSzNCLEtBQWJBOztVQUdJMkIsS0FBS3RDLElBQUxzQyxLQUFjLGEsRUFBZTs7OztXQUs1QjNCLEssSUFBU0EsTUFBTTlKLE9BQU44SixDQUFjbUQsc0JBQXNCLEdBQXBDbkQsTUFBb0MsQ0FBVSxDLEVBQUc7Ozs7QUFJL0R3RSxzQkFBZ0JDLGFBQWF6RSxLQUFieUUsRUFBb0JsUCxHQUFwQmtQLEVBQXlCL1AsUUFBekIrUCxDQUFoQkQ7O1VBRUlBLGtCQUFrQjdDLEtBQUszQixLLEVBQU87YUFDekJ0TCxTQUFTaVAsUSxFQUFVO0FBQ3BCaEMsZUFBSzNCLEtBQUwyQixHQUFhNkMsYUFBYjdDO2VBRUM7QUFDRDFCLHVCQUFha0UsTUFBYmxFLENBQW9CMUosQ0FBcEIwSixFQUF1QixDQUF2QkEsRUFBMEI7QUFDdEJaLGtCQUFVc0MsS0FBS3RDLElBRE87QUFFdEJVLHNCQUFVNEIsS0FBSzVCLFFBRk87QUFHdEJDLG1CQUFVd0U7QUFIWSxXQUExQnZFO0FBT0ExSjs7OztHQWpDaEJ5TTs7TUF3Q0l0TyxTQUFTK08sYSxFQUFlO0FBQ3hCQSxrQkFBY1EsUUFBUWhDLFVBQVJnQyxDQUFtQjNKLEtBQWpDbUo7OztTQUlHdkIsYUFBYStCLE9BQWIvQixDOzs7QUFZWCxTQUFTdUIsYUFBVCxDQUF1Qm5KLEtBQXZCLEVBQXVCQTtNQUNib0ssWUFBWSxtQjtBQUVsQnBLLFFBQU1qRSxPQUFOaUUsQ0FBYztRQUNORyxLQUFLd0YsWSxFQUFjO0FBQ25CeEYsV0FBS3dGLFlBQUx4RixDQUFrQnBFLE9BQWxCb0UsQ0FBMEI7WUFDbEJrSyxXQUFXaEQsS0FBSzNCLEs7WUFDaEI0RSxXQUFXLEU7O2VBRVJGLFVBQVV6SyxJQUFWeUssQ0FBZUMsUUFBZkQsQyxFQUEwQjtjQUN2QkcsV0FBVzVILGNBQVMsT0FBVEEsRUFBa0IsR0FBbEJBLEVBQXVCMEgsWUFBWSxFQUFuQzFILEM7QUFFakIwSCxxQkFBV0EsU0FBU2pILEtBQVRpSCxDQUFlRSxTQUFTckgsR0FBeEJtSCxDQUFYQTs7aUJBRU9ELFVBQVV6SyxJQUFWeUssQ0FBZUcsU0FBU3JJLElBQXhCa0ksQyxFQUErQjtnQkFDNUJJLGFBQWE3SCxjQUFTeUgsU0FBVHpILEVBQW9CLEdBQXBCQSxFQUF5QjRILFNBQVNySSxJQUFsQ1MsQztBQUVuQjRILHFCQUFTckksSUFBVHFJLEdBQVNySSxVQUFVc0ksV0FBV3JILEdBQXJCakIsRUFBcUJpQixHQUFyQmpCLEVBQXFCaUIsTUFBckJqQixDQUE0QnNJLFdBQVd0SSxJQUF2Q0EsRUFBdUNBLEdBQXZDQSxFQUF1Q0EsTUFBdkNBLENBQStDc0ksV0FBV25ILElBQTFEbkIsQ0FBVHFJOzs7QUFHSkQsZ0NBQWVDLFNBQVNwSCxHQUF4Qm1ILEVBQXdCbkgsT0FBeEJtSCxFQUF3Qm5ILE1BQXhCbUgsQ0FBbUNDLFNBQVNySSxJQUE1Q29JO0FBQ0FBLHVCQUFhRixVQUFVekssSUFBVnlLLENBQWVDLFFBQWZELENBQWJFLEdBQTRCRCxXQUFnQkUsU0FBU2xILElBQXpCZ0gsQ0FBNUJDLEdBQThELEVBQTlEQTs7O0FBR0pqRCxhQUFLM0IsS0FBTDJCLEdBQWFpRCxZQUFZakQsS0FBSzNCLEtBQTlCMkI7T0FuQkpsSDs7R0FGUkg7OztBQWdESixTQUFTbUssWUFBVCxDQUFzQnpFLEtBQXRCLEVBQTZCekssR0FBN0IsRUFBNkJBO01BQUtiLCtFQUFXLEU7O01BQUlxUSxxRTs7TUFDekMvRSxNQUFNOUosT0FBTjhKLENBQWMsTUFBZEEsTUFBYyxDQUFhLEMsRUFBRztXQUN2QkEsSzs7O01BR0xnRixZQUFZL0gsY0FBUyxHQUFUQSxFQUFjLEdBQWRBLEVBQW1CK0MsS0FBbkIvQyxDOztXQWdCVGdJLFcsQ0FBWWpGLEssRUFBQUE7UUFDWFEsT0FBcUJSLE1BQU05SSxLQUFOOEksQ0FBWSxHQUFaQSxFQUFpQixDQUFqQkEsRUFBb0J6RixPQUFwQnlGLENBQTRCLFdBQTVCQSxFQUF5QyxFQUF6Q0EsQztRQUNyQmtGLFlBQXNCbEYsTUFBTXhGLEtBQU53RixDQUFZLHFCQUFaQSxLQUFzQyxFQUE1RGtGLEVBQWdFLENBQWhFQSxDO1FBQ0ExSyxRQUFxQmpGLElBQUk0UCxjQUFKNVAsQ0FBbUJpTCxJQUFuQmpMLElBQTJCbUIsT0FBT25CLElBQUlpTCxJQUFKakwsQ0FBUG1CLENBQTNCbkIsR0FBK0NkLFM7UUFDcEUyUSxjQUFxQjVLLFVBQVUwSyxXQUFXeE8sT0FBT3dPLFFBQVB4TyxDQUFYd08sR0FBOEJ6USxTQUF4QytGLEM7UUFDckI2SyxxQkFBcUJOLHVCQUF1Qi9FLEs7O1NBRTdDeEYsSyxFQUFPO0FBQ1I5RixlQUFTbVAsU0FBVG5QLENBQVNtUCxvQkFBdUJyRCxJQUF2QnFELEVBQXVCckQsZ0JBQXZCcUQsQ0FBVG5QOzs7UUFHQTBRLGVBQWVBLGdCQUFnQixXQUEvQkEsSUFBOENBLFlBQVk1USxNQUFaNFEsR0FBcUIsQyxFQUFHO2FBQy9EWCxhQUFhVyxXQUFiWCxFQUEwQmxQLEdBQTFCa1AsRUFBK0IvUCxRQUEvQitQLEVBQXlDWSxrQkFBekNaLEM7V0FFTjsyQkFDYVksa0IsRUFBQUEsRzs7OztPQUtqQkwsUyxFQUFXO1FBQ1JoRixNQUFNOUosT0FBTjhKLENBQWMsTUFBZEEsTUFBYyxDQUFhLEMsRUFBRztBQUM5QnRMLGVBQVNtUCxTQUFUblAsQ0FBU21QLDRDQUErQzdELEtBQS9DNkQsRUFBK0M3RCxHQUEvQzZELENBQVRuUDs7O1dBR0dzTCxLO1NBR04sSUFBSWdGLFVBQVV2SCxHQUFWdUgsQ0FBY3RILEtBQWRzSCxDQUFjdEgsQ0FBTyxDQUFyQnNILE1BQTRCLEtBQWhDLEVBQXVDO1FBQ2xDTSxpQkFBaUJOLFVBQVV4SSxJQUFWd0ksQ0FBZXBQLElBQWZvUCxHQUFzQnhRLE1BQXRCd1EsS0FBaUMsQzs7UUFFcERNLGMsRUFBZ0I7QUFDaEI1USxlQUFTbVAsU0FBVG5QLENBQW1CLDRDQUFuQkE7YUFFT3NMLEs7V0FFTjthQUVHZ0YsVUFBVXZILEdBQVZ1SCxDQUFjdEgsS0FBZHNILENBQW9CLENBQXBCQSxFQUFvQixDQUFHLENBQXZCQSxJQUNFQyxZQUFZRCxVQUFVeEksSUFBdEJ5SSxDQURGRCxHQUVFUCxhQUFhTyxVQUFVckgsSUFBdkI4RyxFQUE2QmxQLEdBQTdCa1AsRUFBa0MvUCxRQUFsQytQLEM7O0dBWlQsTUFpQkE7V0FFR08sVUFBVXZILEdBQVZ1SCxHQUFVdkgsV0FDSmdILGFBQWFPLFVBQVV4SSxJQUF2QmlJLEVBQTZCbFAsR0FBN0JrUCxFQUFrQy9QLFFBQWxDK1AsQ0FESWhILEVBQzhCL0ksR0FEOUIrSSxDQUFWdUgsR0FFRVAsYUFBYU8sVUFBVXJILElBQXZCOEcsRUFBNkJsUCxHQUE3QmtQLEVBQWtDL1AsUUFBbEMrUCxDOzs7OztBQzNUZCxJQUFNYyxtQkFBeUJ6TyxNQUF6QnlPLEtBQW9DLFdBQTFDO0FBQ0EsSUFBTUMsa0JBQWtCRCxhQUFhek8sT0FBTzJPLEdBQXBCRixJQUEyQnpPLE9BQU8yTyxHQUFQM08sQ0FBV21LLFFBQXRDc0UsSUFBa0R6TyxPQUFPMk8sR0FBUDNPLENBQVdtSyxRQUFYbkssQ0FBb0IsVUFBcEJBLENBQTFFO0FBRUEsSUFBTTRPLG1CQUFtQixhQUF6QjtBQUNBLElBQU1sSCxXQUFXO0FBRWIzRixlQUFlME0sWUFBWXpSLFFBQVp5UixHQUF1QixJQUZ6QjtBQUdiSSxhQUFlLEtBSEY7QUFLYjdNLFdBQWUsNEJBTEY7QUFNYkMsV0FBZSxFQU5GO0FBT2I2SyxhQUFlLEVBUEY7QUFTYkgsaUJBQWUsSUFURjtBQVVibUMsY0FBZSxJQVZGO0FBV2JuSCxZQUFlLEtBWEY7QUFZYmtGLFlBQWUsS0FaRjtBQWFia0MsVUFBZSxLQWJGO0FBY2JDLGFBQWUsSUFkRjtBQWViQyxjQUFlLElBZkY7QUFnQmJDLFNBQWUsSUFoQkY7QUFrQmJwUiwwQ0FsQmE7QUFtQmJHLG9DQW5CYTtBQW9CYjhPLG9DQXBCYTtBQXFCYjdPLGdDQXJCYTtBQXNCYkM7QUF0QmEsQ0FBakI7QUF3QkEsSUFBTXlELFFBQVE7QUFFVkMsZUFBYSxtQkFGSDtBQUlWc04sZ0JBQWMsc0JBSko7QUFNVkMsZ0JBQWMseUJBTko7QUFRVkMsV0FBUyx5REFSQztBQVVWblMsV0FBUztBQVZDLENBQWQ7QUFjQSxJQUFJb1Msa0JBQWtCLElBQXRCO0FBR0EsSUFBSUMsZ0JBQWdCLElBQXBCO0FBSUEsSUFBSUMsbUJBQW1CLEtBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThGQTs7QUFBQSxTQUFTdFMsT0FBVCxHQUFTQTtNQUFRTSw4RUFBVSxFOztNQUNqQkksV0FBY2lLLFNBQWMsRUFBZEEsRUFBa0JILFFBQWxCRyxFQUE0QnJLLE9BQTVCcUssQzs7TUFDZDRILGNBQWNDLEk7QUFJcEI5UixXQUFTcUUsT0FBVHJFLEdBQW1CLFdBQUk2UixXQUFKLEtBQXFCN1IsU0FBU3FFLE9BQVRyRSxHQUFTcUUsV0FBY3JFLFNBQVNxRSxPQUF2QkEsQ0FBVHJFLEdBQTRDLEVBQWpFLENBQW5CQTtBQUdBQSxXQUFTK1IsVUFBVC9SLEdBQVMrUixDQUFjL1IsU0FBUytSLFVBQXZCQSxHQUFvQ0MsY0FBcENELEdBQXFEL1IsU0FBUytSLFVBQXZFL1I7O1dBRVNpUyxXLENBQVlDLE8sRUFBU0MsVSxFQUFZL1EsRyxFQUFLUSxHLEVBQUFBO1NBRXRDNUIsU0FBU21SLE0sRUFBUTtBQUVsQjVOLGNBQVE0RyxLQUFSNUcsQ0FBUTRHLFVBQVM2RyxnQkFBVDdHLEVBQVM2RyxNQUFUN0csQ0FBNEIrSCxPQUE1Qi9ILEVBQTRCK0gsSUFBNUIvSCxDQUFSNUcsRUFBaUQ0TyxVQUFqRDVPOzs7QUFHSnZELGFBQVNNLE9BQVROLENBQWlCa1MsT0FBakJsUyxFQUEwQm1TLFVBQTFCblMsRUFBc0NvQixHQUF0Q3BCLEVBQTJDNEIsR0FBM0M1Qjs7O1dBR0tvUyxhLENBQWNGLE8sRUFBQUE7U0FFZGxTLFNBQVNtUixNLEVBQVE7QUFFbEI1TixjQUFRQyxJQUFSRCxDQUFRQyxVQUFRd04sZ0JBQVJ4TixFQUFRd04sTUFBUnhOLENBQTJCME8sT0FBM0IxTyxDQUFSRDs7O0FBR0p2RCxhQUFTbVAsU0FBVG5QLENBQW1Ca1MsT0FBbkJsUzs7O09BSUM2USxTLEVBQVc7Ozs7TUFLWjdRLFNBQVNzUixLQUFUdFIsS0FBbUIsS0FBbkJBLElBQTRCMFIsZSxFQUFpQjtBQUM3Q0Esb0JBQWdCVyxVQUFoQlg7OztNQUlBMVIsU0FBU3NSLEssRUFBTztBQUNoQmdCLHdCQUFvQnRTLFFBQXBCc1MsRUFBOEJULFdBQTlCUztBQUNBQyxxQkFBaUJ2UyxRQUFqQnVTO1NBR0MsSUFBSW5ULFNBQVN5RSxVQUFUekUsS0FBd0IsU0FBNUIsRUFBdUM7UUFDbENvVCxjQUFjeFMsU0FBU2lSLFNBQVRqUixJQUFzQkEsU0FBU21FLFdBQVRuRSxDQUFxQnlTLFVBQTNDelMsSUFBeURBLFNBQVNtRSxXQUFUbkUsQ0FBcUJ1QyxJOztRQUc5RnVPLG1CQUFtQjlRLFNBQVNrUixVLEVBQVk7VUFFcENsUixTQUFTb1IsUyxFQUFXO1lBQ2RzQixZQUFZMVMsU0FBU21FLFdBQVRuRSxDQUFxQnVDLElBQXJCdkMsS0FBOEJBLFNBQVNtRSxXQUFUbkUsS0FBeUJaLFFBQXpCWSxHQUFvQ1osU0FBU3VULGVBQTdDM1MsR0FBK0RBLFNBQVNtRSxXQUF0R25FLEM7QUFHbEIwUCxlQUFPQyxJQUFQRCxDQUFZMVAsU0FBU2tQLFNBQXJCUSxFQUFnQy9OLE9BQWhDK04sQ0FBd0M7Y0FFOUJ4RSxtQkFBYTBFLElBQUkvSixPQUFKK0osQ0FBWSxLQUFaQSxFQUFtQixFQUFuQkEsQ0FBYjFFLEM7Y0FDQUksUUFBUXRMLFNBQVNrUCxTQUFUbFAsQ0FBbUI0UCxHQUFuQjVQLEM7QUFFZDBTLG9CQUFVRSxLQUFWRixDQUFnQkcsV0FBaEJILENBQTRCeEgsSUFBNUJ3SCxFQUFrQ3BILEtBQWxDb0g7U0FMSmhEOztXQVVILElBQUk4QyxnQkFBZ0JaLGdCQUFwQixFQUFzQztBQUV2QzdOLGlCQUFXO0FBQ1BJLHFCQUFhMkYsU0FBUzNGLFdBRGY7QUFFUEMsaUJBQVMwRixTQUFTMUYsT0FGWDtBQUdQQyxpQkFBU3JFLFNBQVNxRSxPQUhYO0FBSVBoRSxzQ0FBVVcsT0FBVlgsRUFBbUJxRSxJQUFuQnJFLEVBQXlCdUIsR0FBekJ2QixFQUF5QnVCO2NBQ2ZrUixnQkFBZ0I5UixRQUFROEUsS0FBUjlFLENBQWNnRCxNQUFNd04sWUFBcEJ4USxLQUFxQyxFQUFyRDhSLEVBQXlEL04sSUFBekQrTixDQUE4RCxFQUE5REEsQztpQkFHQ0EsZ0JBQWdCLEs7U0FScEI7QUFVUHZTLHdDQUFXUyxPQUFYVCxFQUFvQnFFLFFBQXBCckUsRUFBOEJ3UyxTQUE5QnhTLEVBQThCd1M7QUFLMUJDLHdCQUFhaFMsT0FBYmdTLEVBQXNCO0FBQ2xCaEUscUJBQVM7QUFEUyxXQUF0QmdFO0FBSUFwQiw2QkFBbUIsSUFBbkJBO0FBS0F0UyxrQkFBUVUsUUFBUlY7O0FBeEJHLE9BQVh5RTtLQUZDLE1BK0JBO0FBQ0RBLGlCQUFXO0FBQ1BJLHFCQUFhbkUsU0FBU21FLFdBRGY7QUFFUEMsaUJBQVNwRSxTQUFTb0UsT0FGWDtBQUdQQyxpQkFBU3JFLFNBQVNxRSxPQUhYO0FBT1BDLGdCQUFRdEUsU0FBUytKLFFBQVQvSixHQUFvQmdFLE1BQU0xRSxPQUExQlUsR0FBb0MsSUFQckM7QUFRUEUsc0JBQWNGLFNBQVNFLFlBUmhCO0FBU1BHLHNDQUFVVyxPQUFWWCxFQUFtQnFFLElBQW5CckUsRUFBeUJ1QixHQUF6QnZCLEVBQXlCdUI7Y0FDZkwsWUFBWXZCLFNBQVNLLFNBQVRMLENBQW1CZ0IsT0FBbkJoQixFQUE0QjBFLElBQTVCMUUsRUFBa0M0QixHQUFsQzVCLEM7QUFFbEJnQixvQkFBVU8sY0FBY3hCLFNBQWR3QixJQUEyQlcsUUFBUVgsU0FBUlcsTUFBdUIsS0FBbERYLEdBQTBELEVBQTFEQSxHQUErREEsYUFBYVAsT0FBdEZBO0FBR0EwRCxlQUFLNUMsWUFBTDRDLENBQWtCLGNBQWxCQSxFQUFrQyxFQUFsQ0E7O2NBR0kxRSxTQUFTcVIsVSxFQUFZO2dCQUNmSSxVQUFVelEsUUFFWDZFLE9BRlc3RSxDQUVIZ0QsTUFBTUMsV0FGSGpELEVBRWdCLEVBRmhCQSxFQUlYOEUsS0FKVzlFLENBSUxnRCxNQUFNeU4sT0FKRHpRLEtBSWEsRTtBQUU3QnlRLG9CQUFROVAsT0FBUjhQLENBQWdCO2tCQUNOdEwsU0FBUzhNLE9BQU9wTixPQUFQb04sQ0FBZWpQLE1BQU15TixPQUFyQndCLEVBQThCLElBQTlCQSxDO2tCQUNUN00sU0FBU0gsYUFBV0UsTUFBWEYsRUFBbUJyRSxHQUFuQnFFLEM7QUFFZmpGLHdCQUFVQSxRQUFRNkUsT0FBUjdFLENBQWdCaVMsTUFBaEJqUyxFQUF3QmlTLE9BQU9wTixPQUFQb04sQ0FBZTlNLE1BQWY4TSxFQUF1QjdNLE1BQXZCNk0sQ0FBeEJqUyxDQUFWQTthQUpKeVE7OztpQkFRR3pRLE87U0FqQ0o7QUFtQ1BWLGtDQUFRYyxHQUFSZCxFQUFhb0UsSUFBYnBFLEVBQW1Cc0IsR0FBbkJ0QixFQUFtQnNCO2NBQ1RzUixjQUFjOVIsSUFBSStSLFdBQUovUixJQUFtQjZFLGFBQVdyRSxHQUFYcUUsRUFBZ0J4RCxTQUFTVixJQUF6QmtFLEM7Y0FDakNtTixhQUFjaFMsSUFBSWdTLFVBQUpoUyxHQUFJZ1MsV0FBaUJoUyxJQUFJZ1MsVUFBckJBLEVBQXFCQSxHQUFyQkEsQ0FBSmhTLEdBQXlDLHVCQUF1QkEsSUFBSTBDLE1BQUoxQyxLQUFlLENBQWZBLEdBQW1CLDBCQUFuQkEsR0FBZ0QsRUFBdkUsQztjQUN2RGlTLG9DQUFnQ0gsV0FBaENHLEVBQWdDSCxHQUFoQ0csRUFBZ0NILE1BQWhDRyxDQUErQ2pTLElBQUkwQyxNQUFuRHVQLEVBQW1EdlAsR0FBbkR1UCxFQUFtRHZQLE1BQW5EdVAsQ0FBNkRELFVBQTdEQyxDO0FBRU5wQixzQkFBWW9CLFFBQVpwQixFQUFzQnZOLElBQXRCdU4sRUFBNEI3USxHQUE1QjZRLEVBQWlDaUIsV0FBakNqQjtTQXhDRztBQTBDUDFSLHdDQUFXUyxPQUFYVCxFQUFvQnFFLFFBQXBCckUsRUFBOEJ3UyxTQUE5QnhTLEVBQThCd1M7Y0FDcEJPLFlBQWMsb0M7Y0FDZEMsY0FBY25FLEtBQUtFLFNBQUxGLENBQWU7QUFFL0JoTCxxQkFBZXBFLFNBQVNvRSxPQUZPO0FBRy9CQyxxQkFBZXJFLFNBQVNxRSxPQUhPO0FBSS9CNkssdUJBQWVsUCxTQUFTa1AsU0FKTztBQU0vQkgsMkJBQWUvTyxTQUFTK08sYUFOTztBQU8vQmhGLHNCQUFlL0osU0FBUytKLFFBUE87QUFRL0JrRixzQkFBZWpQLFNBQVNpUCxRQVJPO0FBUy9Ca0Msb0JBQWVuUixTQUFTbVIsTUFUTztBQVUvQkUsd0JBQWVyUixTQUFTcVI7QUFWTyxXQUFmakMsQztjQVlkb0UsWUFBYXhULFNBQVNtRSxXQUFUbkUsQ0FBcUJ5VCxhQUFyQnpULENBQXFCeVQsV0FBa0I1QixXQUFsQjRCLENBQXJCelQsS0FBeURaLFNBQVNzQyxhQUFUdEMsQ0FBdUIsT0FBdkJBLEM7Y0FDdEVzVSxXQUFhRixVQUFVRyxTQUFWSCxJQUF1QixFO2NBQ3BDSSxhQUFhRixTQUFTMVMsT0FBVDBTLEtBQXFCMVMsT0FBckIwUyxJQUFnQ0EsU0FBUzFULFFBQVQwVCxLQUFzQkgsVztjQUVyRU0sb0I7O2NBRUFELFUsRUFBWTtBQUVaNVMsc0JBQVV3UyxVQUFVck0sV0FBcEJuRzs7aUJBR0toQixTQUFTbVIsTSxFQUFRO0FBRWxCNU4sc0JBQVF1USxJQUFSdlEsQ0FBUXVRLFVBQVE5QyxnQkFBUjhDLEVBQVE5QyxZQUFSOEMsQ0FBUnZRLEVBQThDaVEsU0FBOUNqUTs7aUJBR0g7QUFFRGlRLHNCQUFVRyxTQUFWSCxHQUFzQjtBQUNsQnhTLDhCQURrQjtBQUVsQmhCLHdCQUFVdVQ7QUFGUSxhQUF0QkM7QUFZQXhTLHNCQUFVNEQsU0FBUy9ELEdBQVQrRCxDQUFhLFVBQUNpRixHQUFELEVBQU1oSSxDQUFOLEVBQU1BO3FCQUFNbUMsTUFBTTFFLE9BQU4wRSxDQUFjdUIsSUFBZHZCLENBQW1CNkYsR0FBbkI3RixJQUEwQjZGLEdBQTFCN0YsR0FBMEI2Riw4QkFBNkJoSSxDQUE3QmdJLEVBQTZCaEksTUFBN0JnSSxDO2FBQW5EakYsRUFBeUZHLElBQXpGSCxDQUE4RixFQUE5RkEsQ0FBVjVEOzs7QUFHSUEsd0JBQVVnUyxjQUFhaFMsT0FBYmdTLEVBQXNCO0FBQzVCakUsK0JBQWUvTyxTQUFTK08sYUFESTtBQUU1QmhGLDBCQUFlL0osU0FBUytKLFFBRkk7QUFHNUJpRix5QkFBZWhQLFNBQVNvUixTQUhJO0FBSTVCbkMsMEJBQWVqUCxTQUFTaVAsUUFKSTtBQUs1QkMsMkJBQWVsUCxTQUFTa1AsU0FMSTtBQU01QkMsMkJBQWVpRDtBQU5hLGVBQXRCWSxDQUFWaFM7QUFTQTZTLHFDQUF1QjdQLE1BQU11TixZQUFOdk4sQ0FBbUJ1QixJQUFuQnZCLENBQXdCaEQsT0FBeEJnRCxDQUF2QjZQO0FBR0E3Uyx3QkFBVUEsUUFBUTZFLE9BQVI3RSxDQUFnQnNTLFNBQWhCdFMsRUFBMkIsVUFBQzhFLEtBQUQsRUFBUWlPLE1BQVIsRUFBUUE7dUJBQVduUCxTQUFTbVAsTUFBVG5QLEM7ZUFBOUM1RCxDQUFWQTtjQUVKLE9BQU1vQyxHQUFOLEVBQU1BO2tCQUNFNFEsY0FBYyxLO0FBSWxCcFAsdUJBQVNqRCxPQUFUaUQsQ0FBaUIsVUFBQzVELE9BQUQsRUFBVWEsQ0FBVixFQUFVQTs7QUFFbkJiLDRCQUFVZ1MsY0FBYWhTLE9BQWJnUyxFQUFzQmhULFFBQXRCZ1QsQ0FBVmhTO2tCQUVKLE9BQU1vQyxHQUFOLEVBQU1BO3NCQUNJNlEsWUFBWWxCLFVBQVVsUixJQUFJLENBQWRrUixDO0FBRWxCaUIsZ0NBQWMsSUFBZEE7QUFDQS9CLDhCQUFZN08sSUFBSThPLE9BQWhCRCxFQUF5QmdDLFNBQXpCaEM7O2VBUlJyTjs7bUJBZUtvUCxXLEVBQWE7QUFDZC9CLDRCQUFZN08sSUFBSThPLE9BQUo5TyxJQUFlQSxHQUEzQjZPOzs7OztjQU1SalMsU0FBU2lSLFMsRUFBVztnQkFDZGlELFFBQ0ZsVSxTQUFTbUUsV0FEUCtQLEVBQ08vUCxNQURQK1AsQ0FDTy9QLG1CQUNObkUsU0FBU21FLFdBQVRuRSxDQUFxQnlFLGdCQUFyQnpFLENBQXNDLEdBQXRDQSxDQURNbUUsQ0FEUCtQLEM7O2lCQVFELElBQUlyUyxJQUFJLENBQVIsRUFBV2tHLEcsRUFBTUEsTUFBTW1NLEtBQUtyUyxDQUFMcVMsQyxFQUFLclMsRUFBT0EsQyxFQUFHO2tCQUNuQ2tHLElBQUkwSyxVQUFKMUssSUFBa0JBLElBQUkwSyxVQUFKMUssQ0FBZTBMLGFBQWYxTCxDQUE2QixPQUE3QkEsQyxFQUF1QztvQkFDbkRvTSxpQkFBaUJsSyxTQUFjLEVBQWRBLEVBQWtCakssUUFBbEJpSyxFQUE0QjtBQUMvQzlGLCtCQUFhNEQsSUFBSTBLLFVBRDhCO0FBRS9DdkQsNkJBQWFSLGNBQWNDO0FBRm9CLGlCQUE1QjFFLEM7O0FBS3ZCM0ssd0JBQVE2VSxjQUFSN1U7Ozs7O2VBS1BzVSxVLElBQWNiLFMsSUFBYUEsVUFBVWpULE0sRUFBUTtnQkFDeENzVSxXQUFXcFUsU0FBU21FLFdBQVRuRSxDQUFxQnlFLGdCQUFyQnpFLENBQXNDLHdDQUF0Q0EsS0FBbUZBLFNBQVNtRSxXQUFUbkUsQ0FBcUJ5RSxnQkFBckJ6RSxDQUFzQywrQkFBdENBLEM7Z0JBQzlGcVUsV0FBV0QsV0FBV0EsU0FBU0EsU0FBU3RVLE1BQVRzVSxHQUFrQixDQUEzQkEsQ0FBWEEsR0FBMkMsSTs7Z0JBR3hEQyxRLEVBQVU7QUFDVkEsdUJBQVNDLFVBQVRELENBQW9CRSxZQUFwQkYsQ0FBaUNiLFNBQWpDYSxFQUE0Q0EsU0FBU0csV0FBckRIO21CQUdDO2tCQUNLSSxhQUFhelUsU0FBU21FLFdBQVRuRSxDQUFxQjRILElBQXJCNUgsSUFBNkJBLFNBQVNtRSxXQUFUbkUsQ0FBcUI4SCxJQUFsRDlILElBQTBEQSxTQUFTbUUsVztBQUV0RnNRLHlCQUFXNU0sV0FBWDRNLENBQXVCakIsU0FBdkJpQjs7O2dCQUdBelUsU0FBU29SLFMsRUFBVztBQUNwQm9DLHdCQUFVMVIsWUFBVjBSLENBQXVCLElBQXZCQSxFQUE2QjNCLFdBQTdCMkI7QUFDQUEsd0JBQVVyTSxXQUFWcU0sR0FBd0J4UyxPQUF4QndTOztrQkFFSUssb0IsRUFBc0I7QUFDdEJhLDZCQUFhMVUsU0FBU21FLFdBQXRCdVE7Ozs7QUFJUjFVLHFCQUFTTyxVQUFUUCxDQUNJZ0IsT0FESmhCLEVBRUl3VCxTQUZKeFQsRUFHSW9QLEtBQUtDLEtBQUxELENBQVdBLEtBQUtFLFNBQUxGLENBQWVwUCxTQUFTb1IsU0FBVHBSLEdBQXFCME8sY0FBY0MsR0FBbkMzTyxHQUF5QzBPLGNBQWNFLElBQXRFUSxDQUFYQSxDQUhKcFAsRUFJSWdTLGlCQUFpQmhTLFNBQVMrUixVQUo5Qi9SOzs7QUEvS0QsT0FBWCtEOztHQXBESCxNQWdQQTtBQUNEM0UsYUFBU0MsZ0JBQVRELENBQTBCLGtCQUExQkEsRUFBOEMsU0FBU3VWLElBQVQsQ0FBY0MsR0FBZCxFQUFjQTtBQUN4RHRWLGNBQVFNLE9BQVJOO0FBRUFGLGVBQVN5VixtQkFBVHpWLENBQTZCLGtCQUE3QkEsRUFBaUR1VixJQUFqRHZWO0tBSEpBOzs7O0FBYVIsU0FBU21ULGdCQUFULENBQTBCdlMsUUFBMUIsRUFBMEJBO0FBQ3RCOFUsZUFBYW5ELGFBQWJtRDtBQUNBbkQsa0JBQWdCdE8sV0FBVztBQUN2QnJELGFBQVMrUixVQUFUL1IsR0FBc0IsSUFBdEJBO0FBQ0FWLFlBQVFVLFFBQVJWO0dBRlkrRCxFQUdiLEdBSGFBLENBQWhCc087OztBQWdCSixTQUFTVyxtQkFBVCxDQUE2QnRTLFFBQTdCLEVBQXVDK1UsUUFBdkMsRUFBdUNBO09BQzlCM1MsT0FBTzRTLGdCLEVBQWtCOzs7O01BSXhCak8sU0FBVSxTQUFWQSxNQUFVO1dBQVFyQyxLQUFLdVEsT0FBTHZRLEtBQWlCLE1BQWpCQSxJQUFpQixDQUFXQSxLQUFLbUMsWUFBTG5DLENBQWtCLEtBQWxCQSxLQUE0QixFQUF2QyxFQUEyQ2xELE9BQTNDLENBQW1ELFlBQW5ELE1BQW1ELENBQW1CLEM7OztNQUN6RzBGLFVBQVUsU0FBVkEsT0FBVTtXQUFReEMsS0FBS3VRLE9BQUx2USxLQUFpQixPQUFqQkEsS0FBNkJxUSxXQUFXclEsS0FBS3dRLEVBQUx4USxLQUFZcVEsUUFBdkJBLEdBQWtDLElBQS9EclEsQzs7O01BRXBCZ04sZSxFQUFpQjtBQUNqQkEsb0JBQWdCVyxVQUFoQlg7OztBQUdKMVIsV0FBU3NSLEtBQVR0UixHQUFpQjhKLFNBQVN3SCxLQUExQnRSO0FBRUEwUixvQkFBa0IsSUFBSXNELGdCQUFKLENBQXFCLFVBQVNHLFNBQVQsRUFBU0E7UUFDdENDLGlCQUFpQkQsVUFBVW5JLElBQVZtSSxDQUFlLFVBQUNFLFFBQUQsRUFBQ0E7VUFDL0JDLGdCQUFnQixLOztVQUVoQkQsU0FBUzFLLElBQVQwSyxLQUFrQixZLEVBQWM7QUFDaENDLHdCQUFnQnZPLE9BQU9zTyxTQUFTRSxNQUFoQnhPLEtBQTJCRyxRQUFRbU8sU0FBU0UsTUFBakJyTyxDQUEzQ29PO2FBRUMsSUFBSUQsU0FBUzFLLElBQVQwSyxLQUFrQixXQUF0QixFQUFtQztZQUM5QkcsYUFBZS9VLE1BQU1HLEtBQU5ILENBQVksSUFBWkEsRUFBa0I0VSxTQUFTRyxVQUEzQi9VLEM7WUFDZmdWLGVBQWVoVixNQUFNRyxLQUFOSCxDQUFZLElBQVpBLEVBQWtCNFUsU0FBU0ksWUFBM0JoVixDO0FBRXJCNlUsd0JBQWdCLEdBQUc3UixNQUFILENBQVUrUixVQUFWLEVBQXNCQyxZQUF0QixFQUFvQ3pJLElBQXBDLENBQXlDO2NBQy9DMEksY0FBZTNPLE9BQU9yQyxJQUFQcUMsS0FBT3JDLENBQVVBLEtBQUtpUixRO2NBQ3JDQyxlQUFlMU8sUUFBUXhDLElBQVJ3QyxLQUFpQmxELE1BQU0xRSxPQUFOMEUsQ0FBY3VCLElBQWR2QixDQUFtQlUsS0FBS3lDLFdBQXhCbkQsQztpQkFFOUIwUixlQUFlRSxZO1NBSlgsQ0FBaEJOOzs7YUFRR0EsYTtLQWxCWUgsQzs7UUFxQm5CQyxjLEVBQWdCO0FBQ2hCN0MsdUJBQWlCdlMsUUFBakJ1Uzs7R0F2QlUsQ0FBbEJiO0FBMkJBQSxrQkFBZ0JtRSxPQUFoQm5FLENBQXdCdFMsU0FBU3VULGVBQWpDakIsRUFBa0Q7QUFDOUNvRSxnQkFBaUIsSUFENkI7QUFFOUNDLHFCQUFpQixDQUFDLFVBQUQsRUFBYSxNQUFiLENBRjZCO0FBRzlDQyxlQUFpQixJQUg2QjtBQUk5Q0MsYUFBaUI7QUFKNkIsR0FBbER2RTs7O0FBY0osU0FBU2dELFlBQVQsQ0FBc0J2USxXQUF0QixFQUFzQkE7TUFDWitSLG9CQUFvQixDQUN0QixnQkFEc0IsRUFFdEIscUJBRnNCLEVBR3RCLHdCQUhzQixFQUl4QjVSLE1BSndCLENBSWpCO1dBQVE2UixpQkFBaUIvVyxTQUFTMEksSUFBMUJxTyxFQUFnQ2pMLElBQWhDaUwsQztHQUpTLEVBSThCLENBSjlCLEM7O01BTXRCRCxpQixFQUFtQjtRQUNiRSxXQUFnQmpTLFlBQVlrUyxvQkFBWmxTLENBQWlDLEdBQWpDQSxDO1FBQ2hCbVMsZ0JBQWdCLEU7UUFDaEJDLGFBQWdCLCtCOztTQUdqQixJQUFJMVUsSUFBSSxDQUFSLEVBQVcyVSxNQUFNSixTQUFTdFcsTSxFQUFRK0IsSUFBSTJVLEcsRUFBSzNVLEcsRUFBSztVQUMzQzZDLE9BQWdCMFIsU0FBU3ZVLENBQVR1VSxDO1VBQ2hCSyxnQkFBZ0JOLGlCQUFpQnpSLElBQWpCeVIsRUFBdUJELGlCQUF2QkMsQzs7VUFFbEJNLGtCQUFrQixNLEVBQVE7QUFDMUIvUixhQUFLa08sS0FBTGxPLENBQVd3UixpQkFBWHhSLEtBQWlDNlIsVUFBakM3UjtBQUNBNFIsc0JBQWM3UCxJQUFkNlAsQ0FBbUI1UixJQUFuQjRSOzs7O1NBS0hsWCxTQUFTMEksSUFBVDFJLENBQWNzWCxZOztTQUdkLElBQUk3VSxLQUFJLENBQVIsRUFBVzJVLE9BQU1GLGNBQWN4VyxNLEVBQVErQixLQUFJMlUsSSxFQUFLM1UsSSxFQUFLO1VBQ2hEOFUsWUFBWUwsY0FBY3pVLEVBQWR5VSxFQUFpQjFELEs7QUFFbkMrRCxnQkFBVVQsaUJBQVZTLElBQStCQSxVQUFVVCxpQkFBVlMsRUFBNkI5USxPQUE3QjhRLENBQXFDSixVQUFyQ0ksRUFBaUQsRUFBakRBLENBQS9CQTs7Ozs7QUFZWixTQUFTMVEsWUFBVCxDQUFvQnJFLEdBQXBCLEVBQW9CQTtNQUFLMEYsMkVBQU83RSxTQUFTVixJO01BQy9Cd0YsSUFBSW5JLFNBQVNvSSxjQUFUcEksQ0FBd0JxSSxrQkFBeEJySSxDQUEyQyxFQUEzQ0EsQztNQUNKc0ksSUFBSUgsRUFBRTdGLGFBQUY2RixDQUFnQixNQUFoQkEsQztNQUNKSSxJQUFJSixFQUFFN0YsYUFBRjZGLENBQWdCLEdBQWhCQSxDO0FBRVZBLElBQUVLLElBQUZMLENBQU9NLFdBQVBOLENBQW1CRyxDQUFuQkg7QUFDQUEsSUFBRU8sSUFBRlAsQ0FBT00sV0FBUE4sQ0FBbUJJLENBQW5CSjtBQUNBRyxJQUFFM0YsSUFBRjJGLEdBQVNKLElBQVRJO0FBQ0FDLElBQUU1RixJQUFGNEYsR0FBUy9GLEdBQVQrRjtTQUVPQSxFQUFFNUYsSTs7O0FBUWIsU0FBU2lRLFlBQVQsR0FBU0E7U0FDRW5CLGNBQWN6TyxPQUFPd1UsV0FBUHhVLElBQXNCLEVBQXBDeU8sRUFBd0NnRyxHQUF4Q2hHLEdBQThDek8sT0FBT3dVLFdBQVB4VSxDQUFtQnlVLEdBQW5CelUsRUFBOUN5TyxHQUF5RSxJQUFJaUcsSUFBSixHQUFXQyxPQUFYLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVrQnBGO0FBQ2E7O0FBRWIsSUFBSUMsR0FBRyxHQUFHLDRCQUFWO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLGtEQUFoQjtBQUNBLElBQUlDLE9BQU8sR0FBRyxPQUFPQyxLQUFQLEtBQWlCLFdBQWpCLEdBQStCO0FBQUN2RSxPQUFLLEVBQUU7QUFBQyx1QkFBbUI7QUFBcEI7QUFBUixDQUEvQixHQUFpRSxJQUFJdUUsS0FBSixFQUEvRTtBQUNBLElBQUlDLGlCQUFpQixJQUFHLGdCQUFnQkYsT0FBTyxDQUFDdEUsS0FBM0IsQ0FBckI7QUFDQSxJQUFJeUUsc0JBQXNCLElBQUcscUJBQXFCSCxPQUFPLENBQUN0RSxLQUFoQyxDQUExQjtBQUNBLElBQUkwRSxXQUFXLElBQUcscUJBQXFCSixPQUFPLENBQUN0RSxLQUFoQyxDQUFmO0FBQ0EsSUFBSTJFLGtCQUFrQixHQUFHLE9BQU9MLE9BQU8sQ0FBQ00sVUFBZixLQUE4QixRQUF2RDtBQUNBLElBQUlDLGtCQUFrQixHQUFHUCxPQUFPLENBQUNyUSxZQUFqQztBQUNBLElBQUk2USxrQkFBa0IsR0FBR1IsT0FBTyxDQUFDcFYsWUFBakM7QUFDQSxJQUFJNlYsZUFBZSxHQUFHLEtBQXRCOztBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFBaUM7QUFDaEMsU0FBUSx5RUFBeUVELENBQXpFLEdBQTZFLFlBQTdFLEdBQTRGQyxDQUE1RixHQUFnRyxnQkFBeEc7QUFDQTs7QUFFRCxTQUFTQyxrQkFBVCxDQUE0QkMsRUFBNUIsRUFBZ0M7QUFDL0IsTUFBSUEsRUFBRSxDQUFDQyxNQUFILElBQWEsQ0FBQ1Ysa0JBQWQsSUFBb0NuVixNQUFNLENBQUM4VixXQUEvQyxFQUE0RDtBQUMzRCxRQUFJQyxFQUFFLEdBQUcvVixNQUFNLENBQUM4VixXQUFQLENBQW1CRSxDQUE1QixDQUQyRCxDQUUzRDs7QUFDQSxRQUFJLENBQUNKLEVBQUUsQ0FBQ0csRUFBRSxDQUFDRSxFQUFKLENBQUgsSUFBYyxDQUFDTCxFQUFFLENBQUNHLEVBQUUsQ0FBQ0UsRUFBSixDQUFGLENBQVVDLE1BQTdCLEVBQXFDO0FBQ3BDO0FBQ0FILFFBQUUsQ0FBQ0ksT0FBSCxDQUFXUCxFQUFYLEVBQWU7QUFBQ1EsZ0JBQVEsRUFBRTtBQUFYLE9BQWY7QUFDQTs7QUFFRCxRQUFJLENBQUNSLEVBQUUsQ0FBQ0csRUFBRSxDQUFDRSxFQUFKLENBQUYsQ0FBVUksTUFBZixFQUF1QjtBQUN0QjtBQUNBVCxRQUFFLENBQUNHLEVBQUUsQ0FBQ0UsRUFBSixDQUFGLENBQVVLLFNBQVYsR0FBc0IsS0FBdEI7QUFDQVAsUUFBRSxDQUFDSSxPQUFILENBQVdQLEVBQVgsRUFBZTtBQUFDUSxnQkFBUSxFQUFFO0FBQVgsT0FBZjtBQUNBLEtBWjBELENBYzNEOzs7QUFDQVIsTUFBRSxDQUFDUixVQUFILEdBQWdCUSxFQUFFLENBQUNHLEVBQUUsQ0FBQ0UsRUFBSixDQUFGLENBQVVJLE1BQVYsSUFBb0JULEVBQUUsQ0FBQ1csR0FBdkM7QUFDQTtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JaLEVBQWxCLEVBQXNCO0FBQ3JCLE1BQUlwRixLQUFLLEdBQUd1RCxnQkFBZ0IsQ0FBQzZCLEVBQUQsQ0FBaEIsQ0FBcUJhLFVBQWpDO0FBQ0EsTUFBSUMsTUFBSjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQU8sQ0FBQ0QsTUFBTSxHQUFHN0IsU0FBUyxDQUFDMU0sSUFBVixDQUFlcUksS0FBZixDQUFWLE1BQXFDLElBQTVDLEVBQWtEO0FBQ2pEbUcsU0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQUwsR0FBbUJBLE1BQU0sQ0FBQyxDQUFELENBQXpCO0FBQ0E7O0FBQ0QsU0FBT0MsS0FBUDtBQUNBOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCQyxLQUE3QixFQUFvQ0MsTUFBcEMsRUFBNEM7QUFDM0M7QUFDQSxNQUFJQyxXQUFXLEdBQUd4QixpQkFBaUIsQ0FBQ3NCLEtBQUssSUFBSSxDQUFWLEVBQWFDLE1BQU0sSUFBSSxDQUF2QixDQUFuQyxDQUYyQyxDQUkzQzs7QUFDQSxNQUFJMUIsa0JBQWtCLENBQUNuUCxJQUFuQixDQUF3QjJRLEdBQXhCLEVBQTZCLEtBQTdCLE1BQXdDRyxXQUE1QyxFQUF5RDtBQUN4RDFCLHNCQUFrQixDQUFDcFAsSUFBbkIsQ0FBd0IyUSxHQUF4QixFQUE2QixLQUE3QixFQUFvQ0csV0FBcEM7QUFDQTtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JKLEdBQXRCLEVBQTJCSyxRQUEzQixFQUFxQztBQUNwQztBQUNBO0FBQ0EsTUFBSUwsR0FBRyxDQUFDTSxZQUFSLEVBQXNCO0FBQ3JCRCxZQUFRLENBQUNMLEdBQUQsQ0FBUjtBQUNBLEdBRkQsTUFFTztBQUNONVYsY0FBVSxDQUFDZ1csWUFBRCxFQUFlLEdBQWYsRUFBb0JKLEdBQXBCLEVBQXlCSyxRQUF6QixDQUFWO0FBQ0E7QUFDRDs7QUFFRCxTQUFTRSxNQUFULENBQWdCeEIsRUFBaEIsRUFBb0I7QUFDbkIsTUFBSXBGLEtBQUssR0FBR2dHLFFBQVEsQ0FBQ1osRUFBRCxDQUFwQjtBQUNBLE1BQUl5QixHQUFHLEdBQUd6QixFQUFFLENBQUNoQixHQUFELENBQVo7QUFDQXBFLE9BQUssQ0FBQyxZQUFELENBQUwsR0FBc0JBLEtBQUssQ0FBQyxZQUFELENBQUwsSUFBdUIsTUFBN0MsQ0FIbUIsQ0FHa0M7QUFFckQ7O0FBQ0EsTUFBSSxDQUFDNkcsR0FBRyxDQUFDUixHQUFULEVBQWM7QUFDYjtBQUNBLFFBQUlyRyxLQUFLLENBQUMsWUFBRCxDQUFMLEtBQXdCLE1BQTVCLEVBQW9DO0FBQ25DO0FBQ0EsS0FKWSxDQU1iOzs7QUFDQSxRQUNDLENBQUM2RyxHQUFHLENBQUNDLFFBQUwsSUFBaUI7QUFDakJ0QyxxQkFEQSxJQUNxQjtBQUNyQixLQUFDeEUsS0FBSyxDQUFDLGlCQUFELENBSFAsQ0FHMkI7QUFIM0IsTUFJRTtBQUNEO0FBQ0E7QUFDRCxHQXBCa0IsQ0FzQm5COzs7QUFDQSxNQUFJLENBQUM2RyxHQUFHLENBQUNSLEdBQVQsRUFBYztBQUNiUSxPQUFHLENBQUNSLEdBQUosR0FBVSxJQUFJOUIsS0FBSixDQUFVYSxFQUFFLENBQUNrQixLQUFiLEVBQW9CbEIsRUFBRSxDQUFDbUIsTUFBdkIsQ0FBVjtBQUNBTSxPQUFHLENBQUNSLEdBQUosQ0FBUWhCLE1BQVIsR0FBaUJSLGtCQUFrQixDQUFDblAsSUFBbkIsQ0FBd0IwUCxFQUF4QixFQUE0QixpQkFBNUIsS0FBa0RBLEVBQUUsQ0FBQ0MsTUFBdEU7QUFDQXdCLE9BQUcsQ0FBQ1IsR0FBSixDQUFRTixHQUFSLEdBQWNsQixrQkFBa0IsQ0FBQ25QLElBQW5CLENBQXdCMFAsRUFBeEIsRUFBNEIsY0FBNUIsS0FBK0NBLEVBQUUsQ0FBQ1csR0FBaEUsQ0FIYSxDQUtiO0FBQ0E7O0FBQ0FqQixzQkFBa0IsQ0FBQ3BQLElBQW5CLENBQXdCMFAsRUFBeEIsRUFBNEIsY0FBNUIsRUFBNENBLEVBQUUsQ0FBQ1csR0FBL0M7O0FBQ0EsUUFBSVgsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDZFAsd0JBQWtCLENBQUNwUCxJQUFuQixDQUF3QjBQLEVBQXhCLEVBQTRCLGlCQUE1QixFQUErQ0EsRUFBRSxDQUFDQyxNQUFsRDtBQUNBOztBQUVEZSxrQkFBYyxDQUFDaEIsRUFBRCxFQUFLQSxFQUFFLENBQUN1QixZQUFILElBQW1CdkIsRUFBRSxDQUFDa0IsS0FBM0IsRUFBa0NsQixFQUFFLENBQUMyQixhQUFILElBQW9CM0IsRUFBRSxDQUFDbUIsTUFBekQsQ0FBZCxDQVphLENBY2I7O0FBQ0EsUUFBSW5CLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ2RELFFBQUUsQ0FBQ0MsTUFBSCxHQUFZLEVBQVo7QUFDQTs7QUFDRCxRQUFJO0FBQ0gyQixtQkFBYSxDQUFDNUIsRUFBRCxDQUFiO0FBQ0EsS0FGRCxDQUVFLE9BQU81VSxHQUFQLEVBQVk7QUFDYixVQUFJaEIsTUFBTSxDQUFDbUIsT0FBWCxFQUFvQjtBQUNuQkEsZUFBTyxDQUFDQyxJQUFSLENBQWEsZ0NBQWI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUR1VSxvQkFBa0IsQ0FBQzBCLEdBQUcsQ0FBQ1IsR0FBTCxDQUFsQjtBQUVBakIsSUFBRSxDQUFDcEYsS0FBSCxDQUFTaUgsZUFBVCxHQUEyQixXQUFZLENBQUNKLEdBQUcsQ0FBQ1IsR0FBSixDQUFRekIsVUFBUixJQUFzQmlDLEdBQUcsQ0FBQ1IsR0FBSixDQUFRTixHQUEvQixFQUFvQzlTLE9BQXBDLENBQTRDLElBQTVDLEVBQWtELEtBQWxELENBQVosR0FBd0UsS0FBbkc7QUFDQW1TLElBQUUsQ0FBQ3BGLEtBQUgsQ0FBU2tILGtCQUFULEdBQThCbEgsS0FBSyxDQUFDLGlCQUFELENBQUwsSUFBNEIsUUFBMUQ7QUFDQW9GLElBQUUsQ0FBQ3BGLEtBQUgsQ0FBU21ILGdCQUFULEdBQTRCLFdBQTVCO0FBQ0EvQixJQUFFLENBQUNwRixLQUFILENBQVNvSCxnQkFBVCxHQUE0QixhQUE1Qjs7QUFFQSxNQUFJLGFBQWF6VSxJQUFiLENBQWtCcU4sS0FBSyxDQUFDLFlBQUQsQ0FBdkIsQ0FBSixFQUE0QztBQUMzQ3lHLGdCQUFZLENBQUNJLEdBQUcsQ0FBQ1IsR0FBTCxFQUFVLFlBQVk7QUFDakMsVUFBSVEsR0FBRyxDQUFDUixHQUFKLENBQVFNLFlBQVIsR0FBdUJ2QixFQUFFLENBQUNrQixLQUExQixJQUFtQ08sR0FBRyxDQUFDUixHQUFKLENBQVFVLGFBQVIsR0FBd0IzQixFQUFFLENBQUNtQixNQUFsRSxFQUEwRTtBQUN6RW5CLFVBQUUsQ0FBQ3BGLEtBQUgsQ0FBU3FILGNBQVQsR0FBMEIsU0FBMUI7QUFDQSxPQUZELE1BRU87QUFDTmpDLFVBQUUsQ0FBQ3BGLEtBQUgsQ0FBU3FILGNBQVQsR0FBMEIsTUFBMUI7QUFDQTtBQUNELEtBTlcsQ0FBWjtBQU9BLEdBUkQsTUFRTztBQUNOakMsTUFBRSxDQUFDcEYsS0FBSCxDQUFTcUgsY0FBVCxHQUEwQnJILEtBQUssQ0FBQyxZQUFELENBQUwsQ0FBb0IvTSxPQUFwQixDQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0Q0EsT0FBNUMsQ0FBb0QsTUFBcEQsRUFBNEQsV0FBNUQsQ0FBMUI7QUFDQTs7QUFFRHdULGNBQVksQ0FBQ0ksR0FBRyxDQUFDUixHQUFMLEVBQVUsVUFBVUEsR0FBVixFQUFlO0FBQ3BDRCxrQkFBYyxDQUFDaEIsRUFBRCxFQUFLaUIsR0FBRyxDQUFDTSxZQUFULEVBQXVCTixHQUFHLENBQUNVLGFBQTNCLENBQWQ7QUFDQSxHQUZXLENBQVo7QUFHQTs7QUFFRCxTQUFTQyxhQUFULENBQXVCNUIsRUFBdkIsRUFBMkI7QUFDMUIsTUFBSWtDLFdBQVcsR0FBRztBQUNqQkMsT0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYWpQLElBQWIsRUFBbUI7QUFDdkIsYUFBTzhNLEVBQUUsQ0FBQ2hCLEdBQUQsQ0FBRixDQUFRaUMsR0FBUixDQUFZL04sSUFBSSxHQUFHQSxJQUFILEdBQVUsS0FBMUIsQ0FBUDtBQUNBLEtBSGdCO0FBSWpCa1AsT0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYTlPLEtBQWIsRUFBb0JKLElBQXBCLEVBQTBCO0FBQzlCOE0sUUFBRSxDQUFDaEIsR0FBRCxDQUFGLENBQVFpQyxHQUFSLENBQVkvTixJQUFJLEdBQUdBLElBQUgsR0FBVSxLQUExQixJQUFtQ0ksS0FBbkM7QUFDQW9NLHdCQUFrQixDQUFDcFAsSUFBbkIsQ0FBd0IwUCxFQUF4QixFQUE2QixjQUFjOU0sSUFBM0MsRUFBa0RJLEtBQWxELEVBRjhCLENBRTRCOztBQUMxRGtPLFlBQU0sQ0FBQ3hCLEVBQUQsQ0FBTjtBQUNBLGFBQU8xTSxLQUFQO0FBQ0E7QUFUZ0IsR0FBbEI7QUFXQW9FLFFBQU0sQ0FBQzJLLGNBQVAsQ0FBc0JyQyxFQUF0QixFQUEwQixLQUExQixFQUFpQ2tDLFdBQWpDO0FBQ0F4SyxRQUFNLENBQUMySyxjQUFQLENBQXNCckMsRUFBdEIsRUFBMEIsWUFBMUIsRUFBd0M7QUFDdkNtQyxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU9ELFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixZQUFoQixDQUFQO0FBQXVDO0FBRG5CLEdBQXhDO0FBR0F6SyxRQUFNLENBQUMySyxjQUFQLENBQXNCckMsRUFBdEIsRUFBMEIsUUFBMUIsRUFBb0M7QUFDbkNtQyxPQUFHLEVBQUUsWUFBWTtBQUFFLGFBQU9ELFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixRQUFoQixDQUFQO0FBQW1DLEtBRG5CO0FBRW5DQyxPQUFHLEVBQUUsVUFBVUUsRUFBVixFQUFjO0FBQUUsYUFBT0osV0FBVyxDQUFDRSxHQUFaLENBQWdCRSxFQUFoQixFQUFvQixRQUFwQixDQUFQO0FBQXVDO0FBRnpCLEdBQXBDO0FBSUE7O0FBRUQsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDM0IsV0FBU0MsZ0JBQVQsQ0FBMEJ4QyxFQUExQixFQUE4QmxNLElBQTlCLEVBQW9DO0FBQ25DLFdBQU9rTSxFQUFFLENBQUNoQixHQUFELENBQUYsSUFBV2dCLEVBQUUsQ0FBQ2hCLEdBQUQsQ0FBRixDQUFRaUMsR0FBbkIsS0FBMkJuTixJQUFJLEtBQUssS0FBVCxJQUFrQkEsSUFBSSxLQUFLLFFBQXRELElBQWtFa00sRUFBRSxDQUFDaEIsR0FBRCxDQUFGLENBQVFpQyxHQUExRSxHQUFnRmpCLEVBQXZGO0FBQ0E7O0FBQ0QsTUFBSSxDQUFDWCxzQkFBTCxFQUE2QjtBQUM1Qm9ELG9CQUFnQixDQUFDcmEsU0FBakIsQ0FBMkJ5RyxZQUEzQixHQUEwQyxVQUFVaUYsSUFBVixFQUFnQjtBQUN6RCxhQUFPMkwsa0JBQWtCLENBQUNuUCxJQUFuQixDQUF3QmtTLGdCQUFnQixDQUFDLElBQUQsRUFBTzFPLElBQVAsQ0FBeEMsRUFBc0RBLElBQXRELENBQVA7QUFDQSxLQUZEOztBQUlBMk8sb0JBQWdCLENBQUNyYSxTQUFqQixDQUEyQjBCLFlBQTNCLEdBQTBDLFVBQVVnSyxJQUFWLEVBQWdCUixLQUFoQixFQUF1QjtBQUNoRSxhQUFPb00sa0JBQWtCLENBQUNwUCxJQUFuQixDQUF3QmtTLGdCQUFnQixDQUFDLElBQUQsRUFBTzFPLElBQVAsQ0FBeEMsRUFBc0RBLElBQXRELEVBQTREOUosTUFBTSxDQUFDc0osS0FBRCxDQUFsRSxDQUFQO0FBQ0EsS0FGRDtBQUdBO0FBQ0Q7O0FBRUQsU0FBU29QLEdBQVQsQ0FBYUMsSUFBYixFQUFtQkMsSUFBbkIsRUFBeUI7QUFDeEIsTUFBSUMsYUFBYSxHQUFHLENBQUNsRCxlQUFELElBQW9CLENBQUNnRCxJQUF6QztBQUNBQyxNQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmO0FBQ0FELE1BQUksR0FBR0EsSUFBSSxJQUFJLEtBQWY7O0FBRUEsTUFBS3RELHNCQUFzQixJQUFJLENBQUN1RCxJQUFJLENBQUNsQixRQUFqQyxJQUE4QyxDQUFDcEMsV0FBbkQsRUFBZ0U7QUFDL0QsV0FBTyxLQUFQO0FBQ0EsR0FQdUIsQ0FTeEI7OztBQUNBLE1BQUlxRCxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNuQkEsUUFBSSxHQUFHdmIsUUFBUSxDQUFDaVgsb0JBQVQsQ0FBOEIsS0FBOUIsQ0FBUDtBQUNBLEdBRkQsTUFFTyxJQUFJLE9BQU9zRSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQ3BDQSxRQUFJLEdBQUd2YixRQUFRLENBQUNxRixnQkFBVCxDQUEwQmtXLElBQTFCLENBQVA7QUFDQSxHQUZNLE1BRUEsSUFBSSxFQUFFLFlBQVlBLElBQWQsQ0FBSixFQUF5QjtBQUMvQkEsUUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUNBLEdBaEJ1QixDQWtCeEI7OztBQUNBLE9BQUssSUFBSTlZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4WSxJQUFJLENBQUM3YSxNQUF6QixFQUFpQytCLENBQUMsRUFBbEMsRUFBc0M7QUFDckM4WSxRQUFJLENBQUM5WSxDQUFELENBQUosQ0FBUW1WLEdBQVIsSUFBZTJELElBQUksQ0FBQzlZLENBQUQsQ0FBSixDQUFRbVYsR0FBUixLQUFnQjtBQUM5QjBDLGNBQVEsRUFBRWtCLElBQUksQ0FBQ2xCO0FBRGUsS0FBL0I7QUFHQUYsVUFBTSxDQUFDbUIsSUFBSSxDQUFDOVksQ0FBRCxDQUFMLENBQU47QUFDQTs7QUFFRCxNQUFJZ1osYUFBSixFQUFtQjtBQUNsQnpiLFlBQVEsQ0FBQzBJLElBQVQsQ0FBY3pJLGdCQUFkLENBQStCLE1BQS9CLEVBQXVDLFVBQVV5YixDQUFWLEVBQWE7QUFDbkQsVUFBSUEsQ0FBQyxDQUFDdkYsTUFBRixDQUFTTixPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQy9CeUYsV0FBRyxDQUFDSSxDQUFDLENBQUN2RixNQUFILEVBQVc7QUFDYm1FLGtCQUFRLEVBQUVrQixJQUFJLENBQUNsQjtBQURGLFNBQVgsQ0FBSDtBQUdBO0FBQ0QsS0FORCxFQU1HLElBTkg7QUFPQS9CLG1CQUFlLEdBQUcsSUFBbEI7QUFDQWdELFFBQUksR0FBRyxLQUFQLENBVGtCLENBU0o7QUFDZCxHQXBDdUIsQ0FzQ3hCOzs7QUFDQSxNQUFJQyxJQUFJLENBQUNHLE9BQVQsRUFBa0I7QUFDakIzWSxVQUFNLENBQUMvQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3FiLEdBQUcsQ0FBQ00sSUFBSixDQUFTLElBQVQsRUFBZUwsSUFBZixFQUFxQjtBQUN0RGpCLGNBQVEsRUFBRWtCLElBQUksQ0FBQ2xCO0FBRHVDLEtBQXJCLENBQWxDO0FBR0E7QUFDRDs7QUFFRGdCLEdBQUcsQ0FBQ3RELGlCQUFKLEdBQXdCQSxpQkFBeEI7QUFDQXNELEdBQUcsQ0FBQ3JELHNCQUFKLEdBQTZCQSxzQkFBN0I7QUFFQWtELGdCQUFnQjtBQUVoQlUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixHQUFqQixDOzs7Ozs7Ozs7OztBQ3RPQTtBQUNDLGFBQVk7QUFDWCxlQURXLENBR1g7O0FBQ0EsV0FBU2piLFFBQVQsR0FBb0I7QUFDbEI7QUFDQSxRQUFJb1ksQ0FBQyxHQUFHelYsTUFBUjtBQUNBLFFBQUltRixDQUFDLEdBQUduSSxRQUFSLENBSGtCLENBS2xCOztBQUNBLFFBQ0Usb0JBQW9CbUksQ0FBQyxDQUFDb0wsZUFBRixDQUFrQkMsS0FBdEMsSUFDQWlGLENBQUMsQ0FBQ3NELDZCQUFGLEtBQW9DLElBRnRDLEVBR0U7QUFDQTtBQUNELEtBWGlCLENBYWxCOzs7QUFDQSxRQUFJQyxPQUFPLEdBQUd2RCxDQUFDLENBQUN3RCxXQUFGLElBQWlCeEQsQ0FBQyxDQUFDdUQsT0FBakM7QUFDQSxRQUFJRSxXQUFXLEdBQUcsR0FBbEIsQ0Fma0IsQ0FpQmxCOztBQUNBLFFBQUlDLFFBQVEsR0FBRztBQUNiQyxZQUFNLEVBQUUzRCxDQUFDLENBQUMyRCxNQUFGLElBQVkzRCxDQUFDLENBQUM0RCxRQURUO0FBRWJDLGNBQVEsRUFBRTdELENBQUMsQ0FBQzZELFFBRkM7QUFHYkMsbUJBQWEsRUFBRVAsT0FBTyxDQUFDaGIsU0FBUixDQUFrQm9iLE1BQWxCLElBQTRCSSxhQUg5QjtBQUliQyxvQkFBYyxFQUFFVCxPQUFPLENBQUNoYixTQUFSLENBQWtCeWI7QUFKckIsS0FBZixDQWxCa0IsQ0F5QmxCOztBQUNBLFFBQUloRixHQUFHLEdBQ0xnQixDQUFDLENBQUNqQixXQUFGLElBQWlCaUIsQ0FBQyxDQUFDakIsV0FBRixDQUFjQyxHQUEvQixHQUNJZ0IsQ0FBQyxDQUFDakIsV0FBRixDQUFjQyxHQUFkLENBQWtCbUUsSUFBbEIsQ0FBdUJuRCxDQUFDLENBQUNqQixXQUF6QixDQURKLEdBRUlFLElBQUksQ0FBQ0QsR0FIWDtBQUtBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSSxhQUFTaUYsa0JBQVQsQ0FBNEJDLFNBQTVCLEVBQXVDO0FBQ3JDLFVBQUlDLGlCQUFpQixHQUFHLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBeEI7QUFFQSxhQUFPLElBQUl2VCxNQUFKLENBQVd1VCxpQkFBaUIsQ0FBQ2pYLElBQWxCLENBQXVCLEdBQXZCLENBQVgsRUFBd0NRLElBQXhDLENBQTZDd1csU0FBN0MsQ0FBUDtBQUNEO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksUUFBSUUsa0JBQWtCLEdBQUdILGtCQUFrQixDQUFDakUsQ0FBQyxDQUFDcUUsU0FBRixDQUFZSCxTQUFiLENBQWxCLEdBQTRDLENBQTVDLEdBQWdELENBQXpFO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksYUFBU0gsYUFBVCxDQUF1QjlhLENBQXZCLEVBQTBCcWIsQ0FBMUIsRUFBNkI7QUFDM0IsV0FBS0MsVUFBTCxHQUFrQnRiLENBQWxCO0FBQ0EsV0FBS3ViLFNBQUwsR0FBaUJGLENBQWpCO0FBQ0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLGFBQVNHLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQjtBQUNmLGFBQU8sT0FBTyxJQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxFQUFMLEdBQVVILENBQW5CLENBQVgsQ0FBUDtBQUNEO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxhQUFTSSxhQUFULENBQXVCQyxRQUF2QixFQUFpQztBQUMvQixVQUNFQSxRQUFRLEtBQUssSUFBYixJQUNBLE9BQU9BLFFBQVAsS0FBb0IsUUFEcEIsSUFFQUEsUUFBUSxDQUFDQyxRQUFULEtBQXNCOWMsU0FGdEIsSUFHQTZjLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQixNQUh0QixJQUlBRCxRQUFRLENBQUNDLFFBQVQsS0FBc0IsU0FMeEIsRUFNRTtBQUNBO0FBQ0E7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLE9BQU9ELFFBQVAsS0FBb0IsUUFBcEIsSUFBZ0NBLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQixRQUExRCxFQUFvRTtBQUNsRTtBQUNBLGVBQU8sS0FBUDtBQUNELE9BaEI4QixDQWtCL0I7OztBQUNBLFlBQU0sSUFBSUMsU0FBSixDQUNKLHNDQUNFRixRQUFRLENBQUNDLFFBRFgsR0FFRSx1REFIRSxDQUFOO0FBS0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksYUFBU0Usa0JBQVQsQ0FBNEIvRSxFQUE1QixFQUFnQ2dGLElBQWhDLEVBQXNDO0FBQ3BDLFVBQUlBLElBQUksS0FBSyxHQUFiLEVBQWtCO0FBQ2hCLGVBQU9oRixFQUFFLENBQUNpRixZQUFILEdBQWtCaEIsa0JBQWxCLEdBQXVDakUsRUFBRSxDQUFDa0YsWUFBakQ7QUFDRDs7QUFFRCxVQUFJRixJQUFJLEtBQUssR0FBYixFQUFrQjtBQUNoQixlQUFPaEYsRUFBRSxDQUFDbUYsV0FBSCxHQUFpQmxCLGtCQUFqQixHQUFzQ2pFLEVBQUUsQ0FBQ29GLFdBQWhEO0FBQ0Q7QUFDRjtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxhQUFTQyxXQUFULENBQXFCckYsRUFBckIsRUFBeUJnRixJQUF6QixFQUErQjtBQUM3QixVQUFJTSxhQUFhLEdBQUd6RixDQUFDLENBQUMxQixnQkFBRixDQUFtQjZCLEVBQW5CLEVBQXVCLElBQXZCLEVBQTZCLGFBQWFnRixJQUExQyxDQUFwQjtBQUVBLGFBQU9NLGFBQWEsS0FBSyxNQUFsQixJQUE0QkEsYUFBYSxLQUFLLFFBQXJEO0FBQ0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksYUFBU0MsWUFBVCxDQUFzQnZGLEVBQXRCLEVBQTBCO0FBQ3hCLFVBQUl3RixhQUFhLEdBQUdULGtCQUFrQixDQUFDL0UsRUFBRCxFQUFLLEdBQUwsQ0FBbEIsSUFBK0JxRixXQUFXLENBQUNyRixFQUFELEVBQUssR0FBTCxDQUE5RDtBQUNBLFVBQUl5RixhQUFhLEdBQUdWLGtCQUFrQixDQUFDL0UsRUFBRCxFQUFLLEdBQUwsQ0FBbEIsSUFBK0JxRixXQUFXLENBQUNyRixFQUFELEVBQUssR0FBTCxDQUE5RDtBQUVBLGFBQU93RixhQUFhLElBQUlDLGFBQXhCO0FBQ0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLGFBQVNDLG9CQUFULENBQThCMUYsRUFBOUIsRUFBa0M7QUFDaEMsYUFBT0EsRUFBRSxLQUFLelEsQ0FBQyxDQUFDTyxJQUFULElBQWlCeVYsWUFBWSxDQUFDdkYsRUFBRCxDQUFaLEtBQXFCLEtBQTdDLEVBQW9EO0FBQ2xEQSxVQUFFLEdBQUdBLEVBQUUsQ0FBQzFELFVBQUgsSUFBaUIwRCxFQUFFLENBQUN6VixJQUF6QjtBQUNEOztBQUVELGFBQU95VixFQUFQO0FBQ0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLGFBQVMyRixJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckIsVUFBSUMsSUFBSSxHQUFHaEgsR0FBRyxFQUFkO0FBQ0EsVUFBSXZMLEtBQUo7QUFDQSxVQUFJd1MsUUFBSjtBQUNBLFVBQUlDLFFBQUo7QUFDQSxVQUFJQyxPQUFPLEdBQUcsQ0FBQ0gsSUFBSSxHQUFHRCxPQUFPLENBQUNLLFNBQWhCLElBQTZCM0MsV0FBM0MsQ0FMcUIsQ0FPckI7O0FBQ0EwQyxhQUFPLEdBQUdBLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsT0FBNUIsQ0FScUIsQ0FVckI7O0FBQ0ExUyxXQUFLLEdBQUdnUixJQUFJLENBQUMwQixPQUFELENBQVo7QUFFQUYsY0FBUSxHQUFHRixPQUFPLENBQUNNLE1BQVIsR0FBaUIsQ0FBQ04sT0FBTyxDQUFDOWMsQ0FBUixHQUFZOGMsT0FBTyxDQUFDTSxNQUFyQixJQUErQjVTLEtBQTNEO0FBQ0F5UyxjQUFRLEdBQUdILE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFDUCxPQUFPLENBQUN6QixDQUFSLEdBQVl5QixPQUFPLENBQUNPLE1BQXJCLElBQStCN1MsS0FBM0Q7QUFFQXNTLGFBQU8sQ0FBQ1EsTUFBUixDQUFlOVYsSUFBZixDQUFvQnNWLE9BQU8sQ0FBQ1MsVUFBNUIsRUFBd0NQLFFBQXhDLEVBQWtEQyxRQUFsRCxFQWhCcUIsQ0FrQnJCOztBQUNBLFVBQUlELFFBQVEsS0FBS0YsT0FBTyxDQUFDOWMsQ0FBckIsSUFBMEJpZCxRQUFRLEtBQUtILE9BQU8sQ0FBQ3pCLENBQW5ELEVBQXNEO0FBQ3BEdEUsU0FBQyxDQUFDeUcscUJBQUYsQ0FBd0JYLElBQUksQ0FBQzNDLElBQUwsQ0FBVW5ELENBQVYsRUFBYStGLE9BQWIsQ0FBeEI7QUFDRDtBQUNGO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0ksYUFBU1csWUFBVCxDQUFzQnZHLEVBQXRCLEVBQTBCbFgsQ0FBMUIsRUFBNkJxYixDQUE3QixFQUFnQztBQUM5QixVQUFJa0MsVUFBSjtBQUNBLFVBQUlILE1BQUo7QUFDQSxVQUFJQyxNQUFKO0FBQ0EsVUFBSUMsTUFBSjtBQUNBLFVBQUlILFNBQVMsR0FBR3BILEdBQUcsRUFBbkIsQ0FMOEIsQ0FPOUI7O0FBQ0EsVUFBSW1CLEVBQUUsS0FBS3pRLENBQUMsQ0FBQ08sSUFBYixFQUFtQjtBQUNqQnVXLGtCQUFVLEdBQUd4RyxDQUFiO0FBQ0FxRyxjQUFNLEdBQUdyRyxDQUFDLENBQUMyRyxPQUFGLElBQWEzRyxDQUFDLENBQUM0RyxXQUF4QjtBQUNBTixjQUFNLEdBQUd0RyxDQUFDLENBQUM2RyxPQUFGLElBQWE3RyxDQUFDLENBQUM4RyxXQUF4QjtBQUNBUCxjQUFNLEdBQUc3QyxRQUFRLENBQUNDLE1BQWxCO0FBQ0QsT0FMRCxNQUtPO0FBQ0w2QyxrQkFBVSxHQUFHckcsRUFBYjtBQUNBa0csY0FBTSxHQUFHbEcsRUFBRSxDQUFDb0UsVUFBWjtBQUNBK0IsY0FBTSxHQUFHbkcsRUFBRSxDQUFDcUUsU0FBWjtBQUNBK0IsY0FBTSxHQUFHeEMsYUFBVDtBQUNELE9BbEI2QixDQW9COUI7OztBQUNBK0IsVUFBSSxDQUFDO0FBQ0hVLGtCQUFVLEVBQUVBLFVBRFQ7QUFFSEQsY0FBTSxFQUFFQSxNQUZMO0FBR0hILGlCQUFTLEVBQUVBLFNBSFI7QUFJSEMsY0FBTSxFQUFFQSxNQUpMO0FBS0hDLGNBQU0sRUFBRUEsTUFMTDtBQU1IcmQsU0FBQyxFQUFFQSxDQU5BO0FBT0hxYixTQUFDLEVBQUVBO0FBUEEsT0FBRCxDQUFKO0FBU0QsS0F0T2lCLENBd09sQjtBQUNBOzs7QUFDQXRFLEtBQUMsQ0FBQzJELE1BQUYsR0FBVzNELENBQUMsQ0FBQzRELFFBQUYsR0FBYSxZQUFXO0FBQ2pDO0FBQ0EsVUFBSTViLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJFLFNBQXJCLEVBQWdDO0FBQzlCO0FBQ0QsT0FKZ0MsQ0FNakM7OztBQUNBLFVBQUk0YyxhQUFhLENBQUM5YyxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQWIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMwYixnQkFBUSxDQUFDQyxNQUFULENBQWdCbFQsSUFBaEIsQ0FDRXVQLENBREYsRUFFRWhZLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQWIsS0FBc0J2SixTQUF0QixHQUNJRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF5SixJQURqQixHQUVJLE9BQU96SixTQUFTLENBQUMsQ0FBRCxDQUFoQixLQUF3QixRQUF4QixHQUNFQSxTQUFTLENBQUMsQ0FBRCxDQURYLEdBRUVnWSxDQUFDLENBQUMyRyxPQUFGLElBQWEzRyxDQUFDLENBQUM0RyxXQU52QixFQU9FO0FBQ0E1ZSxpQkFBUyxDQUFDLENBQUQsQ0FBVCxDQUFhK2UsR0FBYixLQUFxQjdlLFNBQXJCLEdBQ0lGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBRGpCLEdBRUkvZSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUFqQixHQUNFRixTQUFTLENBQUMsQ0FBRCxDQURYLEdBRUVnWSxDQUFDLENBQUM2RyxPQUFGLElBQWE3RyxDQUFDLENBQUM4RyxXQVp2QjtBQWVBO0FBQ0QsT0F4QmdDLENBMEJqQzs7O0FBQ0FKLGtCQUFZLENBQUNqVyxJQUFiLENBQ0V1UCxDQURGLEVBRUV0USxDQUFDLENBQUNPLElBRkosRUFHRWpJLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQWIsS0FBc0J2SixTQUF0QixHQUNJLENBQUMsQ0FBQ0YsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFheUosSUFEbkIsR0FFSXVPLENBQUMsQ0FBQzJHLE9BQUYsSUFBYTNHLENBQUMsQ0FBQzRHLFdBTHJCLEVBTUU1ZSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWErZSxHQUFiLEtBQXFCN2UsU0FBckIsR0FDSSxDQUFDLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBRG5CLEdBRUkvRyxDQUFDLENBQUM2RyxPQUFGLElBQWE3RyxDQUFDLENBQUM4RyxXQVJyQjtBQVVELEtBckNELENBMU9rQixDQWlSbEI7OztBQUNBOUcsS0FBQyxDQUFDNkQsUUFBRixHQUFhLFlBQVc7QUFDdEI7QUFDQSxVQUFJN2IsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkUsU0FBckIsRUFBZ0M7QUFDOUI7QUFDRCxPQUpxQixDQU10Qjs7O0FBQ0EsVUFBSTRjLGFBQWEsQ0FBQzljLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBakIsRUFBaUM7QUFDL0IwYixnQkFBUSxDQUFDRyxRQUFULENBQWtCcFQsSUFBbEIsQ0FDRXVQLENBREYsRUFFRWhZLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQWIsS0FBc0J2SixTQUF0QixHQUNJRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF5SixJQURqQixHQUVJLE9BQU96SixTQUFTLENBQUMsQ0FBRCxDQUFoQixLQUF3QixRQUF4QixHQUFtQ0EsU0FBUyxDQUFDLENBQUQsQ0FBNUMsR0FBa0QsQ0FKeEQsRUFLRUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhK2UsR0FBYixLQUFxQjdlLFNBQXJCLEdBQ0lGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBRGpCLEdBRUkvZSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUFqQixHQUE2QkYsU0FBUyxDQUFDLENBQUQsQ0FBdEMsR0FBNEMsQ0FQbEQ7QUFVQTtBQUNELE9BbkJxQixDQXFCdEI7OztBQUNBMGUsa0JBQVksQ0FBQ2pXLElBQWIsQ0FDRXVQLENBREYsRUFFRXRRLENBQUMsQ0FBQ08sSUFGSixFQUdFLENBQUMsQ0FBQ2pJLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQWYsSUFBdUJ1TyxDQUFDLENBQUMyRyxPQUFGLElBQWEzRyxDQUFDLENBQUM0RyxXQUF0QyxDQUhGLEVBSUUsQ0FBQyxDQUFDNWUsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhK2UsR0FBZixJQUFzQi9HLENBQUMsQ0FBQzZHLE9BQUYsSUFBYTdHLENBQUMsQ0FBQzhHLFdBQXJDLENBSkY7QUFNRCxLQTVCRCxDQWxSa0IsQ0FnVGxCOzs7QUFDQXZELFdBQU8sQ0FBQ2hiLFNBQVIsQ0FBa0JvYixNQUFsQixHQUEyQkosT0FBTyxDQUFDaGIsU0FBUixDQUFrQnFiLFFBQWxCLEdBQTZCLFlBQVc7QUFDakU7QUFDQSxVQUFJNWIsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkUsU0FBckIsRUFBZ0M7QUFDOUI7QUFDRCxPQUpnRSxDQU1qRTs7O0FBQ0EsVUFBSTRjLGFBQWEsQ0FBQzljLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBYixLQUFnQyxJQUFwQyxFQUEwQztBQUN4QztBQUNBLFlBQUksT0FBT0EsU0FBUyxDQUFDLENBQUQsQ0FBaEIsS0FBd0IsUUFBeEIsSUFBb0NBLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJFLFNBQXpELEVBQW9FO0FBQ2xFLGdCQUFNLElBQUk4ZSxXQUFKLENBQWdCLDhCQUFoQixDQUFOO0FBQ0Q7O0FBRUR0RCxnQkFBUSxDQUFDSSxhQUFULENBQXVCclQsSUFBdkIsQ0FDRSxJQURGLEVBRUU7QUFDQXpJLGlCQUFTLENBQUMsQ0FBRCxDQUFULENBQWF5SixJQUFiLEtBQXNCdkosU0FBdEIsR0FDSSxDQUFDLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBRG5CLEdBRUksT0FBT3pKLFNBQVMsQ0FBQyxDQUFELENBQWhCLEtBQXdCLFFBQXhCLEdBQW1DLENBQUMsQ0FBQ0EsU0FBUyxDQUFDLENBQUQsQ0FBOUMsR0FBb0QsS0FBS3VjLFVBTC9ELEVBTUU7QUFDQXZjLGlCQUFTLENBQUMsQ0FBRCxDQUFULENBQWErZSxHQUFiLEtBQXFCN2UsU0FBckIsR0FDSSxDQUFDLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBRG5CLEdBRUkvZSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUFqQixHQUE2QixDQUFDLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQXhDLEdBQThDLEtBQUt3YyxTQVR6RDtBQVlBO0FBQ0Q7O0FBRUQsVUFBSS9TLElBQUksR0FBR3pKLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQXhCO0FBQ0EsVUFBSXNWLEdBQUcsR0FBRy9lLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBQXZCLENBN0JpRSxDQStCakU7O0FBQ0FMLGtCQUFZLENBQUNqVyxJQUFiLENBQ0UsSUFERixFQUVFLElBRkYsRUFHRSxPQUFPZ0IsSUFBUCxLQUFnQixXQUFoQixHQUE4QixLQUFLOFMsVUFBbkMsR0FBZ0QsQ0FBQyxDQUFDOVMsSUFIcEQsRUFJRSxPQUFPc1YsR0FBUCxLQUFlLFdBQWYsR0FBNkIsS0FBS3ZDLFNBQWxDLEdBQThDLENBQUMsQ0FBQ3VDLEdBSmxEO0FBTUQsS0F0Q0QsQ0FqVGtCLENBeVZsQjs7O0FBQ0F4RCxXQUFPLENBQUNoYixTQUFSLENBQWtCc2IsUUFBbEIsR0FBNkIsWUFBVztBQUN0QztBQUNBLFVBQUk3YixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUFyQixFQUFnQztBQUM5QjtBQUNELE9BSnFDLENBTXRDOzs7QUFDQSxVQUFJNGMsYUFBYSxDQUFDOWMsU0FBUyxDQUFDLENBQUQsQ0FBVixDQUFiLEtBQWdDLElBQXBDLEVBQTBDO0FBQ3hDMGIsZ0JBQVEsQ0FBQ0ksYUFBVCxDQUF1QnJULElBQXZCLENBQ0UsSUFERixFQUVFekksU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFheUosSUFBYixLQUFzQnZKLFNBQXRCLEdBQ0ksQ0FBQyxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF5SixJQUFmLEdBQXNCLEtBQUs4UyxVQUQvQixHQUVJLENBQUMsQ0FBQ3ZjLFNBQVMsQ0FBQyxDQUFELENBQVgsR0FBaUIsS0FBS3VjLFVBSjVCLEVBS0V2YyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWErZSxHQUFiLEtBQXFCN2UsU0FBckIsR0FDSSxDQUFDLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYStlLEdBQWYsR0FBcUIsS0FBS3ZDLFNBRDlCLEdBRUksQ0FBQyxDQUFDeGMsU0FBUyxDQUFDLENBQUQsQ0FBWCxHQUFpQixLQUFLd2MsU0FQNUI7QUFVQTtBQUNEOztBQUVELFdBQUtiLE1BQUwsQ0FBWTtBQUNWbFMsWUFBSSxFQUFFLENBQUMsQ0FBQ3pKLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlKLElBQWYsR0FBc0IsS0FBSzhTLFVBRHZCO0FBRVZ3QyxXQUFHLEVBQUUsQ0FBQyxDQUFDL2UsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhK2UsR0FBZixHQUFxQixLQUFLdkMsU0FGckI7QUFHVlEsZ0JBQVEsRUFBRWhkLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYWdkO0FBSGIsT0FBWjtBQUtELEtBMUJELENBMVZrQixDQXNYbEI7OztBQUNBekIsV0FBTyxDQUFDaGIsU0FBUixDQUFrQnliLGNBQWxCLEdBQW1DLFlBQVc7QUFDNUM7QUFDQSxVQUFJYyxhQUFhLENBQUM5YyxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQWIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMwYixnQkFBUSxDQUFDTSxjQUFULENBQXdCdlQsSUFBeEIsQ0FDRSxJQURGLEVBRUV6SSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUFqQixHQUE2QixJQUE3QixHQUFvQ0YsU0FBUyxDQUFDLENBQUQsQ0FGL0M7QUFLQTtBQUNELE9BVDJDLENBVzVDOzs7QUFDQSxVQUFJaWYsZ0JBQWdCLEdBQUdwQixvQkFBb0IsQ0FBQyxJQUFELENBQTNDO0FBQ0EsVUFBSXFCLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLHFCQUFqQixFQUFsQjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxLQUFLRCxxQkFBTCxFQUFsQjs7QUFFQSxVQUFJRixnQkFBZ0IsS0FBS3ZYLENBQUMsQ0FBQ08sSUFBM0IsRUFBaUM7QUFDL0I7QUFDQXlXLG9CQUFZLENBQUNqVyxJQUFiLENBQ0UsSUFERixFQUVFd1csZ0JBRkYsRUFHRUEsZ0JBQWdCLENBQUMxQyxVQUFqQixHQUE4QjZDLFdBQVcsQ0FBQzNWLElBQTFDLEdBQWlEeVYsV0FBVyxDQUFDelYsSUFIL0QsRUFJRXdWLGdCQUFnQixDQUFDekMsU0FBakIsR0FBNkI0QyxXQUFXLENBQUNMLEdBQXpDLEdBQStDRyxXQUFXLENBQUNILEdBSjdELEVBRitCLENBUy9COztBQUNBLFlBQUkvRyxDQUFDLENBQUMxQixnQkFBRixDQUFtQjJJLGdCQUFuQixFQUFxQ0ksUUFBckMsS0FBa0QsT0FBdEQsRUFBK0Q7QUFDN0RySCxXQUFDLENBQUM2RCxRQUFGLENBQVc7QUFDVHBTLGdCQUFJLEVBQUV5VixXQUFXLENBQUN6VixJQURUO0FBRVRzVixlQUFHLEVBQUVHLFdBQVcsQ0FBQ0gsR0FGUjtBQUdUL0Isb0JBQVEsRUFBRTtBQUhELFdBQVg7QUFLRDtBQUNGLE9BakJELE1BaUJPO0FBQ0w7QUFDQWhGLFNBQUMsQ0FBQzZELFFBQUYsQ0FBVztBQUNUcFMsY0FBSSxFQUFFMlYsV0FBVyxDQUFDM1YsSUFEVDtBQUVUc1YsYUFBRyxFQUFFSyxXQUFXLENBQUNMLEdBRlI7QUFHVC9CLGtCQUFRLEVBQUU7QUFIRCxTQUFYO0FBS0Q7QUFDRixLQXpDRDtBQTBDRDs7QUFFRCxNQUFJLElBQUosRUFBa0U7QUFDaEU7QUFDQTVCLFVBQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFemIsY0FBUSxFQUFFQTtBQUFaLEtBQWpCO0FBQ0QsR0FIRCxNQUdPLEVBR047QUFFRixDQS9hQSxHQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcbmltcG9ydCBjc3NWYXJzIGZyb20gJ2Nzcy12YXJzLXBvbnlmaWxsJztcbmltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAnc21vb3Roc2Nyb2xsLXBvbHlmaWxsJztcblxuaW1wb3J0ICcuL3V0aWxzL3NsaWRlcic7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAvLyBmYWxsYmFjayBmb3IgaWUgYW5kIGVkZ2U6XG4gIGNzc1ZhcnMoKTtcbiAgb2JqZWN0Rml0SW1hZ2VzKCk7XG5cbiAgLy9mYWxsYmFjayBzYWZhcmlcbiAgc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG5cblxuXG59LCBmYWxzZSk7XG4iLCIvLyBjb25zb2xlLmxvZygnaGVsbG9ndWd1ZycpO1xuIiwiLyohXG4gKiBnZXQtY3NzLWRhdGFcbiAqIHYxLjYuM1xuICogaHR0cHM6Ly9naXRodWIuY29tL2poaWxkZW5iaWRkbGUvZ2V0LWNzcy1kYXRhXG4gKiAoYykgMjAxOC0yMDE5IEpvaG4gSGlsZGVuYmlkZGxlIDxodHRwOi8vaGlsZGVuYmlkZGxlLmNvbT5cbiAqIE1JVCBsaWNlbnNlXG4gKi9cbmZ1bmN0aW9uIGdldFVybHModXJscykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIG1pbWVUeXBlOiBvcHRpb25zLm1pbWVUeXBlIHx8IG51bGwsXG4gICAgICAgIG9uQmVmb3JlU2VuZDogb3B0aW9ucy5vbkJlZm9yZVNlbmQgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvblN1Y2Nlc3M6IG9wdGlvbnMub25TdWNjZXNzIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25FcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25Db21wbGV0ZTogb3B0aW9ucy5vbkNvbXBsZXRlIHx8IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIH07XG4gICAgdmFyIHVybEFycmF5ID0gQXJyYXkuaXNBcnJheSh1cmxzKSA/IHVybHMgOiBbIHVybHMgXTtcbiAgICB2YXIgdXJsUXVldWUgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh1cmxBcnJheS5sZW5ndGgpKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQ3NzKCkge1xuICAgICAgICB2YXIgY3NzVGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCJcIjtcbiAgICAgICAgdmFyIGlzSFRNTCA9IGNzc1RleHQudHJpbSgpLmNoYXJBdCgwKSA9PT0gXCI8XCI7XG4gICAgICAgIHJldHVybiAhaXNIVE1MO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsSW5kZXgpIHtcbiAgICAgICAgc2V0dGluZ3Mub25FcnJvcih4aHIsIHVybEFycmF5W3VybEluZGV4XSwgdXJsSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2VUZXh0LCB1cmxJbmRleCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKHJlc3BvbnNlVGV4dCwgdXJsQXJyYXlbdXJsSW5kZXhdLCB1cmxJbmRleCk7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHJldHVyblZhbCA9PT0gZmFsc2UgPyBcIlwiIDogcmV0dXJuVmFsIHx8IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgdXJsUXVldWVbdXJsSW5kZXhdID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAodXJsUXVldWUuaW5kZXhPZihudWxsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUodXJsUXVldWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB1cmxBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHVybCwgaSkge1xuICAgICAgICBwYXJzZXIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICAgICAgICBwYXJzZXIuaHJlZiA9IFN0cmluZyhwYXJzZXIuaHJlZik7XG4gICAgICAgIHZhciBpc0lFbHRlOSA9IEJvb2xlYW4oZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIHZhciBpc0lFbHRlOUNPUlMgPSBpc0lFbHRlOSAmJiBwYXJzZXIuaG9zdC5zcGxpdChcIjpcIilbMF0gIT09IGxvY2F0aW9uLmhvc3Quc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICBpZiAoaXNJRWx0ZTlDT1JTKSB7XG4gICAgICAgICAgICB2YXIgaXNTYW1lUHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2wgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICAgICAgaWYgKGlzU2FtZVByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhkci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgeGRyLnRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgICAgIHhkci5vbnByb2dyZXNzID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIHhkci5vbnRpbWVvdXQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZENzcyh4ZHIucmVzcG9uc2VUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKHhkci5yZXNwb25zZVRleHQsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcih4ZHIsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4ZHIub25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKHhkciwgaSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB4ZHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnRlcm5ldCBFeHBsb3JlciA5IENyb3NzLU9yaWdpbiAoQ09SUykgcmVxdWVzdHMgbXVzdCB1c2UgdGhlIHNhbWUgcHJvdG9jb2wgKFwiLmNvbmNhdCh1cmwsIFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgb25FcnJvcihudWxsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShzZXR0aW5ncy5taW1lVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncy5vbkJlZm9yZVNlbmQoeGhyLCB1cmwsIGkpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmIGlzVmFsaWRDc3MoeGhyLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh4aHIucmVzcG9uc2VUZXh0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoeGhyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2V0cyBDU1MgZGF0YSBmcm9tIDxzdHlsZT4gYW5kIDxsaW5rPiBub2RlcyAoaW5jbHVkaW5nIEBpbXBvcnRzKSwgdGhlblxuICogcmV0dXJucyBkYXRhIGluIG9yZGVyIHByb2Nlc3NlZCBieSBET00uIEFsbG93cyBzcGVjaWZ5aW5nIG5vZGVzIHRvXG4gKiBpbmNsdWRlL2V4Y2x1ZGUgYW5kIGZpbHRlcmluZyBDU1MgZGF0YSB1c2luZyBSZWdFeC5cbiAqXG4gKiBAcHJlc2VydmVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnJvb3RFbGVtZW50PWRvY3VtZW50XSBSb290IGVsZW1lbnQgdG8gdHJhdmVyc2UgZm9yXG4gKiAgICAgICAgICAgICAgICAgICA8bGluaz4gYW5kIDxzdHlsZT4gbm9kZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5pbmNsdWRlXSBDU1Mgc2VsZWN0b3IgbWF0Y2hpbmcgPGxpbms+IGFuZCA8c3R5bGU+XG4gKiAgICAgICAgICAgICAgICAgICBub2RlcyB0byBpbmNsdWRlXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5leGNsdWRlXSBDU1Mgc2VsZWN0b3IgbWF0Y2hpbmcgPGxpbms+IGFuZCA8c3R5bGU+XG4gKiAgICAgICAgICAgICAgICAgICBub2RlcyB0byBleGNsdWRlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy5maWx0ZXJdIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIGZpbHRlciBub2RlIENTU1xuICogICAgICAgICAgICAgICAgICAgZGF0YS4gRWFjaCBibG9jayBvZiBDU1MgZGF0YSBpcyB0ZXN0ZWQgYWdhaW5zdCB0aGUgZmlsdGVyLFxuICogICAgICAgICAgICAgICAgICAgYW5kIG9ubHkgbWF0Y2hpbmcgZGF0YSBpcyBpbmNsdWRlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnVzZUNTU09NPWZhbHNlXSBEZXRlcm1pbmVzIGlmIENTUyBkYXRhIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZCBmcm9tIGEgc3R5bGVzaGVldCdzIHJ1bnRpbWUgdmFsdWVzIGluc3RlYWQgb2YgaXRzXG4gKiAgICAgICAgICAgICAgICAgICB0ZXh0IGNvbnRlbnQuIFRoaXMgaXMgcmVxdWlyZWQgdG8gZ2V0IGFjY3VyYXRlIENTUyBkYXRhXG4gKiAgICAgICAgICAgICAgICAgICB3aGVuIGEgc3R5bGVzaGVldCBoYXMgYmVlbiBtb2RpZmllZCB1c2luZyB0aGUgZGVsZXRlUnVsZSgpXG4gKiAgICAgICAgICAgICAgICAgICBvciBpbnNlcnRSdWxlKCkgbWV0aG9kcyBiZWNhdXNlIHRoZXNlIG1vZGlmaWNhdGlvbnMgd2lsbFxuICogICAgICAgICAgICAgICAgICAgbm90IGJlIHJlZmxlY3RlZCBpbiB0aGUgc3R5bGVzaGVldCdzIHRleHQgY29udGVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQmVmb3JlU2VuZF0gQ2FsbGJhY2sgYmVmb3JlIFhIUiBpcyBzZW50LiBQYXNzZXNcbiAqICAgICAgICAgICAgICAgICAgIDEpIHRoZSBYSFIgb2JqZWN0LCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIGFuZCAzKSB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHNvdXJjZSBVUkwgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25TdWNjZXNzXSBDYWxsYmFjayBvbiBlYWNoIENTUyBub2RlIHJlYWQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgQ1NTIHRleHQsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZSBzb3VyY2VcbiAqICAgICAgICAgICAgICAgICAgIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkVycm9yXSBDYWxsYmFjayBvbiBlYWNoIGVycm9yLiBQYXNzZXMgMSkgdGhlIFhIUlxuICogICAgICAgICAgICAgICAgICAgb2JqZWN0IGZvciBpbnNwZWN0aW9uLCAyKSBzb3VyZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCB0aGF0IGZhaWxlZCAoZWl0aGVyIGEgPGxpbms+IGhyZWYgb3IgYW4gQGltcG9ydClcbiAqICAgICAgICAgICAgICAgICAgIGFzIGFyZ3VtZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25Db21wbGV0ZV0gQ2FsbGJhY2sgYWZ0ZXIgYWxsIG5vZGVzIGhhdmUgYmVlblxuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLiBQYXNzZXMgMSkgY29uY2F0ZW5hdGVkIENTUyB0ZXh0LCAyKSBhbiBhcnJheSBvZlxuICogICAgICAgICAgICAgICAgICAgQ1NTIHRleHQgaW4gRE9NIG9yZGVyLCBhbmQgMykgYW4gYXJyYXkgb2Ygbm9kZXMgaW4gRE9NXG4gKiAgICAgICAgICAgICAgICAgICBvcmRlciBhcyBhcmd1bWVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgIGdldENzc0RhdGEoe1xuICogICAgIHJvb3RFbGVtZW50OiBkb2N1bWVudCxcbiAqICAgICBpbmNsdWRlICAgIDogJ3N0eWxlLGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsXG4gKiAgICAgZXhjbHVkZSAgICA6ICdbaHJlZj1cInNraXAuY3NzXCJdJyxcbiAqICAgICBmaWx0ZXIgICAgIDogL3JlZC8sXG4gKiAgICAgdXNlQ1NTT00gICA6IGZhbHNlLFxuICogICAgIG9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH1cbiAqICAgICBvbkVycm9yKHhociwgbm9kZSwgdXJsKSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9LFxuICogICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIG5vZGVBcnJheSkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfVxuICogICB9KTtcbiAqLyBmdW5jdGlvbiBnZXRDc3NEYXRhKG9wdGlvbnMpIHtcbiAgICB2YXIgcmVnZXggPSB7XG4gICAgICAgIGNzc0NvbW1lbnRzOiAvXFwvXFwqW1xcc1xcU10rP1xcKlxcLy9nLFxuICAgICAgICBjc3NJbXBvcnRzOiAvKD86QGltcG9ydFxccyopKD86dXJsXFwoXFxzKik/KD86WydcIl0pKFteJ1wiXSopKD86WydcIl0pKD86XFxzKlxcKSk/KD86W147XSo7KS9nXG4gICAgfTtcbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICAgIHJvb3RFbGVtZW50OiBvcHRpb25zLnJvb3RFbGVtZW50IHx8IGRvY3VtZW50LFxuICAgICAgICBpbmNsdWRlOiBvcHRpb25zLmluY2x1ZGUgfHwgJ3N0eWxlLGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXScsXG4gICAgICAgIGV4Y2x1ZGU6IG9wdGlvbnMuZXhjbHVkZSB8fCBudWxsLFxuICAgICAgICBmaWx0ZXI6IG9wdGlvbnMuZmlsdGVyIHx8IG51bGwsXG4gICAgICAgIHVzZUNTU09NOiBvcHRpb25zLnVzZUNTU09NIHx8IGZhbHNlLFxuICAgICAgICBvbkJlZm9yZVNlbmQ6IG9wdGlvbnMub25CZWZvcmVTZW5kIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25TdWNjZXNzOiBvcHRpb25zLm9uU3VjY2VzcyB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uQ29tcGxldGU6IG9wdGlvbnMub25Db21wbGV0ZSB8fCBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICB9O1xuICAgIHZhciBzb3VyY2VOb2RlcyA9IEFycmF5LmFwcGx5KG51bGwsIHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5jbHVkZSkpLmZpbHRlcihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHJldHVybiAhbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNldHRpbmdzLmV4Y2x1ZGUpO1xuICAgIH0pO1xuICAgIHZhciBjc3NBcnJheSA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHNvdXJjZU5vZGVzLmxlbmd0aCkpLm1hcChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IGNzc0FycmF5LmluZGV4T2YobnVsbCkgPT09IC0xO1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBjc3NBcnJheS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgc291cmNlTm9kZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgY3NzSW5kZXgsIG5vZGUsIHNvdXJjZVVybCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHNvdXJjZVVybCk7XG4gICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHJldHVyblZhbCkgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuICAgICAgICByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBzb3VyY2VVcmwsIGZ1bmN0aW9uKHJlc29sdmVkQ3NzVGV4dCwgZXJyb3JEYXRhKSB7XG4gICAgICAgICAgICBpZiAoY3NzQXJyYXlbY3NzSW5kZXhdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3Mub25FcnJvcihkYXRhLnhociwgbm9kZSwgZGF0YS51cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MuZmlsdGVyIHx8IHNldHRpbmdzLmZpbHRlci50ZXN0KHJlc29sdmVkQ3NzVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXlbY3NzSW5kZXhdID0gcmVzb2x2ZWRDc3NUZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2Nzc0luZGV4XSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUltcG9ydERhdGEoY3NzVGV4dCwgYmFzZVVybCkge1xuICAgICAgICB2YXIgaWdub3JlUnVsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgICB2YXIgaW1wb3J0RGF0YSA9IHt9O1xuICAgICAgICBpbXBvcnREYXRhLnJ1bGVzID0gKGNzc1RleHQucmVwbGFjZShyZWdleC5jc3NDb21tZW50cywgXCJcIikubWF0Y2gocmVnZXguY3NzSW1wb3J0cykgfHwgW10pLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWdub3JlUnVsZXMuaW5kZXhPZihydWxlKSA9PT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnREYXRhLnVybHMgPSBpbXBvcnREYXRhLnJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKHJlZ2V4LmNzc0ltcG9ydHMsIFwiJDFcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnREYXRhLmFic29sdXRlVXJscyA9IGltcG9ydERhdGEudXJscy5tYXAoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RnVsbFVybCh1cmwsIGJhc2VVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1wb3J0RGF0YS5hYnNvbHV0ZVJ1bGVzID0gaW1wb3J0RGF0YS5ydWxlcy5tYXAoZnVuY3Rpb24ocnVsZSwgaSkge1xuICAgICAgICAgICAgdmFyIG9sZFVybCA9IGltcG9ydERhdGEudXJsc1tpXTtcbiAgICAgICAgICAgIHZhciBuZXdVcmwgPSBnZXRGdWxsVXJsKGltcG9ydERhdGEuYWJzb2x1dGVVcmxzW2ldLCBiYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnJlcGxhY2Uob2xkVXJsLCBuZXdVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGltcG9ydERhdGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4pIHtcbiAgICAgICAgdmFyIF9fZXJyb3JEYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBbXTtcbiAgICAgICAgdmFyIF9fZXJyb3JSdWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogW107XG4gICAgICAgIHZhciBpbXBvcnREYXRhID0gcGFyc2VJbXBvcnREYXRhKGNzc1RleHQsIGJhc2VVcmwsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgIGlmIChpbXBvcnREYXRhLnJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2V0VXJscyhpbXBvcnREYXRhLmFic29sdXRlVXJscywge1xuICAgICAgICAgICAgICAgIG9uQmVmb3JlU2VuZDogZnVuY3Rpb24gb25CZWZvcmVTZW5kKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkJlZm9yZVNlbmQoeGhyLCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoY3NzVGV4dCwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsID0gc2V0dGluZ3Mub25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCBjc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VJbXBvcnREYXRhID0gcGFyc2VJbXBvcnREYXRhKGNzc1RleHQsIHVybCwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VJbXBvcnREYXRhLnJ1bGVzLmZvckVhY2goZnVuY3Rpb24ocnVsZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShydWxlLCByZXNwb25zZUltcG9ydERhdGEuYWJzb2x1dGVSdWxlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzVGV4dDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fZXJyb3JEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyOiB4aHIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgX19lcnJvclJ1bGVzLnB1c2goaW1wb3J0RGF0YS5ydWxlc1t1cmxJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBiYXNlVXJsLCBjYWxsYmFja0ZuLCBfX2Vycm9yRGF0YSwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUocmVzcG9uc2VBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFycmF5LmZvckVhY2goZnVuY3Rpb24oaW1wb3J0VGV4dCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShpbXBvcnREYXRhLnJ1bGVzW2ldLCBpbXBvcnRUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVJbXBvcnRzKGNzc1RleHQsIG5vZGUsIGJhc2VVcmwsIGNhbGxiYWNrRm4sIF9fZXJyb3JEYXRhLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2tGbihjc3NUZXh0LCBfX2Vycm9yRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNvdXJjZU5vZGVzLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2VOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUsIGkpIHtcbiAgICAgICAgICAgIHZhciBsaW5rSHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIHZhciBsaW5rUmVsID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIik7XG4gICAgICAgICAgICB2YXIgaXNMaW5rID0gbm9kZS5ub2RlTmFtZSA9PT0gXCJMSU5LXCIgJiYgbGlua0hyZWYgJiYgbGlua1JlbCAmJiBsaW5rUmVsLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiO1xuICAgICAgICAgICAgdmFyIGlzU3R5bGUgPSBub2RlLm5vZGVOYW1lID09PSBcIlNUWUxFXCI7XG4gICAgICAgICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgICAgICAgICAgZ2V0VXJscyhsaW5rSHJlZiwge1xuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogXCJ0ZXh0L2Nzc1wiLFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVNlbmQ6IGZ1bmN0aW9uIG9uQmVmb3JlU2VuZCh4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGNzc1RleHQsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VVcmwgPSBnZXRGdWxsVXJsKGxpbmtIcmVmLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgaSwgbm9kZSwgc291cmNlVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcih4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2ldID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uRXJyb3IoeGhyLCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51c2VDU1NPTSkge1xuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gQXJyYXkuYXBwbHkobnVsbCwgbm9kZS5zaGVldC5jc3NSdWxlcykubWFwKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MoY3NzVGV4dCwgaSwgbm9kZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNzc0FycmF5W2ldID0gXCJcIjtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKFwiXCIsIFtdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxVcmwodXJsKSB7XG4gICAgdmFyIGJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XG4gICAgdmFyIGIgPSBkLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgIHZhciBhID0gZC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkLmhlYWQuYXBwZW5kQ2hpbGQoYik7XG4gICAgZC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgIGIuaHJlZiA9IGJhc2U7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhyZWY7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvcihlbG0sIHNlbGVjdG9yKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBlbG0ubWF0Y2hlcyB8fCBlbG0ubWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbG0ubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWxtLm9NYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG1hdGNoZXMuY2FsbChlbG0sIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3NzRGF0YTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldC1jc3MtZGF0YS5lc20uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGJhbGFuY2VkO1xuZnVuY3Rpb24gYmFsYW5jZWQoYSwgYiwgc3RyKSB7XG4gIGlmIChhIGluc3RhbmNlb2YgUmVnRXhwKSBhID0gbWF5YmVNYXRjaChhLCBzdHIpO1xuICBpZiAoYiBpbnN0YW5jZW9mIFJlZ0V4cCkgYiA9IG1heWJlTWF0Y2goYiwgc3RyKTtcblxuICB2YXIgciA9IHJhbmdlKGEsIGIsIHN0cik7XG5cbiAgcmV0dXJuIHIgJiYge1xuICAgIHN0YXJ0OiByWzBdLFxuICAgIGVuZDogclsxXSxcbiAgICBwcmU6IHN0ci5zbGljZSgwLCByWzBdKSxcbiAgICBib2R5OiBzdHIuc2xpY2UoclswXSArIGEubGVuZ3RoLCByWzFdKSxcbiAgICBwb3N0OiBzdHIuc2xpY2UoclsxXSArIGIubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXliZU1hdGNoKHJlZywgc3RyKSB7XG4gIHZhciBtID0gc3RyLm1hdGNoKHJlZyk7XG4gIHJldHVybiBtID8gbVswXSA6IG51bGw7XG59XG5cbmJhbGFuY2VkLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiByYW5nZShhLCBiLCBzdHIpIHtcbiAgdmFyIGJlZ3MsIGJlZywgbGVmdCwgcmlnaHQsIHJlc3VsdDtcbiAgdmFyIGFpID0gc3RyLmluZGV4T2YoYSk7XG4gIHZhciBiaSA9IHN0ci5pbmRleE9mKGIsIGFpICsgMSk7XG4gIHZhciBpID0gYWk7XG5cbiAgaWYgKGFpID49IDAgJiYgYmkgPiAwKSB7XG4gICAgYmVncyA9IFtdO1xuICAgIGxlZnQgPSBzdHIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPj0gMCAmJiAhcmVzdWx0KSB7XG4gICAgICBpZiAoaSA9PSBhaSkge1xuICAgICAgICBiZWdzLnB1c2goaSk7XG4gICAgICAgIGFpID0gc3RyLmluZGV4T2YoYSwgaSArIDEpO1xuICAgICAgfSBlbHNlIGlmIChiZWdzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHJlc3VsdCA9IFsgYmVncy5wb3AoKSwgYmkgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZyA9IGJlZ3MucG9wKCk7XG4gICAgICAgIGlmIChiZWcgPCBsZWZ0KSB7XG4gICAgICAgICAgbGVmdCA9IGJlZztcbiAgICAgICAgICByaWdodCA9IGJpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmkgPSBzdHIuaW5kZXhPZihiLCBpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGkgPSBhaSA8IGJpICYmIGFpID49IDAgPyBhaSA6IGJpO1xuICAgIH1cblxuICAgIGlmIChiZWdzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gWyBsZWZ0LCByaWdodCBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEJhc2VkIG9uIGNzcyBwYXJzZXIvY29tcGlsZXIgYnkgTnhDaGdcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9OeHRDaGcvcGllY2VzL3RyZWUvbWFzdGVyL2pzL2Nzc19wYXJzZXJcbiAqL1xuXG5cbi8vIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCBiYWxhbmNlZCBmcm9tICdiYWxhbmNlZC1tYXRjaCc7XG5cblxuLy8gRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBQYXJzZXMgQ1NTIHN0cmluZyBhbmQgZ2VuZXJhdGVzIEFTVCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gIGNzcyBUaGUgQ1NTIHN0cmluZ3QgdG8gYmUgY29udmVydGVkIHRvIGFuIEFTVFxuICogQHBhcmFtIHtvYmplY3R9ICBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMub25seVZhcnM9ZmFsc2VdIFJlbW92ZSBkZWNsYXJhdGlvbnMgdGhhdCBkbyBub3RcbiAqICAgICAgICAgICAgICAgICAgY29udGFpbiBhIENTUyB2YXJpYWJsZSBmcm9tIHRoZSByZXR1cm4gdmFsdWUuIE5vdGUgdGhhdFxuICogICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIGFuZCBAa2V5ZnJhbWUgcnVsZXMgcmVxdWlyZSBhbGwgZGVjbGFyYXRpb25zIHRvXG4gKiAgICAgICAgICAgICAgICAgIGJlIHJldHVybmVkIGlmIGEgQ1NTIHZhcmlhYmxlIGlzIHVzZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJlbW92ZUNvbW1lbnRzPWZhbHNlXSBSZW1vdmUgY29tbWVudHMgZnJvbSByZXR1cm5lZFxuICogICAgICAgICAgICAgICAgICBvYmplY3QuXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUNzcyhjc3MsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBvbmx5VmFycyAgICAgIDogZmFsc2UsXG4gICAgICAgIHJlbW92ZUNvbW1lbnRzOiBmYWxzZVxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3QgZXJyb3JzICAgPSBbXTtcblxuICAgIC8vIEVycm9yc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDU1MgcGFyc2UgZXJyb3I6ICR7bXNnfWApO1xuICAgIH1cblxuICAgIC8vIFJlZ0V4XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1hdGNoIHJlZ2V4cCBhbmQgcmV0dXJuIGNhcHR1cmVzXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICAgICAgY29uc3QgbSA9IHJlLmV4ZWMoY3NzKTtcblxuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY3NzID0gY3NzLnNsaWNlKG1bMF0ubGVuZ3RoKTtcblxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICByZXR1cm4gbWF0Y2goL157XFxzKi8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gbWF0Y2goL159Lyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICAgICAgbWF0Y2goL15cXHMqLyk7XG4gICAgfVxuXG4gICAgLy8gQ29tbWVudHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGlmIChjc3NbMF0gIT09ICcvJyB8fCBjc3NbMV0gIT09ICcqJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGkgPSAyO1xuXG4gICAgICAgIHdoaWxlIChjc3NbaV0gJiYgKGNzc1tpXSAhPT0gJyonIHx8IGNzc1tpICsgMV0gIT09ICcvJykpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3NzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ2VuZCBvZiBjb21tZW50IGlzIG1pc3NpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0ciA9IGNzcy5zbGljZSgyLCBpKTtcblxuICAgICAgICBjc3MgPSBjc3Muc2xpY2UoaSArIDIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlICAgOiAnY29tbWVudCcsXG4gICAgICAgICAgICBjb21tZW50OiBzdHJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21tZW50cygpIHtcbiAgICAgICAgY29uc3QgY21udHMgPSBbXTtcbiAgICAgICAgbGV0IGM7XG5cbiAgICAgICAgd2hpbGUgKChjID0gY29tbWVudCgpKSkge1xuICAgICAgICAgICAgY21udHMucHVzaChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXR0aW5ncy5yZW1vdmVDb21tZW50cyA/IFtdIDogY21udHM7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0b3JcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gc2VsZWN0b3IoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcblxuICAgICAgICB3aGlsZSAoY3NzWzBdID09PSAnfScpIHtcbiAgICAgICAgICAgIGVycm9yKCdleHRyYSBjbG9zaW5nIGJyYWNrZXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXigoXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonfFtee10pKykvKTtcblxuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG1bMF1cbiAgICAgICAgICAgICAgICAudHJpbSgpIC8vIHJlbW92ZSBhbGwgY29tbWVudHMgZnJvbSBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qL118W1xcclxcbl0pKSkqXFwqXFwvKy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonL2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCAnXFx1MjAwQycpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMqKD8hW14oXSpcXCkpLFxccyovKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9cXHUyMDBDL2csICcsJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNsYXJhdGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgICAgIG1hdGNoKC9eKFs7XFxzXSopKy8pOyAvLyBpZ25vcmUgZW1wdHkgZGVjbGFyYXRpb25zICsgd2hpdGVzcGFjZVxuXG4gICAgICAgIGNvbnN0IGNvbW1lbnRfcmVnZXhwID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XG4gICAgICAgIGxldCBwcm9wID0gbWF0Y2goL14oXFwqP1stIy8qXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi8pO1xuXG4gICAgICAgIGlmICghcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcCA9IHByb3BbMF0udHJpbSgpO1xuXG4gICAgICAgIGlmICghbWF0Y2goL146XFxzKi8pKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ3Byb3BlcnR5IG1pc3NpbmcgXFwnOlxcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUXVvdGVzIHJlZ2V4IHJlcGVhdHMgdmVyYmF0aW0gaW5zaWRlIGFuZCBvdXRzaWRlIHBhcmVudGhlc2VzXG4gICAgICAgIGNvbnN0IHZhbCA9IG1hdGNoKC9eKCg/OlxcL1xcKi4qP1xcKlxcL3wnKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKChcXHMqJyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxbXildKj8pXFxzKlxcKXxbXn07XSkrKS8pO1xuICAgICAgICBjb25zdCByZXQgPSB7XG4gICAgICAgICAgICB0eXBlICAgIDogJ2RlY2xhcmF0aW9uJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLnJlcGxhY2UoY29tbWVudF9yZWdleHAsICcnKSxcbiAgICAgICAgICAgIHZhbHVlICAgOiB2YWwgPyB2YWxbMF0ucmVwbGFjZShjb21tZW50X3JlZ2V4cCwgJycpLnRyaW0oKSA6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgbWF0Y2goL15bO1xcc10qLyk7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ21pc3NpbmcgXFwne1xcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGQ7XG4gICAgICAgIGxldCBkZWNscyA9IGNvbW1lbnRzKCk7XG5cbiAgICAgICAgd2hpbGUgKChkID0gZGVjbGFyYXRpb24oKSkpIHtcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZCk7XG4gICAgICAgICAgICBkZWNscyA9IGRlY2xzLmNvbmNhdChjb21tZW50cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdtaXNzaW5nIFxcJ31cXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNscztcbiAgICB9XG5cbiAgICAvLyBLZXlmcmFtZXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24ga2V5ZnJhbWUoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcblxuICAgICAgICBjb25zdCB2YWxzID0gW107XG4gICAgICAgIGxldCBtO1xuXG4gICAgICAgIHdoaWxlICgobSA9IG1hdGNoKC9eKChcXGQrXFwuXFxkK3xcXC5cXGQrfFxcZCspJT98W2Etel0rKVxccyovKSkpIHtcbiAgICAgICAgICAgIHZhbHMucHVzaChtWzFdKTtcbiAgICAgICAgICAgIG1hdGNoKC9eLFxccyovKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgICA6ICdrZXlmcmFtZScsXG4gICAgICAgICAgICAgICAgdmFsdWVzICAgICAgOiB2YWxzLFxuICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdF9rZXlmcmFtZXMoKSB7XG4gICAgICAgIGxldCBtID0gbWF0Y2goL15AKFstXFx3XSspP2tleWZyYW1lc1xccyovKTtcblxuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IG1bMV07XG5cbiAgICAgICAgbSA9IG1hdGNoKC9eKFstXFx3XSspXFxzKi8pO1xuXG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdAa2V5ZnJhbWVzIG1pc3NpbmcgbmFtZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IG1bMV07XG5cbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignQGtleWZyYW1lcyBtaXNzaW5nIFxcJ3tcXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmcmFtZTtcbiAgICAgICAgbGV0IGZyYW1lcyA9IGNvbW1lbnRzKCk7XG5cbiAgICAgICAgd2hpbGUgKChmcmFtZSA9IGtleWZyYW1lKCkpKSB7XG4gICAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG4gICAgICAgICAgICBmcmFtZXMgPSBmcmFtZXMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0BrZXlmcmFtZXMgbWlzc2luZyBcXCd9XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZSAgICAgOiAna2V5ZnJhbWVzJyxcbiAgICAgICAgICAgIG5hbWUgICAgIDogbmFtZSxcbiAgICAgICAgICAgIHZlbmRvciAgIDogdmVuZG9yLFxuICAgICAgICAgICAga2V5ZnJhbWVzOiBmcmFtZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBAIFJ1bGVzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGF0X3BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBwYWdlICovKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yKCkgfHwgW107XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAncGFnZScsIHNlbGVjdG9yczogc2VsLCBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfZm9udGZhY2UoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBmb250LWZhY2VcXHMqLyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdmb250LWZhY2UnLCBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfc3VwcG9ydHMoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBzdXBwb3J0cyAqKFtee10rKS8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnc3VwcG9ydHMnLCBzdXBwb3J0czogbVsxXS50cmltKCksIHJ1bGVzOiBydWxlcygpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfaG9zdCgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGhvc3RcXHMqLyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdob3N0JywgcnVsZXM6IHJ1bGVzKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9tZWRpYSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQG1lZGlhICooW157XSspLyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdtZWRpYScsIG1lZGlhOiBtWzFdLnRyaW0oKSwgcnVsZXM6IHJ1bGVzKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9jdXN0b21fbSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGN1c3RvbS1tZWRpYVxccysoLS1bXlxcc10rKVxccyooW157O10rKTsvKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ2N1c3RvbS1tZWRpYScsIG5hbWU6IG1bMV0udHJpbSgpLCBtZWRpYTogbVsyXS50cmltKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9kb2N1bWVudCgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQChbLVxcd10rKT9kb2N1bWVudCAqKFtee10rKS8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnZG9jdW1lbnQnLCBkb2N1bWVudDogbVsyXS50cmltKCksIHZlbmRvcjogbVsxXSA/IG1bMV0udHJpbSgpIDogbnVsbCwgcnVsZXM6IHJ1bGVzKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF94KCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AKGltcG9ydHxjaGFyc2V0fG5hbWVzcGFjZSlcXHMqKFteO10rKTsvKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogbVsxXSwgbmFtZTogbVsyXS50cmltKCkgfTsgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdF9ydWxlKCkge1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKGNzc1swXSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBhdF9rZXlmcmFtZXMoKSB8fCBhdF9zdXBwb3J0cygpIHx8IGF0X2hvc3QoKSB8fCBhdF9tZWRpYSgpIHx8IGF0X2N1c3RvbV9tKCkgfHwgYXRfcGFnZSgpIHx8IGF0X2RvY3VtZW50KCkgfHwgYXRfZm9udGZhY2UoKSB8fCBhdF94KCk7XG5cbiAgICAgICAgICAgIGlmIChyZXQgJiYgc2V0dGluZ3Mub25seVZhcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGFzVmFyRnVuYyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gQHBhZ2UsIEBmb250LWZhY2VcbiAgICAgICAgICAgICAgICBpZiAocmV0LmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBoYXNWYXJGdW5jID0gcmV0LmRlY2xhcmF0aW9ucy5zb21lKGRlY2wgPT4gL3ZhclxcKC8udGVzdChkZWNsLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEBrZXlmcmFtZXMsIEBtZWRpYSwgQHN1cHBvcnRzLCBldGMuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHJldC5rZXlmcmFtZXMgfHwgcmV0LnJ1bGVzIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhckZ1bmMgPSBhcnIuc29tZShvYmogPT4gKG9iai5kZWNsYXJhdGlvbnMgfHwgW10pLnNvbWUoZGVjbCA9PiAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1ZhckZ1bmMgPyByZXQgOiB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJ1bGVzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIHJ1bGUoKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5vbmx5VmFycykge1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZWRNYXRjaCA9IGJhbGFuY2VkKCd7JywgJ30nLCBjc3MpO1xuXG4gICAgICAgICAgICAvLyBXaGVuIG9ubHlWYXJzOnRydWUsIHNraXAgcnVsc2V0IGlmIGl0IGRvZXMgbm90IGNvbnRhaW4gYSA6cm9vdFxuICAgICAgICAgICAgLy8gdmFyaWFibGUgZGVjbGFyYXRpb24gb2YgYSB2YXJpYWJsZSBmdW5jdGlvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKGJhbGFuY2VkTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNWYXJEZWNsID0gYmFsYW5jZWRNYXRjaC5wcmUuaW5kZXhPZignOnJvb3QnKSAhPT0gLTEgJiYgLy0tXFxTKlxccyo6Ly50ZXN0KGJhbGFuY2VkTWF0Y2guYm9keSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzVmFyRnVuYyA9IC92YXJcXCgvLnRlc3QoYmFsYW5jZWRNYXRjaC5ib2R5KTtcblxuICAgICAgICAgICAgICAgIGlmICghaGFzVmFyRGVjbCAmJiAhaGFzVmFyRnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjc3MgPSBjc3Muc2xpY2UoYmFsYW5jZWRNYXRjaC5lbmQgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsICAgPSBzZWxlY3RvcigpIHx8IFtdO1xuICAgICAgICBjb25zdCBkZWNscyA9ICFzZXR0aW5ncy5vbmx5VmFycyA/IGRlY2xhcmF0aW9ucygpIDogZGVjbGFyYXRpb25zKCkuZmlsdGVyKGRlY2wgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzVmFyRGVjbCA9IHNlbC5zb21lKHMgPT4gcy5pbmRleE9mKCc6cm9vdCcpICE9PSAtMSkgJiYgL14tLVxcUy8udGVzdChkZWNsLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhckZ1bmMgPSAvdmFyXFwoLy50ZXN0KGRlY2wudmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFzVmFyRGVjbCB8fCBoYXNWYXJGdW5jO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNlbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9yKCdzZWxlY3RvciBtaXNzaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAncnVsZScsXG4gICAgICAgICAgICBzZWxlY3RvcnMgICA6IHNlbCxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydWxlcyhjb3JlKSB7XG4gICAgICAgIGlmICghY29yZSAmJiAhb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ21pc3NpbmcgXFwne1xcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBydWxlcyA9IGNvbW1lbnRzKCk7XG5cbiAgICAgICAgd2hpbGUgKGNzcy5sZW5ndGggJiYgKGNvcmUgfHwgY3NzWzBdICE9PSAnfScpICYmIChub2RlID0gYXRfcnVsZSgpIHx8IHJ1bGUoKSkpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChjb21tZW50cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29yZSAmJiAhY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdtaXNzaW5nIFxcJ31cXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc3R5bGVzaGVldCcsXG4gICAgICAgIHN0eWxlc2hlZXQ6IHtcbiAgICAgICAgICAgIHJ1bGVzOiBydWxlcyh0cnVlKSxcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8vIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBwYXJzZUNzcztcbiIsIi8qKlxuICogQmFzZWQgb24gY3NzIHBhcnNlci9jb21waWxlciBieSBOeENoZ1xuICogaHR0cHM6Ly9naXRodWIuY29tL054dENoZy9waWVjZXMvdHJlZS9tYXN0ZXIvanMvY3NzX3BhcnNlclxuICovXG5cblxuLy8gRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBDb21waWxlcyBDU1MgQVNUIHRvIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRyZWUgQ1NTIEFTVCBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtkZWxpbT0nJ10gQ1NTIHJ1bGUgZGVsaW1pdGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggbm9kZSBpcyBwcm9jZXNzZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeUNzcyh0cmVlLCBkZWxpbSA9ICcnLCBjYikge1xuICAgIGNvbnN0IHJlbmRlck1ldGhvZHMgPSB7XG4gICAgICAgIGNoYXJzZXQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAY2hhcnNldCAnICsgbm9kZS5uYW1lICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBjb21tZW50KG5vZGUpIHtcbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHBvbnlmaWxsIG1hcmtlciBjb21tZW50c1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29tbWVudC5pbmRleE9mKCdfX0NTU1ZBUlNQT05ZRklMTCcpID09PSAwID8gJy8qJyArIG5vZGUuY29tbWVudCArICcqLycgOiAnJztcbiAgICAgICAgfSxcbiAgICAgICAgJ2N1c3RvbS1tZWRpYScobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAY3VzdG9tLW1lZGlhICcgKyBub2RlLm5hbWUgKyAnICcgKyBub2RlLm1lZGlhICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBkZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5wcm9wZXJ0eSArICc6JyArIG5vZGUudmFsdWUgKyAnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIGRvY3VtZW50KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQCcgKyAobm9kZS52ZW5kb3IgfHwgJycpICsgJ2RvY3VtZW50ICcgKyBub2RlLmRvY3VtZW50ICsgJ3snICsgdmlzaXQobm9kZS5ydWxlcykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgICdmb250LWZhY2UnKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQGZvbnQtZmFjZScgKyAneycgKyB2aXNpdChub2RlLmRlY2xhcmF0aW9ucykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIGhvc3Qobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAaG9zdCcgKyAneycgKyB2aXNpdChub2RlLnJ1bGVzKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgaW1wb3J0KG5vZGUpIHtcbiAgICAgICAgICAgIC8vIEZJWEVEXG4gICAgICAgICAgICByZXR1cm4gJ0BpbXBvcnQgJyArIG5vZGUubmFtZSArICc7JztcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZnJhbWUobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsdWVzLmpvaW4oJywnKSArICd7JyArIHZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZnJhbWVzKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQCcgKyAobm9kZS52ZW5kb3IgfHwgJycpICsgJ2tleWZyYW1lcyAnICsgbm9kZS5uYW1lICsgJ3snICsgdmlzaXQobm9kZS5rZXlmcmFtZXMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBtZWRpYShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgbm9kZS5tZWRpYSArICd7JyArIHZpc2l0KG5vZGUucnVsZXMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lc3BhY2Uobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAbmFtZXNwYWNlICcgKyBub2RlLm5hbWUgKyAnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2Uobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAcGFnZSAnICsgKG5vZGUuc2VsZWN0b3JzLmxlbmd0aCA/IG5vZGUuc2VsZWN0b3JzLmpvaW4oJywgJykgOiAnJykgKyAneycgKyB2aXNpdChub2RlLmRlY2xhcmF0aW9ucykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bGUobm9kZSkge1xuICAgICAgICAgICAgY29uc3QgZGVjbHMgPSBub2RlLmRlY2xhcmF0aW9ucztcblxuICAgICAgICAgICAgaWYgKGRlY2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNlbGVjdG9ycy5qb2luKCcsJykgKyAneycgKyB2aXNpdChkZWNscykgKyAnfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1cHBvcnRzKG5vZGUpIHtcbiAgICAgICAgICAgIC8vIEZJWEVEXG4gICAgICAgICAgICByZXR1cm4gJ0BzdXBwb3J0cyAnICsgbm9kZS5zdXBwb3J0cyArICd7JyArIHZpc2l0KG5vZGUucnVsZXMpICsgJ30nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHZpc2l0KG5vZGVzKSB7XG4gICAgICAgIGxldCBidWYgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gbm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgIGNiKG4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0eHQgPSByZW5kZXJNZXRob2RzW24udHlwZV0obik7XG5cbiAgICAgICAgICAgIGlmICh0eHQpIHtcbiAgICAgICAgICAgICAgICBidWYgKz0gdHh0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHR4dC5sZW5ndGggJiYgbi5zZWxlY3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IGRlbGltO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0KHRyZWUuc3R5bGVzaGVldC5ydWxlcyk7XG59XG5cblxuLy8gRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeUNzcztcbiIsIi8qKlxuICogQmFzZWQgb24gcmV3b3JrLXZpc2l0IGJ5IHJld29ya2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL3Jld29ya2Nzcy9yZXdvcmstdmlzaXRcbiAqL1xuXG5cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogVmlzaXQgYG5vZGVgIGRlY2xhcmF0aW9ucyByZWN1cnNpdmVseSBhbmQgaW52b2tlIGBmbihkZWNsYXJhdGlvbnMsIG5vZGUpYC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbm9kZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gd2Fsa0Nzcyhub2RlLCBmbil7XG4gICAgbm9kZS5ydWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJ1bGUpe1xuICAgICAgICAvLyBAbWVkaWEgZXRjXG4gICAgICAgIGlmIChydWxlLnJ1bGVzKSB7XG4gICAgICAgICAgICB3YWxrQ3NzKHJ1bGUsIGZuKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8ga2V5ZnJhbWVzXG4gICAgICAgIGlmIChydWxlLmtleWZyYW1lcykge1xuICAgICAgICAgICAgcnVsZS5rZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXlmcmFtZSl7XG4gICAgICAgICAgICAgICAgaWYgKGtleWZyYW1lLnR5cGUgPT09ICdrZXlmcmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oa2V5ZnJhbWUuZGVjbGFyYXRpb25zLCBydWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGNoYXJzZXQsIEBpbXBvcnQgZXRjXG4gICAgICAgIGlmICghcnVsZS5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuKHJ1bGUuZGVjbGFyYXRpb25zLCBub2RlKTtcbiAgICB9KTtcbn1cblxuXG4vLyBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgd2Fsa0NzcztcbiIsIi8qKlxuICogQmFzZWQgb24gcmV3b3JrLXZhcnMgYnkgcmV3b3JrY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmV3b3JrY3NzL3Jld29yay12YXJzXG4gKi9cblxuXG4vLyBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgYmFsYW5jZWQgICAgIGZyb20gJ2JhbGFuY2VkLW1hdGNoJztcbmltcG9ydCBwYXJzZUNzcyAgICAgZnJvbSAnLi9wYXJzZS1jc3MnO1xuaW1wb3J0IHN0cmluZ2lmeUNzcyBmcm9tICcuL3N0cmluZ2lmeS1jc3MnO1xuaW1wb3J0IHdhbGtDc3MgICAgICBmcm9tICcuL3dhbGstY3NzJztcblxuXG4vLyBDb25zdGFudHMgJiBWYXJpYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBWQVJfUFJPUF9JREVOVElGSUVSID0gJy0tJztcbmNvbnN0IFZBUl9GVU5DX0lERU5USUZJRVIgPSAndmFyJztcbmNvbnN0IHZhcmlhYmxlU3RvcmUgICAgICAgPSB7XG4gICAgLy8gUGVyc2lzdGVkIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZXMgKG1hdGNoZXMgbW9kZXJuIGJyb3dzZXJzKVxuICAgIGRvbSA6IHt9LFxuICAgIC8vIE5vbi1wZXJzaXN0ZWQgY3VzdG9tIHByb3BlcnRpZXMgdmFsdWVzXG4gICAgdGVtcDoge30sXG4gICAgLy8gUGVyc2lzdGVkIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZXMgcGFzc2VkIHVzaW5nIG9wdGlvbnMudmFyaWFibGVzXG4gICAgdXNlcjoge31cbn07XG5cblxuLy8gRnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBUcmFuc2Zvcm1zIFczQy1zdHlsZSBDU1MgdmFyaWFibGVzIHRvIHN0YXRpYyB2YWx1ZXMgYW5kIHJldHVybnMgYW4gdXBkYXRlZFxuICogQ1NTIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICBjc3NUZXh0IENTUyBjb250YWluaW5nIHZhcmlhYmxlIGRlZmluaXRpb25zIGFuZCBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuZml4TmVzdGVkQ2FsYz10cnVlXSBSZW1vdmVzIG5lc3RlZCAnY2FsYycga2V5d29yZHNcbiAqICAgICAgICAgICAgICAgICAgIGZvciBsZWdhY3kgYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMub25seVZhcnM9ZmFsc2VdIFJlbW92ZSBkZWNsYXJhdGlvbnMgdGhhdCBkbyBub3RcbiAqICAgICAgICAgICAgICAgICAgIGNvbnRhaW4gYSBDU1MgdmFyaWFibGUgZnJvbSB0aGUgcmV0dXJuIHZhbHVlLiBOb3RlIHRoYXRcbiAqICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2UgYW5kIEBrZXlmcmFtZSBydWxlcyByZXF1aXJlIGFsbCBkZWNsYXJhdGlvbnMgdG9cbiAqICAgICAgICAgICAgICAgICAgIGJlIHJldHVybmVkIGlmIGEgQ1NTIHZhcmlhYmxlIGlzIHVzZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5wZXJzaXN0PWZhbHNlXSBQZXJzaXN0cyBvcHRpb25zLnZhcmlhYmxlcyxcbiAqICAgICAgICAgICAgICAgICAgIGFsbG93aW5nIHZhcmlhYmxlcyBzZXQgaW4gcHJldmlvdXMgY2FsbHMgdG8gYmUgYXBwbGllZCBpblxuICogICAgICAgICAgICAgICAgICAgc3Vic2VxdWVudCBjYWxscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnByZXNlcnZlPWZhbHNlXSBQcmVzZXJ2ZSBDU1MgdmFyaWFibGUgZGVmaW5pdGlvbnNcbiAqICAgICAgICAgICAgICAgICAgIGFuZCBmdW5jdGlvbnMgaW4gdGhlIHJldHVybiB2YWx1ZSwgYWxsb3dpbmcgXCJsaXZlXCIgdmFyaWFibGVcbiAqICAgICAgICAgICAgICAgICAgIHVwZGF0ZXMgdmlhIEphdmFTY3JpcHQgdG8gY29udGludWUgd29ya2luZyBpbiBicm93c2VycyB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICBuYXRpdmUgQ1NTIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy52YXJpYWJsZXM9e31dIENTUyB2YXJpYWJsZSBkZWZpbml0aW9ucyB0byBpbmNsdWRlXG4gKiAgICAgICAgICAgICAgICAgICBkdXJpbmcgdHJhbnNmb3JtYXRpb24uIENhbiBiZSB1c2VkIHRvIGFkZCBuZXcgb3ZlcnJpZGVcbiAqICAgICAgICAgICAgICAgICAgIGV4aXNpdG5nIGRlZmluaXRpb25zLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25XYXJuaW5nXSBDYWxsYmFjayBvbiBlYWNoIHRyYW5zZm9ybWF0aW9uXG4gKiAgICAgICAgICAgICAgICAgICB3YXJuaW5nLiBQYXNzZXMgMSkgd2FybmluZ01lc3NhZ2UgYXMgYW4gYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1WYXJzKGNzc1RleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICBmaXhOZXN0ZWRDYWxjOiB0cnVlLFxuICAgICAgICBvbmx5VmFycyAgICAgOiBmYWxzZSxcbiAgICAgICAgcGVyc2lzdCAgICAgIDogZmFsc2UsXG4gICAgICAgIHByZXNlcnZlICAgICA6IGZhbHNlLFxuICAgICAgICB2YXJpYWJsZXMgICAgOiB7fSxcbiAgICAgICAgb25XYXJuaW5nKCkge31cbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IG1hcCAgICAgID0gc2V0dGluZ3MucGVyc2lzdCA/IHZhcmlhYmxlU3RvcmUuZG9tIDogdmFyaWFibGVTdG9yZS50ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YXJpYWJsZVN0b3JlLmRvbSkpO1xuXG4gICAgLy8gQ29udmVydCBjc3NUZXh0IHRvIEFTVCAodGhpcyBjb3VsZCB0aHJvdyBlcnJvcnMpXG4gICAgY29uc3QgY3NzVHJlZSA9IHBhcnNlQ3NzKGNzc1RleHQsIHtcbiAgICAgICAgb25seVZhcnM6IHNldHRpbmdzLm9ubHlWYXJzXG4gICAgfSk7XG5cbiAgICAvLyBEZWZpbmUgdmFyaWFibGVzXG4gICAgY3NzVHJlZS5zdHlsZXNoZWV0LnJ1bGVzLmZvckVhY2goZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICBjb25zdCB2YXJOYW1lSW5kaWNlcyA9IFtdO1xuXG4gICAgICAgIGlmIChydWxlLnR5cGUgIT09ICdydWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSB2YXJpYWJsZXMgZGVjbGFyZWQgZm9yIGA6cm9vdGAgYXJlIHN1cHBvcnRlZFxuICAgICAgICBpZiAocnVsZS5zZWxlY3RvcnMubGVuZ3RoICE9PSAxIHx8IHJ1bGUuc2VsZWN0b3JzWzBdICE9PSAnOnJvb3QnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlY2wsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3AgPSBkZWNsLnByb3BlcnR5O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkZWNsLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocHJvcCAmJiBwcm9wLmluZGV4T2YoVkFSX1BST1BfSURFTlRJRklFUikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBtYXBbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXJOYW1lSW5kaWNlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBvcHRpb25hbGx5IHJlbW92ZSBgLS0qYCBwcm9wZXJ0aWVzIGZyb20gdGhlIHJ1bGVcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZhck5hbWVJbmRpY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuc3BsaWNlKHZhck5hbWVJbmRpY2VzW2ldLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVzdG9yZSBwZXJzaXN0ZWQgdXNlciB2YWx1ZXNcbiAgICBPYmplY3Qua2V5cyh2YXJpYWJsZVN0b3JlLnVzZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbWFwW2tleV0gPSB2YXJpYWJsZVN0b3JlLnVzZXJba2V5XTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB2YXJpYWJsZXMgZGVmaW5lZCBpbiBzZXR0aW5ncy52YXJpYWJsZXNcbiAgICBpZiAoT2JqZWN0LmtleXMoc2V0dGluZ3MudmFyaWFibGVzKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV3UnVsZSA9IHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgICAgICAgICBzZWxlY3RvcnMgICA6IFsnOnJvb3QnXSxcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ3J1bGUnXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc2V0dGluZ3MudmFyaWFibGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBwcm9wZXJ0eSBuYW1lcyB0byBsZWFkaW5nICctLScgc3R5bGVcbiAgICAgICAgICAgIGNvbnN0IHByb3AgID0gYC0tJHtrZXkucmVwbGFjZSgvXi0rLywgJycpfWA7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNldHRpbmdzLnZhcmlhYmxlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBQZXJzaXN0IHNldHRpbmdzLnZhcmlhYmxlcyB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJzaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVTdG9yZS51c2VyW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBtYXAgdmFsdWUgd2l0aCBzZXR0aW5ncy52YXJpYWJsZXMgdmFsdWVcbiAgICAgICAgICAgIGlmIChtYXBbcHJvcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWFwW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgbmV3IGRlY2xhcmF0aW9uIHRvIG5ld1J1bGVcbiAgICAgICAgICAgICAgICBuZXdSdWxlLmRlY2xhcmF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6ICdkZWNsYXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIG5ldyA6cm9vdCBydWxlc2V0XG4gICAgICAgIGlmIChzZXR0aW5ncy5wcmVzZXJ2ZSAmJiBuZXdSdWxlLmRlY2xhcmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNzc1RyZWUuc3R5bGVzaGVldC5ydWxlcy5wdXNoKG5ld1J1bGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzb2x2ZSB2YXJpYWJsZXNcbiAgICB3YWxrQ3NzKGNzc1RyZWUuc3R5bGVzaGVldCwgZnVuY3Rpb24oZGVjbGFyYXRpb25zLCBub2RlKSB7XG4gICAgICAgIGxldCBkZWNsO1xuICAgICAgICBsZXQgcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjbGFyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWNsID0gZGVjbGFyYXRpb25zW2ldO1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNsLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBza2lwIGNvbW1lbnRzXG4gICAgICAgICAgICBpZiAoZGVjbC50eXBlICE9PSAnZGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNraXAgdmFsdWVzIHRoYXQgZG9uJ3QgY29udGFpbiB2YXJpYWJsZSBmdW5jdGlvbnNcbiAgICAgICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUuaW5kZXhPZihWQVJfRlVOQ19JREVOVElGSUVSICsgJygnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHJlc29sdmVWYWx1ZSh2YWx1ZSwgbWFwLCBzZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIGlmIChyZXNvbHZlZFZhbHVlICE9PSBkZWNsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy5wcmVzZXJ2ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWNsLnZhbHVlID0gcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zcGxpY2UoaSwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IGRlY2wudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBkZWNsLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHJlc29sdmVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBhaGVhZCBvZiBwcmVzZXJ2ZWQgZGVjbGFyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRml4IG5lc3RlZCBjYWxjKCkgdmFsdWVzXG4gICAgaWYgKHNldHRpbmdzLmZpeE5lc3RlZENhbGMpIHtcbiAgICAgICAgZml4TmVzdGVkQ2FsYyhjc3NUcmVlLnN0eWxlc2hlZXQucnVsZXMpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBDU1Mgc3RyaW5nXG4gICAgcmV0dXJuIHN0cmluZ2lmeUNzcyhjc3NUcmVlKTtcbn1cblxuXG4vLyBGdW5jdGlvbnMgKFByaXZhdGUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBSZW1vdmVzIG5lc3RlZCBjYWxjIGtleXdvcmRzIGZvciBsZWdhY3kgYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICogRXhhbXBsZTogY2FsYygxICsgY2FsYygyICsgY2FsYygzICsgMykpKSA9PiBjYWxjKDEgKyAoMiArICgzICsgMykpKVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHJ1bGVzXG4gKi9cbmZ1bmN0aW9uIGZpeE5lc3RlZENhbGMocnVsZXMpIHtcbiAgICBjb25zdCByZUNhbGNFeHAgPSAvKC1bYS16XSstKT9jYWxjXFwoLzsgLy8gTWF0Y2ggXCJjYWxjKFwiIG9yIFwiLXZlbmRvci1jYWxjKFwiXG5cbiAgICBydWxlcy5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICBpZiAocnVsZS5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goZGVjbCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9sZFZhbHVlID0gZGVjbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgIHdoaWxlIChyZUNhbGNFeHAudGVzdChvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdENhbGMgPSBiYWxhbmNlZCgnY2FsYygnLCAnKScsIG9sZFZhbHVlIHx8ICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IG9sZFZhbHVlLnNsaWNlKHJvb3RDYWxjLmVuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlQ2FsY0V4cC50ZXN0KHJvb3RDYWxjLmJvZHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRDYWxjID0gYmFsYW5jZWQocmVDYWxjRXhwLCAnKScsIHJvb3RDYWxjLmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByb290Q2FsYy5ib2R5ID0gYCR7bmVzdGVkQ2FsYy5wcmV9KCR7bmVzdGVkQ2FsYy5ib2R5fSkke25lc3RlZENhbGMucG9zdH1gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gYCR7cm9vdENhbGMucHJlfWNhbGMoJHtyb290Q2FsYy5ib2R5fWA7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9ICFyZUNhbGNFeHAudGVzdChvbGRWYWx1ZSkgPyBgKSR7cm9vdENhbGMucG9zdH1gIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVjbC52YWx1ZSA9IG5ld1ZhbHVlIHx8IGRlY2wudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIENTUyB2YXIoKSBmdW5jdGlvbihzKSB3aXRoIGBtYXBgIGRhdGEgb3IgZmFsbGJhY2sgdmFsdWUocykuIFJldHVybnNcbiAqIG9yaWdpbmFsIGB2YWx1ZWAgaWYgdW5hYmxlIHRvIHJlc29sdmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFN0cmluZyBjb250YWluaW5nIENTUyB2YXIoKSBmdW5jdGlvbnMgdG8gcmVzb2x2ZVxuICogQHBhcmFtIHtvYmplY3R9IG1hcCBDU1MgY3VzdG9tIHByb3BlcnR5IGtleS92YWx1ZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncyBTZXR0aW5ncyBvYmplY3QgcGFzc2VkIGZyb20gdHJhbnNmb3JtVmFycygpXG4gKiBAcGFyYW0ge3N0cmluZ30gW19fcmVjdXJzaXZlRmFsbGJhY2tdIEZhbGxiYWNrIHdoZW4gdW5hYmxlIHRvIHJlc29sdmUgQ1NTXG4gKiAgICAgICAgICAgICAgICAgdmFyKCkgZnVuY3Rpb24gdG8gYSBtYXAgb3IgZmFsbGJhY2sgdmFsdWUuIEFsbG93cyByZXN0b3JpbmdcbiAqICAgICAgICAgICAgICAgICBvcmlnaW5hbCB2YXIoKSBmdW5jdGlvbiBmcm9tIHJlY3Vyc2l2ZSByZXNvbHZlVmFsdWUoKSBjYWxscy5cbiAqIEByZXR1cm4ge3N0cmluZ30gQ1NTIHZhbHVlIHdpdGggdmFyKCkgZnVuY3Rpb24ocykgcmVzb2x2ZWQgdG8gbWFwIG9yIGZhbGxiYWNrXG4gKiAgICAgICAgICAgICAgICAgIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICByZXNvbHZlVmFsdWUoJzEwcHggdmFyKC0teCkgMzBweCcsIHsnLS14JzonMjBweCd9LCB7Li4uc2V0dGluZ3N9KTtcbiAqICAgLy8gPT4gJzEwcHggMjBweCAzMHB4J1xuICpcbiAqICAgcmVzb2x2ZVZhbHVlKCcxMHB4Jywge30sIHsuLi5zZXR0aW5nc30pO1xuICogICAvLyA9PiAnMTBweCdcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKHZhbHVlLCBtYXAsIHNldHRpbmdzID0ge30sIF9fcmVjdXJzaXZlRmFsbGJhY2spIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZigndmFyKCcpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVEYXRhID0gYmFsYW5jZWQoJygnLCAnKScsIHZhbHVlKTtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGNvbnRlbnRzIG9mIENTUyBjdXN0b20gcHJvcGVydHkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBTdHJpbmcgY29udGFpbmluZyBjb250ZW50cyBvZiBDU1MgdmFyKCkgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqICAgcmVzb2x2ZUZ1bmMoJy0teCwgdmFyKC0teSwgZ3JlZW4pJylcbiAgICAgKiAgIC8vID0+IG1hcFsnLS14J10gb3IgbWFwWyctLXknXSBvciAnZ3JlZW4nXG4gICAgICpcbiAgICAgKiAgIHJlc29sdmVGdW5jKCctLWZhaWwnKVxuICAgICAqICAgLy8gPT4gJ3ZhcigtLWZhaWwpJyB3aGVuIG1hcFsnLS1mYWlsJ10gZG9lcyBub3QgZXhpc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlRnVuYyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuYW1lICAgICAgICAgICAgICAgPSB2YWx1ZS5zcGxpdCgnLCcpWzBdLnJlcGxhY2UoL1tcXHNcXG5cXHRdL2csICcnKTtcbiAgICAgICAgY29uc3QgZmFsbGJhY2sgICAgICAgICAgID0gKHZhbHVlLm1hdGNoKC8oPzpcXHMqLFxccyopezF9KC4qKT8vKSB8fCBbXSlbMV07XG4gICAgICAgIGNvbnN0IG1hdGNoICAgICAgICAgICAgICA9IG1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IFN0cmluZyhtYXBbbmFtZV0pIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCAgICAgICAgPSBtYXRjaCB8fCAoZmFsbGJhY2sgPyBTdHJpbmcoZmFsbGJhY2spIDogdW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgdW5yZXNvbHZlZEZhbGxiYWNrID0gX19yZWN1cnNpdmVGYWxsYmFjayB8fCB2YWx1ZTtcblxuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcoYHZhcmlhYmxlIFwiJHtuYW1lfVwiIGlzIHVuZGVmaW5lZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50ICYmIHJlcGxhY2VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXBsYWNlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVZhbHVlKHJlcGxhY2VtZW50LCBtYXAsIHNldHRpbmdzLCB1bnJlc29sdmVkRmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHt1bnJlc29sdmVkRmFsbGJhY2t9KWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBiYWxhbmNlZCBicmFjZSBkYXRhXG4gICAgaWYgKCF2YWx1ZURhdGEpIHtcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ3ZhcignKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhgbWlzc2luZyBjbG9zaW5nIFwiKVwiIGluIHRoZSB2YWx1ZSBcIiR7dmFsdWV9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gQmFsYW5jZWQgYnJhY2UgZGF0YSBpcyB2YXIoKSBmdW5jdGlvblxuICAgIGVsc2UgaWYgKHZhbHVlRGF0YS5wcmUuc2xpY2UoLTMpID09PSAndmFyJykge1xuICAgICAgICBjb25zdCBpc0VtcHR5VmFyRnVuYyA9IHZhbHVlRGF0YS5ib2R5LnRyaW0oKS5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKGlzRW1wdHlWYXJGdW5jKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcoJ3ZhcigpIG11c3QgY29udGFpbiBhIG5vbi13aGl0ZXNwYWNlIHN0cmluZycpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHZhbHVlRGF0YS5wcmUuc2xpY2UoMCwtMylcbiAgICAgICAgICAgICAgICArIHJlc29sdmVGdW5jKHZhbHVlRGF0YS5ib2R5KVxuICAgICAgICAgICAgICAgICsgcmVzb2x2ZVZhbHVlKHZhbHVlRGF0YS5wb3N0LCBtYXAsIHNldHRpbmdzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCYWxhbmNlZCBicmFjZSBkYXRhIGlzIE5PVCB2YXIoKSBmdW5jdGlvblxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdmFsdWVEYXRhLnByZVxuICAgICAgICAgICAgKyBgKCR7cmVzb2x2ZVZhbHVlKHZhbHVlRGF0YS5ib2R5LCBtYXAsIHNldHRpbmdzKX0pYFxuICAgICAgICAgICAgKyByZXNvbHZlVmFsdWUodmFsdWVEYXRhLnBvc3QsIG1hcCwgc2V0dGluZ3MpXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1WYXJzO1xuZXhwb3J0IHsgdmFyaWFibGVTdG9yZSB9OyIsIi8vIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCBnZXRDc3NEYXRhICAgICAgICAgIGZyb20gJ2dldC1jc3MtZGF0YSc7XG5pbXBvcnQgdHJhbnNmb3JtQ3NzICAgICAgICBmcm9tICcuL3RyYW5zZm9ybS1jc3MnO1xuaW1wb3J0IHsgdmFyaWFibGVTdG9yZSB9ICAgZnJvbSAnLi90cmFuc2Zvcm0tY3NzJztcbmltcG9ydCB7IG5hbWUgYXMgcGtnTmFtZSB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cblxuLy8gQ29uc3RhbnRzICYgVmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgaXNCcm93c2VyICAgICAgID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBpc05hdGl2ZVN1cHBvcnQgPSBpc0Jyb3dzZXIgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLnN1cHBvcnRzICYmIHdpbmRvdy5DU1Muc3VwcG9ydHMoJygtLWE6IDApJyk7XG5cbmNvbnN0IGNvbnNvbGVNc2dQcmVmaXggPSAnY3NzVmFycygpOiAnO1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgLy8gVGFyZ2V0c1xuICAgIHJvb3RFbGVtZW50ICA6IGlzQnJvd3NlciA/IGRvY3VtZW50IDogbnVsbCxcbiAgICBzaGFkb3dET00gICAgOiBmYWxzZSxcbiAgICAvLyBTb3VyY2VzXG4gICAgaW5jbHVkZSAgICAgIDogJ3N0eWxlLGxpbmtbcmVsPXN0eWxlc2hlZXRdJyxcbiAgICBleGNsdWRlICAgICAgOiAnJyxcbiAgICB2YXJpYWJsZXMgICAgOiB7fSwgICAgLy8gdHJhbnNmb3JtQ3NzXG4gICAgLy8gT3B0aW9uc1xuICAgIGZpeE5lc3RlZENhbGM6IHRydWUsICAvLyB0cmFuc2Zvcm1Dc3NcbiAgICBvbmx5TGVnYWN5ICAgOiB0cnVlLCAgLy8gY3NzVmFyc1xuICAgIG9ubHlWYXJzICAgICA6IGZhbHNlLCAvLyBjc3NWYXJzLCBwYXJzZUNTU1xuICAgIHByZXNlcnZlICAgICA6IGZhbHNlLCAvLyB0cmFuc2Zvcm1Dc3NcbiAgICBzaWxlbnQgICAgICAgOiBmYWxzZSwgLy8gY3NzVmFyc1xuICAgIHVwZGF0ZURPTSAgICA6IHRydWUsICAvLyBjc3NWYXJzXG4gICAgdXBkYXRlVVJMcyAgIDogdHJ1ZSwgIC8vIGNzc1ZhcnNcbiAgICB3YXRjaCAgICAgICAgOiBudWxsLCAgLy8gY3NzVmFyc1xuICAgIC8vIENhbGxiYWNrc1xuICAgIG9uQmVmb3JlU2VuZCgpIHt9LCAgICAvLyBjc3NWYXJzXG4gICAgb25TdWNjZXNzKCkge30sICAgICAgIC8vIGNzc1ZhcnNcbiAgICBvbldhcm5pbmcoKSB7fSwgICAgICAgLy8gdHJhbnNmb3JtQ3NzXG4gICAgb25FcnJvcigpIHt9LCAgICAgICAgIC8vIGNzc1ZhcnNcbiAgICBvbkNvbXBsZXRlKCkge30gICAgICAgLy8gY3NzVmFyc1xufTtcbmNvbnN0IHJlZ2V4ID0ge1xuICAgIC8vIENTUyBjb21tZW50c1xuICAgIGNzc0NvbW1lbnRzOiAvXFwvXFwqW1xcc1xcU10rP1xcKlxcLy9nLFxuICAgIC8vIENTUyBrZXlmcmFtZXMgKEBrZXlmcmFtZXMgJiBALVZFTkRPUi1rZXlmcmFtZXMpXG4gICAgY3NzS2V5ZnJhbWVzOiAvQCg/Oi1cXHcqLSk/a2V5ZnJhbWVzLyxcbiAgICAvLyBDU1Mgcm9vdCB2YXJzXG4gICAgY3NzUm9vdFJ1bGVzOiAvKD86OnJvb3RcXHMqe1xccypbXn1dKn0pL2csXG4gICAgLy8gQ1NTIHVybCguLi4pIHZhbHVlc1xuICAgIGNzc1VybHM6IC91cmxcXCgoPyFbJ1wiXT8oPzpkYXRhfGh0dHB8XFwvXFwvKTopWydcIl0/KFteJ1wiKV0qKVsnXCJdP1xcKS9nLFxuICAgIC8vIENTUyB2YXJpYWJsZSA6cm9vdCBkZWNsYXJhdGlvbnMgYW5kIHZhcigpIGZ1bmN0aW9uIHZhbHVlc1xuICAgIGNzc1ZhcnM6IC8oPzooPzo6cm9vdFxccyp7XFxzKlteO10qOypcXHMqKXwoPzp2YXJcXChcXHMqKSkoLS1bXjopXSspKD86XFxzKls6KV0pL1xufTtcblxuLy8gTXV0YXRpb24gb2JzZXJ2ZXIgcmVmZXJlbmNlIGNyZWF0ZWQgdmlhIG9wdGlvbnMud2F0Y2hcbmxldCBjc3NWYXJzT2JzZXJ2ZXIgPSBudWxsO1xuXG4vLyBEZWJvdW5jZSB0aW1lciB1c2VkIHdpdGggb3B0aW9ucy53YXRjaFxubGV0IGRlYm91bmNlVGltZXIgPSBudWxsO1xuXG4vLyBJbmRpY2F0ZXMgaWYgZG9jdW1lbnQtbGV2ZWwgY3VzdG9tIHByb3BlcnR5IHZhbHVlcyBoYXZlIGJlZW4gcGFyc2VkLCBzdG9yZWQsXG4vLyBhbmQgcmVhZHkgZm9yIHVzZSB3aXRoIG9wdGlvbnMuc2hhZG93RE9NXG5sZXQgaXNTaGFkb3dET01SZWFkeSA9IGZhbHNlO1xuXG5cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogRmV0Y2hlcywgcGFyc2VzLCBhbmQgdHJhbnNmb3JtcyBDU1MgY3VzdG9tIHByb3BlcnRpZXMgZnJvbSBzcGVjaWZpZWRcbiAqIDxzdHlsZT4gYW5kIDxsaW5rPiBlbGVtZW50cyBpbnRvIHN0YXRpYyB2YWx1ZXMsIHRoZW4gYXBwZW5kcyBhIG5ldyA8c3R5bGU+XG4gKiBlbGVtZW50IHdpdGggc3RhdGljIHZhbHVlcyB0byB0aGUgRE9NIHRvIHByb3ZpZGUgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuICogY29tcGF0aWJpbGl0eSBmb3IgbGVnYWN5IGJyb3dzZXJzLiBBbHNvIHByb3ZpZGVzIGEgc2luZ2xlIGludGVyZmFjZSBmb3JcbiAqIGxpdmUgdXBkYXRlcyBvZiBydW50aW1lIHZhbHVlcyBpbiBib3RoIG1vZGVybiBhbmQgbGVnYWN5IGJyb3dzZXJzLlxuICpcbiAqIEBwcmVzZXJ2ZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy5yb290RWxlbWVudD1kb2N1bWVudF0gUm9vdCBlbGVtZW50IHRvIHRyYXZlcnNlIGZvclxuICogICAgICAgICAgICAgICAgICAgPGxpbms+IGFuZCA8c3R5bGU+IG5vZGVzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuc2hhZG93RE9NPWZhbHNlXSBEZXRlcm1pbmVzIGlmIHNoYWRvdyBET00gPGxpbms+XG4gKiAgICAgICAgICAgICAgICAgICBhbmQgPHN0eWxlPiBub2RlcyB3aWxsIGJlIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmluY2x1ZGU9XCJzdHlsZSxsaW5rW3JlbD1zdHlsZXNoZWV0XVwiXSBDU1Mgc2VsZWN0b3JcbiAqICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nIDxsaW5rIHJlPVwic3R5bGVzaGVldFwiPiBhbmQgPHN0eWxlPiBub2RlcyB0b1xuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc1xuICogQHBhcmFtIHtzdHJpbmd9ICAgW29wdGlvbnMuZXhjbHVkZV0gQ1NTIHNlbGVjdG9yIG1hdGNoaW5nIDxsaW5rXG4gKiAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZWhzZWV0XCI+IGFuZCA8c3R5bGU+IG5vZGVzIHRvIGV4Y2x1ZGUgZnJvbSB0aG9zZVxuICogICAgICAgICAgICAgICAgICAgbWF0Y2hlcyBieSBvcHRpb25zLmluY2x1ZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zLnZhcmlhYmxlc10gQSBtYXAgb2YgY3VzdG9tIHByb3BlcnR5IG5hbWUvdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgIHBhaXJzLiBQcm9wZXJ0eSBuYW1lcyBjYW4gb21pdCBvciBpbmNsdWRlIHRoZSBsZWFkaW5nXG4gKiAgICAgICAgICAgICAgICAgICBkb3VibGUtaHlwaGVuICjigJQpLCBhbmQgdmFsdWVzIHNwZWNpZmllZCB3aWxsIG92ZXJyaWRlXG4gKiAgICAgICAgICAgICAgICAgICBwcmV2aW91cyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5maXhOZXN0ZWRDYWxjPXRydWVdIFJlbW92ZXMgbmVzdGVkICdjYWxjJyBrZXl3b3Jkc1xuICogICAgICAgICAgICAgICAgICAgZm9yIGxlZ2FjeSBicm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5vbmx5TGVnYWN5PXRydWVdIERldGVybWluZXMgaWYgdGhlIHBvbnlmaWxsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIG9ubHkgZ2VuZXJhdGUgbGVnYWN5LWNvbXBhdGlibGUgQ1NTIGluIGJyb3dzZXJzIHRoYXQgbGFja1xuICogICAgICAgICAgICAgICAgICAgbmF0aXZlIHN1cHBvcnQgKGkuZS4sIGxlZ2FjeSBicm93c2VycylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLm9ubHlWYXJzPWZhbHNlXSBEZXRlcm1pbmVzIGlmIENTUyBydWxlc2V0cyBhbmRcbiAqICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyB3aXRob3V0IGEgY3VzdG9tIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgcmVtb3ZlZCBmcm9tIHRoZSBwb255ZmlsbC1nZW5lcmF0ZWQgQ1NTXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5wcmVzZXJ2ZT1mYWxzZV0gRGV0ZXJtaW5lcyBpZiB0aGUgb3JpZ2luYWwgQ1NTXG4gKiAgICAgICAgICAgICAgICAgICBjdXN0b20gcHJvcGVydHkgZGVjbGFyYXRpb24gd2lsbCBiZSByZXRhaW5lZCBpbiB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHBvbnlmaWxsLWdlbmVyYXRlZCBDU1MuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5zaWxlbnQ9ZmFsc2VdIERldGVybWluZXMgaWYgd2FybmluZyBhbmQgZXJyb3JcbiAqICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBjb25zb2xlXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy51cGRhdGVET009dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgdXBkYXRlIHRoZSBET00gYWZ0ZXIgcHJvY2Vzc2luZyBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnVwZGF0ZVVSTHM9dHJ1ZV0gRGV0ZXJtaW5lcyBpZiB0aGUgcG9ueWZpbGwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgY29udmVydCByZWxhdGl2ZSB1cmwoKSBwYXRocyB0byBhYnNvbHV0ZSB1cmxzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMud2F0Y2g9ZmFsc2VdIERldGVybWluZXMgaWYgYSBNdXRhdGlvbk9ic2VydmVyIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIGJlIGNyZWF0ZWQgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIHBvbnlmaWxsIHdoZW4gYSA8bGluaz4gb3JcbiAqICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gRE9NIG11dGF0aW9uIGlzIG9ic2VydmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25CZWZvcmVTZW5kXSBDYWxsYmFjayBiZWZvcmUgWEhSIGlzIHNlbnQuIFBhc3Nlc1xuICogICAgICAgICAgICAgICAgICAgMSkgdGhlIFhIUiBvYmplY3QsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kIDMpIHRoZVxuICogICAgICAgICAgICAgICAgICAgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vblN1Y2Nlc3NdIENhbGxiYWNrIGFmdGVyIENTUyBkYXRhIGhhcyBiZWVuXG4gKiAgICAgICAgICAgICAgICAgICBjb2xsZWN0ZWQgZnJvbSBlYWNoIG5vZGUgYW5kIGJlZm9yZSBDU1MgY3VzdG9tIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgIGhhdmUgYmVlbiB0cmFuc2Zvcm1lZC4gQWxsb3dzIG1vZGlmeWluZyB0aGUgQ1NTIGRhdGEgYmVmb3JlXG4gKiAgICAgICAgICAgICAgICAgICBpdCBpcyB0cmFuc2Zvcm1lZCBieSByZXR1cm5pbmcgYW55IHN0cmluZyB2YWx1ZSAob3IgZmFsc2VcbiAqICAgICAgICAgICAgICAgICAgIHRvIHNraXApLiBQYXNzZXMgMSkgQ1NTIHRleHQsIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAzKSB0aGUgc291cmNlIFVSTCBhcyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbldhcm5pbmddIENhbGxiYWNrIGFmdGVyIGVhY2ggQ1NTIHBhcnNpbmcgd2FybmluZ1xuICogICAgICAgICAgICAgICAgICAgaGFzIG9jY3VycmVkLiBQYXNzZXMgMSkgYSB3YXJuaW5nIG1lc3NhZ2UgYXMgYW4gYXJndW1lbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkVycm9yXSBDYWxsYmFjayBhZnRlciBhIENTUyBwYXJzaW5nIGVycm9yIGhhc1xuICogICAgICAgICAgICAgICAgICAgb2NjdXJyZWQgb3IgYW4gWEhSIHJlcXVlc3QgaGFzIGZhaWxlZC4gUGFzc2VzIDEpIGFuIGVycm9yXG4gKiAgICAgICAgICAgICAgICAgICBtZXNzYWdlLCBhbmQgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCAzKSB4aHIsIGFuZCA0IHVybCBhc1xuICogICAgICAgICAgICAgICAgICAgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25Db21wbGV0ZV0gQ2FsbGJhY2sgYWZ0ZXIgYWxsIENTUyBoYXMgYmVlblxuICogICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLCBsZWdhY3ktY29tcGF0aWJsZSBDU1MgaGFzIGJlZW4gZ2VuZXJhdGVkLCBhbmRcbiAqICAgICAgICAgICAgICAgICAgIChvcHRpb25hbGx5KSB0aGUgRE9NIGhhcyBiZWVuIHVwZGF0ZWQuIFBhc3NlcyAxKSBhIENTU1xuICogICAgICAgICAgICAgICAgICAgc3RyaW5nIHdpdGggQ1NTIHZhcmlhYmxlIHZhbHVlcyByZXNvbHZlZCwgMikgYSByZWZlcmVuY2UgdG9cbiAqICAgICAgICAgICAgICAgICAgIHRoZSBhcHBlbmRlZCA8c3R5bGU+IG5vZGUsIDMpIGFuIG9iamVjdCBjb250YWluaW5nIGFsbFxuICogICAgICAgICAgICAgICAgICAgY3VzdG9tIHByb3BlcmllcyBuYW1lcyBhbmQgdmFsdWVzLCBhbmQgNCkgdGhlIHBvbnlmaWxsXG4gKiAgICAgICAgICAgICAgICAgICBleGVjdXRpb24gdGltZSBpbiBtaWxsaXNlY29uZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgIGNzc1ZhcnMoe1xuICogICAgIHJvb3RFbGVtZW50ICA6IGRvY3VtZW50LFxuICogICAgIHNoYWRvd0RPTSAgICA6IGZhbHNlLFxuICogICAgIGluY2x1ZGUgICAgICA6ICdzdHlsZSxsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLFxuICogICAgIGV4Y2x1ZGUgICAgICA6ICcnLFxuICogICAgIHZhcmlhYmxlcyAgICA6IHt9LFxuICogICAgIGZpeE5lc3RlZENhbGM6IHRydWUsXG4gKiAgICAgb25seUxlZ2FjeSAgIDogdHJ1ZSxcbiAqICAgICBvbmx5VmFycyAgICAgOiBmYWxzZSxcbiAqICAgICBwcmVzZXJ2ZSAgICAgOiBmYWxzZSxcbiAqICAgICBzaWxlbnQgICAgICAgOiBmYWxzZSxcbiAqICAgICB1cGRhdGVET00gICAgOiB0cnVlLFxuICogICAgIHVwZGF0ZVVSTHMgICA6IHRydWUsXG4gKiAgICAgd2F0Y2ggICAgICAgIDogZmFsc2UsXG4gKiAgICAgb25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKSB7fSxcbiAqICAgICBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7fSxcbiAqICAgICBvbldhcm5pbmcobWVzc2FnZSkge30sXG4gKiAgICAgb25FcnJvcihtZXNzYWdlLCBub2RlLCB4aHIsIHVybCkge30sXG4gKiAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBzdHlsZU5vZGUsIGNzc1ZhcmlhYmxlcywgYmVuY2htYXJrKSB7fVxuICogICB9KTtcbiAqL1xuZnVuY3Rpb24gY3NzVmFycyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzZXR0aW5ncyAgICA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdHlsZU5vZGVJZCA9IHBrZ05hbWU7XG5cbiAgICAvLyBBbHdheXMgZXhjbHVkZSBzdHlsZU5vZGVJZCBlbGVtZW50LCB3aGljaCBpcyB0aGUgZ2VuZXJhdGVkIDxzdHlsZT4gbm9kZVxuICAgIC8vIGNvbnRhaW5pbmcgcHJldmlvdXNseSB0cmFuc2Zvcm1lZCBDU1MuXG4gICAgc2V0dGluZ3MuZXhjbHVkZSA9IGAjJHtzdHlsZU5vZGVJZH1gICsgKHNldHRpbmdzLmV4Y2x1ZGUgPyBgLCR7c2V0dGluZ3MuZXhjbHVkZX1gIDogJycpO1xuXG4gICAgLy8gU3RvcmUgYmVuY2htYXJrIHN0YXJ0IHRpbWVcbiAgICBzZXR0aW5ncy5fYmVuY2htYXJrID0gIXNldHRpbmdzLl9iZW5jaG1hcmsgPyBnZXRUaW1lU3RhbXAoKSA6IHNldHRpbmdzLl9iZW5jaG1hcms7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihtZXNzYWdlLCBzb3VyY2VOb2RlLCB4aHIsIHVybCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2NvbnNvbGVNc2dQcmVmaXh9JHttZXNzYWdlfVxcbmAsIHNvdXJjZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGluZ3Mub25FcnJvcihtZXNzYWdlLCBzb3VyY2VOb2RlLCB4aHIsIHVybCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlV2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmICghc2V0dGluZ3Muc2lsZW50KSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtjb25zb2xlTXNnUHJlZml4fSR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLm9uV2FybmluZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyBFeGl0IGlmIG5vbi1icm93c2VyIGVudmlyb25tZW50IChlLmcuIE5vZGUpXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERpc2Nvbm5lY3QgZXhpc3RpbmcgTXV0YXRpb25PYnNlcnZlclxuICAgIGlmIChzZXR0aW5ncy53YXRjaCA9PT0gZmFsc2UgJiYgY3NzVmFyc09ic2VydmVyKSB7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIC8gcmVjcmVhdGUgTXV0YXRpb25PYnNlcnZlclxuICAgIGlmIChzZXR0aW5ncy53YXRjaCkge1xuICAgICAgICBhZGRNdXRhdGlvbk9ic2VydmVyKHNldHRpbmdzLCBzdHlsZU5vZGVJZCk7XG4gICAgICAgIGNzc1ZhcnNEZWJvdW5jZWQoc2V0dGluZ3MpO1xuICAgIH1cbiAgICAvLyBWZXJpZnkgcmVhZHlTdGF0ZSB0byBlbnN1cmUgYWxsIDxsaW5rPiBhbmQgPHN0eWxlPiBub2RlcyBhcmUgYXZhaWxhYmxlXG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGNvbnN0IGlzU2hhZG93RWxtID0gc2V0dGluZ3Muc2hhZG93RE9NIHx8IHNldHRpbmdzLnJvb3RFbGVtZW50LnNoYWRvd1Jvb3QgfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQuaG9zdDtcblxuICAgICAgICAvLyBOYXRpdmUgc3VwcG9ydFxuICAgICAgICBpZiAoaXNOYXRpdmVTdXBwb3J0ICYmIHNldHRpbmdzLm9ubHlMZWdhY3kpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHNldHRpbmdzLnZhcmlhYmxlc1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsbSA9IHNldHRpbmdzLnJvb3RFbGVtZW50Lmhvc3QgfHwgKHNldHRpbmdzLnJvb3RFbGVtZW50ID09PSBkb2N1bWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IHNldHRpbmdzLnJvb3RFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFNldCB2YXJpYWJsZXMgdXNpbmcgbmF0aXZlIG1ldGhvZHNcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncy52YXJpYWJsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgcHJvcGVydHkgbmFtZXMgdG8gbGVhZGluZyAnLS0nIHN0eWxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgID0gYC0tJHtrZXkucmVwbGFjZSgvXi0rLywgJycpfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2V0dGluZ3MudmFyaWFibGVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxtLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBQb255ZmlsbDogSGFuZGxlIHJvb3RFbGVtZW50IHNldCB0byBhIHNoYWRvdyBob3N0IG9yIHJvb3RcbiAgICAgICAgZWxzZSBpZiAoaXNTaGFkb3dFbG0gJiYgIWlzU2hhZG93RE9NUmVhZHkpIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgZG9jdW1lbnQtbGV2ZWwgQ1NTXG4gICAgICAgICAgICBnZXRDc3NEYXRhKHtcbiAgICAgICAgICAgICAgICByb290RWxlbWVudDogZGVmYXVsdHMucm9vdEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogZGVmYXVsdHMuaW5jbHVkZSxcbiAgICAgICAgICAgICAgICBleGNsdWRlOiBzZXR0aW5ncy5leGNsdWRlLFxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzUm9vdERlY2xzID0gKGNzc1RleHQubWF0Y2gocmVnZXguY3NzUm9vdFJ1bGVzKSB8fCBbXSkuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG9ubHkgbWF0Y2hpbmcgOnJvb3Qgey4uLn0gYmxvY2tzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NSb290RGVjbHMgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5LCBub2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIENTUywgd2hpY2ggc3RvcmVzIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZXMgZnJvbVxuICAgICAgICAgICAgICAgICAgICAvLyBjc3NUZXh0IGluIHZhcmlhYmxlU3RvcmUuIFRoaXMgc3RlcCBlbnN1cmVzIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFibGVTdG9yZSBjb250YWlucyBhbGwgZG9jdW1lbnQtbGV2ZWwgY3VzdG9tIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlcyBmb3Igc3Vic2VxdWVudCBwb255ZmlsbCBjYWxscy5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtQ3NzKGNzc1RleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaXNTaGFkb3dET01SZWFkeSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9ueWZpbGwgYWdhaW4gdG8gcHJvY2VzcyB0aGUgcm9vdEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhbGx5IHNwZWNpZmllZC4gVmFsdWVzIHN0b3JlZCBpbiB2YXJpYWJsZVN0b3JlIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgdXNlZCB0byB0cmFuc2Zvcm0gdmFsdWVzIGluIHNoYWRvdyBob3N0L3Jvb3QgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgIGNzc1ZhcnMoc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBvbnlmaWxsOiBQcm9jZXNzIENTU1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdldENzc0RhdGEoe1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtZW50OiBzZXR0aW5ncy5yb290RWxlbWVudCxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBzZXR0aW5ncy5pbmNsdWRlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IHNldHRpbmdzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmaWx0ZXIgZG9lcyBhIHRlc3Qgb24gZWFjaCBibG9jayBvZiBDU1MuIEFuIGFkZGl0aW9uYWxcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgaXMgdXNlZCBpbiB0aGUgcGFyc2VyIHRvIHJlbW92ZSBpbmRpdmlkdWFsXG4gICAgICAgICAgICAgICAgLy8gZGVjbGFyYXRpb25zLlxuICAgICAgICAgICAgICAgIGZpbHRlcjogc2V0dGluZ3Mub25seVZhcnMgPyByZWdleC5jc3NWYXJzIDogbnVsbCxcbiAgICAgICAgICAgICAgICBvbkJlZm9yZVNlbmQ6IHNldHRpbmdzLm9uQmVmb3JlU2VuZCxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbCA9IHNldHRpbmdzLm9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSByZXR1cm5WYWwgIT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHJldHVyblZhbCkgPT09IGZhbHNlID8gJycgOiByZXR1cm5WYWwgfHwgY3NzVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgYXR0cmlidXRlIHRvIGluZGljYXRlIG5vZGUgaGFzIGJlZW4gcHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWNzc3ZhcnMnLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCByZWxhdGl2ZSB1cmwoLi4uKSB2YWx1ZXMgdG8gYWJzb2x1dGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZVVSTHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc1VybHMgPSBjc3NUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIHRvIGF2b2lkIHByb2Nlc3NpbmcgQGltcG9ydCBpbiBjb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlZ2V4LmNzc0NvbW1lbnRzLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaCB1cmwoLi4uKSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0Y2gocmVnZXguY3NzVXJscykgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1VybHMuZm9yRWFjaChjc3NVcmwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFVybCA9IGNzc1VybC5yZXBsYWNlKHJlZ2V4LmNzc1VybHMsICckMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGdldEZ1bGxVcmwob2xkVXJsLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShjc3NVcmwsIGNzc1VybC5yZXBsYWNlKG9sZFVybCwgbmV3VXJsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NUZXh0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FcnJvcih4aHIsIG5vZGUsIHVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZVVybCA9IHhoci5yZXNwb25zZVVSTCB8fCBnZXRGdWxsVXJsKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1RleHQgID0geGhyLnN0YXR1c1RleHQgPyBgKCR7eGhyLnN0YXR1c1RleHR9KWAgOiAnVW5zcGVjaWZpZWQgRXJyb3InICsgKHhoci5zdGF0dXMgPT09IDAgPyAnIChwb3NzaWJseSBDT1JTIHJlbGF0ZWQpJyA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgICAgPSBgQ1NTIFhIUiBFcnJvcjogJHtyZXNwb25zZVVybH0gJHt4aHIuc3RhdHVzfSAke3N0YXR1c1RleHR9YDtcblxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvck1zZywgbm9kZSwgeGhyLCByZXNwb25zZVVybCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5LCBub2RlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzTWFya2VyICAgPSAvXFwvXFwqX19DU1NWQVJTUE9OWUZJTEwtKFxcZCspX19cXCpcXC8vZztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzU2V0dGluZ3MgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlICAgICAgOiBzZXR0aW5ncy5pbmNsdWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZSAgICAgIDogc2V0dGluZ3MuZXhjbHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyAgICA6IHNldHRpbmdzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeE5lc3RlZENhbGM6IHNldHRpbmdzLmZpeE5lc3RlZENhbGMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmx5VmFycyAgICAgOiBzZXR0aW5ncy5vbmx5VmFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlICAgICA6IHNldHRpbmdzLnByZXNlcnZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lsZW50ICAgICAgIDogc2V0dGluZ3Muc2lsZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVVJMcyAgIDogc2V0dGluZ3MudXBkYXRlVVJMc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVOb2RlICA9IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3N0eWxlTm9kZUlkfWApIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEYXRhICAgPSBzdHlsZU5vZGUuX19jc3NWYXJzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NhbWVEYXRhID0gcHJldkRhdGEuY3NzVGV4dCA9PT0gY3NzVGV4dCAmJiBwcmV2RGF0YS5zZXR0aW5ncyA9PT0gY3NzU2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0tleWZyYW1lc1dpdGhWYXJzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3NzVGV4dCB0byBleGlzdGluZyB0cmFuc2Zvcm1lZCBDU1NcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBzdHlsZU5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgJHtjb25zb2xlTXNnUHJlZml4fU5vIGNoYW5nZXNgLCBzdHlsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgZGF0YSBmb3IgY29tcGFyaXNvbiBvbiBzdWJzZXF1ZW50IGNhbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUuX19jc3NWYXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IGNzc1NldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25jYXRlbmF0ZSBjc3NBcnJheSBpdGVtcywgcmVwbGFjaW5nIHRob3NlIHRoYXQgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBjb250YWluIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWNsYXJhaW9uIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiB3aXRoIGEgdGVtcG9yYXJ5IG1hcmtlciAuIEFmdGVyIHRoZSBDU1MgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybWVkLCB0aGUgbWFya2VycyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaGluZyBjc3NBcnJheSBpdGVtLiBUaGlzIG9wdGltaXphdGlvbiBpcyBkb25lIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCBwcm9jZXNzaW5nIENTUyB0aGF0IHdpbGwgbm90IGNoYW5nZSBhcyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRzIG9mIHRoZSBwb255ZmlsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NBcnJheS5tYXAoKGNzcywgaSkgPT4gcmVnZXguY3NzVmFycy50ZXN0KGNzcykgPyBjc3MgOiBgLypfX0NTU1ZBUlNQT05ZRklMTC0ke2l9X18qL2ApLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSB0cmFuc2Zvcm1Dc3MoY3NzVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhOZXN0ZWRDYWxjOiBzZXR0aW5ncy5maXhOZXN0ZWRDYWxjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5VmFycyAgICAgOiBzZXR0aW5ncy5vbmx5VmFycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdCAgICAgIDogc2V0dGluZ3MudXBkYXRlRE9NLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZSAgICAgOiBzZXR0aW5ncy5wcmVzZXJ2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzICAgIDogc2V0dGluZ3MudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbldhcm5pbmcgICAgOiBoYW5kbGVXYXJuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNLZXlmcmFtZXNXaXRoVmFycyA9IHJlZ2V4LmNzc0tleWZyYW1lcy50ZXN0KGNzc1RleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBtYXJrZXJzIHdpdGggYXBwcm9wcmlhdGUgY3NzQXJyYXkgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoY3NzTWFya2VyLCAobWF0Y2gsIGdyb3VwMSkgPT4gY3NzQXJyYXlbZ3JvdXAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JUaHJvd24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgY3NzQXJyYXkgdG8gZGV0ZWN0IENTUyB0ZXh0IGFuZCBub2RlKHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uc2liaWxlIGZvciBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NBcnJheS5mb3JFYWNoKChjc3NUZXh0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gdHJhbnNmb3JtQ3NzKGNzc1RleHQsIHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTm9kZSA9IG5vZGVBcnJheVtpIC0gMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVyci5tZXNzYWdlLCBlcnJvck5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgZXZlbnQgdGhlIGVycm9yIHRocm93biB3YXMgbm90IGR1ZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybUNzcywgaGFuZGxlIHRoZSBvcmlnaW5hbCBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHNoYWRvdyBET01cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnNoYWRvd0RPTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5yb290RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGVzIG92ZXIgYWxsIGVsZW1lbnRzIGluIHJvb3RFbGVtZW50IGFuZCBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3NzVmFycyBvbiBlYWNoIHNoYWRvd1Jvb3QsIHBhc3NpbmcgZG9jdW1lbnQtbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzIGFzIG9wdGlvbnMudmFyaWFibGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGVsbTsgKGVsbSA9IGVsbXNbaV0pOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxtLnNoYWRvd1Jvb3QgJiYgZWxtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290RWxlbWVudDogZWxtLnNoYWRvd1Jvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgIDogdmFyaWFibGVTdG9yZS5kb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFycyhzaGFkb3dTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NhbWVEYXRhICYmIG5vZGVBcnJheSAmJiBub2RlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NOb2RlcyA9IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbZGF0YS1jc3N2YXJzXSxzdHlsZVtkYXRhLWNzc3ZhcnNdJykgfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWwrPVwic3R5bGVzaGVldFwiXSxzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdE5vZGUgPSBjc3NOb2RlcyA/IGNzc05vZGVzW2Nzc05vZGVzLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHBvbnlmaWxsIDxzdHlsZT4gYWZ0ZXIgbGFzdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZU5vZGUsIGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCBwb255ZmlsbCA8c3R5bGU+IGFmdGVyIGxhc3QgbGluay9zdHlsZSBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gc2V0dGluZ3Mucm9vdEVsZW1lbnQuaGVhZCB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5ib2R5IHx8IHNldHRpbmdzLnJvb3RFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXBkYXRlRE9NKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBzdHlsZU5vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOb2RlLnRleHRDb250ZW50ID0gY3NzVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXlmcmFtZXNXaXRoVmFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhLZXlmcmFtZXMoc2V0dGluZ3Mucm9vdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLnVwZGF0ZURPTSA/IHZhcmlhYmxlU3RvcmUuZG9tIDogdmFyaWFibGVTdG9yZS50ZW1wKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGltZVN0YW1wKCkgLSBzZXR0aW5ncy5fYmVuY2htYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVsYXkgZnVuY3Rpb24gdW50aWwgRE9NQ29udGVudExvYWRlZCBldmVudCBpcyBmaXJlZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBpbml0KGV2dCkge1xuICAgICAgICAgICAgY3NzVmFycyhvcHRpb25zKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogRGVib3VuY2VzIGNzc1ZhcnMoKSBjYWxsc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5nc1xuICovXG5mdW5jdGlvbiBjc3NWYXJzRGVib3VuY2VkKHNldHRpbmdzKSB7XG4gICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXR0aW5ncy5fYmVuY2htYXJrID0gbnVsbDtcbiAgICAgICAgY3NzVmFycyhzZXR0aW5ncyk7XG4gICAgfSwgMTAwKTtcbn1cblxuXG4vLyBGdW5jdGlvbnMgKFByaXZhdGUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLyoqXG4gKiBDcmVhdGVzIG11dGF0aW9uIG9ic2VydmVyIHRoYXQgZXhlY3V0ZXMgdGhlIHBvbnlmaWxsIHdoZW4gYSA8bGluaz4gb3IgPHN0eWxlPlxuICogRE9NIG11dGF0aW9uIGlzIG9ic2VydmVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5nc1xuICogQHBhcmFtIHtzdHJpbmd9IGlnbm9yZUlkXG4gKi9cbmZ1bmN0aW9uIGFkZE11dGF0aW9uT2JzZXJ2ZXIoc2V0dGluZ3MsIGlnbm9yZUlkKSB7XG4gICAgaWYgKCF3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNMaW5rICA9IG5vZGUgPT4gbm9kZS50YWdOYW1lID09PSAnTElOSycgJiYgKG5vZGUuZ2V0QXR0cmlidXRlKCdyZWwnKSB8fCAnJykuaW5kZXhPZignc3R5bGVzaGVldCcpICE9PSAtMTtcbiAgICBjb25zdCBpc1N0eWxlID0gbm9kZSA9PiBub2RlLnRhZ05hbWUgPT09ICdTVFlMRScgJiYgKGlnbm9yZUlkID8gbm9kZS5pZCAhPT0gaWdub3JlSWQgOiB0cnVlKTtcblxuICAgIGlmIChjc3NWYXJzT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3NzVmFyc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBzZXR0aW5ncy53YXRjaCA9IGRlZmF1bHRzLndhdGNoO1xuXG4gICAgY3NzVmFyc09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGhhc0NTU011dGF0aW9uID0gbXV0YXRpb25zLnNvbWUoKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXNDU1NNdXRhdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgICAgaXNDU1NNdXRhdGlvbiA9IGlzTGluayhtdXRhdGlvbi50YXJnZXQpIHx8IGlzU3R5bGUobXV0YXRpb24udGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkZWROb2RlcyAgID0gQXJyYXkuYXBwbHkobnVsbCwgbXV0YXRpb24uYWRkZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuYXBwbHkobnVsbCwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcblxuICAgICAgICAgICAgICAgIGlzQ1NTTXV0YXRpb24gPSBbXS5jb25jYXQoYWRkZWROb2RlcywgcmVtb3ZlZE5vZGVzKS5zb21lKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbGlkTGluayAgPSBpc0xpbmsobm9kZSkgJiYgIW5vZGUuZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTdHlsZSA9IGlzU3R5bGUobm9kZSkgJiYgcmVnZXguY3NzVmFycy50ZXN0KG5vZGUudGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNWYWxpZExpbmsgfHwgaXNWYWxpZFN0eWxlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlzQ1NTTXV0YXRpb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNDU1NNdXRhdGlvbikge1xuICAgICAgICAgICAgY3NzVmFyc0RlYm91bmNlZChzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNzc1ZhcnNPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzICAgICA6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICdocmVmJ10sXG4gICAgICAgIGNoaWxkTGlzdCAgICAgIDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZSAgICAgICAgOiB0cnVlXG4gICAgfSk7XG59XG5cbi8qKlxuICogRml4ZXMgaXNzdWUgd2l0aCBrZXlmcmFtZSBwcm9wZXJ0aWVzIHNldCB1c2luZyBDU1MgY3VzdG9tIHByb3BlcnR5IG5vdCBiZWluZ1xuICogYXBwbGllZCBwcm9wZXJseSBpbiBzb21lIGxlZ2FjeSAoSUUpIGFuZCBtb2Rlcm4gKFNhZmFyaSkgYnJvd3NlcnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGZpeEtleWZyYW1lcyhyb290RWxlbWVudCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbk5hbWVQcm9wID0gW1xuICAgICAgICAnYW5pbWF0aW9uLW5hbWUnLFxuICAgICAgICAnLW1vei1hbmltYXRpb24tbmFtZScsXG4gICAgICAgICctd2Via2l0LWFuaW1hdGlvbi1uYW1lJ1xuICAgIF0uZmlsdGVyKHByb3AgPT4gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVtwcm9wXSlbMF07XG5cbiAgICBpZiAoYW5pbWF0aW9uTmFtZVByb3ApIHtcbiAgICAgICAgY29uc3QgYWxsTm9kZXMgICAgICA9IHJvb3RFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XG4gICAgICAgIGNvbnN0IGtleWZyYW1lTm9kZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbmFtZU1hcmtlciAgICA9ICdfX0NTU1ZBUlNQT05ZRklMTC1LRVlGUkFNRVNfXyc7XG5cbiAgICAgICAgLy8gTW9kaWZ5IGFuaW1hdGlvbiBuYW1lXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhbGxOb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSAgICAgICAgICA9IGFsbE5vZGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uTmFtZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSlbYW5pbWF0aW9uTmFtZVByb3BdO1xuXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVthbmltYXRpb25OYW1lUHJvcF0gKz0gbmFtZU1hcmtlcjtcbiAgICAgICAgICAgICAgICBrZXlmcmFtZU5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3JjZSByZWZsb3dcbiAgICAgICAgdm9pZCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAvLyBSZXN0b3JlIGFuaW1hdGlvbiBuYW1lXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlmcmFtZU5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlU3R5bGUgPSBrZXlmcmFtZU5vZGVzW2ldLnN0eWxlO1xuXG4gICAgICAgICAgICBub2RlU3R5bGVbYW5pbWF0aW9uTmFtZVByb3BdID0gbm9kZVN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXS5yZXBsYWNlKG5hbWVNYXJrZXIsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGZ1bGx5IHF1YWxpZmllZCBVUkwgZnJvbSByZWxhdGl2ZSBVUkwgYW5kIChvcHRpb25hbCkgYmFzZSBVUkxcbiAqXG4gKiBAcGFyYW0gICB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSAgIHtzdHJpbmd9IFtiYXNlPWxvY2F0aW9uLmhyZWZdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGdWxsVXJsKHVybCwgYmFzZSA9IGxvY2F0aW9uLmhyZWYpIHtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcbiAgICBjb25zdCBiID0gZC5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgY29uc3QgYSA9IGQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgZC5oZWFkLmFwcGVuZENoaWxkKGIpO1xuICAgIGQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBiLmhyZWYgPSBiYXNlO1xuICAgIGEuaHJlZiA9IHVybDtcblxuICAgIHJldHVybiBhLmhyZWY7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHRpbWUgc3RhbXAgaW4gbWlsbGlzZWNvbmRzXG4gKlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZVN0YW1wKCkge1xuICAgIHJldHVybiBpc0Jyb3dzZXIgJiYgKHdpbmRvdy5wZXJmb3JtYW5jZSB8fCB7fSkubm93ID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cblxuLy8gRXhwb3J0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgY3NzVmFycztcbiIsIi8qISBucG0uaW0vb2JqZWN0LWZpdC1pbWFnZXMgMy4yLjQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIE9GSSA9ICdiZnJlZC1pdDpvYmplY3QtZml0LWltYWdlcyc7XG52YXIgcHJvcFJlZ2V4ID0gLyhvYmplY3QtZml0fG9iamVjdC1wb3NpdGlvbilcXHMqOlxccyooWy0uXFx3XFxzJV0rKS9nO1xudmFyIHRlc3RJbWcgPSB0eXBlb2YgSW1hZ2UgPT09ICd1bmRlZmluZWQnID8ge3N0eWxlOiB7J29iamVjdC1wb3NpdGlvbic6IDF9fSA6IG5ldyBJbWFnZSgpO1xudmFyIHN1cHBvcnRzT2JqZWN0Rml0ID0gJ29iamVjdC1maXQnIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9ICdvYmplY3QtcG9zaXRpb24nIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPRkkgPSAnYmFja2dyb3VuZC1zaXplJyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzQ3VycmVudFNyYyA9IHR5cGVvZiB0ZXN0SW1nLmN1cnJlbnRTcmMgPT09ICdzdHJpbmcnO1xudmFyIG5hdGl2ZUdldEF0dHJpYnV0ZSA9IHRlc3RJbWcuZ2V0QXR0cmlidXRlO1xudmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHRlc3RJbWcuc2V0QXR0cmlidXRlO1xudmFyIGF1dG9Nb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlcih3LCBoKSB7XG5cdHJldHVybiAoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9J1wiICsgdyArIFwiJyBoZWlnaHQ9J1wiICsgaCArIFwiJyUzRSUzQy9zdmclM0VcIik7XG59XG5cbmZ1bmN0aW9uIHBvbHlmaWxsQ3VycmVudFNyYyhlbCkge1xuXHRpZiAoZWwuc3Jjc2V0ICYmICFzdXBwb3J0c0N1cnJlbnRTcmMgJiYgd2luZG93LnBpY3R1cmVmaWxsKSB7XG5cdFx0dmFyIHBmID0gd2luZG93LnBpY3R1cmVmaWxsLl87XG5cdFx0Ly8gcGFyc2Ugc3Jjc2V0IHdpdGggcGljdHVyZWZpbGwgd2hlcmUgY3VycmVudFNyYyBpc24ndCBhdmFpbGFibGVcblx0XHRpZiAoIWVsW3BmLm5zXSB8fCAhZWxbcGYubnNdLmV2YWxlZCkge1xuXHRcdFx0Ly8gZm9yY2Ugc3luY2hyb25vdXMgc3Jjc2V0IHBhcnNpbmdcblx0XHRcdHBmLmZpbGxJbWcoZWwsIHtyZXNlbGVjdDogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdGlmICghZWxbcGYubnNdLmN1clNyYykge1xuXHRcdFx0Ly8gZm9yY2UgcGljdHVyZWZpbGwgdG8gcGFyc2Ugc3Jjc2V0XG5cdFx0XHRlbFtwZi5uc10uc3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHRwZi5maWxsSW1nKGVsLCB7cmVzZWxlY3Q6IHRydWV9KTtcblx0XHR9XG5cblx0XHQvLyByZXRyaWV2ZSBwYXJzZWQgY3VycmVudFNyYywgaWYgYW55XG5cdFx0ZWwuY3VycmVudFNyYyA9IGVsW3BmLm5zXS5jdXJTcmMgfHwgZWwuc3JjO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpLmZvbnRGYW1pbHk7XG5cdHZhciBwYXJzZWQ7XG5cdHZhciBwcm9wcyA9IHt9O1xuXHR3aGlsZSAoKHBhcnNlZCA9IHByb3BSZWdleC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRwcm9wc1twYXJzZWRbMV1dID0gcGFyc2VkWzJdO1xuXHR9XG5cdHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXIoaW1nLCB3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vIERlZmF1bHQ6IGZpbGwgd2lkdGgsIG5vIGhlaWdodFxuXHR2YXIgcGxhY2Vob2xkZXIgPSBjcmVhdGVQbGFjZWhvbGRlcih3aWR0aCB8fCAxLCBoZWlnaHQgfHwgMCk7XG5cblx0Ly8gT25seSBzZXQgcGxhY2Vob2xkZXIgaWYgaXQncyBkaWZmZXJlbnRcblx0aWYgKG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycpICE9PSBwbGFjZWhvbGRlcikge1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycsIHBsYWNlaG9sZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvbkltYWdlUmVhZHkoaW1nLCBjYWxsYmFjaykge1xuXHQvLyBuYXR1cmFsV2lkdGggaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgaW1hZ2UgaGVhZGVycyBhcmUgbG9hZGVkLFxuXHQvLyB0aGlzIGxvb3Agd2lsbCBwb2xsIGl0IGV2ZXJ5IDEwMG1zLlxuXHRpZiAoaW1nLm5hdHVyYWxXaWR0aCkge1xuXHRcdGNhbGxiYWNrKGltZyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChvbkltYWdlUmVhZHksIDEwMCwgaW1nLCBjYWxsYmFjayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZml4T25lKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldFN0eWxlKGVsKTtcblx0dmFyIG9maSA9IGVsW09GSV07XG5cdHN0eWxlWydvYmplY3QtZml0J10gPSBzdHlsZVsnb2JqZWN0LWZpdCddIHx8ICdmaWxsJzsgLy8gZGVmYXVsdCB2YWx1ZVxuXG5cdC8vIEF2b2lkIHJ1bm5pbmcgd2hlcmUgdW5uZWNlc3NhcnksIHVubGVzcyBPRkkgaGFkIGFscmVhZHkgZG9uZSBpdHMgZGVlZFxuXHRpZiAoIW9maS5pbWcpIHtcblx0XHQvLyBmaWxsIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHNvIG5vIGFjdGlvbiBpcyBuZWNlc3Nhcnlcblx0XHRpZiAoc3R5bGVbJ29iamVjdC1maXQnXSA9PT0gJ2ZpbGwnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2hlcmUgb2JqZWN0LWZpdCBpcyBzdXBwb3J0ZWQgYW5kIG9iamVjdC1wb3NpdGlvbiBpc24ndCAoU2FmYXJpIDwgMTApXG5cdFx0aWYgKFxuXHRcdFx0IW9maS5za2lwVGVzdCAmJiAvLyB1bmxlc3MgdXNlciB3YW50cyB0byBhcHBseSByZWdhcmRsZXNzIG9mIGJyb3dzZXIgc3VwcG9ydFxuXHRcdFx0c3VwcG9ydHNPYmplY3RGaXQgJiYgLy8gaWYgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG9iamVjdC1maXRcblx0XHRcdCFzdHlsZVsnb2JqZWN0LXBvc2l0aW9uJ10gLy8gdW5sZXNzIG9iamVjdC1wb3NpdGlvbiBpcyB1c2VkXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Ly8ga2VlcCBhIGNsb25lIGluIG1lbW9yeSB3aGlsZSByZXNldHRpbmcgdGhlIG9yaWdpbmFsIHRvIGEgYmxhbmtcblx0aWYgKCFvZmkuaW1nKSB7XG5cdFx0b2ZpLmltZyA9IG5ldyBJbWFnZShlbC53aWR0aCwgZWwuaGVpZ2h0KTtcblx0XHRvZmkuaW1nLnNyY3NldCA9IG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiKSB8fCBlbC5zcmNzZXQ7XG5cdFx0b2ZpLmltZy5zcmMgPSBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNcIikgfHwgZWwuc3JjO1xuXG5cdFx0Ly8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlIGNhbGxzXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzL2lzc3Vlcy81M1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY1wiLCBlbC5zcmMpO1xuXHRcdGlmIChlbC5zcmNzZXQpIHtcblx0XHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiLCBlbC5zcmNzZXQpO1xuXHRcdH1cblxuXHRcdHNldFBsYWNlaG9sZGVyKGVsLCBlbC5uYXR1cmFsV2lkdGggfHwgZWwud2lkdGgsIGVsLm5hdHVyYWxIZWlnaHQgfHwgZWwuaGVpZ2h0KTtcblxuXHRcdC8vIHJlbW92ZSBzcmNzZXQgYmVjYXVzZSBpdCBvdmVycmlkZXMgc3JjXG5cdFx0aWYgKGVsLnNyY3NldCkge1xuXHRcdFx0ZWwuc3Jjc2V0ID0gJyc7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRrZWVwU3JjVXNhYmxlKGVsKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ2h0dHBzOi8vYml0Lmx5L29maS1vbGQtYnJvd3NlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBvbHlmaWxsQ3VycmVudFNyYyhvZmkuaW1nKTtcblxuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIgKyAoKG9maS5pbWcuY3VycmVudFNyYyB8fCBvZmkuaW1nLnNyYykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKSArIFwiXFxcIilcIjtcblx0ZWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gc3R5bGVbJ29iamVjdC1wb3NpdGlvbiddIHx8ICdjZW50ZXInO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRPcmlnaW4gPSAnY29udGVudC1ib3gnO1xuXG5cdGlmICgvc2NhbGUtZG93bi8udGVzdChzdHlsZVsnb2JqZWN0LWZpdCddKSkge1xuXHRcdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAob2ZpLmltZy5uYXR1cmFsV2lkdGggPiBlbC53aWR0aCB8fCBvZmkuaW1nLm5hdHVyYWxIZWlnaHQgPiBlbC5oZWlnaHQpIHtcblx0XHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdhdXRvJztcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHN0eWxlWydvYmplY3QtZml0J10ucmVwbGFjZSgnbm9uZScsICdhdXRvJykucmVwbGFjZSgnZmlsbCcsICcxMDAlIDEwMCUnKTtcblx0fVxuXG5cdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoaW1nKSB7XG5cdFx0c2V0UGxhY2Vob2xkZXIoZWwsIGltZy5uYXR1cmFsV2lkdGgsIGltZy5uYXR1cmFsSGVpZ2h0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBTcmNVc2FibGUoZWwpIHtcblx0dmFyIGRlc2NyaXB0b3JzID0ge1xuXHRcdGdldDogZnVuY3Rpb24gZ2V0KHByb3ApIHtcblx0XHRcdHJldHVybiBlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlLCBwcm9wKSB7XG5cdFx0XHRlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXSA9IHZhbHVlO1xuXHRcdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIChcImRhdGEtb2ZpLVwiICsgcHJvcCksIHZhbHVlKTsgLy8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlXG5cdFx0XHRmaXhPbmUoZWwpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnc3JjJywgZGVzY3JpcHRvcnMpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdjdXJyZW50U3JjJywge1xuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVzY3JpcHRvcnMuZ2V0KCdjdXJyZW50U3JjJyk7IH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ3NyY3NldCcsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLmdldCgnc3Jjc2V0Jyk7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoc3MpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLnNldChzcywgJ3NyY3NldCcpOyB9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoaWphY2tBdHRyaWJ1dGVzKCkge1xuXHRmdW5jdGlvbiBnZXRPZmlJbWFnZU1heWJlKGVsLCBuYW1lKSB7XG5cdFx0cmV0dXJuIGVsW09GSV0gJiYgZWxbT0ZJXS5pbWcgJiYgKG5hbWUgPT09ICdzcmMnIHx8IG5hbWUgPT09ICdzcmNzZXQnKSA/IGVsW09GSV0uaW1nIDogZWw7XG5cdH1cblx0aWYgKCFzdXBwb3J0c09iamVjdFBvc2l0aW9uKSB7XG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRcdHJldHVybiBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChnZXRPZmlJbWFnZU1heWJlKHRoaXMsIG5hbWUpLCBuYW1lKTtcblx0XHR9O1xuXG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZ2V0T2ZpSW1hZ2VNYXliZSh0aGlzLCBuYW1lKSwgbmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaXgoaW1ncywgb3B0cykge1xuXHR2YXIgc3RhcnRBdXRvTW9kZSA9ICFhdXRvTW9kZUVuYWJsZWQgJiYgIWltZ3M7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRpbWdzID0gaW1ncyB8fCAnaW1nJztcblxuXHRpZiAoKHN1cHBvcnRzT2JqZWN0UG9zaXRpb24gJiYgIW9wdHMuc2tpcFRlc3QpIHx8ICFzdXBwb3J0c09GSSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIHVzZSBpbWdzIGFzIGEgc2VsZWN0b3Igb3IganVzdCBzZWxlY3QgYWxsIGltYWdlc1xuXHRpZiAoaW1ncyA9PT0gJ2ltZycpIHtcblx0XHRpbWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbWdzID09PSAnc3RyaW5nJykge1xuXHRcdGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGltZ3MpO1xuXHR9IGVsc2UgaWYgKCEoJ2xlbmd0aCcgaW4gaW1ncykpIHtcblx0XHRpbWdzID0gW2ltZ3NdO1xuXHR9XG5cblx0Ly8gYXBwbHkgZml4IHRvIGFsbFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpbWdzW2ldW09GSV0gPSBpbWdzW2ldW09GSV0gfHwge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9O1xuXHRcdGZpeE9uZShpbWdzW2ldKTtcblx0fVxuXG5cdGlmIChzdGFydEF1dG9Nb2RlKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRmaXgoZS50YXJnZXQsIHtcblx0XHRcdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCB0cnVlKTtcblx0XHRhdXRvTW9kZUVuYWJsZWQgPSB0cnVlO1xuXHRcdGltZ3MgPSAnaW1nJzsgLy8gcmVzZXQgdG8gYSBnZW5lcmljIHNlbGVjdG9yIGZvciB3YXRjaE1RXG5cdH1cblxuXHQvLyBpZiByZXF1ZXN0ZWQsIHdhdGNoIG1lZGlhIHF1ZXJpZXMgZm9yIG9iamVjdC1maXQgY2hhbmdlXG5cdGlmIChvcHRzLndhdGNoTVEpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4LmJpbmQobnVsbCwgaW1ncywge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9KSk7XG5cdH1cbn1cblxuZml4LnN1cHBvcnRzT2JqZWN0Rml0ID0gc3VwcG9ydHNPYmplY3RGaXQ7XG5maXguc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9IHN1cHBvcnRzT2JqZWN0UG9zaXRpb247XG5cbmhpamFja0F0dHJpYnV0ZXMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaXg7XG4iLCIvKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIHBvbHlmaWxsXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIC8vIGFsaWFzZXNcbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuXG4gICAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcbiAgICBpZiAoXG4gICAgICAnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXG4gICAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsc1xuICAgIHZhciBFbGVtZW50ID0gdy5IVE1MRWxlbWVudCB8fCB3LkVsZW1lbnQ7XG4gICAgdmFyIFNDUk9MTF9USU1FID0gNDY4O1xuXG4gICAgLy8gb2JqZWN0IGdhdGhlcmluZyBvcmlnaW5hbCBzY3JvbGwgbWV0aG9kc1xuICAgIHZhciBvcmlnaW5hbCA9IHtcbiAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgIHNjcm9sbEJ5OiB3LnNjcm9sbEJ5LFxuICAgICAgZWxlbWVudFNjcm9sbDogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIHx8IHNjcm9sbEVsZW1lbnQsXG4gICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICB9O1xuXG4gICAgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcbiAgICB2YXIgbm93ID1cbiAgICAgIHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgICAgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpXG4gICAgICAgIDogRGF0ZS5ub3c7XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSB0aGUgY3VycmVudCBicm93c2VyIGlzIG1hZGUgYnkgTWljcm9zb2Z0XG4gICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNNaWNyb3NvZnRCcm93c2VyKHVzZXJBZ2VudCkge1xuICAgICAgdmFyIHVzZXJBZ2VudFBhdHRlcm5zID0gWydNU0lFICcsICdUcmlkZW50LycsICdFZGdlLyddO1xuXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcbiAgICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKi9cbiAgICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcblxuICAgIC8qKlxuICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBzY3JvbGxFbGVtZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgcmVzdWx0IG9mIGFwcGx5aW5nIGVhc2UgbWF0aCBmdW5jdGlvbiB0byBhIG51bWJlclxuICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50J1xuICAgICAgKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ29iamVjdCcgJiYgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGFuIG9iamVjdCBhbmQgYmVoYXZpb3IgaXMgc21vb3RoXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhyb3cgZXJyb3Igd2hlbiBiZWhhdmlvciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgJyArXG4gICAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgK1xuICAgICAgICAgICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcbiAgICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xuICAgICAgaWYgKGF4aXMgPT09ICdZJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBhIHNjcm9sbGFibGUgb3ZlcmZsb3cgcHJvcGVydHkgaW4gdGhlIGF4aXNcbiAgICAgKiBAbWV0aG9kIGNhbk92ZXJmbG93XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FuT3ZlcmZsb3coZWwsIGF4aXMpIHtcbiAgICAgIHZhciBvdmVyZmxvd1ZhbHVlID0gdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnb3ZlcmZsb3cnICsgYXhpc107XG5cbiAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICogQG1ldGhvZCBpc1Njcm9sbGFibGVcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVZID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWScpICYmIGNhbk92ZXJmbG93KGVsLCAnWScpO1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVggPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdYJykgJiYgY2FuT3ZlcmZsb3coZWwsICdYJyk7XG5cbiAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcbiAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgKiBAbWV0aG9kIHN0ZXBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RlcChjb250ZXh0KSB7XG4gICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgdmFyIGVsYXBzZWQgPSAodGltZSAtIGNvbnRleHQuc3RhcnRUaW1lKSAvIFNDUk9MTF9USU1FO1xuXG4gICAgICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cbiAgICAgIC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcbiAgICAgIHZhbHVlID0gZWFzZShlbGFwc2VkKTtcblxuICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgIGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC55IC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG5cbiAgICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpO1xuXG4gICAgICAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuICAgICAgaWYgKGN1cnJlbnRYICE9PSBjb250ZXh0LnggfHwgY3VycmVudFkgIT09IGNvbnRleHQueSkge1xuICAgICAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwLmJpbmQodywgY29udGV4dCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAqIEBtZXRob2Qgc21vb3RoU2Nyb2xsXG4gICAgICogQHBhcmFtIHtPYmplY3R8Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWwsIHgsIHkpIHtcbiAgICAgIHZhciBzY3JvbGxhYmxlO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBzdGFydFk7XG4gICAgICB2YXIgbWV0aG9kO1xuICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcbiAgICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcbiAgICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XG4gICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSBlbDtcbiAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgbG9vcGluZyBvdmVyIGEgZnJhbWVcbiAgICAgIHN0ZXAoe1xuICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAvLyB3LnNjcm9sbCBhbmQgdy5zY3JvbGxUb1xuICAgIHcuc2Nyb2xsID0gdy5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gdy5zY3JvbGxCeVxuICAgIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogMCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxuICAgICAgICB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgYW5kIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvXG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHNbMF0ubGVmdDtcbiAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wO1xuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LFxuICAgICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwoe1xuICAgICAgICBsZWZ0OiB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICBiZWhhdmlvcjogYXJndW1lbnRzWzBdLmJlaGF2aW9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxJbnRvVmlldy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgdmFyIHBhcmVudFJlY3RzID0gc2Nyb2xsYWJsZVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBjbGllbnRSZWN0cyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW5zaWRlIHBhcmVudFxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxMZWZ0ICsgY2xpZW50UmVjdHMubGVmdCAtIHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3BcbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxuICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcbiAgICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBjb21tb25qc1xuICAgIG1vZHVsZS5leHBvcnRzID0geyBwb2x5ZmlsbDogcG9seWZpbGwgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnbG9iYWxcbiAgICBwb2x5ZmlsbCgpO1xuICB9XG5cbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9