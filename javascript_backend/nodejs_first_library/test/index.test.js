// import { expect, test } from '@jest/globals';
import getFile from '../regex.js';

// simulating a result
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
    },
];

// describe is a jest function
describe('getFile::', () => {
    it('must be a function', () => {
        expect(typeof getFile).toBe('function');
    });
    it('Must return an array with the results', async () => {
        const result = await getFile(
            'D:/web_development/courses/javascript_backend/nodejs_first_library/test/files/text.md'
        );
        expect(result).toEqual(arrayResult);
    });
    it('Must return the message that there are no links', async () => {
        const result = await getFile(
            'D:/web_development/courses/javascript_backend/nodejs_first_library/test/files/text_withoutlinks.md'
        );
        expect(result).toBe('There are no links!');
    });
    // when the promise is rejected
    it('should throw a missing file error', async () => {
        await expect(
            getFile(
                'D:/web_development/courses/javascript_backend/nodejs_first_library/test/files'
            )
        ).rejects.toThrow(/There are no file in this path/);
    });
    // when the promise is fulfilled
    it('Must solve the function successfully', async () => {
        await expect(
            getFile(
                'D:/web_development/courses/javascript_backend/nodejs_first_library/test/files/text.md'
            )
        ).resolves.toEqual(arrayResult);
    });
});

// // jest functions: test, expect (the function return)
// test('Must be a function', () => {
//     expect(typeof getFile).toBe('function');
// });
