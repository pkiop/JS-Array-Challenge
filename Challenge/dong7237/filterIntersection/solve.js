function solution(inputArray1, inputArray2) {
    //a와 b값을 풀어 한 변수에 저장해놓고 같은값이 두개가 아닌 것을 filter로 지움
    return inputArray1.filter((element) => inputArray2.includes(element))
}

exports.solution = solution;
