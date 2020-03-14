class Card {
    suit: string;
    value: number;
    name: string;
    constructor(suit: string, value: number, name: string) {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
    greet() {
        console.log(`This card is a ${this.value} of ${this.suit}`)
    }
}

class Deck {
    static suits = ["Diamonds", "Clubs", "Hearts", "Spades"]
    static cardTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    cards: Card[] = [];
    makeDeck() {
        for (let i = 0; i < Deck.suits.length; i++) {
            for (let j = 0; j < Deck.cardTypes.length; j++) {
                let value = Deck.cardTypes[j];
                let numValue: number;
                let name: string;
                if (
                    value === "Jack" ||
                    value === "Queen" ||
                    value === "King"
                ) {
                    numValue = 10
                } else if (value === "Ace") {
                    numValue = 11
                }
                else {
                    numValue = parseInt(Deck.cardTypes[j]);
                }

                name = `${value} of ${Deck.suits[i]}`

                this.cards.push(new Card(Deck.suits[i], numValue, name))
            }
        }
        return this.cards;
    }
    constructor() {
        this.cards = this.makeDeck()
    }
    presentDeck() {
        console.log(this.cards)
    }
}

let deck = new Deck

deck.presentDeck();