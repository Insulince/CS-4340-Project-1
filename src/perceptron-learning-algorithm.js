"use strict";

class PerceptronLearningAlgorithm {
    constructor(canvasController, trainingData, testingData) {
        this._maximumIterations = 10000;
        this._learningRate = 0.1;
        this._quantityOfInputVectors = trainingData.length;
        this._theta = 0;

        this._canvasController = canvasController;
        this._trainingData = trainingData;
        this._testingData = testingData;

        console.log(this.trainingData);
    }

    get maximumIterations() {
        return this._maximumIterations;
    }

    get learningRate() {
        return this._learningRate;
    }

    get quantityOfInputVectors() {
        return this._quantityOfInputVectors;
    }

    get theta() {
        return this._theta;
    }

    get canvasController() {
        return this._canvasController;
    }

    set canvasController(value) {
        this._canvasController = value;
    }

    get trainingData() {
        return this._trainingData;
    }

    set trainingData(value) {
        this._trainingData = value;
    }

    get testingData() {
        return this._testingData;
    }

    set testingData(value) {
        this._testingData = value;
    }

    invoke() {
        return new Promise(
            (resolve, reject) => {
                let featureVectors = [];
                this.trainingData.forEach(
                    (trainingDatum) => {
                        featureVectors.push(new FeatureVector(trainingDatum[0] === "A" ? 0 : 1, trainingDatum[1], trainingDatum[2]));
                    }
                );

                let s = "TRAIN:";

                featureVectors.forEach(
                    (featureVector) => {
                        s += " (";
                        s += (featureVector.classification === 0 ? "A" : "B");
                        s += ", ";
                        s += featureVector.featureX;
                        s += ", ";
                        s += featureVector.featureY;
                        s += ")";
                    }
                );

                s += "; TEST: (0,0)";

                console.log(s);

                let featureWeights = new FeatureWeights(PerceptronLearningAlgorithm.randomNumber(0, 1), PerceptronLearningAlgorithm.randomNumber(0, 1), PerceptronLearningAlgorithm.randomNumber(0, 1));

                let iteration = 0;
                let interval = setInterval(
                    () => {
                        iteration++;
                        let globalError = 0;
                        let localError = 0;

                        for (let currentInputVectorIndex = 0; currentInputVectorIndex < this.quantityOfInputVectors; currentInputVectorIndex++) {
                            let currentFeatureVector = featureVectors[currentInputVectorIndex];

                            let calculatedClassification = this.calculateClassification(featureWeights, currentFeatureVector);

                            localError = PerceptronLearningAlgorithm.calculateLocalError(currentFeatureVector.classification, calculatedClassification);
                            globalError += (localError !== 0 ? 1 : 0);

                            //TODO: ToFixed this, but be careful because it appears to affect the algorithm ( I suspect because in certain scenarios you are cutting off "actually-significant" digits).
                            featureWeights.weightX = featureWeights.weightX + this.learningRate * localError * currentFeatureVector.featureX;
                            featureWeights.weightY = featureWeights.weightY + this.learningRate * localError * currentFeatureVector.featureY;
                            featureWeights.weightBias = featureWeights.weightBias + this.learningRate * localError;
                        }
                        console.log("Iteration: " + iteration);

                        let standardFormAlgebraicString;
                        try {
                            standardFormAlgebraicString = featureWeights.weightX + "x+" + featureWeights.weightY + "y+" + featureWeights.weightBias + "=0";
                            console.log(standardFormAlgebraicString);
                            this.canvasController.clear();
                            drawBasePLASimulatorElements();
                            displayInputDataOnCanvas();
                            this.canvasController.setStrokeStyle("#ff0000");
                            this.canvasController.drawLineViaStandardFormAlgebraicString(standardFormAlgebraicString);
                        } catch (e) {
                            clearInterval(interval);
                            reject(e);
                        }

                        if (!this.endConditionNotSatisfied(globalError, iteration)) {
                            clearInterval(interval);
                            resolve(standardFormAlgebraicString);
                        }
                    },
                    100
                );

                console.log("\nDecision boundary equation: \"" + featureWeights.weightX + "x + " + featureWeights.weightY + "y + " + featureWeights.weightBias + " = 0" + "\"\n");
            }
        );
    }

    endConditionNotSatisfied(globalError, iteration) {
        return globalError !== 0 && iteration <= this.maximumIterations;
    }

    calculateClassification(featureWeights, featureVector) {
        let sum = featureVector.featureX * featureWeights.weightX + featureVector.featureY * featureWeights.weightY + featureWeights.weightBias;
        return (sum >= this.theta) ? 1 : 0;
    }

    static randomNumber(lowerBound, upperBound) {
        return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound));
    }

    static calculateLocalError(inputVectorClassification, calculatedClassification) {
        if ((inputVectorClassification === 0 && calculatedClassification === 0) || (inputVectorClassification === 1 && calculatedClassification === 1)) {
            return 0;
        } else if (inputVectorClassification === 1 && calculatedClassification === 0) {
            return 1;
        } else {
            return -1;
        }
    }
}

class FeatureVector {
    constructor(classification, featureX, featureY) {
        this._classificaiton = classification;
        this._featureX = featureX;
        this._featureY = featureY;
        this._classification = classification;
    }

    get classification() {
        return this._classification;
    }

    set classification(value) {
        this._classification = value;
    }

    get featureX() {
        return this._featureX;
    }

    set featureX(value) {
        this._featureX = value;
    }

    get featureY() {
        return this._featureY;
    }

    set featureY(value) {
        this._featureY = value;
    }
}

class FeatureWeights {
    constructor(weightX, weightY, weightBias) {
        this._weightX = weightX;
        this._weightY = weightY;
        this._weightBias = weightBias;
    }

    get weightX() {
        return this._weightX;
    }

    set weightX(value) {
        this._weightX = value;
    }

    get weightY() {
        return this._weightY;
    }

    set weightY(value) {
        this._weightY = value;
    }

    get weightBias() {
        return this._weightBias;
    }

    set weightBias(value) {
        this._weightBias = value;
    }
}