"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navbar-main {\\r\\n    /*box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);*/\\r\\n    border-bottom: solid 1px #eaeaea;\\r\\n    padding-top: 40px;\\r\\n    padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.nav-container {\\r\\n    max-width: 1000px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    border-top: solid 1px #eaeaea;\\r\\n    text-align: center;\\r\\n    background-color: rgba(56, 56, 56, 0.75);\\r\\n}\\r\\n\\r\\n.main {\\r\\n    margin-top: 0px;\\r\\n    padding-bottom: 200px;\\r\\n    padding-left: 0 !important;\\r\\n    padding-right: 0 !important;\\r\\n    max-width: 750px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n    margin-bottom: 100px;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n    height: 25vh;\\r\\n    min-height: 275px;\\r\\n    max-width: 750px;\\r\\n\\r\\n    /*background-image: url(../public/mc.png); \\r\\n    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);\\r\\n    background-color: rgb(44, 44, 44); */\\r\\n}\\r\\n\\r\\n.hero-content {\\r\\n    position: relative;\\r\\n    top: 30%;   \\r\\n}\\r\\n\\r\\n.hero p {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.list-group-item {\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.expand-button {\\r\\n    border-left  : 1px solid rgb(73, 80, 87);\\r\\n    align-self: stretch !important;\\r\\n}\\r\\n\\r\\n.list-group-item:hover {\\r\\n    /* apply a dark transparent filter */\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.navbar-main button {\\r\\n    padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.project-button {\\r\\n    border: 0px !important;\\r\\n    padding: 0px !important;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.project-card {\\r\\n    text-align: left;\\r\\n    padding: 0px !important;\\r\\n}\\r\\n\\r\\n.project-details {\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.project-category, .project-date {\\r\\n    display: inline;\\r\\n    margin-top: 10px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n    text-decoration: underline;\\r\\n    margin-left: 15px;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n\\r\\n.project-date {\\r\\n    float: right;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.project-description {\\r\\n    margin-top: 20px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.project-card .col-1, .project-card .col-2  {\\r\\n    display: flex;\\r\\n    align-self: center;\\r\\n    justify-content: center;\\r\\n    padding: 0px;\\r\\n}\\r\\n\\r\\n.expand-button button {\\r\\n    border: 0px;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.project-card button:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, 0.1);\\r\\n}\\r\\n\\r\\n.copy-button {\\r\\n    /* center the button horizontally */\\r\\n    margin-left: 50% !important;\\r\\n}\\r\\n\\r\\n.project-card button svg {\\r\\n    /* center the svg vertically */\\r\\n    margin-top: 50% !important;\\r\\n    margin: 0px !important;\\r\\n}\\r\\n\\r\\n.tags {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.tag {\\r\\n    margin-top: 15px;\\r\\n    padding-top: 2px;\\r\\n    padding-bottom: 2px;\\r\\n    margin-right: 218px;\\r\\n    border-radius: 12px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    background-color: rgba(126, 126, 126, 0.35);\\r\\n}\\r\\n\\r\\n.subheader {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\ndiv.row {\\r\\n    margin: 0px;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,8CAA8C;IAC9C,gCAAgC;IAChC,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,0BAA0B;IAC1B,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;IAEhB;;wCAEoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf\",\"sourcesContent\":[\".navbar-main {\\r\\n    /*box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);*/\\r\\n    border-bottom: solid 1px #eaeaea;\\r\\n    padding-top: 40px;\\r\\n    padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.nav-container {\\r\\n    max-width: 1000px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    border-top: solid 1px #eaeaea;\\r\\n    text-align: center;\\r\\n    background-color: rgba(56, 56, 56, 0.75);\\r\\n}\\r\\n\\r\\n.main {\\r\\n    margin-top: 0px;\\r\\n    padding-bottom: 200px;\\r\\n    padding-left: 0 !important;\\r\\n    padding-right: 0 !important;\\r\\n    max-width: 750px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n    margin-bottom: 100px;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n    height: 25vh;\\r\\n    min-height: 275px;\\r\\n    max-width: 750px;\\r\\n\\r\\n    /*background-image: url(../public/mc.png); \\r\\n    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);\\r\\n    background-color: rgb(44, 44, 44); */\\r\\n}\\r\\n\\r\\n.hero-content {\\r\\n    position: relative;\\r\\n    top: 30%;   \\r\\n}\\r\\n\\r\\n.hero p {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.list-group-item {\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.expand-button {\\r\\n    border-left  : 1px solid rgb(73, 80, 87);\\r\\n    align-self: stretch !important;\\r\\n}\\r\\n\\r\\n.list-group-item:hover {\\r\\n    /* apply a dark transparent filter */\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.navbar-main button {\\r\\n    padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.project-button {\\r\\n    border: 0px !important;\\r\\n    padding: 0px !important;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.project-card {\\r\\n    text-align: left;\\r\\n    padding: 0px !important;\\r\\n}\\r\\n\\r\\n.project-details {\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.project-category, .project-date {\\r\\n    display: inline;\\r\\n    margin-top: 10px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n    text-decoration: underline;\\r\\n    margin-left: 15px;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n\\r\\n.project-date {\\r\\n    float: right;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.project-description {\\r\\n    margin-top: 20px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.project-card .col-1, .project-card .col-2  {\\r\\n    display: flex;\\r\\n    align-self: center;\\r\\n    justify-content: center;\\r\\n    padding: 0px;\\r\\n}\\r\\n\\r\\n.expand-button button {\\r\\n    border: 0px;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.project-card button:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, 0.1);\\r\\n}\\r\\n\\r\\n.copy-button {\\r\\n    /* center the button horizontally */\\r\\n    margin-left: 50% !important;\\r\\n}\\r\\n\\r\\n.project-card button svg {\\r\\n    /* center the svg vertically */\\r\\n    margin-top: 50% !important;\\r\\n    margin: 0px !important;\\r\\n}\\r\\n\\r\\n.tags {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.tag {\\r\\n    margin-top: 15px;\\r\\n    padding-top: 2px;\\r\\n    padding-bottom: 2px;\\r\\n    margin-right: 218px;\\r\\n    border-radius: 12px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    background-color: rgba(126, 126, 126, 0.35);\\r\\n}\\r\\n\\r\\n.subheader {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\ndiv.row {\\r\\n    margin: 0px;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHdEQUF3RCxxREFBcUQsMkNBQTJDLDBCQUEwQiw2QkFBNkIsS0FBSyx3QkFBd0IsMEJBQTBCLEtBQUssaUJBQWlCLHNDQUFzQywyQkFBMkIsaURBQWlELEtBQUssZUFBZSx3QkFBd0IsOEJBQThCLG1DQUFtQyxvQ0FBb0MseUJBQXlCLEtBQUssdUJBQXVCLDZCQUE2QixLQUFLLGVBQWUscUJBQXFCLDBCQUEwQix5QkFBeUIsdURBQXVELDJEQUEyRCwyQ0FBMkMsT0FBTyx1QkFBdUIsMkJBQTJCLG9CQUFvQixLQUFLLGlCQUFpQiwwQkFBMEIseUJBQXlCLEtBQUssMEJBQTBCLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IsaURBQWlELHVDQUF1QyxLQUFLLGdDQUFnQywwRkFBMEYsS0FBSyw2QkFBNkIsNEJBQTRCLEtBQUsseUJBQXlCLCtCQUErQixnQ0FBZ0Msb0JBQW9CLEtBQUssdUJBQXVCLHlCQUF5QixnQ0FBZ0MsS0FBSywwQkFBMEIsc0JBQXNCLEtBQUssd0JBQXdCLDBCQUEwQix5QkFBeUIsS0FBSywwQ0FBMEMsd0JBQXdCLHlCQUF5QiwwQkFBMEIseUJBQXlCLG1DQUFtQywwQkFBMEIsMkJBQTJCLEtBQUssdUJBQXVCLHFCQUFxQiwwQkFBMEIsS0FBSyw4QkFBOEIseUJBQXlCLDBCQUEwQix5QkFBeUIsS0FBSyxxREFB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QXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZiYXItbWFpbiB7XFxyXFxuICAgIC8qYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlYWVhO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VhZWFlYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNzVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcHVibGljL21jLnBuZyk7IFxcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwJTsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQgIDogMXB4IHNvbGlkIHJnYig3MywgODAsIDg3KTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgLyogYXBwbHkgYSBkYXJrIHRyYW5zcGFyZW50IGZpbHRlciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWFpbiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGV0YWlscyB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhdGVnb3J5LCAucHJvamVjdC1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRhdGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIC5jb2wtMSwgLnByb2plY3QtY2FyZCAuY29sLTIgIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWJ1dHRvbiBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jb3B5LWJ1dHRvbiB7XFxyXFxuICAgIC8qIGNlbnRlciB0aGUgYnV0dG9uIGhvcml6b250YWxseSAqL1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgYnV0dG9uIHN2ZyB7XFxyXFxuICAgIC8qIGNlbnRlciB0aGUgc3ZnIHZlcnRpY2FsbHkgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YWdzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjYsIDEyNiwgMC4zNSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJoZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucm93IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEI7O3dDQUVvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZiYXItbWFpbiB7XFxyXFxuICAgIC8qYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlYWVhO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VhZWFlYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNzVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcHVibGljL21jLnBuZyk7IFxcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwJTsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQgIDogMXB4IHNvbGlkIHJnYig3MywgODAsIDg3KTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgLyogYXBwbHkgYSBkYXJrIHRyYW5zcGFyZW50IGZpbHRlciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWFpbiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGV0YWlscyB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhdGVnb3J5LCAucHJvamVjdC1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRhdGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIC5jb2wtMSwgLnByb2plY3QtY2FyZCAuY29sLTIgIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWJ1dHRvbiBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jb3B5LWJ1dHRvbiB7XFxyXFxuICAgIC8qIGNlbnRlciB0aGUgYnV0dG9uIGhvcml6b250YWxseSAqL1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgYnV0dG9uIHN2ZyB7XFxyXFxuICAgIC8qIGNlbnRlciB0aGUgc3ZnIHZlcnRpY2FsbHkgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50YWdzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjYsIDEyNiwgMC4zNSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJoZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucm93IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});