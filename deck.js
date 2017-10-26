const face = ['Jack', 'Queen', 'King', 'Ace'];
const suit = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

const Deck = {};
Deck.cards = [];

for (let i = 2; i < 11; i += 1) {
    for (let j = 0; j < suit.length; j += 1) {
        Deck.cards.push(`${i} of ${suit[j]}`);
    }
}

for (let i = 0; i < face.length; i += 1) {
    for (let j = 0; j < suit.length; j += 1) {
        Deck.cards.push(`${face[i]} of ${suit[j]}`);
    }
}


Deck.shuffle = function shuffle() {
    const array = this.cards;
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

Deck.deal = function deal() {
    const arr = this.cards;
    let out;
    if (arr.length > 0) {
        out = arr.pop();
    } else {
        console.log('The deck is empty.');
    }
    return out;
};

Deck.shuffle();

module.exports.Deck = Deck;



class Hand {
    constructor(dealer = false, cards = [], deck = Deck, aceBig = true) {
        this.cards = cards;
        this.aceBig = aceBig;
        this.deck = Deck;
        this.dealer = dealer;
    }

    dealCard() {
        this.cards.push(this.deck.deal());
    }

    // A method to hide the dealer's first card since it should be face down
    get hand() {
        const tempHand = this.cards.slice();
        if (this.dealer && tempHand && tempHand.length > 1) {
            tempHand[0] = '?';
        }
        return tempHand;
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