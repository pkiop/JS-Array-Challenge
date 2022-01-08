// write your codes
function solution(inputArray) {
    return inputArray.filter(elem => 30 <= elem.age && elem.age < 50);
}

exports.solution = solution;
