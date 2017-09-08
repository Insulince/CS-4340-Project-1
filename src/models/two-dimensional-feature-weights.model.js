"use strict";

class TwoDimensionalFeatureWeights {
    constructor(weightX, weightY, weightBias) {
        this._weightX = weightX;
        this._weightY = weightY;
        this._weightBias = weightBias;
    }

    get weightX() {
        return this._weightX;
    }

    get weightY() {
        return this._weightY;
    }

    get weightBias() {
        return this._weightBias;
    }

    set weightX(weightX) {
        this._weightX = weightX;
    }

    set weightY(weightY) {
        this._weightY = weightY;
    }

    set weightBias(weightBias) {
        this._weightBias = weightBias;
    }
}