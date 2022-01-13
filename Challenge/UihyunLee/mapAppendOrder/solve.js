// write your codes
function solution(inputArray) {}

exports.solution = solution;

const answer = inputArray.map((item,idx)=>{
    return{
        name : item,
        order : idx+1
    };
});

console.log(answer)

