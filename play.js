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

async function run() {
    while (userHit == "Hit") {
        let answer = await inquirer.prompt(questions).then((answers) => {
            console.log('');
            if (answers.user == 'Hit') {
                logic.playPlayer();
                console.log('');
                logic.playDealer();
                console.log('');
            } else {
                logic.decideWinner();
                userHit = 'Stay';
            }
        });
    }
}


run();
console.log('');
