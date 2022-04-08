// default import
import chalk from 'chalk';
import fs from 'fs'; // file system

function extractLinks(data) {
    // including regular expression (regex)
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;

    // // match is a string method, in this case, it is not useful
    // const extractedLinks = data.match(regex);

    // so it is better use a regex method
    // for each occurrence of the regex
    // the stopping criterion: until it find nothing else
    while ((temp = regex.exec(data)) !== null) {
        arrayResults.push({ [temp[1]]: temp[2] });
    }

    // ternary
    // arrayResults.length === 0 is an empty array
    return arrayResults.length === 0 ? 'There are no links!' : arrayResults;
}

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
        return extractLinks(data);
    } catch (err) {
        handlesError(err);
    } finally {
        console.log(chalk.yellow('Operation completed!'));
    }
}

// getFile('./text.md');

// default export
export default getFile;
