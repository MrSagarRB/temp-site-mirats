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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"56db5ebf0db1\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/NGUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU2ZGI1ZWJmMGRiMVwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/loader.png */ \"(app-client)/./assets/loader.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    let [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let [selectedMenu, setSelectedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const NAV_ITEMS = [\n        {\n            label: \"Products\",\n            page: \"#products\"\n        },\n        {\n            label: \"Solutions\",\n            page: \"#solutions\"\n        },\n        {\n            label: \"Industry\",\n            page: \"#industry\"\n        },\n        {\n            label: \"Resources\",\n            page: \"#resources\"\n        },\n        {\n            label: \"Company\",\n            page: \"#company\"\n        }\n    ];\n    let handleOnLeave = ()=>{\n        setTimeout(()=>{\n            setSelectedMenu(\"\");\n        }, 500);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // setTimeout(() => {\n    //   setShowNav(true);\n    // }, 1000);\n    }, []);\n    console.log(selectedMenu);\n    let getCorrectMenu = (selectedMenu)=>{\n        switch(selectedMenu){\n            case \"Products\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Products, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Solutions\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Solutions, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 16\n                }, undefined);\n                break;\n            case \"Industry\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Industry, {}, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 16\n                }, undefined);\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        onMouseEnter: ()=>setShowNav(true),\n        onMouseLeave: ()=>handleOnLeave(),\n        className: \"bg-[#fff]  min-h-[63px] w-full flex items-center justify-center fixed top-0 z-40  duration-500 py-[20px]   \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-[45px] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_loader_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"mirats insights logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex space-x-6 font-[400] text-[14px]\",\n                            children: NAV_ITEMS.map((item, idx)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    onMouseEnter: ()=>setSelectedMenu(item.label),\n                                    className: \"\",\n                                    children: item.label\n                                }, idx, false, {\n                                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onMouseEnter: ()=>setShowNav(!showNav),\n                            className: \"px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500\",\n                            children: \"Contact Sales\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-[15px] py-[5px] border border-transparent hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500\",\n                            children: \"Start Free Trial\"\n                        }, void 0, false, {\n                            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"onLeaveTransition w-full \",\n                    children: getCorrectMenu(selectedMenu)\n                }, void 0, false, {\n                    fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"J6+z9Ub8sQVLgpFRhbDfr4GuSSM=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nconst Products = ()=>{\n    let productsData = [\n        {\n            heading: \"Quantitative Solutions\",\n            data: [\n                {\n                    title: \"Online Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"DIY Surveys\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Sample\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Quantitative Fieldwork\",\n                    link: \"#\"\n                },\n                {\n                    title: \"End to End Sample Service\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Qualitative Solutions\",\n            data: [\n                {\n                    title: \"In-person Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Telephonic Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Global Qualitative Fieldwork\",\n                    link: \"#\"\n                }\n            ]\n        },\n        {\n            heading: \"Specialist Solutions\",\n            data: [\n                {\n                    title: \"Recruitment\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Digital Qual\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Consulting\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Hybrid Research\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Product Tests\",\n                    link: \"#\"\n                },\n                {\n                    title: \"Transcription\",\n                    link: \"#\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            height: 0,\n            opacity: 0\n        },\n        animate: {\n            height: \"auto\",\n            opacity: 1\n        },\n        className: \" w-full mt-[60px] grid grid-cols-3 place-content-between \",\n        children: productsData.map((item)=>{\n            var _item_data;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[15px]\",\n                        children: [\n                            \" \",\n                            item.heading\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 195,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10px] flex flex-col\",\n                        children: item === null || item === void 0 ? void 0 : (_item_data = item.data) === null || _item_data === void 0 ? void 0 : _item_data.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: item.link,\n                                className: \"text-[20px] font-[600]\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                                lineNumber: 199,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                        lineNumber: 196,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n                lineNumber: 194,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 181,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Products;\nconst Solutions = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[300px] w-full\",\n        children: \"Solution\"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 213,\n        columnNumber: 10\n    }, undefined);\n};\n_c2 = Solutions;\nconst Industry = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[400px] w-full\",\n        children: \"Industry \"\n    }, void 0, false, {\n        fileName: \"/Users/atomostechnologies/Desktop/IMP Projects/show-case/next-app/components/Navbar.tsx\",\n        lineNumber: 217,\n        columnNumber: 10\n    }, undefined);\n};\n_c3 = Industry;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"Products\");\n$RefreshReg$(_c2, \"Solutions\");\n$RefreshReg$(_c3, \"Industry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJRCxXQUFVO2tCQUFtQjs7Ozs7O0FBQzNDO01BRk1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IG1pTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvYWRlci5wbmdcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbnRlcmZhY2UgTmF2SXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhZ2U6IHN0cmluZztcbn1cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgbGV0IFtzaG93TmF2LCBzZXRTaG93TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtzZWxlY3RlZE1lbnUsIHNldFNlbGVjdGVkTWVudV0gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuXG4gIGNvbnN0IE5BVl9JVEVNUzogQXJyYXk8TmF2SXRlbT4gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiUHJvZHVjdHNcIixcbiAgICAgIHBhZ2U6IFwiI3Byb2R1Y3RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJTb2x1dGlvbnNcIixcbiAgICAgIHBhZ2U6IFwiI3NvbHV0aW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiSW5kdXN0cnlcIixcbiAgICAgIHBhZ2U6IFwiI2luZHVzdHJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZXNvdXJjZXNcIixcbiAgICAgIHBhZ2U6IFwiI3Jlc291cmNlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgcGFnZTogXCIjY29tcGFueVwiLFxuICAgIH0sXG4gIF07XG5cbiAgbGV0IGhhbmRsZU9uTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTZWxlY3RlZE1lbnUoXCJcIik7XG4gICAgfSwgNTAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgc2V0U2hvd05hdih0cnVlKTtcbiAgICAvLyB9LCAxMDAwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkTWVudSk7XG4gIGxldCBnZXRDb3JyZWN0TWVudSA9IChzZWxlY3RlZE1lbnU6IFN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRNZW51KSB7XG4gICAgICBjYXNlIFwiUHJvZHVjdHNcIjpcbiAgICAgICAgcmV0dXJuIDxQcm9kdWN0cyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiU29sdXRpb25zXCI6XG4gICAgICAgIHJldHVybiA8U29sdXRpb25zIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJJbmR1c3RyeVwiOlxuICAgICAgICByZXR1cm4gPEluZHVzdHJ5IC8+O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93TmF2KHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVPbkxlYXZlKCl9XG4gICAgICBjbGFzc05hbWU9e2BiZy1bI2ZmZl0gIG1pbi1oLVs2M3B4XSB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZml4ZWQgdG9wLTAgei00MCAgZHVyYXRpb24tNTAwIHB5LVsyMHB4XSAgIGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXIgIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC1bNDVweF0gXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21pTG9nb30gYWx0PVwibWlyYXRzIGluc2lnaHRzIGxvZ29cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgZm9udC1bNDAwXSB0ZXh0LVsxNHB4XVwiPlxuICAgICAgICAgICAge05BVl9JVEVNUy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNlbGVjdGVkTWVudShpdGVtLmxhYmVsKX1cbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIlwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd05hdighc2hvd05hdil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC1bMTVweF0gcHktWzVweF0gYm9yZGVyIGJvcmRlci1bIzAwMDAwMF0gaG92ZXI6YmctWyMwMDAwMDBdIGhvdmVyOnRleHQtWyNmZmZmXSByb3VuZGVkLVsyM3B4XSBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnRhY3QgU2FsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LVsxNXB4XSBweS1bNXB4XSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50ICBob3Zlcjpib3JkZXItWyMwMDAwMDBdIHJvdW5kZWQtWzIzcHhdIGhvdmVyOmJnLXRyYW5zcGFyZW50IGJnLVsjRTNFM0UzXSBkdXJhdGlvbi01MDBcIj5cbiAgICAgICAgICAgIFN0YXJ0IEZyZWUgVHJpYWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25MZWF2ZVRyYW5zaXRpb24gdy1mdWxsICBcIj5cbiAgICAgICAgICB7Z2V0Q29ycmVjdE1lbnUoc2VsZWN0ZWRNZW51KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XG4gIGxldCBwcm9kdWN0c0RhdGEgPSBbXG4gICAge1xuICAgICAgaGVhZGluZzogXCJRdWFudGl0YXRpdmUgU29sdXRpb25zXCIsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgdGl0bGU6IFwiT25saW5lIFN1cnZleXNcIiwgbGluazogXCIjXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkRJWSBTdXJ2ZXlzXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJHbG9iYWwgU2FtcGxlXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJHbG9iYWwgUXVhbnRpdGF0aXZlIEZpZWxkd29ya1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiRW5kIHRvIEVuZCBTYW1wbGUgU2VydmljZVwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRpbmc6IFwiUXVhbGl0YXRpdmUgU29sdXRpb25zXCIsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgdGl0bGU6IFwiSW4tcGVyc29uIFF1YWxcIiwgbGluazogXCIjXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkRpZ2l0YWwgUXVhbFwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiVGVsZXBob25pYyBRdWFsXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJHbG9iYWwgUXVhbGl0YXRpdmUgRmllbGR3b3JrXCIsXG4gICAgICAgICAgbGluazogXCIjXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGluZzogXCJTcGVjaWFsaXN0IFNvbHV0aW9uc1wiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiBcIlJlY3J1aXRtZW50XCIsIGxpbms6IFwiI1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJEaWdpdGFsIFF1YWxcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkNvbnN1bHRpbmdcIixcbiAgICAgICAgICBsaW5rOiBcIiNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkh5YnJpZCBSZXNlYXJjaFwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiUHJvZHVjdCBUZXN0c1wiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiVHJhbnNjcmlwdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiI1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7XG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH19XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBtdC1bNjBweF0gZ3JpZCBncmlkLWNvbHMtMyAgcGxhY2UtY29udGVudC1iZXR3ZWVuIFwiXG4gICAgPlxuICAgICAge3Byb2R1Y3RzRGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF1cIj4ge2l0ZW0uaGVhZGluZ308L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVsxMHB4XSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIHtpdGVtPy5kYXRhPy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfSBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LVs2MDBdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTb2x1dGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtWzMwMHB4XSB3LWZ1bGxcIj5Tb2x1dGlvbjwvZGl2Pjtcbn07XG5cbmNvbnN0IEluZHVzdHJ5ID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoLVs0MDBweF0gdy1mdWxsXCI+SW5kdXN0cnkgPC9kaXY+O1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtaUxvZ28iLCJtb3Rpb24iLCJOYXZiYXIiLCJzaG93TmF2Iiwic2V0U2hvd05hdiIsInNlbGVjdGVkTWVudSIsInNldFNlbGVjdGVkTWVudSIsIk5BVl9JVEVNUyIsImxhYmVsIiwicGFnZSIsImhhbmRsZU9uTGVhdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImdldENvcnJlY3RNZW51IiwiUHJvZHVjdHMiLCJTb2x1dGlvbnMiLCJJbmR1c3RyeSIsImhlYWRlciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwic3JjIiwiYWx0IiwibmF2IiwibWFwIiwiaXRlbSIsImlkeCIsInAiLCJidXR0b24iLCJwcm9kdWN0c0RhdGEiLCJoZWFkaW5nIiwiZGF0YSIsInRpdGxlIiwibGluayIsImluaXRpYWwiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});