// write your codes
function solution(inputArray) {
    const answer = inputArray.map((item, idx) => {
        return {name: item, order: idx+1}
    })
    return answer;
}

exports.solution = solution;
