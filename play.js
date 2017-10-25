const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const logic = require('./logic');


console.log(chalk.blue(figlet.textSync('Blackjack')));
console.log('\n');

const questions = [
    {
        type: 'list',
        name: 'user',
        message: 'Which do you choose?',
        choices: ['Hit', 'Stay'],
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log('\n \n');
});
