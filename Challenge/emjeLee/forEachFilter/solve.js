// write your codes
function solution(inputArray) {
    let answer = [];
    inputArray.forEach(item =>{
        if(item >= 40) answer.push(item);
    })
    return answer;
}

exports.solution = solution;
