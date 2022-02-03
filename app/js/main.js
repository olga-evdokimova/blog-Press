/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\my Documents\\projects\\blog PG\\src\\js\\_components.js: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mconst\u001b[39m winHeight \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m     \u001b[36mconst\u001b[39m footer \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.footer'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m     \u001b[36mconst\u001b[39m header \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.header'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m     \u001b[36mconst\u001b[39m sidebarItems \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.sidebar__items'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m     \u001b[36mconst\u001b[39m headerHeight \u001b[33m=\u001b[39m header\u001b[33m.\u001b[39moffsetHeight\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:506:17)\n    at Parser.raiseWithData (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:499:17)\n    at Parser.raise (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:460:17)\n    at Parser.unexpected (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:3699:16)\n    at Parser.parseExprAtom (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:12461:22)\n    at Parser.parseExprSubscripts (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:11999:23)\n    at Parser.parseUpdate (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:11979:21)\n    at Parser.parseMaybeUnary (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:11954:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:11751:61)\n    at Parser.parseExprOps (C:\\my Documents\\projects\\blog PG\\node_modules\\@babel\\parser\\lib\\index.js:11758:23)");

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
// Реализация бургер-меню


/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// import './vendor/focus-visible.js';

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

(function () {
  var _document, _document2;

  var btn = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-btn]');
  var list = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-list]');
  btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
    btn === null || btn === void 0 ? void 0 : btn.classList.toggle('_active-btn');
    list === null || list === void 0 ? void 0 : list.classList.toggle('_active-list');
  });
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map