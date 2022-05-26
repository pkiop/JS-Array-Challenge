// write your codes
function solution(inputArray) {
    const answer = inputArray.filter(v => v.age >= 30 && v.age < 50)
    return answer;
}

exports.solution = solution;
