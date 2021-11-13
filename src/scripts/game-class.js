const WordsFactory = require("./words-factory-class");
const Input = require('../components/inputs/input');
const Word = require("./word-class");

class Game{
    words =[];
    destructedWords=[];
    #totalScore;
    #currentStepper;
    #numberWords;
    #score;
    #timer;
    constructor(gameLevel,userName) {
        this.level = gameLevel;
        if(this.level ===1){
            this.#numberWords = 5;
            this.#score = 2;
            this.#timer=20;
        }
        else if(this.level ===2){
            this.#numberWords = 7;
            this.#score = 5;
            this.#timer=40;
        }
        else if(this.level ===3){
            this.#numberWords = 9;
            this.#score = 10;
            this.#timer=70;
        }
        else if(this.level ===4){
            this.#numberWords = 11;
            this.#score = 20;
            this.#timer=120;
        }
    }

    generateWords(){
        const wordsFactory = new WordsFactory(this.#numberWords);
        do {
            let obj = wordsFactory.generateWord;
            if (!this.words.includes(obj.correct)) {
                this.words.push(obj);
            }
        } while (this.words.length < this.#numberWords);
    }
    
    generateDestructedWord(){
        const array = this.words;
        let correctWord=[];
        for (let i = 0; i < array.length; i++) {
            let box = array[i].word.indexHiddenCharacters;
            let testID= document.getElementById('wrongWordsList-items' + i);
             correctWord = array[i].word.correct.split("");
            for (let j = 0; j < box.length; j++) {
                const input = new Input('val'+i+j,['input-char'],'text','','').build;
                testID.appendChild(input);
                correctWord.splice(box[j], 1,input);
                correctWord = correctWord;
            }        
            array[i].word.correct = correctWord.join("");
        }
    }

    get gameVocabularyList(){
        return this.words;
    }

    get stepTwoDuration(){
        return Math.round(this.#timer/4);
    }
    get stepThreeDuration(){
        return this.#timer-(Math.round(this.#timer/4));
    }
}

module.exports = Game;