const Button = require('../buttons/button');
const Input = require('../inputs/input');
const Div = require('../div/div');
const ComboBox = require('../dropdown/combo-box');
const Heading = require('../heading/heading');
const selectionchange = require('../dropdown/events');
const handleClick= require('../buttons/events');
const container = document.getElementById('container');

createStepOne = () => {
    const stepOne = new Div('stepOne', ['pages','step-one'],false).build;
    container.appendChild(stepOne);

    const h1 = new Heading('h1', 'GUESS THE WORD!').build;
    stepOne.appendChild(h1);

    const userName = new Input('userName',['step-one__input'],'text','Your Name is...', null,3,30).build;
    stepOne.appendChild(userName);

    const options =["Choose Game Level...","Easy","Medium","Hard","Devil"];
    const gameLevel = new ComboBox('name',['step-one__dropdown'],options).build;
    stepOne.appendChild(gameLevel);
    gameLevel.onchange = () => selectionchange(gameLevel);

    const btnStart = new Button('start',['btn'],'Start').build;
    stepOne.appendChild(btnStart);
    btnStart.onclick = () => handleClick(gameLevel,userName);
}

createStepOne();
module.exports = createStepOne;