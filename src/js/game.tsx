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
        let cards: Card[] = [];
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

                cards.push(new Card(Deck.suits[i], numValue, name))
            }
        }
        return cards;
    }
    constructor() {
        this.cards = this.makeDeck()
    }
    presentDeck() {
        console.log(this.cards)
    }
}

class Shoe {
    numberOfDecks: number;
    cards: Card[] = [];
    constructor(numberOfDecks: number) {
        this.numberOfDecks = numberOfDecks
        this.cards = this.makeShoe()
    }
    makeShoe() {
        let cards: Card[] = [];
        for (let i = 0; i < this.numberOfDecks; i++) {
            let deck = new Deck();
            for (let j = 0; j < deck.cards.length; j++) {
                cards.push(deck.cards[j])
            }
        }
        return cards;
    }
    shuffleCards(cards: Card[] = this.cards) {
        var j, x, i;
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cards[i];
            cards[i] = cards[j];
            cards[j] = x;
        }
        return cards;
    }
    presentShoe() {
        console.log(this.cards)
    }
    dealCard() {
        if (this.cards && this.cards.length > 0) {
            return this.cards.pop()!;
        } else {
            throw new Error("No cards left.")
        }
    }
}

class Hand {
    private _cards: Card[] = [];
    receiveCard(card: Card) {
        this.cards.push(card);
    }
    get cards(): Card[] {
        return this._cards
    }
}

let deck = new Deck();
let shoe = new Shoe(2);
let player = new Hand();

shoe.shuffleCards();
player.receiveCard(shoe.dealCard());
player.receiveCard(shoe.dealCard());
console.log(player.cards)