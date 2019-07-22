const inquirer = require('inquirer');

function createProjectPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'input your project name',
        },
        {
            type: 'checkbox',
            name: 'options',
            message: 'select your project setup options',
            choices: [
                {
                    name: 'Typescript',
                    checked: true,
                },
                {
                    name: 'Less',
                    checked: true,
                },
                {
                    name: 'Linter',
                    checked: true,
                },
                {
                    name: 'Githooks',
                    checked: true,
                },
            ],

        }
    ]).then(answers => {
        console.log(answers);
    })
}

function createPagesPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'pageName',
            message: 'input your page name',
        },
        {
            type: 'input',
            name: 'author',
            message: 'input your name',
        },
        {
            type: 'input',
            name: 'description',
            message: 'input page descriptions',
        }
    ]).then(answers => {
        console.log(answers);
    })
}

module.exports = {
    createPagesPrompt,
    createProjectPrompt,
};