/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Word = __webpack_require__(/*! ./scripts/word-class */ \"./src/scripts/word-class.js\");\r\nconst Game = __webpack_require__(/*! ./scripts/game-class */ \"./src/scripts/game-class.js\");\n\n//# sourceURL=webpack://guess-the-word-game/./src/main.js?");

/***/ }),

/***/ "./src/scripts/game-class.js":
/*!***********************************!*\
  !*** ./src/scripts/game-class.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Game{\r\n    \r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/game-class.js?");

/***/ }),

/***/ "./src/scripts/word-class.js":
/*!***********************************!*\
  !*** ./src/scripts/word-class.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Word {\r\n    #correct;\r\n    #withHidden;\r\n    #userEntered;\r\n\r\n    constructor(level) {\r\n        this.level = level;\r\n    }\r\n\r\n    get word() {\r\n        return this.#correct;\r\n    }\r\n\r\n    randomHide() {\r\n\r\n    }\r\n}\r\nmodule.exports = Word;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/word-class.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;