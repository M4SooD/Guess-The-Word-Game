class Word {
    word ={};
    #numberHiddenCharacters;
    #score;
    constructor(words) {
       // this.#score = score;
        this.word.correct= words[Math.floor(Math.random()*words.length)] ;
        this.word.hiddenCharacters = this.randomHide(this.word.correct);
    }

    get correctWord(){
        return this.word.correct;
    }

    get indexHiddenCharacters(){
        return this.word.indexHiddenCharacters;
    }

    randomHide(word) {
        let text = [...word];
        this.word.hiddenCharacters=[];
        this.word.indexHiddenCharacters=[];
        this.#numberHiddenCharacters = Math.floor(text.length * 0.4) ;
        for (let i= 0; i<this.#numberHiddenCharacters;i++){
            let index = Math.floor(Math.random()*text.length);
            this.word.hiddenCharacters.push(text[index]);
            this.word.indexHiddenCharacters.push(index);
        }
        return this.word.hiddenCharacters;
    }
/*
    get score(){
        return this.#score * this.#numberHiddenCharacters;
    }
*/
    userTry(characters){
        let inputUser= [...characters];
        let withHidden = this.word.hiddenCharacters;
        if (inputUser.length === withHidden.length && inputUser.every((value, i) => value === withHidden[i])){
            return  10;
        }
        else
            return 0;
    }
}

module.exports = Word;