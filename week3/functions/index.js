// 1
function sum(num1, num2) {
    console.log(num1 + num2)
}
sum(10, 65);

// 2
function whichIsBigger(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " " + "is the biggest.")
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2 + " " + "is the biggest.")
    } else {
        console.log(num3 + " " + "is the biggest.")
    }
}
whichIsBigger(1, 250, 77);
whichIsBigger(85, 13, 401);

// 3
function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " " + "is even.")
    } else {
        console.log(number + " " + "is odd.")
    }
}
evenOrOdd(7);
evenOrOdd(2);

// 4
function howLongAmI(string) {
    if (string.length <= 20) {
        console.log(string + string)
    } else {
        console.log(string.slice(0, string.length / 2))
    }
}
howLongAmI("This string should be cut in half.");
howLongAmI("This should double.");

