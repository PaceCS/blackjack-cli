const DeckImport = require('./deck');

const deck = new DeckImport.Deck();
const playerHand = new DeckImport.Hand(deck);
const dealerHand = new DeckImport.Hand(deck, true);

function initialDeal() {
    console.log('Dealing cards...');
    playerHand.dealCard();
    dealerHand.dealCard();
    playerHand.dealCard();
    dealerHand.dealCard();
    console.log(`Your cards are the ${playerHand.hand[0]} and the ${playerHand.hand[1]}.`);
    console.log(`The dealer has one card face down and the ${dealerHand.hand[1]} showing.`);
}

function playPlayer() {
    playerHand.dealCard();
    console.log(`You are dealt the ${playerHand.hand[playerHand.cards.length - 1]}.`);
    let seen = `the ${playerHand.hand[0]}`;
    for (let i = 1; i < playerHand.cards.length - 1; i += 1) {
        seen += `, the ${playerHand.hand[i]}`;
    }
    console.log(`You now have ${seen}, and the ${playerHand.hand[playerHand.cards.length - 1]}.`);
}


function playDealer() {
    console.log('The dealer makes a decision...');
    if (dealerHand.sum < 16) {
        dealerHand.dealCard();
        console.log(`The dealer drew a card, the ${dealerHand.cards[dealerHand.cards.length - 1]}. `);
        let seen = `the ${dealerHand.hand[1]}`;
        for (let i = 2; i < dealerHand.cards.length; i += 1) {
            seen += `, the ${dealerHand.hand[i]}`;
        }
        console.log(`The dealer now has ${dealerHand.cards.length} cards.  They are ${seen}, and the one that is face down.`);
        if (dealerHand.sum > 21 && dealerHand.hasAce) {
            dealerHand.aceBig = false;
        }
    } else {
        console.log('The dealer stays.');
    }
}

function decideWinner() {
    console.log(`The dealer turns over the ${dealerHand.cards[0]}.`);
    if (dealerHand.sum > 21) {
        console.log('The dealer busts.  You win!');
    } else {
        console.log(`The dealer has ${dealerHand.sum}.`);
        if (playerHand.sum > dealerHand.sum) {
            console.log(`You have ${playerHand.sum}. You win!`);
        } else {
            console.log(`You have ${playerHand.sum}.  You lose.`);
        }
    }
}

module.exports.initialDeal = initialDeal;
module.exports.playDealer = playDealer;
module.exports.playPlayer = playPlayer;
module.exports.decideWinner = decideWinner;
