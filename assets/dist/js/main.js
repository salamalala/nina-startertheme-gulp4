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



 // import burgerAnimation from './utils/burgerAnimation';

document.addEventListener('DOMContentLoaded', function () {
  // fallback for ie and edge:
  Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_2__["default"])();
  object_fit_images__WEBPACK_IMPORTED_MODULE_1___default()(); //fallback safari

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

module.exports = __webpack_require__(/*! /Users/ninaregli/Local Sites/ninastartertheme/app/public/wp-content/themes/nina-startertheme/assets/src/js/main.js */"./assets/src/js/main.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ2V0LWNzcy1kYXRhL2Rpc3QvZ2V0LWNzcy1kYXRhLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhbGFuY2VkLW1hdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UtY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RyaW5naWZ5LWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3dhbGstY3NzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdHJhbnNmb3JtLWNzcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtZml0LWltYWdlcy9kaXN0L29maS5jb21tb24tanMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjc3NWYXJzIiwib2JqZWN0Rml0SW1hZ2VzIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJnZXRVcmxzIiwidXJscyIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXR0aW5ncyIsIm1pbWVUeXBlIiwib25CZWZvcmVTZW5kIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwib25Db21wbGV0ZSIsInVybEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwidXJsUXVldWUiLCJhcHBseSIsIm1hcCIsIngiLCJpc1ZhbGlkQ3NzIiwiY3NzVGV4dCIsImlzSFRNTCIsInRyaW0iLCJjaGFyQXQiLCJ4aHIiLCJ1cmxJbmRleCIsInJlc3BvbnNlVGV4dCIsInJldHVyblZhbCIsImluZGV4T2YiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsInVybCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJocmVmIiwiU3RyaW5nIiwiaXNJRWx0ZTkiLCJCb29sZWFuIiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzSUVsdGU5Q09SUyIsImhvc3QiLCJzcGxpdCIsImxvY2F0aW9uIiwiaXNTYW1lUHJvdG9jb2wiLCJwcm90b2NvbCIsInhkciIsIlhEb21haW5SZXF1ZXN0Iiwib3BlbiIsInRpbWVvdXQiLCJvbnByb2dyZXNzIiwib250aW1lb3V0Iiwib25sb2FkIiwib25lcnJvciIsImVyciIsInNldFRpbWVvdXQiLCJzZW5kIiwiY29uc29sZSIsIndhcm4iLCJjb25jYXQiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZ2V0Q3NzRGF0YSIsInJlZ2V4IiwiY3NzQ29tbWVudHMiLCJjc3NJbXBvcnRzIiwicm9vdEVsZW1lbnQiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImZpbHRlciIsInVzZUNTU09NIiwic291cmNlTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZSIsIm1hdGNoZXNTZWxlY3RvciIsImNzc0FycmF5IiwiaGFuZGxlQ29tcGxldGUiLCJpc0NvbXBsZXRlIiwiam9pbiIsImhhbmRsZVN1Y2Nlc3MiLCJjc3NJbmRleCIsInNvdXJjZVVybCIsInJlc29sdmVJbXBvcnRzIiwicmVzb2x2ZWRDc3NUZXh0IiwiZXJyb3JEYXRhIiwiZGF0YSIsInRlc3QiLCJwYXJzZUltcG9ydERhdGEiLCJiYXNlVXJsIiwiaWdub3JlUnVsZXMiLCJpbXBvcnREYXRhIiwicnVsZXMiLCJyZXBsYWNlIiwibWF0Y2giLCJydWxlIiwiYWJzb2x1dGVVcmxzIiwiZ2V0RnVsbFVybCIsImFic29sdXRlUnVsZXMiLCJvbGRVcmwiLCJuZXdVcmwiLCJjYWxsYmFja0ZuIiwiX19lcnJvckRhdGEiLCJfX2Vycm9yUnVsZXMiLCJyZXNwb25zZUltcG9ydERhdGEiLCJwdXNoIiwicmVzcG9uc2VBcnJheSIsImltcG9ydFRleHQiLCJsaW5rSHJlZiIsImdldEF0dHJpYnV0ZSIsImxpbmtSZWwiLCJpc0xpbmsiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNTdHlsZSIsInRleHRDb250ZW50Iiwic2hlZXQiLCJjc3NSdWxlcyIsImJhc2UiLCJkIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJiIiwiYSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJlbG0iLCJzZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwiYmFsYW5jZWQiLCJzdHIiLCJSZWdFeHAiLCJtYXliZU1hdGNoIiwiciIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJwcmUiLCJzbGljZSIsInBvc3QiLCJyZWciLCJtIiwiYmVncyIsImJlZyIsImxlZnQiLCJyaWdodCIsInJlc3VsdCIsImFpIiwiYmkiLCJwb3AiLCJwYXJzZUNzcyIsImNzcyIsImRlZmF1bHRzIiwib25seVZhcnMiLCJyZW1vdmVDb21tZW50cyIsIl9leHRlbmRzIiwiZXJyb3JzIiwiZXJyb3IiLCJtc2ciLCJFcnJvciIsInJlIiwiZXhlYyIsImNsb3NlIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiLCJ0eXBlIiwiY29tbWVudHMiLCJjbW50cyIsImMiLCJzIiwiZGVjbGFyYXRpb24iLCJjb21tZW50X3JlZ2V4cCIsInByb3AiLCJ2YWwiLCJyZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiZGVjbGFyYXRpb25zIiwiZGVjbHMiLCJrZXlmcmFtZSIsInZhbHMiLCJ2YWx1ZXMiLCJhdF9rZXlmcmFtZXMiLCJ2ZW5kb3IiLCJuYW1lIiwiZnJhbWUiLCJmcmFtZXMiLCJrZXlmcmFtZXMiLCJhdF9wYWdlIiwic2VsIiwic2VsZWN0b3JzIiwiYXRfZm9udGZhY2UiLCJhdF9zdXBwb3J0cyIsInN1cHBvcnRzIiwiYXRfaG9zdCIsImF0X21lZGlhIiwibWVkaWEiLCJhdF9jdXN0b21fbSIsImF0X2RvY3VtZW50IiwiYXRfeCIsImF0X3J1bGUiLCJoYXNWYXJGdW5jIiwic29tZSIsImRlY2wiLCJhcnIiLCJvYmoiLCJiYWxhbmNlZE1hdGNoIiwiaGFzVmFyRGVjbCIsImNvcmUiLCJzdHlsZXNoZWV0Iiwic3RyaW5naWZ5Q3NzIiwidHJlZSIsImRlbGltIiwiY2IiLCJyZW5kZXJNZXRob2RzIiwiY2hhcnNldCIsInZpc2l0IiwiaW1wb3J0IiwibmFtZXNwYWNlIiwicGFnZSIsIm5vZGVzIiwiYnVmIiwibiIsInR4dCIsIndhbGtDc3MiLCJmbiIsIlZBUl9QUk9QX0lERU5USUZJRVIiLCJWQVJfRlVOQ19JREVOVElGSUVSIiwidmFyaWFibGVTdG9yZSIsImRvbSIsInRlbXAiLCJ1c2VyIiwidHJhbnNmb3JtVmFycyIsImZpeE5lc3RlZENhbGMiLCJwZXJzaXN0IiwicHJlc2VydmUiLCJ2YXJpYWJsZXMiLCJvbldhcm5pbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjc3NUcmVlIiwidmFyTmFtZUluZGljZXMiLCJzcGxpY2UiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwibmV3UnVsZSIsInJlc29sdmVkVmFsdWUiLCJyZXNvbHZlVmFsdWUiLCJyZUNhbGNFeHAiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwicm9vdENhbGMiLCJuZXN0ZWRDYWxjIiwiX19yZWN1cnNpdmVGYWxsYmFjayIsInZhbHVlRGF0YSIsInJlc29sdmVGdW5jIiwiZmFsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGxhY2VtZW50IiwidW5yZXNvbHZlZEZhbGxiYWNrIiwiaXNFbXB0eVZhckZ1bmMiLCJpc0Jyb3dzZXIiLCJpc05hdGl2ZVN1cHBvcnQiLCJDU1MiLCJjb25zb2xlTXNnUHJlZml4Iiwic2hhZG93RE9NIiwib25seUxlZ2FjeSIsInNpbGVudCIsInVwZGF0ZURPTSIsInVwZGF0ZVVSTHMiLCJ3YXRjaCIsImNzc0tleWZyYW1lcyIsImNzc1Jvb3RSdWxlcyIsImNzc1VybHMiLCJjc3NWYXJzT2JzZXJ2ZXIiLCJkZWJvdW5jZVRpbWVyIiwiaXNTaGFkb3dET01SZWFkeSIsInN0eWxlTm9kZUlkIiwicGtnTmFtZSIsIl9iZW5jaG1hcmsiLCJnZXRUaW1lU3RhbXAiLCJoYW5kbGVFcnJvciIsIm1lc3NhZ2UiLCJzb3VyY2VOb2RlIiwiaGFuZGxlV2FybmluZyIsImRpc2Nvbm5lY3QiLCJhZGRNdXRhdGlvbk9ic2VydmVyIiwiY3NzVmFyc0RlYm91bmNlZCIsImlzU2hhZG93RWxtIiwic2hhZG93Um9vdCIsInRhcmdldEVsbSIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjc3NSb290RGVjbHMiLCJub2RlQXJyYXkiLCJ0cmFuc2Zvcm1Dc3MiLCJjc3NVcmwiLCJyZXNwb25zZVVybCIsInJlc3BvbnNlVVJMIiwic3RhdHVzVGV4dCIsImVycm9yTXNnIiwiY3NzTWFya2VyIiwiY3NzU2V0dGluZ3MiLCJzdHlsZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicHJldkRhdGEiLCJfX2Nzc1ZhcnMiLCJpc1NhbWVEYXRhIiwiaGFzS2V5ZnJhbWVzV2l0aFZhcnMiLCJpbmZvIiwiZ3JvdXAxIiwiZXJyb3JUaHJvd24iLCJlcnJvck5vZGUiLCJlbG1zIiwic2hhZG93U2V0dGluZ3MiLCJjc3NOb2RlcyIsImxhc3ROb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwidGFyZ2V0Tm9kZSIsImZpeEtleWZyYW1lcyIsImluaXQiLCJldnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiaWdub3JlSWQiLCJNdXRhdGlvbk9ic2VydmVyIiwidGFnTmFtZSIsImlkIiwibXV0YXRpb25zIiwiaGFzQ1NTTXV0YXRpb24iLCJtdXRhdGlvbiIsImlzQ1NTTXV0YXRpb24iLCJ0YXJnZXQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiaXNWYWxpZExpbmsiLCJkaXNhYmxlZCIsImlzVmFsaWRTdHlsZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlRmlsdGVyIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImFuaW1hdGlvbk5hbWVQcm9wIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImFsbE5vZGVzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJrZXlmcmFtZU5vZGVzIiwibmFtZU1hcmtlciIsImxlbiIsImFuaW1hdGlvbk5hbWUiLCJvZmZzZXRIZWlnaHQiLCJub2RlU3R5bGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiT0ZJIiwicHJvcFJlZ2V4IiwidGVzdEltZyIsIkltYWdlIiwic3VwcG9ydHNPYmplY3RGaXQiLCJzdXBwb3J0c09iamVjdFBvc2l0aW9uIiwic3VwcG9ydHNPRkkiLCJzdXBwb3J0c0N1cnJlbnRTcmMiLCJjdXJyZW50U3JjIiwibmF0aXZlR2V0QXR0cmlidXRlIiwibmF0aXZlU2V0QXR0cmlidXRlIiwiYXV0b01vZGVFbmFibGVkIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCJ3IiwiaCIsInBvbHlmaWxsQ3VycmVudFNyYyIsImVsIiwic3Jjc2V0IiwicGljdHVyZWZpbGwiLCJwZiIsIl8iLCJucyIsImV2YWxlZCIsImZpbGxJbWciLCJyZXNlbGVjdCIsImN1clNyYyIsInN1cHBvcnRlZCIsInNyYyIsImdldFN0eWxlIiwiZm9udEZhbWlseSIsInBhcnNlZCIsInByb3BzIiwic2V0UGxhY2Vob2xkZXIiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwib25JbWFnZVJlYWR5IiwiY2FsbGJhY2siLCJuYXR1cmFsV2lkdGgiLCJmaXhPbmUiLCJvZmkiLCJza2lwVGVzdCIsIm5hdHVyYWxIZWlnaHQiLCJrZWVwU3JjVXNhYmxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRPcmlnaW4iLCJiYWNrZ3JvdW5kU2l6ZSIsImRlc2NyaXB0b3JzIiwiZ2V0Iiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJzcyIsImhpamFja0F0dHJpYnV0ZXMiLCJnZXRPZmlJbWFnZU1heWJlIiwiSFRNTEltYWdlRWxlbWVudCIsImZpeCIsImltZ3MiLCJvcHRzIiwic3RhcnRBdXRvTW9kZSIsImUiLCJ3YXRjaE1RIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyIsIkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNDUk9MTF9USU1FIiwib3JpZ2luYWwiLCJzY3JvbGwiLCJzY3JvbGxUbyIsInNjcm9sbEJ5IiwiZWxlbWVudFNjcm9sbCIsInNjcm9sbEVsZW1lbnQiLCJzY3JvbGxJbnRvVmlldyIsImlzTWljcm9zb2Z0QnJvd3NlciIsInVzZXJBZ2VudCIsInVzZXJBZ2VudFBhdHRlcm5zIiwiUk9VTkRJTkdfVE9MRVJBTkNFIiwibmF2aWdhdG9yIiwieSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJlYXNlIiwiayIsIk1hdGgiLCJjb3MiLCJQSSIsInNob3VsZEJhaWxPdXQiLCJmaXJzdEFyZyIsImJlaGF2aW9yIiwiVHlwZUVycm9yIiwiaGFzU2Nyb2xsYWJsZVNwYWNlIiwiYXhpcyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJjYW5PdmVyZmxvdyIsIm92ZXJmbG93VmFsdWUiLCJpc1Njcm9sbGFibGUiLCJpc1Njcm9sbGFibGVZIiwiaXNTY3JvbGxhYmxlWCIsImZpbmRTY3JvbGxhYmxlUGFyZW50Iiwic3RlcCIsImNvbnRleHQiLCJ0aW1lIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImVsYXBzZWQiLCJzdGFydFRpbWUiLCJzdGFydFgiLCJzdGFydFkiLCJtZXRob2QiLCJzY3JvbGxhYmxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic21vb3RoU2Nyb2xsIiwic2Nyb2xsWCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2RDtBQUNBQyxtRUFBTztBQUNQQywwREFBZSxHQUh3QyxDQUt2RDs7QUFDQUMsOERBQVksQ0FBQ0MsUUFB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WCxDQUFDLENBQUNPLElBQTNCLEVBQWlDO0FBQy9CO0FBQ0F5VyxvQkFBWSxDQUFDalcsSUFBYixDQUNFLElBREYsRUFFRXdXLGdCQUZGLEVBR0VBLGdCQUFnQixDQUFDMUMsVUFBakIsR0FBOEI2QyxXQUFXLENBQUMzVixJQUExQyxHQUFpRHlWLFdBQVcsQ0FBQ3pWLElBSC9ELEVBSUV3VixnQkFBZ0IsQ0FBQ3pDLFNBQWpCLEdBQTZCNEMsV0FBVyxDQUFDTCxHQUF6QyxHQUErQ0csV0FBVyxDQUFDSCxHQUo3RCxFQUYrQixDQVMvQjs7QUFDQSxZQUFJL0csQ0FBQyxDQUFDMUIsZ0JBQUYsQ0FBbUIySSxnQkFBbkIsRUFBcUNJLFFBQXJDLEtBQWtELE9BQXRELEVBQStEO0FBQzdEckgsV0FBQyxDQUFDNkQsUUFBRixDQUFXO0FBQ1RwUyxnQkFBSSxFQUFFeVYsV0FBVyxDQUFDelYsSUFEVDtBQUVUc1YsZUFBRyxFQUFFRyxXQUFXLENBQUNILEdBRlI7QUFHVC9CLG9CQUFRLEVBQUU7QUFIRCxXQUFYO0FBS0Q7QUFDRixPQWpCRCxNQWlCTztBQUNMO0FBQ0FoRixTQUFDLENBQUM2RCxRQUFGLENBQVc7QUFDVHBTLGNBQUksRUFBRTJWLFdBQVcsQ0FBQzNWLElBRFQ7QUFFVHNWLGFBQUcsRUFBRUssV0FBVyxDQUFDTCxHQUZSO0FBR1QvQixrQkFBUSxFQUFFO0FBSEQsU0FBWDtBQUtEO0FBQ0YsS0F6Q0Q7QUEwQ0Q7O0FBRUQsTUFBSSxJQUFKLEVBQWtFO0FBQ2hFO0FBQ0E1QixVQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRXpiLGNBQVEsRUFBRUE7QUFBWixLQUFqQjtBQUNELEdBSEQsTUFHTyxFQUdOO0FBRUYsQ0EvYUEsR0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5pbXBvcnQgY3NzVmFycyBmcm9tICdjc3MtdmFycy1wb255ZmlsbCc7XG5pbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XG4vLyBpbXBvcnQgYnVyZ2VyQW5pbWF0aW9uIGZyb20gJy4vdXRpbHMvYnVyZ2VyQW5pbWF0aW9uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIC8vIGZhbGxiYWNrIGZvciBpZSBhbmQgZWRnZTpcbiAgY3NzVmFycygpO1xuICBvYmplY3RGaXRJbWFnZXMoKTtcblxuICAvL2ZhbGxiYWNrIHNhZmFyaVxuICBzbW9vdGhzY3JvbGwucG9seWZpbGwoKTtcblxuXG5cbn0sIGZhbHNlKTtcbiIsIi8qIVxuICogZ2V0LWNzcy1kYXRhXG4gKiB2MS42LjNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qaGlsZGVuYmlkZGxlL2dldC1jc3MtZGF0YVxuICogKGMpIDIwMTgtMjAxOSBKb2huIEhpbGRlbmJpZGRsZSA8aHR0cDovL2hpbGRlbmJpZGRsZS5jb20+XG4gKiBNSVQgbGljZW5zZVxuICovXG5mdW5jdGlvbiBnZXRVcmxzKHVybHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgICBtaW1lVHlwZTogb3B0aW9ucy5taW1lVHlwZSB8fCBudWxsLFxuICAgICAgICBvbkJlZm9yZVNlbmQ6IG9wdGlvbnMub25CZWZvcmVTZW5kIHx8IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgb25TdWNjZXNzOiBvcHRpb25zLm9uU3VjY2VzcyB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uQ29tcGxldGU6IG9wdGlvbnMub25Db21wbGV0ZSB8fCBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICB9O1xuICAgIHZhciB1cmxBcnJheSA9IEFycmF5LmlzQXJyYXkodXJscykgPyB1cmxzIDogWyB1cmxzIF07XG4gICAgdmFyIHVybFF1ZXVlID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodXJsQXJyYXkubGVuZ3RoKSkubWFwKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaXNWYWxpZENzcygpIHtcbiAgICAgICAgdmFyIGNzc1RleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFwiXCI7XG4gICAgICAgIHZhciBpc0hUTUwgPSBjc3NUZXh0LnRyaW0oKS5jaGFyQXQoMCkgPT09IFwiPFwiO1xuICAgICAgICByZXR1cm4gIWlzSFRNTDtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25FcnJvcih4aHIsIHVybEluZGV4KSB7XG4gICAgICAgIHNldHRpbmdzLm9uRXJyb3IoeGhyLCB1cmxBcnJheVt1cmxJbmRleF0sIHVybEluZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWNjZXNzKHJlc3BvbnNlVGV4dCwgdXJsSW5kZXgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IHNldHRpbmdzLm9uU3VjY2VzcyhyZXNwb25zZVRleHQsIHVybEFycmF5W3VybEluZGV4XSwgdXJsSW5kZXgpO1xuICAgICAgICByZXNwb25zZVRleHQgPSByZXR1cm5WYWwgPT09IGZhbHNlID8gXCJcIiA6IHJldHVyblZhbCB8fCByZXNwb25zZVRleHQ7XG4gICAgICAgIHVybFF1ZXVlW3VybEluZGV4XSA9IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgaWYgKHVybFF1ZXVlLmluZGV4T2YobnVsbCkgPT09IC0xKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKHVybFF1ZXVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdXJsQXJyYXkuZm9yRWFjaChmdW5jdGlvbih1cmwsIGkpIHtcbiAgICAgICAgcGFyc2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcbiAgICAgICAgcGFyc2VyLmhyZWYgPSBTdHJpbmcocGFyc2VyLmhyZWYpO1xuICAgICAgICB2YXIgaXNJRWx0ZTkgPSBCb29sZWFuKGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB2YXIgaXNJRWx0ZTlDT1JTID0gaXNJRWx0ZTkgJiYgcGFyc2VyLmhvc3Quc3BsaXQoXCI6XCIpWzBdICE9PSBsb2NhdGlvbi5ob3N0LnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgaWYgKGlzSUVsdGU5Q09SUykge1xuICAgICAgICAgICAgdmFyIGlzU2FtZVByb3RvY29sID0gcGFyc2VyLnByb3RvY29sID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgICAgIGlmIChpc1NhbWVQcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIHZhciB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4ZHIub3BlbihcIkdFVFwiLCB1cmwpO1xuICAgICAgICAgICAgICAgIHhkci50aW1lb3V0ID0gMDtcbiAgICAgICAgICAgICAgICB4ZHIub25wcm9ncmVzcyA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB4ZHIub250aW1lb3V0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRDc3MoeGRyLnJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh4ZHIucmVzcG9uc2VUZXh0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoeGRyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGRyLm9uZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcih4ZHIsIGkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgeGRyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSW50ZXJuZXQgRXhwbG9yZXIgOSBDcm9zcy1PcmlnaW4gKENPUlMpIHJlcXVlc3RzIG11c3QgdXNlIHRoZSBzYW1lIHByb3RvY29sIChcIi5jb25jYXQodXJsLCBcIilcIikpO1xuICAgICAgICAgICAgICAgIG9uRXJyb3IobnVsbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoc2V0dGluZ3MubWltZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3Mub25CZWZvcmVTZW5kKHhociwgdXJsLCBpKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiBpc1ZhbGlkQ3NzKHhoci5yZXNwb25zZVRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeGhyLnJlc3BvbnNlVGV4dCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKHhociwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldHMgQ1NTIGRhdGEgZnJvbSA8c3R5bGU+IGFuZCA8bGluaz4gbm9kZXMgKGluY2x1ZGluZyBAaW1wb3J0cyksIHRoZW5cbiAqIHJldHVybnMgZGF0YSBpbiBvcmRlciBwcm9jZXNzZWQgYnkgRE9NLiBBbGxvd3Mgc3BlY2lmeWluZyBub2RlcyB0b1xuICogaW5jbHVkZS9leGNsdWRlIGFuZCBmaWx0ZXJpbmcgQ1NTIGRhdGEgdXNpbmcgUmVnRXguXG4gKlxuICogQHByZXNlcnZlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9uc10gVGhlIG9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy5yb290RWxlbWVudD1kb2N1bWVudF0gUm9vdCBlbGVtZW50IHRvIHRyYXZlcnNlIGZvclxuICogICAgICAgICAgICAgICAgICAgPGxpbms+IGFuZCA8c3R5bGU+IG5vZGVzLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgW29wdGlvbnMuaW5jbHVkZV0gQ1NTIHNlbGVjdG9yIG1hdGNoaW5nIDxsaW5rPiBhbmQgPHN0eWxlPlxuICogICAgICAgICAgICAgICAgICAgbm9kZXMgdG8gaW5jbHVkZVxuICogQHBhcmFtIHtzdHJpbmd9ICAgW29wdGlvbnMuZXhjbHVkZV0gQ1NTIHNlbGVjdG9yIG1hdGNoaW5nIDxsaW5rPiBhbmQgPHN0eWxlPlxuICogICAgICAgICAgICAgICAgICAgbm9kZXMgdG8gZXhjbHVkZVxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMuZmlsdGVyXSBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBmaWx0ZXIgbm9kZSBDU1NcbiAqICAgICAgICAgICAgICAgICAgIGRhdGEuIEVhY2ggYmxvY2sgb2YgQ1NTIGRhdGEgaXMgdGVzdGVkIGFnYWluc3QgdGhlIGZpbHRlcixcbiAqICAgICAgICAgICAgICAgICAgIGFuZCBvbmx5IG1hdGNoaW5nIGRhdGEgaXMgaW5jbHVkZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy51c2VDU1NPTT1mYWxzZV0gRGV0ZXJtaW5lcyBpZiBDU1MgZGF0YSB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICBjb2xsZWN0ZWQgZnJvbSBhIHN0eWxlc2hlZXQncyBydW50aW1lIHZhbHVlcyBpbnN0ZWFkIG9mIGl0c1xuICogICAgICAgICAgICAgICAgICAgdGV4dCBjb250ZW50LiBUaGlzIGlzIHJlcXVpcmVkIHRvIGdldCBhY2N1cmF0ZSBDU1MgZGF0YVxuICogICAgICAgICAgICAgICAgICAgd2hlbiBhIHN0eWxlc2hlZXQgaGFzIGJlZW4gbW9kaWZpZWQgdXNpbmcgdGhlIGRlbGV0ZVJ1bGUoKVxuICogICAgICAgICAgICAgICAgICAgb3IgaW5zZXJ0UnVsZSgpIG1ldGhvZHMgYmVjYXVzZSB0aGVzZSBtb2RpZmljYXRpb25zIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIG5vdCBiZSByZWZsZWN0ZWQgaW4gdGhlIHN0eWxlc2hlZXQncyB0ZXh0IGNvbnRlbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5vbkJlZm9yZVNlbmRdIENhbGxiYWNrIGJlZm9yZSBYSFIgaXMgc2VudC4gUGFzc2VzXG4gKiAgICAgICAgICAgICAgICAgICAxKSB0aGUgWEhSIG9iamVjdCwgMikgc291cmNlIG5vZGUgcmVmZXJlbmNlLCBhbmQgMykgdGhlXG4gKiAgICAgICAgICAgICAgICAgICBzb3VyY2UgVVJMIGFzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uU3VjY2Vzc10gQ2FsbGJhY2sgb24gZWFjaCBDU1Mgbm9kZSByZWFkLiBQYXNzZXNcbiAqICAgICAgICAgICAgICAgICAgIDEpIENTUyB0ZXh0LCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIGFuZCAzKSB0aGUgc291cmNlXG4gKiAgICAgICAgICAgICAgICAgICBVUkwgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25FcnJvcl0gQ2FsbGJhY2sgb24gZWFjaCBlcnJvci4gUGFzc2VzIDEpIHRoZSBYSFJcbiAqICAgICAgICAgICAgICAgICAgIG9iamVjdCBmb3IgaW5zcGVjdGlvbiwgMikgc291cmUgbm9kZSByZWZlcmVuY2UsIGFuZCAzKSB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHNvdXJjZSBVUkwgdGhhdCBmYWlsZWQgKGVpdGhlciBhIDxsaW5rPiBocmVmIG9yIGFuIEBpbXBvcnQpXG4gKiAgICAgICAgICAgICAgICAgICBhcyBhcmd1bWVudHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQ29tcGxldGVdIENhbGxiYWNrIGFmdGVyIGFsbCBub2RlcyBoYXZlIGJlZW5cbiAqICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZC4gUGFzc2VzIDEpIGNvbmNhdGVuYXRlZCBDU1MgdGV4dCwgMikgYW4gYXJyYXkgb2ZcbiAqICAgICAgICAgICAgICAgICAgIENTUyB0ZXh0IGluIERPTSBvcmRlciwgYW5kIDMpIGFuIGFycmF5IG9mIG5vZGVzIGluIERPTVxuICogICAgICAgICAgICAgICAgICAgb3JkZXIgYXMgYXJndW1lbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICBnZXRDc3NEYXRhKHtcbiAqICAgICByb290RWxlbWVudDogZG9jdW1lbnQsXG4gKiAgICAgaW5jbHVkZSAgICA6ICdzdHlsZSxsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLFxuICogICAgIGV4Y2x1ZGUgICAgOiAnW2hyZWY9XCJza2lwLmNzc1wiXScsXG4gKiAgICAgZmlsdGVyICAgICA6IC9yZWQvLFxuICogICAgIHVzZUNTU09NICAgOiBmYWxzZSxcbiAqICAgICBvbkJlZm9yZVNlbmQoeGhyLCBub2RlLCB1cmwpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH1cbiAqICAgICBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7XG4gKiAgICAgICAvLyAuLi5cbiAqICAgICB9XG4gKiAgICAgb25FcnJvcih4aHIsIG5vZGUsIHVybCkge1xuICogICAgICAgLy8gLi4uXG4gKiAgICAgfSxcbiAqICAgICBvbkNvbXBsZXRlKGNzc1RleHQsIGNzc0FycmF5LCBub2RlQXJyYXkpIHtcbiAqICAgICAgIC8vIC4uLlxuICogICAgIH1cbiAqICAgfSk7XG4gKi8gZnVuY3Rpb24gZ2V0Q3NzRGF0YShvcHRpb25zKSB7XG4gICAgdmFyIHJlZ2V4ID0ge1xuICAgICAgICBjc3NDb21tZW50czogL1xcL1xcKltcXHNcXFNdKz9cXCpcXC8vZyxcbiAgICAgICAgY3NzSW1wb3J0czogLyg/OkBpbXBvcnRcXHMqKSg/OnVybFxcKFxccyopPyg/OlsnXCJdKShbXidcIl0qKSg/OlsnXCJdKSg/OlxccypcXCkpPyg/OlteO10qOykvZ1xuICAgIH07XG4gICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgICByb290RWxlbWVudDogb3B0aW9ucy5yb290RWxlbWVudCB8fCBkb2N1bWVudCxcbiAgICAgICAgaW5jbHVkZTogb3B0aW9ucy5pbmNsdWRlIHx8ICdzdHlsZSxsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nLFxuICAgICAgICBleGNsdWRlOiBvcHRpb25zLmV4Y2x1ZGUgfHwgbnVsbCxcbiAgICAgICAgZmlsdGVyOiBvcHRpb25zLmZpbHRlciB8fCBudWxsLFxuICAgICAgICB1c2VDU1NPTTogb3B0aW9ucy51c2VDU1NPTSB8fCBmYWxzZSxcbiAgICAgICAgb25CZWZvcmVTZW5kOiBvcHRpb25zLm9uQmVmb3JlU2VuZCB8fCBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgICAgIG9uU3VjY2Vzczogb3B0aW9ucy5vblN1Y2Nlc3MgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvbkVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgICAgICBvbkNvbXBsZXRlOiBvcHRpb25zLm9uQ29tcGxldGUgfHwgRnVuY3Rpb24ucHJvdG90eXBlXG4gICAgfTtcbiAgICB2YXIgc291cmNlTm9kZXMgPSBBcnJheS5hcHBseShudWxsLCBzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmluY2x1ZGUpKS5maWx0ZXIoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gIW1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZXR0aW5ncy5leGNsdWRlKTtcbiAgICB9KTtcbiAgICB2YXIgY3NzQXJyYXkgPSBBcnJheS5hcHBseShudWxsLCBBcnJheShzb3VyY2VOb2Rlcy5sZW5ndGgpKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGlzQ29tcGxldGUgPSBjc3NBcnJheS5pbmRleE9mKG51bGwpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gY3NzQXJyYXkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUoY3NzVGV4dCwgY3NzQXJyYXksIHNvdXJjZU5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWNjZXNzKGNzc1RleHQsIGNzc0luZGV4LCBub2RlLCBzb3VyY2VVcmwpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IHNldHRpbmdzLm9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCBzb3VyY2VVcmwpO1xuICAgICAgICBjc3NUZXh0ID0gcmV0dXJuVmFsICE9PSB1bmRlZmluZWQgJiYgQm9vbGVhbihyZXR1cm5WYWwpID09PSBmYWxzZSA/IFwiXCIgOiByZXR1cm5WYWwgfHwgY3NzVGV4dDtcbiAgICAgICAgcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgc291cmNlVXJsLCBmdW5jdGlvbihyZXNvbHZlZENzc1RleHQsIGVycm9yRGF0YSkge1xuICAgICAgICAgICAgaWYgKGNzc0FycmF5W2Nzc0luZGV4XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVycm9yRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLm9uRXJyb3IoZGF0YS54aHIsIG5vZGUsIGRhdGEudXJsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmdzLmZpbHRlciB8fCBzZXR0aW5ncy5maWx0ZXIudGVzdChyZXNvbHZlZENzc1RleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0FycmF5W2Nzc0luZGV4XSA9IHJlc29sdmVkQ3NzVGV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjc3NBcnJheVtjc3NJbmRleF0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VJbXBvcnREYXRhKGNzc1RleHQsIGJhc2VVcmwpIHtcbiAgICAgICAgdmFyIGlnbm9yZVJ1bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgICAgICAgdmFyIGltcG9ydERhdGEgPSB7fTtcbiAgICAgICAgaW1wb3J0RGF0YS5ydWxlcyA9IChjc3NUZXh0LnJlcGxhY2UocmVnZXguY3NzQ29tbWVudHMsIFwiXCIpLm1hdGNoKHJlZ2V4LmNzc0ltcG9ydHMpIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlnbm9yZVJ1bGVzLmluZGV4T2YocnVsZSkgPT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1wb3J0RGF0YS51cmxzID0gaW1wb3J0RGF0YS5ydWxlcy5tYXAoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGUucmVwbGFjZShyZWdleC5jc3NJbXBvcnRzLCBcIiQxXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1wb3J0RGF0YS5hYnNvbHV0ZVVybHMgPSBpbXBvcnREYXRhLnVybHMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEZ1bGxVcmwodXJsLCBiYXNlVXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltcG9ydERhdGEuYWJzb2x1dGVSdWxlcyA9IGltcG9ydERhdGEucnVsZXMubWFwKGZ1bmN0aW9uKHJ1bGUsIGkpIHtcbiAgICAgICAgICAgIHZhciBvbGRVcmwgPSBpbXBvcnREYXRhLnVybHNbaV07XG4gICAgICAgICAgICB2YXIgbmV3VXJsID0gZ2V0RnVsbFVybChpbXBvcnREYXRhLmFic29sdXRlVXJsc1tpXSwgYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKG9sZFVybCwgbmV3VXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbXBvcnREYXRhO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBiYXNlVXJsLCBjYWxsYmFja0ZuKSB7XG4gICAgICAgIHZhciBfX2Vycm9yRGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogW107XG4gICAgICAgIHZhciBfX2Vycm9yUnVsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IFtdO1xuICAgICAgICB2YXIgaW1wb3J0RGF0YSA9IHBhcnNlSW1wb3J0RGF0YShjc3NUZXh0LCBiYXNlVXJsLCBfX2Vycm9yUnVsZXMpO1xuICAgICAgICBpZiAoaW1wb3J0RGF0YS5ydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdldFVybHMoaW1wb3J0RGF0YS5hYnNvbHV0ZVVybHMsIHtcbiAgICAgICAgICAgICAgICBvbkJlZm9yZVNlbmQ6IGZ1bmN0aW9uIG9uQmVmb3JlU2VuZCh4aHIsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25CZWZvcmVTZW5kKHhociwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKGNzc1RleHQsIHVybCwgdXJsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbCA9IHNldHRpbmdzLm9uU3VjY2Vzcyhjc3NUZXh0LCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmV0dXJuVmFsID09PSBmYWxzZSA/IFwiXCIgOiByZXR1cm5WYWwgfHwgY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlSW1wb3J0RGF0YSA9IHBhcnNlSW1wb3J0RGF0YShjc3NUZXh0LCB1cmwsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSW1wb3J0RGF0YS5ydWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJ1bGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UocnVsZSwgcmVzcG9uc2VJbXBvcnREYXRhLmFic29sdXRlUnVsZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKHhociwgdXJsLCB1cmxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBfX2Vycm9yRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhocjogeGhyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF9fZXJyb3JSdWxlcy5wdXNoKGltcG9ydERhdGEucnVsZXNbdXJsSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUltcG9ydHMoY3NzVGV4dCwgbm9kZSwgYmFzZVVybCwgY2FsbGJhY2tGbiwgX19lcnJvckRhdGEsIF9fZXJyb3JSdWxlcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHJlc3BvbnNlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGltcG9ydFRleHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoaW1wb3J0RGF0YS5ydWxlc1tpXSwgaW1wb3J0VGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlSW1wb3J0cyhjc3NUZXh0LCBub2RlLCBiYXNlVXJsLCBjYWxsYmFja0ZuLCBfX2Vycm9yRGF0YSwgX19lcnJvclJ1bGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRm4oY3NzVGV4dCwgX19lcnJvckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzb3VyY2VOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgc291cmNlTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlLCBpKSB7XG4gICAgICAgICAgICB2YXIgbGlua0hyZWYgPSBub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICB2YXIgbGlua1JlbCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwicmVsXCIpO1xuICAgICAgICAgICAgdmFyIGlzTGluayA9IG5vZGUubm9kZU5hbWUgPT09IFwiTElOS1wiICYmIGxpbmtIcmVmICYmIGxpbmtSZWwgJiYgbGlua1JlbC50b0xvd2VyQ2FzZSgpID09PSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgICAgIHZhciBpc1N0eWxlID0gbm9kZS5ub2RlTmFtZSA9PT0gXCJTVFlMRVwiO1xuICAgICAgICAgICAgaWYgKGlzTGluaykge1xuICAgICAgICAgICAgICAgIGdldFVybHMobGlua0hyZWYsIHtcbiAgICAgICAgICAgICAgICAgICAgbWltZVR5cGU6IFwidGV4dC9jc3NcIixcbiAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVTZW5kOiBmdW5jdGlvbiBvbkJlZm9yZVNlbmQoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkJlZm9yZVNlbmQoeGhyLCBub2RlLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyhjc3NUZXh0LCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlVXJsID0gZ2V0RnVsbFVybChsaW5rSHJlZiwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKGNzc1RleHQsIGksIG5vZGUsIHNvdXJjZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoeGhyLCB1cmwsIHVybEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NBcnJheVtpXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkVycm9yKHhociwgbm9kZSwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdHlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudXNlQ1NTT00pIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IEFycmF5LmFwcGx5KG51bGwsIG5vZGUuc2hlZXQuY3NzUnVsZXMpLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKGNzc1RleHQsIGksIG5vZGUsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjc3NBcnJheVtpXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZ3Mub25Db21wbGV0ZShcIlwiLCBbXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRGdWxsVXJsKHVybCkge1xuICAgIHZhciBiYXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpO1xuICAgIHZhciBiID0gZC5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtcbiAgICB2YXIgYSA9IGQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZC5oZWFkLmFwcGVuZENoaWxkKGIpO1xuICAgIGQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBiLmhyZWYgPSBiYXNlO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gYS5ocmVmO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWxtLCBzZWxlY3Rvcikge1xuICAgIHZhciBtYXRjaGVzID0gZWxtLm1hdGNoZXMgfHwgZWxtLm1hdGNoZXNTZWxlY3RvciB8fCBlbG0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxtLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsbS5vTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxtLCBzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENzc0RhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXQtY3NzLWRhdGEuZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBiYWxhbmNlZDtcbmZ1bmN0aW9uIGJhbGFuY2VkKGEsIGIsIHN0cikge1xuICBpZiAoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgYSA9IG1heWJlTWF0Y2goYSwgc3RyKTtcbiAgaWYgKGIgaW5zdGFuY2VvZiBSZWdFeHApIGIgPSBtYXliZU1hdGNoKGIsIHN0cik7XG5cbiAgdmFyIHIgPSByYW5nZShhLCBiLCBzdHIpO1xuXG4gIHJldHVybiByICYmIHtcbiAgICBzdGFydDogclswXSxcbiAgICBlbmQ6IHJbMV0sXG4gICAgcHJlOiBzdHIuc2xpY2UoMCwgclswXSksXG4gICAgYm9keTogc3RyLnNsaWNlKHJbMF0gKyBhLmxlbmd0aCwgclsxXSksXG4gICAgcG9zdDogc3RyLnNsaWNlKHJbMV0gKyBiLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWF5YmVNYXRjaChyZWcsIHN0cikge1xuICB2YXIgbSA9IHN0ci5tYXRjaChyZWcpO1xuICByZXR1cm4gbSA/IG1bMF0gOiBudWxsO1xufVxuXG5iYWxhbmNlZC5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gcmFuZ2UoYSwgYiwgc3RyKSB7XG4gIHZhciBiZWdzLCBiZWcsIGxlZnQsIHJpZ2h0LCByZXN1bHQ7XG4gIHZhciBhaSA9IHN0ci5pbmRleE9mKGEpO1xuICB2YXIgYmkgPSBzdHIuaW5kZXhPZihiLCBhaSArIDEpO1xuICB2YXIgaSA9IGFpO1xuXG4gIGlmIChhaSA+PSAwICYmIGJpID4gMCkge1xuICAgIGJlZ3MgPSBbXTtcbiAgICBsZWZ0ID0gc3RyLmxlbmd0aDtcblxuICAgIHdoaWxlIChpID49IDAgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGkgPT0gYWkpIHtcbiAgICAgICAgYmVncy5wdXNoKGkpO1xuICAgICAgICBhaSA9IHN0ci5pbmRleE9mKGEsIGkgKyAxKTtcbiAgICAgIH0gZWxzZSBpZiAoYmVncy5sZW5ndGggPT0gMSkge1xuICAgICAgICByZXN1bHQgPSBbIGJlZ3MucG9wKCksIGJpIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWcgPSBiZWdzLnBvcCgpO1xuICAgICAgICBpZiAoYmVnIDwgbGVmdCkge1xuICAgICAgICAgIGxlZnQgPSBiZWc7XG4gICAgICAgICAgcmlnaHQgPSBiaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpID0gc3RyLmluZGV4T2YoYiwgaSArIDEpO1xuICAgICAgfVxuXG4gICAgICBpID0gYWkgPCBiaSAmJiBhaSA+PSAwID8gYWkgOiBiaTtcbiAgICB9XG5cbiAgICBpZiAoYmVncy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IFsgbGVmdCwgcmlnaHQgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBCYXNlZCBvbiBjc3MgcGFyc2VyL2NvbXBpbGVyIGJ5IE54Q2hnXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTnh0Q2hnL3BpZWNlcy90cmVlL21hc3Rlci9qcy9jc3NfcGFyc2VyXG4gKi9cblxuXG4vLyBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgYmFsYW5jZWQgZnJvbSAnYmFsYW5jZWQtbWF0Y2gnO1xuXG5cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogUGFyc2VzIENTUyBzdHJpbmcgYW5kIGdlbmVyYXRlcyBBU1Qgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICBjc3MgVGhlIENTUyBzdHJpbmd0IHRvIGJlIGNvbnZlcnRlZCB0byBhbiBBU1RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm9ubHlWYXJzPWZhbHNlXSBSZW1vdmUgZGVjbGFyYXRpb25zIHRoYXQgZG8gbm90XG4gKiAgICAgICAgICAgICAgICAgIGNvbnRhaW4gYSBDU1MgdmFyaWFibGUgZnJvbSB0aGUgcmV0dXJuIHZhbHVlLiBOb3RlIHRoYXRcbiAqICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSBhbmQgQGtleWZyYW1lIHJ1bGVzIHJlcXVpcmUgYWxsIGRlY2xhcmF0aW9ucyB0b1xuICogICAgICAgICAgICAgICAgICBiZSByZXR1cm5lZCBpZiBhIENTUyB2YXJpYWJsZSBpcyB1c2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZW1vdmVDb21tZW50cz1mYWxzZV0gUmVtb3ZlIGNvbW1lbnRzIGZyb20gcmV0dXJuZWRcbiAqICAgICAgICAgICAgICAgICAgb2JqZWN0LlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VDc3MoY3NzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgb25seVZhcnMgICAgICA6IGZhbHNlLFxuICAgICAgICByZW1vdmVDb21tZW50czogZmFsc2VcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGVycm9ycyAgID0gW107XG5cbiAgICAvLyBFcnJvcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ1NTIHBhcnNlIGVycm9yOiAke21zZ31gKTtcbiAgICB9XG5cbiAgICAvLyBSZWdFeFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBNYXRjaCByZWdleHAgYW5kIHJldHVybiBjYXB0dXJlc1xuICAgIGZ1bmN0aW9uIG1hdGNoKHJlKSB7XG4gICAgICAgIGNvbnN0IG0gPSByZS5leGVjKGNzcyk7XG5cbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNzcyA9IGNzcy5zbGljZShtWzBdLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9ee1xccyovKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9efS8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoaXRlc3BhY2UoKSB7XG4gICAgICAgIG1hdGNoKC9eXFxzKi8pO1xuICAgIH1cblxuICAgIC8vIENvbW1lbnRzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICAgIHdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoY3NzWzBdICE9PSAnLycgfHwgY3NzWzFdICE9PSAnKicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpID0gMjtcblxuICAgICAgICB3aGlsZSAoY3NzW2ldICYmIChjc3NbaV0gIT09ICcqJyB8fCBjc3NbaSArIDFdICE9PSAnLycpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNzc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdlbmQgb2YgY29tbWVudCBpcyBtaXNzaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHIgPSBjc3Muc2xpY2UoMiwgaSk7XG5cbiAgICAgICAgY3NzID0gY3NzLnNsaWNlKGkgKyAyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZSAgIDogJ2NvbW1lbnQnLFxuICAgICAgICAgICAgY29tbWVudDogc3RyXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGNtbnRzID0gW107XG4gICAgICAgIGxldCBjO1xuXG4gICAgICAgIHdoaWxlICgoYyA9IGNvbW1lbnQoKSkpIHtcbiAgICAgICAgICAgIGNtbnRzLnB1c2goYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0dGluZ3MucmVtb3ZlQ29tbWVudHMgPyBbXSA6IGNtbnRzO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdG9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIHNlbGVjdG9yKCkge1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgd2hpbGUgKGNzc1swXSA9PT0gJ30nKSB7XG4gICAgICAgICAgICBlcnJvcignZXh0cmEgY2xvc2luZyBicmFja2V0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL14oKFwiKD86XFxcXFwifFteXCJdKSpcInwnKD86XFxcXCd8W14nXSkqJ3xbXntdKSspLyk7XG5cbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtWzBdXG4gICAgICAgICAgICAgICAgLnRyaW0oKSAvLyByZW1vdmUgYWxsIGNvbW1lbnRzIGZyb20gc2VsZWN0b3JzXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKi9dfFtcXHJcXG5dKSkpKlxcKlxcLysvZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiKD86XFxcXFwifFteXCJdKSpcInwnKD86XFxcXCd8W14nXSkqJy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnJlcGxhY2UoLywvZywgJ1xcdTIwMEMnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKig/IVteKF0qXFwpKSxcXHMqLylcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXFx1MjAwQy9nLCAnLCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVjbGFyYXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKCkge1xuICAgICAgICBtYXRjaCgvXihbO1xcc10qKSsvKTsgLy8gaWdub3JlIGVtcHR5IGRlY2xhcmF0aW9ucyArIHdoaXRlc3BhY2VcblxuICAgICAgICBjb25zdCBjb21tZW50X3JlZ2V4cCA9IC9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9nO1xuICAgICAgICBsZXQgcHJvcCA9IG1hdGNoKC9eKFxcKj9bLSMvKlxcXFxcXHddKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovKTtcblxuICAgICAgICBpZiAoIXByb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3AgPSBwcm9wWzBdLnRyaW0oKTtcblxuICAgICAgICBpZiAoIW1hdGNoKC9eOlxccyovKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdwcm9wZXJ0eSBtaXNzaW5nIFxcJzpcXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFF1b3RlcyByZWdleCByZXBlYXRzIHZlcmJhdGltIGluc2lkZSBhbmQgb3V0c2lkZSBwYXJlbnRoZXNlc1xuICAgICAgICBjb25zdCB2YWwgPSBtYXRjaCgvXigoPzpcXC9cXCouKj9cXCpcXC98Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXCgoXFxzKicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8W14pXSo/KVxccypcXCl8W159O10pKykvKTtcbiAgICAgICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAgICAgdHlwZSAgICA6ICdkZWNsYXJhdGlvbicsXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5yZXBsYWNlKGNvbW1lbnRfcmVnZXhwLCAnJyksXG4gICAgICAgICAgICB2YWx1ZSAgIDogdmFsID8gdmFsWzBdLnJlcGxhY2UoY29tbWVudF9yZWdleHAsICcnKS50cmltKCkgOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIG1hdGNoKC9eWztcXHNdKi8pO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb25zKCkge1xuICAgICAgICBpZiAoIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdtaXNzaW5nIFxcJ3tcXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkO1xuICAgICAgICBsZXQgZGVjbHMgPSBjb21tZW50cygpO1xuXG4gICAgICAgIHdoaWxlICgoZCA9IGRlY2xhcmF0aW9uKCkpKSB7XG4gICAgICAgICAgICBkZWNscy5wdXNoKGQpO1xuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignbWlzc2luZyBcXCd9XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVjbHM7XG4gICAgfVxuXG4gICAgLy8gS2V5ZnJhbWVzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIGtleWZyYW1lKCkge1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgY29uc3QgdmFscyA9IFtdO1xuICAgICAgICBsZXQgbTtcblxuICAgICAgICB3aGlsZSAoKG0gPSBtYXRjaCgvXigoXFxkK1xcLlxcZCt8XFwuXFxkK3xcXGQrKSU/fFthLXpdKylcXHMqLykpKSB7XG4gICAgICAgICAgICB2YWxzLnB1c2gobVsxXSk7XG4gICAgICAgICAgICBtYXRjaCgvXixcXHMqLyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgOiAna2V5ZnJhbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlcyAgICAgIDogdmFscyxcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXRfa2V5ZnJhbWVzKCkge1xuICAgICAgICBsZXQgbSA9IG1hdGNoKC9eQChbLVxcd10rKT9rZXlmcmFtZXNcXHMqLyk7XG5cbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2ZW5kb3IgPSBtWzFdO1xuXG4gICAgICAgIG0gPSBtYXRjaCgvXihbLVxcd10rKVxccyovKTtcblxuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignQGtleWZyYW1lcyBtaXNzaW5nIG5hbWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdO1xuXG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0BrZXlmcmFtZXMgbWlzc2luZyBcXCd7XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZnJhbWU7XG4gICAgICAgIGxldCBmcmFtZXMgPSBjb21tZW50cygpO1xuXG4gICAgICAgIHdoaWxlICgoZnJhbWUgPSBrZXlmcmFtZSgpKSkge1xuICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgICAgICAgICAgZnJhbWVzID0gZnJhbWVzLmNvbmNhdChjb21tZW50cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdAa2V5ZnJhbWVzIG1pc3NpbmcgXFwnfVxcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGUgICAgIDogJ2tleWZyYW1lcycsXG4gICAgICAgICAgICBuYW1lICAgICA6IG5hbWUsXG4gICAgICAgICAgICB2ZW5kb3IgICA6IHZlbmRvcixcbiAgICAgICAgICAgIGtleWZyYW1lczogZnJhbWVzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQCBSdWxlc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBhdF9wYWdlKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AcGFnZSAqLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBzZWwgPSBzZWxlY3RvcigpIHx8IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3BhZ2UnLCBzZWxlY3RvcnM6IHNlbCwgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2ZvbnRmYWNlKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AZm9udC1mYWNlXFxzKi8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnZm9udC1mYWNlJywgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X3N1cHBvcnRzKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15Ac3VwcG9ydHMgKihbXntdKykvKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ3N1cHBvcnRzJywgc3VwcG9ydHM6IG1bMV0udHJpbSgpLCBydWxlczogcnVsZXMoKSB9OyB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0X2hvc3QoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBob3N0XFxzKi8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnaG9zdCcsIHJ1bGVzOiBydWxlcygpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfbWVkaWEoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBtZWRpYSAqKFtee10rKS8pO1xuICAgICAgICBpZiAobSkgeyByZXR1cm4geyB0eXBlOiAnbWVkaWEnLCBtZWRpYTogbVsxXS50cmltKCksIHJ1bGVzOiBydWxlcygpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfY3VzdG9tX20oKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBjdXN0b20tbWVkaWFcXHMrKC0tW15cXHNdKylcXHMqKFteeztdKyk7Lyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6ICdjdXN0b20tbWVkaWEnLCBuYW1lOiBtWzFdLnRyaW0oKSwgbWVkaWE6IG1bMl0udHJpbSgpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfZG9jdW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/ZG9jdW1lbnQgKihbXntdKykvKTtcbiAgICAgICAgaWYgKG0pIHsgcmV0dXJuIHsgdHlwZTogJ2RvY3VtZW50JywgZG9jdW1lbnQ6IG1bMl0udHJpbSgpLCB2ZW5kb3I6IG1bMV0gPyBtWzFdLnRyaW0oKSA6IG51bGwsIHJ1bGVzOiBydWxlcygpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfeCgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQChpbXBvcnR8Y2hhcnNldHxuYW1lc3BhY2UpXFxzKihbXjtdKyk7Lyk7XG4gICAgICAgIGlmIChtKSB7IHJldHVybiB7IHR5cGU6IG1bMV0sIG5hbWU6IG1bMl0udHJpbSgpIH07IH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXRfcnVsZSgpIHtcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGlmIChjc3NbMF0gPT09ICdAJykge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gYXRfa2V5ZnJhbWVzKCkgfHwgYXRfc3VwcG9ydHMoKSB8fCBhdF9ob3N0KCkgfHwgYXRfbWVkaWEoKSB8fCBhdF9jdXN0b21fbSgpIHx8IGF0X3BhZ2UoKSB8fCBhdF9kb2N1bWVudCgpIHx8IGF0X2ZvbnRmYWNlKCkgfHwgYXRfeCgpO1xuXG4gICAgICAgICAgICBpZiAocmV0ICYmIHNldHRpbmdzLm9ubHlWYXJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc1ZhckZ1bmMgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIEBwYWdlLCBAZm9udC1mYWNlXG4gICAgICAgICAgICAgICAgaWYgKHJldC5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVmFyRnVuYyA9IHJldC5kZWNsYXJhdGlvbnMuc29tZShkZWNsID0+IC92YXJcXCgvLnRlc3QoZGVjbC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBAa2V5ZnJhbWVzLCBAbWVkaWEsIEBzdXBwb3J0cywgZXRjLlxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSByZXQua2V5ZnJhbWVzIHx8IHJldC5ydWxlcyB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICBoYXNWYXJGdW5jID0gYXJyLnNvbWUob2JqID0+IChvYmouZGVjbGFyYXRpb25zIHx8IFtdKS5zb21lKGRlY2wgPT4gL3ZhclxcKC8udGVzdChkZWNsLnZhbHVlKSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNWYXJGdW5jID8gcmV0IDoge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSdWxlc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBydWxlKCkge1xuICAgICAgICBpZiAoc2V0dGluZ3Mub25seVZhcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VkTWF0Y2ggPSBiYWxhbmNlZCgneycsICd9JywgY3NzKTtcblxuICAgICAgICAgICAgLy8gV2hlbiBvbmx5VmFyczp0cnVlLCBza2lwIHJ1bHNldCBpZiBpdCBkb2VzIG5vdCBjb250YWluIGEgOnJvb3RcbiAgICAgICAgICAgIC8vIHZhcmlhYmxlIGRlY2xhcmF0aW9uIG9mIGEgdmFyaWFibGUgZnVuY3Rpb24gdmFsdWVcbiAgICAgICAgICAgIGlmIChiYWxhbmNlZE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzVmFyRGVjbCA9IGJhbGFuY2VkTWF0Y2gucHJlLmluZGV4T2YoJzpyb290JykgIT09IC0xICYmIC8tLVxcUypcXHMqOi8udGVzdChiYWxhbmNlZE1hdGNoLmJvZHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1ZhckZ1bmMgPSAvdmFyXFwoLy50ZXN0KGJhbGFuY2VkTWF0Y2guYm9keSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc1ZhckRlY2wgJiYgIWhhc1ZhckZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gY3NzLnNsaWNlKGJhbGFuY2VkTWF0Y2guZW5kICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbCAgID0gc2VsZWN0b3IoKSB8fCBbXTtcbiAgICAgICAgY29uc3QgZGVjbHMgPSAhc2V0dGluZ3Mub25seVZhcnMgPyBkZWNsYXJhdGlvbnMoKSA6IGRlY2xhcmF0aW9ucygpLmZpbHRlcihkZWNsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhckRlY2wgPSBzZWwuc29tZShzID0+IHMuaW5kZXhPZignOnJvb3QnKSAhPT0gLTEpICYmIC9eLS1cXFMvLnRlc3QoZGVjbC5wcm9wZXJ0eSk7XG4gICAgICAgICAgICBjb25zdCBoYXNWYXJGdW5jID0gL3ZhclxcKC8udGVzdChkZWNsLnZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGhhc1ZhckRlY2wgfHwgaGFzVmFyRnVuYztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBlcnJvcignc2VsZWN0b3IgbWlzc2luZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ3J1bGUnLFxuICAgICAgICAgICAgc2VsZWN0b3JzICAgOiBzZWwsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVsZXMoY29yZSkge1xuICAgICAgICBpZiAoIWNvcmUgJiYgIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdtaXNzaW5nIFxcJ3tcXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgcnVsZXMgPSBjb21tZW50cygpO1xuXG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIChjb3JlIHx8IGNzc1swXSAhPT0gJ30nKSAmJiAobm9kZSA9IGF0X3J1bGUoKSB8fCBydWxlKCkpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcnVsZXMgPSBydWxlcy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvcmUgJiYgIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignbWlzc2luZyBcXCd9XFwnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3N0eWxlc2hlZXQnLFxuICAgICAgICBzdHlsZXNoZWV0OiB7XG4gICAgICAgICAgICBydWxlczogcnVsZXModHJ1ZSksXG4gICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4vLyBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgcGFyc2VDc3M7XG4iLCIvKipcbiAqIEJhc2VkIG9uIGNzcyBwYXJzZXIvY29tcGlsZXIgYnkgTnhDaGdcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9OeHRDaGcvcGllY2VzL3RyZWUvbWFzdGVyL2pzL2Nzc19wYXJzZXJcbiAqL1xuXG5cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogQ29tcGlsZXMgQ1NTIEFTVCB0byBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0cmVlIENTUyBBU1Qgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gICBbZGVsaW09JyddIENTUyBydWxlIGRlbGltaXRlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGJlZm9yZSBlYWNoIG5vZGUgaXMgcHJvY2Vzc2VkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlDc3ModHJlZSwgZGVsaW0gPSAnJywgY2IpIHtcbiAgICBjb25zdCByZW5kZXJNZXRob2RzID0ge1xuICAgICAgICBjaGFyc2V0KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQGNoYXJzZXQgJyArIG5vZGUubmFtZSArICc7JztcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWVudChub2RlKSB7XG4gICAgICAgICAgICAvLyBQcmVzZXJ2ZSBwb255ZmlsbCBtYXJrZXIgY29tbWVudHNcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbW1lbnQuaW5kZXhPZignX19DU1NWQVJTUE9OWUZJTEwnKSA9PT0gMCA/ICcvKicgKyBub2RlLmNvbW1lbnQgKyAnKi8nIDogJyc7XG4gICAgICAgIH0sXG4gICAgICAgICdjdXN0b20tbWVkaWEnKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQGN1c3RvbS1tZWRpYSAnICsgbm9kZS5uYW1lICsgJyAnICsgbm9kZS5tZWRpYSArICc7JztcbiAgICAgICAgfSxcbiAgICAgICAgZGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUucHJvcGVydHkgKyAnOicgKyBub2RlLnZhbHVlICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0AnICsgKG5vZGUudmVuZG9yIHx8ICcnKSArICdkb2N1bWVudCAnICsgbm9kZS5kb2N1bWVudCArICd7JyArIHZpc2l0KG5vZGUucnVsZXMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICAnZm9udC1mYWNlJyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Bmb250LWZhY2UnICsgJ3snICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBob3N0KG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQGhvc3QnICsgJ3snICsgdmlzaXQobm9kZS5ydWxlcykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIGltcG9ydChub2RlKSB7XG4gICAgICAgICAgICAvLyBGSVhFRFxuICAgICAgICAgICAgcmV0dXJuICdAaW1wb3J0ICcgKyBub2RlLm5hbWUgKyAnOyc7XG4gICAgICAgIH0sXG4gICAgICAgIGtleWZyYW1lKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlcy5qb2luKCcsJykgKyAneycgKyB2aXNpdChub2RlLmRlY2xhcmF0aW9ucykgKyAnfSc7XG4gICAgICAgIH0sXG4gICAgICAgIGtleWZyYW1lcyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0AnICsgKG5vZGUudmVuZG9yIHx8ICcnKSArICdrZXlmcmFtZXMgJyArIG5vZGUubmFtZSArICd7JyArIHZpc2l0KG5vZGUua2V5ZnJhbWVzKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgbWVkaWEobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIG5vZGUubWVkaWEgKyAneycgKyB2aXNpdChub2RlLnJ1bGVzKSArICd9JztcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZXNwYWNlKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQG5hbWVzcGFjZSAnICsgbm9kZS5uYW1lICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBwYWdlKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQHBhZ2UgJyArIChub2RlLnNlbGVjdG9ycy5sZW5ndGggPyBub2RlLnNlbGVjdG9ycy5qb2luKCcsICcpIDogJycpICsgJ3snICsgdmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpICsgJ30nO1xuICAgICAgICB9LFxuICAgICAgICBydWxlKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xzID0gbm9kZS5kZWNsYXJhdGlvbnM7XG5cbiAgICAgICAgICAgIGlmIChkZWNscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5zZWxlY3RvcnMuam9pbignLCcpICsgJ3snICsgdmlzaXQoZGVjbHMpICsgJ30nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdXBwb3J0cyhub2RlKSB7XG4gICAgICAgICAgICAvLyBGSVhFRFxuICAgICAgICAgICAgcmV0dXJuICdAc3VwcG9ydHMgJyArIG5vZGUuc3VwcG9ydHMgKyAneycgKyB2aXNpdChub2RlLnJ1bGVzKSArICd9JztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB2aXNpdChub2Rlcykge1xuICAgICAgICBsZXQgYnVmID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbiA9IG5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYihuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVuZGVyTWV0aG9kc1tuLnR5cGVdKG4pO1xuXG4gICAgICAgICAgICBpZiAodHh0KSB7XG4gICAgICAgICAgICAgICAgYnVmICs9IHR4dDtcblxuICAgICAgICAgICAgICAgIGlmICh0eHQubGVuZ3RoICYmIG4uc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZiArPSBkZWxpbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdCh0cmVlLnN0eWxlc2hlZXQucnVsZXMpO1xufVxuXG5cbi8vIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnlDc3M7XG4iLCIvKipcbiAqIEJhc2VkIG9uIHJld29yay12aXNpdCBieSByZXdvcmtjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXdvcmtjc3MvcmV3b3JrLXZpc2l0XG4gKi9cblxuXG4vLyBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFZpc2l0IGBub2RlYCBkZWNsYXJhdGlvbnMgcmVjdXJzaXZlbHkgYW5kIGludm9rZSBgZm4oZGVjbGFyYXRpb25zLCBub2RlKWAuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG5vZGVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIHdhbGtDc3Mobm9kZSwgZm4pe1xuICAgIG5vZGUucnVsZXMuZm9yRWFjaChmdW5jdGlvbihydWxlKXtcbiAgICAgICAgLy8gQG1lZGlhIGV0Y1xuICAgICAgICBpZiAocnVsZS5ydWxlcykge1xuICAgICAgICAgICAgd2Fsa0NzcyhydWxlLCBmbik7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGtleWZyYW1lc1xuICAgICAgICBpZiAocnVsZS5rZXlmcmFtZXMpIHtcbiAgICAgICAgICAgIHJ1bGUua2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5ZnJhbWUpe1xuICAgICAgICAgICAgICAgIGlmIChrZXlmcmFtZS50eXBlID09PSAna2V5ZnJhbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGtleWZyYW1lLmRlY2xhcmF0aW9ucywgcnVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBjaGFyc2V0LCBAaW1wb3J0IGV0Y1xuICAgICAgICBpZiAoIXJ1bGUuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmbihydWxlLmRlY2xhcmF0aW9ucywgbm9kZSk7XG4gICAgfSk7XG59XG5cblxuLy8gRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IHdhbGtDc3M7XG4iLCIvKipcbiAqIEJhc2VkIG9uIHJld29yay12YXJzIGJ5IHJld29ya2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL3Jld29ya2Nzcy9yZXdvcmstdmFyc1xuICovXG5cblxuLy8gRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IGJhbGFuY2VkICAgICBmcm9tICdiYWxhbmNlZC1tYXRjaCc7XG5pbXBvcnQgcGFyc2VDc3MgICAgIGZyb20gJy4vcGFyc2UtY3NzJztcbmltcG9ydCBzdHJpbmdpZnlDc3MgZnJvbSAnLi9zdHJpbmdpZnktY3NzJztcbmltcG9ydCB3YWxrQ3NzICAgICAgZnJvbSAnLi93YWxrLWNzcyc7XG5cblxuLy8gQ29uc3RhbnRzICYgVmFyaWFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgVkFSX1BST1BfSURFTlRJRklFUiA9ICctLSc7XG5jb25zdCBWQVJfRlVOQ19JREVOVElGSUVSID0gJ3Zhcic7XG5jb25zdCB2YXJpYWJsZVN0b3JlICAgICAgID0ge1xuICAgIC8vIFBlcnNpc3RlZCBjdXN0b20gcHJvcGVydHkgdmFsdWVzIChtYXRjaGVzIG1vZGVybiBicm93c2VycylcbiAgICBkb20gOiB7fSxcbiAgICAvLyBOb24tcGVyc2lzdGVkIGN1c3RvbSBwcm9wZXJ0aWVzIHZhbHVlc1xuICAgIHRlbXA6IHt9LFxuICAgIC8vIFBlcnNpc3RlZCBjdXN0b20gcHJvcGVydHkgdmFsdWVzIHBhc3NlZCB1c2luZyBvcHRpb25zLnZhcmlhYmxlc1xuICAgIHVzZXI6IHt9XG59O1xuXG5cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogVHJhbnNmb3JtcyBXM0Mtc3R5bGUgQ1NTIHZhcmlhYmxlcyB0byBzdGF0aWMgdmFsdWVzIGFuZCByZXR1cm5zIGFuIHVwZGF0ZWRcbiAqIENTUyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICAgY3NzVGV4dCBDU1MgY29udGFpbmluZyB2YXJpYWJsZSBkZWZpbml0aW9ucyBhbmQgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLmZpeE5lc3RlZENhbGM9dHJ1ZV0gUmVtb3ZlcyBuZXN0ZWQgJ2NhbGMnIGtleXdvcmRzXG4gKiAgICAgICAgICAgICAgICAgICBmb3IgbGVnYWN5IGJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLm9ubHlWYXJzPWZhbHNlXSBSZW1vdmUgZGVjbGFyYXRpb25zIHRoYXQgZG8gbm90XG4gKiAgICAgICAgICAgICAgICAgICBjb250YWluIGEgQ1NTIHZhcmlhYmxlIGZyb20gdGhlIHJldHVybiB2YWx1ZS4gTm90ZSB0aGF0XG4gKiAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIGFuZCBAa2V5ZnJhbWUgcnVsZXMgcmVxdWlyZSBhbGwgZGVjbGFyYXRpb25zIHRvXG4gKiAgICAgICAgICAgICAgICAgICBiZSByZXR1cm5lZCBpZiBhIENTUyB2YXJpYWJsZSBpcyB1c2VkLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMucGVyc2lzdD1mYWxzZV0gUGVyc2lzdHMgb3B0aW9ucy52YXJpYWJsZXMsXG4gKiAgICAgICAgICAgICAgICAgICBhbGxvd2luZyB2YXJpYWJsZXMgc2V0IGluIHByZXZpb3VzIGNhbGxzIHRvIGJlIGFwcGxpZWQgaW5cbiAqICAgICAgICAgICAgICAgICAgIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5wcmVzZXJ2ZT1mYWxzZV0gUHJlc2VydmUgQ1NTIHZhcmlhYmxlIGRlZmluaXRpb25zXG4gKiAgICAgICAgICAgICAgICAgICBhbmQgZnVuY3Rpb25zIGluIHRoZSByZXR1cm4gdmFsdWUsIGFsbG93aW5nIFwibGl2ZVwiIHZhcmlhYmxlXG4gKiAgICAgICAgICAgICAgICAgICB1cGRhdGVzIHZpYSBKYXZhU2NyaXB0IHRvIGNvbnRpbnVlIHdvcmtpbmcgaW4gYnJvd3NlcnMgd2l0aFxuICogICAgICAgICAgICAgICAgICAgbmF0aXZlIENTUyB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMudmFyaWFibGVzPXt9XSBDU1MgdmFyaWFibGUgZGVmaW5pdGlvbnMgdG8gaW5jbHVkZVxuICogICAgICAgICAgICAgICAgICAgZHVyaW5nIHRyYW5zZm9ybWF0aW9uLiBDYW4gYmUgdXNlZCB0byBhZGQgbmV3IG92ZXJyaWRlXG4gKiAgICAgICAgICAgICAgICAgICBleGlzaXRuZyBkZWZpbml0aW9ucy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uV2FybmluZ10gQ2FsbGJhY2sgb24gZWFjaCB0cmFuc2Zvcm1hdGlvblxuICogICAgICAgICAgICAgICAgICAgd2FybmluZy4gUGFzc2VzIDEpIHdhcm5pbmdNZXNzYWdlIGFzIGFuIGFyZ3VtZW50LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtVmFycyhjc3NUZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgZml4TmVzdGVkQ2FsYzogdHJ1ZSxcbiAgICAgICAgb25seVZhcnMgICAgIDogZmFsc2UsXG4gICAgICAgIHBlcnNpc3QgICAgICA6IGZhbHNlLFxuICAgICAgICBwcmVzZXJ2ZSAgICAgOiBmYWxzZSxcbiAgICAgICAgdmFyaWFibGVzICAgIDoge30sXG4gICAgICAgIG9uV2FybmluZygpIHt9XG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBjb25zdCBtYXAgICAgICA9IHNldHRpbmdzLnBlcnNpc3QgPyB2YXJpYWJsZVN0b3JlLmRvbSA6IHZhcmlhYmxlU3RvcmUudGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFyaWFibGVTdG9yZS5kb20pKTtcblxuICAgIC8vIENvbnZlcnQgY3NzVGV4dCB0byBBU1QgKHRoaXMgY291bGQgdGhyb3cgZXJyb3JzKVxuICAgIGNvbnN0IGNzc1RyZWUgPSBwYXJzZUNzcyhjc3NUZXh0LCB7XG4gICAgICAgIG9ubHlWYXJzOiBzZXR0aW5ncy5vbmx5VmFyc1xuICAgIH0pO1xuXG4gICAgLy8gRGVmaW5lIHZhcmlhYmxlc1xuICAgIGNzc1RyZWUuc3R5bGVzaGVldC5ydWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgY29uc3QgdmFyTmFtZUluZGljZXMgPSBbXTtcblxuICAgICAgICBpZiAocnVsZS50eXBlICE9PSAncnVsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgdmFyaWFibGVzIGRlY2xhcmVkIGZvciBgOnJvb3RgIGFyZSBzdXBwb3J0ZWRcbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JzLmxlbmd0aCAhPT0gMSB8fCBydWxlLnNlbGVjdG9yc1swXSAhPT0gJzpyb290Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWNsLCBpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wID0gZGVjbC5wcm9wZXJ0eTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGVjbC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKFZBUl9QUk9QX0lERU5USUZJRVIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWFwW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyTmFtZUluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gb3B0aW9uYWxseSByZW1vdmUgYC0tKmAgcHJvcGVydGllcyBmcm9tIHRoZSBydWxlXG4gICAgICAgIGlmICghc2V0dGluZ3MucHJlc2VydmUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2YXJOYW1lSW5kaWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLnNwbGljZSh2YXJOYW1lSW5kaWNlc1tpXSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJlc3RvcmUgcGVyc2lzdGVkIHVzZXIgdmFsdWVzXG4gICAgT2JqZWN0LmtleXModmFyaWFibGVTdG9yZS51c2VyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIG1hcFtrZXldID0gdmFyaWFibGVTdG9yZS51c2VyW2tleV07XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgdmFyaWFibGVzIGRlZmluZWQgaW4gc2V0dGluZ3MudmFyaWFibGVzXG4gICAgaWYgKE9iamVjdC5rZXlzKHNldHRpbmdzLnZhcmlhYmxlcykubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5ld1J1bGUgPSB7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0b3JzICAgOiBbJzpyb290J10sXG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdydWxlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzLnZhcmlhYmxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgcHJvcGVydHkgbmFtZXMgdG8gbGVhZGluZyAnLS0nIHN0eWxlXG4gICAgICAgICAgICBjb25zdCBwcm9wICA9IGAtLSR7a2V5LnJlcGxhY2UoL14tKy8sICcnKX1gO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzZXR0aW5ncy52YXJpYWJsZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUGVyc2lzdCBzZXR0aW5ncy52YXJpYWJsZXMgdmFsdWVzXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MucGVyc2lzdCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlU3RvcmUudXNlcltwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgbWFwIHZhbHVlIHdpdGggc2V0dGluZ3MudmFyaWFibGVzIHZhbHVlXG4gICAgICAgICAgICBpZiAobWFwW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hcFtwcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIG5ldyBkZWNsYXJhdGlvbiB0byBuZXdSdWxlXG4gICAgICAgICAgICAgICAgbmV3UnVsZS5kZWNsYXJhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAnZGVjbGFyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBuZXcgOnJvb3QgcnVsZXNldFxuICAgICAgICBpZiAoc2V0dGluZ3MucHJlc2VydmUgJiYgbmV3UnVsZS5kZWNsYXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjc3NUcmVlLnN0eWxlc2hlZXQucnVsZXMucHVzaChuZXdSdWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc29sdmUgdmFyaWFibGVzXG4gICAgd2Fsa0Nzcyhjc3NUcmVlLnN0eWxlc2hlZXQsIGZ1bmN0aW9uKGRlY2xhcmF0aW9ucywgbm9kZSkge1xuICAgICAgICBsZXQgZGVjbDtcbiAgICAgICAgbGV0IHJlc29sdmVkVmFsdWU7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVjbCA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhbHVlID0gZGVjbC52YWx1ZTtcblxuICAgICAgICAgICAgLy8gc2tpcCBjb21tZW50c1xuICAgICAgICAgICAgaWYgKGRlY2wudHlwZSAhPT0gJ2RlY2xhcmF0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBza2lwIHZhbHVlcyB0aGF0IGRvbid0IGNvbnRhaW4gdmFyaWFibGUgZnVuY3Rpb25zXG4gICAgICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmluZGV4T2YoVkFSX0ZVTkNfSURFTlRJRklFUiArICcoJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmVkVmFsdWUgPSByZXNvbHZlVmFsdWUodmFsdWUsIG1hcCwgc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBpZiAocmVzb2x2ZWRWYWx1ZSAhPT0gZGVjbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghc2V0dGluZ3MucHJlc2VydmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjbC52YWx1ZSA9IHJlc29sdmVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc3BsaWNlKGksIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiBkZWNsLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogZGVjbC5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiByZXNvbHZlZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgYWhlYWQgb2YgcHJlc2VydmVkIGRlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEZpeCBuZXN0ZWQgY2FsYygpIHZhbHVlc1xuICAgIGlmIChzZXR0aW5ncy5maXhOZXN0ZWRDYWxjKSB7XG4gICAgICAgIGZpeE5lc3RlZENhbGMoY3NzVHJlZS5zdHlsZXNoZWV0LnJ1bGVzKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gQ1NTIHN0cmluZ1xuICAgIHJldHVybiBzdHJpbmdpZnlDc3MoY3NzVHJlZSk7XG59XG5cblxuLy8gRnVuY3Rpb25zIChQcml2YXRlKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogUmVtb3ZlcyBuZXN0ZWQgY2FsYyBrZXl3b3JkcyBmb3IgbGVnYWN5IGJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEV4YW1wbGU6IGNhbGMoMSArIGNhbGMoMiArIGNhbGMoMyArIDMpKSkgPT4gY2FsYygxICsgKDIgKyAoMyArIDMpKSlcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBydWxlc1xuICovXG5mdW5jdGlvbiBmaXhOZXN0ZWRDYWxjKHJ1bGVzKSB7XG4gICAgY29uc3QgcmVDYWxjRXhwID0gLygtW2Etel0rLSk/Y2FsY1xcKC87IC8vIE1hdGNoIFwiY2FsYyhcIiBvciBcIi12ZW5kb3ItY2FsYyhcIlxuXG4gICAgcnVsZXMuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgaWYgKHJ1bGUuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKGRlY2wgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IGRlY2wudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocmVDYWxjRXhwLnRlc3Qob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RDYWxjID0gYmFsYW5jZWQoJ2NhbGMoJywgJyknLCBvbGRWYWx1ZSB8fCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBvbGRWYWx1ZS5zbGljZShyb290Q2FsYy5lbmQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZUNhbGNFeHAudGVzdChyb290Q2FsYy5ib2R5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkQ2FsYyA9IGJhbGFuY2VkKHJlQ2FsY0V4cCwgJyknLCByb290Q2FsYy5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdENhbGMuYm9keSA9IGAke25lc3RlZENhbGMucHJlfSgke25lc3RlZENhbGMuYm9keX0pJHtuZXN0ZWRDYWxjLnBvc3R9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IGAke3Jvb3RDYWxjLnByZX1jYWxjKCR7cm9vdENhbGMuYm9keX1gO1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSAhcmVDYWxjRXhwLnRlc3Qob2xkVmFsdWUpID8gYCkke3Jvb3RDYWxjLnBvc3R9YCA6ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlY2wudmFsdWUgPSBuZXdWYWx1ZSB8fCBkZWNsLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBDU1MgdmFyKCkgZnVuY3Rpb24ocykgd2l0aCBgbWFwYCBkYXRhIG9yIGZhbGxiYWNrIHZhbHVlKHMpLiBSZXR1cm5zXG4gKiBvcmlnaW5hbCBgdmFsdWVgIGlmIHVuYWJsZSB0byByZXNvbHZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBTdHJpbmcgY29udGFpbmluZyBDU1MgdmFyKCkgZnVuY3Rpb25zIHRvIHJlc29sdmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXAgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBrZXkvdmFsdWVzXG4gKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgU2V0dGluZ3Mgb2JqZWN0IHBhc3NlZCBmcm9tIHRyYW5zZm9ybVZhcnMoKVxuICogQHBhcmFtIHtzdHJpbmd9IFtfX3JlY3Vyc2l2ZUZhbGxiYWNrXSBGYWxsYmFjayB3aGVuIHVuYWJsZSB0byByZXNvbHZlIENTU1xuICogICAgICAgICAgICAgICAgIHZhcigpIGZ1bmN0aW9uIHRvIGEgbWFwIG9yIGZhbGxiYWNrIHZhbHVlLiBBbGxvd3MgcmVzdG9yaW5nXG4gKiAgICAgICAgICAgICAgICAgb3JpZ2luYWwgdmFyKCkgZnVuY3Rpb24gZnJvbSByZWN1cnNpdmUgcmVzb2x2ZVZhbHVlKCkgY2FsbHMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IENTUyB2YWx1ZSB3aXRoIHZhcigpIGZ1bmN0aW9uKHMpIHJlc29sdmVkIHRvIG1hcCBvciBmYWxsYmFja1xuICogICAgICAgICAgICAgICAgICB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgcmVzb2x2ZVZhbHVlKCcxMHB4IHZhcigtLXgpIDMwcHgnLCB7Jy0teCc6JzIwcHgnfSwgey4uLnNldHRpbmdzfSk7XG4gKiAgIC8vID0+ICcxMHB4IDIwcHggMzBweCdcbiAqXG4gKiAgIHJlc29sdmVWYWx1ZSgnMTBweCcsIHt9LCB7Li4uc2V0dGluZ3N9KTtcbiAqICAgLy8gPT4gJzEwcHgnXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVWYWx1ZSh2YWx1ZSwgbWFwLCBzZXR0aW5ncyA9IHt9LCBfX3JlY3Vyc2l2ZUZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJ3ZhcignKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlRGF0YSA9IGJhbGFuY2VkKCcoJywgJyknLCB2YWx1ZSk7XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBjb250ZW50cyBvZiBDU1MgY3VzdG9tIHByb3BlcnR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgU3RyaW5nIGNvbnRhaW5pbmcgY29udGVudHMgb2YgQ1NTIHZhcigpIGZ1bmN0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiAgIHJlc29sdmVGdW5jKCctLXgsIHZhcigtLXksIGdyZWVuKScpXG4gICAgICogICAvLyA9PiBtYXBbJy0teCddIG9yIG1hcFsnLS15J10gb3IgJ2dyZWVuJ1xuICAgICAqXG4gICAgICogICByZXNvbHZlRnVuYygnLS1mYWlsJylcbiAgICAgKiAgIC8vID0+ICd2YXIoLS1mYWlsKScgd2hlbiBtYXBbJy0tZmFpbCddIGRvZXMgbm90IGV4aXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZ1bmModmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmFtZSAgICAgICAgICAgICAgID0gdmFsdWUuc3BsaXQoJywnKVswXS5yZXBsYWNlKC9bXFxzXFxuXFx0XS9nLCAnJyk7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrICAgICAgICAgICA9ICh2YWx1ZS5tYXRjaCgvKD86XFxzKixcXHMqKXsxfSguKik/LykgfHwgW10pWzFdO1xuICAgICAgICBjb25zdCBtYXRjaCAgICAgICAgICAgICAgPSBtYXAuaGFzT3duUHJvcGVydHkobmFtZSkgPyBTdHJpbmcobWFwW25hbWVdKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgICAgICAgID0gbWF0Y2ggfHwgKGZhbGxiYWNrID8gU3RyaW5nKGZhbGxiYWNrKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHVucmVzb2x2ZWRGYWxsYmFjayA9IF9fcmVjdXJzaXZlRmFsbGJhY2sgfHwgdmFsdWU7XG5cbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKGB2YXJpYWJsZSBcIiR7bmFtZX1cIiBpcyB1bmRlZmluZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudCAmJiByZXBsYWNlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVwbGFjZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVWYWx1ZShyZXBsYWNlbWVudCwgbWFwLCBzZXR0aW5ncywgdW5yZXNvbHZlZEZhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgdmFyKCR7dW5yZXNvbHZlZEZhbGxiYWNrfSlgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gYmFsYW5jZWQgYnJhY2UgZGF0YVxuICAgIGlmICghdmFsdWVEYXRhKSB7XG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCd2YXIoJykgIT09IC0xKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcoYG1pc3NpbmcgY2xvc2luZyBcIilcIiBpbiB0aGUgdmFsdWUgXCIke3ZhbHVlfVwiYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIC8vIEJhbGFuY2VkIGJyYWNlIGRhdGEgaXMgdmFyKCkgZnVuY3Rpb25cbiAgICBlbHNlIGlmICh2YWx1ZURhdGEucHJlLnNsaWNlKC0zKSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgY29uc3QgaXNFbXB0eVZhckZ1bmMgPSB2YWx1ZURhdGEuYm9keS50cmltKCkubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIGlmIChpc0VtcHR5VmFyRnVuYykge1xuICAgICAgICAgICAgc2V0dGluZ3Mub25XYXJuaW5nKCd2YXIoKSBtdXN0IGNvbnRhaW4gYSBub24td2hpdGVzcGFjZSBzdHJpbmcnKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB2YWx1ZURhdGEucHJlLnNsaWNlKDAsLTMpXG4gICAgICAgICAgICAgICAgKyByZXNvbHZlRnVuYyh2YWx1ZURhdGEuYm9keSlcbiAgICAgICAgICAgICAgICArIHJlc29sdmVWYWx1ZSh2YWx1ZURhdGEucG9zdCwgbWFwLCBzZXR0aW5ncylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFsYW5jZWQgYnJhY2UgZGF0YSBpcyBOT1QgdmFyKCkgZnVuY3Rpb25cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHZhbHVlRGF0YS5wcmVcbiAgICAgICAgICAgICsgYCgke3Jlc29sdmVWYWx1ZSh2YWx1ZURhdGEuYm9keSwgbWFwLCBzZXR0aW5ncyl9KWBcbiAgICAgICAgICAgICsgcmVzb2x2ZVZhbHVlKHZhbHVlRGF0YS5wb3N0LCBtYXAsIHNldHRpbmdzKVxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtVmFycztcbmV4cG9ydCB7IHZhcmlhYmxlU3RvcmUgfTsiLCIvLyBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgZ2V0Q3NzRGF0YSAgICAgICAgICBmcm9tICdnZXQtY3NzLWRhdGEnO1xuaW1wb3J0IHRyYW5zZm9ybUNzcyAgICAgICAgZnJvbSAnLi90cmFuc2Zvcm0tY3NzJztcbmltcG9ydCB7IHZhcmlhYmxlU3RvcmUgfSAgIGZyb20gJy4vdHJhbnNmb3JtLWNzcyc7XG5pbXBvcnQgeyBuYW1lIGFzIHBrZ05hbWUgfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5cbi8vIENvbnN0YW50cyAmIFZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGlzQnJvd3NlciAgICAgICA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuY29uc3QgaXNOYXRpdmVTdXBwb3J0ID0gaXNCcm93c2VyICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5zdXBwb3J0cyAmJiB3aW5kb3cuQ1NTLnN1cHBvcnRzKCcoLS1hOiAwKScpO1xuXG5jb25zdCBjb25zb2xlTXNnUHJlZml4ID0gJ2Nzc1ZhcnMoKTogJztcbmNvbnN0IGRlZmF1bHRzID0ge1xuICAgIC8vIFRhcmdldHNcbiAgICByb290RWxlbWVudCAgOiBpc0Jyb3dzZXIgPyBkb2N1bWVudCA6IG51bGwsXG4gICAgc2hhZG93RE9NICAgIDogZmFsc2UsXG4gICAgLy8gU291cmNlc1xuICAgIGluY2x1ZGUgICAgICA6ICdzdHlsZSxsaW5rW3JlbD1zdHlsZXNoZWV0XScsXG4gICAgZXhjbHVkZSAgICAgIDogJycsXG4gICAgdmFyaWFibGVzICAgIDoge30sICAgIC8vIHRyYW5zZm9ybUNzc1xuICAgIC8vIE9wdGlvbnNcbiAgICBmaXhOZXN0ZWRDYWxjOiB0cnVlLCAgLy8gdHJhbnNmb3JtQ3NzXG4gICAgb25seUxlZ2FjeSAgIDogdHJ1ZSwgIC8vIGNzc1ZhcnNcbiAgICBvbmx5VmFycyAgICAgOiBmYWxzZSwgLy8gY3NzVmFycywgcGFyc2VDU1NcbiAgICBwcmVzZXJ2ZSAgICAgOiBmYWxzZSwgLy8gdHJhbnNmb3JtQ3NzXG4gICAgc2lsZW50ICAgICAgIDogZmFsc2UsIC8vIGNzc1ZhcnNcbiAgICB1cGRhdGVET00gICAgOiB0cnVlLCAgLy8gY3NzVmFyc1xuICAgIHVwZGF0ZVVSTHMgICA6IHRydWUsICAvLyBjc3NWYXJzXG4gICAgd2F0Y2ggICAgICAgIDogbnVsbCwgIC8vIGNzc1ZhcnNcbiAgICAvLyBDYWxsYmFja3NcbiAgICBvbkJlZm9yZVNlbmQoKSB7fSwgICAgLy8gY3NzVmFyc1xuICAgIG9uU3VjY2VzcygpIHt9LCAgICAgICAvLyBjc3NWYXJzXG4gICAgb25XYXJuaW5nKCkge30sICAgICAgIC8vIHRyYW5zZm9ybUNzc1xuICAgIG9uRXJyb3IoKSB7fSwgICAgICAgICAvLyBjc3NWYXJzXG4gICAgb25Db21wbGV0ZSgpIHt9ICAgICAgIC8vIGNzc1ZhcnNcbn07XG5jb25zdCByZWdleCA9IHtcbiAgICAvLyBDU1MgY29tbWVudHNcbiAgICBjc3NDb21tZW50czogL1xcL1xcKltcXHNcXFNdKz9cXCpcXC8vZyxcbiAgICAvLyBDU1Mga2V5ZnJhbWVzIChAa2V5ZnJhbWVzICYgQC1WRU5ET1Ita2V5ZnJhbWVzKVxuICAgIGNzc0tleWZyYW1lczogL0AoPzotXFx3Ki0pP2tleWZyYW1lcy8sXG4gICAgLy8gQ1NTIHJvb3QgdmFyc1xuICAgIGNzc1Jvb3RSdWxlczogLyg/Ojpyb290XFxzKntcXHMqW159XSp9KS9nLFxuICAgIC8vIENTUyB1cmwoLi4uKSB2YWx1ZXNcbiAgICBjc3NVcmxzOiAvdXJsXFwoKD8hWydcIl0/KD86ZGF0YXxodHRwfFxcL1xcLyk6KVsnXCJdPyhbXidcIildKilbJ1wiXT9cXCkvZyxcbiAgICAvLyBDU1MgdmFyaWFibGUgOnJvb3QgZGVjbGFyYXRpb25zIGFuZCB2YXIoKSBmdW5jdGlvbiB2YWx1ZXNcbiAgICBjc3NWYXJzOiAvKD86KD86OnJvb3RcXHMqe1xccypbXjtdKjsqXFxzKil8KD86dmFyXFwoXFxzKikpKC0tW146KV0rKSg/OlxccypbOildKS9cbn07XG5cbi8vIE11dGF0aW9uIG9ic2VydmVyIHJlZmVyZW5jZSBjcmVhdGVkIHZpYSBvcHRpb25zLndhdGNoXG5sZXQgY3NzVmFyc09ic2VydmVyID0gbnVsbDtcblxuLy8gRGVib3VuY2UgdGltZXIgdXNlZCB3aXRoIG9wdGlvbnMud2F0Y2hcbmxldCBkZWJvdW5jZVRpbWVyID0gbnVsbDtcblxuLy8gSW5kaWNhdGVzIGlmIGRvY3VtZW50LWxldmVsIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZXMgaGF2ZSBiZWVuIHBhcnNlZCwgc3RvcmVkLFxuLy8gYW5kIHJlYWR5IGZvciB1c2Ugd2l0aCBvcHRpb25zLnNoYWRvd0RPTVxubGV0IGlzU2hhZG93RE9NUmVhZHkgPSBmYWxzZTtcblxuXG4vLyBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIEZldGNoZXMsIHBhcnNlcywgYW5kIHRyYW5zZm9ybXMgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGZyb20gc3BlY2lmaWVkXG4gKiA8c3R5bGU+IGFuZCA8bGluaz4gZWxlbWVudHMgaW50byBzdGF0aWMgdmFsdWVzLCB0aGVuIGFwcGVuZHMgYSBuZXcgPHN0eWxlPlxuICogZWxlbWVudCB3aXRoIHN0YXRpYyB2YWx1ZXMgdG8gdGhlIERPTSB0byBwcm92aWRlIENTUyBjdXN0b20gcHJvcGVydHlcbiAqIGNvbXBhdGliaWxpdHkgZm9yIGxlZ2FjeSBicm93c2Vycy4gQWxzbyBwcm92aWRlcyBhIHNpbmdsZSBpbnRlcmZhY2UgZm9yXG4gKiBsaXZlIHVwZGF0ZXMgb2YgcnVudGltZSB2YWx1ZXMgaW4gYm90aCBtb2Rlcm4gYW5kIGxlZ2FjeSBicm93c2Vycy5cbiAqXG4gKiBAcHJlc2VydmVcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9ICAgW29wdGlvbnMucm9vdEVsZW1lbnQ9ZG9jdW1lbnRdIFJvb3QgZWxlbWVudCB0byB0cmF2ZXJzZSBmb3JcbiAqICAgICAgICAgICAgICAgICAgIDxsaW5rPiBhbmQgPHN0eWxlPiBub2Rlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLnNoYWRvd0RPTT1mYWxzZV0gRGV0ZXJtaW5lcyBpZiBzaGFkb3cgRE9NIDxsaW5rPlxuICogICAgICAgICAgICAgICAgICAgYW5kIDxzdHlsZT4gbm9kZXMgd2lsbCBiZSBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBbb3B0aW9ucy5pbmNsdWRlPVwic3R5bGUsbGlua1tyZWw9c3R5bGVzaGVldF1cIl0gQ1NTIHNlbGVjdG9yXG4gKiAgICAgICAgICAgICAgICAgICBtYXRjaGluZyA8bGluayByZT1cInN0eWxlc2hlZXRcIj4gYW5kIDxzdHlsZT4gbm9kZXMgdG9cbiAqICAgICAgICAgICAgICAgICAgIHByb2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIFtvcHRpb25zLmV4Y2x1ZGVdIENTUyBzZWxlY3RvciBtYXRjaGluZyA8bGlua1xuICogICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVoc2VldFwiPiBhbmQgPHN0eWxlPiBub2RlcyB0byBleGNsdWRlIGZyb20gdGhvc2VcbiAqICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgYnkgb3B0aW9ucy5pbmNsdWRlXG4gKiBAcGFyYW0ge29iamVjdH0gICBbb3B0aW9ucy52YXJpYWJsZXNdIEEgbWFwIG9mIGN1c3RvbSBwcm9wZXJ0eSBuYW1lL3ZhbHVlXG4gKiAgICAgICAgICAgICAgICAgICBwYWlycy4gUHJvcGVydHkgbmFtZXMgY2FuIG9taXQgb3IgaW5jbHVkZSB0aGUgbGVhZGluZ1xuICogICAgICAgICAgICAgICAgICAgZG91YmxlLWh5cGhlbiAo4oCUKSwgYW5kIHZhbHVlcyBzcGVjaWZpZWQgd2lsbCBvdmVycmlkZVxuICogICAgICAgICAgICAgICAgICAgcHJldmlvdXMgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuZml4TmVzdGVkQ2FsYz10cnVlXSBSZW1vdmVzIG5lc3RlZCAnY2FsYycga2V5d29yZHNcbiAqICAgICAgICAgICAgICAgICAgIGZvciBsZWdhY3kgYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMub25seUxlZ2FjeT10cnVlXSBEZXRlcm1pbmVzIGlmIHRoZSBwb255ZmlsbCB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBvbmx5IGdlbmVyYXRlIGxlZ2FjeS1jb21wYXRpYmxlIENTUyBpbiBicm93c2VycyB0aGF0IGxhY2tcbiAqICAgICAgICAgICAgICAgICAgIG5hdGl2ZSBzdXBwb3J0IChpLmUuLCBsZWdhY3kgYnJvd3NlcnMpXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy5vbmx5VmFycz1mYWxzZV0gRGV0ZXJtaW5lcyBpZiBDU1MgcnVsZXNldHMgYW5kXG4gKiAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgd2l0aG91dCBhIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZSBzaG91bGQgYmVcbiAqICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgZnJvbSB0aGUgcG9ueWZpbGwtZ2VuZXJhdGVkIENTU1xuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMucHJlc2VydmU9ZmFsc2VdIERldGVybWluZXMgaWYgdGhlIG9yaWdpbmFsIENTU1xuICogICAgICAgICAgICAgICAgICAgY3VzdG9tIHByb3BlcnR5IGRlY2xhcmF0aW9uIHdpbGwgYmUgcmV0YWluZWQgaW4gdGhlXG4gKiAgICAgICAgICAgICAgICAgICBwb255ZmlsbC1nZW5lcmF0ZWQgQ1NTLlxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMuc2lsZW50PWZhbHNlXSBEZXRlcm1pbmVzIGlmIHdhcm5pbmcgYW5kIGVycm9yXG4gKiAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgY29uc29sZVxuICogQHBhcmFtIHtib29sZWFufSAgW29wdGlvbnMudXBkYXRlRE9NPXRydWVdIERldGVybWluZXMgaWYgdGhlIHBvbnlmaWxsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIHVwZGF0ZSB0aGUgRE9NIGFmdGVyIHByb2Nlc3NpbmcgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBbb3B0aW9ucy51cGRhdGVVUkxzPXRydWVdIERldGVybWluZXMgaWYgdGhlIHBvbnlmaWxsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgIGNvbnZlcnQgcmVsYXRpdmUgdXJsKCkgcGF0aHMgdG8gYWJzb2x1dGUgdXJscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIFtvcHRpb25zLndhdGNoPWZhbHNlXSBEZXRlcm1pbmVzIGlmIGEgTXV0YXRpb25PYnNlcnZlciB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICBiZSBjcmVhdGVkIHRoYXQgd2lsbCBleGVjdXRlIHRoZSBwb255ZmlsbCB3aGVuIGEgPGxpbms+IG9yXG4gKiAgICAgICAgICAgICAgICAgICA8c3R5bGU+IERPTSBtdXRhdGlvbiBpcyBvYnNlcnZlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQmVmb3JlU2VuZF0gQ2FsbGJhY2sgYmVmb3JlIFhIUiBpcyBzZW50LiBQYXNzZXNcbiAqICAgICAgICAgICAgICAgICAgIDEpIHRoZSBYSFIgb2JqZWN0LCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIGFuZCAzKSB0aGVcbiAqICAgICAgICAgICAgICAgICAgIHNvdXJjZSBVUkwgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25TdWNjZXNzXSBDYWxsYmFjayBhZnRlciBDU1MgZGF0YSBoYXMgYmVlblxuICogICAgICAgICAgICAgICAgICAgY29sbGVjdGVkIGZyb20gZWFjaCBub2RlIGFuZCBiZWZvcmUgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzXG4gKiAgICAgICAgICAgICAgICAgICBoYXZlIGJlZW4gdHJhbnNmb3JtZWQuIEFsbG93cyBtb2RpZnlpbmcgdGhlIENTUyBkYXRhIGJlZm9yZVxuICogICAgICAgICAgICAgICAgICAgaXQgaXMgdHJhbnNmb3JtZWQgYnkgcmV0dXJuaW5nIGFueSBzdHJpbmcgdmFsdWUgKG9yIGZhbHNlXG4gKiAgICAgICAgICAgICAgICAgICB0byBza2lwKS4gUGFzc2VzIDEpIENTUyB0ZXh0LCAyKSBzb3VyY2Ugbm9kZSByZWZlcmVuY2UsIGFuZFxuICogICAgICAgICAgICAgICAgICAgMykgdGhlIHNvdXJjZSBVUkwgYXMgYXJndW1lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25XYXJuaW5nXSBDYWxsYmFjayBhZnRlciBlYWNoIENTUyBwYXJzaW5nIHdhcm5pbmdcbiAqICAgICAgICAgICAgICAgICAgIGhhcyBvY2N1cnJlZC4gUGFzc2VzIDEpIGEgd2FybmluZyBtZXNzYWdlIGFzIGFuIGFyZ3VtZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25FcnJvcl0gQ2FsbGJhY2sgYWZ0ZXIgYSBDU1MgcGFyc2luZyBlcnJvciBoYXNcbiAqICAgICAgICAgICAgICAgICAgIG9jY3VycmVkIG9yIGFuIFhIUiByZXF1ZXN0IGhhcyBmYWlsZWQuIFBhc3NlcyAxKSBhbiBlcnJvclxuICogICAgICAgICAgICAgICAgICAgbWVzc2FnZSwgYW5kIDIpIHNvdXJjZSBub2RlIHJlZmVyZW5jZSwgMykgeGhyLCBhbmQgNCB1cmwgYXNcbiAqICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQ29tcGxldGVdIENhbGxiYWNrIGFmdGVyIGFsbCBDU1MgaGFzIGJlZW5cbiAqICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZCwgbGVnYWN5LWNvbXBhdGlibGUgQ1NTIGhhcyBiZWVuIGdlbmVyYXRlZCwgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAob3B0aW9uYWxseSkgdGhlIERPTSBoYXMgYmVlbiB1cGRhdGVkLiBQYXNzZXMgMSkgYSBDU1NcbiAqICAgICAgICAgICAgICAgICAgIHN0cmluZyB3aXRoIENTUyB2YXJpYWJsZSB2YWx1ZXMgcmVzb2x2ZWQsIDIpIGEgcmVmZXJlbmNlIHRvXG4gKiAgICAgICAgICAgICAgICAgICB0aGUgYXBwZW5kZWQgPHN0eWxlPiBub2RlLCAzKSBhbiBvYmplY3QgY29udGFpbmluZyBhbGxcbiAqICAgICAgICAgICAgICAgICAgIGN1c3RvbSBwcm9wZXJpZXMgbmFtZXMgYW5kIHZhbHVlcywgYW5kIDQpIHRoZSBwb255ZmlsbFxuICogICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uIHRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICBjc3NWYXJzKHtcbiAqICAgICByb290RWxlbWVudCAgOiBkb2N1bWVudCxcbiAqICAgICBzaGFkb3dET00gICAgOiBmYWxzZSxcbiAqICAgICBpbmNsdWRlICAgICAgOiAnc3R5bGUsbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyxcbiAqICAgICBleGNsdWRlICAgICAgOiAnJyxcbiAqICAgICB2YXJpYWJsZXMgICAgOiB7fSxcbiAqICAgICBmaXhOZXN0ZWRDYWxjOiB0cnVlLFxuICogICAgIG9ubHlMZWdhY3kgICA6IHRydWUsXG4gKiAgICAgb25seVZhcnMgICAgIDogZmFsc2UsXG4gKiAgICAgcHJlc2VydmUgICAgIDogZmFsc2UsXG4gKiAgICAgc2lsZW50ICAgICAgIDogZmFsc2UsXG4gKiAgICAgdXBkYXRlRE9NICAgIDogdHJ1ZSxcbiAqICAgICB1cGRhdGVVUkxzICAgOiB0cnVlLFxuICogICAgIHdhdGNoICAgICAgICA6IGZhbHNlLFxuICogICAgIG9uQmVmb3JlU2VuZCh4aHIsIG5vZGUsIHVybCkge30sXG4gKiAgICAgb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge30sXG4gKiAgICAgb25XYXJuaW5nKG1lc3NhZ2UpIHt9LFxuICogICAgIG9uRXJyb3IobWVzc2FnZSwgbm9kZSwgeGhyLCB1cmwpIHt9LFxuICogICAgIG9uQ29tcGxldGUoY3NzVGV4dCwgc3R5bGVOb2RlLCBjc3NWYXJpYWJsZXMsIGJlbmNobWFyaykge31cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIGNzc1ZhcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgICAgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3R5bGVOb2RlSWQgPSBwa2dOYW1lO1xuXG4gICAgLy8gQWx3YXlzIGV4Y2x1ZGUgc3R5bGVOb2RlSWQgZWxlbWVudCwgd2hpY2ggaXMgdGhlIGdlbmVyYXRlZCA8c3R5bGU+IG5vZGVcbiAgICAvLyBjb250YWluaW5nIHByZXZpb3VzbHkgdHJhbnNmb3JtZWQgQ1NTLlxuICAgIHNldHRpbmdzLmV4Y2x1ZGUgPSBgIyR7c3R5bGVOb2RlSWR9YCArIChzZXR0aW5ncy5leGNsdWRlID8gYCwke3NldHRpbmdzLmV4Y2x1ZGV9YCA6ICcnKTtcblxuICAgIC8vIFN0b3JlIGJlbmNobWFyayBzdGFydCB0aW1lXG4gICAgc2V0dGluZ3MuX2JlbmNobWFyayA9ICFzZXR0aW5ncy5fYmVuY2htYXJrID8gZ2V0VGltZVN0YW1wKCkgOiBzZXR0aW5ncy5fYmVuY2htYXJrO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IobWVzc2FnZSwgc291cmNlTm9kZSwgeGhyLCB1cmwpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5zaWxlbnQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtjb25zb2xlTXNnUHJlZml4fSR7bWVzc2FnZX1cXG5gLCBzb3VyY2VOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLm9uRXJyb3IobWVzc2FnZSwgc291cmNlTm9kZSwgeGhyLCB1cmwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVdhcm5pbmcobWVzc2FnZSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Y29uc29sZU1zZ1ByZWZpeH0ke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0aW5ncy5vbldhcm5pbmcobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy8gRXhpdCBpZiBub24tYnJvd3NlciBlbnZpcm9ubWVudCAoZS5nLiBOb2RlKVxuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEaXNjb25uZWN0IGV4aXN0aW5nIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICBpZiAoc2V0dGluZ3Mud2F0Y2ggPT09IGZhbHNlICYmIGNzc1ZhcnNPYnNlcnZlcikge1xuICAgICAgICBjc3NWYXJzT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCAvIHJlY3JlYXRlIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICBpZiAoc2V0dGluZ3Mud2F0Y2gpIHtcbiAgICAgICAgYWRkTXV0YXRpb25PYnNlcnZlcihzZXR0aW5ncywgc3R5bGVOb2RlSWQpO1xuICAgICAgICBjc3NWYXJzRGVib3VuY2VkKHNldHRpbmdzKTtcbiAgICB9XG4gICAgLy8gVmVyaWZ5IHJlYWR5U3RhdGUgdG8gZW5zdXJlIGFsbCA8bGluaz4gYW5kIDxzdHlsZT4gbm9kZXMgYXJlIGF2YWlsYWJsZVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICBjb25zdCBpc1NoYWRvd0VsbSA9IHNldHRpbmdzLnNoYWRvd0RPTSB8fCBzZXR0aW5ncy5yb290RWxlbWVudC5zaGFkb3dSb290IHx8IHNldHRpbmdzLnJvb3RFbGVtZW50Lmhvc3Q7XG5cbiAgICAgICAgLy8gTmF0aXZlIHN1cHBvcnRcbiAgICAgICAgaWYgKGlzTmF0aXZlU3VwcG9ydCAmJiBzZXR0aW5ncy5vbmx5TGVnYWN5KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBzZXR0aW5ncy52YXJpYWJsZXNcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVET00pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbG0gPSBzZXR0aW5ncy5yb290RWxlbWVudC5ob3N0IHx8IChzZXR0aW5ncy5yb290RWxlbWVudCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBzZXR0aW5ncy5yb290RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgdmFyaWFibGVzIHVzaW5nIG5hdGl2ZSBtZXRob2RzXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2V0dGluZ3MudmFyaWFibGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIHByb3BlcnR5IG5hbWVzIHRvIGxlYWRpbmcgJy0tJyBzdHlsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wICA9IGAtLSR7a2V5LnJlcGxhY2UoL14tKy8sICcnKX1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNldHRpbmdzLnZhcmlhYmxlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUG9ueWZpbGw6IEhhbmRsZSByb290RWxlbWVudCBzZXQgdG8gYSBzaGFkb3cgaG9zdCBvciByb290XG4gICAgICAgIGVsc2UgaWYgKGlzU2hhZG93RWxtICYmICFpc1NoYWRvd0RPTVJlYWR5KSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIGRvY3VtZW50LWxldmVsIENTU1xuICAgICAgICAgICAgZ2V0Q3NzRGF0YSh7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IGRlZmF1bHRzLnJvb3RFbGVtZW50LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IGRlZmF1bHRzLmluY2x1ZGUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogc2V0dGluZ3MuZXhjbHVkZSxcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc1Jvb3REZWNscyA9IChjc3NUZXh0Lm1hdGNoKHJlZ2V4LmNzc1Jvb3RSdWxlcykgfHwgW10pLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBvbmx5IG1hdGNoaW5nIDpyb290IHsuLi59IGJsb2Nrc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUm9vdERlY2xzIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgbm9kZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBDU1MsIHdoaWNoIHN0b3JlcyBjdXN0b20gcHJvcGVydHkgdmFsdWVzIGZyb21cbiAgICAgICAgICAgICAgICAgICAgLy8gY3NzVGV4dCBpbiB2YXJpYWJsZVN0b3JlLiBUaGlzIHN0ZXAgZW5zdXJlcyB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlU3RvcmUgY29udGFpbnMgYWxsIGRvY3VtZW50LWxldmVsIGN1c3RvbSBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZXMgZm9yIHN1YnNlcXVlbnQgcG9ueWZpbGwgY2FsbHMuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNzcyhjc3NUZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlzU2hhZG93RE9NUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvbnlmaWxsIGFnYWluIHRvIHByb2Nlc3MgdGhlIHJvb3RFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWxseSBzcGVjaWZpZWQuIFZhbHVlcyBzdG9yZWQgaW4gdmFyaWFibGVTdG9yZSB3aWxsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIHVzZWQgdG8gdHJhbnNmb3JtIHZhbHVlcyBpbiBzaGFkb3cgaG9zdC9yb290IGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICBjc3NWYXJzKHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQb255ZmlsbDogUHJvY2VzcyBDU1NcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnZXRDc3NEYXRhKHtcbiAgICAgICAgICAgICAgICByb290RWxlbWVudDogc2V0dGluZ3Mucm9vdEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogc2V0dGluZ3MuaW5jbHVkZSxcbiAgICAgICAgICAgICAgICBleGNsdWRlOiBzZXR0aW5ncy5leGNsdWRlLFxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZmlsdGVyIGRvZXMgYSB0ZXN0IG9uIGVhY2ggYmxvY2sgb2YgQ1NTLiBBbiBhZGRpdGlvbmFsXG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIGlzIHVzZWQgaW4gdGhlIHBhcnNlciB0byByZW1vdmUgaW5kaXZpZHVhbFxuICAgICAgICAgICAgICAgIC8vIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHNldHRpbmdzLm9ubHlWYXJzID8gcmVnZXguY3NzVmFycyA6IG51bGwsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVTZW5kOiBzZXR0aW5ncy5vbkJlZm9yZVNlbmQsXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGNzc1RleHQsIG5vZGUsIHVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWwgPSBzZXR0aW5ncy5vblN1Y2Nlc3MoY3NzVGV4dCwgbm9kZSwgdXJsKTtcblxuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gcmV0dXJuVmFsICE9PSB1bmRlZmluZWQgJiYgQm9vbGVhbihyZXR1cm5WYWwpID09PSBmYWxzZSA/ICcnIDogcmV0dXJuVmFsIHx8IGNzc1RleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGF0dHJpYnV0ZSB0byBpbmRpY2F0ZSBub2RlIGhhcyBiZWVuIHByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1jc3N2YXJzJywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgcmVsYXRpdmUgdXJsKC4uLikgdmFsdWVzIHRvIGFic29sdXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVVUkxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NVcmxzID0gY3NzVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjb21tZW50cyB0byBhdm9pZCBwcm9jZXNzaW5nIEBpbXBvcnQgaW4gY29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyZWdleC5jc3NDb21tZW50cywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggdXJsKC4uLikgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGNoKHJlZ2V4LmNzc1VybHMpIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NVcmxzLmZvckVhY2goY3NzVXJsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRVcmwgPSBjc3NVcmwucmVwbGFjZShyZWdleC5jc3NVcmxzLCAnJDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSBnZXRGdWxsVXJsKG9sZFVybCwgdXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoY3NzVXJsLCBjc3NVcmwucmVwbGFjZShvbGRVcmwsIG5ld1VybCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzVGV4dDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRXJyb3IoeGhyLCBub2RlLCB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VVcmwgPSB4aHIucmVzcG9uc2VVUkwgfHwgZ2V0RnVsbFVybCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNUZXh0ICA9IHhoci5zdGF0dXNUZXh0ID8gYCgke3hoci5zdGF0dXNUZXh0fSlgIDogJ1Vuc3BlY2lmaWVkIEVycm9yJyArICh4aHIuc3RhdHVzID09PSAwID8gJyAocG9zc2libHkgQ09SUyByZWxhdGVkKScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnICAgID0gYENTUyBYSFIgRXJyb3I6ICR7cmVzcG9uc2VVcmx9ICR7eGhyLnN0YXR1c30gJHtzdGF0dXNUZXh0fWA7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3JNc2csIG5vZGUsIHhociwgcmVzcG9uc2VVcmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShjc3NUZXh0LCBjc3NBcnJheSwgbm9kZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc01hcmtlciAgID0gL1xcL1xcKl9fQ1NTVkFSU1BPTllGSUxMLShcXGQrKV9fXFwqXFwvL2c7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc1NldHRpbmdzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSAgICAgIDogc2V0dGluZ3MuaW5jbHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGUgICAgICA6IHNldHRpbmdzLmV4Y2x1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgICAgOiBzZXR0aW5ncy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhOZXN0ZWRDYWxjOiBzZXR0aW5ncy5maXhOZXN0ZWRDYWxjLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25seVZhcnMgICAgIDogc2V0dGluZ3Mub25seVZhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZSAgICAgOiBzZXR0aW5ncy5wcmVzZXJ2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbGVudCAgICAgICA6IHNldHRpbmdzLnNpbGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVSTHMgICA6IHNldHRpbmdzLnVwZGF0ZVVSTHNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlTm9kZSAgPSBzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzdHlsZU5vZGVJZH1gKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGF0YSAgID0gc3R5bGVOb2RlLl9fY3NzVmFycyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYW1lRGF0YSA9IHByZXZEYXRhLmNzc1RleHQgPT09IGNzc1RleHQgJiYgcHJldkRhdGEuc2V0dGluZ3MgPT09IGNzc1NldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNLZXlmcmFtZXNXaXRoVmFycztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTYW1lRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGNzc1RleHQgdG8gZXhpc3RpbmcgdHJhbnNmb3JtZWQgQ1NTXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gc3R5bGVOb2RlLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5ncy5zaWxlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYCR7Y29uc29sZU1zZ1ByZWZpeH1ObyBjaGFuZ2VzYCwgc3R5bGVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGRhdGEgZm9yIGNvbXBhcmlzb24gb24gc3Vic2VxdWVudCBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOb2RlLl9fY3NzVmFycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBjc3NTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29uY2F0ZW5hdGUgY3NzQXJyYXkgaXRlbXMsIHJlcGxhY2luZyB0aG9zZSB0aGF0IGRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgY29udGFpbiBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVjbGFyYWlvbiBvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gd2l0aCBhIHRlbXBvcmFyeSBtYXJrZXIgLiBBZnRlciB0aGUgQ1NTIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1lZCwgdGhlIG1hcmtlcnMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hpbmcgY3NzQXJyYXkgaXRlbS4gVGhpcyBvcHRpbWl6YXRpb24gaXMgZG9uZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgcHJvY2Vzc2luZyBDU1MgdGhhdCB3aWxsIG5vdCBjaGFuZ2UgYXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0cyBvZiB0aGUgcG9ueWZpbGwuXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzQXJyYXkubWFwKChjc3MsIGkpID0+IHJlZ2V4LmNzc1ZhcnMudGVzdChjc3MpID8gY3NzIDogYC8qX19DU1NWQVJTUE9OWUZJTEwtJHtpfV9fKi9gKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gdHJhbnNmb3JtQ3NzKGNzc1RleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4TmVzdGVkQ2FsYzogc2V0dGluZ3MuZml4TmVzdGVkQ2FsYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seVZhcnMgICAgIDogc2V0dGluZ3Mub25seVZhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QgICAgICA6IHNldHRpbmdzLnVwZGF0ZURPTSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmUgICAgIDogc2V0dGluZ3MucHJlc2VydmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcyAgICA6IHNldHRpbmdzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25XYXJuaW5nICAgIDogaGFuZGxlV2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzS2V5ZnJhbWVzV2l0aFZhcnMgPSByZWdleC5jc3NLZXlmcmFtZXMudGVzdChjc3NUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgbWFya2VycyB3aXRoIGFwcHJvcHJpYXRlIGNzc0FycmF5IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKGNzc01hcmtlciwgKG1hdGNoLCBncm91cDEpID0+IGNzc0FycmF5W2dyb3VwMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yVGhyb3duID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIGNzc0FycmF5IHRvIGRldGVjdCBDU1MgdGV4dCBhbmQgbm9kZShzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpYmlsZSBmb3IgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQXJyYXkuZm9yRWFjaCgoY3NzVGV4dCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCA9IHRyYW5zZm9ybUNzcyhjc3NUZXh0LCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck5vZGUgPSBub2RlQXJyYXlbaSAtIDBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIubWVzc2FnZSwgZXJyb3JOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIGV2ZW50IHRoZSBlcnJvciB0aHJvd24gd2FzIG5vdCBkdWUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1Dc3MsIGhhbmRsZSB0aGUgb3JpZ2luYWwgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBzaGFkb3cgRE9NXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zaGFkb3dET00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsbXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mucm9vdEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3Mucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVyYXRlcyBvdmVyIGFsbCBlbGVtZW50cyBpbiByb290RWxlbWVudCBhbmQgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNzc1ZhcnMgb24gZWFjaCBzaGFkb3dSb290LCBwYXNzaW5nIGRvY3VtZW50LWxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllcyBhcyBvcHRpb25zLnZhcmlhYmxlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBlbG07IChlbG0gPSBlbG1zW2ldKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsbS5zaGFkb3dSb290ICYmIGVsbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQ6IGVsbS5zaGFkb3dSb290LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzICA6IHZhcmlhYmxlU3RvcmUuZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1ZhcnMoc2hhZG93U2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRGF0YSAmJiBub2RlQXJyYXkgJiYgbm9kZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzTm9kZXMgPSBzZXR0aW5ncy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW2RhdGEtY3NzdmFyc10sc3R5bGVbZGF0YS1jc3N2YXJzXScpIHx8IHNldHRpbmdzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsKz1cInN0eWxlc2hlZXRcIl0sc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gY3NzTm9kZXMgPyBjc3NOb2Rlc1tjc3NOb2Rlcy5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCBwb255ZmlsbCA8c3R5bGU+IGFmdGVyIGxhc3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVOb2RlLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgcG9ueWZpbGwgPHN0eWxlPiBhZnRlciBsYXN0IGxpbmsvc3R5bGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHNldHRpbmdzLnJvb3RFbGVtZW50LmhlYWQgfHwgc2V0dGluZ3Mucm9vdEVsZW1lbnQuYm9keSB8fCBzZXR0aW5ncy5yb290RWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnVwZGF0ZURPTSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgc3R5bGVOb2RlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTm9kZS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzS2V5ZnJhbWVzV2l0aFZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4S2V5ZnJhbWVzKHNldHRpbmdzLnJvb3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQ29tcGxldGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXR0aW5ncy51cGRhdGVET00gPyB2YXJpYWJsZVN0b3JlLmRvbSA6IHZhcmlhYmxlU3RvcmUudGVtcCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRpbWVTdGFtcCgpIC0gc2V0dGluZ3MuX2JlbmNobWFya1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIERlbGF5IGZ1bmN0aW9uIHVudGlsIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQgaXMgZmlyZWRcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gaW5pdChldnQpIHtcbiAgICAgICAgICAgIGNzc1ZhcnMob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIERlYm91bmNlcyBjc3NWYXJzKCkgY2FsbHNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NcbiAqL1xuZnVuY3Rpb24gY3NzVmFyc0RlYm91bmNlZChzZXR0aW5ncykge1xuICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcbiAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0dGluZ3MuX2JlbmNobWFyayA9IG51bGw7XG4gICAgICAgIGNzc1ZhcnMoc2V0dGluZ3MpO1xuICAgIH0sIDEwMCk7XG59XG5cblxuLy8gRnVuY3Rpb25zIChQcml2YXRlKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogQ3JlYXRlcyBtdXRhdGlvbiBvYnNlcnZlciB0aGF0IGV4ZWN1dGVzIHRoZSBwb255ZmlsbCB3aGVuIGEgPGxpbms+IG9yIDxzdHlsZT5cbiAqIERPTSBtdXRhdGlvbiBpcyBvYnNlcnZlZC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZ25vcmVJZFxuICovXG5mdW5jdGlvbiBhZGRNdXRhdGlvbk9ic2VydmVyKHNldHRpbmdzLCBpZ25vcmVJZCkge1xuICAgIGlmICghd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGluayAgPSBub2RlID0+IG5vZGUudGFnTmFtZSA9PT0gJ0xJTksnICYmIChub2RlLmdldEF0dHJpYnV0ZSgncmVsJykgfHwgJycpLmluZGV4T2YoJ3N0eWxlc2hlZXQnKSAhPT0gLTE7XG4gICAgY29uc3QgaXNTdHlsZSA9IG5vZGUgPT4gbm9kZS50YWdOYW1lID09PSAnU1RZTEUnICYmIChpZ25vcmVJZCA/IG5vZGUuaWQgIT09IGlnbm9yZUlkIDogdHJ1ZSk7XG5cbiAgICBpZiAoY3NzVmFyc09ic2VydmVyKSB7XG4gICAgICAgIGNzc1ZhcnNPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgc2V0dGluZ3Mud2F0Y2ggPSBkZWZhdWx0cy53YXRjaDtcblxuICAgIGNzc1ZhcnNPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYXNDU1NNdXRhdGlvbiA9IG11dGF0aW9ucy5zb21lKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGlzQ1NTTXV0YXRpb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICAgIGlzQ1NTTXV0YXRpb24gPSBpc0xpbmsobXV0YXRpb24udGFyZ2V0KSB8fCBpc1N0eWxlKG11dGF0aW9uLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkTm9kZXMgICA9IEFycmF5LmFwcGx5KG51bGwsIG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmFwcGx5KG51bGwsIG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICBpc0NTU011dGF0aW9uID0gW10uY29uY2F0KGFkZGVkTm9kZXMsIHJlbW92ZWROb2Rlcykuc29tZShub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZExpbmsgID0gaXNMaW5rKG5vZGUpICYmICFub2RlLmRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbGlkU3R5bGUgPSBpc1N0eWxlKG5vZGUpICYmIHJlZ2V4LmNzc1ZhcnMudGVzdChub2RlLnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzVmFsaWRMaW5rIHx8IGlzVmFsaWRTdHlsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpc0NTU011dGF0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaGFzQ1NTTXV0YXRpb24pIHtcbiAgICAgICAgICAgIGNzc1ZhcnNEZWJvdW5jZWQoc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjc3NWYXJzT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlcyAgICAgOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnaHJlZiddLFxuICAgICAgICBjaGlsZExpc3QgICAgICA6IHRydWUsXG4gICAgICAgIHN1YnRyZWUgICAgICAgIDogdHJ1ZVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpeGVzIGlzc3VlIHdpdGgga2V5ZnJhbWUgcHJvcGVydGllcyBzZXQgdXNpbmcgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBub3QgYmVpbmdcbiAqIGFwcGxpZWQgcHJvcGVybHkgaW4gc29tZSBsZWdhY3kgKElFKSBhbmQgbW9kZXJuIChTYWZhcmkpIGJyb3dzZXJzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290RWxlbWVudFxuICovXG5mdW5jdGlvbiBmaXhLZXlmcmFtZXMocm9vdEVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmltYXRpb25OYW1lUHJvcCA9IFtcbiAgICAgICAgJ2FuaW1hdGlvbi1uYW1lJyxcbiAgICAgICAgJy1tb3otYW5pbWF0aW9uLW5hbWUnLFxuICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24tbmFtZSdcbiAgICBdLmZpbHRlcihwcm9wID0+IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlbcHJvcF0pWzBdO1xuXG4gICAgaWYgKGFuaW1hdGlvbk5hbWVQcm9wKSB7XG4gICAgICAgIGNvbnN0IGFsbE5vZGVzICAgICAgPSByb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICAgICAgICBjb25zdCBrZXlmcmFtZU5vZGVzID0gW107XG4gICAgICAgIGNvbnN0IG5hbWVNYXJrZXIgICAgPSAnX19DU1NWQVJTUE9OWUZJTEwtS0VZRlJBTUVTX18nO1xuXG4gICAgICAgIC8vIE1vZGlmeSBhbmltYXRpb24gbmFtZVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWxsTm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgICAgICAgICAgPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpW2FuaW1hdGlvbk5hbWVQcm9wXTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbk5hbWUgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbYW5pbWF0aW9uTmFtZVByb3BdICs9IG5hbWVNYXJrZXI7XG4gICAgICAgICAgICAgICAga2V5ZnJhbWVOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yY2UgcmVmbG93XG4gICAgICAgIHZvaWQgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBhbmltYXRpb24gbmFtZVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5ZnJhbWVOb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVN0eWxlID0ga2V5ZnJhbWVOb2Rlc1tpXS5zdHlsZTtcblxuICAgICAgICAgICAgbm9kZVN0eWxlW2FuaW1hdGlvbk5hbWVQcm9wXSA9IG5vZGVTdHlsZVthbmltYXRpb25OYW1lUHJvcF0ucmVwbGFjZShuYW1lTWFya2VyLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBmdWxseSBxdWFsaWZpZWQgVVJMIGZyb20gcmVsYXRpdmUgVVJMIGFuZCAob3B0aW9uYWwpIGJhc2UgVVJMXG4gKlxuICogQHBhcmFtICAge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0gICB7c3RyaW5nfSBbYmFzZT1sb2NhdGlvbi5ocmVmXVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RnVsbFVybCh1cmwsIGJhc2UgPSBsb2NhdGlvbi5ocmVmKSB7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgY29uc3QgYiA9IGQuY3JlYXRlRWxlbWVudCgnYmFzZScpO1xuICAgIGNvbnN0IGEgPSBkLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGQuaGVhZC5hcHBlbmRDaGlsZChiKTtcbiAgICBkLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgYi5ocmVmID0gYmFzZTtcbiAgICBhLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4gYS5ocmVmO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB0aW1lIHN0YW1wIGluIG1pbGxpc2Vjb25kc1xuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWVTdGFtcCgpIHtcbiAgICByZXR1cm4gaXNCcm93c2VyICYmICh3aW5kb3cucGVyZm9ybWFuY2UgfHwge30pLm5vdyA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG5cbi8vIEV4cG9ydFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IGNzc1ZhcnM7XG4iLCIvKiEgbnBtLmltL29iamVjdC1maXQtaW1hZ2VzIDMuMi40ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBPRkkgPSAnYmZyZWQtaXQ6b2JqZWN0LWZpdC1pbWFnZXMnO1xudmFyIHByb3BSZWdleCA9IC8ob2JqZWN0LWZpdHxvYmplY3QtcG9zaXRpb24pXFxzKjpcXHMqKFstLlxcd1xccyVdKykvZztcbnZhciB0ZXN0SW1nID0gdHlwZW9mIEltYWdlID09PSAndW5kZWZpbmVkJyA/IHtzdHlsZTogeydvYmplY3QtcG9zaXRpb24nOiAxfX0gOiBuZXcgSW1hZ2UoKTtcbnZhciBzdXBwb3J0c09iamVjdEZpdCA9ICdvYmplY3QtZml0JyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzT2JqZWN0UG9zaXRpb24gPSAnb2JqZWN0LXBvc2l0aW9uJyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzT0ZJID0gJ2JhY2tncm91bmQtc2l6ZScgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c0N1cnJlbnRTcmMgPSB0eXBlb2YgdGVzdEltZy5jdXJyZW50U3JjID09PSAnc3RyaW5nJztcbnZhciBuYXRpdmVHZXRBdHRyaWJ1dGUgPSB0ZXN0SW1nLmdldEF0dHJpYnV0ZTtcbnZhciBuYXRpdmVTZXRBdHRyaWJ1dGUgPSB0ZXN0SW1nLnNldEF0dHJpYnV0ZTtcbnZhciBhdXRvTW9kZUVuYWJsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gY3JlYXRlUGxhY2Vob2xkZXIodywgaCkge1xuXHRyZXR1cm4gKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSdcIiArIHcgKyBcIicgaGVpZ2h0PSdcIiArIGggKyBcIiclM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG5mdW5jdGlvbiBwb2x5ZmlsbEN1cnJlbnRTcmMoZWwpIHtcblx0aWYgKGVsLnNyY3NldCAmJiAhc3VwcG9ydHNDdXJyZW50U3JjICYmIHdpbmRvdy5waWN0dXJlZmlsbCkge1xuXHRcdHZhciBwZiA9IHdpbmRvdy5waWN0dXJlZmlsbC5fO1xuXHRcdC8vIHBhcnNlIHNyY3NldCB3aXRoIHBpY3R1cmVmaWxsIHdoZXJlIGN1cnJlbnRTcmMgaXNuJ3QgYXZhaWxhYmxlXG5cdFx0aWYgKCFlbFtwZi5uc10gfHwgIWVsW3BmLm5zXS5ldmFsZWQpIHtcblx0XHRcdC8vIGZvcmNlIHN5bmNocm9ub3VzIHNyY3NldCBwYXJzaW5nXG5cdFx0XHRwZi5maWxsSW1nKGVsLCB7cmVzZWxlY3Q6IHRydWV9KTtcblx0XHR9XG5cblx0XHRpZiAoIWVsW3BmLm5zXS5jdXJTcmMpIHtcblx0XHRcdC8vIGZvcmNlIHBpY3R1cmVmaWxsIHRvIHBhcnNlIHNyY3NldFxuXHRcdFx0ZWxbcGYubnNdLnN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0cGYuZmlsbEltZyhlbCwge3Jlc2VsZWN0OiB0cnVlfSk7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0cmlldmUgcGFyc2VkIGN1cnJlbnRTcmMsIGlmIGFueVxuXHRcdGVsLmN1cnJlbnRTcmMgPSBlbFtwZi5uc10uY3VyU3JjIHx8IGVsLnNyYztcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZShlbCkge1xuXHR2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKS5mb250RmFtaWx5O1xuXHR2YXIgcGFyc2VkO1xuXHR2YXIgcHJvcHMgPSB7fTtcblx0d2hpbGUgKChwYXJzZWQgPSBwcm9wUmVnZXguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0cHJvcHNbcGFyc2VkWzFdXSA9IHBhcnNlZFsyXTtcblx0fVxuXHRyZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyKGltZywgd2lkdGgsIGhlaWdodCkge1xuXHQvLyBEZWZhdWx0OiBmaWxsIHdpZHRoLCBubyBoZWlnaHRcblx0dmFyIHBsYWNlaG9sZGVyID0gY3JlYXRlUGxhY2Vob2xkZXIod2lkdGggfHwgMSwgaGVpZ2h0IHx8IDApO1xuXG5cdC8vIE9ubHkgc2V0IHBsYWNlaG9sZGVyIGlmIGl0J3MgZGlmZmVyZW50XG5cdGlmIChuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChpbWcsICdzcmMnKSAhPT0gcGxhY2Vob2xkZXIpIHtcblx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChpbWcsICdzcmMnLCBwbGFjZWhvbGRlcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gb25JbWFnZVJlYWR5KGltZywgY2FsbGJhY2spIHtcblx0Ly8gbmF0dXJhbFdpZHRoIGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdGhlIGltYWdlIGhlYWRlcnMgYXJlIGxvYWRlZCxcblx0Ly8gdGhpcyBsb29wIHdpbGwgcG9sbCBpdCBldmVyeSAxMDBtcy5cblx0aWYgKGltZy5uYXR1cmFsV2lkdGgpIHtcblx0XHRjYWxsYmFjayhpbWcpO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQob25JbWFnZVJlYWR5LCAxMDAsIGltZywgY2FsbGJhY2spO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpeE9uZShlbCkge1xuXHR2YXIgc3R5bGUgPSBnZXRTdHlsZShlbCk7XG5cdHZhciBvZmkgPSBlbFtPRkldO1xuXHRzdHlsZVsnb2JqZWN0LWZpdCddID0gc3R5bGVbJ29iamVjdC1maXQnXSB8fCAnZmlsbCc7IC8vIGRlZmF1bHQgdmFsdWVcblxuXHQvLyBBdm9pZCBydW5uaW5nIHdoZXJlIHVubmVjZXNzYXJ5LCB1bmxlc3MgT0ZJIGhhZCBhbHJlYWR5IGRvbmUgaXRzIGRlZWRcblx0aWYgKCFvZmkuaW1nKSB7XG5cdFx0Ly8gZmlsbCBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBzbyBubyBhY3Rpb24gaXMgbmVjZXNzYXJ5XG5cdFx0aWYgKHN0eWxlWydvYmplY3QtZml0J10gPT09ICdmaWxsJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdoZXJlIG9iamVjdC1maXQgaXMgc3VwcG9ydGVkIGFuZCBvYmplY3QtcG9zaXRpb24gaXNuJ3QgKFNhZmFyaSA8IDEwKVxuXHRcdGlmIChcblx0XHRcdCFvZmkuc2tpcFRlc3QgJiYgLy8gdW5sZXNzIHVzZXIgd2FudHMgdG8gYXBwbHkgcmVnYXJkbGVzcyBvZiBicm93c2VyIHN1cHBvcnRcblx0XHRcdHN1cHBvcnRzT2JqZWN0Rml0ICYmIC8vIGlmIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBvYmplY3QtZml0XG5cdFx0XHQhc3R5bGVbJ29iamVjdC1wb3NpdGlvbiddIC8vIHVubGVzcyBvYmplY3QtcG9zaXRpb24gaXMgdXNlZFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdC8vIGtlZXAgYSBjbG9uZSBpbiBtZW1vcnkgd2hpbGUgcmVzZXR0aW5nIHRoZSBvcmlnaW5hbCB0byBhIGJsYW5rXG5cdGlmICghb2ZpLmltZykge1xuXHRcdG9maS5pbWcgPSBuZXcgSW1hZ2UoZWwud2lkdGgsIGVsLmhlaWdodCk7XG5cdFx0b2ZpLmltZy5zcmNzZXQgPSBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNzZXRcIikgfHwgZWwuc3Jjc2V0O1xuXHRcdG9maS5pbWcuc3JjID0gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3JjXCIpIHx8IGVsLnNyYztcblxuXHRcdC8vIHByZXNlcnZlIGZvciBhbnkgZnV0dXJlIGNsb25lTm9kZSBjYWxsc1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlcy9pc3N1ZXMvNTNcblx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNcIiwgZWwuc3JjKTtcblx0XHRpZiAoZWwuc3Jjc2V0KSB7XG5cdFx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNzZXRcIiwgZWwuc3Jjc2V0KTtcblx0XHR9XG5cblx0XHRzZXRQbGFjZWhvbGRlcihlbCwgZWwubmF0dXJhbFdpZHRoIHx8IGVsLndpZHRoLCBlbC5uYXR1cmFsSGVpZ2h0IHx8IGVsLmhlaWdodCk7XG5cblx0XHQvLyByZW1vdmUgc3Jjc2V0IGJlY2F1c2UgaXQgb3ZlcnJpZGVzIHNyY1xuXHRcdGlmIChlbC5zcmNzZXQpIHtcblx0XHRcdGVsLnNyY3NldCA9ICcnO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0a2VlcFNyY1VzYWJsZShlbCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAod2luZG93LmNvbnNvbGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdodHRwczovL2JpdC5seS9vZmktb2xkLWJyb3dzZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwb2x5ZmlsbEN1cnJlbnRTcmMob2ZpLmltZyk7XG5cblx0ZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXFxcIlwiICsgKChvZmkuaW1nLmN1cnJlbnRTcmMgfHwgb2ZpLmltZy5zcmMpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSkgKyBcIlxcXCIpXCI7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHN0eWxlWydvYmplY3QtcG9zaXRpb24nXSB8fCAnY2VudGVyJztcblx0ZWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kT3JpZ2luID0gJ2NvbnRlbnQtYm94JztcblxuXHRpZiAoL3NjYWxlLWRvd24vLnRlc3Qoc3R5bGVbJ29iamVjdC1maXQnXSkpIHtcblx0XHRvbkltYWdlUmVhZHkob2ZpLmltZywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG9maS5pbWcubmF0dXJhbFdpZHRoID4gZWwud2lkdGggfHwgb2ZpLmltZy5uYXR1cmFsSGVpZ2h0ID4gZWwuaGVpZ2h0KSB7XG5cdFx0XHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnYXV0byc7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBzdHlsZVsnb2JqZWN0LWZpdCddLnJlcGxhY2UoJ25vbmUnLCAnYXV0bycpLnJlcGxhY2UoJ2ZpbGwnLCAnMTAwJSAxMDAlJyk7XG5cdH1cblxuXHRvbkltYWdlUmVhZHkob2ZpLmltZywgZnVuY3Rpb24gKGltZykge1xuXHRcdHNldFBsYWNlaG9sZGVyKGVsLCBpbWcubmF0dXJhbFdpZHRoLCBpbWcubmF0dXJhbEhlaWdodCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBrZWVwU3JjVXNhYmxlKGVsKSB7XG5cdHZhciBkZXNjcmlwdG9ycyA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uIGdldChwcm9wKSB7XG5cdFx0XHRyZXR1cm4gZWxbT0ZJXS5pbWdbcHJvcCA/IHByb3AgOiAnc3JjJ107XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSwgcHJvcCkge1xuXHRcdFx0ZWxbT0ZJXS5pbWdbcHJvcCA/IHByb3AgOiAnc3JjJ10gPSB2YWx1ZTtcblx0XHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCAoXCJkYXRhLW9maS1cIiArIHByb3ApLCB2YWx1ZSk7IC8vIHByZXNlcnZlIGZvciBhbnkgZnV0dXJlIGNsb25lTm9kZVxuXHRcdFx0Zml4T25lKGVsKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH07XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ3NyYycsIGRlc2NyaXB0b3JzKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnY3VycmVudFNyYycsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLmdldCgnY3VycmVudFNyYycpOyB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdzcmNzZXQnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXNjcmlwdG9ycy5nZXQoJ3NyY3NldCcpOyB9LFxuXHRcdHNldDogZnVuY3Rpb24gKHNzKSB7IHJldHVybiBkZXNjcmlwdG9ycy5zZXQoc3MsICdzcmNzZXQnKTsgfVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGlqYWNrQXR0cmlidXRlcygpIHtcblx0ZnVuY3Rpb24gZ2V0T2ZpSW1hZ2VNYXliZShlbCwgbmFtZSkge1xuXHRcdHJldHVybiBlbFtPRkldICYmIGVsW09GSV0uaW1nICYmIChuYW1lID09PSAnc3JjJyB8fCBuYW1lID09PSAnc3Jjc2V0JykgPyBlbFtPRkldLmltZyA6IGVsO1xuXHR9XG5cdGlmICghc3VwcG9ydHNPYmplY3RQb3NpdGlvbikge1xuXHRcdEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZ2V0T2ZpSW1hZ2VNYXliZSh0aGlzLCBuYW1lKSwgbmFtZSk7XG5cdFx0fTtcblxuXHRcdEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGdldE9maUltYWdlTWF5YmUodGhpcywgbmFtZSksIG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuXHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZml4KGltZ3MsIG9wdHMpIHtcblx0dmFyIHN0YXJ0QXV0b01vZGUgPSAhYXV0b01vZGVFbmFibGVkICYmICFpbWdzO1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0aW1ncyA9IGltZ3MgfHwgJ2ltZyc7XG5cblx0aWYgKChzdXBwb3J0c09iamVjdFBvc2l0aW9uICYmICFvcHRzLnNraXBUZXN0KSB8fCAhc3VwcG9ydHNPRkkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyB1c2UgaW1ncyBhcyBhIHNlbGVjdG9yIG9yIGp1c3Qgc2VsZWN0IGFsbCBpbWFnZXNcblx0aWYgKGltZ3MgPT09ICdpbWcnKSB7XG5cdFx0aW1ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW1ncyA9PT0gJ3N0cmluZycpIHtcblx0XHRpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbWdzKTtcblx0fSBlbHNlIGlmICghKCdsZW5ndGgnIGluIGltZ3MpKSB7XG5cdFx0aW1ncyA9IFtpbWdzXTtcblx0fVxuXG5cdC8vIGFwcGx5IGZpeCB0byBhbGxcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aW1nc1tpXVtPRkldID0gaW1nc1tpXVtPRkldIHx8IHtcblx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0fTtcblx0XHRmaXhPbmUoaW1nc1tpXSk7XG5cdH1cblxuXHRpZiAoc3RhcnRBdXRvTW9kZSkge1xuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lNRycpIHtcblx0XHRcdFx0Zml4KGUudGFyZ2V0LCB7XG5cdFx0XHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0YXV0b01vZGVFbmFibGVkID0gdHJ1ZTtcblx0XHRpbWdzID0gJ2ltZyc7IC8vIHJlc2V0IHRvIGEgZ2VuZXJpYyBzZWxlY3RvciBmb3Igd2F0Y2hNUVxuXHR9XG5cblx0Ly8gaWYgcmVxdWVzdGVkLCB3YXRjaCBtZWRpYSBxdWVyaWVzIGZvciBvYmplY3QtZml0IGNoYW5nZVxuXHRpZiAob3B0cy53YXRjaE1RKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeC5iaW5kKG51bGwsIGltZ3MsIHtcblx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0fSkpO1xuXHR9XG59XG5cbmZpeC5zdXBwb3J0c09iamVjdEZpdCA9IHN1cHBvcnRzT2JqZWN0Rml0O1xuZml4LnN1cHBvcnRzT2JqZWN0UG9zaXRpb24gPSBzdXBwb3J0c09iamVjdFBvc2l0aW9uO1xuXG5oaWphY2tBdHRyaWJ1dGVzKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZml4O1xuIiwiLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb2x5ZmlsbFxuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAvLyBhbGlhc2VzXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgIC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG4gICAgaWYgKFxuICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdsb2JhbHNcbiAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODtcblxuICAgIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcbiAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgdmFyIG5vdyA9XG4gICAgICB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93XG4gICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICA6IERhdGUubm93O1xuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICovXG4gICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0QXJnID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCdcbiAgICAgICkge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICB3aGlsZSAoZWwgIT09IGQuYm9keSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSkge1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGUgfHwgZWwuaG9zdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gICAgICogQG1ldGhvZCBzdGVwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgIHZhciBjdXJyZW50WTtcbiAgICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTtcblxuICAgICAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG4gICAgICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG5cbiAgICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuXG4gICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTtcblxuICAgICAgLy8gc2Nyb2xsIG1vcmUgaWYgd2UgaGF2ZSBub3QgcmVhY2hlZCBvdXIgZGVzdGluYXRpb25cbiAgICAgIGlmIChjdXJyZW50WCAhPT0gY29udGV4dC54IHx8IGN1cnJlbnRZICE9PSBjb250ZXh0LnkpIHtcbiAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcbiAgICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XG4gICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgIHZhciBzdGFydFg7XG4gICAgICB2YXIgc3RhcnRZO1xuICAgICAgdmFyIG1ldGhvZDtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgLy8gZGVmaW5lIHNjcm9sbCBjb250ZXh0XG4gICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICBzY3JvbGxhYmxlID0gdztcbiAgICAgICAgc3RhcnRYID0gdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQ7XG4gICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBtZXRob2QgPSBvcmlnaW5hbC5zY3JvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgIHN0YXJ0WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0WSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIGxvb3Bpbmcgb3ZlciBhIGZyYW1lXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICBzdGFydFg6IHN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXG4gICAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cbiAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IGlmIHByZXNlbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsWVxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHcuc2Nyb2xsQnlcbiAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxCeS5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IDAsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgKHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0KSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0udG9wICsgKHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIGFuZCBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUb1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIC8vIHVzZSBsZWZ0IHByb3AsIGZpcnN0IG51bWJlciBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxMZWZ0XG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gfn5hcmd1bWVudHNbMF0gOiB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsVG9wXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzFdIDogdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDtcblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCxcbiAgICAgICAgdHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbFRvcCA6IH5+dG9wXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeVxuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsKHtcbiAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgYmVoYXZpb3I6IGFyZ3VtZW50c1swXS5iZWhhdmlvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnQgPSBmaW5kU2Nyb2xsYWJsZVBhcmVudCh0aGlzKTtcbiAgICAgIHZhciBwYXJlbnRSZWN0cyA9IHNjcm9sbGFibGVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcbiAgICAgICAgaWYgKHcuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogcGFyZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gY29tbW9uanNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHsgcG9seWZpbGw6IHBvbHlmaWxsIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2xvYmFsXG4gICAgcG9seWZpbGwoKTtcbiAgfVxuXG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==