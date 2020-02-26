webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/screens/HomePage/index.jsx":
/*!****************************************!*\
  !*** ./src/screens/HomePage/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/screens/HomePage/styles.js");
/* harmony import */ var _component_HeroText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/HeroText */ "./src/component/HeroText/index.jsx");
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/Theme */ "./src/context/Theme.js");
/* harmony import */ var _component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/ThemeSwitcher */ "./src/component/ThemeSwitcher/index.jsx");
/* harmony import */ var _component_UrlForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/UrlForm */ "./src/component/UrlForm/index.jsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queries */ "./src/screens/HomePage/queries.js");

var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/src/screens/HomePage/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var HomePage = function HomePage(_ref) {
  var client = _ref.client;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"]),
      switchTheme = _useContext.switchTheme,
      currentTheme = _useContext.currentTheme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      originalUrl = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      newUrl = _useState2[0],
      setNewUrl = _useState2[1];

  var handleChange = function handleChange(e) {
    setUrl(e.target.value);
  };

  var getShortUrl = function getShortUrl() {
    var _ref2, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getShortUrl$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.mutate({
              mutation: _queries__WEBPACK_IMPORTED_MODULE_8__["CREATE_SHORT_URL"],
              variables: {
                original: originalUrl
              }
            }));

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;
            setUrl("");
            setNewUrl("https://dink.com/".concat(data.createLink["short"]));
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "switch-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_component_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    changeTheme: switchTheme,
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_component_HeroText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTheme: currentTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_component_UrlForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleChange: handleChange,
    newUrl: newUrl,
    getShortUrl: getShortUrl,
    originalUrl: originalUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("div", {
    className: "right-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    className: "hero-image",
    src: currentTheme === "light" ? __webpack_require__(/*! ../../../assets/images/hero-image.png */ "./assets/images/hero-image.png") : __webpack_require__(/*! ../../../assets/images/hugo-bad.png */ "./assets/images/hugo-bad.png"),
    alt: "hero-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.b89e1b343bc52d61e7ec.hot-update.js.map