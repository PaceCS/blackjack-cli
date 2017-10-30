# Blackjack

You will be re-creating the classic casino game of Blackjack.  You will do this inside the file **logic.js**.  You will need to write the code for several parts of the game.  These will be written as distinct functions.

- **initialDeal()** - This function will deal 2 cards to each player.  You can deal the player a card with `playerHand.dealCard()`.  You can deal the dealer a card with `dealerHand.dealCard()`.  Then print the results.  To find out the player's cards, use `playerHand.cards` which returns an array with all of the player's cards.  Your final output should look what's below.  Notice that you only tell the player the dealer's 2nd card since the 1st card is face down.

```
Dealing cards...
Your cards are the 3 of Spades and the 5 of Diamonds.
The dealer has one card face down and the 4 of Diamonds showing.
```
- **playDealer()** - This function will make the decisions for the dealer.  In casino blackjack, the dealer must hit until the sum of the cards is greater than 16.  Be careful!  If the dealer has an Ace and goes over 21, then you will need to set the point value of the Ace to 1.  (The command to do this is `aceBig = false`.)  You should print the results of the dealer.  A few examples are below.

```
The dealer now plays and flips over the hole card, the King of Hearts.
The dealer's hand is the King of Hearts and the 4 of Diamonds.

The dealer draws a card.  It's the Ace of Clubs.
The dealer draws a card.  It's the 10 of Clubs.
```

```
The dealer now plays and flips over the hole card, the 8 of Hearts.
The dealer's hand is the 8 of Hearts and the 6 of Diamonds.

The dealer draws a card.  It's the 9 of Hearts.
```
- **decideWinner()** - This function will decide the winner.  Whoever has the higher sum without going over 21 is the winner.  If there is a tie, then the dealer wins.  Some sample results are below.

```
The dealer has 16.
You have 21. You win!
```

```
The dealer has 19.
You have 16.  You lose.
```

```
The dealer busts.  You win!
```
