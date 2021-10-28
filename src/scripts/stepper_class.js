class Stepper {
    #steps;
    #currentStep;

    set step(step) {
        this.#currentStep = step;
    }
    get step() {
        return this.#currentStep;
    }
}

module.exports = Stepper;