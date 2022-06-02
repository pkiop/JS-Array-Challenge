// write your codes
function solution(inputArray) {
    const answer = inputArray.sort((a,b) => {
        return a.price - b.price
    });
    return answer;
}

exports.solution = solution;
