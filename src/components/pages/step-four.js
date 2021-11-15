const Button = require('../buttons/button');
const Input = require('../inputs/input');
const Div = require('../div/div');
const ComboBox = require('../dropdown/combo-box');
const Heading = require('../heading/heading');
const container = document.getElementById('container');


createStepFour= () => {
    const stepFour = new Div('stepFour', ['pages','step-four'],false).build;
    container.appendChild(stepFour);

    const h2 = new Heading('h2', 'Display some message base user score').build;
    stepFour.appendChild(h2);

    const btn = new Button('play_again',['btn'],'Play again').build;
    stepFour.appendChild(btn);
}

module.exports = createStepFour;