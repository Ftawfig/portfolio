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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CopyButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoLink!=!react-icons/io5 */ \"__barrel_optimize__?names=IoLink!=!./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ \"./node_modules/react-bootstrap/esm/OverlayTrigger.js\");\n/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tooltip */ \"./node_modules/react-bootstrap/esm/Tooltip.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CopyButton(param) {\n    let { props } = param;\n    _s();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const copyLink = ()=>{\n        let hostname = window.location.hostname;\n        // get slug from the URL\n        const slug = window.location.pathname + \"?id=\";\n        // if dev attach port number\n        if (hostname === \"localhost\") {\n            hostname += \":3000\";\n        }\n        navigator.clipboard.writeText(hostname + slug + props.id);\n        setCopied(true);\n    };\n    const renderTooltip = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"button-tooltip\",\n            ...props,\n            children: copied ? \"Link copied to clipboard!\" : \"Copy link to this item\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        placement: \"right\",\n        delay: {\n            show: 250,\n            hide: 400\n        },\n        overlay: renderTooltip,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"outline\",\n            className: \"copy-button\",\n            onClick: copyLink,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoLink, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 85\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\copyButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(CopyButton, \"NE86rL3vg4NVcTTWDavsT0hUBJs=\");\n_c = CopyButton;\nvar _c;\n$RefreshReg$(_c, \"CopyButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvcHlCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDUTtBQUNtQjtBQUNkO0FBQ0Y7QUFFN0IsU0FBU00sV0FBVyxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQy9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUyxXQUFXO1FBQ2IsSUFBSUMsV0FBV0MsT0FBT0MsUUFBUSxDQUFDRixRQUFRO1FBRXZDLHdCQUF3QjtRQUN4QixNQUFNRyxPQUFPRixPQUFPQyxRQUFRLENBQUNFLFFBQVEsR0FBSTtRQUV6Qyw0QkFBNEI7UUFDNUIsSUFBSUosYUFBYSxhQUFhO1lBQzFCQSxZQUFZO1FBQ2hCO1FBRUFLLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDUCxXQUFXRyxPQUFPUCxNQUFNWSxFQUFFO1FBRXhEVixVQUFVO0lBQ2Q7SUFDQSxNQUFNVyxnQkFBZ0IsQ0FBQ2Isc0JBQ25CLDhEQUFDSCwrREFBT0E7WUFBQ2UsSUFBRztZQUFrQixHQUFHWixLQUFLO3NCQUFHQyxTQUFVLDhCQUE4Qjs7Ozs7O0lBR3JGLHFCQUNJLDhEQUFDTCxzRUFBY0E7UUFDWGtCLFdBQVU7UUFDVkMsT0FBTztZQUFFQyxNQUFNO1lBQUtDLE1BQU07UUFBSTtRQUM5QkMsU0FBU0w7a0JBRVQsNEVBQUNmLDhEQUFNQTtZQUFDcUIsU0FBUTtZQUFVQyxXQUFVO1lBQWNDLFNBQVVsQjtzQkFBWSw0RUFBQ1IsaUZBQU1BOzs7Ozs7Ozs7Ozs7Ozs7QUFHM0Y7R0EvQndCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvcHlCdXR0b24udHN4Pzg4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElvTGluayB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuaW1wb3J0IE92ZXJsYXlUcmlnZ2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlcic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ub29sdGlwJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlCdXR0b24oeyBwcm9wcyB9KSB7XHJcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHNsdWcgZnJvbSB0aGUgVVJMXHJcbiAgICAgICAgY29uc3Qgc2x1ZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICBcIj9pZD1cIjtcclxuXHJcbiAgICAgICAgLy8gaWYgZGV2IGF0dGFjaCBwb3J0IG51bWJlclxyXG4gICAgICAgIGlmIChob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgICAgICAgICBob3N0bmFtZSArPSBcIjozMDAwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChob3N0bmFtZSArIHNsdWcgKyBwcm9wcy5pZCk7XHJcblxyXG4gICAgICAgIHNldENvcGllZCh0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbmRlclRvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICA8VG9vbHRpcCBpZD1cImJ1dHRvbi10b29sdGlwXCIgey4uLnByb3BzfT57Y29waWVkID8gIFwiTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiIDogXCJDb3B5IGxpbmsgdG8gdGhpcyBpdGVtXCJ9PC9Ub29sdGlwPlxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgb3ZlcmxheT17cmVuZGVyVG9vbHRpcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJjb3B5LWJ1dHRvblwiIG9uQ2xpY2s9eyBjb3B5TGluayB9ID48SW9MaW5rIC8+PC9CdXR0b24+XHJcbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW9MaW5rIiwiT3ZlcmxheVRyaWdnZXIiLCJUb29sdGlwIiwiQnV0dG9uIiwiQ29weUJ1dHRvbiIsInByb3BzIiwiY29waWVkIiwic2V0Q29waWVkIiwiY29weUxpbmsiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2x1ZyIsInBhdGhuYW1lIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaWQiLCJyZW5kZXJUb29sdGlwIiwicGxhY2VtZW50IiwiZGVsYXkiLCJzaG93IiwiaGlkZSIsIm92ZXJsYXkiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/copyButton.tsx\n"));

/***/ })

});