"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/@internal.ts":
/*!******************************!*\
  !*** ./modules/@internal.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeOfDayMessage\": function() { return /* binding */ timeOfDayMessage; }\n/* harmony export */ });\n/* harmony import */ var _nhost_nhost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nhost/nhost-js */ \"./node_modules/@nhost/nhost-js/dist/index.esm.js\");\n\nvar nhost = new _nhost_nhost_js__WEBPACK_IMPORTED_MODULE_0__.NhostClient({\n    subdomain: \"cicmrmvxvxgjlllsqjcu\" || 0,\n    region: \"us-east-1\" || 0\n});\nvar auth = nhost.auth;\nvar grapql = nhost.graphql;\nvar timeOfDayMessage = function() {\n    var data = [\n        [\n            22,\n            \"Working late?\"\n        ],\n        [\n            18,\n            \"Good evening,\"\n        ],\n        [\n            12,\n            \"Good afternoon,\"\n        ],\n        [\n            5,\n            \"Good morning,\"\n        ],\n        [\n            0,\n            \"Whoa, early bird! Good morning,\"\n        ]\n    ], hr = new Date().getHours();\n    for(var i = 0; i < data.length; i++){\n        if (hr >= data[i][0]) {\n            return data[i][1];\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL0BpbnRlcm5hbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUU3QyxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsd0RBQVcsQ0FBQztJQUMxQkUsU0FBUyxFQUFFQyxzQkFBdUMsSUFBSSxDQUFFO0lBQ3hERyxNQUFNLEVBQUVILFdBQW9DLElBQUksQ0FBRTtDQUNyRCxDQUFDO0FBRUYsSUFBTUssSUFBSSxHQUFHUCxLQUFLLENBQUNPLElBQUk7QUFDdkIsSUFBTUMsTUFBTSxHQUFHUixLQUFLLENBQUNTLE9BQU87QUFHckIsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtJQUNsQyxJQUFJQyxJQUFJLEdBQUc7UUFDUDtBQUFDLGNBQUU7WUFBRSxlQUFlO1NBQUM7UUFDckI7QUFBQyxjQUFFO1lBQUUsZUFBZTtTQUFDO1FBQ3JCO0FBQUMsY0FBRTtZQUFFLGlCQUFpQjtTQUFDO1FBQ3ZCO0FBQUMsYUFBQztZQUFFLGVBQWU7U0FBQztRQUNwQjtBQUFDLGFBQUM7WUFBRSxpQ0FBaUM7U0FBQztLQUN6QyxFQUNHQyxFQUFFLEdBQUcsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFFBQVEsRUFBRTtJQUM5QixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0osSUFBSSxDQUFDSyxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQ2xDLElBQUlILEVBQUUsSUFBSUQsSUFBSSxDQUFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixPQUFPSixJQUFJLENBQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL0BpbnRlcm5hbC50cz8zZmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ob3N0Q2xpZW50IH0gZnJvbSAnQG5ob3N0L25ob3N0LWpzJ1xuXG5jb25zdCBuaG9zdCA9IG5ldyBOaG9zdENsaWVudCh7XG4gICAgc3ViZG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OSE9TVF9TVUJET01BSU4gfHwgJycsXG4gICAgcmVnaW9uOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OSE9TVF9SRUdJT04gfHwgJydcbn0pO1xuXG5jb25zdCBhdXRoID0gbmhvc3QuYXV0aDtcbmNvbnN0IGdyYXBxbCA9IG5ob3N0LmdyYXBocWw7XG5cblxuZXhwb3J0IGNvbnN0IHRpbWVPZkRheU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgdmFyIGRhdGEgPSBbXG4gICAgICAgIFsyMiwgJ1dvcmtpbmcgbGF0ZT8nXSxcbiAgICAgICAgWzE4LCAnR29vZCBldmVuaW5nLCddLFxuICAgICAgICBbMTIsICdHb29kIGFmdGVybm9vbiwnXSxcbiAgICAgICAgWzUsICdHb29kIG1vcm5pbmcsJ10sXG4gICAgICAgIFswLCAnV2hvYSwgZWFybHkgYmlyZCEgR29vZCBtb3JuaW5nLCddXG4gICAgXSxcbiAgICAgICAgaHIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChociA+PSBkYXRhW2ldWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVtpXVsxXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOaG9zdENsaWVudCIsIm5ob3N0Iiwic3ViZG9tYWluIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05IT1NUX1NVQkRPTUFJTiIsInJlZ2lvbiIsIk5FWFRfUFVCTElDX05IT1NUX1JFR0lPTiIsImF1dGgiLCJncmFwcWwiLCJncmFwaHFsIiwidGltZU9mRGF5TWVzc2FnZSIsImRhdGEiLCJociIsIkRhdGUiLCJnZXRIb3VycyIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/@internal.ts\n"));

/***/ })

});