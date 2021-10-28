function createDiv(id, description) {
    let div = document.createElement('div');
    div.classList.add('step__div');
    btn.id = id;
    let text = document.createTextNode(description);
    div.appendChild(text);
    document.body.appendChild(div)
}

module.exports = createDiv;