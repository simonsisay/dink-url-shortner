webpackHotUpdate("static/development/pages/[url].js",{

/***/ "./pages/[url].js":
/*!************************!*\
  !*** ./pages/[url].js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/pages/[url].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Redirect = function Redirect(_ref) {
  var data = _ref.data,
      error = _ref.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1]; // try {
  //   const { data } = await client.query({
  //     query: GET_ORIGINAL,
  //     variables: { short: url }
  //   });
  //   console.log(data);
  //   return { data: data.getOriginal };
  // } catch (err) {
  //   return { error: "Not found" };
  // }


  if (loading) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Loading...");
  }

  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Redirect);

/***/ })

})
//# sourceMappingURL=[url].js.723623f787dc0f972c36.hot-update.js.map