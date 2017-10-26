const inquirer = require('inquirer');

function promptUser() {
    let userChoice = '';

    const questions = [
        {
            type: 'list',
            name: 'user',
            message: 'Which do you choose?',
            choices: ['Hit', 'Stay'],
        },
    ];

    inquirer.prompt(questions).then((answers) => {
        userChoice = answers.user;
        return userChoice == 'Hit';
    });
}

module.exports.promptUser = promptUser;
