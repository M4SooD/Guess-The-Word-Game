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

eval("class Button {\r\n    #button;\r\n    constructor(id, className, innerText) {\r\n        this.#button = document.createElement('button');\r\n        this.#button.classList.add(className);\r\n        this.#button.innerText = innerText;\r\n        this.#button.id = id;\r\n    }\r\n\r\n    get id() {\r\n        return this.#button.id;\r\n    }\r\n\r\n    get build(){        \r\n        return this.#button;\r\n    }\r\n}\r\nmodule.exports = Button;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/buttons/button.js?");

/***/ }),

/***/ "./src/components/buttons/events.js":
/*!******************************************!*\
  !*** ./src/components/buttons/events.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Stepper = __webpack_require__(/*! ../../scripts/stepper-class */ \"./src/scripts/stepper-class.js\");\r\nconst Game = __webpack_require__(/*! ../../scripts/game-class */ \"./src/scripts/game-class.js\");\r\n//const goToNextStep = require('../../scripts/goToNextStep');\r\n\r\nfunction handleClick(selectedValue, userName) {\r\n    const step = new Stepper();\r\n    const game = new Game(selectedValue.selectedIndex, userName.value);\r\n    step.goToNextStep(game,step);\r\n}\r\n\r\nmodule.exports = handleClick;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/buttons/events.js?");

/***/ }),

/***/ "./src/components/div/div.js":
/*!***********************************!*\
  !*** ./src/components/div/div.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Div {\r\n    #div;\r\n    constructor(id, className,hidden) {\r\n        this.#div = document.createElement('div');\r\n        this.#div.classList.add(...className);\r\n        this.#div.id = id;\r\n        this.#div.hidden = hidden;\r\n    }\r\n\r\n    get id() {\r\n        return this.#div.id;\r\n    }\r\n\r\n    get build(){        \r\n        return this.#div;\r\n    }\r\n}\r\n\r\nmodule.exports = Div;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/div/div.js?");

/***/ }),

/***/ "./src/components/dropdown/combo-box.js":
/*!**********************************************!*\
  !*** ./src/components/dropdown/combo-box.js ***!
  \**********************************************/
/***/ ((module) => {

eval("class ComboBox {\r\n    #select;\r\n    constructor(id, className, options) {\r\n        this.#select = document.createElement('select');\r\n        this.#select.id = id;\r\n        this.#select.classList.add(...className);\r\n        this.createOptions(options);\r\n    }\r\n    createOptions(arr) {\r\n        const options = [...arr];\r\n        for (let i = 0; i < options.length; i++) {\r\n            let ops = document.createElement(\"option\");\r\n            let text = document.createTextNode(options[i]);\r\n            if (i === 0) {\r\n                ops.setAttribute(\"disabled\", \"\");\r\n                ops.setAttribute(\"selected\", \"\");\r\n                ops.setAttribute(\"hidden\", \"\");\r\n            }\r\n            ops.setAttribute(\"value\", options[i]);\r\n            ops.appendChild(text);\r\n            this.#select.appendChild(ops);\r\n        }\r\n    }\r\n\r\n    get build() {\r\n        return this.#select;\r\n    }\r\n}\r\n\r\nmodule.exports = ComboBox;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/dropdown/combo-box.js?");

/***/ }),

/***/ "./src/components/dropdown/events.js":
/*!*******************************************!*\
  !*** ./src/components/dropdown/events.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function selectionchange(element){\r\n    selectedValue = element.value;\r\n}\r\nmodule.exports = selectionchange;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/dropdown/events.js?");

/***/ }),

/***/ "./src/components/dropdown/list.js":
/*!*****************************************!*\
  !*** ./src/components/dropdown/list.js ***!
  \*****************************************/
/***/ ((module) => {

eval("class List {\r\n    #ul;\r\n    constructor(id, className, items, have_span) {\r\n        this.#ul = document.createElement('ul');\r\n        this.#ul.id = id;\r\n        this.#ul.classList.add(...className);\r\n        this.createItems(items, have_span);\r\n    }\r\n\r\n    createItems(arr, have_span) {\r\n        const items = [...arr];\r\n        for (let i = 0; i < items.length; i++) {\r\n            let li = document.createElement(\"li\");\r\n            li.id = this.#ul.id + '-items' + i;\r\n            li.className = 'items';\r\n            if (have_span) {\r\n                for (let j = 0; j < items[i].correctWord.length; j++) {\r\n                    let span = document.createElement(\"span\");\r\n                    span.id = 'span' + i + '-' + j;\r\n                    span.innerText = items[i].correctWord[j];\r\n                    li.appendChild(span);\r\n                }\r\n            }\r\n            else {\r\n                li.innerText = items[i].correctWord;\r\n            }\r\n            this.#ul.appendChild(li);\r\n        }\r\n    }\r\n\r\n    get build() {\r\n        return this.#ul;\r\n    }\r\n}\r\nmodule.exports = List;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/dropdown/list.js?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/***/ ((module) => {

eval("class Heading{\r\n    #heading;\r\n    constructor(type,innerText){\r\n        this.#heading = document.createElement(type);\r\n        this.#heading.innerText = innerText;\r\n    }\r\n    get build(){        \r\n        return this.#heading;\r\n    }\r\n}\r\n\r\nmodule.exports = Heading;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/inputs/event.js":
/*!****************************************!*\
  !*** ./src/components/inputs/event.js ***!
  \****************************************/
/***/ ((module) => {

eval("function listenToInputFocus(){\r\n    console.log(0);\r\n}\r\n\r\nmodule.exports = listenToInputFocus;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/inputs/event.js?");

/***/ }),

/***/ "./src/components/inputs/input.js":
/*!****************************************!*\
  !*** ./src/components/inputs/input.js ***!
  \****************************************/
/***/ ((module) => {

eval("class Input {\r\n    #input;\r\n    constructor(id, className, type, placeholder, value, minLength, maxLength) {\r\n        this.#input = document.createElement(\"input\");\r\n        this.#input.type = type;\r\n        this.#input.classList.add(...className);\r\n        this.#input.id = id;\r\n        this.#input.placeholder = placeholder;\r\n        this.#input.value = value;\r\n        this.#input.minLength = minLength;\r\n        this.#input.maxLength = maxLength;\r\n    }\r\n\r\n    get id() {\r\n        return this.#input.id;\r\n    }\r\n\r\n    get build() {\r\n        return this.#input;\r\n    }\r\n}\r\n\r\nmodule.exports = Input;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/inputs/input.js?");

/***/ }),

/***/ "./src/components/pages/step-four.js":
/*!*******************************************!*\
  !*** ./src/components/pages/step-four.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ../buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Input = __webpack_require__(/*! ../inputs/input */ \"./src/components/inputs/input.js\");\r\nconst Div = __webpack_require__(/*! ../div/div */ \"./src/components/div/div.js\");\r\nconst ComboBox = __webpack_require__(/*! ../dropdown/combo-box */ \"./src/components/dropdown/combo-box.js\");\r\nconst Heading = __webpack_require__(/*! ../heading/heading */ \"./src/components/heading/heading.js\");\r\nconst container = document.getElementById('container');\r\n\r\n\r\ncreateStepFour= () => {\r\n    const stepFour = new Div('stepFour', ['pages','step-four'],false).build;\r\n    container.appendChild(stepFour);\r\n\r\n    const h2 = new Heading('h2', 'Display some message base user score').build;\r\n    stepFour.appendChild(h2);\r\n\r\n    const btn = new Button('play_again',['btn'],'Play again').build;\r\n    stepFour.appendChild(btn);\r\n}\r\n\r\nmodule.exports = createStepFour;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/pages/step-four.js?");

/***/ }),

/***/ "./src/components/pages/step-one.js":
/*!******************************************!*\
  !*** ./src/components/pages/step-one.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ../buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Input = __webpack_require__(/*! ../inputs/input */ \"./src/components/inputs/input.js\");\r\nconst Div = __webpack_require__(/*! ../div/div */ \"./src/components/div/div.js\");\r\nconst ComboBox = __webpack_require__(/*! ../dropdown/combo-box */ \"./src/components/dropdown/combo-box.js\");\r\nconst Heading = __webpack_require__(/*! ../heading/heading */ \"./src/components/heading/heading.js\");\r\nconst selectionchange = __webpack_require__(/*! ../dropdown/events */ \"./src/components/dropdown/events.js\");\r\nconst handleClick= __webpack_require__(/*! ../buttons/events */ \"./src/components/buttons/events.js\");\r\nconst container = document.getElementById('container');\r\n\r\ncreateStepOne = () => {\r\n    const stepOne = new Div('stepOne', ['pages','step-one'],false).build;\r\n    container.appendChild(stepOne);\r\n\r\n    const h1 = new Heading('h1', 'GUESS THE WORD!').build;\r\n    stepOne.appendChild(h1);\r\n\r\n    const userName = new Input('userName',['step-one__input'],'text','Your Name is...', null,3,30).build;\r\n    stepOne.appendChild(userName);\r\n\r\n    const options =[\"Choose Game Level...\",\"Easy\",\"Medium\",\"Hard\",\"Devil\"];\r\n    const gameLevel = new ComboBox('name',['step-one__dropdown'],options).build;\r\n    stepOne.appendChild(gameLevel);\r\n    gameLevel.onchange = () => selectionchange(gameLevel);\r\n\r\n    const btnStart = new Button('start',['btn'],'Start').build;\r\n    stepOne.appendChild(btnStart);\r\n    btnStart.onclick = () => handleClick(gameLevel,userName);\r\n}\r\n\r\ncreateStepOne();\r\nmodule.exports = createStepOne;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/pages/step-one.js?");

/***/ }),

/***/ "./src/components/pages/step-three.js":
/*!********************************************!*\
  !*** ./src/components/pages/step-three.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ../buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Div = __webpack_require__(/*! ../div/div */ \"./src/components/div/div.js\");\r\nconst Progress = __webpack_require__(/*! ../progress/progress */ \"./src/components/progress/progress.js\");\r\nconst Heading = __webpack_require__(/*! ../heading/heading */ \"./src/components/heading/heading.js\");\r\nconst Timer = __webpack_require__(/*! ../../scripts/timer-class */ \"./src/scripts/timer-class.js\");\r\nconst List = __webpack_require__(/*! ../dropdown/list */ \"./src/components/dropdown/list.js\");\r\nconst listenToInputFocus = __webpack_require__(/*! ../inputs/event */ \"./src/components/inputs/event.js\");\r\nconst inputs = document.querySelectorAll(\"input.input-char\");\r\nconst container = document.getElementById('container');\r\n\r\n\r\ncreateStepThree = (gameInfo, stepper) => {\r\n    const game = gameInfo;\r\n    const stepThree = new Div('stepThree', ['pages', 'step-three'], false).build;\r\n    container.appendChild(stepThree);\r\n\r\n    const h2 = new Heading('h2', 'Complete the words..').build;\r\n    stepThree.appendChild(h2);\r\n\r\n    const progress = new Progress('progressBar3', '0', game.stepThreeDuration - 1).build;\r\n    stepThree.appendChild(progress);\r\n\r\n    const wordList = new List('wrongWordsList', ['list'], game.gameVocabularyList,true).build;\r\n    stepThree.appendChild(wordList);\r\n    game.generateDestructedWord();\r\n\r\n    const btn = new Button('backToMainPage', ['btn'], 'Back').build;\r\n    stepThree.appendChild(btn);\r\nlistenToInputFocus(inputs);\r\n    const timer = new Timer(game.stepThreeDuration);\r\n    setInterval(() => timer.downloadTimer('progressBar3', game, stepper), 1000);\r\n}\r\n\r\n\r\nmodule.exports = createStepThree;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/pages/step-three.js?");

/***/ }),

/***/ "./src/components/pages/step-two.js":
/*!******************************************!*\
  !*** ./src/components/pages/step-two.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ../buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Div = __webpack_require__(/*! ../div/div */ \"./src/components/div/div.js\");\r\nconst Progress = __webpack_require__(/*! ../progress/progress */ \"./src/components/progress/progress.js\");\r\nconst Heading = __webpack_require__(/*! ../heading/heading */ \"./src/components/heading/heading.js\");\r\nconst List = __webpack_require__(/*! ../dropdown/list */ \"./src/components/dropdown/list.js\");\r\nconst Timer = __webpack_require__(/*! ../../scripts/timer-class */ \"./src/scripts/timer-class.js\");\r\n\r\nconst container = document.getElementById('container');\r\n\r\ncreateStepTwo = (gameInfo, stepper) => {\r\n   const game = gameInfo;\r\n   const stepTwo = new Div('stepTwo', ['pages', 'step-two'], false).build;\r\n   container.appendChild(stepTwo);\r\n\r\n   const h2 = new Heading('h2', 'Remember the words..').build;\r\n   stepTwo.appendChild(h2);\r\n\r\n   const progress = new Progress('progressBar2', '0', game.stepTwoDuration - 1).build;\r\n   stepTwo.appendChild(progress);\r\n\r\n   game.generateWords();\r\n   const wordList = new List('correctWordList', ['list'], game.gameVocabularyList, false).build;\r\n   stepTwo.appendChild(wordList);\r\n\r\n   const btn = new Button('backToMainPage', ['btn'], 'Back').build;\r\n   stepTwo.appendChild(btn);\r\n\r\n   const timer = new Timer(game.stepTwoDuration);\r\n   setInterval(() => timer.downloadTimer('progressBar2', game, stepper), 1000);\r\n}\r\n\r\nmodule.exports = createStepTwo;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/pages/step-two.js?");

/***/ }),

/***/ "./src/components/progress/progress.js":
/*!*********************************************!*\
  !*** ./src/components/progress/progress.js ***!
  \*********************************************/
/***/ ((module) => {

eval("class Progress {\r\n    #progress;\r\n    constructor(id, value, max) {\r\n        this.#progress = document.createElement('progress');\r\n        this.#progress.id = id;\r\n        this.#progress.value = value;\r\n        this.#progress.max = max;\r\n    }\r\n\r\n    get build(){\r\n        return this.#progress;\r\n    }\r\n}\r\n\r\nmodule.exports = Progress;\n\n//# sourceURL=webpack://guess-the-word-game/./src/components/progress/progress.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Button = __webpack_require__(/*! ./components/buttons/button */ \"./src/components/buttons/button.js\");\r\nconst Div = __webpack_require__(/*! ./components/div/div */ \"./src/components/div/div.js\");\r\nconst Input = __webpack_require__(/*! ./components/inputs/input */ \"./src/components/inputs/input.js\");\r\nconst ComboBox = __webpack_require__(/*! ./components/dropdown/combo-box */ \"./src/components/dropdown/combo-box.js\");\r\nconst Heading = __webpack_require__(/*! ./components/heading/heading */ \"./src/components/heading/heading.js\");\r\nconst PageOne = __webpack_require__(/*! ./components/pages/step-one */ \"./src/components/pages/step-one.js\");\r\nconst PageTwo = __webpack_require__(/*! ./components/pages/step-two */ \"./src/components/pages/step-two.js\");\r\nconst PageThree = __webpack_require__(/*! ./components/pages/step-three */ \"./src/components/pages/step-three.js\");\r\nconst PageFour = __webpack_require__(/*! ./components/pages/step-four */ \"./src/components/pages/step-four.js\");\r\n\r\nconst WordsFactory = __webpack_require__(/*! ./scripts/words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Word = __webpack_require__(/*! ./scripts/word-class */ \"./src/scripts/word-class.js\");\r\nconst Game = __webpack_require__(/*! ./scripts/game-class */ \"./src/scripts/game-class.js\");\r\n\r\nconst btnEvents = __webpack_require__(/*! ./components/buttons/events */ \"./src/components/buttons/events.js\");\r\nconst cmbEvents = __webpack_require__(/*! ./components/dropdown/events */ \"./src/components/dropdown/events.js\");\r\n\r\nconst listenToInputFocus = __webpack_require__(/*! ./components/inputs/event */ \"./src/components/inputs/event.js\");\r\nconst inputs = document.querySelectorAll(\"input.input-char\");\r\n\r\ndebugger;\r\nlistenToInputFocus(inputs);\n\n//# sourceURL=webpack://guess-the-word-game/./src/main.js?");

/***/ }),

/***/ "./src/scripts/game-class.js":
/*!***********************************!*\
  !*** ./src/scripts/game-class.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const WordsFactory = __webpack_require__(/*! ./words-factory-class */ \"./src/scripts/words-factory-class.js\");\r\nconst Input = __webpack_require__(/*! ../components/inputs/input */ \"./src/components/inputs/input.js\");\r\nconst Word = __webpack_require__(/*! ./word-class */ \"./src/scripts/word-class.js\");\r\n\r\nclass Game {\r\n    words = [];\r\n    destructedWords = [];\r\n    #totalScore;\r\n    #currentStepper;\r\n    #numberWords;\r\n    #score;\r\n    #timer;\r\n    constructor(gameLevel, userName) {\r\n        this.level = gameLevel;\r\n        if (this.level === 1) {\r\n            this.#numberWords = 5;\r\n            this.#score = 2;\r\n            this.#timer = 20;\r\n        }\r\n        else if (this.level === 2) {\r\n            this.#numberWords = 7;\r\n            this.#score = 5;\r\n            this.#timer = 40;\r\n        }\r\n        else if (this.level === 3) {\r\n            this.#numberWords = 9;\r\n            this.#score = 10;\r\n            this.#timer = 70;\r\n        }\r\n        else if (this.level === 4) {\r\n            this.#numberWords = 11;\r\n            this.#score = 20;\r\n            this.#timer = 120;\r\n        }\r\n    }\r\n\r\n    generateWords() {\r\n        const wordsFactory = new WordsFactory(this.#numberWords);\r\n        do {\r\n            let obj = wordsFactory.generateWord;\r\n            if (!this.words.includes(obj.correct)) {\r\n                this.words.push(obj);\r\n            }\r\n        } while (this.words.length < this.#numberWords);\r\n    }\r\n\r\n    generateDestructedWord() {\r\n        const array = this.words;\r\n        for (let i = 0; i < array.length; i++) {\r\n            let indexHiddenChar = array[i].word.indexHiddenCharacters;\r\n            for (let j = 0; j < indexHiddenChar.length; j++) {\r\n                let parentBox = document.getElementById('span' + i + '-' + indexHiddenChar[j]);\r\n                parentBox.innerText = \"\";\r\n                // parentBox.insertAdjacentHTML(\"afterbegin\", '<input type=\"text\" class=\"input-char\" value=\"\" required maxlength=\"1\">');\r\n                const input = new Input(\"input\" + i + '-' + j, [\"input-char\"], \"text\", \"\", \"\", 1, 1).build;\r\n                parentBox.appendChild(input);\r\n            }\r\n        }\r\n    }\r\n\r\n    get gameVocabularyList() {\r\n        return this.words;\r\n    }\r\n\r\n    get stepTwoDuration() {\r\n        return Math.round(this.#timer / 4);\r\n    }\r\n    get stepThreeDuration() {\r\n        return this.#timer - (Math.round(this.#timer / 4));\r\n    }\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/game-class.js?");

/***/ }),

/***/ "./src/scripts/showAndHideContent.js":
/*!*******************************************!*\
  !*** ./src/scripts/showAndHideContent.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function showAndHideContent(currentPage, nextPage) {\r\n    if (document.getElementById(currentPage) !== null && document.getElementById(nextPage) !== null) {\r\n        document.getElementById(currentPage).hidden = true;\r\n        document.getElementById(nextPage).hidden = false;\r\n    }\r\n    else {\r\n        document.getElementById(currentPage).hidden = true;\r\n    }\r\n}\r\n\r\nmodule.exports = showAndHideContent;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/showAndHideContent.js?");

/***/ }),

/***/ "./src/scripts/stepper-class.js":
/*!**************************************!*\
  !*** ./src/scripts/stepper-class.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showAndHideContent = __webpack_require__(/*! ./showAndHideContent */ \"./src/scripts/showAndHideContent.js\");\r\nconst createStepOne = __webpack_require__(/*! ../components/pages/step-one */ \"./src/components/pages/step-one.js\");\r\nconst createStepTwo = __webpack_require__(/*! ../components/pages/step-two */ \"./src/components/pages/step-two.js\");\r\nconst createStepThree = __webpack_require__(/*! ../components/pages/step-three */ \"./src/components/pages/step-three.js\");\r\nconst createStepFour = __webpack_require__(/*! ../components/pages/step-four */ \"./src/components/pages/step-four.js\");\r\n\r\nclass Stepper {\r\n    #steps = ['stepOne','stepTwo','stepThree','stepFour'];\r\n    #currentStep ;\r\n    constructor(){\r\n        this.#currentStep = this.#steps[0];\r\n    }\r\n\r\n    set setStep(step) {\r\n        this.#currentStep = this.#steps[step];\r\n    }\r\n\r\n    get nextStep() {\r\n        this.setStep=this.#steps.indexOf(this.#currentStep)+1;\r\n        return this.#currentStep;\r\n    } \r\n    get currentStep() {\r\n        return this.#currentStep;\r\n    }\r\n\r\n    goToNextStep(game,step) {\r\n        showAndHideContent(this.#currentStep, this.nextStep);\r\n        if(this.#currentStep ===this.#steps[0])\r\n        {\r\n            createStepOne(game,step);\r\n        }\r\n        else if(this.#currentStep ===this.#steps[1])\r\n        {\r\n            createStepTwo(game,step);\r\n        }\r\n        else if(this.#currentStep ===this.#steps[2])\r\n        {\r\n            createStepThree(game,step);\r\n        }\r\n        else if (this.#currentStep ===this.#steps[3])\r\n        {\r\n            createStepFour(game,step);\r\n        }\r\n        else \r\n        {\r\n            createStepOne(game,step);\r\n            this.setStep=this.#steps[0];\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Stepper;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/stepper-class.js?");

/***/ }),

/***/ "./src/scripts/timer-class.js":
/*!************************************!*\
  !*** ./src/scripts/timer-class.js ***!
  \************************************/
/***/ ((module) => {

eval("class Timer {\r\n    #time;\r\n    #timer; //10 will  run it every 100th of a second\r\n\r\n    constructor(time) {\r\n        this.#time = time;\r\n        this.#timer = time;\r\n    }\r\n\r\n    set timer(time) {\r\n        this.#time = time;\r\n    }\r\n\r\n    downloadTimer(id,game, stepper) {\r\n        if (this.#timer === 0) {\r\n            stepper.goToNextStep(game,stepper);\r\n            clearInterval() ;\r\n        }\r\n        document.getElementById(id).value = this.#time - this.#timer;\r\n        this.#timer -= 1;\r\n    }\r\n\r\n    RemainingTime() {\r\n\r\n    }\r\n\r\n    memorizingTimer() {\r\n\r\n    }\r\n\r\n    responseTime() {\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = Timer;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/timer-class.js?");

/***/ }),

/***/ "./src/scripts/word-class.js":
/*!***********************************!*\
  !*** ./src/scripts/word-class.js ***!
  \***********************************/
/***/ ((module) => {

eval("class Word {\r\n    word ={};\r\n    #numberHiddenCharacters;\r\n    #score;\r\n    constructor(words) {\r\n       // this.#score = score;\r\n        this.word.correct= words[Math.floor(Math.random()*words.length)] ;\r\n        this.word.hiddenCharacters = this.randomHide(this.word.correct);\r\n    }\r\n\r\n    get correctWord(){\r\n        return this.word.correct;\r\n    }\r\n\r\n    get indexHiddenCharacters(){\r\n        return this.word.indexHiddenCharacters;\r\n    }\r\n\r\n    randomHide(word) {\r\n        let text = [...word];\r\n        this.word.hiddenCharacters=[];\r\n        this.word.indexHiddenCharacters=[];\r\n        this.#numberHiddenCharacters = Math.floor(text.length * 0.4) ;\r\n        for (let i= 0; i<this.#numberHiddenCharacters;i++){\r\n            let index = Math.floor(Math.random()*text.length);\r\n            this.word.hiddenCharacters.push(text[index]);\r\n            this.word.indexHiddenCharacters.push(index);\r\n        }\r\n        return this.word.hiddenCharacters;\r\n    }\r\n/*\r\n    get score(){\r\n        return this.#score * this.#numberHiddenCharacters;\r\n    }\r\n*/\r\n    userTry(characters){\r\n        let inputUser= [...characters];\r\n        let withHidden = this.word.hiddenCharacters;\r\n        if (inputUser.length === withHidden.length && inputUser.every((value, i) => value === withHidden[i])){\r\n            return  10;\r\n        }\r\n        else\r\n            return 0;\r\n    }\r\n}\r\n\r\nmodule.exports = Word;\n\n//# sourceURL=webpack://guess-the-word-game/./src/scripts/word-class.js?");

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