webpackHotUpdate("static/development/pages/index.js",{

/***/ "./screens/HomePage/index.jsx":
/*!************************************!*\
  !*** ./screens/HomePage/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./screens/HomePage/styles.js");
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Theme */ "./context/Theme.js");
/* harmony import */ var _component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/ThemeSwitcher */ "./component/ThemeSwitcher/index.jsx");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/screens/HomePage/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var HomePage = function HomePage() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]),
      switchTheme = _useContext.switchTheme,
      currentTheme = _useContext.currentTheme;

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "switch-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    changeTheme: switchTheme,
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    className: "logo archivo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Dink Url shortner"), __jsx("h4", {
    className: "sub-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Get your url in seconds. Copy and paste the url here and we will give you a short and sweet one. All for 0$."), __jsx("input", {
    placeholder: "Paste your link here...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("button", {
    className: "send-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Shorten")), __jsx("div", {
    className: "right-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    className: "hero-image",
    src: __webpack_require__(/*! ../../assets/images/hero-image.png */ "./assets/images/hero-image.png"),
    alt: "hero-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.47bc2d40cb0db43d7750.hot-update.js.map