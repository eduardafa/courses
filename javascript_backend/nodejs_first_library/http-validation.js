import fetch from 'node-fetch';

// dealing with errors
function handlesError(err) {
    throw new Error(err.message);
}

async function checkStatus(arrayURLs) {
    try {
        // promises async await
        const arrayStatus = await Promise.all(
            arrayURLs.map(async (url) => {
                const res = await fetch(url);
                // return res.status;
                return `${res.status} - ${res.statusText}`;
            })
        );
        return arrayStatus;
    } catch (err) {
        handlesError(err);
    }
}

function generateURLsArray(arrayLinks) {
    // loop for each { key: value }
    // object returns an array (object -> [value])
    // Object.values(object);
    return arrayLinks.map((objectLink) => Object.values(objectLink).join());
    // join() remove the links from the array, returning an array of string values
}

async function validateURLs(arrayLinks) {
    const links = generateURLsArray(arrayLinks);
    const statusLinks = await checkStatus(links);

    const results = arrayLinks.map((object, index) => ({
        ...object,
        status: statusLinks[index],
    }));

    return results;
}

// default export
export default validateURLs;
