// write your codes
function solution(inputArray) {

    const result = inputArray.filter(input => input.age >= 30 && input.age < 50)

    return result;
}

exports.solution = solution;
