class Input {
    #input;
    constructor(id, className, type, placeholder, value, minLength, maxLength) {
        this.#input = document.createElement("input");
        this.#input.type = type;
        this.#input.classList.add(...className);
        this.#input.id = id;
        this.#input.placeholder = placeholder;
        this.#input.value = value;
        this.#input.minLength = minLength;
        this.#input.maxLength = maxLength;
    }

    get id() {
        return this.#input.id;
    }

    get build() {
        return this.#input;
    }
}

module.exports = Input;