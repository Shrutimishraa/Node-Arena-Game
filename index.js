const readline = require('readline');
const Player = require('./src/entities/player');
const PlayGround = require('./src/services/service');
// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to ask questions and return the user input
function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, (answer) => {
            // Check if the query is for the name
            if (query !== 'Name: ') {
                const parsed = parseInt(answer, 10);
                if (isNaN(parsed)) {
                    console.log('Wrong input! Please enter an integer.');
                    resolve(askQuestion(query)); // Prompt again recursively
                } else {
                    resolve(parsed); // Resolve with the parsed integer
                }
            } else {
                resolve(answer.trim()); // Resolve with the name
            }
        });
    });
}
// Main function to execute the game
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
    // Create player instances based on user input
    const playerA = new Player(nameA, healthA, strengthA, attackA);
    const playerB = new Player(nameB, healthB, strengthB, attackB);
    // Initialize the arena with the players and start the fight
    const playground = new PlayGround(playerA, playerB);
    playground.fight();
    // Close the readline interface
    rl.close();
}
// Execute the main function
main();

