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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigation\": function() { return /* binding */ navigation; },\n/* harmony export */   \"timeline\": function() { return /* binding */ timeline; },\n/* harmony export */   \"upcomingDates\": function() { return /* binding */ upcomingDates; }\n/* harmony export */ });\nvar navigation = [\n    {\n        label: \"Dashboard\",\n        href: \"/\"\n    },\n    {\n        label: \"Journal\",\n        href: \"/about\"\n    },\n    {\n        label: \"Feed\",\n        href: \"/contact\"\n    }\n];\nvar upcomingDates = [\n    {\n        id: 1,\n        date: \"January 10th, 2022\",\n        time: \"5:00 PM\",\n        datetime: \"2022-01-10T17:00\",\n        name: \"Leslie Alexander\",\n        imageUrl: \"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\",\n        location: \"Starbucks\"\n    }\n];\nvar timeline = [\n    {\n        id: 1,\n        content: \"Applied to\",\n        target: \"Front End Developer\",\n        href: \"#\",\n        date: \"Sep 20\",\n        datetime: \"2020-09-20\",\n        icon: UserIcon,\n        iconBackground: \"bg-gray-400\"\n    },\n    {\n        id: 2,\n        content: \"Advanced to phone screening by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 22\",\n        datetime: \"2020-09-22\",\n        icon: ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 3,\n        content: \"Completed phone screening with\",\n        target: \"Martha Gardner\",\n        href: \"#\",\n        date: \"Sep 28\",\n        datetime: \"2020-09-28\",\n        icon: CheckIcon,\n        iconBackground: \"bg-green-500\"\n    },\n    {\n        id: 4,\n        content: \"Advanced to interview by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 30\",\n        datetime: \"2020-09-30\",\n        icon: ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 5,\n        content: \"Completed interview with\",\n        target: \"Katherine Snyder\",\n        href: \"#\",\n        date: \"Oct 4\",\n        datetime: \"2020-10-04\",\n        icon: CheckIcon,\n        iconBackground: \"bg-green-500\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlZWRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLElBQU1BLFVBQVUsR0FBRztJQUN0QjtRQUNJQyxLQUFLLEVBQUUsV0FBVztRQUNsQkMsSUFBSSxFQUFFLEdBQUc7S0FDWjtJQUNEO1FBQ0lELEtBQUssRUFBRSxTQUFTO1FBQ2hCQyxJQUFJLEVBQUUsUUFBUTtLQUNqQjtJQUNEO1FBQ0lELEtBQUssRUFBRSxNQUFNO1FBQ2JDLElBQUksRUFBRSxVQUFVO0tBQ25CO0NBQ0o7QUFFTSxJQUFNQyxhQUFhLEdBQUc7SUFDekI7UUFDSUMsRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQkMsSUFBSSxFQUFFLFNBQVM7UUFDZkMsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QkMsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QkMsUUFBUSxFQUNKLDJKQUEySjtRQUMvSkMsUUFBUSxFQUFFLFdBQVc7S0FDeEI7Q0FFSjtBQUdNLElBQU1DLFFBQVEsR0FBRztJQUNwQjtRQUNJUCxFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsWUFBWTtRQUNyQkMsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QlgsSUFBSSxFQUFFLEdBQUc7UUFDVEcsSUFBSSxFQUFFLFFBQVE7UUFDZEUsUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRUMsUUFBUTtRQUNkQyxjQUFjLEVBQUUsYUFBYTtLQUNoQztJQUNEO1FBQ0laLEVBQUUsRUFBRSxDQUFDO1FBQ0xRLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekNDLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsUUFBUTtRQUNkRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFRyxXQUFXO1FBQ2pCRCxjQUFjLEVBQUUsYUFBYTtLQUNoQztJQUNEO1FBQ0laLEVBQUUsRUFBRSxDQUFDO1FBQ0xRLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekNDLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEJYLElBQUksRUFBRSxHQUFHO1FBQ1RHLElBQUksRUFBRSxRQUFRO1FBQ2RFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCTyxJQUFJLEVBQUVJLFNBQVM7UUFDZkYsY0FBYyxFQUFFLGNBQWM7S0FDakM7SUFDRDtRQUNJWixFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxNQUFNLEVBQUUsZUFBZTtRQUN2QlgsSUFBSSxFQUFFLEdBQUc7UUFDVEcsSUFBSSxFQUFFLFFBQVE7UUFDZEUsUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRUcsV0FBVztRQUNqQkQsY0FBYyxFQUFFLGFBQWE7S0FDaEM7SUFDRDtRQUNJWixFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DQyxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsT0FBTztRQUNiRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFSSxTQUFTO1FBQ2ZGLGNBQWMsRUFBRSxjQUFjO0tBQ2pDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkcy50cz84NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgaHJlZjogJy8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSm91cm5hbCcsXG4gICAgICAgIGhyZWY6ICcvYWJvdXQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRmVlZCcsXG4gICAgICAgIGhyZWY6ICcvY29udGFjdCdcbiAgICB9XG5dXG5cbmV4cG9ydCBjb25zdCB1cGNvbWluZ0RhdGVzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGRhdGU6ICdKYW51YXJ5IDEwdGgsIDIwMjInLFxuICAgICAgICB0aW1lOiAnNTowMCBQTScsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMi0wMS0xMFQxNzowMCcsXG4gICAgICAgIG5hbWU6ICdMZXNsaWUgQWxleGFuZGVyJyxcbiAgICAgICAgaW1hZ2VVcmw6XG4gICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTQ3OTAxMDgzNzctYmU5YzI5YjI5MzMwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWZhY2VhcmVhJmZhY2VwYWQ9MiZ3PTI1NiZoPTI1NiZxPTgwJyxcbiAgICAgICAgbG9jYXRpb246ICdTdGFyYnVja3MnLFxuICAgIH0sXG4gICAgLy8gTW9yZSBtZWV0aW5ncy4uLlxuXVxuXG5cbmV4cG9ydCBjb25zdCB0aW1lbGluZSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBjb250ZW50OiAnQXBwbGllZCB0bycsXG4gICAgICAgIHRhcmdldDogJ0Zyb250IEVuZCBEZXZlbG9wZXInLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGRhdGU6ICdTZXAgMjAnLFxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDktMjAnLFxuICAgICAgICBpY29uOiBVc2VySWNvbixcbiAgICAgICAgaWNvbkJhY2tncm91bmQ6ICdiZy1ncmF5LTQwMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBjb250ZW50OiAnQWR2YW5jZWQgdG8gcGhvbmUgc2NyZWVuaW5nIGJ5JyxcbiAgICAgICAgdGFyZ2V0OiAnQmV0aGFueSBCbGFrZScsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgZGF0ZTogJ1NlcCAyMicsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wOS0yMicsXG4gICAgICAgIGljb246IFRodW1iVXBJY29uLFxuICAgICAgICBpY29uQmFja2dyb3VuZDogJ2JnLWJsdWUtNTAwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGNvbnRlbnQ6ICdDb21wbGV0ZWQgcGhvbmUgc2NyZWVuaW5nIHdpdGgnLFxuICAgICAgICB0YXJnZXQ6ICdNYXJ0aGEgR2FyZG5lcicsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgZGF0ZTogJ1NlcCAyOCcsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wOS0yOCcsXG4gICAgICAgIGljb246IENoZWNrSWNvbixcbiAgICAgICAgaWNvbkJhY2tncm91bmQ6ICdiZy1ncmVlbi01MDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgY29udGVudDogJ0FkdmFuY2VkIHRvIGludGVydmlldyBieScsXG4gICAgICAgIHRhcmdldDogJ0JldGhhbnkgQmxha2UnLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGRhdGU6ICdTZXAgMzAnLFxuICAgICAgICBkYXRldGltZTogJzIwMjAtMDktMzAnLFxuICAgICAgICBpY29uOiBUaHVtYlVwSWNvbixcbiAgICAgICAgaWNvbkJhY2tncm91bmQ6ICdiZy1ibHVlLTUwMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBjb250ZW50OiAnQ29tcGxldGVkIGludGVydmlldyB3aXRoJyxcbiAgICAgICAgdGFyZ2V0OiAnS2F0aGVyaW5lIFNueWRlcicsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgZGF0ZTogJ09jdCA0JyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTEwLTA0JyxcbiAgICAgICAgaWNvbjogQ2hlY2tJY29uLFxuICAgICAgICBpY29uQmFja2dyb3VuZDogJ2JnLWdyZWVuLTUwMCcsXG4gICAgfSxcbl0iXSwibmFtZXMiOlsibmF2aWdhdGlvbiIsImxhYmVsIiwiaHJlZiIsInVwY29taW5nRGF0ZXMiLCJpZCIsImRhdGUiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJuYW1lIiwiaW1hZ2VVcmwiLCJsb2NhdGlvbiIsInRpbWVsaW5lIiwiY29udGVudCIsInRhcmdldCIsImljb24iLCJVc2VySWNvbiIsImljb25CYWNrZ3JvdW5kIiwiVGh1bWJVcEljb24iLCJDaGVja0ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/feeds.ts\n"));

/***/ })

});