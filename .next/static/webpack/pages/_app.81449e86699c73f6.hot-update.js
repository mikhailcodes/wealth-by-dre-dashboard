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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigation\": function() { return /* binding */ navigation; },\n/* harmony export */   \"timeline\": function() { return /* binding */ timeline; },\n/* harmony export */   \"upcomingDates\": function() { return /* binding */ upcomingDates; }\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\nvar navigation = [\n    {\n        label: \"Dashboard\",\n        href: \"/\"\n    },\n    {\n        label: \"Journal\",\n        href: \"/about\"\n    },\n    {\n        label: \"Feed\",\n        href: \"/contact\"\n    }\n];\nvar upcomingDates = [\n    {\n        id: 1,\n        date: \"January 10th, 2022\",\n        time: \"5:00 PM\",\n        datetime: \"2022-01-10T17:00\",\n        name: \"Leslie Alexander\",\n        imageUrl: \"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\",\n        location: \"Starbucks\"\n    }\n];\nvar timeline = [\n    {\n        id: 1,\n        content: \"Applied to\",\n        target: \"Front End Developer\",\n        href: \"#\",\n        date: \"Sep 20\",\n        datetime: \"2020-09-20\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.UserIcon,\n        iconBackground: \"bg-gray-400\"\n    },\n    {\n        id: 2,\n        content: \"Advanced to phone screening by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 22\",\n        datetime: \"2020-09-22\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 3,\n        content: \"Completed phone screening with\",\n        target: \"Martha Gardner\",\n        href: \"#\",\n        date: \"Sep 28\",\n        datetime: \"2020-09-28\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon,\n        iconBackground: \"bg-green-500\"\n    },\n    {\n        id: 4,\n        content: \"Advanced to interview by\",\n        target: \"Bethany Blake\",\n        href: \"#\",\n        date: \"Sep 30\",\n        datetime: \"2020-09-30\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ThumbUpIcon,\n        iconBackground: \"bg-blue-500\"\n    },\n    {\n        id: 5,\n        content: \"Completed interview with\",\n        target: \"Katherine Snyder\",\n        href: \"#\",\n        date: \"Oct 4\",\n        datetime: \"2020-10-04\",\n        icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.CheckIcon,\n        iconBackground: \"bg-green-500\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlZWRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUU7QUFFbEUsSUFBTUcsVUFBVSxHQUFHO0lBQ3RCO1FBQ0lDLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxJQUFJLEVBQUUsR0FBRztLQUNaO0lBQ0Q7UUFDSUQsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLElBQUksRUFBRSxRQUFRO0tBQ2pCO0lBQ0Q7UUFDSUQsS0FBSyxFQUFFLE1BQU07UUFDYkMsSUFBSSxFQUFFLFVBQVU7S0FDbkI7Q0FDSjtBQUVNLElBQU1DLGFBQWEsR0FBRztJQUN6QjtRQUNJQyxFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxJQUFJLEVBQUUsU0FBUztRQUNmQyxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCQyxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCQyxRQUFRLEVBQ0osMkpBQTJKO1FBQy9KQyxRQUFRLEVBQUUsV0FBVztLQUN4QjtDQUVKO0FBR00sSUFBTUMsUUFBUSxHQUFHO0lBQ3BCO1FBQ0lQLEVBQUUsRUFBRSxDQUFDO1FBQ0xRLE9BQU8sRUFBRSxZQUFZO1FBQ3JCQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsUUFBUTtRQUNkRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFZiw0REFBUTtRQUNkZ0IsY0FBYyxFQUFFLGFBQWE7S0FDaEM7SUFDRDtRQUNJWCxFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDQyxNQUFNLEVBQUUsZUFBZTtRQUN2QlgsSUFBSSxFQUFFLEdBQUc7UUFDVEcsSUFBSSxFQUFFLFFBQVE7UUFDZEUsUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRWhCLCtEQUFXO1FBQ2pCaUIsY0FBYyxFQUFFLGFBQWE7S0FDaEM7SUFDRDtRQUNJWCxFQUFFLEVBQUUsQ0FBQztRQUNMUSxPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDQyxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCWCxJQUFJLEVBQUUsR0FBRztRQUNURyxJQUFJLEVBQUUsUUFBUTtRQUNkRSxRQUFRLEVBQUUsWUFBWTtRQUN0Qk8sSUFBSSxFQUFFakIsNkRBQVM7UUFDZmtCLGNBQWMsRUFBRSxjQUFjO0tBQ2pDO0lBQ0Q7UUFDSVgsRUFBRSxFQUFFLENBQUM7UUFDTFEsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQ0MsTUFBTSxFQUFFLGVBQWU7UUFDdkJYLElBQUksRUFBRSxHQUFHO1FBQ1RHLElBQUksRUFBRSxRQUFRO1FBQ2RFLFFBQVEsRUFBRSxZQUFZO1FBQ3RCTyxJQUFJLEVBQUVoQiwrREFBVztRQUNqQmlCLGNBQWMsRUFBRSxhQUFhO0tBQ2hDO0lBQ0Q7UUFDSVgsRUFBRSxFQUFFLENBQUM7UUFDTFEsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQ0MsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQlgsSUFBSSxFQUFFLEdBQUc7UUFDVEcsSUFBSSxFQUFFLE9BQU87UUFDYkUsUUFBUSxFQUFFLFlBQVk7UUFDdEJPLElBQUksRUFBRWpCLDZEQUFTO1FBQ2ZrQixjQUFjLEVBQUUsY0FBYztLQUNqQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmVlZHMudHM/ODQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja0ljb24sIFRodW1iVXBJY29uLCBVc2VySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxuICAgICAgICBocmVmOiAnLydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdKb3VybmFsJyxcbiAgICAgICAgaHJlZjogJy9hYm91dCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdGZWVkJyxcbiAgICAgICAgaHJlZjogJy9jb250YWN0J1xuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IHVwY29taW5nRGF0ZXMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgZGF0ZTogJ0phbnVhcnkgMTB0aCwgMjAyMicsXG4gICAgICAgIHRpbWU6ICc1OjAwIFBNJyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIyLTAxLTEwVDE3OjAwJyxcbiAgICAgICAgbmFtZTogJ0xlc2xpZSBBbGV4YW5kZXInLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODAnLFxuICAgICAgICBsb2NhdGlvbjogJ1N0YXJidWNrcycsXG4gICAgfSxcbiAgICAvLyBNb3JlIG1lZXRpbmdzLi4uXG5dXG5cblxuZXhwb3J0IGNvbnN0IHRpbWVsaW5lID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbnRlbnQ6ICdBcHBsaWVkIHRvJyxcbiAgICAgICAgdGFyZ2V0OiAnRnJvbnQgRW5kIERldmVsb3BlcicsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgZGF0ZTogJ1NlcCAyMCcsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wOS0yMCcsXG4gICAgICAgIGljb246IFVzZXJJY29uLFxuICAgICAgICBpY29uQmFja2dyb3VuZDogJ2JnLWdyYXktNDAwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGNvbnRlbnQ6ICdBZHZhbmNlZCB0byBwaG9uZSBzY3JlZW5pbmcgYnknLFxuICAgICAgICB0YXJnZXQ6ICdCZXRoYW55IEJsYWtlJyxcbiAgICAgICAgaHJlZjogJyMnLFxuICAgICAgICBkYXRlOiAnU2VwIDIyJyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTA5LTIyJyxcbiAgICAgICAgaWNvbjogVGh1bWJVcEljb24sXG4gICAgICAgIGljb25CYWNrZ3JvdW5kOiAnYmctYmx1ZS01MDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgY29udGVudDogJ0NvbXBsZXRlZCBwaG9uZSBzY3JlZW5pbmcgd2l0aCcsXG4gICAgICAgIHRhcmdldDogJ01hcnRoYSBHYXJkbmVyJyxcbiAgICAgICAgaHJlZjogJyMnLFxuICAgICAgICBkYXRlOiAnU2VwIDI4JyxcbiAgICAgICAgZGF0ZXRpbWU6ICcyMDIwLTA5LTI4JyxcbiAgICAgICAgaWNvbjogQ2hlY2tJY29uLFxuICAgICAgICBpY29uQmFja2dyb3VuZDogJ2JnLWdyZWVuLTUwMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBjb250ZW50OiAnQWR2YW5jZWQgdG8gaW50ZXJ2aWV3IGJ5JyxcbiAgICAgICAgdGFyZ2V0OiAnQmV0aGFueSBCbGFrZScsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgZGF0ZTogJ1NlcCAzMCcsXG4gICAgICAgIGRhdGV0aW1lOiAnMjAyMC0wOS0zMCcsXG4gICAgICAgIGljb246IFRodW1iVXBJY29uLFxuICAgICAgICBpY29uQmFja2dyb3VuZDogJ2JnLWJsdWUtNTAwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGNvbnRlbnQ6ICdDb21wbGV0ZWQgaW50ZXJ2aWV3IHdpdGgnLFxuICAgICAgICB0YXJnZXQ6ICdLYXRoZXJpbmUgU255ZGVyJyxcbiAgICAgICAgaHJlZjogJyMnLFxuICAgICAgICBkYXRlOiAnT2N0IDQnLFxuICAgICAgICBkYXRldGltZTogJzIwMjAtMTAtMDQnLFxuICAgICAgICBpY29uOiBDaGVja0ljb24sXG4gICAgICAgIGljb25CYWNrZ3JvdW5kOiAnYmctZ3JlZW4tNTAwJyxcbiAgICB9LFxuXVxuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsIlRodW1iVXBJY29uIiwiVXNlckljb24iLCJuYXZpZ2F0aW9uIiwibGFiZWwiLCJocmVmIiwidXBjb21pbmdEYXRlcyIsImlkIiwiZGF0ZSIsInRpbWUiLCJkYXRldGltZSIsIm5hbWUiLCJpbWFnZVVybCIsImxvY2F0aW9uIiwidGltZWxpbmUiLCJjb250ZW50IiwidGFyZ2V0IiwiaWNvbiIsImljb25CYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/feeds.ts\n"));

/***/ })

});