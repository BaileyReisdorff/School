var expect = chai.expect;

describe('startGame', function(){
    describe('test start game', function(){
        it('should create a game and deal cards', function(){
            let newGame = new GameLogic();
            newGame.startGame();
            newGame.dealDeck();
            expect(newGame.gameDeck.deck.length).to.be.above(0);
        });
        
        });
    });