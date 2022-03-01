// write your codes
function solution(inputArray) {
    let isIn = false;

    inputArray.forEach(el => {
        if (el === '용가리') {
            isIn = true;
        }
    });

    return isIn;
}

exports.solution = solution;
