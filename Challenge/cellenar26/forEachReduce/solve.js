const inputArray = [100, 10, 20, 40];

// write your codes
function solution(inputArray) {
    let now = 0;
    inputArray.forEach(i=>now = now+i);
    // console.log(now);
    return now;
}
// solution(inputArray);
exports.solution = solution;
