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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_component_LinkNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/component/LinkNotFound */ "./src/component/LinkNotFound/index.jsx");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


var _jsxFileName = "/home/simon/Desktop/Projects/dink-url-shortner/frontend/pages/[url].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query GetOriginal($short: String!) {\n    getOriginal(short: $short) {\n      id\n      original\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GET_ORIGINAL = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());

var Redirect = function Redirect(_ref) {
  var client = _ref.client;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      err = _useState[0],
      setErr = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      redirecting = _useState2[0],
      setRedirecting = _useState2[1];

  var url = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])().query.url;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var redirect = function redirect() {
      var _ref2, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function redirect$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.query({
                query: GET_ORIGINAL,
                variables: {
                  "short": url
                }
              }));

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              if (data) {
                window.location.replace(data.getOriginal.original);
              }

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setRedirecting(false);
              setError(true);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    };

    redirect();
  }, []);
  if (redirecting) return null;
  if (err) return __jsx(_src_component_LinkNotFound__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  });
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])(Redirect));

/***/ })

})
//# sourceMappingURL=[url].js.af484e693ab1b616706e.hot-update.js.map