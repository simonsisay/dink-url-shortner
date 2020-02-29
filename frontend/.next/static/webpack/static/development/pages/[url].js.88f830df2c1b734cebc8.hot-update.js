webpackHotUpdate("static/development/pages/[url].js",{

/***/ "./pages/[url].js":
/*!************************!*\
  !*** ./pages/[url].js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");

var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/pages/[url].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Redirect = function Redirect(props) {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "hey");
};

Redirect.getInitialProps = function _callee(_ref) {
  var url, client, _ref2, data;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _ref.url, client = _ref.client;
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.query({
            query: GET_ORIGINAL,
            variables: {
              "short": url
            }
          }));

        case 4:
          _ref2 = _context.sent;
          data = _ref2.data;
          return _context.abrupt("return", {
            data: data.getOriginal
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            error: "Not found"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])(Redirect));

/***/ })

})
//# sourceMappingURL=[url].js.88f830df2c1b734cebc8.hot-update.js.map