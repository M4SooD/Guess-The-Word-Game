const words=['vein', 'velvet', 'artist', 'nerve', 'dare',
    'cultivate', 'dynamic', 'contact', 'audience', 'thread', 'voucher', 'pan', 'faithful', 'confine', 'solution', 'tired',
    'patience', 'jet', 'pavement', 'jealous', 'indulge', 'reach', 'heaven', 'gallery', 'comedy', 'wealth', 'kill', 'finance',
    'sock', 'exaggerate', 'coast', 'replacement', 'lid', 'bedroom', 'debut', 'bottle', 'discovery', 'inject', 'curriculum',
    'merit', 'distortion', 'frequency', 'grant', 'lazy', 'adoption', 'assertive', 'program', 'invisible', 'wing', 'hall'];
class Word {
    #word ={};
    #numberHiddenCharacters;
    #numberWords;
    #score;
    filterArray;
    constructor(score,numberWords) {
       this.#numberWords= numberWords;
        this.#score = score;

        this.filterArray = words.filter(word => word.length <= this.#numberWords);
    }

    get generateWord(){
        this.#word ={};
        this.#word.correct= this.filterArray[Math.floor(Math.random()*this.filterArray.length)] ;
        this.#word.withHidden = this.randomHide(this.#word.correct);
        return this.#word;
    }

    randomHide(word) {
        let text = [...word];
        this.#word.withHidden=[];
        this.#numberHiddenCharacters = Math.floor(text.length * 0.4) ;
        for (let i= 0; i<this.#numberHiddenCharacters;i++){
            this.#word.withHidden.push(text[Math.floor(Math.random()*text.length)]);
        }
        return this.#word.withHidden;
    }

    get score(){
        return this.#score * this.#numberHiddenCharacters;
    }

    userTry(char){
        let inputUser= [...char];
        let test = this.#word.withHidden;
        if (inputUser.length === test.length && inputUser.every((v, i) => v === test[i])){
            return  this.score;
        }
        else
            return 0;
    }
}

module.exports = Word;