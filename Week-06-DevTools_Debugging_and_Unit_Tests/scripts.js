console.log('Week6 War Game Review')

//player class
//playerName
//playerScore
//playerHand

class Player {
    constructor(playerName, playerHand) {
        this.playerName = playerName;
        this.playerHand = playerHand;
        this.score = 0; 
    }
}

//let player1 = new player('Bailey', [])
//console.log(player1);

//class card
//faceValue
//suit
//rank

class Card {
    constructor(faceValue, suit, rank){
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

//let card1 = new Card('Jack', 'hearts', 11);
//console.log(card1)

//deck class
//empty deck
//define what cards are in an array
//methods!
//createDeck
//shuffle
//deal?

class Deck {
    constructor() {
        this.deck = [];
    }
    //createDeck
    createDeck() {
        let faceValues = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace']
        let suits = ['hearts','diamonds','clubs','spades']
        
        //for loop over faceValues
        for(let faceValIndex=0; faceValIndex<faceValues.length; faceValIndex++){
            for(let suitsValIndex=0; suitsValIndex<suits.length; suitsValIndex++){
                this.deck.push(new Card(faceValues[faceValIndex],suits[suitsValIndex],(faceValIndex+2)))
            }
        }
        
    }
    //shuffleDeck
    shuffleDeck(){
        for(let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random()* (i+1));
            let tempIndex = this.deck[i];
            this.deck[i]= this.deck[j];
            this.deck[j] = tempIndex;
            
        }
        console.log(this.deck)
    }
}

//let gameDeck = new Deck();
//console.log(gameDeck);
//gameDeck.createDeck();
//gameDeck.shuffleDeck();

class GameLogic {
    constructor() {
        this.player1 = new Player('Bailey', [], 0);
        this.player2 = new Player('Jake', [], 0);
        console.log(this.player1, this.player2)

        //create instance of deck
        this.gameDeck = new Deck();
    }
    startGame() {
        this.gameDeck.createDeck();
        this.gameDeck.shuffleDeck();
    }
    dealDeck() {
        //console.log('in the deck')
        this.player1.playerHand = this.gameDeck.deck.slice(0, 26);
        this.player2.playerHand = this.gameDeck.deck.slice(26, 52);

        console.log(this.player1, this.player2)
    }
    compareCard() {
        //console.log(this.player1.playerHand[0].rank)
        for (let i = 0; i < 26; i++) {
            
            //console.log(i)
            if(this.player1.playerHand[i].rank > this.player2.playerHand[i].rank){
                this.player1.score++;
                console.log(`${this.player1.playerName} won the round!!`)
                console.log(
                `
                ${this.player1.playerName} score: ${this.player1.score}
                ${this.player2.playerName} score: ${this.player2.score}
                    `
                )

            } else if(this.player1.playerHand[i].rank < this.player2.playerHand[i].rank){
                this.player2.score++;
                console.log(`${this.player2.playerName} won the round!!`)

                console.log(
                    `
                ${this.player1.playerName} score: ${this.player1.score}
                ${this.player2.playerName} score: ${this.player2.score}
                    `
                )

            } else {
                console.log('tie!');
                console.log(
                    `
                ${this.player1.playerName} score: ${this.player1.score}
                ${this.player2.playerName} score: ${this.player2.score}
                    `
                )
            }
            
            
                console.log(
                `
                Played Cards:
                ${this.player1.playerName} played a ${this.player1.playerHand[i].faceValue} of ${this.player1.playerHand[i].suit}
                ${this.player2.playerName} played a ${this.player2.playerHand[i].faceValue} of ${this.player2.playerHand[i].suit}
                `
            )
        }
       
    }
    determineWinner(){
        if(this.player1.score > this.player2.score) {
        console.log(`${this.player1.playerName} won the game!!`)
        } else if(this.player2.score > this.player1.score){
        console.log(`${this.player2.playerName} won the game!!`)
        } else {
        console.log('The game is tied!')
        }      
    }
}

let newGame = new GameLogic();
newGame.startGame()
newGame.dealDeck()
newGame.compareCard()
newGame.determineWinner()

//console.log(newGame);

//class gameLogic
//compare cards
//bring in players and deal
