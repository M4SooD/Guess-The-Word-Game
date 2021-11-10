class Button {
    #button;
    constructor(id, className, innerText) {
        this.#button = document.createElement('button');
        this.#button.classList.add(className);
        this.#button.innerText = innerText;
        this.#button.id = id;
    }

    get id() {
        return this.#button.id;
    }

    get build(){        
        return this.#button;
    }
}
module.exports = Button;