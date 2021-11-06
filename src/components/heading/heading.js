class Heading{
    #heading;
    constructor(type,innerText){
        this.#heading = document.createElement(type);
        this.#heading.innerText = innerText;
    }
    get build(){        
        return this.#heading;
    }
}

module.exports = Heading;