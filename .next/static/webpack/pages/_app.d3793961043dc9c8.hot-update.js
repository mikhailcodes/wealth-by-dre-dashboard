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

/***/ "./components/feeds.ts":
/*!*****************************!*\
  !*** ./components/feeds.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigation\": function() { return /* binding */ navigation; },\n/* harmony export */   \"timeline\": function() { return /* binding */ timeline; },\n/* harmony export */   \"upcomingDates\": function() { return /* binding */ upcomingDates; }\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\nvar navigation = [\n    {\n        label: \"Dashboard\",\n        href: \"/\"\n    },\n    {\n        label: \"Journal\",\n        href: \"/about\"\n    },\n    {\n        label: \"Feed\",\n        href: \"/contact\"\n    }\n];\nvar upcomingDates = [\n    {\n        id: 1,\n        date: \"January 10th, 2022\",\n        time: \"5:00 PM\",\n        datetime: \"2022-01-10T17:00\",\n        name: \"Legal Business Name (Placeholder)\",\n        imageUrl: \"https://play.google.com/store/apps/details?id=com.scotiabank.cca.mobile&hl=en_IN&gl=DO\",\n        location: \"Kingston, Jamaica\"\n    }\n];\nvar timeline = [\n    {\n        id: 1,\n        content: \"Applied to\",\n        target: \"Front End Developer\",\n        href: \"#\",\n        date: \"Sep 20\",\n        datetime: \"2020-09-20\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.UserIcon,\n        iconBackground: \"bg-gray-400\"\n    },\n    {\n        id: 2,\n        content: \"Advanced to phone screening by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 22\",\n        datetime: \"2020-09-22\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 3,\n        content: \"Completed phone screening with\",\n        target: \"Martha Gardner\",\n        href: \"#\",\n        date: \"Sep 28\",\n        datetime: \"2020-09-28\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon,\n        iconBackground: \"bg-green-500\"\n    },\n    {\n        id: 4,\n        content: \"Advanced to interview by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 30\",\n        datetime: \"2020-09-30\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 5,\n        content: \"Completed interview with\",\n        target: \"Katherine Snyder\",\n        href: \"#\",\n        date: \"Oct 4\",\n        datetime: \"2020-10-04\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon,\n        iconBackground: \"bg-green-500\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlZWRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUU7QUFFbEUsSUFBTUcsVUFBVSxHQUFHO0lBQ3RCO1FBQ0lDLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxJQUFJLEVBQUUsR0FBRztLQUNaO0lBQ0Q7UUFDSUQsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLElBQUksRUFBRSxRQUFRO0tBQ2pCO0lBQ0Q7UUFDSUQsS0FBSyxFQUFFLE1BQU07UUFDYkMsSUFBSSxFQUFFLFVBQVU7S0FDbkI7Q0FDSjtBQUVNLElBQU1DLGFBQWEsR0FBRztJQUN6QjtRQUNJQyxFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxJQUFJLEVBQUUsU0FBUztRQUNmQyxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCQyxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDQyxRQUFRLEVBQ0osd0ZBQXdGO1FBQzVGQyxRQUFRLEVBQUUsbUJBQW1CO0tBQ2hDO0NBRUo7QUFHTSxJQUFNQyxRQUFRLEdBQUc7SUFDcEI7UUFDSVAsRUFBRSxFQUFFLENBQUM7UUFDTFEsT0FBTyxFQUFFLFlBQVk7UUFDckJDLE1BQU0sRUFBRSxxQkFBcUI7UUFDN0JYLElBQUksRUFBRSxHQUFHO1FBQ1RHLElBQUksRUFBRSxRQUFRO1FBQ2RFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCTyxJQUFJLEVBQUVmLDREQUFRO1FBQ2RnQixjQUFjLEVBQUUsYUFBYTtLQUNoQztJQUNEO1FBQ0lYLEVBQUUsRUFBRSxDQUFDO1FBQ0xRLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekNDLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsUUFBUTtRQUNkRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFaEIsK0RBQVc7UUFDakJpQixjQUFjLEVBQUUsYUFBYTtLQUNoQztJQUNEO1FBQ0lYLEVBQUUsRUFBRSxDQUFDO1FBQ0xRLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekNDLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEJYLElBQUksRUFBRSxHQUFHO1FBQ1RHLElBQUksRUFBRSxRQUFRO1FBQ2RFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCTyxJQUFJLEVBQUVqQiw2REFBUztRQUNma0IsY0FBYyxFQUFFLGNBQWM7S0FDakM7SUFDRDtRQUNJWCxFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxNQUFNLEVBQUUsZUFBZTtRQUN2QlgsSUFBSSxFQUFFLEdBQUc7UUFDVEcsSUFBSSxFQUFFLFFBQVE7UUFDZEUsUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRWhCLCtEQUFXO1FBQ2pCaUIsY0FBYyxFQUFFLGFBQWE7S0FDaEM7SUFDRDtRQUNJWCxFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsT0FBTztRQUNiRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFakIsNkRBQVM7UUFDZmtCLGNBQWMsRUFBRSxjQUFjO0tBQ2pDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkcy50cz84NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrSWNvbiwgVGh1bWJVcEljb24sIFVzZXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXG4gICAgICAgIGhyZWY6ICcvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0pvdXJuYWwnLFxuICAgICAgICBocmVmOiAnL2Fib3V0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZlZWQnLFxuICAgICAgICBocmVmOiAnL2NvbnRhY3QnXG4gICAgfVxuXVxuXG5leHBvcnQgY29uc3QgdXBjb21pbmdEYXRlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBkYXRlOiAnSmFudWFyeSAxMHRoLCAyMDIyJyxcbiAgICAgICAgdGltZTogJzU6MDAgUE0nLFxuICAgICAgICBkYXRldGltZTogJzIwMjItMDEtMTBUMTc6MDAnLFxuICAgICAgICBuYW1lOiAnTGVnYWwgQnVzaW5lc3MgTmFtZSAoUGxhY2Vob2xkZXIpJyxcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgICAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5zY290aWFiYW5rLmNjYS5tb2JpbGUmaGw9ZW5fSU4mZ2w9RE8nLFxuICAgICAgICBsb2NhdGlvbjogJ0tpbmdzdG9uLCBKYW1haWNhJyxcbiAgICB9LFxuICAgIC8vIE1vcmUgbWVldGluZ3MuLi5cbl1cblxuXG5leHBvcnQgY29uc3QgdGltZWxpbmUgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgY29udGVudDogJ0FwcGxpZWQgdG8nLFxuICAgICAgICB0YXJnZXQ6ICdGcm9udCBFbmQgRGV2ZWxvcGVyJyxcbiAgICAgICAgaHJlZjogJyMnLFxuICAgICAgICBkYXRlOiAnU2VwIDIwJyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTA5LTIwJyxcbiAgICAgICAgaWNvbjogVXNlckljb24sXG4gICAgICAgIGljb25CYWNrZ3JvdW5kOiAnYmctZ3JheS00MDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgY29udGVudDogJ0FkdmFuY2VkIHRvIHBob25lIHNjcmVlbmluZyBieScsXG4gICAgICAgIHRhcmdldDogJ0JldGhhbnkgQmxha2UnLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGRhdGU6ICdTZXAgMjInLFxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDktMjInLFxuICAgICAgICBpY29uOiBUaHVtYlVwSWNvbixcbiAgICAgICAgaWNvbkJhY2tncm91bmQ6ICdiZy1ibHVlLTUwMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBjb250ZW50OiAnQ29tcGxldGVkIHBob25lIHNjcmVlbmluZyB3aXRoJyxcbiAgICAgICAgdGFyZ2V0OiAnTWFydGhhIEdhcmRuZXInLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGRhdGU6ICdTZXAgMjgnLFxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDktMjgnLFxuICAgICAgICBpY29uOiBDaGVja0ljb24sXG4gICAgICAgIGljb25CYWNrZ3JvdW5kOiAnYmctZ3JlZW4tNTAwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGNvbnRlbnQ6ICdBZHZhbmNlZCB0byBpbnRlcnZpZXcgYnknLFxuICAgICAgICB0YXJnZXQ6ICdCZXRoYW55IEJsYWtlJyxcbiAgICAgICAgaHJlZjogJyMnLFxuICAgICAgICBkYXRlOiAnU2VwIDMwJyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTA5LTMwJyxcbiAgICAgICAgaWNvbjogVGh1bWJVcEljb24sXG4gICAgICAgIGljb25CYWNrZ3JvdW5kOiAnYmctYmx1ZS01MDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgY29udGVudDogJ0NvbXBsZXRlZCBpbnRlcnZpZXcgd2l0aCcsXG4gICAgICAgIHRhcmdldDogJ0thdGhlcmluZSBTbnlkZXInLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGRhdGU6ICdPY3QgNCcsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0xMC0wNCcsXG4gICAgICAgIGljb246IENoZWNrSWNvbixcbiAgICAgICAgaWNvbkJhY2tncm91bmQ6ICdiZy1ncmVlbi01MDAnLFxuICAgIH0sXG5dXG4iXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwiVGh1bWJVcEljb24iLCJVc2VySWNvbiIsIm5hdmlnYXRpb24iLCJsYWJlbCIsImhyZWYiLCJ1cGNvbWluZ0RhdGVzIiwiaWQiLCJkYXRlIiwidGltZSIsImRhdGV0aW1lIiwibmFtZSIsImltYWdlVXJsIiwibG9jYXRpb24iLCJ0aW1lbGluZSIsImNvbnRlbnQiLCJ0YXJnZXQiLCJpY29uIiwiaWNvbkJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/feeds.ts\n"));

/***/ })

});