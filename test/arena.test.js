const Player = require('../src/entities/player');
const PlayGround = require('../src/services/service');

describe('playGround', () => {
    let playerA, playerB, playGround;

    beforeEach(() => {
        playerA = new Player('Player A', 50, 5, 10);
        playerB = new Player('Player B', 100, 10, 5);
        playGround = new PlayGround(playerA, playerB);
    });

    test('Player creation', () => {
        expect(playerA.name).toBe('Player A');
        expect(playerB.health).toBe(100);
        expect(playerA.attack).toBe(10);
    });

    test('playGround initialization', () => {
        expect(playGround.player1).toEqual(playerA);
        expect(playGround.player2).toEqual(playerB);
    });

    test('Attack and defense calculation', () => {
        const attackRoll = 4;
        const defendRoll = 3;

        playGround.performAttack(attackRoll, defendRoll, playerA, playerB);

        expect(playerB.health).toBe(90); 
    });

    test('Game outcome', () => {
        playerA.health = 10;
        playerB.health = 5;

        playGround.fight();

        expect(!playerA.isAlive() || !playerB.isAlive()).toBeTruthy();

    });
});
