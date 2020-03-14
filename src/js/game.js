var Card = /** @class */ (function () {
    function Card(suit, value, name) {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
    Card.prototype.greet = function () {
        console.log("This card is a " + this.value + " of " + this.suit);
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.cards = this.makeDeck();
    }
    Deck.prototype.makeDeck = function () {
        for (var i = 0; i < Deck.suits.length; i++) {
            for (var j = 0; j < Deck.cardTypes.length; j++) {
                var value = Deck.cardTypes[j];
                var numValue = void 0;
                var name_1 = void 0;
                if (value === "Jack" ||
                    value === "Queen" ||
                    value === "King") {
                    numValue = 10;
                }
                else if (value === "Ace") {
                    numValue = 11;
                }
                else {
                    numValue = parseInt(Deck.cardTypes[j]);
                }
                name_1 = value + " of " + Deck.suits[i];
                this.cards.push(new Card(Deck.suits[i], numValue, name_1));
            }
        }
        return this.cards;
    };
    Deck.prototype.presentDeck = function () {
        console.log(this.cards);
    };
    Deck.suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    Deck.cardTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    return Deck;
}());
var deck = new Deck;
deck.presentDeck();
