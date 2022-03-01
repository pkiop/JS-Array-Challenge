// write your codes
function solution(inputArray) {
    answer = {};

    inputArray.forEach(({nickname, name}) => {
        answer[nickname] = name;
    });

    return answer;
}

exports.solution = solution;
