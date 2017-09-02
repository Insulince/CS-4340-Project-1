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

    drawLineViaFromTo(from, to) {
        this.ctx.beginPath();
        this.ctx.moveTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
    }
}