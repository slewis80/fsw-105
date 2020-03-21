const readlineSync = require('readline-sync');

const name = readlineSync.question('Welcome, guest... what is your name? ');

readlineSync.keyInPause(`
Welcome to the escape room, ${name}, 
you must find your way out or meet certain death...
`);
readlineSync.keyInPause(`
In this room you will find somewhere a key that will unlock the door. 
There is also a hole in the wall. 
You must choose your actions in the correct order to escape and survive.
`);

let isAlive = true;
let isDoorOpen = false;
let hasKey = false;

while (isAlive == true && isDoorOpen == false) {
    const chooseAction = readlineSync.keyIn(`
    Pick a number to choose an action: 
    1. Put your hand in the hole
    2. Find the key
    3. Open the door

    `, {limit: `$<1-3>`});

    if (chooseAction == 1) {
        console.log(`
        Wrong action, ${name}, you have died...
        `);
        isAlive = false;
    } else if (chooseAction == 2 && hasKey == false) {
        console.log(`
        Congratulations... you have found the key!
        
        What would you like to do next?
        `);
        hasKey = true;
    } else if (chooseAction == 2 && hasKey == true) {
        console.log(`
        You already have the key. Use it to unlock the door if you want to escape.
        
        What would you like to do next?
        `);
    } else if (chooseAction == 3 && hasKey == false) {
        console.log(`
        The door is locked. You must find the key. 
        
        What would you like to do next?
        `);
    } else if (chooseAction == 3 && hasKey == true) {
        console.log(`
        Great job, ${name}, you have found the key and unlocked the door!
        You have safely escaped the room and escaped certain death!
        
        Thanks for playing!!!
        `);
        isDoorOpen = true;
    }
}
