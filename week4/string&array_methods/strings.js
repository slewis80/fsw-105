// 1
var name = "sabrina";
var upperCaseName = name.toUpperCase();
console.log(upperCaseName + name)

// 2
var helloWorld = "Hello World";
var characters = helloWorld.length;
var result = characters / 2;
console.log(Math.floor(result))

// 3
var string = "You cannot read all of this string.";
console.log(string.slice(0, string.length / 2))

// 4
var capitalAndLowerCase = "Capital and lower";
var firstHalf = capitalAndLowerCase.slice(0, 8);
var secondHalf = capitalAndLowerCase.slice(8, 17);
console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase())

// 5
function capitalLetter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capitalLetter("all of these words should be capitalized."));
