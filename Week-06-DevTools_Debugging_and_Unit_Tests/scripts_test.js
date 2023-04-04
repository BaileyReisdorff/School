var expect = chai.expect;

describe("startGame", function () {
  describe("test start game", function () {
    it("should create a game and deal cards", function () {
      let newGame = new GameLogic();
      newGame.startGame();
      expect(newGame.gameDeck.deck.length).to.equal(52);
    });

    it("should deal each player 26 cards", function () {
        let newGame = new GameLogic();
        newGame.startGame();
        newGame.dealDeck();

        expect(newGame.player1.playerHand.length).to.equal(26);
        expect(newGame.player2.playerHand.length).to.equal(26);
    });
  });
});
