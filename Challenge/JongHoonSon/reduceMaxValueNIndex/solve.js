// write your codes
function solution(inputArray) {

    let max = -1000;
    let index = 0;

    inputArray.reduce((prev, curr, idx) => {
        if(curr > max) {
            max = curr;
            index = idx;
        }
    })

    return {maxValue: max, idx: index};
}

exports.solution = solution;
