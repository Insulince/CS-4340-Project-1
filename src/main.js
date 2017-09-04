"use strict";

//TODO: Expand
const PRESET_DATA = [
    "TRAIN: (A, 0, 0); TEST: (0, 0)"
];
const INPUT_DATA_FORMAT_REGEX = /^ *TRAIN(ING)? *(DATA)? *: *((\( *[AB] *, *-?\d+ *, *-?\d+ *\) *)+) *; *TEST(ING)? *(DATA)? *: *((\( *-?\d+ *, *-?\d+ *\) *)+) *$/g;

let canvasController = undefined;

let inputData = undefined;

function setupPage() {
    generateRandomTestData();

    canvasController = new CanvasController(document.getElementById("pla-simulator"));
    drawBasePLASimulatorElements();

    disableRunPLASimulatorButton();
    fillDataInputWrapper();
}

//TODO Unused???
function resize() {
    canvasController.resize(canvasController.canvas.parentElement.offsetWidth, canvasController.canvas.parentElement.offsetWidth);

    drawBasePLASimulatorElements();
    displayInputDataOnCanvas();
}

function drawBasePLASimulatorElements() {
    drawPLASimulatorAxes();
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
                //TODO Instantiate the future PLA object here?
                inputData = fetchedData;

                canvasController.clear();
                drawBasePLASimulatorElements();

                displayInputDataOnCanvas();
                enableRunPLASimulatorButton();
            } else {
                inputData = undefined;

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

let displayedAxisLimit = undefined;
let displayedAxisLimitNeg = undefined;

function displayInputDataOnCanvas() {
    if (inputData) {
        let regexResult = resetRegularExpression(INPUT_DATA_FORMAT_REGEX).exec(inputData);

        let trainingData = regexResult[3].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
            (trainingDatum) => {
                return trainingDatum.split(",");
            }
        );
        trainingData.forEach(
            (trainingDatum) => {
                trainingDatum[1] = parseInt(trainingDatum[1]);
                trainingDatum[2] = parseInt(trainingDatum[2]);
            }
        );
        let testData = regexResult[7].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
            (testDatum) => {
                return testDatum.split(",");
            }
        );
        testData.forEach(
            (testDatum) => {
                testDatum[0] = parseInt(testDatum[0]);
                testDatum[1] = parseInt(testDatum[1]);
            }
        );

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
        testData.forEach(
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


        let PLASimulator = document.getElementById("pla-simulator");
        let ctx = PLASimulator.getContext('2d');

        ctx.font = "14px sans-serif";
        ctx.strokeStyle = "#cccccc";

        ctx.strokeText("0", PLASimulator.width / 2 + 5, PLASimulator.height / 2 - 5);
        ctx.strokeText(displayedAxisLimit.toString(), PLASimulator.width - 35, PLASimulator.height / 2 - 5);
        ctx.strokeText(displayedAxisLimitNeg.toString(), 3, PLASimulator.height / 2 - 5);
        ctx.strokeText(displayedAxisLimit.toString(), PLASimulator.width / 2 + 5, 20);
        ctx.strokeText(displayedAxisLimitNeg.toString(), PLASimulator.width / 2 + 5, PLASimulator.height - 10);

        let widthToPixelRatio = PLASimulator.width / (displayedAxisLimit * 2);
        let heightToPixelRatio = PLASimulator.height / (displayedAxisLimit * 2);

        if (widthToPixelRatio === Infinity) {
            widthToPixelRatio = 0;
        }
        if (heightToPixelRatio === Infinity) {
            heightToPixelRatio = 0;
        }

        trainingData.forEach(
            (trainingDatum) => {
                let symbol;
                let color;

                if (trainingDatum[0] === "A") {
                    symbol = $("#class-A-symbol").val();
                    color = $("#class-A-color").val();
                } else {
                    symbol = $("#class-B-symbol").val();
                    color = $("#class-B-color").val();
                }

                ctx.strokeStyle = color;
                ctx.strokeText(symbol, (PLASimulator.width / 2) + (widthToPixelRatio * trainingDatum[1]) - 3, (PLASimulator.height / 2) - (heightToPixelRatio * trainingDatum[2]) + 4);
            }
        );
    }
}

function runPLASimulator() {

}