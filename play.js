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

inquirer.prompt(questions).then((answers) => {
    if (answers.user == 'Hit') {
        logic.playPlayer();
        logic.playDealer();
        console.log('');
    } else {
        logic.decideWinner();
    }

    inquirer.prompt(questions).then((answers2) => {
        if (answers2.user == 'Hit') {
            logic.playPlayer();
            logic.playDealer();
        } else {
            logic.decideWinner();
        }
    });
});
