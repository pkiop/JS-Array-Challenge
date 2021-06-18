const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes

function solution(inputArray) {
    return inputArray.filter(item => isNaN(item) == false);
}

// let now = solution(inputArray);
// console.log(now);
exports.solution = solution;