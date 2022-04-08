import chalk from 'chalk';
import fs from 'fs'; // file system

// dealing with errors
function handlesError(err) {
    throw new Error(chalk.red(err));
    // throw new Error(chalk.red(err.code, 'Something is wrong!'));
}

function getFile(path) {
    const encoding = 'utf-8';
    // promises is relating to async programming
    fs.promises
        .readFile(path, encoding)
        .then((data) => console.log(data))
        .catch((err) => handlesError(err));
}

getFile('./text.md');

// // testing an error
// getFile('./text0.md');
