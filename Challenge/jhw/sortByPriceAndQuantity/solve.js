// write your codes
function solution(inputArray) {
    const answer = inputArray.sort((a, b) => {
        return a.price - b.price || a.quantity - b.quantity;
    })
    return answer;
}

exports.solution = solution;
