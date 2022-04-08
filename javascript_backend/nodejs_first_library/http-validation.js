import fetch from 'node-fetch';

function generateURLsArray(arrayLinks) {
    // loop for each { key: value }
    // object returns an array (object -> [value])
    // Object.values(object);
    return arrayLinks.map((objectLink) => Object.values(objectLink).join());
    // join() remove the links from the array, returning an array of string values
}

function validateURLs(arrayLinks) {
    return generateURLsArray(arrayLinks);
}

// default export
export default validateURLs;
