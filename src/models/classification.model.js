"use strict";

class Classification {
    constructor(name, symbol, color) {
        this._name = name;
        this._symbol = symbol;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get symbol() {
        return this._symbol;
    }

    get color() {
        return this._color;
    }

    set name(name) {
        this._name = name;
    }

    set symbol(symbol) {
        this._symbol = symbol;
    }

    set color(color) {
        this._color = color;
    }
}