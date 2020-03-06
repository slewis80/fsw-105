var readlineSync = require('readline-sync');

// Wait for user's response.
var num1 = readlineSync.questionInt('Please enter your first number: ');
var num2 = readlineSync.questionInt('Please enter your second number: ');
var operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ');

// functions
if (operation === "add") {
    console.log("The result is: " + (num1 + num2));
}
if (operation === "sub") {
    console.log("The result is: " + (num1 - num2));
}
if (operation === "mul") {
    console.log("The result is: " + (num1 * num2));
}
if (operation === "div") {
    console.log("The result is: " + (num1 / num2));
}