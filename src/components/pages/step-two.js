const Button = require('../buttons/button');
const Div = require('../div/div');
const Progress = require('../progress/progress');
const Heading = require('../heading/heading');
const List = require('../dropdown/list');
const Timer = require('../../scripts/timer-class');

const container = document.getElementById('container');

createStepTwo = (gameInfo, stepper) => {
   const game = gameInfo;
   const stepTwo = new Div('stepTwo', ['pages', 'step-two'], false).build;
   container.appendChild(stepTwo);

   const h2 = new Heading('h2', 'Remember the words..').build;
   stepTwo.appendChild(h2);

   const progress = new Progress('progressBar2', '0', game.stepTwoDuration - 1).build;
   stepTwo.appendChild(progress);

   game.generateWords();
   const wordList = new List('correctWordList', ['list'], game.gameVocabularyList).build;
   stepTwo.appendChild(wordList);

   const btn = new Button('backToMainPage', ['btn'], 'Back').build;
   stepTwo.appendChild(btn);

   const timer = new Timer(game.stepTwoDuration);
   setInterval(() => timer.downloadTimer('progressBar2',game, stepper), 1000);
}

module.exports = createStepTwo;