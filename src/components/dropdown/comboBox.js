class ComboBox {
    #select;
    constructor(id,className,options){
        this.#select = document.createElement('select');
        this.#select.id =  id;
        this.#select.classList.add(className);
        createOptions(options);
    }
    createOptions(arr){
        var ops = new Array("first","second","third","fourth","fifth");
        for (var i=0;i<ops.length;i++) {
            var o = document.createElement("option");
            var t = document.createTextNode(ops[i]);
            o.setAttribute("value",ops[i]);
            o.appendChild(t);
            this.#select.appendChild(o);
            }
        root.appendChild(this.#select);
    }

    get build(){        
        return this.#select;
    }
}

module.exports = ComboBox;