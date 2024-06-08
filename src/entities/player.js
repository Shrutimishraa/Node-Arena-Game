// Define the Player class representing a player in the game
class Player {
    constructor( name, health, strength, attack ){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;

    }
    // Check if the player is still alive
    isAlive(){
        return this.health > 0;
    }
}
module.exports = Player;