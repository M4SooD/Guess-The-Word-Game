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

/***/ "./src/components/buttons/button.js":
/*!******************************************!*\
  !*** ./src/components/buttons/button.js ***!
  \******************************************/
/***/ ((module) => {

eval("class Button {\r\n    #button;\r\n    constructor(id, className, innerText) {\r\n        this.#button = document.createElement('button');\r\n        this.#button.classList.add(className);\r\n        this.#button.innerText = innerText;\r\n        this.#button.id = id;\r\n        this.#button.addEventListener(\"click\", this.handleClick.bind(this));\r\n    }\r\n\r\n    get id() {\r\n        return this.#button.id;\r\n    }\r\n\r\n    handleClick() {\r\n        console.log(`This is the text in the clicked button: ${this.#button.innerText}`)\r\n    }\r\n}\r\nlet btn = new Button('test', 't1');\r\nbtn.handleClick();\r\nmodule.exports = Button;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/buttons/button.js?");

/***/ }),

/***/ "./src/components/div/div.js":
/*!***********************************!*\
  !*** ./src/components/div/div.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Div {\r\n    #div;\r\n    constructor(id, className) {\r\n        this.#div = document.createElement('div');\r\n        this.#div.classList.add(className);\r\n        this.#div.id = id;\r\n    }\r\n\r\n    get id() {\r\n        return this.#div.id;\r\n    }\r\n\r\n    get build(){        \r\n        return this.#div;\r\n    }\r\n}\r\n\r\nmodule.exports = Div;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/div/div.js?");

/***/ }),

/***/ "./src/components/dropdown/comboBox.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/comboBox.js ***!
  \*********************************************/
/***/ ((module) => {

eval("class ComboBox {\r\n    #select;\r\n    constructor(id,className,options){\r\n        this.#select = document.createElement('select');\r\n        this.#select.id =  id;\r\n        this.#select.classList.add(className);\r\n        createOptions(options);\r\n    }\r\n    createOptions(arr){\r\n        var ops = new Array(\"first\",\"second\",\"third\",\"fourth\",\"fifth\");\r\n        for (var i=0;i<ops.length;i++) {\r\n            var o = document.createElement(\"option\");\r\n            var t = document.createTextNode(ops[i]);\r\n            o.setAttribute(\"value\",ops[i]);\r\n            o.appendChild(t);\r\n            this.#select.appendChild(o);\r\n            }\r\n        root.appendChild(this.#select);\r\n    }\r\n\r\n    get build(){        \r\n        return this.#select;\r\n    }\r\n}\r\n\r\nmodule.exports = ComboBox;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/dropdown/comboBox.js?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/***/ ((module) => {

eval("class Heading{\r\n    #heading;\r\n    constructor(type,innerText){\r\n        this.#heading = document.createElement(type);\r\n        this.#heading.innerText = innerText;\r\n    }\r\n    get build(){        \r\n        return this.#heading;\r\n    }\r\n}\r\n\r\nmodule.exports = Heading;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/inputs/input.js":
/*!****************************************!*\
  !*** ./src/components/inputs/input.js ***!
  \****************************************/
/***/ ((module) => {

eval("class Input{\r\n    #input;\r\n    constructor(id,className,type,value){\r\n        this.#input = document.createElement(\"input\");\r\n        this.#input.type = type;\r\n        this.#input.className = className; \r\n        this.#input.id = id;\r\n        this.#input.value = value;\r\n    }\r\n\r\n    get id() {\r\n        return this.#input.id;\r\n    }\r\n\r\n    get build(){        \r\n        return this.#input;\r\n    }\r\n}\r\n\r\nmodule.exports = Input;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/inputs/input.js?");

/***/ }),

/***/ "./src/components/pages/stepOne.js":
/*!*****************************************!*\
  !*** ./src/components/pages/stepOne.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ../buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Input = __webpack_require__(/*! ../inputs/input */ \"./src/components/inputs/input.js\");\r\nconst Div = __webpack_require__(/*! ../div/div */ \"./src/components/div/div.js\");\r\nconst ComboBox = __webpack_require__(/*! ../dropdown/comboBox */ \"./src/components/dropdown/comboBox.js\");\r\nconst Heading = __webpack_require__(/*! ../heading/heading */ \"./src/components/heading/heading.js\");\r\nconst container = document.getElementById('container');\r\n\r\n\r\ncreateStepOne = () => {\r\n    debugger;\r\n    const stepOne = new Div('stepOne', 'pages C__step-one').build;\r\n    container.appendChild(stepOne);\r\n\r\n    const h1 = new Heading('h1', 'GUESS THE WORD!').build;\r\n    stepOne.appendChild(h1);\r\n\r\n    const name = new Input('name','input name','text','Your Name is...').build;\r\n    stepOne.appendChild(name);\r\n}\r\ncreateStepOne();\r\nmodule.exports = createStepOne;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/pages/stepOne.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ./components/buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Div = __webpack_require__(/*! ./components/div/div */ \"./src/components/div/div.js\");\r\nconst Input = __webpack_require__(/*! ./components/inputs/input */ \"./src/components/inputs/input.js\");\r\nconst ComboBox = __webpack_require__(/*! ./components/dropdown/comboBox */ \"./src/components/dropdown/comboBox.js\");\r\nconst Heading = __webpack_require__(/*! ./components/heading/heading */ \"./src/components/heading/heading.js\");\r\nconst Page = __webpack_require__(/*! ./components/pages/stepOne */ \"./src/components/pages/stepOne.js\");\r\nconst WordsFactory = __webpack_require__(/*! ./scripts/words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Word = __webpack_require__(/*! ./scripts/word-class */ \"./src/scripts/word-class.js\");\r\nconst Game = __webpack_require__(/*! ./scripts/game-class */ \"./src/scripts/game-class.js\");\r\n\n\n//# sourceURL=webpack://guess-the-word-game/./src/main.js?");

/***/ }),

/***/ "./src/scripts/game-class.js":
/*!***********************************!*\
  !*** ./src/scripts/game-class.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const WordsFactory = __webpack_require__(/*! ./words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Word = __webpack_require__(/*! ./word-class */ \"./src/scripts/word-class.js\");\r\n\r\nclass Game{\r\n    #words =[];\r\n    #totalScore;\r\n    #currentStepper;\r\n    #numberWords;\r\n    #score;\r\n    #timer;\r\n    constructor(gameLevel) {\r\n        this.level = gameLevel;\r\n        if(this.level ===\"Easy\"){\r\n            this.#numberWords = 5;\r\n            this.#score = 2;\r\n            this.#timer=30;\r\n        }\r\n        else if(this.level ===\"Medium\"){\r\n            this.#numberWords = 7;\r\n            this.#score = 5;\r\n            this.#timer=40;\r\n        }\r\n        else if(this.level ===\"Hard\"){\r\n            this.#numberWords = 9;\r\n            this.#score = 10;\r\n            this.#timer=70;\r\n        }\r\n        else if(this.level ===\"Devil\"){\r\n            this.#numberWords = 11;\r\n            this.#score = 20;\r\n            this.#timer=120;\r\n        }\r\n    }\r\n\r\n    generateWords(){\r\n        const wordsFactory = new WordsFactory(this.#numberWords);\r\n        do {\r\n            let obj = wordsFactory.generateWord;\r\n            if (!this.#words.includes(obj.correct)) {\r\n                this.#words.push(obj);\r\n            }\r\n        } while (this.#words.length < this.#numberWords);\r\n        return this.#words;\r\n    }\r\n\r\n\r\n/*\r\n    CheckInputCharacters(){\r\n        for(let i =0;i<this.#words.numberHiddenCharacters;i++){\r\n\r\n        }\r\n    }*/\r\n}\r\n\r\nlet myGame = new Game(\"Easy\");\r\nconsole.log(myGame.generateWords());\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/game-class.js?");

/***/ }),

/***/ "./src/scripts/word-class.js":
/*!***********************************!*\
  !*** ./src/scripts/word-class.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Word {\r\n    #word ={};\r\n    #numberHiddenCharacters;\r\n    #score;\r\n    constructor(words) {\r\n       // this.#score = score;\r\n        this.#word.correct= words[Math.floor(Math.random()*words.length)] ;\r\n        this.#word.hiddenCharacters = this.randomHide(this.#word.correct);\r\n    }\r\n\r\n    get generateWord(){\r\n        return this.#word;\r\n    }\r\n\r\n    randomHide(word) {\r\n        let text = [...word];\r\n        this.#word.hiddenCharacters=[];\r\n        this.#numberHiddenCharacters = Math.floor(text.length * 0.4) ;\r\n        for (let i= 0; i<this.#numberHiddenCharacters;i++){\r\n            this.#word.hiddenCharacters.push(text[Math.floor(Math.random()*text.length)]);\r\n        }\r\n        return this.#word.hiddenCharacters;\r\n    }\r\n/*\r\n    get score(){\r\n        return this.#score * this.#numberHiddenCharacters;\r\n    }\r\n*/\r\n    userTry(characters){\r\n        let inputUser= [...characters];\r\n        let withHidden = this.#word.hiddenCharacters;\r\n        if (inputUser.length === withHidden.length && inputUser.every((value, i) => value === withHidden[i])){\r\n            return  10;\r\n        }\r\n        else\r\n            return 0;\r\n    }\r\n}\r\n\r\nmodule.exports = Word;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/word-class.js?");

/***/ }),

/***/ "./src/scripts/words-factory-class.js":
/*!********************************************!*\
  !*** ./src/scripts/words-factory-class.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Word = __webpack_require__(/*! ./word-class */ \"./src/scripts/word-class.js\");\r\nconst words = ['vein', 'velvet', 'artist', 'nerve', 'dare',\r\n    'cultivate', 'dynamic', 'contact', 'audience', 'thread', 'voucher', 'pan', 'faithful', 'confine', 'solution', 'tired',\r\n    'patience', 'jet', 'pavement', 'jealous', 'indulge', 'reach', 'heaven', 'gallery', 'comedy', 'wealth', 'kill', 'finance',\r\n    'sock', 'exaggerate', 'coast', 'replacement', 'lid', 'bedroom', 'debut', 'bottle', 'discovery', 'inject', 'curriculum',\r\n    'merit', 'distortion', 'frequency', 'grant', 'lazy', 'adoption', 'assertive', 'program', 'invisible', 'wing', 'hall'];\r\n    \r\nclass WordFactory {\r\n    #filterWords;\r\n    #numberWords;\r\n    constructor(numberWords) {\r\n        this.#numberWords = numberWords;\r\n        this.#filterWords = words.filter(value => value.length <= this.#numberWords);\r\n    }\r\n\r\n    get generateWord() {\r\n        return new Word(this.#filterWords);\r\n    }\r\n}\r\n\r\nmodule.exports = WordFactory;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/words-factory-class.js?");

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