const DeckImport = require('./deck');

const deck = new DeckImport.Deck();
const playerHand = new DeckImport.Hand(deck);
const dealerHand = new DeckImport.Hand(deck, true);

// This function will do the initial dealing of the cards.
//  You should deal 2 cards to each player and then print what each hand is.
function initialDeal() {

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
    console.log();
    console.log();
    console.log('');
    while () {

        console.log();
        if () {

        }
    }
}

// This function should decide the winner of the game.
function decideWinner() {

}






module.exports.initialDeal = initialDeal;
module.exports.playDealer = playDealer;
module.exports.dealPlayer = dealPlayer;
module.exports.decideWinner = decideWinner;
module.exports.playerHand = playerHand;
