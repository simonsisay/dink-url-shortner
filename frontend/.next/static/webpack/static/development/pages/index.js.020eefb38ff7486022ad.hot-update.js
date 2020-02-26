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
      getShortUrl = _ref.getShortUrl;

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "u4hfgy-0"
})([".form{display:flex;}input{flex:1;width:65%;height:50px;padding:12px;border:none;background:", ";box-shadow:", ";font-size:1.3em;font-family:\"Montserrat\";z-index:10;}button{width:25%;height:100%;margin-bottom:12px;border:none;font-family:\"Archivo Black\";font-size:1.4em;letter-spacing:0px;color:", ";z-index:100;cursor:pointer;background:", ";}.new-url{animation:", " 0.8s ease-out;font-family:\"Montserrat\";font-size:18px;color:", ";font-weight:500;a{font-weight:normal;margin-left:12px;color:", ";}}"], function (props) {
  return props.theme.inputBackground;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.currentTheme === "light" ? "#ffeeee" : props.theme.darkBackground;
}, function (props) {
  return props.currentTheme === "light" ? props.theme.darkBackground : props.theme.lightBackground;
}, slideDown, function (props) {
  return props.currentTheme === "light" ? "#7b00b5" : "yellow";
}, function (props) {
  return props.currentTheme === "dark" ? "#baaaff" : "#00afaf";
});

/***/ })

})
//# sourceMappingURL=index.js.020eefb38ff7486022ad.hot-update.js.map