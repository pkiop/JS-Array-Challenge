// write your codes
function solution(inputArray) {
    let answer = false;
    inputArray.find(el => {
        if (el === '용가리') {
            answer = true;
        }
    })
    return answer
}

exports.solution = solution;
