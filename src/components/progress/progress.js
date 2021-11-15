class Progress {
    #progress;
    constructor(id, value, max) {
        this.#progress = document.createElement('progress');
        this.#progress.id = id;
        this.#progress.value = value;
        this.#progress.max = max;
    }

    get build(){
        return this.#progress;
    }
}

module.exports = Progress;