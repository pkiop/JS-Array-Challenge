// write your codes
function solution(inputArray) {
    let answer = inputArray.reduce((acc, curr) => {
        acc[curr.nickname] = curr.name;
        return acc;
    },{})
    return answer;
}


exports.solution = solution;
