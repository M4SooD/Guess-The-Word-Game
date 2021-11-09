const Button = require('../buttons/button');
const Input = require('../inputs/input');
const Div = require('../div/div');
const ComboBox = require('../dropdown/comboBox');
const Heading = require('../heading/heading');
const container = document.getElementById('container');


createStepOne = () => {
    const stepOne = new Div('stepOne', 'pages,C__step-one').build;
    container.appendChild(stepOne);

    const h1 = new Heading('h1', 'GUESS THE WORD!').build;
    stepOne.appendChild(h1);

    const name = new Input('name','input,name','text','Your Name is...').build;
    stepOne.appendChild(name);
}
createStepOne();
module.exports = createStepOne;