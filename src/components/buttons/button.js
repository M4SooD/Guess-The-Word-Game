class Button {
    #button;
    constructor(id, className, innerText) {
        this.#button = document.createElement('button');
        this.#button.classList.add(className);
        this.#button.innerText = innerText;
        this.#button.id = id;
        this.#button.addEventListener("click", this.handleClick.bind(this));
    }

    get id() {
        return this.#button.id;
    }

    handleClick() {
        console.log(`This is the text in the clicked button: ${this.#button.innerText}`)
    }
}
let btn = new Button('test', 't1');
btn.handleClick();
module.exports = Button;