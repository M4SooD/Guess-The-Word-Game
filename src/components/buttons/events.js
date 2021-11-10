const Stepper = require('../../scripts/stepper-class');
const Game = require('../../scripts/game-class');
//const goToNextStep = require('../../scripts/goToNextStep');

function handleClick(selectedValue, userName) {
    const step = new Stepper();
    const game = new Game(selectedValue.selectedIndex, userName.value);
    step.goToNextStep(game,step);
}

module.exports = handleClick;