// 1
function capitalizeAndLowercase(str) {
    var upperCase = str.toUpperCase();
    var lowerCase = str.toLowerCase();
    console.log(upperCase + lowerCase)
}
capitalizeAndLowercase("Hello")

// 2
function findMiddleIndex(str) {
    var characterCount = str.length;
    var halfCharacters = characterCount / 2;
    console.log(Math.floor(halfCharacters))
}
findMiddleIndex("Hello")
findMiddleIndex("Hello World")

// 3
function returnFirstHalf(str) {
    var characterCount = str.length;
    var halfCharacters = characterCount / 2;
    var slicedStr = str.slice(0, halfCharacters)
    console.log(slicedStr)
}
returnFirstHalf("Hello")
returnFirstHalf("Hello World")

// 4
function capitalizeAndLowerCase2(str) {
    var characterCount = str.length;
    var halfCharacters = characterCount / 2;
    var slicedStrStart = str.slice(0, halfCharacters);
    var slicedStrEnd = str.slice(halfCharacters);
    console.log(slicedStrStart.toUpperCase() + slicedStrEnd.toLowerCase())
}
capitalizeAndLowerCase2("Hello")
capitalizeAndLowerCase2("Hello World")

// 5
function capitalize(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capitalize("hey friends! practice practice practice."));
