function solution(inputArray) {
    return inputArray = inputArray.map(element => element ** 2).filter(element => element % 3 == 1).reduce((p, c) => p + c)
}
const a = [1, 7, 3, 4, 6]
const b = [2, 3, 6, 8, 10]

console.log(solution(a), solution(b))
exports.solution = solution;
//제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
//제곱, 나누기 3으로 나눈 나머지 홀수 , 배열총합