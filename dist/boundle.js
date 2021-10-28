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

eval("\r\nconst WordsFactory = __webpack_require__(/*! ./scripts/words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Word = __webpack_require__(/*! ./scripts/word-class */ \"./src/scripts/word-class.js\");\r\nconst Game = __webpack_require__(/*! ./scripts/game-class */ \"./src/scripts/game-class.js\");\n\n//# sourceURL=webpack://guess-the-word-game/./src/main.js?");

/***/ }),

/***/ "./src/scripts/game-class.js":
/*!***********************************!*\
  !*** ./src/scripts/game-class.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const WordsFactory = __webpack_require__(/*! ./words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Word = __webpack_require__(/*! ./word-class */ \"./src/scripts/word-class.js\");\r\n\r\nclass Game{\r\n    #words =[];\r\n    #totalScore;\r\n    #currentStepper;\r\n    #numberWords;\r\n    #score;\r\n    constructor(gameLevel) {\r\n        this.level = gameLevel;\r\n        if(this.level ===\"Easy\"){\r\n            this.#numberWords = 5;\r\n            this.#score = 2;\r\n        }\r\n        else if(this.level ===\"Medium\"){\r\n            this.#numberWords = 7;\r\n            this.#score = 5;\r\n        }\r\n        else if(this.level ===\"Hard\"){\r\n            this.#numberWords = 9;\r\n            this.#score = 10;\r\n        }\r\n        else if(this.level ===\"Devil\"){\r\n            this.#numberWords = 11;\r\n            this.#score = 20;\r\n        }\r\n    }\r\n    generateWords(){\r\n        const WordsFactory = new WordsFactory(this.#numberWords);\r\n        do {\r\n            let obj = WordsFactory.generateWord;\r\n            if (!this.#words.includes(obj.correct)) {\r\n                this.#words.push(obj);\r\n            }\r\n        } while (this.#words.length < this.#numberWords);\r\n        return this.#words;\r\n    }\r\n}\r\n\r\ndebugger;\r\nlet myGame = new Game(\"Easy\");\r\nconsole.log(myGame.generateWords());\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/game-class.js?");

/***/ }),

/***/ "./src/scripts/word-class.js":
/*!***********************************!*\
  !*** ./src/scripts/word-class.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Word {\r\n    #word ={};\r\n    #numberHiddenCharacters;\r\n    #score;\r\n    filterArray;\r\n    constructor(words) {\r\n       // this.#score = score;\r\n        this.filterArray =words;\r\n        \r\n        this.#word.correct= this.filterArray[Math.floor(Math.random()*this.filterArray.length)] ;\r\n        this.#word.hiddenCharacters = this.randomHide(this.#word.correct);\r\n    }\r\n\r\n    get generateWord(){\r\n        return this.#word;\r\n    }\r\n\r\n    randomHide(word) {\r\n        let text = [...word];\r\n        this.#numberHiddenCharacters = Math.floor(text.length * 0.4) ;\r\n        for (let i= 0; i<this.#numberHiddenCharacters;i++){\r\n            this.#word.hiddenCharacters.push(text[Math.floor(Math.random()*text.length)]);\r\n        }\r\n        return this.#word.hiddenCharacters;\r\n    }\r\n/*\r\n    get score(){\r\n        return this.#score * this.#numberHiddenCharacters;\r\n    }\r\n*/\r\n    userTry(characters){\r\n        let inputUser= [...characters];\r\n        let withHidden = this.#word.hiddenCharacters;\r\n        if (inputUser.length === withHidden.length && inputUser.every((value, i) => value === withHidden[i])){\r\n            return  10;\r\n        }\r\n        else\r\n            return 0;\r\n    }\r\n}\r\n\r\nmodule.exports = Word;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/word-class.js?");

/***/ }),

/***/ "./src/scripts/words-factory-class.js":
/*!********************************************!*\
  !*** ./src/scripts/words-factory-class.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Word = __webpack_require__(/*! ./word-class */ \"./src/scripts/word-class.js\");\r\nconst words=['vein', 'velvet', 'artist', 'nerve', 'dare',\r\n    'cultivate', 'dynamic', 'contact', 'audience', 'thread', 'voucher', 'pan', 'faithful', 'confine', 'solution', 'tired',\r\n    'patience', 'jet', 'pavement', 'jealous', 'indulge', 'reach', 'heaven', 'gallery', 'comedy', 'wealth', 'kill', 'finance',\r\n    'sock', 'exaggerate', 'coast', 'replacement', 'lid', 'bedroom', 'debut', 'bottle', 'discovery', 'inject', 'curriculum',\r\n    'merit', 'distortion', 'frequency', 'grant', 'lazy', 'adoption', 'assertive', 'program', 'invisible', 'wing', 'hall'];\r\nclass WordFactory {\r\n    #filterWords;\r\n    #numberWords;\r\n    constructor(numberWords) {\r\n       this.#numberWords= numberWords;\r\n       this.#filterWords = words.filter(word => word.length <= this.#numberWords);\r\n    }\r\n\r\n    get generateWord(){\r\n        return new Word(this.#filterWords);\r\n    }\r\n}\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/words-factory-class.js?");

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