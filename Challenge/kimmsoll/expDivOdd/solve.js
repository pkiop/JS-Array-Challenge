function solution(inputArray) {
    let arr = inputArray.map((a)=>Math.pow(a,2));
    let answer = arr.filter((a)=> (a%3)%2 !== 0);
    return answer.reduce((pre, cur)=> pre+cur);
}

exports.solution = solution;
