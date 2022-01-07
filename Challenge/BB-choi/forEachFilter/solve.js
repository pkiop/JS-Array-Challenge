// write your codes
function solution(inputArray) {
    // let answer = inputArray.filter((el) => el >= 40);

    let answer = [];
    inputArray.forEach((el) => {
        if (el >= 40) {
            answer.push(el);
        }
    });
    return answer;
}

exports.solution = solution;
