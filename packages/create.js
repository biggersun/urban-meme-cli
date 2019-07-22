const program = require('commander');
const chalk = require('chalk');
const version = require('./utils/getVersion').version;
const { createPagesPrompt, createProjectPrompt } = require('./prompt/creatTools');

program
    .version(version)
    .option('-p, --project', 'setup miniprogram project')
    .option('--page', 'create pages')
    .parse(process.argv);


if (program.page) {
    console.log(chalk.blue('create page'));
    createPagesPrompt();
} else {
    console.log(chalk.blue('create project'));
    createProjectPrompt();
}
