webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/ThemeSwitcher/index.jsx":
/*!*******************************************!*\
  !*** ./component/ThemeSwitcher/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./component/ThemeSwitcher/styles.js");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/sun.svg */ "./assets/icons/sun.svg");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/moon.svg */ "./assets/icons/moon.svg");
/* harmony import */ var _assets_icons_moon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_moon_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/component/ThemeSwitcher/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Switch = function Switch(_ref) {
  var currentTheme = _ref.currentTheme,
      changeTheme = _ref.changeTheme;

  var Moon = __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("path", {
    d: "M17.2929 13.2929C16.2886 13.7471 15.1738 13.9999 14 13.9999C9.58172 13.9999 6 10.4182 6 5.9999C6 4.82593 6.25287 3.71102 6.70712 2.70667C3.93137 3.96191 2 6.75526 2 9.9997C2 14.418 5.58172 17.9997 10 17.9997C13.2443 17.9997 16.0376 16.0685 17.2929 13.2929Z",
    fill: "#4A5568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: currentTheme === "light" ? _assets_icons_moon_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "theme-switcher",
    onClick: function onClick() {
      return changeTheme();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ })

})
//# sourceMappingURL=index.js.d091eeefb10f2a548c8f.hot-update.js.map