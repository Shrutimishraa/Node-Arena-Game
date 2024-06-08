const readline = require('readline');
const Player = require('./src/entities/player');
const PlayGround = require('./src/services/service');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, (answer) => {
            if (query !== 'Name: ') {
                const parsed = parseInt(answer, 10);
                if (isNaN(parsed)) {
                    console.log('Wrong input! Please enter an integer.');
                    resolve(askQuestion(query)); 
                } else {
                    resolve(parsed); 
                }
            } else {
                resolve(answer.trim()); 
            }
        });
    });
}

async function main() {
    console.log("Enter details for Player A:");
    const nameA = await askQuestion('Name: ');
    const healthA = parseInt(await askQuestion('Health: '), 10);
    const strengthA = parseInt(await askQuestion('Strength: '), 10);
    const attackA = parseInt(await askQuestion('Attack: '), 10);

    console.log("Enter details for Player B:");
    const nameB = await askQuestion('Name: ');
    const healthB = parseInt(await askQuestion('Health: '), 10);
    const strengthB = parseInt(await askQuestion('Strength: '), 10);
    const attackB = parseInt(await askQuestion('Attack: '), 10);

    const playerA = new Player(nameA, healthA, strengthA, attackA);
    const playerB = new Player(nameB, healthB, strengthB, attackB);

    const playground = new PlayGround(playerA, playerB);
    playground.fight();
    rl.close();
}

main();

