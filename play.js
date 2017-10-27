const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const logic = require('./logic');

console.log(chalk.blue(figlet.textSync('Blackjack')));
console.log('');
logic.initialDeal();
console.log('');

const questions = [
    {
        type: 'list',
        name: 'user',
        message: 'Which do you choose?',
        choices: ['Hit', 'Stay'],
    },
];

let userHit = 'Hit';
let noBust = true;

function gameRun(answers) {
    console.log('');
    if (answers.user == 'Hit') {
        logic.playPlayer();
        console.log('');
        if (logic.playerHand.sum > 21) {
            if (logic.playerHand.hasAce) {
                logic.playerHand.aceBig = false;
            } else {
            console.log('Oh no!  You busted!  You lose.');
            noBust = false;
            }
        }
    } else {
        userHit = 'Stay';
        logic.playDealer();
        setTimeout(() => {
            logic.decideWinner();
        }, 1000);
    }
}

async function run() {
    while (userHit == 'Hit' && noBust) {
        await inquirer.prompt(questions).then(answers => gameRun(answers));
    }
    console.log('');
}


run();
