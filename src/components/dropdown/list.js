class List {
    #ul;
    constructor(id, className, items, have_span) {
        this.#ul = document.createElement('ul');
        this.#ul.id = id;
        this.#ul.classList.add(...className);
        this.createItems(items, have_span);
    }

    createItems(arr, have_span) {
        const items = [...arr];
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            li.id = this.#ul.id + '-items' + i;
            li.className = 'items';
            if (have_span) {
                for (let j = 0; j < items[i].correctWord.length; j++) {
                    let span = document.createElement("span");
                    span.id = 'span' + i + '-' + j;
                    span.innerText = items[i].correctWord[j];
                    li.appendChild(span);
                }
            }
            else {
                li.innerText = items[i].correctWord;
            }
            this.#ul.appendChild(li);
        }
    }

    get build() {
        return this.#ul;
    }
}
module.exports = List;