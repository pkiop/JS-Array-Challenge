function solution(inputArray) {
    const answer = inputArray
        .map((el) => el ** 2)
        .filter((el) => el % 3)
        .reduce((acc, cur) => acc + cur);
    return answer;
}

exports.solution = solution;
