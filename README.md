## Magical Arena Game

## Description

A arena game where two players fight until one of them dies(health = 0 or less than 0 ).

## How to Run

1. Install dependencies:
   npm install

2. Run The Game
   node index.js
   Enter the details for both players when prompted:
   Name: Enter the name of the player.
   Health: Enter an integer value for the player's health.
   Strength: Enter an integer value for the player's strength.
   Attack: Enter an integer value for the player's attack.

The game will simulate the fight, showing each round's outcome and the current health of both players. The player with the highest health after each round will be shown as indestructible.

The game ends when one player's health reaches zero, and the winner is declared.

3. To run the test cases using Jest:
   npm test
