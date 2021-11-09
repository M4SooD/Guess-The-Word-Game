const WordsFactory = require("./words-factory-class");
const Word = require("./word-class");

class Game{
    #words =[];
    #totalScore;
    #currentStepper;
    #numberWords;
    #score;
    #timer;
    constructor(gameLevel) {
        this.level = gameLevel;
        if(this.level ==="Easy"){
            this.#numberWords = 5;
            this.#score = 2;
            this.#timer=30;
        }
        else if(this.level ==="Medium"){
            this.#numberWords = 7;
            this.#score = 5;
            this.#timer=40;
        }
        else if(this.level ==="Hard"){
            this.#numberWords = 9;
            this.#score = 10;
            this.#timer=70;
        }
        else if(this.level ==="Devil"){
            this.#numberWords = 11;
            this.#score = 20;
            this.#timer=120;
        }
    }

    generateWords(){
        const wordsFactory = new WordsFactory(this.#numberWords);
        do {
            let obj = wordsFactory.generateWord;
            if (!this.#words.includes(obj.correct)) {
                this.#words.push(obj);
            }
        } while (this.#words.length < this.#numberWords);
        return this.#words;
    }


/*
    CheckInputCharacters(){
        for(let i =0;i<this.#words.numberHiddenCharacters;i++){

        }
    }*/
}

let myGame = new Game("Easy");
console.log(myGame.generateWords());

module.exports = Game;