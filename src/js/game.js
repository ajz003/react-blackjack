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
        var cards = [];
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
                cards.push(new Card(Deck.suits[i], numValue, name_1));
            }
        }
        return cards;
    };
    Deck.prototype.presentDeck = function () {
        console.log(this.cards);
    };
    Deck.suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    Deck.cardTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    return Deck;
}());
var Shoe = /** @class */ (function () {
    function Shoe(numberOfDecks) {
        this.cards = [];
        this.numberOfDecks = numberOfDecks;
        this.cards = this.makeShoe();
    }
    Shoe.prototype.makeShoe = function () {
        var cards = [];
        for (var i = 0; i < this.numberOfDecks; i++) {
            var deck_1 = new Deck();
            for (var j = 0; j < deck_1.cards.length; j++) {
                cards.push(deck_1.cards[j]);
            }
        }
        return cards;
    };
    Shoe.prototype.shuffleCards = function (cards) {
        if (cards === void 0) { cards = this.cards; }
        var j, x, i;
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cards[i];
            cards[i] = cards[j];
            cards[j] = x;
        }
        return cards;
    };
    Shoe.prototype.presentShoe = function () {
        console.log(this.cards);
    };
    Shoe.prototype.dealCard = function () {
        return this.cards.pop();
    };
    return Shoe;
}());
var Hand = /** @class */ (function () {
    function Hand() {
        this._cards = [];
    }
    Hand.prototype.receiveCard = function (card) {
        this.cards.push(card);
    };
    Object.defineProperty(Hand.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    return Hand;
}());
var deck = new Deck;
var shoe = new Shoe(2);
var player = new Hand();
// deck.presentDeck();
// deck.shuffleDeck();
// deck.presentDeck();
shoe.shuffleCards();
player.receiveCard(shoe.dealCard());
player.receiveCard(shoe.dealCard());
console.log(player.cards);
