"use strict";

//TODO: Expand
const PRESET_DATA = [
    "TRAIN: (A, 0, 0); TEST: (0, 0)"
];
const INPUT_DATA_FORMAT_REGEX = /^ *TRAIN(ING)? *(DATA)? *: *((\( *[AB] *, *-?\d+ *, *-?\d+ *\) *)+) *; *TEST(ING)? *(DATA)? *: *((\( *-?\d+ *, *-?\d+ *\) *)+) *$/g;

let canvasController = undefined;
let PLA = undefined;
let displayedAxisLimit = undefined;
let displayedAxisLimitNeg = undefined;

function setupPage() {
    generateRandomTestData();

    canvasController = new CanvasController(document.getElementById("pla-simulator"));
    drawBasePLASimulatorElements();

    changeActionButtonText("Run Training Phase");
    disableRunPLASimulatorButton();
    fillDataInputWrapper();
}

function resize() {
    canvasController.resize(canvasController.canvas.parentElement.offsetWidth, canvasController.canvas.parentElement.offsetWidth);

    drawBasePLASimulatorElements();
    displayAxisLimits();
    if (PLA) {
        if (PLA.hypothesisLineAsStandardFormAlgebraicString) {
            PLA.drawHypothesisLine();
        }
        PLA.plotTrainingTwoDimensionalFeatureVectors();
        PLA.plotClassifiedTestingTwoDimensionalFeatureVectors();
    }
}

function drawBasePLASimulatorElements() {
    drawPLASimulatorAxes();
    displayAxisLimits();
}

function drawPLASimulatorAxes() {
    canvasController.setStrokeStyle("#aaaaaa");

    canvasController.drawLineViaFromTo(canvasController.leftMiddleCoordinate, canvasController.rightMiddleCoordinate);
    canvasController.drawLineViaFromTo(canvasController.centerTopCoordinate, canvasController.centerBottomCoordinate);
}

function enableRunPLASimulatorButton() {
    $('#pla-simulator-run-button').prop(
        'disabled',
        () => {
            return false;
        }
    );
}

function disableRunPLASimulatorButton() {
    $('#pla-simulator-run-button').prop(
        'disabled',
        () => {
            return true;
        }
    );
}

function fillDataInputWrapper() {
    let dataInputWrapper = $("#data-input-wrapper");
    let selectedInputMethod = $('input[name=data-input-method]:checked', '#data-input-selection-form').val();

    switch (selectedInputMethod) {
        case "preset":
            dataInputWrapper.html(getPresetHTML());
            break;
        case "manual":
            dataInputWrapper.html(getManualHTML());
            break;
        case "file":
            dataInputWrapper.html(getFileHTML());
            break;
        default:
            //TODO
            break;
    }
}

function getPresetHTML() {
    return ``; //TODO
}

function getManualHTML() {
    return `<textarea id="manual-data-input"></textarea>`;
}

function getFileHTML() {
    return `<input id="file-data-input" type="file" accept=".txt"/>`;
}

function loadInputDataIntoPLASimulator() {
    retrieveInputDataFromInputMethod().then(
        (fetchedData) => {
            if (validInputData(fetchedData)) {
                canvasController.clear();
                drawBasePLASimulatorElements();

                let inputData = parseInputData(fetchedData);
                let options = {
                    maximumIterations: 100,
                    learningRate: 0.1,
                    theta: 0,
                    advanceRate: 100,
                    classificationOne: new Classification("A", "•", "#00ff00"),
                    classificationTwo: new Classification("B", "•", "#ff0000"),
                    onAdvance: () => {
                        console.log("Advanced.");
                    },
                    onComplete: () => {
                        console.log("Completed.");
                    }
                };

                getAxisLimits(inputData.trainingData, inputData.testingData);
                displayAxisLimits();

                PLA = new OfflineTwoDimensionalPerceptronLearningAlgorithmForBinaryClassification(canvasController, inputData, options);

                enableRunPLASimulatorButton();
            } else {
                alert("Invalid data!"); //TODO?
                disableRunPLASimulatorButton();
            }
        }
    ).catch(
        () => {
            //TODO
        }
    );
}

function retrieveInputDataFromInputMethod() {
    return new Promise(
        (resolve, reject) => {
            let selectedInputMethod = $('input[name=data-input-method]:checked', '#data-input-selection-form').val();

            switch (selectedInputMethod) {
                case "preset":
                    resolve(getSelectedDataInputPresetContents());
                    break;
                case "manual":
                    resolve(getManualDataInputContents());
                    break;
                case "file":
                    getDataInputFileContents().then(
                        (contents) => {
                            resolve(contents);
                        }
                    ).catch(
                        () => {
                            reject(); //TODO
                        }
                    );
                    break;
                default:
                    reject(); //TODO
                    break;
            }
        }
    );
}

function validInputData(inputData) {
    return resetRegularExpression(INPUT_DATA_FORMAT_REGEX).exec(inputData);
}

function getSelectedDataInputPresetContents() {
    return PRESET_DATA[getSelectedDataInputPresetIndex()];
}

//TODO: Implement
function getSelectedDataInputPresetIndex() {
    return 0;
}

function getManualDataInputContents() {
    return $("#manual-data-input").val();
}

function getDataInputFileContents() {
    return new Promise(
        (resolve, reject) => {
            let file = $("#file-data-input")[0].files[0];
            let fr = new FileReader();
            let contents = "";

            fr.onload = () => {
                contents += fr.result;
            };
            fr.onloadend = () => {
                resolve(contents);
            };
            fr.onerror = (error) => {
                reject(error);
            };

            fr.readAsText(file);
        }
    );
}

function parseInputData(rawData) {
    let inputData = {
        trainingData: undefined,
        testingData: undefined
    };

    let regexResult = resetRegularExpression(INPUT_DATA_FORMAT_REGEX).exec(rawData);

    let trainingData = regexResult[3].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (trainingDatum) => {
            return trainingDatum.split(",");
        }
    );
    trainingData.forEach(
        (trainingDatum) => {
            trainingDatum[1] = parseFloat(trainingDatum[1]);
            trainingDatum[2] = parseFloat(trainingDatum[2]);
        }
    );

    let testingData = regexResult[7].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (testDatum) => {
            return testDatum.split(",");
        }
    );
    testingData.forEach(
        (testingDatum) => {
            testingDatum[2] = parseFloat(testingDatum[1]);
            testingDatum[1] = parseFloat(testingDatum[0]);
            testingDatum[0] = "";
        }
    );

    inputData.trainingData = trainingData;
    inputData.testingData = testingData;

    return inputData;
}

function getAxisLimits(trainingData, testingData) {
    let maxX = -Infinity;
    let minX = Infinity;
    let maxY = -Infinity;
    let minY = Infinity;

    trainingData.forEach(
        (trainingDatum) => {
            if (trainingDatum[1] > maxX) {
                maxX = trainingDatum[1];
            }
            if (trainingDatum[1] < minX) {
                minX = trainingDatum[1];
            }
            if (trainingDatum[2] > maxY) {
                maxY = trainingDatum[2];
            }
            if (trainingDatum[2] < minY) {
                minY = trainingDatum[2];
            }
        }
    );
    testingData.forEach(
        (testDatum) => {
            if (testDatum[0] > maxX) {
                maxX = testDatum[0];
            }
            if (testDatum[0] < minX) {
                minX = testDatum[0];
            }
            if (testDatum[1] > maxY) {
                maxY = testDatum[1];
            }
            if (testDatum[1] < minY) {
                minY = testDatum[1];
            }
        }
    );

    let axisXLimit;
    let axisXLimitNeg;
    let axisYLimit;
    let axisYLimitNeg;
    if (Math.abs(maxX) >= Math.abs(minX)) {
        axisXLimit = Math.abs(maxX);
    } else {
        axisXLimit = Math.abs(minX);
    }
    axisXLimitNeg = -axisXLimit;

    if (Math.abs(maxY) >= Math.abs(minY)) {
        axisYLimit = Math.abs(maxY);
    } else {
        axisYLimit = Math.abs(minY);
    }
    axisYLimitNeg = -axisYLimit;

    if (axisXLimit >= axisYLimit) {
        displayedAxisLimit = Math.ceil(axisXLimit * 1.1);
        displayedAxisLimitNeg = Math.floor(axisXLimitNeg * 1.1);
    } else {
        displayedAxisLimit = Math.ceil(axisYLimit * 1.1);
        displayedAxisLimitNeg = Math.floor(axisYLimitNeg * 1.1);
    }
}

function displayAxisLimits() {
    if (displayedAxisLimit) {
        canvasController.ctx.font = "14px sans-serif";
        canvasController.setStrokeStyle("#cccccc");

        canvasController.drawTextAt("0", {x: canvasController.canvas.width / 2 + 5, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimit.toString(), {x: canvasController.canvas.width - 30, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimitNeg.toString(), {x: 2, y: canvasController.canvas.height / 2 - 5});
        canvasController.drawTextAt(displayedAxisLimit.toString(), {x: canvasController.canvas.width / 2 + 5, y: 14});
        canvasController.drawTextAt(displayedAxisLimitNeg.toString(), {x: canvasController.canvas.width / 2 + 5, y: canvasController.canvas.height - 7});
    }
}

function runPLASimulator() {
    if (PLA) {
        if (PLA.status === "Not Started") {
            canvasController.clear();
            drawBasePLASimulatorElements();
            displayAxisLimits();
            PLA.plotTrainingTwoDimensionalFeatureVectors();

            PLA.runTraining().then(
                () => {
                    console.log("PLA Training Complete. Final equation: \"" + PLA.hypothesisLineAsStandardFormAlgebraicString + "\"");

                    canvasController.clear();
                    drawBasePLASimulatorElements();
                    PLA.plotTrainingTwoDimensionalFeatureVectors();
                    canvasController.setStrokeStyle("#0000ff");
                    canvasController.drawLineViaStandardFormAlgebraicString(PLA.hypothesisLineAsStandardFormAlgebraicString);

                    changeActionButtonText("Run Test Phase");
                }
            ).catch(
                (error) => {
                    //TODO
                }
            );
        } else if (PLA.status === "Finished Training") {
            canvasController.clear();
            drawBasePLASimulatorElements();
            displayAxisLimits();
            PLA.drawHypothesisLine();
            PLA.plotTrainingTwoDimensionalFeatureVectors();

            PLA.runTesting().then(
                () => {
                    console.log("PLA Testing Complete.");

                    canvasController.clear();
                    drawBasePLASimulatorElements();
                    PLA.plotTrainingTwoDimensionalFeatureVectors();
                    PLA.plotClassifiedTestingTwoDimensionalFeatureVectors();
                    canvasController.setStrokeStyle("#0000ff");
                    canvasController.drawLineViaStandardFormAlgebraicString(PLA.hypothesisLineAsStandardFormAlgebraicString);
                }
            ).catch(
                (error) => {
                    //TODO
                }
            );
        }
    }
}

function drawLineFromSlopeString(string) {
    canvasController.drawLineViaSlopeInterceptFormAlgebraicString(string);
}

// I have come to learn that regular expression objects are stateful. This is, apparently, very useful. Not in my eyes, this caused me a lot of grief. This is how I eliminate the state for consistent results.
function resetRegularExpression(regularExpression) {
    regularExpression.lastIndex = 0;
    return regularExpression;
}

function generateRandomTestData() {
    let output = "TRAINING DATA:";

    for (let i = 0; i < 25; i++) {
        output += " (A, ";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ", ";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ")";
    }

    for (let i = 0; i < 25; i++) {
        output += " (B, ";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ", ";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ")";
    }

    output += "; TESTING DATA:";

    for (let i = 0; i < 30; i++) {
        output += " (";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ", ";
        output += (Math.floor(Math.random() * 50) * (Math.random() >= 0.5 ? 1 : -1)).toString();
        output += ")";
    }

    console.log(output);
}

function changeActionButtonText(to) {
    console.log(to);
    $("#pla-simulator-run-button").html(to);
}