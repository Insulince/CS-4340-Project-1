"use strict";

class TwoDimensionalFeatureVector {
    constructor(datum) {
        this._featureX = datum[1];
        this._featureY = datum[2];
        this._classification = new Classification(datum[0], $(datum[0] === "A" ? "#class-A-symbol" : "#class-B-symbol").val(), $(datum[0] === "A" ? "#class-A-color" : "#class-B-color").val());
    }

    get featureX() {
        return this._featureX;
    }

    get classification() {
        return this._classification;
    }

    get featureY() {
        return this._featureY;
    }

    set featureX(featureX) {
        this._featureX = featureX;
    }

    set featureY(featureY) {
        this._featureY = featureY;
    }

    set classification(classification) {
        this._classification = classification;
    }
}