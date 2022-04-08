import chalk from 'chalk';
import fs from 'fs'; // file system

// dealing with errors
function handlesError(err) {
    throw new Error(chalk.red(err));
    // throw new Error(chalk.red(err.code, 'Something is wrong!'));
}

// async functions
async function getFile(path) {
    const encoding = 'utf-8';
    try {
        const data = await fs.promises.readFile(path, encoding);
        console.log(chalk.green(data));
    } catch (err) {
        handlesError(err);
    } finally {
        console.log(chalk.yellow('Operation completed!'));
    }
}

getFile('./text.md');

// // testing an error
// getFile('./texxt.md');
