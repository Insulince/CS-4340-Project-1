"use strict";

class PerceptronLearningAlgorithm {
    constructor(trainingData, testingData) {
        this._trainingData = undefined;
        this._testingData = undefined;

        this._isTraining = false;
        this._isTesting = false;

        this._trainingData = trainingData;
        this._testingData = testingData;
    }


    get trainingData() {
        return this._trainingData;
    }

    get testingData() {
        return this._testingData;
    }

    get isTraining() {
        return this._isTraining;
    }

    get isTesting() {
        return this._isTesting;
    }

    set trainingData(trainingData) {
        this._trainingData = trainingData;
    }

    set testingData(testingData) {
        this._testingData = testingData;
    }

    set isTraining(isTraining) {
        this._isTraining = isTraining;
    }

    set isTesting(isTesting) {
        this._isTesting = isTesting;
    }

    beginTraining() {
        this.isTraining = true;
        this.isTesting = false;
    }
}