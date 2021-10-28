const Word = require('./word-class');
const words = ['vein', 'velvet', 'artist', 'nerve', 'dare',
    'cultivate', 'dynamic', 'contact', 'audience', 'thread', 'voucher', 'pan', 'faithful', 'confine', 'solution', 'tired',
    'patience', 'jet', 'pavement', 'jealous', 'indulge', 'reach', 'heaven', 'gallery', 'comedy', 'wealth', 'kill', 'finance',
    'sock', 'exaggerate', 'coast', 'replacement', 'lid', 'bedroom', 'debut', 'bottle', 'discovery', 'inject', 'curriculum',
    'merit', 'distortion', 'frequency', 'grant', 'lazy', 'adoption', 'assertive', 'program', 'invisible', 'wing', 'hall'];
    
class WordFactory {
    #filterWords;
    #numberWords;
    constructor(numberWords) {
        this.#numberWords = numberWords;
        this.#filterWords = words.filter(value => value.length <= this.#numberWords);
    }

    get generateWord() {
        return new Word(this.#filterWords);
    }
}

module.exports = WordFactory;