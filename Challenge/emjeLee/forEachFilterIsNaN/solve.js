// write your codes
function solution(inputArray) {
    const result = [];
    inputArray.forEach((item) => {
        if (typeof item === "number") {
            result.push(item);
        }
    });
    return result;
    
    // return inputArray.filter((item) => typeof item === "number");
}

exports.solution = solution;
