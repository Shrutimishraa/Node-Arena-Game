// Define the PlayGround class representing the PlayGround (Arena) where the game takes place
const Player = require('../entities/player') 
class PlayGround {
    constructor( player1, player2){
        this.player1 = player1;
        this.player2 = player2;

    }
    // Roll a six-sided dice function
    rollDice(){
        return Math.floor(Math.random()*6)+1;
    }
    // Start the fight between two players
    fight(){
        // Determine who attacks first based on player health
        let attacker = this.player1.health > this.player2.health ? this.player1 : this.player2;
        let defender = this.player1.health > this.player2.health ? this.player2 : this.player1;
        console.log('#### Match Begins ####')
        // Loop until one player is defeated
        while(attacker.isAlive() && defender.isAlive()){
            const attackRoll = this.rollDice();
            const defendRoll = this.rollDice();
            this.performAttack(attackRoll, defendRoll, attacker,defender);
            if(!defender.isAlive())
            break;
        // Switch roles for the next round of attack
        [ attacker , defender ] = [ defender , attacker ];

        }
        // Declare the winner of the fight
        const winner = attacker.isAlive() ? attacker : defender;
        console.log(`🏆 ${winner.name} 🏆 wins the fight!`);
    }
    // Perform an attack between the attacker and defender
    performAttack(attackRoll, defendRoll, attacker, defender){
        // Calculate attack damage and defense value
        const attackDamage = attacker.attack * attackRoll;
        const defendValue = defender.strength * defendRoll;
        const damageToDefender = Math.max (0, attackDamage - defendValue);
        // Reduce defender's health based on the damage taken
        defender.health -= damageToDefender;
        // Log the attack and defense outcome
        console.log(`${attacker.name} attacks (dice: ${attackRoll}) with ${attackDamage} damage`);
        console.log(`${defender.name} defends (dice: ${defendRoll}) with ${defendValue} defense`);
        console.log(`${defender.name} takes ${damageToDefender} damage, ${defender.name} health is now ${defender.health}`);
        console.log(`${this.player1.name} health : ${this.player1.health} | ${this.player2.name} health : ${this.player2.health}`);
        console.log("----------------------------------------------------------------------------------- ");
    
    }
}
module.exports = PlayGround;
