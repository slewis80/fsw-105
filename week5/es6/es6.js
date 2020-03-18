// 1
const manName = "John"
let manAge = 101

function runForLoop(pets) {
    let petObjects = []
    let name
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", manName)
    return petObjects
}

runForLoop(["cat", "dog"])
// 2
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => arr.map(carrot => { return { type: "carrot", name: carrot }
    })
console.log(mapVegetables(carrots))
// 3
const people = [
    {
        name: "Princess Peach",
        friendly:false
    },
    {
        name: "Luigi",
        friendly: true
    },{
        name: "Mario",
        friendly: true
    },{
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => arr.filter(person => person.friendly)

console.log(filterForFriendly(people))
// 4
const doMathSum = (a, b) => a + b;
console.log(doMathSum(5, 10))

const produceProduct = (a, b) => a * b;
console.log(produceProduct(5, 10))
// 5
const printString = (firstName = "Jane", lastName = "Doe", age = 100) => "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?"
console.log(printString())
console.log(printString("Sabrina", "Lewis", 39))

// 6
const printString2 = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(printString2())
console.log(printString2("Sabrina", "Lewis", 39))
// 7
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    }, {
        type: "pig",
        name: "piglette"
    }, {
        type: "dog",
        name: "sparky"
    },
];

const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false)
console.log(filterForDogs(animals))
// 8
const fName = "Janice"
let location = "Hawaii"

const welcomeTo = (fName, location) => `Hi ${fName}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

console.log(welcomeTo(fName, location));
