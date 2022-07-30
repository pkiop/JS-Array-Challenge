// write your codes
function solution(inputArray) {
    let result = 0;
    inputArray.forEach(element => {
        result += element
    });
    return result
}
const a = [100, 10, 20, 40]
console.log(solution(a))
exports.solution = solution;
