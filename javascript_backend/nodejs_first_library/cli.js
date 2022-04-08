// command line interface (cli)

// default import
import chalk from 'chalk';
import getFile from './regex.js';
import validateURLs from './http-validation.js';

const path = process.argv;

// filePath[0]: node, filePath[1]: cli.js, filePath[2]: ./text.md
async function processText(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === 'validate') {
        console.log(chalk.yellow('Validated links: '), validateURLs(result));
    } else {
        console.log(chalk.yellow('List of links: '), result);
    }
}

processText(path);

// to run this program: npm run cli validate
