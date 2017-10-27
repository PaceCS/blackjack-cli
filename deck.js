class Deck {
    constructor() {
        // Create deck of 52 cards
        const face = ['Jack', 'Queen', 'King', 'Ace'];
        const suit = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        this.cards = [];
        for (let i = 2; i < 11; i += 1) {
            for (let j = 0; j < suit.length; j += 1) {
                this.cards.push(`${i} of ${suit[j]}`);
            }
        }
        for (let i = 0; i < face.length; i += 1) {
            for (let j = 0; j < suit.length; j += 1) {
                this.cards.push(`${face[i]} of ${suit[j]}`);
            }
        }
        this.shuffle();
    }

    shuffle() {
        const array = this.cards;
        for (let i = array.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    deal() {
        const arr = this.cards;
        let out;
        if (arr.length > 0) {
            out = arr.pop();
        } else {
            console.log('The deck is empty.');
        }
        return out;
    }
}

module.exports.Deck = Deck;

class Hand {
    constructor(deck = new Deck(), dealer = false, cards = [], aceBig = true) {
        this.cards = cards;
        this.aceBig = aceBig;
        this.deck = deck;
        this.dealer = dealer;
    }

    dealCard() {
        this.cards.push(this.deck.deal());
    }

    get hasAce() {
        let hasA = false;
        for (let i = 0; i < this.cards.length; i += 1) {
            hasA = this.cards[i].match(/Ace/) ? true : hasA;
        }
        return hasA;
    }

    get sum() {
        const arr = this.cards;
        let sumC = 0;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].match(/[2-9]/)) {
                sumC += parseInt(arr[i].match(/[2-9]/)[0]);
            } else if (arr[i].match(/Ace/)) {
                if (this.aceBig) {
                    sumC += 11;
                } else {
                    sumC += 1;
                }
            } else {
                sumC += 10;
            }
        }
        return sumC;
    }
}

module.exports.Hand = Hand;
