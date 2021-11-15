const showAndHideContent = require('./showAndHideContent');
const createStepOne = require('../components/pages/step-one');
const createStepTwo = require('../components/pages/step-two');
const createStepThree = require('../components/pages/step-three');
const createStepFour = require('../components/pages/step-four');

class Stepper {
    #steps = ['stepOne','stepTwo','stepThree','stepFour'];
    #currentStep ;
    constructor(){
        this.#currentStep = this.#steps[0];
    }

    set setStep(step) {
        this.#currentStep = this.#steps[step];
    }

    get nextStep() {
        this.setStep=this.#steps.indexOf(this.#currentStep)+1;
        return this.#currentStep;
    } 
    get currentStep() {
        return this.#currentStep;
    }

    goToNextStep(game,step) {
        showAndHideContent(this.#currentStep, this.nextStep);
        if(this.#currentStep ===this.#steps[0])
        {
            createStepOne(game,step);
        }
        else if(this.#currentStep ===this.#steps[1])
        {
            createStepTwo(game,step);
        }
        else if(this.#currentStep ===this.#steps[2])
        {
            createStepThree(game,step);
        }
        else if (this.#currentStep ===this.#steps[3])
        {
            createStepFour(game,step);
        }
        else 
        {
            createStepOne(game,step);
            this.setStep=this.#steps[0];
        }
    }
}

module.exports = Stepper;