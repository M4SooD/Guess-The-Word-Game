class Div {
    #div;
    constructor(id, className) {
        this.#div = document.createElement('div');
        this.#div.classList.add(className);
        this.#div.id = id;
    }

    get id() {
        return this.#div.id;
    }

    get build(){        
        return this.#div;
    }
}

module.exports = Div;