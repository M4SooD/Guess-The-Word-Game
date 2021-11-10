class Timer {
    #time;
    #timer; //10 will  run it every 100th of a second

    constructor(time) {
        this.#time = time;
        this.#timer = time;
    }

    set timer(time) {
        this.#time = time;
    }

    downloadTimer(id,game, stepper) {
        if (this.#timer === 0) {
            stepper.goToNextStep(game,stepper);
            clearInterval() ;
        }
        document.getElementById(id).value = this.#time - this.#timer;
        this.#timer -= 1;
    }

    RemainingTime() {

    }

    memorizingTimer() {

    }

    responseTime() {

    }
}

module.exports = Timer;