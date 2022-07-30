// write your codes
function solution(inputArray) {
    return ans = inputArray.reduce((p, c) => {

        return { ...p, [c.nickname]: c.name }
    }, { '1': 1 })
}

const a = [
    {
        name: '홍길동',
        nickname: 'hong',
    },
    {
        name: '둘리',
        nickname: '2li',
    },
    {
        name: '오스트랄로피테쿠스',
        nickname: '1Cin',
    },
]
console.log(solution(a))
exports.solution = solution;
