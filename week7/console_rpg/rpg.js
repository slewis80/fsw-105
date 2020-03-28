const readlineSync = require('readline-sync');

const name = readlineSync.question('Welcome, guest... what is your name? ');

readlineSync.keyInPause(`
Welcome to 1985, ${name}...
You have just time-jumped into what seems to be a deserted area of town in the middle of the night. 
`);
readlineSync.keyInPause(`
You hit the ground rather hard while being expelled from the time portal, so your time device is malfunctioning, 
you are feeling a little disoriented, and your health points are down from 100 to 80... 
but don't worry, you can regain points by defeating any enemies that you may encounter. 
`);
readlineSync.keyInPause(`
You will need to get to the laboratory on the other end of the city in order to get your time device fixed 
and be safely time-jumped back to your own time. 
`);
const enemies = ['Vampire', 'Werewolf', 'Giant Mutant Rat', 'Terminator'];
const items = ['time-jumping serum', 'a health potion', 'a lithium battery', 'a Bottle of Ooze', 'a sandwich', 'a bottle of water', 'a samurai sword'];
let inventory = [];
let healthPoints = 80;
const actions = ['Walk', 'Print Inventory', 'Exit Game'];

function game() {
    let attackPower = Math.floor(Math.random() * (40 - 5) + 1) + 5;
    let enemyAttackPower = Math.floor(Math.random() * (30 - 5) + 1) + 5;
    let enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const enemyOptions = ['Run', 'Attack'];
    let newItem = items[Math.floor(Math.random() * items.length)];

    while (healthPoints > 0) {
        const choose = readlineSync.keyInSelect(actions, `
        Please choose an action...
        `);
    
        if (actions[choose] == 'Walk') {
            let luck = Math.random();
            if (luck > 0.3) {
                let findLab = Math.random();
                if (findLab == 0.7) {
                    console.log(`
                    You have found the lab!
                    Now you can be safely time-jumped back home... 
                    congratulations, ${name}!!!`);
                    healthPoints = 0;
                } else {
                    console.log(`
                    Walking...
                    You don't seem to be getting anywhere yet. 
                    What do you want to do now?
                    `);
                }
            } else if (luck <= 0.3) {
                console.log(`
                You have encountered a ${enemy}!!! 
                His health is ${enemyHealth}. 
                Your health is ${healthPoints}.
                `);
                while (healthPoints > 0 && enemyHealth > 0) {
                    const runOrAttack = readlineSync.keyInSelect(enemyOptions, `
                    Choose how to proceed...
                    `);
                    if (enemyOptions[runOrAttack] == 'Run') {
                        let run = Math.random();
                        if (run >= 0.5) {
                            console.log(`
                            Running away...
                            `);
                            enemy = enemies[Math.floor(Math.random() * enemies.length)];
                            enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            break;
                        } else if (run < 0.5) {
                            healthPoints = healthPoints - enemyAttackPower;
                            console.log(`
                            While running away, the ${enemy} attacks you with ${enemyAttackPower} attack power. 
                            `)
                            if (healthPoints > 0) {
                                console.log(`
                                Your health is now ${healthPoints}. 
                                `);
                            } else if (healthPoints <= 0) {
                                console.log(`
                                Your health is now 0... 

                                I'm sorry, ${name},
                                You have been killed by the ${enemy}. 
                                `);
                            } 
                            enemy = enemies[Math.floor(Math.random() * enemies.length)];
                            enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            break;
                        }
                    } else if (enemyOptions[runOrAttack] == 'Attack') {
                        enemyHealth = enemyHealth - attackPower;
                        console.log(`
                        You attack ${enemy} with ${attackPower} attack power. 
                        `);
                        if (enemyHealth <= 0) {
                            inventory.push(newItem);
                            healthPoints = healthPoints + 20;
                            console.log(`
                            You have killed the ${enemy}!!!
                            You snagged ${newItem} for your inventory and gained 20 health points!
                            `);
                            enemyHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            enemy = enemies[Math.floor(Math.random() * enemies.length)];
                            newItem = items[Math.floor(Math.random() * items.length)];
                            break;
                        } else {
                            healthPoints = healthPoints - enemyAttackPower;
                            console.log(`
                            The ${enemy} attacks you with ${enemyAttackPower} attack power. 
                            `);
                            if (healthPoints > 0) {
                                console.log(`
                                Your health is now ${healthPoints}. 
                                `);
                            attackPower = Math.floor(Math.random() * (40 - 5) + 1) + 5;
                            enemyAttackPower = Math.floor(Math.random() * (30 - 5) + 1) + 5;
                            } else if (healthPoints <= 0) {
                                console.log(`
                                Your health is now 0...

                                I'm sorry, ${name},
                                you have been killed by the ${enemy}.
                                `);
                            }
                        } 
                    }
                }
            } 
        } else if (actions[choose] == 'Print Inventory') {
            console.log(`
            Name: ${name}
            Health Points: ${healthPoints}
            Inventory: ${inventory}
            `);
        } else {
            console.log(`
            Goodbye... 
            `);
            healthPoints = 0;
        } 
    }
}
game();
