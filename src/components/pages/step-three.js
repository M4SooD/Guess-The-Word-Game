const Button = require('../buttons/button');
const Div = require('../div/div');
const Progress = require('../progress/progress');
const Heading = require('../heading/heading');
const Timer = require('../../scripts/timer-class');
const List = require('../dropdown/list');
const container = document.getElementById('container');


createStepThree = (gameInfo, stepper) => {
    const game = gameInfo;
    const stepThree = new Div('stepThree', ['pages', 'step-three'], false).build;
    container.appendChild(stepThree);

    const h2 = new Heading('h2', 'Complete the words..').build;
    stepThree.appendChild(h2);

    const progress = new Progress('progressBar3', '0', game.stepThreeDuration - 1).build;
    stepThree.appendChild(progress);

    const wordList = new List('wrongWordsList', ['list'], game.gameVocabularyList).build;
    stepThree.appendChild(wordList);
    game.generateDestructedWord();

    const btn = new Button('backToMainPage', ['btn'], 'Back').build;
    stepThree.appendChild(btn);

    const timer = new Timer(game.stepThreeDuration);
    setInterval(() => timer.downloadTimer('progressBar3', game, stepper), 1000);
}

module.exports = createStepThree;