const { solution } = require('./solve');

const test1 = {
    input: [1, 40, "라매", "개발자", "유튜브",51.5, 'a', 88 ],
    answer: [1,40, 51.5,88]
};

describe('숫자만 배열에 나아야 한다.', ()=> {
    test('배열에 숫자만 남아야 한다.',()=> {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});