"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateOfBirthType = new Date(1981, 7, 24);
console.log(dateOfBirthType);
function getColorName(color) {
    switch (color) {
        case 0 /* Color.Red */:
            console.log("The color is Red");
            break;
        case 1 /* Color.Green */:
            console.log("The color is Green");
            break;
        case 2 /* Color.Blue */:
            console.log("The color is Blue");
            break;
    }
}
getColorName(1 /* Color.Green */);
