const DeckImport = require('./deck');

const deck = new DeckImport.Deck();
const playerHand = new DeckImport.Hand(deck);
const dealerHand = new DeckImport.Hand(deck, true);

// This function will do the initial dealing of the cards.
//  You should deal 2 cards to each player and then print what each hand is.
function initialDeal() {
    console.log('Dealing cards...');
    for (let i = 0; i < 2; i += 1) {
        playerHand.dealCard();
        dealerHand.dealCard();
    }
    console.log(`Your cards are the ${playerHand.cards[0]} and the ${playerHand.cards[1]}.`);
    console.log(`The dealer has one card face down and the ${dealerHand.cards[1]} showing.`);
}

// This function will deal the player a new card and print the result.
function dealPlayer() {
    playerHand.dealCard();
    console.log(`You are dealt the ${playerHand.cards[playerHand.cards.length - 1]}.`);
    let print = '';
    for (let i = 0; i < playerHand.cards.length; i += 1) {
        if (i > 0) {
            print += ', ';
        }
        if (i === playerHand.cards.length - 1) {
            print += 'and ';
        }
        print += `the ${playerHand.cards[i]}`;
    }
    console.log(`You now have ${print}.`);
}

// This function will play the dealer.  This is an automated process.
// The dealer should be dealt a card until the sum of the cards is greater than 16.
//  If the dealer has an Ace and goes over 21, then that Ace needs to only count as 1 point.
// You can check whether the dealer has an Ace using dealerHand.hasAce.
// Then you will need to use the code dealerHand.aceBig = false to lower the point value.
function playDealer() {
    console.log(`The dealer now plays and flips over the hole card, the ${dealerHand.cards[0]}.`);
    console.log(`The dealer's hand is the ${dealerHand.cards[0]} and the ${dealerHand.cards[1]}.`);
    console.log('');
    while (dealerHand.sum < 16) {
        dealerHand.dealCard();
        console.log(`The dealer draws a card.  It's the ${dealerHand.cards[dealerHand.cards.length - 1]}. `);
        if (dealerHand.sum > 21 && dealerHand.hasAce) {
            dealerHand.aceBig = false;
        }
    }
}

// This function should decide the winner of the game.
function decideWinner() {
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
module.exports.dealPlayer = dealPlayer;
module.exports.decideWinner = decideWinner;
module.exports.playerHand = playerHand;
