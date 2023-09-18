// write your codes
function solution(inputArray) {
    let answer = [];

    inputArray.map((el, idx) => answer.push({ name : el, order : idx + 1 }));

    return answer;
}

exports.solution = solution;
