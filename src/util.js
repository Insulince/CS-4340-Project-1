"use strict";

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