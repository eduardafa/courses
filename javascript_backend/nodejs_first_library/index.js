import chalk from 'chalk';
import fs from 'fs'; // file system

// dealing with errors
function handlesError(err) {
    throw new Error(chalk.red(err));
    // throw new Error(chalk.red(err.code, 'Something is wrong!'));
}

function getFile(path) {
    const encoding = 'utf-8';
    // documentation: fs.readFile(filepath, [encoding], [callback])
    fs.readFile(path, encoding, (err, data) => {
        if (err) {
            handlesError(err);
        }
        console.log(chalk.green(data));
    });
}

getFile('./text.md');

// // testing an error
// getFile('./text0.md');
