"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gratitude-vault/page",{

/***/ "(app-pages-browser)/./app/gratitude-vault/components/Vault.tsx":
/*!**************************************************!*\
  !*** ./app/gratitude-vault/components/Vault.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vault: function() { return /* binding */ Vault; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./components/ui/scroll-area.tsx\");\n/* harmony import */ var _barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Compass,Settings,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/compass.js\");\n/* harmony import */ var _barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Compass,Settings,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Compass,Settings,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/share-2.js\");\n\n\n\n\nfunction Vault(param) {\n    let { gratitudes } = param;\n    var _session_user, _session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-1/3 bg-secondary p-4 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Your Gratitude Vault\"\n            }, void 0, false, {\n                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, this),\n                            \"Explore\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            \"Settings\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/gratitude-vault/\".concat((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.id),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            variant: \"outline\",\n                            size: \"sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Compass_Settings_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"mr-2 h-4 w-4\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 11\n                                }, this),\n                                \"Share\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        children: \"Share\"\n                    }, void 0, false, {\n                        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_2__.ScrollArea, {\n                className: \"h-[calc(100vh-200px)]\",\n                children: gratitudes.map((gratitude, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-background p-2 rounded mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-semibold\",\n                                children: gratitude.title\n                            }, void 0, false, {\n                                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: gratitude.content.slice(0, 50)\n                            }, void 0, false, {\n                                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            gratitude.isPublic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs text-blue-500\",\n                                children: \"Public\"\n                            }, void 0, false, {\n                                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 36\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/components/Vault.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Vault;\nvar _c;\n$RefreshReg$(_c, \"Vault\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ncmF0aXR1ZGUtdmF1bHQvY29tcG9uZW50cy9WYXVsdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDUztBQUNBO0FBTWpELFNBQVNLLE1BQU0sS0FBMEI7UUFBMUIsRUFBRUMsVUFBVSxFQUFjLEdBQTFCO1FBYVVDLGVBQUFBO0lBWjlCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNULHlEQUFNQTt3QkFBQ1csU0FBUTt3QkFBVUMsTUFBSzs7MENBQzdCLDhEQUFDUixtR0FBT0E7Z0NBQUNLLFdBQVU7Ozs7Ozs0QkFBaUI7Ozs7Ozs7a0NBR3RDLDhEQUFDVCx5REFBTUE7d0JBQUNXLFNBQVE7d0JBQVVDLE1BQUs7OzBDQUM3Qiw4REFBQ1YsbUdBQVFBO2dDQUFDTyxXQUFVOzs7Ozs7NEJBQWlCOzs7Ozs7O2tDQUcvQyw4REFBQ0k7d0JBQUtDLE1BQU0sb0JBQXNDLFFBQWxCUCxXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTUSxJQUFJLGNBQWJSLG9DQUFBQSxjQUFlUyxFQUFFO3dCQUFJQyxRQUFRO2tDQUNuRCw0RUFBQ2pCLHlEQUFNQTs0QkFBQ1csU0FBUTs0QkFBVUMsTUFBSzs7OENBQy9CLDhEQUFDVCxtR0FBTUE7b0NBQUNNLFdBQVU7Ozs7OztnQ0FBaUI7Ozs7Ozs7Ozs7OztrQ0FJckMsOERBQUNULHlEQUFNQTt3QkFBQ1csU0FBUTt3QkFBVUMsTUFBSztrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ1gsa0VBQVVBO2dCQUFDUSxXQUFVOzBCQUNuQkgsV0FBV1ksR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUMxQiw4REFBQ1o7d0JBQWdCQyxXQUFVOzswQ0FDekIsOERBQUNZO2dDQUFHWixXQUFVOzBDQUFpQlUsVUFBVUcsS0FBSzs7Ozs7OzBDQUM5Qyw4REFBQ0M7Z0NBQUVkLFdBQVU7MENBQVdVLFVBQVVLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEdBQUc7Ozs7Ozs0QkFDbEROLFVBQVVPLFFBQVEsa0JBQUksOERBQUNDO2dDQUFLbEIsV0FBVTswQ0FBd0I7Ozs7Ozs7dUJBSHZEVzs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQjtLQWxDZ0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ncmF0aXR1ZGUtdmF1bHQvY29tcG9uZW50cy9WYXVsdC50c3g/NjczZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xuaW1wb3J0IHsgU2Nyb2xsQXJlYSB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYSdcbmltcG9ydCB7IFNldHRpbmdzLCBTaGFyZTIsIENvbXBhc3MgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmludGVyZmFjZSBWYXVsdFByb3BzIHtcbiAgZ3JhdGl0dWRlczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmc7IGlzUHVibGljOiBib29sZWFuIH0+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWYXVsdCh7IGdyYXRpdHVkZXMgfTogVmF1bHRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8zIGJnLXNlY29uZGFyeSBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+WW91ciBHcmF0aXR1ZGUgVmF1bHQ8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBtYi00XCI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIj5cbiAgICAgICAgICA8Q29tcGFzcyBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgIEV4cGxvcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIj5cbiAgICAgICAgICA8U2V0dGluZ3MgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICA8L0J1dHRvbj5cbjxMaW5rIGhyZWY9e2AvZ3JhdGl0dWRlLXZhdWx0LyR7c2Vzc2lvbj8udXNlcj8uaWR9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgIFNoYXJlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2Nyb2xsQXJlYSBjbGFzc05hbWU9XCJoLVtjYWxjKDEwMHZoLTIwMHB4KV1cIj5cbiAgICAgICAge2dyYXRpdHVkZXMubWFwKChncmF0aXR1ZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIHAtMiByb3VuZGVkIG1iLTJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2dyYXRpdHVkZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntncmF0aXR1ZGUuY29udGVudC5zbGljZSgwLCA1MCl9PC9wPlxuICAgICAgICAgICAge2dyYXRpdHVkZS5pc1B1YmxpYyAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS01MDBcIj5QdWJsaWM8L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2Nyb2xsQXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiU2Nyb2xsQXJlYSIsIlNldHRpbmdzIiwiU2hhcmUyIiwiQ29tcGFzcyIsIlZhdWx0IiwiZ3JhdGl0dWRlcyIsInNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInZhcmlhbnQiLCJzaXplIiwiTGluayIsImhyZWYiLCJ1c2VyIiwiaWQiLCJwYXNzSHJlZiIsIm1hcCIsImdyYXRpdHVkZSIsImluZGV4IiwiaDMiLCJ0aXRsZSIsInAiLCJjb250ZW50Iiwic2xpY2UiLCJpc1B1YmxpYyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/gratitude-vault/components/Vault.tsx\n"));

/***/ })

});