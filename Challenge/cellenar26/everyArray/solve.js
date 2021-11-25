// # 문제제목

// ## 설명

// every를 이용해서 모든 원소가 짝수인지 아닌지를 판별하세요

// ## Expected Output 

// true
const inputArray = [2,4,6,8]
function solution(inputArray) {
    return inputArray.every(isEven)
}

const isEven = (number) => number % 2 ===0
console.log(solution(inputArray))
exports.solution = solution;
