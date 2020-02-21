// preliminaries
if(5>3){
    console.log("is greater than")
}
if("cat".length===3){
    console.log("is the length")
}

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}
if(person.age>=18){
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log(person.name + " is not allowed to go to the movie.")
}

if(person.name.startsWith("B")){
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log(person.name + " is not allowed to go to the movie.")
}

if(person.name.startsWith("B") && person.age>=18){
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log(person.name + " is not allowed to go to the movie.")
}

// Silver Medal
if(1==="1"){
    console.log("Strict")
}
else if(1=="1"){
    console.log("Abstract")
}
else {
    console.log("not equal at all")
}

if(1<=2 && 2===4){
    console.log("yes")
}

// Extra Credit
var message = person.name.startsWith("B") + person.age >= 18 ? person.name + ' can go to the movie.' : person.name + ' cannot go to the movie';
console.log(message);

// Extra Extra Credit (Gold Medal)
var animal = "dog";
if(typeof animal === "string"){
    console.log(animal + " is a string")
}
else {
    console.log(animal + " is not a string")
}

if(typeof true === "boolean"){
    console.log("It's a boolean")
}
else{
    console.log("It's not a boolean")
}

if(typeof myVar !== "undefined") {
    console.log("It is defined!");
}
else{
    console.log("It is undefined!")
}

if("s">12){
    console.log("S is greater")
}
else{
    console.log("This makes no sense")
}

if("sLt">=1+2){
    console.log("Math just got wierd")
}
else{
    console.log("This still makes no sense")
}

var myNum = 10;
var ternaryMessage = myNum%2 == 0 ? "It is even" : "It is odd";
console.log(ternaryMessage)

