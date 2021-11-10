class ComboBox {
    #select;
    constructor(id, className, options) {
        this.#select = document.createElement('select');
        this.#select.id = id;
        this.#select.classList.add(...className);
        this.createOptions(options);
    }
    createOptions(arr) {
        const options = [...arr];
        for (let i = 0; i < options.length; i++) {
            let ops = document.createElement("option");
            let text = document.createTextNode(options[i]);
            if (i === 0) {
                ops.setAttribute("disabled", "");
                ops.setAttribute("selected", "");
                ops.setAttribute("hidden", "");
            }
            ops.setAttribute("value", options[i]);
            ops.appendChild(text);
            this.#select.appendChild(ops);
        }
    }

    get build() {
        return this.#select;
    }
}

module.exports = ComboBox;