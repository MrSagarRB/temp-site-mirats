"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0dbb9d08faac\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/NGUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBkYmI5ZDA4ZmFhY1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/loader.png */ \"(app-client)/./assets/loader.png\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    let [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let [selectedMenu, setSelectedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const NAV_ITEMS = [\n        {\n            label: \"Products\",\n            page: \"#products\"\n        },\n        {\n            label: \"Solutions\",\n            page: \"#solutions\"\n        },\n        {\n            label: \"Industry\",\n            page: \"#industry\"\n        },\n        {\n            label: \"Resources\",\n            page: \"#resources\"\n        },\n        {\n            label: \"Company\",\n            page: \"#company\"\n        }\n    ];\n    let handleOnLeave = ()=>{\n        setTimeout(()=>{\n            setSelectedMenu(\"\");\n        }, 500);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // setTimeout(() => {\n    //   setShowNav(true);\n    // }, 1000);\n    }, []);\n    console.log(selectedMenu);\n    let getCorrectMenu = (selectedMenu)=>{\n        switch(selectedMenu){\n            case \"Products\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Products, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Solutions\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Solutions, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Industry\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Industry, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 16\n                }, undefined);\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        onMouseEnter: ()=>setShowNav(true),\n        onMouseLeave: ()=>handleOnLeave(),\n        className: \"bg-[#fff] test min-h-[63px] w-full flex items-center justify-center fixed top-0 z-40  duration-500 py-[20px]   \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center test\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-[45px] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"mirats insights logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex space-x-6 font-[400] text-[14px]\",\n                            children: NAV_ITEMS.map((item, idx)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    onMouseEnter: ()=>setSelectedMenu(item.label),\n                                    className: \"\",\n                                    children: item.label\n                                }, idx, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseEnter: ()=>setShowNav(!showNav),\n                            className: \"px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500\",\n                            children: \"Contact Sales\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-[15px] py-[5px] border border-transparent hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500\",\n                            children: \"Start Free Trial\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"onLeaveTransition w-full test \",\n                    children: getCorrectMenu(selectedMenu)\n                }, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"J6+z9Ub8sQVLgpFRhbDfr4GuSSM=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nconst Products = ()=>{\n    let productsData = [\n        {\n            heading: \"Quantitative Solutions\",\n            data: [\n                {\n                    title: \"Online Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"DIY Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Sample\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Quantitative Fieldwork\",\n                    link: \"#\"\n                },\n                {\n                    title: \"End to End Sample Service\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Qualitative Solutions\",\n            data: [\n                {\n                    title: \"In-person Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Telephonic Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Qualitative Fieldwork\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Specialist Solutions\",\n            data: [\n                {\n                    title: \"Recruitment\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Consulting\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Hybrid Research\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Product Tests\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Transcription\",\n                    link: \"#\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full mt-[60px] grid grid-cols-3 place-content-end gap-[20px]\",\n        children: productsData.map((item)=>{\n            var _item_data;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"test\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[15px]\",\n                        children: [\n                            \" \",\n                            item.heading\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10px]\",\n                        children: item === null || item === void 0 ? void 0 : (_item_data = item.data) === null || _item_data === void 0 ? void 0 : _item_data.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[20px] font-[600]\",\n                                children: [\n                                    \" \",\n                                    item.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 188,\n                                columnNumber: 24\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 186,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                lineNumber: 184,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 181,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Products;\nconst Solutions = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[300px] w-full\",\n        children: \"Solution\"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 199,\n        columnNumber: 10\n    }, undefined);\n};\n_c2 = Solutions;\nconst Industry = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[400px] w-full\",\n        children: \"Industry \"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 203,\n        columnNumber: 10\n    }, undefined);\n};\n_c3 = Industry;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"Products\");\n$RefreshReg$(_c2, \"Solutions\");\n$RefreshReg$(_c3, \"Industry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUNvQjtBQUVUO0FBTTFDLE1BQU1LLFNBQVMsSUFBTTs7SUFDbkIsSUFBSSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsSUFBSSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQU07SUFFcEQsTUFBTU8sWUFBNEI7UUFDaEM7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUNEO0lBRUQsSUFBSUMsZ0JBQWdCLElBQU07UUFDeEJDLFdBQVcsSUFBTTtZQUNmTCxnQkFBZ0I7UUFDbEIsR0FBRztJQUNMO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTGEsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLElBQUlTLGlCQUFpQixDQUFDVCxlQUF5QjtRQUM3QyxPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNVOzs7OztnQkFDUixLQUFNO1lBQ1IsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O2dCQUNSLEtBQU07WUFDUixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQzs7Ozs7Z0JBQ1IsS0FBTTtRQUNWO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsY0FBYyxJQUFNZixXQUFXLElBQUk7UUFDbkNnQixjQUFjLElBQU1WO1FBQ3BCVyxXQUFZO2tCQUVaLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FDQyw0RUFBQ0M7Z0NBQUVDLE1BQUs7MENBQ04sNEVBQUMzQixtREFBS0E7b0NBQUM0QixLQUFLeEIsMERBQU1BO29DQUFFeUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNDOzRCQUFJTixXQUFVO3NDQUNaZCxVQUFVcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLE1BQVE7Z0NBQzVCLHFCQUNFLDhEQUFDQztvQ0FDQ1osY0FBYyxJQUFNYixnQkFBZ0J1QixLQUFLckIsS0FBSztvQ0FFOUNhLFdBQVc7OENBRVZRLEtBQUtyQixLQUFLO21DQUhOc0I7Ozs7OzRCQU1YOzs7Ozs7c0NBRUYsOERBQUNFOzRCQUNDYixjQUFjLElBQU1mLFdBQVcsQ0FBQ0Q7NEJBQ2hDa0IsV0FBVTtzQ0FDWDs7Ozs7O3NDQUdELDhEQUFDVzs0QkFBT1gsV0FBVTtzQ0FBcUk7Ozs7Ozs7Ozs7Ozs4QkFJekosOERBQUNDO29CQUFJRCxXQUFVOzhCQUNaUCxlQUFlVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7R0EvRk1IO0tBQUFBO0FBaUdOLCtEQUFlQSxNQUFNQSxFQUFDO0FBRXRCLE1BQU1hLFdBQVcsSUFBTTtJQUNyQixJQUFJa0IsZUFBZTtRQUNqQjtZQUNFQyxTQUFTO1lBQ1RDLE1BQU07Z0JBQ0o7b0JBQUVDLE9BQU87b0JBQWtCQyxNQUFNO2dCQUFJO2dCQUNyQztvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjthQUNEO1FBQ0g7UUFDQTtZQUNFSCxTQUFTO1lBQ1RDLE1BQU07Z0JBQ0o7b0JBQUVDLE9BQU87b0JBQWtCQyxNQUFNO2dCQUFJO2dCQUNyQztvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjthQUNEO1FBQ0g7UUFDQTtZQUNFSCxTQUFTO1lBQ1RDLE1BQU07Z0JBQ0o7b0JBQUVDLE9BQU87b0JBQWVDLE1BQU07Z0JBQUk7Z0JBQ2xDO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QscUJBQ0UsOERBQUNmO1FBQUlELFdBQVU7a0JBQ1pZLGFBQWFMLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO2dCQUtuQkE7WUFKUCxxQkFDRSw4REFBQ1A7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFBRVYsV0FBVTs7NEJBQWM7NEJBQUVRLEtBQUtLLE9BQU87Ozs7Ozs7a0NBQ3pDLDhEQUFDWjt3QkFBSUQsV0FBVTtrQ0FDWlEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxLQUFNTSxJQUFJLGNBQVZOLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZRCxJQUFJLENBQUNDLE9BQVM7NEJBQ3pCLHFCQUFPLDhEQUFDRTtnQ0FBRVYsV0FBVTs7b0NBQXlCO29DQUFFUSxLQUFLTyxLQUFLOzs7Ozs7O3dCQUMzRDs7Ozs7Ozs7Ozs7O1FBSVI7Ozs7OztBQUdOO01BckZNckI7QUF1Rk4sTUFBTUMsWUFBWSxJQUFNO0lBQ3RCLHFCQUFPLDhEQUFDTTtRQUFJRCxXQUFVO2tCQUFtQjs7Ozs7O0FBQzNDO01BRk1MO0FBSU4sTUFBTUMsV0FBVyxJQUFNO0lBQ3JCLHFCQUFPLDhEQUFDSztRQUFJRCxXQUFVO2tCQUFtQjs7Ozs7O0FBQzNDO01BRk1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IG1pTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvYWRlci5wbmdcIjtcblxuaW50ZXJmYWNlIE5hdkl0ZW0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBwYWdlOiBzdHJpbmc7XG59XG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGxldCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc2VsZWN0ZWRNZW51LCBzZXRTZWxlY3RlZE1lbnVdID0gdXNlU3RhdGU8YW55PihcIlwiKTtcblxuICBjb25zdCBOQVZfSVRFTVM6IEFycmF5PE5hdkl0ZW0+ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIlByb2R1Y3RzXCIsXG4gICAgICBwYWdlOiBcIiNwcm9kdWN0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiU29sdXRpb25zXCIsXG4gICAgICBwYWdlOiBcIiNzb2x1dGlvbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkluZHVzdHJ5XCIsXG4gICAgICBwYWdlOiBcIiNpbmR1c3RyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUmVzb3VyY2VzXCIsXG4gICAgICBwYWdlOiBcIiNyZXNvdXJjZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgIHBhZ2U6IFwiI2NvbXBhbnlcIixcbiAgICB9LFxuICBdO1xuXG4gIGxldCBoYW5kbGVPbkxlYXZlID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2VsZWN0ZWRNZW51KFwiXCIpO1xuICAgIH0sIDUwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHNldFNob3dOYXYodHJ1ZSk7XG4gICAgLy8gfSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE1lbnUpO1xuICBsZXQgZ2V0Q29ycmVjdE1lbnUgPSAoc2VsZWN0ZWRNZW51OiBTdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkTWVudSkge1xuICAgICAgY2FzZSBcIlByb2R1Y3RzXCI6XG4gICAgICAgIHJldHVybiA8UHJvZHVjdHMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlNvbHV0aW9uc1wiOlxuICAgICAgICByZXR1cm4gPFNvbHV0aW9ucyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSW5kdXN0cnlcIjpcbiAgICAgICAgcmV0dXJuIDxJbmR1c3RyeSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd05hdih0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlT25MZWF2ZSgpfVxuICAgICAgY2xhc3NOYW1lPXtgYmctWyNmZmZdIHRlc3QgbWluLWgtWzYzcHhdIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmaXhlZCB0b3AtMCB6LTQwICBkdXJhdGlvbi01MDAgcHktWzIwcHhdICAgYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGl0ZW1zLWNlbnRlciAgdGVzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC1bNDVweF0gXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21pTG9nb30gYWx0PVwibWlyYXRzIGluc2lnaHRzIGxvZ29cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgZm9udC1bNDAwXSB0ZXh0LVsxNHB4XVwiPlxuICAgICAgICAgICAge05BVl9JVEVNUy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNlbGVjdGVkTWVudShpdGVtLmxhYmVsKX1cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIlwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd05hdighc2hvd05hdil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC1bMTVweF0gcHktWzVweF0gYm9yZGVyIGJvcmRlci1bIzAwMDAwMF0gaG92ZXI6YmctWyMwMDAwMDBdIGhvdmVyOnRleHQtWyNmZmZmXSByb3VuZGVkLVsyM3B4XSBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnRhY3QgU2FsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LVsxNXB4XSBweS1bNXB4XSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50ICBob3Zlcjpib3JkZXItWyMwMDAwMDBdIHJvdW5kZWQtWzIzcHhdIGhvdmVyOmJnLXRyYW5zcGFyZW50IGJnLVsjRTNFM0UzXSBkdXJhdGlvbi01MDBcIj5cbiAgICAgICAgICAgIFN0YXJ0IEZyZWUgVHJpYWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25MZWF2ZVRyYW5zaXRpb24gdy1mdWxsIHRlc3QgXCI+XG4gICAgICAgICAge2dldENvcnJlY3RNZW51KHNlbGVjdGVkTWVudSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xuICBsZXQgcHJvZHVjdHNEYXRhID0gW1xuICAgIHtcbiAgICAgIGhlYWRpbmc6IFwiUXVhbnRpdGF0aXZlIFNvbHV0aW9uc1wiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiBcIk9ubGluZSBTdXJ2ZXlzXCIsIGxpbms6IFwiI1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJESVkgU3VydmV5c1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFNhbXBsZVwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFF1YW50aXRhdGl2ZSBGaWVsZHdvcmtcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkVuZCB0byBFbmQgU2FtcGxlIFNlcnZpY2VcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkaW5nOiBcIlF1YWxpdGF0aXZlIFNvbHV0aW9uc1wiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiBcIkluLXBlcnNvbiBRdWFsXCIsIGxpbms6IFwiI1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJEaWdpdGFsIFF1YWxcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlRlbGVwaG9uaWMgUXVhbFwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFF1YWxpdGF0aXZlIEZpZWxkd29ya1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRpbmc6IFwiU3BlY2lhbGlzdCBTb2x1dGlvbnNcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyB0aXRsZTogXCJSZWNydWl0bWVudFwiLCBsaW5rOiBcIiNcIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiRGlnaXRhbCBRdWFsXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJDb25zdWx0aW5nXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJIeWJyaWQgUmVzZWFyY2hcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlByb2R1Y3QgVGVzdHNcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgbXQtWzYwcHhdIGdyaWQgZ3JpZC1jb2xzLTMgcGxhY2UtY29udGVudC1lbmQgZ2FwLVsyMHB4XVwiPlxuICAgICAge3Byb2R1Y3RzRGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdXCI+IHtpdGVtLmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMTBweF1cIj5cbiAgICAgICAgICAgICAge2l0ZW0/LmRhdGE/Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LVs2MDBdXCI+IHtpdGVtLnRpdGxlfTwvcD47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNvbHV0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1bMzAwcHhdIHctZnVsbFwiPlNvbHV0aW9uPC9kaXY+O1xufTtcblxuY29uc3QgSW5kdXN0cnkgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtWzQwMHB4XSB3LWZ1bGxcIj5JbmR1c3RyeSA8L2Rpdj47XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1pTG9nbyIsIk5hdmJhciIsInNob3dOYXYiLCJzZXRTaG93TmF2Iiwic2VsZWN0ZWRNZW51Iiwic2V0U2VsZWN0ZWRNZW51IiwiTkFWX0lURU1TIiwibGFiZWwiLCJwYWdlIiwiaGFuZGxlT25MZWF2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29ycmVjdE1lbnUiLCJQcm9kdWN0cyIsIlNvbHV0aW9ucyIsIkluZHVzdHJ5IiwiaGVhZGVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJzcmMiLCJhbHQiLCJuYXYiLCJtYXAiLCJpdGVtIiwiaWR4IiwicCIsImJ1dHRvbiIsInByb2R1Y3RzRGF0YSIsImhlYWRpbmciLCJkYXRhIiwidGl0bGUiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});