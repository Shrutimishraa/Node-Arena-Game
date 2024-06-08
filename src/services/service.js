const Player = require('../entities/player') 
class PlayGround {
    constructor( player1, player2){
        this.player1 = player1;
        this.player2 = player2;

    }
    rollDice(){
        return Math.floor(Math.random()*6)+1;
    }
    fight(){
        let attacker = this.player1.health > this.player2.health ? this.player1 : this.player2;
        let defender = this.player1.health > this.player2.health ? this.player2 : this.player1;
        while(attacker.isAlive() && defender.isAlive()){
            const attackRoll = this.rollDice();
            const defendRoll = this.rollDice();
            this.performAttack(attackRoll, defendRoll, attacker,defender);
            if(!defender.isAlive())
            break;
        [ attacker , defender ] = [ defender , attacker ];

        }
        const winner = attacker.isAlive() ? attacker : defender;
        console.log(`🏆 ${winner.name} 🏆 wins the fight!`);
    }
    performAttack(attackRoll, defendRoll, attacker, defender){
        const attackDamage = attacker.attack * attackRoll;
        const defendValue = defender.stength * defendRoll;
        const damageToDefender = Math.max (0,attackDamage - defendValue);
        defender.health = defender.health - damageToDefender;
        console.log(`${attacker.name} attacks (dice: ${attackRoll}) with ${attackDamage} damage`);
        console.log(`${defender.name} defends (dice: ${defendRoll}) with ${defendValue} defense`);
        console.log(`${defender.name} takes ${damageToDefender} damage, ${defender.name} health is now ${defender.health}`);
        console.log(`${this.player1.name} health : ${this.player1.health} | ${this.player2.name} health : ${this.player2.health}`);
        console.log("----------------------------------------------------------------------------------- ");
    
    }
}
module.exports = PlayGround;
