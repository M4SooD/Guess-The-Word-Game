class Input{
    #input;
    constructor(id,className,type,value){
        this.#input = document.createElement("input");
        this.#input.type = type;
        this.#input.className = className; 
        this.#input.id = id;
        this.#input.value = value;
    }

    get id() {
        return this.#input.id;
    }

    get build(){        
        return this.#input;
    }
}

module.exports = Input;