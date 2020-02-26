webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/component/UrlForm/index.jsx":
/*!*****************************************!*\
  !*** ./src/component/UrlForm/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/Theme */ "./src/context/Theme.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/component/UrlForm/styles.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/component/UrlForm/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UrlForm = function UrlForm(_ref) {
  var newUrl = _ref.newUrl,
      originalUrl = _ref.originalUrl,
      getShortUrl = _ref.getShortUrl,
      handleChange = _ref.handleChange;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]),
      currentTheme = _useContext.currentTheme;

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("input", {
    value: originalUrl,
    name: "originalUrl",
    onChange: handleChange,
    placeholder: "Paste your link here...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("button", {
    onClick: getShortUrl,
    className: "send-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Shorten")), newUrl && __jsx("p", {
    className: "new-url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "New Link:", __jsx("a", {
    target: "_blank",
    href: newUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, newUrl)));
};

/* harmony default export */ __webpack_exports__["default"] = (UrlForm);

/***/ })

})
//# sourceMappingURL=index.js.af3367aad1b4d4f2f88d.hot-update.js.map