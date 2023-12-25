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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _barrel_optimize_names_MdDarkMode_MdOutlineDarkMode_react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MdDarkMode,MdOutlineDarkMode!=!react-icons/md */ \"__barrel_optimize__?names=MdDarkMode,MdOutlineDarkMode!=!./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const handleClick = ()=>{\n        toggleTheme(theme, setTheme);\n        document.documentElement.setAttribute(\"data-bs-theme\", theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(theme);\n        var curTheme = localStorage.getItem(\"theme\");\n        // check if theme is set in local storage\n        if (curTheme) {\n            setTheme(curTheme);\n            document.documentElement.setAttribute(\"data-bs-theme\", curTheme);\n        } else if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            setTheme(\"dark\");\n            document.documentElement.setAttribute(\"data-bs-theme\", \"dark\");\n        } else {\n            setTheme(\"light\");\n            document.documentElement.setAttribute(\"data-bs-theme\", \"light\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"portfolio.faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    expand: \"md\",\n                    className: \"navbar-main\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"navbar-brand\",\n                                href: \"/\",\n                                children: \"portfolio.faditawfig.com\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {\n                                \"aria-controls\": \"basic-navbar-nav\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Collapse, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"nav-link\",\n                                            href: \"/projects\",\n                                            children: \"Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"nav-link\",\n                                            href: \"/resume\",\n                                            children: \"Resume\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"nav-link\",\n                                            href: \"https://faditawfig.com\",\n                                            children: \"Consulting\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"nav-link\",\n                                            href: \"/contact\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onClick: handleClick,\n                                variant: \"outline\" + (theme === \"dark\" ? \"-light\" : \"-dark\"),\n                                children: theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDarkMode_MdOutlineDarkMode_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDarkMode, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 51\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDarkMode_MdOutlineDarkMode_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineDarkMode, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 67\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\header.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"lm84LOZxHN0YC4jzvAwAP/18Sno=\");\n_c = Header;\nfunction toggleTheme(theme, setTheme) {\n    console.log(theme);\n    var curTheme = localStorage.getItem(\"theme\");\n    if (curTheme === \"light\") {\n        localStorage.setItem(\"theme\", \"dark\");\n        setTheme(\"dark\");\n    } else {\n        localStorage.setItem(\"theme\", \"light\");\n        setTheme(\"light\");\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ0E7QUFDbUI7QUFDbkI7QUFDbEI7QUFDa0I7QUFDZjtBQUNBO0FBRWQsU0FBU1c7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxjQUFjO1FBQ2hCQyxZQUFZSCxPQUFPQztRQUVuQkcsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLENBQUMsaUJBQWlCTjtJQUMzRDtJQUVBSixnREFBU0EsQ0FBQztRQUNOVyxRQUFRQyxHQUFHLENBQUNSO1FBQ1osSUFBSVMsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1FBRXBDLHlDQUF5QztRQUN6QyxJQUFJRixVQUFVO1lBQ1ZSLFNBQVNRO1lBQ1RMLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLGlCQUFpQkc7UUFDM0QsT0FFSyxJQUFJRyxPQUFPQyxVQUFVLElBQUlELE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU8sRUFBRTtZQUNyRmIsU0FBUztZQUNURyxTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxpQkFBaUI7UUFDM0QsT0FDSztZQUNETCxTQUFTO1lBQ1RHLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLGlCQUFpQjtRQUMzRDtJQUVKLEdBQUcsRUFBRTtJQUVMLHFCQUNJOzswQkFDSSw4REFBQ1Qsa0RBQUlBOztrQ0FDRCw4REFBQ2tCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDQzswQkFDRyw0RUFBQzlCLDhEQUFNQTtvQkFBQytCLFFBQU87b0JBQU1DLFdBQVU7OEJBQzNCLDRFQUFDNUIsdUZBQVNBOzswQ0FDTiw4REFBQ0ssa0RBQUlBO2dDQUFDdUIsV0FBVTtnQ0FBZUMsTUFBSzswQ0FBSTs7Ozs7OzBDQUN4Qyw4REFBQ2pDLHFFQUFhO2dDQUFDbUMsaUJBQWM7Ozs7OzswQ0FDN0IsOERBQUNuQyx1RUFBZTswQ0FDWiw0RUFBQ0QsMkRBQUdBO29DQUFDaUMsV0FBVTs7c0RBQ1gsOERBQUN2QixrREFBSUE7NENBQUN1QixXQUFVOzRDQUFXQyxNQUFLO3NEQUFZOzs7Ozs7c0RBQzVDLDhEQUFDeEIsa0RBQUlBOzRDQUFDdUIsV0FBVTs0Q0FBV0MsTUFBSztzREFBVTs7Ozs7O3NEQUMxQyw4REFBQ3hCLGtEQUFJQTs0Q0FBQ3VCLFdBQVU7NENBQVdDLE1BQUs7c0RBQXlCOzs7Ozs7c0RBQ3pELDhEQUFDeEIsa0RBQUlBOzRDQUFDdUIsV0FBVTs0Q0FBV0MsTUFBSztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR25ELDhEQUFDaEMsOERBQU1BO2dDQUNIb0MsU0FBVXhCO2dDQUNWeUIsU0FBUyxZQUFhM0IsQ0FBQUEsVUFBVSxTQUFTLFdBQVcsT0FBTTswQ0FFeERBLFVBQVUsdUJBQVUsOERBQUNULDBHQUFVQTs7Ozt5REFBSyw4REFBQ0MsaUhBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRjtHQTVEd0JPO0tBQUFBO0FBOER4QixTQUFTSSxZQUFZSCxLQUFLLEVBQUVDLFFBQVE7SUFDaENNLFFBQVFDLEdBQUcsQ0FBQ1I7SUFFWixJQUFJUyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7SUFFcEMsSUFBSUYsYUFBYSxTQUFTO1FBQ3RCQyxhQUFha0IsT0FBTyxDQUFDLFNBQVM7UUFDOUIzQixTQUFTO0lBQ2IsT0FBTztRQUNIUyxhQUFha0IsT0FBTyxDQUFDLFNBQVM7UUFDOUIzQixTQUFTO0lBQ2I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyBNZERhcmtNb2RlLCBNZE91dGxpbmVEYXJrTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4geyBcclxuICAgICAgICB0b2dnbGVUaGVtZSh0aGVtZSwgc2V0VGhlbWUpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhlbWUpO1xyXG4gICAgICAgIHZhciBjdXJUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVtZSBpcyBzZXQgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGlmIChjdXJUaGVtZSkge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShjdXJUaGVtZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGhlbWUnLCBjdXJUaGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRldGVjdCBzeXN0ZW0gdGhlbWVcclxuICAgICAgICBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy10aGVtZScsICdkYXJrJyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHsgICAgXHJcbiAgICAgICAgICAgIHNldFRoZW1lKCdsaWdodCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnBvcnRmb2xpby5mYWRpdGF3ZmlnLmNvbTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGhlYWRlciA+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIGV4cGFuZD1cIm1kXCIgIGNsYXNzTmFtZT1cIm5hdmJhci1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5wb3J0Zm9saW8uZmFkaXRhd2ZpZy5jb208L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Byb2plY3RzXCI+UHJvamVjdHM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Jlc3VtZVwiPlJlc3VtZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJodHRwczovL2ZhZGl0YXdmaWcuY29tXCI+Q29uc3VsdGluZzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lXCIgKyAodGhlbWUgPT09ICdkYXJrJyA/ICctbGlnaHQnIDogJy1kYXJrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhlbWUgPT09ICdkYXJrJyA/ICA8TWREYXJrTW9kZS8+IDogPE1kT3V0bGluZURhcmtNb2RlLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlVGhlbWUodGhlbWUsIHNldFRoZW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGVtZSk7XHJcblxyXG4gICAgdmFyIGN1clRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICBcclxuICAgIGlmIChjdXJUaGVtZSA9PT0gJ2xpZ2h0Jykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XHJcbiAgICAgICAgc2V0VGhlbWUoJ2RhcmsnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgc2V0VGhlbWUoJ2xpZ2h0Jyk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdiIsIk5hdmJhciIsIkJ1dHRvbiIsIk1kRGFya01vZGUiLCJNZE91dGxpbmVEYXJrTW9kZSIsIkNvbnRhaW5lciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIkhlYWRlciIsInRoZW1lIiwic2V0VGhlbWUiLCJoYW5kbGVDbGljayIsInRvZ2dsZVRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiY3VyVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImhlYWRlciIsImV4cGFuZCIsImNsYXNzTmFtZSIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJvbkNsaWNrIiwidmFyaWFudCIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});