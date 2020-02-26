webpackHotUpdate("static/development/pages/index.js",{

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

var slideDown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateY(-40px);}to{transform:translateY(0px)}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "u4hfgy-0"
})([".form{display:flex;}input{flex:1;width:65%;height:50px;padding:12px;border:none;background:", ";box-shadow:", ";font-size:1.3em;font-family:\"Montserrat\";z-index:10;}button{width:25%;height:68px;margin-bottom:12px;border:none;font-family:\"Archivo Black\";font-size:1.4em;letter-spacing:0px;color:", ";z-index:100;cursor:pointer;background:", ";}.new-url{animation:", " 0.8s ease-out;font-family:\"Montserrat\";font-size:18px;color:", ";font-weight:500;a{font-weight:normal;margin-left:12px;color:", ";}}"], function (props) {
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
//# sourceMappingURL=index.js.f2f04623493b37b4d313.hot-update.js.map