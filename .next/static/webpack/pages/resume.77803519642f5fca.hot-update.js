"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./components/copyButton.tsx":
/*!***********************************!*\
  !*** ./components/copyButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CopyButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoLink!=!react-icons/io5 */ \"__barrel_optimize__?names=IoLink!=!./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ \"./node_modules/react-bootstrap/esm/OverlayTrigger.js\");\n/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tooltip */ \"./node_modules/react-bootstrap/esm/Tooltip.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CopyButton(param) {\n    let { props } = param;\n    _s();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const copyLink = ()=>{\n        let hostname = window.location.hostname;\n        // get slug from the URL\n        const slug = window.location.pathname + \"?id=\";\n        // if dev attach port number\n        if (hostname === \"localhost\") {\n            hostname += \":3000\";\n        }\n        navigator.clipboard.writeText(hostname + slug + props.id);\n        setCopied(true);\n    };\n    const renderTooltip = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"button-tooltip\",\n            ...props,\n            children: copied ? \"Link copied to clipboard!\" : \"Copy link to this item\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        placement: \"right\",\n        delay: {\n            show: 250,\n            hide: 400\n        },\n        overlay: renderTooltip,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            onClick: copyLink,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoLink, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 43\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(CopyButton, \"NE86rL3vg4NVcTTWDavsT0hUBJs=\");\n_c = CopyButton;\nvar _c;\n$RefreshReg$(_c, \"CopyButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvcHlCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDUTtBQUNtQjtBQUNkO0FBQ0Y7QUFFN0IsU0FBU00sV0FBVyxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQy9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUyxXQUFXO1FBQ2IsSUFBSUMsV0FBV0MsT0FBT0MsUUFBUSxDQUFDRixRQUFRO1FBRXZDLHdCQUF3QjtRQUN4QixNQUFNRyxPQUFPRixPQUFPQyxRQUFRLENBQUNFLFFBQVEsR0FBSTtRQUV6Qyw0QkFBNEI7UUFDNUIsSUFBSUosYUFBYSxhQUFhO1lBQzFCQSxZQUFZO1FBQ2hCO1FBRUFLLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDUCxXQUFXRyxPQUFPUCxNQUFNWSxFQUFFO1FBRXhEVixVQUFVO0lBQ2Q7SUFDQSxNQUFNVyxnQkFBZ0IsQ0FBQ2Isc0JBQ25CLDhEQUFDSCwrREFBT0E7WUFBQ2UsSUFBRztZQUFrQixHQUFHWixLQUFLO3NCQUFHQyxTQUFVLDhCQUE4Qjs7Ozs7O0lBR3JGLHFCQUNJLDhEQUFDTCxzRUFBY0E7UUFDWGtCLFdBQVU7UUFDVkMsT0FBTztZQUFFQyxNQUFNO1lBQUtDLE1BQU07UUFBSTtRQUM5QkMsU0FBU0w7a0JBRVQsNEVBQUNmLDhEQUFNQTtZQUFDcUIsU0FBVWhCO3NCQUFZLDRFQUFDUixpRkFBTUE7Ozs7Ozs7Ozs7Ozs7OztBQUdqRDtHQS9Cd0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29weUJ1dHRvbi50c3g/ODhlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9MaW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weUJ1dHRvbih7IHByb3BzIH0pIHtcclxuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY29weUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG5cclxuICAgICAgICAvLyBnZXQgc2x1ZyBmcm9tIHRoZSBVUkxcclxuICAgICAgICBjb25zdCBzbHVnID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgIFwiP2lkPVwiO1xyXG5cclxuICAgICAgICAvLyBpZiBkZXYgYXR0YWNoIHBvcnQgbnVtYmVyXHJcbiAgICAgICAgaWYgKGhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiKSB7XHJcbiAgICAgICAgICAgIGhvc3RuYW1lICs9IFwiOjMwMDBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGhvc3RuYW1lICsgc2x1ZyArIHByb3BzLmlkKTtcclxuXHJcbiAgICAgICAgc2V0Q29waWVkKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxUb29sdGlwIGlkPVwiYnV0dG9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9Pntjb3BpZWQgPyAgXCJMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhXCIgOiBcIkNvcHkgbGluayB0byB0aGlzIGl0ZW1cIn08L1Rvb2x0aXA+XHJcbiAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICBvdmVybGF5PXtyZW5kZXJUb29sdGlwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgY29weUxpbmsgfSA+PElvTGluayAvPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklvTGluayIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkJ1dHRvbiIsIkNvcHlCdXR0b24iLCJwcm9wcyIsImNvcGllZCIsInNldENvcGllZCIsImNvcHlMaW5rIiwiaG9zdG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNsdWciLCJwYXRobmFtZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlkIiwicmVuZGVyVG9vbHRpcCIsInBsYWNlbWVudCIsImRlbGF5Iiwic2hvdyIsImhpZGUiLCJvdmVybGF5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/copyButton.tsx\n"));

/***/ })

});