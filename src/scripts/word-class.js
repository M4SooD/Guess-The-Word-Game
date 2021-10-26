class Word {
    #correct;
    #withHidden;
    #userEntered;

    constructor(level) {
        this.level = level;
    }

    get word() {
        return this.#correct;
    }

    randomHide() {

    }
}
module.exports = Word;