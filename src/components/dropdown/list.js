class List {
    #ul;
    constructor(id, className, items) {
        this.#ul = document.createElement('ul');
        this.#ul.id = id;
        this.#ul.classList.add(...className);
        this.createItems(items);
    }

    createItems(arr) {
        const items = [...arr];
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            li.id = this.#ul.id +'-items' + i;
            li.className = 'items';
            li.innerText = items[i].correctWord;
            this.#ul.appendChild(li);
        }
    }

    get build() {
        return this.#ul;
    }
}
module.exports = List;