/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

//На  @media (max-width: 768px) открыть контент по клику на элемент сайтбара , закрыть контент по кнопке "< назад"================================
var openContent = function openContent() {
  var sidebarItem = document.querySelectorAll('.sidebar-item');
  var contentLink = document.querySelector('.content__link');
  sidebarItem.forEach(function (item) {
    var content = document.querySelector('.content');
    var contentInner = document.querySelector('.content__inner');
    item.addEventListener('click', function () {
      content.classList.toggle('open');
      contentInner.classList.toggle('open');
    });
    contentLink.addEventListener('click', function () {
      content.classList.remove('open');
      contentInner.classList.remove('open');
    });
  });
};

openContent(); //Анимация текста при загрузке страницы================================================

var animText = document.querySelectorAll('.anim-text');
var anim = document.querySelectorAll('.anim');
var animMenu = document.querySelectorAll('.anim-menu');

window.onload = function () {
  animText.forEach(function (item) {
    return item.classList.add('visible-text');
  });
  anim.forEach(function (item) {
    return item.classList.add('visible');
  });
  animMenu.forEach(function (item) {
    return item.classList.add('visible-menu');
  });
}; //==============================================


var footer = document.querySelector('.footer__inner');
var footerRect = footer.getBoundingClientRect(); // возвращает размер элемента и его позицию относительно viewport

var sidebarItems = document.querySelector('.sidebar__items');
var i = 0;
window.addEventListener("scroll", function () {
  i++;
  i = 0;
  var a = window.scrollY + window.innerHeight; //высота страницы в момент скрола

  var b = document.body.scrollHeight - footerRect.height; //высота всей страницы  до футера

  var reachedFooter = a >= b; //когда скролл доходит до футера , в sidebar__items добавляем bottom(высота футера)

  if (reachedFooter) {
    sidebarItems.style.bottom = "".concat(a - b, "px");
  } else {
    sidebarItems.style.bottom = "0px";
  }
});
var footerHeight = footer.offsetHeight;
var mediaQuery = window.matchMedia('(max-width: 992px)');

if (mediaQuery.matches) {
  sidebarItems.style.bottom = "".concat(footerHeight, "px");
} else {}

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