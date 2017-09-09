"use strict";

class OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification {
    constructor(canvasController, inputData, options) {
        this._canvasController = canvasController;

        this._inputData = inputData;
        this._trainingData = inputData.trainingData;
        this._testingData = inputData.testingData;

        this._options = options;
        this._maximumIterations = options.maximumIterations;
        this._learningRate = options.learningRate;
        this._theta = options.theta;

        this._advanceRate = options.advanceRate;

        this._classificationOne = options.classificationOne;
        this._classificationTwo = options.classificationTwo;

        this._onAdvanceTraining = options.onAdvanceTraining;
        this._onAdvanceTesting = options.onAdvanceTesting;
        this._onComplete = options.onComplete;
        this._onStatusChange = options.onStatusChange;

        this._trainingIteration = 0;
        this._testingIteration = 0;
        this._status = "Not Started";
        this._hypothesisLineAsStandardFormAlgebraicString = undefined;

        this._twoDimensionalFeatureWeights = new TwoDimensionalFeatureWeights(OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1), OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1), OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1));
        this._trainingTwoDimensionalFeatureVectors = [];
        this._testingTwoDimensionalFeatureVectors = [];
        this._classifiedTestingTwoDimensionalFeatureVectors = [];

        this.loadInputData();

        this.plotTrainingTwoDimensionalFeatureVectors();
    }

    get canvasController() {
        return this._canvasController;
    }

    get inputData() {
        return this._inputData;
    }

    get trainingData() {
        return this._trainingData;
    }

    get testingData() {
        return this._testingData;
    }

    get options() {
        return this._options;
    }

    get maximumIterations() {
        return this._maximumIterations;
    }

    get learningRate() {
        return this._learningRate;
    }

    get theta() {
        return this._theta;
    }

    get advanceRate() {
        return this._advanceRate;
    }

    get classificationOne() {
        return this._classificationOne;
    }

    get classificationTwo() {
        return this._classificationTwo;
    }

    get onAdvanceTraining() {
        return this._onAdvanceTraining;
    }

    get onAdvanceTesting() {
        return this._onAdvanceTesting;
    }

    get onComplete() {
        return this._onComplete;
    }

    get onStatusChange() {
        return this._onStatusChange;
    }

    get trainingIteration() {
        return this._trainingIteration;
    }

    get testingIteration() {
        return this._testingIteration;
    }

    get status() {
        return this._status;
    }

    get hypothesisLineAsStandardFormAlgebraicString() {
        return this._hypothesisLineAsStandardFormAlgebraicString;
    }

    get twoDimensionalFeatureWeights() {
        return this._twoDimensionalFeatureWeights;
    }

    get trainingTwoDimensionalFeatureVectors() {
        return this._trainingTwoDimensionalFeatureVectors;
    }

    get testingTwoDimensionalFeatureVectors() {
        return this._testingTwoDimensionalFeatureVectors;
    }

    get classifiedTestingTwoDimensionalFeatureVectors() {
        return this._classifiedTestingTwoDimensionalFeatureVectors;
    }

    get interval() {
        return this._interval;
    }

    set canvasController(canvasController) {
        this._canvasController = canvasController;
    }

    set inputData(inputData) {
        this._inputData = inputData;
    }

    set trainingData(trainingData) {
        this._trainingData = trainingData;
    }

    set testingData(testingData) {
        this._testingData = testingData;
    }

    set options(options) {
        this._options = options;
    }

    set maximumIterations(maximumIterations) {
        this._maximumIterations = maximumIterations;
    }

    set learningRate(learningRate) {
        this._learningRate = learningRate;
    }

    set theta(theta) {
        this._theta = theta;
    }

    set advanceRate(advanceRate) {
        this._advanceRate = advanceRate;
    }

    set classificationOne(classificationOne) {
        this._classificationOne = classificationOne;
    }

    set classificationTwo(classificationTwo) {
        this._classificationTwo = classificationTwo;
    }

    set onAdvanceTraining(onAdvanceTraining) {
        this._onAdvanceTraining = onAdvanceTraining;
    }

    set onAdvanceTesting(onAdvanceTesting) {
        this._onAdvanceTesting = onAdvanceTesting;
    }

    set onComplete(onComplete) {
        this._onComplete = onComplete;
    }

    set onStatusChange(onStatusChange) {
        this._onStatusChange = onStatusChange;
    }

    set trainingIteration(trainingIteration) {
        this._trainingIteration = trainingIteration;
    }

    set testingIteration(testingIteration) {
        this._testingIteration = testingIteration;
    }

    set status(status) {
        this._status = status;

        if (this.onStatusChange) {
            this.onStatusChange(this._status);
        }
    }

    set hypothesisLineAsStandardFormAlgebraicString(hypothesisLineAsStandardFormAlgebraicString) {
        this._hypothesisLineAsStandardFormAlgebraicString = hypothesisLineAsStandardFormAlgebraicString;
    }

    set twoDimensionalFeatureWeights(twoDimensionalFeatureWeights) {
        this._twoDimensionalFeatureWeights = twoDimensionalFeatureWeights;
    }

    set trainingTwoDimensionalFeatureVectors(trainingTwoDimensionalFeatureVectors) {
        this._trainingTwoDimensionalFeatureVectors = trainingTwoDimensionalFeatureVectors;
    }

    set testingTwoDimensionalFeatureVectors(testingTwoDimensionalFeatureVectors) {
        this._testingTwoDimensionalFeatureVectors = testingTwoDimensionalFeatureVectors;
    }

    set classifiedTestingTwoDimensionalFeatureVectors(classifiedTestingTwoDimensionalFeatureVectors) {
        this._classifiedTestingTwoDimensionalFeatureVectors = classifiedTestingTwoDimensionalFeatureVectors;
    }

    set interval(interval) {
        this._interval = interval;
    }

    reset() {
        this.status = "Not Started";
        this.trainingIteration = 0;
        this.testingIteration = 0;
        this.hypothesisLineAsStandardFormAlgebraicString = undefined;

        this.twoDimensionalFeatureWeights = new TwoDimensionalFeatureWeights(OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1), OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1), OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification.randomNumber(0, 1));
        this.trainingTwoDimensionalFeatureVectors = [];
        this.testingTwoDimensionalFeatureVectors = [];
        this.classifiedTestingTwoDimensionalFeatureVectors = [];

        this.loadInputData();
        this.hypothesisLineAsStandardFormAlgebraicString = "undefined";
        this.onAdvanceTraining();
    }

    getClassAFeatures() {
        let classAFeatures = 0;

        this.trainingTwoDimensionalFeatureVectors.forEach(
            (trainingTwoDimensionalFeatureVector) => {
                if (trainingTwoDimensionalFeatureVector.classification.name === this.classificationOne.name) {
                    classAFeatures++;
                }
            }
        );

        this.testingTwoDimensionalFeatureVectors.forEach(
            (testingTwoDimensionalFeatureVector) => {
                if (testingTwoDimensionalFeatureVector.classification.name === this.classificationOne.name) {
                    classAFeatures++;
                }
            }
        );

        return classAFeatures;
    }

    getClassBFeatures() {
        let classBFeatures = 0;

        this.trainingTwoDimensionalFeatureVectors.forEach(
            (trainingTwoDimensionalFeatureVector) => {
                if (trainingTwoDimensionalFeatureVector.classification.name === this.classificationTwo.name) {
                    classBFeatures++;
                }
            }
        );

        this.testingTwoDimensionalFeatureVectors.forEach(
            (testingTwoDimensionalFeatureVector) => {
                if (testingTwoDimensionalFeatureVector.classification.name === this.classificationTwo.name) {
                    classBFeatures++;
                }
            }
        );

        return classBFeatures;
    }

    getClassifiedTestingFeatures() {
        let classifiedTestingFeatures = 0;

        this.testingTwoDimensionalFeatureVectors.forEach(
            (testingTwoDimensionalFeatureVector) => {
                if (testingTwoDimensionalFeatureVector.classification.name !== "") {
                    classifiedTestingFeatures++;
                }
            }
        );

        return classifiedTestingFeatures;
    }

    loadInputData() {
        this.loadTrainingData();
        this.loadTestingData();
    }

    loadTrainingData() {
        this.trainingData.forEach(
            (trainingDatum) => {
                this.trainingTwoDimensionalFeatureVectors.push(new TwoDimensionalFeatureVector(trainingDatum));
            }
        );
    }

    loadTestingData() {
        this.testingData.forEach(
            (testingDatum) => {
                this.testingTwoDimensionalFeatureVectors.push(new TwoDimensionalFeatureVector(testingDatum));
            }
        );
    }

    runTraining() {
        this.status = "Training";
        return new Promise(
            (resolve, reject) => {
                this.interval = setInterval(
                    () => {
                        try {
                            this.advanceOneTrainingPass();
                            this.onAdvanceTraining();

                            if (this.status !== "Training") {
                                clearInterval(this.interval);
                                resolve();
                            }
                        } catch (e) {
                            console.error(e);
                            clearInterval(this.interval);
                            this.status = "Error - Testing";
                            reject(e);
                        }
                    },
                    this.advanceRate
                );
            }
        );
    }

    advanceOneTrainingPass() {
        this.trainingIteration++;
        let globalError = 0;
        let localError = 0;

        this.trainingTwoDimensionalFeatureVectors.forEach(
            (trainingTwoDimensionalFeatureVector) => {
                let predictedClassificationForCurrentVectorBasedOnCurrentWeights = this.determineClassification(this.twoDimensionalFeatureWeights, trainingTwoDimensionalFeatureVector);

                localError = this.calculateLocalError(trainingTwoDimensionalFeatureVector.classification, predictedClassificationForCurrentVectorBasedOnCurrentWeights);
                globalError += (localError * localError);

                this.adjustWeights(trainingTwoDimensionalFeatureVector, localError);
            }
        );

        console.log("Iteration: " + this.trainingIteration);

        this.hypothesisLineAsStandardFormAlgebraicString = this.twoDimensionalFeatureWeights.weightX.toFixed(2) + "x+" + this.twoDimensionalFeatureWeights.weightY.toFixed(2) + "y+" + this.twoDimensionalFeatureWeights.weightBias.toFixed(2) + "=0";
        this.drawHypothesisLine();

        if (this.endConditionSatisfied(globalError)) {
            this.status = "Finished Training";

            clearInterval(this.interval);
        }
    }

    runTesting() {
        this.status = "Testing";
        this.testingIteration = 0;
        return new Promise(
            (resolve, reject) => {
                this.interval = setInterval(
                    () => {
                        try {
                            this.advanceOneTestingPass();
                            this.onAdvanceTesting();

                            if (this.status !== "Testing") {
                                clearInterval(this.interval);
                                this.onComplete();
                                resolve();
                            }
                        } catch (e) {
                            console.error(e);
                            clearInterval(this.interval);
                            this.status = "Error - Testing";
                            reject(e);
                        }
                    },
                    this.advanceRate
                );
            }
        );
    }

    advanceOneTestingPass() {
        this.plotClassifiedTestingTwoDimensionalFeatureVectors();

        this.classifiedTestingTwoDimensionalFeatureVectors.push(this.classifyTwoDimensionalFeatureVector(this.testingTwoDimensionalFeatureVectors[this.testingIteration]));

        this.plotTwoDimensionalFeatureVector(this.classifiedTestingTwoDimensionalFeatureVectors[this.classifiedTestingTwoDimensionalFeatureVectors.length - 1], "#0000ff");

        this.testingIteration++;
        console.log("Classified testing vector " + this.testingIteration + " of " + this.testingTwoDimensionalFeatureVectors.length);

        if (this.classifiedTestingTwoDimensionalFeatureVectors.length === this.testingTwoDimensionalFeatureVectors.length) {
            console.log("Yuh?");
            this.status = "Finished Testing";

            clearInterval(this.interval);
        }
    }

    classifyTwoDimensionalFeatureVector(twoDimensionalFeatureVector) {
        console.log(twoDimensionalFeatureVector);

        let sum = twoDimensionalFeatureVector.featureX * this.twoDimensionalFeatureWeights.weightX + twoDimensionalFeatureVector.featureY * this.twoDimensionalFeatureWeights.weightY + this.twoDimensionalFeatureWeights.weightBias;
        twoDimensionalFeatureVector.classification = (sum >= this.theta) ? this.classificationOne : this.classificationTwo;

        return twoDimensionalFeatureVector;
    }

    drawHypothesisLine() {
        this.canvasController.clear();
        drawBasePLASimulatorElements();
        this.plotTrainingTwoDimensionalFeatureVectors();
        if (this.status === "Training") {
            this.canvasController.setStrokeStyle("#ff0000");
        } else {
            this.canvasController.setStrokeStyle("#0000ff");
        }
        this.canvasController.drawLineViaStandardFormAlgebraicString(this.hypothesisLineAsStandardFormAlgebraicString);

    }

    adjustWeights(trainingTwoDimensionalFeatureVector, localError) {
        this.twoDimensionalFeatureWeights.weightX = this.twoDimensionalFeatureWeights.weightX + this.learningRate * localError * trainingTwoDimensionalFeatureVector.featureX;
        this.twoDimensionalFeatureWeights.weightY = this.twoDimensionalFeatureWeights.weightY + this.learningRate * localError * trainingTwoDimensionalFeatureVector.featureY;
        this.twoDimensionalFeatureWeights.weightBias = this.twoDimensionalFeatureWeights.weightBias + this.learningRate * localError;
    }

    endConditionSatisfied(globalError) {
        return globalError === 0 || this.trainingIteration > this.maximumIterations;
    }

    determineClassification(featureWeights, twoDimensionalFeatureVector) {
        let sum = twoDimensionalFeatureVector.featureX * featureWeights.weightX + twoDimensionalFeatureVector.featureY * featureWeights.weightY + featureWeights.weightBias;
        return (sum >= this.theta) ? this.classificationOne : this.classificationTwo;
    }

    plotTrainingTwoDimensionalFeatureVectors() {
        this.trainingTwoDimensionalFeatureVectors.forEach(
            (trainingTwoDimensionalFeatureVector) => {
                this.plotTwoDimensionalFeatureVector(trainingTwoDimensionalFeatureVector);
            }
        );
    }

    plotTwoDimensionalFeatureVector(twoDimensionalFeatureVector, color) {
        let classificationSymbol;
        let classificationColor;

        if (twoDimensionalFeatureVector.classification.name === this.classificationOne.name) {
            classificationSymbol = this.classificationOne.symbol;
            classificationColor = this.classificationOne.color;
        } else if (twoDimensionalFeatureVector.classification.name === this.classificationTwo.name) {
            classificationSymbol = this.classificationTwo.symbol;
            classificationColor = this.classificationTwo.color;
        } else {
            throw new Error("Unable to determine symbol for feature vector with unknown classification: \"" + twoDimensionalFeatureVector.classification.name + "\".");
        }

        const position = {
            x: twoDimensionalFeatureVector.featureX,
            y: -twoDimensionalFeatureVector.featureY
        };

        if (!color) {
            this.canvasController.setStrokeStyle(classificationColor);
        } else {
            this.canvasController.setStrokeStyle(color);
        }
        this.canvasController.drawPointAt(classificationSymbol, position);
    }

    plotClassifiedTestingTwoDimensionalFeatureVectors() {
        this.classifiedTestingTwoDimensionalFeatureVectors.forEach(
            (classifiedTestingTwoDimensionalFeatureVector) => {
                this.plotTwoDimensionalFeatureVector(classifiedTestingTwoDimensionalFeatureVector);
            }
        );
    }

    calculateLocalError(actualClassification, predictedClassification) {
        if ((actualClassification.name === this.classificationOne.name && predictedClassification.name === this.classificationOne.name) || (actualClassification.name === this.classificationTwo.name && predictedClassification.name === this.classificationTwo.name)) {
            return 0;
        } else if (actualClassification.name === this.classificationOne.name && predictedClassification.name === this.classificationTwo.name) {
            return 1;
        } else if (actualClassification.name === this.classificationTwo.name && predictedClassification.name === this.classificationOne.name) {
            return -1;
        } else {
            throw new Error("Unrecognized classifications passed to local error calculation function. Actual classification value: \"" + actualClassification.name + "\", predicted classification value: \"" + predictedClassification.name + "\".");
        }
    }

    static randomNumber(lowerBound, upperBound) {
        return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound + 1));
    }
}