class Player {
    constructor( name, health, strength, attack ){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;

    }
    isAlive(){
        return this.health > 0;
    }
}
module.exports = Player;