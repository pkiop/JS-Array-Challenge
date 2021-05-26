const { solution } = require('./solve');

const test1 = {
    input: [10,20,39,40,100,300],
    answer: [40,100,300]
};

describe('forEachFilter', ()=> {
    test('test1', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});