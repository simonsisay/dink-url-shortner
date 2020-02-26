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
    fill: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));

  var Sun = __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10 2C10.5523 2 11 2.44772 11 3V4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4V3C9 2.44772 9.44772 2 10 2ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM13.5356 14.9497L14.2427 15.6568C14.6332 16.0473 15.2664 16.0473 15.6569 15.6568C16.0474 15.2663 16.0474 14.6331 15.6569 14.2426L14.9498 13.5355C14.5593 13.145 13.9261 13.145 13.5356 13.5355C13.1451 13.926 13.1451 14.5592 13.5356 14.9497ZM15.6568 4.34309C16.0473 4.73362 16.0473 5.36678 15.6568 5.75731L14.9497 6.46441C14.5592 6.85494 13.926 6.85494 13.5355 6.46441C13.145 6.07389 13.145 5.44072 13.5355 5.0502L14.2426 4.34309C14.6331 3.95257 15.2663 3.95257 15.6568 4.34309ZM17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H16C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H17ZM10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V16C9 15.4477 9.44772 15 10 15ZM5.05031 6.46443C5.44083 6.85496 6.074 6.85496 6.46452 6.46443C6.85505 6.07391 6.85505 5.44074 6.46452 5.05022L5.75742 4.34311C5.36689 3.95259 4.73373 3.95259 4.3432 4.34311C3.95268 4.73363 3.95268 5.3668 4.3432 5.75732L5.05031 6.46443ZM6.46443 14.9497L5.75732 15.6568C5.3668 16.0473 4.73363 16.0473 4.34311 15.6568C3.95259 15.2663 3.95259 14.6331 4.34311 14.2426L5.05022 13.5355C5.44074 13.145 6.07391 13.145 6.46443 13.5355C6.85496 13.926 6.85496 14.5592 6.46443 14.9497ZM4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4Z",
    fill: "#4A5568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    onClick: function onClick() {
      return changeTheme();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, currentTheme === "light" ? Moon : Sun);
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ })

})
//# sourceMappingURL=index.js.6048353ac6d897a8dc1a.hot-update.js.map