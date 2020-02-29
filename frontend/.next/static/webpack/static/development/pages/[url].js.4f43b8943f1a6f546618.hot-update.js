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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/pages/[url].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Redirect = function Redirect(props) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      url = _useRouter.url;

  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "hey");
};

Redirect.getInitialProps = function _callee(_ref) {
  var url, client;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _ref.url, client = _ref.client;
          console.log(url); // try {
          //   const { data } = await client.query({
          //     query: GET_ORIGINAL,
          //     variables: { short: url }
          //   });
          //   console.log(data);
          //   return { data: data.getOriginal };
          // } catch (err) {
          //   return { error: "Not found" };
          // }

          return _context.abrupt("return", {});

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(Redirect));

/***/ })

})
//# sourceMappingURL=[url].js.4f43b8943f1a6f546618.hot-update.js.map