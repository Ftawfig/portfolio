"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"__barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _copyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyButton */ \"./components/copyButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Project(param) {\n    let { props, children } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const myRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleClick = ()=>{\n        setExpanded(!expanded);\n        if (expanded) {\n            myRef.current.scrollIntoView();\n        }\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Get the id parameter from the URL\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Expand the project if the id parameter matches the project id\n        if (props.id && id && props.id === id) {\n            myRef.current.scrollIntoView();\n            setExpanded(true);\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: myRef,\n        className: \"project-button\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n            className: \"project-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        className: \"project-details\",\n                        xs: 10,\n                        sm: 11,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"project-title\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                        xs: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-category\",\n                                            children: props.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                        xs: 6,\n                                        children: props.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-date\",\n                                            children: props.date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 48\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"project-description\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 39\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_copyButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                props: {\n                                    id: props.id\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 2,\n                        sm: 1,\n                        className: \"expand-button flex-column\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            title: \"Expand for details\",\n                            className: \"h-100\",\n                            onClick: handleClick,\n                            children: expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 116\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 137\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"Su5aTnbmjFGoBu6r/7qrpX9Jt/g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDYztBQUNZO0FBQ2tCO0FBQzNCO0FBQ3dCO0FBQzdCO0FBRXZCLFNBQVNXLFFBQVEsS0FBbUI7UUFBbkIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBbkI7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNYSxRQUFRWiw2Q0FBTUEsQ0FBQztJQUVyQixNQUFNYSxjQUFjO1FBQ2hCRixZQUFZLENBQUNEO1FBRWIsSUFBSUEsVUFBVTtZQUNWRSxNQUFNRSxPQUFPLENBQUNDLGNBQWM7UUFDaEM7SUFDSjtJQUNBLE1BQU1DLFNBQVNuQixzREFBU0E7SUFFeEIsb0NBQW9DO0lBQ3BDLE1BQU0sRUFBRW9CLEVBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCcEIsZ0RBQVNBLENBQUM7UUFDTixnRUFBZ0U7UUFDaEUsSUFBSVUsTUFBTVMsRUFBRSxJQUFJQSxNQUFNVCxNQUFNUyxFQUFFLEtBQUtBLElBQUk7WUFDbkNMLE1BQU1FLE9BQU8sQ0FBQ0MsY0FBYztZQUM1QkosWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ007S0FBRztJQUdQLHFCQUVJLDhEQUFDRTtRQUFJQyxLQUFLUjtRQUFPUyxXQUFVO2tCQUN2Qiw0RUFBQ3BCLHVGQUFTQSxDQUFDcUIsSUFBSTtZQUFDRCxXQUFVO3NCQUN0Qiw0RUFBQ25CLCtFQUFHQTs7a0NBQ0EsOERBQUNDLCtFQUFHQTt3QkFBQ2tCLFdBQVU7d0JBQWtCRSxJQUFJO3dCQUFJQyxJQUFJOzswQ0FDekMsOERBQUNDO2dDQUFHSixXQUFVOzBDQUFpQmIsTUFBTWtCLEtBQUs7Ozs7OzswQ0FDMUMsOERBQUN4QiwrRUFBR0E7O2tEQUNBLDhEQUFDQywrRUFBR0E7d0NBQUNvQixJQUFJO2tEQUNMLDRFQUFDSTs0Q0FBR04sV0FBVTtzREFBb0JiLE1BQU1vQixRQUFROzs7Ozs7Ozs7OztrREFFcEQsOERBQUN6QiwrRUFBR0E7d0NBQUNvQixJQUFJO2tEQUNKZixNQUFNcUIsSUFBSSxrQkFBSSw4REFBQ0Y7NENBQUdOLFdBQVU7c0RBQWdCYixNQUFNcUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRzdEbkIsMEJBQVksOERBQUNvQjtnQ0FBRVQsV0FBVTswQ0FBdUJaOzs7Ozs7NEJBQ2hEQywwQkFBWSw4REFBQ0osbURBQVVBO2dDQUFDRSxPQUFPO29DQUFFUyxJQUFLVCxNQUFNUyxFQUFFO2dDQUFDOzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDZCwrRUFBR0E7d0JBQUNvQixJQUFJO3dCQUFHQyxJQUFJO3dCQUFHSCxXQUFVO2tDQUN6Qiw0RUFBQ1U7NEJBQU9MLE9BQU07NEJBQXFCTCxXQUFVOzRCQUFRVyxTQUFVbkI7c0NBQWlCSCx5QkFBVyw4REFBQ0wsa0hBQWNBOzs7O3FEQUFNLDhEQUFDRCxxSEFBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFKO0dBbkR3Qkc7O1FBV0xWLGtEQUFTQTs7O0tBWEpVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdC50c3g/N2NlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tICcuL2NvcHlCdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb3BzLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcblxyXG4gICAgICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICAgICAgICBteVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBpZCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBFeHBhbmQgdGhlIHByb2plY3QgaWYgdGhlIGlkIHBhcmFtZXRlciBtYXRjaGVzIHRoZSBwcm9qZWN0IGlkXHJcbiAgICAgICAgaWYgKHByb3BzLmlkICYmIGlkICYmIHByb3BzLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBteVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHNldEV4cGFuZGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IHJlZj17bXlSZWZ9IGNsYXNzTmFtZT1cInByb2plY3QtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxzXCIgeHM9ezEwfSBzbT17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtY2F0ZWdvcnlcIj57cHJvcHMuY2F0ZWdvcnl9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGUgJiYgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtZGF0ZVwiPntwcm9wcy5kYXRlfTwvaDQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4cGFuZGVkICYmIDxwIGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgJiYgPENvcHlCdXR0b24gcHJvcHM9e3sgaWQgOiBwcm9wcy5pZCB9fSAvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Mn0gc209ezF9IGNsYXNzTmFtZT1cImV4cGFuZC1idXR0b24gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIkV4cGFuZCBmb3IgZGV0YWlsc1wiIGNsYXNzTmFtZT1cImgtMTAwXCIgb25DbGljaz17IGhhbmRsZUNsaWNrIH0gPnsgZXhwYW5kZWQgPyA8SW9Jb3NBcnJvd0Rvd24gLz4gOiA8SW9Jb3NBcnJvd0ZvcndhcmQgLz4gfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJMaXN0R3JvdXAiLCJSb3ciLCJDb2wiLCJJb0lvc0Fycm93Rm9yd2FyZCIsIklvSW9zQXJyb3dEb3duIiwiQ29weUJ1dHRvbiIsIlByb2plY3QiLCJwcm9wcyIsImNoaWxkcmVuIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIm15UmVmIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiSXRlbSIsInhzIiwic20iLCJoMyIsInRpdGxlIiwiaDQiLCJjYXRlZ29yeSIsImRhdGUiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project.tsx\n"));

/***/ })

});