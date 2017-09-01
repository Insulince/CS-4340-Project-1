"use strict";

function setupPage() {
    sizeCanvas();
    fillDataInputWrapper();
}

function sizeCanvas() {
    let PLASimulatorWrapper = document.getElementById("pla-simulator-wrapper");

    console.log(PLASimulatorWrapper.offsetWidth);
    let PLASimulatorWrapperWidth = parseInt(PLASimulatorWrapper.offsetWidth);

    PLASimulatorWrapper.innerHTML = `
        <canvas id="pla-simulator" class="bordered" width="` + PLASimulatorWrapperWidth + `" height="` + PLASimulatorWrapperWidth + `"></canvas>
    `;

    setCanvasAxes();

    disableRunPLASimulatorButton();
}

function setCanvasAxes() {
    let PLASimulator = document.getElementById("pla-simulator");
    let ctx = PLASimulator.getContext('2d');

    ctx.strokeStyle = "#aaaaaa";

    ctx.beginPath();
    ctx.moveTo(PLASimulator.width / 2, 0);
    ctx.lineTo(PLASimulator.width / 2, PLASimulator.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, PLASimulator.height / 2);
    ctx.lineTo(PLASimulator.width, PLASimulator.height / 2);
    ctx.stroke();
}

function runPLASimulator() {

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
    let selectedInputMethod = $('input[name=data-input-method]:checked', '#data-input-selection-form').val();

    let dataInputWrapper = $("#data-input-wrapper");

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
    return ``;
}

function getManualHTML() {
    return `<textarea id="manual-data-input"></textarea>`;
}

function getFileHTML() {
    return `<input id="file-data-input" type="file" accept=".txt"/>`;
}

//TODO: Expand
let PRESET_DATA = [
    "TRAIN: (A, 0, 0); TEST: (0, 0)"
];

function loadData() {
    let data;

    fetchData().then(
        (contents) => {
            data = contents;

            if (validData(data)) {
                loadDataToCanvas(data);
                enableRunPLASimulatorButton();
            } else {
                disableRunPLASimulatorButton();
                alert("Invalid data!")
            }
        }
    );
}

function loadDataToCanvas(data) {
    let regexResult = /^ *TRAIN *: *((\( *[AB] *, *-?\d+ *, *-?\d+ *\) *)+) *; *TEST *: *((\( *-?\d+ *, *-?\d+ *\) *)+) *$/g.exec(data);
    let trainingData = regexResult[1].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (trainingDatum) => {
            return trainingDatum.split(",");
        }
    );
    let testData = regexResult[3].replace(/\s+/g, '').substring(1).slice(0, -1).split(")(").map(
        (testDatum) => {
            return testDatum.split(",");
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
    
    let displayedAxisXLimit = Math.ceil(axisXLimit * 1.1);
    let displayedAxisXLimitNeg = Math.floor(axisXLimitNeg * 1.1);
    let displayedAxisYLimit = Math.ceil(axisYLimit * 1.1);
    let displayedAxisYLimitNeg = Math.floor(axisYLimitNeg * 1.1);
    
    
    
    let PLASimulator = document.getElementById("pla-simulator");
    let ctx = PLASimulator.getContext('2d');

    ctx.font = "14px sans-serif";
    ctx.strokeStyle = "#cccccc";

    ctx.strokeText("0", PLASimulator.width / 2 + 5, PLASimulator.height / 2 - 5);
    ctx.strokeText(displayedAxisXLimit, PLASimulator.width - 35, PLASimulator.height / 2 - 5);
    ctx.strokeText(displayedAxisXLimitNeg, 3, PLASimulator.height / 2 - 5);
    ctx.strokeText(displayedAxisYLimit, PLASimulator.width / 2 + 5, 20);
    ctx.strokeText(displayedAxisYLimitNeg, PLASimulator.width / 2 + 5, PLASimulator.height - 10);

    let widthToPixelRatio = PLASimulator.width / (displayedAxisXLimit * 2);
    let heightToPixelRatio = PLASimulator.height / (displayedAxisYLimit * 2);

    if (widthToPixelRatio === Infinity) {
        widthToPixelRatio = 0;
    }
    if (heightToPixelRatio === Infinity) {
        heightToPixelRatio = 0;
    }

    console.log(widthToPixelRatio);
    console.log(heightToPixelRatio);

    trainingData.forEach(
        (trainingDatum) => {
            let symbol;
            let color;

            if (trainingDatum[0] === "A") {
                symbol = $("#class-A-symbol").val();
                color = $("#class-A-color").val();
            } else {
                symbol = $("#class-B-symbol").val();
                color = $("#class-B-color").val();            }

            ctx.strokeStyle = color;
            ctx.strokeText(symbol, (PLASimulator.width / 2) + (widthToPixelRatio * trainingDatum[1]) - 3, (PLASimulator.height / 2) - (heightToPixelRatio * trainingDatum[2]) + 4);
        }
    );

    //line length = sqrt(2) * PLASimulator.width / 2
}

function validData(data) {
    return /^ *TRAIN *: *((\( *[AB] *, *-?\d+ *, *-?\d+ *\) *)+) *; *TEST *: *((\( *-?\d+ *, *-?\d+ *\) *)+) *$/g.exec(data);
}

function fetchData() {
    return new Promise(
        (resolve, reject) => {
            let selectedInputMethod = $('input[name=data-input-method]:checked', '#data-input-selection-form').val();

            switch (selectedInputMethod) {
                case "preset":
                    resolve(PRESET_DATA[getSelectedPresetIndex()]);
                    break;
                case "manual":
                    resolve($("#manual-data-input").val());
                    break;
                case "file":
                    getContentsOfFile().then(
                        (contents) => {
                            resolve(contents);
                        }
                    );
                    break;
                default:
                    //TODO
                    break;
            }
        }
    );

}


//TODO: Implement
function getSelectedPresetIndex() {
    return 0;
}

function getContentsOfFile() {
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

            fr.readAsText(file);
        }
    );
}