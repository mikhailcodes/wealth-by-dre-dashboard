/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmikhail%2FDocuments%2FGitHub%2Fwealth-by-dre-dashboard%2Fpages%2Findex.tsx&page=%2F!":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmikhail%2FDocuments%2FGitHub%2Fwealth-by-dre-dashboard%2Fpages%2Findex.tsx&page=%2F! ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1pa2hhaWwlMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZ3ZWFsdGgtYnktZHJlLWRhc2hib2FyZCUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MjAxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmikhail%2FDocuments%2FGitHub%2Fwealth-by-dre-dashboard%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./modules/@internal.ts":
/*!******************************!*\
  !*** ./modules/@internal.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeOfDayMessage\": function() { return /* binding */ timeOfDayMessage; }\n/* harmony export */ });\n/* harmony import */ var _nhost_nhost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nhost/nhost-js */ \"./node_modules/@nhost/nhost-js/dist/index.esm.js\");\n\nvar nhost = new _nhost_nhost_js__WEBPACK_IMPORTED_MODULE_0__.NhostClient({\n    subdomain: \"cicmrmvxvxgjlllsqjcu\" || 0,\n    region: \"us-east-1\" || 0\n});\nvar auth = nhost.auth;\nvar grapql = nhost.graphql;\nvar timeOfDayMessage = function() {\n    var data = [\n        [\n            18,\n            \"Good evening,\"\n        ],\n        [\n            12,\n            \"Good afternoon,\"\n        ],\n        [\n            5,\n            \"Good morning,\"\n        ],\n        [\n            0,\n            \"Whoa, early bird! Good morning,\"\n        ]\n    ], hr = new Date().getHours();\n    for(var i = 0; i < data.length; i++){\n        if (hr >= data[i][0]) {\n            return data[i][1];\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL0BpbnRlcm5hbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUU3QyxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsd0RBQVcsQ0FBQztJQUMxQkUsU0FBUyxFQUFFQyxzQkFBdUMsSUFBSSxDQUFFO0lBQ3hERyxNQUFNLEVBQUVILFdBQW9DLElBQUksQ0FBRTtDQUNyRCxDQUFDO0FBRUYsSUFBTUssSUFBSSxHQUFHUCxLQUFLLENBQUNPLElBQUk7QUFDdkIsSUFBTUMsTUFBTSxHQUFHUixLQUFLLENBQUNTLE9BQU87QUFHckIsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtJQUNsQyxJQUFJQyxJQUFJLEdBQUc7UUFDUDtBQUFDLGNBQUU7WUFBRSxlQUFlO1NBQUM7UUFDckI7QUFBQyxjQUFFO1lBQUUsaUJBQWlCO1NBQUM7UUFDdkI7QUFBQyxhQUFDO1lBQUUsZUFBZTtTQUFDO1FBQ3BCO0FBQUMsYUFBQztZQUFFLGlDQUFpQztTQUFDO0tBQ3pDLEVBQ0dDLEVBQUUsR0FBRyxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFO0lBQzlCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixJQUFJLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7UUFDbEMsSUFBSUgsRUFBRSxJQUFJRCxJQUFJLENBQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLE9BQU9KLElBQUksQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvQGludGVybmFsLnRzPzNmZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmhvc3RDbGllbnQgfSBmcm9tICdAbmhvc3Qvbmhvc3QtanMnXG5cbmNvbnN0IG5ob3N0ID0gbmV3IE5ob3N0Q2xpZW50KHtcbiAgICBzdWJkb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05IT1NUX1NVQkRPTUFJTiB8fCAnJyxcbiAgICByZWdpb246IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05IT1NUX1JFR0lPTiB8fCAnJ1xufSk7XG5cbmNvbnN0IGF1dGggPSBuaG9zdC5hdXRoO1xuY29uc3QgZ3JhcHFsID0gbmhvc3QuZ3JhcGhxbDtcblxuXG5leHBvcnQgY29uc3QgdGltZU9mRGF5TWVzc2FnZSA9ICgpID0+IHtcbiAgICB2YXIgZGF0YSA9IFtcbiAgICAgICAgWzE4LCAnR29vZCBldmVuaW5nLCddLFxuICAgICAgICBbMTIsICdHb29kIGFmdGVybm9vbiwnXSxcbiAgICAgICAgWzUsICdHb29kIG1vcm5pbmcsJ10sXG4gICAgICAgIFswLCAnV2hvYSwgZWFybHkgYmlyZCEgR29vZCBtb3JuaW5nLCddXG4gICAgXSxcbiAgICAgICAgaHIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChociA+PSBkYXRhW2ldWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXVsxXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOaG9zdENsaWVudCIsIm5ob3N0Iiwic3ViZG9tYWluIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05IT1NUX1NVQkRPTUFJTiIsInJlZ2lvbiIsIk5FWFRfUFVCTElDX05IT1NUX1JFR0lPTiIsImF1dGgiLCJncmFwcWwiLCJncmFwaHFsIiwidGltZU9mRGF5TWVzc2FnZSIsImRhdGEiLCJociIsIkRhdGUiLCJnZXRIb3VycyIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/@internal.ts\n"));

/***/ }),

/***/ "./modules/withAuth.js":
/*!*****************************!*\
  !*** ./modules/withAuth.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authProtected\": function() { return /* binding */ authProtected; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nhost_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nhost/nextjs */ \"./node_modules/@nhost/nextjs/dist/index.esm.js\");\n\n\n\n\nfunction authProtected(Comp) {\n    var _s = $RefreshSig$();\n    return _s(function AuthProtected(props) {\n        _s();\n        var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        var ref = (0,_nhost_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuthenticationStatus)(), isLoading = ref.isLoading, isAuthenticated = ref.isAuthenticated;\n        if (isLoading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/modules/withAuth.js\",\n                lineNumber: 11,\n                columnNumber: 20\n            }, this);\n        }\n        if (!isAuthenticated) {\n            router.push(\"/login\");\n            return null;\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props), void 0, false, {\n            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/modules/withAuth.js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, this);\n    }, \"LD9Of2wI3yJbC+io2LxD66At6xg=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n            _nhost_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuthenticationStatus\n        ];\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3dpdGhBdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDZ0I7QUFHaEQsU0FBU0UsYUFBYSxDQUFDQyxJQUFJLEVBQUU7O0lBQ2hDLFVBQU8sU0FBU0MsYUFBYSxDQUFDQyxLQUFLLEVBQUU7O1FBQ2pDLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtRQUMxQixJQUF1Q0MsR0FBeUIsR0FBekJBLHNFQUF1QixFQUFFLEVBQXhETSxTQUFTLEdBQXNCTixHQUF5QixDQUF4RE0sU0FBUyxFQUFFQyxlQUFlLEdBQUtQLEdBQXlCLENBQTdDTyxlQUFlO1FBRWxDLElBQUlELFNBQVMsRUFBRTtZQUNYLHFCQUFPLDhEQUFDRSxLQUFHOzBCQUFDLFlBQVU7Ozs7O29CQUFNO1NBQy9CO1FBRUQsSUFBSSxDQUFDRCxlQUFlLEVBQUU7WUFDbEJGLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyQixPQUFPLElBQUk7U0FDZDtRQUVELHFCQUFPLDhEQUFDUCxJQUFJLHFGQUFLRSxLQUFLOzs7O2dCQUFJO0tBQzdCOztZQWJrQkwsa0RBQVM7WUFDZUMsa0VBQXVCOztPQVlqRTtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvd2l0aEF1dGguanM/N2YzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUF1dGhlbnRpY2F0aW9uU3RhdHVzIH0gZnJvbSAnQG5ob3N0L25leHRqcydcblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aFByb3RlY3RlZChDb21wKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIEF1dGhQcm90ZWN0ZWQocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aGVudGljYXRpb25TdGF0dXMoKVxuXG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPENvbXAgey4uLnByb3BzfSAvPlxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBdXRoZW50aWNhdGlvblN0YXR1cyIsImF1dGhQcm90ZWN0ZWQiLCJDb21wIiwiQXV0aFByb3RlY3RlZCIsInByb3BzIiwicm91dGVyIiwiaXNMb2FkaW5nIiwiaXNBdXRoZW50aWNhdGVkIiwiZGl2IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/withAuth.js\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/withAuth */ \"./modules/withAuth.js\");\n/* harmony import */ var _modules_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/@internal */ \"./modules/@internal.ts\");\n/* harmony import */ var _nhost_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nhost/nextjs */ \"./node_modules/@nhost/nextjs/dist/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var timeOfDay = (0,_modules_internal__WEBPACK_IMPORTED_MODULE_3__.timeOfDayMessage)();\n    var user = (0,_nhost_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUserData)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-20 w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-lg overflow-hidden \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"sr-only\",\n                            id: \"profile-overview-title\",\n                            children: \"Profile Overview\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" py-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sm:flex sm:items-center sm:justify-between\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sm:flex sm:space-x-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-md font-medium italic text-gray-600\",\n                                                children: [\n                                                    \"Welcome back, \",\n                                                    user === null || user === void 0 ? void 0 : user.displayName,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-4xl font-bold text-gray-900 sm:text-5xl mt-2\",\n                                                children: timeOfDay\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 flex flex-col md:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-4/5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    class: \"w-11/12 mb-6\",\n                                    autoplay: \"\",\n                                    muted: true,\n                                    controls: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            src: \"https://flowbite.com/docs/videos/flowbite.mp4\",\n                                            type: \"video/mp4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, _this),\n                                        \"Your browser does not support the video tag.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.IPOCalendar, {}, void 0, false, {\n                                    fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.ActivityFeed, {}, void 0, false, {\n                                fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikhail/Documents/GitHub/wealth-by-dre-dashboard/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"PYekuGKgwSDUw9Zb0aAkIRVM1EE=\", false, function() {\n    return [\n        _nhost_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUserData\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_modules_withAuth__WEBPACK_IMPORTED_MODULE_2__.authProtected)(Home));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUN1QztBQUNZO0FBQ0k7QUFDYTtBQUNKO0FBRWhFLElBQU1NLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUFNQyxTQUFTLEdBQUdMLG1FQUFnQixFQUFFO0lBQ3BDLElBQU1NLElBQUksR0FBR0wsMERBQVcsRUFBRTtJQUMxQixxQkFDRTtrQkFDRSw0RUFBQ00sU0FBTztZQUFDQyxTQUFTLEVBQUMsd0RBQXdEOzs4QkFDekUsOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyw2QkFBOEI7O3NDQUMzQyw4REFBQ0UsSUFBRTs0QkFBQ0YsU0FBUyxFQUFDLFNBQVM7NEJBQUNHLEVBQUUsRUFBQyx3QkFBd0I7c0NBQUMsa0JBRXBEOzs7OztpQ0FBSztzQ0FDTCw4REFBQ0YsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLE9BQU87c0NBQ3BCLDRFQUFDQyxLQUFHO2dDQUFDRCxTQUFTLEVBQUMsNENBQTRDOzBDQUN6RCw0RUFBQ0MsS0FBRztvQ0FBQ0QsU0FBUyxFQUFDLHNCQUFzQjs4Q0FFbkMsNEVBQUNDLEtBQUc7d0NBQUNELFNBQVMsRUFBQywrQ0FBK0M7OzBEQUM1RCw4REFBQ0ksR0FBQztnREFBQ0osU0FBUyxFQUFDLDBDQUEwQzs7b0RBQUMsZ0JBQWM7b0RBQUNGLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFTyxXQUFXO29EQUFDLEdBQUM7Ozs7OztxREFBSTswREFDOUYsOERBQUNELEdBQUM7Z0RBQUNKLFNBQVMsRUFBQyxtREFBbUQ7MERBQUVILFNBQVM7Ozs7O3FEQUFLOzs7Ozs7NkNBRTVFOzs7Ozt5Q0FDRjs7Ozs7cUNBQ0Y7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0Y7OEJBSU4sOERBQUNJLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxnQ0FBZ0M7O3NDQUM3Qyw4REFBQ0MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLGlCQUFpQjs7OENBRzlCLDhEQUFDTSxPQUFLO29DQUFDQyxLQUFLLEVBQUMsY0FBYztvQ0FBQ0MsUUFBUSxFQUFDLEVBQUU7b0NBQUNDLEtBQUssRUFBRSxJQUFJO29DQUFFQyxRQUFRLEVBQUMsRUFBRTs7c0RBQzlELDhEQUFDQyxRQUFNOzRDQUFDQyxHQUFHLEVBQUMsK0NBQStDOzRDQUFDQyxJQUFJLEVBQUMsV0FBVzs7Ozs7aURBQUc7d0NBQUEsOENBRWpGOzs7Ozs7eUNBQVE7OENBRVIsOERBQUNuQiwyREFBVzs7Ozt5Q0FBZTs7Ozs7O2lDQUN2QjtzQ0FFTiw4REFBQ08sS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLGlCQUFpQjtzQ0FDOUIsNEVBQUNMLDREQUFZOzs7O3FDQUFnQjs7Ozs7aUNBQ3pCOzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRTtxQkFFVCxDQUNKO0NBQ0Y7R0E5Q0tDLElBQUk7O1FBRUtILHNEQUFXOzs7QUFGcEJHLEtBQUFBLElBQUk7QUFnRFYsK0RBQWVMLE1BQUFBLGdFQUFhLENBQUNLLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYXV0aFByb3RlY3RlZCB9IGZyb20gJy4uL21vZHVsZXMvd2l0aEF1dGgnXG5pbXBvcnQgeyB0aW1lT2ZEYXlNZXNzYWdlIH0gZnJvbSAnLi4vbW9kdWxlcy9AaW50ZXJuYWwnXG5pbXBvcnQgeyB1c2VBdXRoZW50aWNhdGlvblN0YXR1cywgdXNlVXNlckRhdGEgfSBmcm9tICdAbmhvc3QvbmV4dGpzJ1xuaW1wb3J0IHsgSVBPQ2FsZW5kYXIsIEFjdGl2aXR5RmVlZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGltZU9mRGF5ID0gdGltZU9mRGF5TWVzc2FnZSgpXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyRGF0YSgpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHktMjAgdy1mdWxsIG1kOm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnICBvdmVyZmxvdy1oaWRkZW4gXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBpZD1cInByb2ZpbGUtb3ZlcnZpZXctdGl0bGVcIj5cbiAgICAgICAgICAgIFByb2ZpbGUgT3ZlcnZpZXdcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB5LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBzbTpzcGFjZS14LTVcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlciBzbTptdC0wIHNtOnB0LTEgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtbWVkaXVtIGl0YWxpYyB0ZXh0LWdyYXktNjAwXCI+V2VsY29tZSBiYWNrLCB7dXNlcj8uZGlzcGxheU5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNXhsIG10LTJcIj57dGltZU9mRGF5fTwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTQvNSc+XG5cblxuICAgICAgICAgICAgPHZpZGVvIGNsYXNzPVwidy0xMS8xMiBtYi02XCIgYXV0b3BsYXk9XCJcIiBtdXRlZD17dHJ1ZX0gY29udHJvbHM9XCJcIj5cbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwczovL2Zsb3diaXRlLmNvbS9kb2NzL3ZpZGVvcy9mbG93Yml0ZS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICAgIDwvdmlkZW8+XG5cbiAgICAgICAgICAgIDxJUE9DYWxlbmRhcj48L0lQT0NhbGVuZGFyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTEvNSc+XG4gICAgICAgICAgICA8QWN0aXZpdHlGZWVkPjwvQWN0aXZpdHlGZWVkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhQcm90ZWN0ZWQoSG9tZSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF1dGhQcm90ZWN0ZWQiLCJ0aW1lT2ZEYXlNZXNzYWdlIiwidXNlVXNlckRhdGEiLCJJUE9DYWxlbmRhciIsIkFjdGl2aXR5RmVlZCIsIkhvbWUiLCJ0aW1lT2ZEYXkiLCJ1c2VyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiaWQiLCJwIiwiZGlzcGxheU5hbWUiLCJ2aWRlbyIsImNsYXNzIiwiYXV0b3BsYXkiLCJtdXRlZCIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmikhail%2FDocuments%2FGitHub%2Fwealth-by-dre-dashboard%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);