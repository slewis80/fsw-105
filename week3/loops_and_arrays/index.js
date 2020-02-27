// Loop 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

function countItems(listName, itemName){
    var numberOfItems = 0;
    for (var i = 0; i < listName.length; i++) {
        if (listName[i] == itemName) {
            numberOfItems = numberOfItems + 1;
        }
    }
    console.log("The item, " + itemName + ", is on the list " + numberOfItems + " times.")
}

countItems(officeItems, "computer");

// Loops 2, 3, and 4
var peopleWhoWantToSeeMadMaxFuryRoad = [ 
{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}
]

for (var w = 0; w < peopleWhoWantToSeeMadMaxFuryRoad.length; w++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[w].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[w].name + " is old enough.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[w].name + " is not old enough to see Mad Max.")
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[w].gender == "male" && peopleWhoWantToSeeMadMaxFuryRoad[w].age >= 18) {
        console.log(" He is good to see Mad Max.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[w].gender == "female" && peopleWhoWantToSeeMadMaxFuryRoad[w].age >= 18) {
        console.log(" She is good to see Mad Max.")
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[w].gender == "male" && peopleWhoWantToSeeMadMaxFuryRoad[w].age < 18) {
        console.log(" Do not let him in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[w].gender == "female" && peopleWhoWantToSeeMadMaxFuryRoad[w].age < 18) {
        console.log(" Do not let her in.")
    }
}

    
// Loop 5
for (var num = 0; num <= 101; num++) {
    if (num % 2 == 0) {
        console.log(num + " is even.")
    } else {
        console.log(num + " is odd.")
    }
}

// Extra Credit

// could not figure this one out :(