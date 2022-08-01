// write your codes
function solution(inputArray) {
    return inputArray.sort((a, b) => {
        return a.price - b.price
    })

}
const a = [
    {
        name: '사과',
        price: 1000,
    },
    {
        name: '수박',
        price: 5000,
    },
    {
        name: '당근',
        price: 2000,
    },
    {
        name: '참외',
        price: 10000,
    },
]
console.log(solution(a))
exports.solution = solution;
