module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/hero-image.png":
/*!**************************************!*\
  !*** ./assets/images/hero-image.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hero-image-2a5d0bf0319c72f4c72b7675dbbd0b03.png";

/***/ }),

/***/ "./assets/images/hugo-bad.png":
/*!************************************!*\
  !*** ./assets/images/hugo-bad.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hugo-bad-0f0f8db1dcd892a2f77a1a4ae273f160.png";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_screens_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/screens/HomePage */ "./src/screens/HomePage/index.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_src_screens_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/component/HeroText/index.jsx":
/*!******************************************!*\
  !*** ./src/component/HeroText/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/component/HeroText/styles.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/component/HeroText/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeroText = ({
  currentTheme
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Dink Url shortner"), __jsx("h4", {
    className: "sub-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Get your tiny url in seconds. Copy and paste the url here and we will give you a short and sweet one. All for $0."));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroText);

/***/ }),

/***/ "./src/component/HeroText/styles.js":
/*!******************************************!*\
  !*** ./src/component/HeroText/styles.js ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "u6cwz0-0"
})(["h1{font-family:\"Archivo Black\";margin:0px;font-weight:400;font-size:3.5em;text-transform:uppercase;color:", ";}h4{font-family:\"Montserrat\";font-weight:300;font-size:1.3em;margin:0px;margin-top:12px;margin-bottom:30px;line-height:30px;color:", ";}"], props => props.theme.mainHeaderColor, props => props.theme.subHeaderColor);

/***/ }),

/***/ "./src/component/ThemeSwitcher/index.jsx":
/*!***********************************************!*\
  !*** ./src/component/ThemeSwitcher/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/component/ThemeSwitcher/styles.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/component/ThemeSwitcher/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Moon = __jsx("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("path", {
  d: "M17.2929 13.2929C16.2886 13.7471 15.1738 13.9999 14 13.9999C9.58172 13.9999 6 10.4182 6 5.9999C6 4.82593 6.25287 3.71102 6.70712 2.70667C3.93137 3.96191 2 6.75526 2 9.9997C2 14.418 5.58172 17.9997 10 17.9997C13.2443 17.9997 16.0376 16.0685 17.2929 13.2929Z",
  fill: "#4A5568",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));

const Sun = __jsx("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10 2C10.5523 2 11 2.44772 11 3V4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4V3C9 2.44772 9.44772 2 10 2ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM13.5356 14.9497L14.2427 15.6568C14.6332 16.0473 15.2664 16.0473 15.6569 15.6568C16.0474 15.2663 16.0474 14.6331 15.6569 14.2426L14.9498 13.5355C14.5593 13.145 13.9261 13.145 13.5356 13.5355C13.1451 13.926 13.1451 14.5592 13.5356 14.9497ZM15.6568 4.34309C16.0473 4.73362 16.0473 5.36678 15.6568 5.75731L14.9497 6.46441C14.5592 6.85494 13.926 6.85494 13.5355 6.46441C13.145 6.07389 13.145 5.44072 13.5355 5.0502L14.2426 4.34309C14.6331 3.95257 15.2663 3.95257 15.6568 4.34309ZM17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H16C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H17ZM10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V16C9 15.4477 9.44772 15 10 15ZM5.05031 6.46443C5.44083 6.85496 6.074 6.85496 6.46452 6.46443C6.85505 6.07391 6.85505 5.44074 6.46452 5.05022L5.75742 4.34311C5.36689 3.95259 4.73373 3.95259 4.3432 4.34311C3.95268 4.73363 3.95268 5.3668 4.3432 5.75732L5.05031 6.46443ZM6.46443 14.9497L5.75732 15.6568C5.3668 16.0473 4.73363 16.0473 4.34311 15.6568C3.95259 15.2663 3.95259 14.6331 4.34311 14.2426L5.05022 13.5355C5.44074 13.145 6.07391 13.145 6.46443 13.5355C6.85496 13.926 6.85496 14.5592 6.46443 14.9497ZM4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4Z",
  fill: "#4A5568",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}));

const Switch = ({
  currentTheme,
  changeTheme
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    onClick: () => changeTheme(),
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, currentTheme === "light" ? Moon : Sun);
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/component/ThemeSwitcher/styles.js":
/*!***********************************************!*\
  !*** ./src/component/ThemeSwitcher/styles.js ***!
  \***********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "flt6sb-0"
})(["cursor:pointer;svg{width:30px;height:30px;transition:all 1s;&:active{transform:skew(\"20deg\");opacity:1;}}svg path{fill:", ";}"], props => props.currentTheme === "light" ? "#0b0316" : "#d6d9e3");

/***/ }),

/***/ "./src/component/UrlForm/index.jsx":
/*!*****************************************!*\
  !*** ./src/component/UrlForm/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/Theme */ "./src/context/Theme.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/component/UrlForm/styles.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/component/UrlForm/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UrlForm = ({
  newUrl,
  originalUrl,
  getShortUrl,
  handleChange
}) => {
  const {
    currentTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("input", {
    value: originalUrl,
    name: "originalUrl",
    onChange: handleChange,
    placeholder: "Paste your link here...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("button", {
    disabled: originalUrl.length === 0,
    onClick: getShortUrl,
    className: "send-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Shorten")), newUrl && __jsx("p", {
    className: "new-url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "New Link:", __jsx("a", {
    target: "_blank",
    href: newUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, newUrl)));
};

/* harmony default export */ __webpack_exports__["default"] = (UrlForm);

/***/ }),

/***/ "./src/component/UrlForm/styles.js":
/*!*****************************************!*\
  !*** ./src/component/UrlForm/styles.js ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const slideDown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateY(-40px);}to{transform:translateY(0px)}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "u4hfgy-0"
})([".form{display:flex;}input{flex:1;width:65%;height:50px;padding:12px;border:none;background:", ";box-shadow:", ";font-size:1.3em;font-family:\"Montserrat\";z-index:10;}button{width:25%;height:74px;margin-bottom:12px;border:none;font-family:\"Archivo Black\";font-size:1.4em;letter-spacing:0px;color:", ";z-index:100;cursor:pointer;background:", ";}.new-url{animation:", " 0.8s ease-out;font-family:\"Montserrat\";font-size:18px;color:", ";font-weight:500;a{font-weight:normal;margin-left:12px;color:", ";}}"], props => props.theme.inputBackground, props => props.theme.boxShadow, props => props.currentTheme === "light" ? "#ffeeee" : props.theme.darkBackground, props => props.currentTheme === "light" ? props.theme.darkBackground : props.theme.lightBackground, slideDown, props => props.currentTheme === "light" ? "#7b00b5" : "yellow", props => props.currentTheme === "dark" ? "#baaaff" : "#00afaf");

/***/ }),

/***/ "./src/context/Theme.js":
/*!******************************!*\
  !*** ./src/context/Theme.js ***!
  \******************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/context/Theme.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext("light");

const AppTheme = ({
  children
}) => {
  const {
    0: currentTheme,
    1: setCurrentTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("light");

  const switchTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(nextTheme);
  };

  return __jsx(ThemeContext.Provider, {
    value: {
      currentTheme,
      switchTheme
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppTheme);

/***/ }),

/***/ "./src/screens/HomePage/index.jsx":
/*!****************************************!*\
  !*** ./src/screens/HomePage/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/screens/HomePage/styles.js");
/* harmony import */ var _component_HeroText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/HeroText */ "./src/component/HeroText/index.jsx");
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/Theme */ "./src/context/Theme.js");
/* harmony import */ var _component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/ThemeSwitcher */ "./src/component/ThemeSwitcher/index.jsx");
/* harmony import */ var _component_UrlForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/UrlForm */ "./src/component/UrlForm/index.jsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queries */ "./src/screens/HomePage/queries.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/screens/HomePage/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const HomePage = ({
  client
}) => {
  const {
    switchTheme,
    currentTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  const {
    0: originalUrl,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: newUrl,
    1: setNewUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleChange = e => {
    setUrl(e.target.value);
  };

  const getShortUrl = async () => {
    try {
      const {
        data
      } = await client.mutate({
        mutation: _queries__WEBPACK_IMPORTED_MODULE_7__["CREATE_SHORT_URL"],
        variables: {
          original: originalUrl
        }
      });
      setUrl("");
      setNewUrl(`http://localhost:3000/${data.createLink.short}`);
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "switch-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    changeTheme: switchTheme,
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_component_HeroText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_component_UrlForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleChange: handleChange,
    newUrl: newUrl,
    getShortUrl: getShortUrl,
    originalUrl: originalUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx("div", {
    className: "right-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("img", {
    className: "hero-image",
    src: currentTheme === "light" ? __webpack_require__(/*! ../../../assets/images/hero-image.png */ "./assets/images/hero-image.png") : __webpack_require__(/*! ../../../assets/images/hugo-bad.png */ "./assets/images/hugo-bad.png"),
    alt: "hero-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__["withApollo"])(HomePage));

/***/ }),

/***/ "./src/screens/HomePage/queries.js":
/*!*****************************************!*\
  !*** ./src/screens/HomePage/queries.js ***!
  \*****************************************/
/*! exports provided: CREATE_SHORT_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SHORT_URL", function() { return CREATE_SHORT_URL; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_SHORT_URL = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createLink($original: String!) {
    createLink(original: $original) {
      id
      original
      short
    }
  }
`;

/***/ }),

/***/ "./src/screens/HomePage/styles.js":
/*!****************************************!*\
  !*** ./src/screens/HomePage/styles.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const slideUp = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateY(600px);}to{transform:translateY(0px)}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1um9pzm-0"
})(["height:100vh;width:100vw;overflow-y:hidden;background-color:", ";background-image:", ";margin:0px;display:flex;flex-direction:column;.switch-container{padding-top:20px;align-self:flex-end;padding-right:30px;}.content{display:flex;}.left-content{width:50vw;display:flex;flex-direction:column;justify-content:center;padding:5vw;margin-top:", ";}.right-content{max-width:50vw;display:flex;.hero-image{width:45vw;animation:", " 1s ease-in-out;}}"], props => props.theme.backgroundColor, props => props.theme.backgroundImage, props => props.currentTheme === "dark" ? "6vh" : "0px", slideUp);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/simon/Desktop/Projects/dink-url-shortner/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map