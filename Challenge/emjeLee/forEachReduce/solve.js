// write your codes
function solution(inputArray) {
    let answer = 0;
    inputArray.forEach((item) => {
        answer += item;
    });
    return answer;
}

exports.solution = solution;
