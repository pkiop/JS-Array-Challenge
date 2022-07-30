// 배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요
//inputarray의 첫번째 원소의 객체부터 살핌
function solution(inputArray) {
    return inputArray.filter(({ age }) => age >= 30 && age < 50)
}
const test1 =
    [
        {
            name: '영미',
            age: 25,
        },
        {
            name: '일미',
            age: 35,
        },
        {
            name: '이미',
            age: 45,
        },
        {
            name: '삼미',
            age: 55,
        },
    ]

console.log(solution(test1))
exports.solution = solution;
