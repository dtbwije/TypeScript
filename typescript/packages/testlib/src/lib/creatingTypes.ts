import { Color } from "./enums";
const dateOfBirthType = new Date(1981,7,24)

console.log(dateOfBirthType);

function getColorName(color:Color) {
    switch (color) {
    case Color.Red:
        console.log("The color is Red");
        break;
    case Color.Green:
        console.log("The color is Green");
        break;
    case Color.Blue:
        console.log("The color is Blue");
        break;
    }
}

function add(number1: number, number2 :number) :number {
    return number1 + number2;
}

console.log((add(3,4)));

getColorName(Color.Green);