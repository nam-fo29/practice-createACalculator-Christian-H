const input = require("readline-sync");

//Absolute Value Calculation:
function getAbsoluteValue(a, b) {
    return Math.abs(a - b);
}
console.log(getAbsoluteValue(-20, 5)); //Outputs 25
console.log(getAbsoluteValue(16, 44)); //Outputs 28

//Power Calculation:
function powerOfNum(a, b) {
    return Math.pow(a, b);
}
console.log(powerOfNum(9, 3)); //Outputs 729
console.log(powerOfNum(2, 4)); //Outputs 16

//Square Root Finder:
function findSquareRoot(a) {
    return Math.sqrt(a)
}
console.log(findSquareRoot(16)); //Outputs 4
console.log(findSquareRoot(23)); //Outputs 4.795831523312719

//Maximum and Minimum Finder:
function findMaxNum(numArray) {
    return Math.max(...numArray);
}
console.log(findMaxNum([41, 1, 32, 12])); //Outputs 41
console.log(findMaxNum([99, 1987, 268, 1455])); //Outputs 1987

function findMinNum(numArray) {
    return Math.min(...numArray);
}
console.log(findMinNum([41, 1, 32, 12])); //Outputs 1
console.log(findMinNum([99, 1987, 268, 1455])); //Outputs 99

//Random Number Generator:
function generateRandomNum(min, max) {
    const minCeiling = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeiling) + minCeiling)
}
console.log(generateRandomNum(1, 11)); //Outputs 6
console.log(generateRandomNum(25, 36)); //Outputs 26

//Custom Rounding:
function findRoundNum(a, b) {
    let num = (a);
    let decimalPlace = (b)
    let roundedNum = Math.round(num * decimalPlace) / decimalPlace;
    return (roundedNum);
}

console.log(findRoundNum(5.39393202020, 1000)); //Outputs 5.394
console.log(findRoundNum(98765432110.12345, 1000)); //Outputs 98765432110.123
console.log(findRoundNum(156.123456789, 1000)); //Outputs 156.123
console.log(findRoundNum(156.123456789, 100)); //Outputs 156.12


//Calculator program:

function calculator() {
    let running = true;
    while (running) {
        console.log("\nSelect an option from the menu (1-8)")
        console.log("\n1. Absolute Value");
        console.log("2. Power Calculation");
        console.log("3. Square Root Finder");
        console.log("4. Find Maximum Number");
        console.log("5. Find Minimum Number");
        console.log("6. Random Number Generator");
        console.log("7. Custom Rounding");
        console.log("8. Exit");

        let choice = input.question("\nPlease select a number from the menu: ");
        if (choice === "1") {
            let a = Number(input.question("\nEnter the first number: "));
            let b = Number(input.question("Enter the second number: "));
            console.log("\nAbsolute Value: " + getAbsoluteValue(a, b));
        }
        else if (choice === "2") {
            let a = Number(input.question("\nEnter the base number: "));
            let b = Number(input.question("To the power of: "));
            console.log("\n" + a + " to the power of " + b + " is: " + powerOfNum(a, b));
        }
        else if (choice === "3") {
            let a = Number(input.question("\nFind square root of: "));
            console.log("\nThe square root of " + a + " is: " + findSquareRoot(a));
        }
        else if (choice === "4") {
            let numArray = (input.question("\nEnter a range of numbers: ").split(" "));
            console.log("\nThe highest number listed of " + numArray + " is: " + findMaxNum(numArray));
        }
        else if (choice === "5") {
            let numArray = (input.question("\nEnter a range of numbers: ").split(" "));
            console.log("\nThe lowest number listed of " + numArray + " is: " + findMinNum(numArray));
        }
        else if (choice === "6") {
            let a = Number(input.question("\nEnter the first number: "));
            let b = Number(input.question("Enter the second number: "));
            console.log("\nA random number between " + a + " and " + b + ": " + generateRandomNum(a, b));
        }
        else if (choice === "7") {
            let a = Number(input.question("\nEnter a decimal number you would like rounded: "));
            let b = Number(input.question("Enter the place you want it rounded to (1, 10, 100, etc): "));
            console.log("\nYour number is: " + findRoundNum(a, b));
        }
        else if (choice === "8") {
            console.log("\nExiting Calculator")
            running = false
        }
        else {
            console.log("\nPlease enter a valid option (1-8)");
        }
    }

}
calculator();