const whoWon = require('../RPS.js');

describe("Testing Rock paper scissors", function(){

    test("should return TIE", function() {
        expect(whoWon('rock', 'rock')).toBe('TIE!');
    });

    test("should return player 2 wins", function() {
        expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    });

    test("should return player 2 wins", function() {
        expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    });

});
