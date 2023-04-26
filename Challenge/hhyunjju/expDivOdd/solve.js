function solution(inputArray) {
    return inputArray.filter((el)=>(el**2)%3===1)
                    .reduce((prev, cur)=> prev+=cur**2, 0)
}

exports.solution = solution;
