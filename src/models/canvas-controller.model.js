"use strict";

class CanvasController {
    constructor(canvas) {
        this._canvas = undefined;
        this._ctx = undefined;

        this._leftTopCoordinatethis = undefined;
        this._leftMiddleCoordinatethis = undefined;
        this._leftBottomCoordinatethis = undefined;
        this._centerTopCoordinatethis = undefined;
        this._centerMiddleCoordinatethis = undefined;
        this._centerBottomCoordinatethis = undefined;
        this._rightTopCoordinatethis = undefined;
        this._rightMiddleCoordinatethis = undefined;
        this._rightBottomCoordinatethis = undefined;

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.setCoordinatePlaneGlobals();
    }

    get canvas() {
        return this._canvas;
    }

    get ctx() {
        return this._ctx;
    }

    get leftTopCoordinate() {
        return this._leftTopCoordinate;
    }

    get leftMiddleCoordinate() {
        return this._leftMiddleCoordinate;
    }

    get leftBottomCoordinate() {
        return this._leftBottomCoordinate;
    }

    get centerTopCoordinate() {
        return this._centerTopCoordinate;
    }

    get centerMiddleCoordinate() {
        return this._centerMiddleCoordinate;
    }

    get centerBottomCoordinate() {
        return this._centerBottomCoordinate;
    }

    get rightTopCoordinate() {
        return this._rightTopCoordinate;
    }

    get rightMiddleCoordinate() {
        return this._rightMiddleCoordinate;
    }

    get rightBottomCoordinate() {
        return this._rightBottomCoordinate;
    }

    set canvas(canvas) {
        this._canvas = canvas;
    }

    set ctx(ctx) {
        this._ctx = ctx;
    }

    set leftTopCoordinate(leftTopCoordinate) {
        this._leftTopCoordinate = leftTopCoordinate;
    }

    set leftMiddleCoordinate(leftMiddleCoordinate) {
        this._leftMiddleCoordinate = leftMiddleCoordinate;
    }

    set leftBottomCoordinate(leftBottomCoordinate) {
        this._leftBottomCoordinate = leftBottomCoordinate;
    }

    set centerTopCoordinate(centerTopCoordinate) {
        this._centerTopCoordinate = centerTopCoordinate;
    }

    set centerMiddleCoordinate(centerMiddleCoordinate) {
        this._centerMiddleCoordinate = centerMiddleCoordinate;
    }

    set centerBottomCoordinate(centerBottomCoordinate) {
        this._centerBottomCoordinate = centerBottomCoordinate;
    }

    set rightTopCoordinate(rightTopCoordinate) {
        this._rightTopCoordinate = rightTopCoordinate;
    }

    set rightMiddleCoordinate(rightMiddleCoordinate) {
        this._rightMiddleCoordinate = rightMiddleCoordinate;
    }

    set rightBottomCoordinate(rightBottomCoordinate) {
        this._rightBottomCoordinate = rightBottomCoordinate;
    }

    setCoordinatePlaneGlobals() {
        this.leftTopCoordinate = {
            x: 0,
            y: 0
        };
        this.leftMiddleCoordinate = {
            x: 0,
            y: this.canvas.offsetHeight / 2
        };
        this.leftBottomCoordinate = {
            x: 0,
            y: this.canvas.offsetHeight
        };
        this.centerTopCoordinate = {
            x: this.canvas.offsetWidth / 2,
            y: 0
        };
        this.centerMiddleCoordinate = {
            x: this.canvas.offsetWidth / 2,
            y: this.canvas.offsetHeight / 2
        };
        this.centerBottomCoordinate = {
            x: this.canvas.offsetWidth / 2,
            y: this.canvas.offsetHeight
        };
        this.rightTopCoordinate = {
            x: this.canvas.offsetWidth,
            y: 0
        };
        this.rightMiddleCoordinate = {
            x: this.canvas.offsetWidth,
            y: this.canvas.offsetHeight / 2
        };
        this.rightBottomCoordinate = {
            x: this.canvas.offsetWidth,
            y: this.canvas.offsetHeight
        };
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    }

    resize(width, height) {
        this.clear();

        this.canvas.width = width;
        this.canvas.height = height;

        this.setCoordinatePlaneGlobals();
    }

    setStrokeStyle(color) {
        this.ctx.strokeStyle = color
    }

    drawPointAt(text, position) {
        let pixelRatio = this.centerMiddleCoordinate.x / displayedAxisLimit;

        if (pixelRatio === Infinity) {
            pixelRatio = 0;
        }

        this.ctx.strokeText(text, (this.canvas.width / 2) + (pixelRatio * position.x) - 1, (this.canvas.height / 2) + (pixelRatio * position.y) + 4);
    }

    drawTextAt(text, position) {
        this.ctx.strokeText(text, position.x, position.y);
    }

    drawLineViaFromTo(from, to) {
        this.ctx.beginPath();
        this.ctx.moveTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }

    drawLineViaStandardFormAlgebraicString(standardFormAlgebraicString) {
        if (this.isStandardFormAlgebraicString(standardFormAlgebraicString)) {
            if (this.standardFormAlgebraicStringDoesNotViolateBiasRule(standardFormAlgebraicString)) {
                this.drawLineViaSlopeInterceptFormAlgebraicString(this.convertStandardFormAlgebraicStringToSlopeInterceptFormAlgebraicString(standardFormAlgebraicString));
            } else {
                throw new Error("Cannot plot standard form algebraic string \"" + standardFormAlgebraicString + "\" due to bias, no axis limits have been set yet so a bias has no graphical meaning. Please set axis limits first.");
            }
        } else {
            throw new Error("Provided string is not a standard form algebraic string! \"" + standardFormAlgebraicString + "\"");
        }
    }

    isStandardFormAlgebraicString(standardFormAlgebraicString) {
        return /^(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[yY]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)=0$/.exec(standardFormAlgebraicString.replace(/\s+/g, ''));
    }

    standardFormAlgebraicStringDoesNotViolateBiasRule(standardFormAlgebraicString) {
        standardFormAlgebraicString = standardFormAlgebraicString.replace(/\s+/g, '');
        let regexResult = /^(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[yY]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)=0$/.exec(standardFormAlgebraicString);

        if (regexResult[13]) { //has bias
            if (!displayedAxisLimit) { //has no axis limit
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    convertStandardFormAlgebraicStringToSlopeInterceptFormAlgebraicString(standardFormAlgebraicString) {
        standardFormAlgebraicString = standardFormAlgebraicString.replace(/\s+/g, '');
        let regexResult = /^((-)?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+((-)?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[yY]\+((-)?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)=0$/.exec(standardFormAlgebraicString);

        let IS_VERY_BIG = [false, false, false];
        let IS_VERY_SMALL = [false, false, false];
        let IS_NEGATIVE = [1, 1, 1];

        if (regexResult[2]) {
            IS_NEGATIVE[0] = -1;
        }
        if (regexResult[9]) {
            IS_NEGATIVE[1] = -1;
        }
        if (regexResult[16]) {
            IS_NEGATIVE[2] = -1;
        }

        if (regexResult[5]) {
            if (regexResult[5].match(/-/)) {
                IS_VERY_SMALL[0] = true;
            } else {
                IS_VERY_BIG[0] = true;
            }
        }

        if (regexResult[12]) {
            if (regexResult[12].match(/-/)) {
                IS_VERY_SMALL[1] = true;
            } else {
                IS_VERY_BIG[1] = true;
            }
        }

        if (regexResult[19]) {
            if (regexResult[19].match(/-/)) {
                IS_VERY_SMALL[2] = true;
            } else {
                IS_VERY_BIG[2] = true;
            }
        }

        let A = IS_VERY_BIG[0] ? (90000000 * IS_NEGATIVE[0]) : (IS_VERY_SMALL[0] ? (0.00000001 * IS_NEGATIVE[0]) : parseFloat(regexResult[1]));
        let B = IS_VERY_BIG[1] ? (90000000 * IS_NEGATIVE[1]) : (IS_VERY_SMALL[1] ? (0.00000001 * IS_NEGATIVE[1]) : parseFloat(regexResult[8]));
        let C = IS_VERY_BIG[2] ? (90000000 * IS_NEGATIVE[2]) : (IS_VERY_SMALL[2] ? (0.00000001 * IS_NEGATIVE[2]) : parseFloat(regexResult[15]));


        let M = (-1 * A) / B;
        let D = (-1 * C) / B;

        if (M === Infinity) {
            M = 99999;
        }
        if (M === -Infinity) {
            M = -99999;
        }
        if (isNaN(M)) {
            M = 0;
        }
        if (D === Infinity) {
            D = 99999;
        }
        if (D === -Infinity) {
            D = -99999;
        }
        if (isNaN(D)) {
            D = 0;
        }

        let slopeInterceptFormAlgebraicString = "y=" + M + "x+" + D;

        return slopeInterceptFormAlgebraicString;
    }

    drawLineViaSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString) {
        if (this.isSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString)) {
            if (this.slopeInterceptFormAlgebraicStringDoesNotViolateBiasRule(slopeInterceptFormAlgebraicString)) {
                let leftmostCoordinateForThisLine = this.getLeftmostCoordinateForSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString);
                let rightmostCoordinateForThisLine = this.getRightmostCoordinateForSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString);

                this.drawLineViaFromTo(leftmostCoordinateForThisLine, rightmostCoordinateForThisLine);
            } else {
                throw new Error("Cannot plot slope-intercept form algebraic string \"" + slopeInterceptFormAlgebraicString + "\" due to bias, no axis limits have been set yet so a bias has no graphical meaning. Please set axis limits first.");
            }
        } else {
            throw new Error("Provided string is not a slope-intercept form algebraic string! \"" + slopeInterceptFormAlgebraicString + "\"");
        }
    }

    isSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString) {
        return /^[yY]=-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?[xX]\+-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?$/.exec(slopeInterceptFormAlgebraicString.replace(/\s+/g, ''));
    }

    slopeInterceptFormAlgebraicStringDoesNotViolateBiasRule(slopeInterceptFormAlgebraicString) {
        slopeInterceptFormAlgebraicString = slopeInterceptFormAlgebraicString.replace(/\s+/g, '');
        let regexResult = /^[yY]=(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)$/.exec(slopeInterceptFormAlgebraicString);

        if (regexResult[7]) { //has bias
            if (!displayedAxisLimit) { //has no axis limit
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    getLeftmostCoordinateForSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString) {
        slopeInterceptFormAlgebraicString = slopeInterceptFormAlgebraicString.replace(/\s+/g, '');
        let regexResult = /^[yY]=(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)$/.exec(slopeInterceptFormAlgebraicString);

        let M = parseFloat(regexResult[1]);
        let B = parseFloat(regexResult[7]);
        let pixelRatio = this.centerMiddleCoordinate.x / displayedAxisLimit;

        let leftmostOrdinalXValue = this.leftMiddleCoordinate.x - this.centerMiddleCoordinate.x;

        let leftmostCoordinateForThisLine = {
            x: this.leftMiddleCoordinate.x,
            y: ((M * leftmostOrdinalXValue + (B * pixelRatio)) - this.centerMiddleCoordinate.x) * -1
        };

        return leftmostCoordinateForThisLine;
    }

    getRightmostCoordinateForSlopeInterceptFormAlgebraicString(slopeInterceptFormAlgebraicString) {
        slopeInterceptFormAlgebraicString = slopeInterceptFormAlgebraicString.replace(/\s+/g, '');
        let regexResult = /^[yY]=(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)[xX]\+(-?\d+(\.(\d)+)?(e-?\d+(\.(\d)+)?)?)$/.exec(slopeInterceptFormAlgebraicString);

        let M = parseFloat(regexResult[1]);
        let B = parseFloat(regexResult[7]);
        let pixelRatio = this.centerMiddleCoordinate.x / displayedAxisLimit;

        let rightmostOrdinalXValue = this.rightMiddleCoordinate.x - this.centerMiddleCoordinate.x;

        let rightmostCoordinateForThisLine = {
            x: this.rightMiddleCoordinate.x,
            y: ((M * rightmostOrdinalXValue + (B * pixelRatio)) - this.centerMiddleCoordinate.x) * -1
        };

        return rightmostCoordinateForThisLine;
    }
}