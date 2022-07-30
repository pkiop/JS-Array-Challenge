// write your codes
function solution(inputArray) {
    inputArray.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price === b.price) return 0
        if (a.price < b.price) return -1
    })
    return inputArray
}

const input = [
    {
        name: '사과',
        price: 1000,
    },
    {
        name: '수박',
        price: 5000,
    },
    {
        name: '복숭아',
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
console.log(solution(input))
exports.solution = solution;
