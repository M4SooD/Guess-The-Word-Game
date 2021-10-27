const Word = require("./word-class");

class Game{
    #words =[];
    #totalScore;
    #currentStepper;
    #numberWords;
    #score;
    constructor(gameLevel) {
        this.level = gameLevel;
        if(this.level ==="Easy"){
            this.#numberWords = 5;
            this.#score = 2;
        }
        else if(this.level ==="Medium"){
            this.#numberWords = 7;
            this.#score = 5;
        }
        else if(this.level ==="Hard"){
            this.#numberWords = 9;
            this.#score = 10;
        }
        else if(this.level ==="Devil"){
            this.#numberWords = 11;
            this.#score = 20;
        }
    }
    generateWords(){
        const word = new Word(this.#score,this.#numberWords);
        do {
            let obj = word.generateWord;
            if (!this.#words.includes(obj.correct)) {
                this.#words.push(obj);
            }
        } while (this.#words.length < this.#numberWords);
        return this.#words;
    }
}

debugger;
let myGame = new Game("Easy");

console.log(myGame.generateWords());
module.exports = Game;