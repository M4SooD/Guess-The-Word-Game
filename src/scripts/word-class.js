const words=['ameneh','masoud','Hello'];
class Word {
    #word;
    
    constructor(level) {
        this.level = level;
        this.#word['correct']=words[Math.floor(Math.random()*words.length)];
        if(level ==="Hard"){
            randomHide(correct(),9);
        }
    }
    get correct(){
        return correct;
    }

    randomHide([...correct],num) {
      
    }

    userTry([...char]){

    }
}

let myWord = new Word('Hard');
console.log( myWord.correct());
module.exports = Word;