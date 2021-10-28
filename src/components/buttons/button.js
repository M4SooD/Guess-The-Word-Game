class Button {
    #button;
    constructor(innerText, id) {
        this.#button = document.createElement('button');
        this.#button.classList.add('btn');
        this.#button.innerText = innerText;
        this.#button.id = id;
    }
    addEventListener(event, eventListener) {
        object.addEventListener(event, eventListener);
    }
}
module.exports = Button;