const inputArray = [100, 10, 20, 40];

// write your codes

function solution(inputArray) {
     const result = inputArray.filter(i => i>=40);
     return result;
    // let result = [] ;
    // result= inputArray.filter(i => i>=40);
    // console.log(result);
    // console.log(inputArray);
}
exports.solution = solution;

