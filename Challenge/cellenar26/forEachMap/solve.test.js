const { solution } = require("./solve");

const test1 = {
    input: [1,2,3,4,5],
    answer: ['1%','2%','3%','4%','5%']
};

describe('everyArrayWithForEachMap', () => {
    test('숫자로만 된 배열이면 true이어야 한다.', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });

    // 다른 테스트 케이스
    // test('숫자로만 된 배열이 아니면 false이어야 한다.', () => {
    //     expect(solution(test2.input)).toEqual(test2.answer);
    // });
});