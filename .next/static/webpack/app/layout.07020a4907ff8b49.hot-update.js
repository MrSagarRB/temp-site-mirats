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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"41e25658348a\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/NGUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQxZTI1NjU4MzQ4YVwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/loader.png */ \"(app-client)/./assets/loader.png\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    let [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let [selectedMenu, setSelectedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const NAV_ITEMS = [\n        {\n            label: \"Products\",\n            page: \"#products\"\n        },\n        {\n            label: \"Solutions\",\n            page: \"#solutions\"\n        },\n        {\n            label: \"Industry\",\n            page: \"#industry\"\n        },\n        {\n            label: \"Resources\",\n            page: \"#resources\"\n        },\n        {\n            label: \"Company\",\n            page: \"#company\"\n        }\n    ];\n    let handleOnLeave = ()=>{\n        setTimeout(()=>{\n            setSelectedMenu(\"\");\n        }, 500);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // setTimeout(() => {\n    //   setShowNav(true);\n    // }, 1000);\n    }, []);\n    console.log(selectedMenu);\n    let getCorrectMenu = (selectedMenu)=>{\n        switch(selectedMenu){\n            case \"Products\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Products, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Solutions\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Solutions, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Industry\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Industry, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 16\n                }, undefined);\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        onMouseEnter: ()=>setShowNav(true),\n        onMouseLeave: ()=>handleOnLeave(),\n        className: \"bg-[#fff] test min-h-[63px] w-full flex items-center justify-center fixed top-0 z-40  duration-500 py-[20px]   \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-[45px] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"mirats insights logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex space-x-6 font-[400] text-[14px]\",\n                            children: NAV_ITEMS.map((item, idx)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    onMouseEnter: ()=>setSelectedMenu(item.label),\n                                    className: \"\",\n                                    children: item.label\n                                }, idx, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseEnter: ()=>setShowNav(!showNav),\n                            className: \"px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500\",\n                            children: \"Contact Sales\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-[15px] py-[5px] border border-transparent hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500\",\n                            children: \"Start Free Trial\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"onLeaveTransition\",\n                    children: getCorrectMenu(selectedMenu)\n                }, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"J6+z9Ub8sQVLgpFRhbDfr4GuSSM=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nconst Products = ()=>{\n    let productsData = [\n        {\n            heading: \"Quantitative Solutions\",\n            data: [\n                {\n                    title: \"Online Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"DIY Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Sample\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Quantitative Fieldwork\",\n                    link: \"#\"\n                },\n                {\n                    title: \"End to End Sample Service\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Qualitative Solutions\",\n            data: [\n                {\n                    title: \"In-person Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Telephonic Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Qualitative Fieldwork\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Specialist Solutions\",\n            data: [\n                {\n                    title: \"Recruitment\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Consulting\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Hybrid Research\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Product Tests\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Transcription\",\n                    link: \"#\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full mt-[60px] grid grid-cols-3 gap-[10px]\",\n        children: productsData.map((item)=>{\n            var _item_data;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[15px]\",\n                        children: [\n                            \" \",\n                            item.heading\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10px]\",\n                        children: item === null || item === void 0 ? void 0 : (_item_data = item.data) === null || _item_data === void 0 ? void 0 : _item_data.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[24px] font-[600]\",\n                                children: [\n                                    \" \",\n                                    item.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 186,\n                                columnNumber: 24\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                lineNumber: 182,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Products;\nconst Solutions = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[300px] w-full\",\n        children: \"Solution\"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 197,\n        columnNumber: 10\n    }, undefined);\n};\n_c2 = Solutions;\nconst Industry = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[400px] w-full\",\n        children: \"Industry \"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 201,\n        columnNumber: 10\n    }, undefined);\n};\n_c3 = Industry;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"Products\");\n$RefreshReg$(_c2, \"Solutions\");\n$RefreshReg$(_c3, \"Industry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUNvQjtBQUVUO0FBTTFDLE1BQU1LLFNBQVMsSUFBTTs7SUFDbkIsSUFBSSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsSUFBSSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQU07SUFFcEQsTUFBTU8sWUFBNEI7UUFDaEM7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUNEO0lBRUQsSUFBSUMsZ0JBQWdCLElBQU07UUFDeEJDLFdBQVcsSUFBTTtZQUNmTCxnQkFBZ0I7UUFDbEIsR0FBRztJQUNMO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTGEsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLElBQUlTLGlCQUFpQixDQUFDVCxlQUF5QjtRQUM3QyxPQUFRQTtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNVOzs7OztnQkFDUixLQUFNO1lBQ1IsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O2dCQUNSLEtBQU07WUFDUixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQzs7Ozs7Z0JBQ1IsS0FBTTtRQUNWO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsY0FBYyxJQUFNZixXQUFXLElBQUk7UUFDbkNnQixjQUFjLElBQU1WO1FBQ3BCVyxXQUFZO2tCQUVaLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FDQyw0RUFBQ0M7Z0NBQUVDLE1BQUs7MENBQ04sNEVBQUMzQixtREFBS0E7b0NBQUM0QixLQUFLeEIsMERBQU1BO29DQUFFeUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNDOzRCQUFJTixXQUFVO3NDQUNaZCxVQUFVcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLE1BQVE7Z0NBQzVCLHFCQUNFLDhEQUFDQztvQ0FDQ1osY0FBYyxJQUFNYixnQkFBZ0J1QixLQUFLckIsS0FBSztvQ0FFOUNhLFdBQVc7OENBRVZRLEtBQUtyQixLQUFLO21DQUhOc0I7Ozs7OzRCQU1YOzs7Ozs7c0NBRUYsOERBQUNFOzRCQUNDYixjQUFjLElBQU1mLFdBQVcsQ0FBQ0Q7NEJBQ2hDa0IsV0FBVTtzQ0FDWDs7Ozs7O3NDQUdELDhEQUFDVzs0QkFBT1gsV0FBVTtzQ0FBcUk7Ozs7Ozs7Ozs7Ozs4QkFJekosOERBQUNDO29CQUFJRCxXQUFVOzhCQUFxQlAsZUFBZVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNEO0dBN0ZNSDtLQUFBQTtBQStGTiwrREFBZUEsTUFBTUEsRUFBQztBQUV0QixNQUFNYSxXQUFXLElBQU07SUFDckIsSUFBSWtCLGVBQWU7UUFDakI7WUFDRUMsU0FBUztZQUNUQyxNQUFNO2dCQUNKO29CQUFFQyxPQUFPO29CQUFrQkMsTUFBTTtnQkFBSTtnQkFDckM7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO1FBQ0E7WUFDRUgsU0FBUztZQUNUQyxNQUFNO2dCQUNKO29CQUFFQyxPQUFPO29CQUFrQkMsTUFBTTtnQkFBSTtnQkFDckM7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO1FBQ0E7WUFDRUgsU0FBUztZQUNUQyxNQUFNO2dCQUNKO29CQUFFQyxPQUFPO29CQUFlQyxNQUFNO2dCQUFJO2dCQUNsQztvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjthQUNEO1FBQ0g7S0FDRDtJQUNELHFCQUNFLDhEQUFDZjtRQUFJRCxXQUFVO2tCQUNaWSxhQUFhTCxHQUFHLENBQUMsQ0FBQ0MsT0FBUztnQkFLbkJBO1lBSlAscUJBQ0UsOERBQUNQOztrQ0FDQyw4REFBQ1M7d0JBQUVWLFdBQVU7OzRCQUFjOzRCQUFFUSxLQUFLSyxPQUFPOzs7Ozs7O2tDQUN6Qyw4REFBQ1o7d0JBQUlELFdBQVU7a0NBQ1pRLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTU0sSUFBSSxjQUFWTix3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUQsSUFBSSxDQUFDQyxPQUFTOzRCQUN6QixxQkFBTyw4REFBQ0U7Z0NBQUVWLFdBQVU7O29DQUF5QjtvQ0FBRVEsS0FBS08sS0FBSzs7Ozs7Ozt3QkFDM0Q7Ozs7Ozs7Ozs7OztRQUlSOzs7Ozs7QUFHTjtNQXJGTXJCO0FBdUZOLE1BQU1DLFlBQVksSUFBTTtJQUN0QixxQkFBTyw4REFBQ007UUFBSUQsV0FBVTtrQkFBbUI7Ozs7OztBQUMzQztNQUZNTDtBQUlOLE1BQU1DLFdBQVcsSUFBTTtJQUNyQixxQkFBTyw4REFBQ0s7UUFBSUQsV0FBVTtrQkFBbUI7Ozs7OztBQUMzQztNQUZNSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcbmltcG9ydCBtaUxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9sb2FkZXIucG5nXCI7XG5cbmludGVyZmFjZSBOYXZJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFnZTogc3RyaW5nO1xufVxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBsZXQgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3NlbGVjdGVkTWVudSwgc2V0U2VsZWN0ZWRNZW51XSA9IHVzZVN0YXRlPGFueT4oXCJcIik7XG5cbiAgY29uc3QgTkFWX0lURU1TOiBBcnJheTxOYXZJdGVtPiA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJQcm9kdWN0c1wiLFxuICAgICAgcGFnZTogXCIjcHJvZHVjdHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlNvbHV0aW9uc1wiLFxuICAgICAgcGFnZTogXCIjc29sdXRpb25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJJbmR1c3RyeVwiLFxuICAgICAgcGFnZTogXCIjaW5kdXN0cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlJlc291cmNlc1wiLFxuICAgICAgcGFnZTogXCIjcmVzb3VyY2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICBwYWdlOiBcIiNjb21wYW55XCIsXG4gICAgfSxcbiAgXTtcblxuICBsZXQgaGFuZGxlT25MZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkTWVudShcIlwiKTtcbiAgICB9LCA1MDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICBzZXRTaG93TmF2KHRydWUpO1xuICAgIC8vIH0sIDEwMDApO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coc2VsZWN0ZWRNZW51KTtcbiAgbGV0IGdldENvcnJlY3RNZW51ID0gKHNlbGVjdGVkTWVudTogU3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZE1lbnUpIHtcbiAgICAgIGNhc2UgXCJQcm9kdWN0c1wiOlxuICAgICAgICByZXR1cm4gPFByb2R1Y3RzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJTb2x1dGlvbnNcIjpcbiAgICAgICAgcmV0dXJuIDxTb2x1dGlvbnMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkluZHVzdHJ5XCI6XG4gICAgICAgIHJldHVybiA8SW5kdXN0cnkgLz47XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dOYXYodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZU9uTGVhdmUoKX1cbiAgICAgIGNsYXNzTmFtZT17YGJnLVsjZmZmXSB0ZXN0IG1pbi1oLVs2M3B4XSB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZml4ZWQgdG9wLTAgei00MCAgZHVyYXRpb24tNTAwIHB5LVsyMHB4XSAgIGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVs0NXB4XSBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bWlMb2dvfSBhbHQ9XCJtaXJhdHMgaW5zaWdodHMgbG9nb1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBmb250LVs0MDBdIHRleHQtWzE0cHhdXCI+XG4gICAgICAgICAgICB7TkFWX0lURU1TLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2VsZWN0ZWRNZW51KGl0ZW0ubGFiZWwpfVxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93TmF2KCFzaG93TmF2KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LVsxNXB4XSBweS1bNXB4XSBib3JkZXIgYm9yZGVyLVsjMDAwMDAwXSBob3ZlcjpiZy1bIzAwMDAwMF0gaG92ZXI6dGV4dC1bI2ZmZmZdIHJvdW5kZWQtWzIzcHhdIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29udGFjdCBTYWxlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtWzE1cHhdIHB5LVs1cHhdIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgIGhvdmVyOmJvcmRlci1bIzAwMDAwMF0gcm91bmRlZC1bMjNweF0gaG92ZXI6YmctdHJhbnNwYXJlbnQgYmctWyNFM0UzRTNdIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgICAgU3RhcnQgRnJlZSBUcmlhbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbkxlYXZlVHJhbnNpdGlvblwiPntnZXRDb3JyZWN0TWVudShzZWxlY3RlZE1lbnUpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4ge1xuICBsZXQgcHJvZHVjdHNEYXRhID0gW1xuICAgIHtcbiAgICAgIGhlYWRpbmc6IFwiUXVhbnRpdGF0aXZlIFNvbHV0aW9uc1wiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiBcIk9ubGluZSBTdXJ2ZXlzXCIsIGxpbms6IFwiI1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJESVkgU3VydmV5c1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFNhbXBsZVwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFF1YW50aXRhdGl2ZSBGaWVsZHdvcmtcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkVuZCB0byBFbmQgU2FtcGxlIFNlcnZpY2VcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkaW5nOiBcIlF1YWxpdGF0aXZlIFNvbHV0aW9uc1wiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiBcIkluLXBlcnNvbiBRdWFsXCIsIGxpbms6IFwiI1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJEaWdpdGFsIFF1YWxcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlRlbGVwaG9uaWMgUXVhbFwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiR2xvYmFsIFF1YWxpdGF0aXZlIEZpZWxkd29ya1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRpbmc6IFwiU3BlY2lhbGlzdCBTb2x1dGlvbnNcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyB0aXRsZTogXCJSZWNydWl0bWVudFwiLCBsaW5rOiBcIiNcIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiRGlnaXRhbCBRdWFsXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJDb25zdWx0aW5nXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJIeWJyaWQgUmVzZWFyY2hcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlByb2R1Y3QgVGVzdHNcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgbXQtWzYwcHhdIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLVsxMHB4XVwiPlxuICAgICAge3Byb2R1Y3RzRGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF1cIj4ge2l0ZW0uaGVhZGluZ308L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVsxMHB4XVwiPlxuICAgICAgICAgICAgICB7aXRlbT8uZGF0YT8ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIGZvbnQtWzYwMF1cIj4ge2l0ZW0udGl0bGV9PC9wPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU29sdXRpb25zID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoLVszMDBweF0gdy1mdWxsXCI+U29sdXRpb248L2Rpdj47XG59O1xuXG5jb25zdCBJbmR1c3RyeSA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1bNDAwcHhdIHctZnVsbFwiPkluZHVzdHJ5IDwvZGl2Pjtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWlMb2dvIiwiTmF2YmFyIiwic2hvd05hdiIsInNldFNob3dOYXYiLCJzZWxlY3RlZE1lbnUiLCJzZXRTZWxlY3RlZE1lbnUiLCJOQVZfSVRFTVMiLCJsYWJlbCIsInBhZ2UiLCJoYW5kbGVPbkxlYXZlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb3JyZWN0TWVudSIsIlByb2R1Y3RzIiwiU29sdXRpb25zIiwiSW5kdXN0cnkiLCJoZWFkZXIiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsInNyYyIsImFsdCIsIm5hdiIsIm1hcCIsIml0ZW0iLCJpZHgiLCJwIiwiYnV0dG9uIiwicHJvZHVjdHNEYXRhIiwiaGVhZGluZyIsImRhdGEiLCJ0aXRsZSIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});