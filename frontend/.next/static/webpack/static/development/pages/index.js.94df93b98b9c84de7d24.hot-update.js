webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/ThemeSwitcher/styles.js":
/*!*******************************************!*\
  !*** ./component/ThemeSwitcher/styles.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var switchAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:skew(\"20deg\") opacity:0.5;}to{transform:skew(\"00deg\") opacity:1;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-34qulw-0"
})(["cursor:pointer;svg{width:30px;height:30px;animation:", " 0.5s cubic-bezier(0.175,0.885,0.32,1.275)   forwards;fill-mode;}svg path{fill:", ";}"], switchAnim, function (props) {
  return props.currentTheme === "light" ? "#0b0316" : "#d6d9e3";
});

/***/ })

})
//# sourceMappingURL=index.js.94df93b98b9c84de7d24.hot-update.js.map