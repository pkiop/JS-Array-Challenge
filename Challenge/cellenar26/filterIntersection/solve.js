//두 배열의 교집합을 출력하세요!
function solution(inputArray1, inputArray2) {
    const result = inputArray1.filter(item=>inputArray2.includes(item));
    return result;
}

// let inputArray1 = [1, 2, 3, 4, 5];
// let inputArray2 = [3, 4, 5, 6, 7];
// let now = solution(inputArray1, inputArray2);
// console.log(now);

exports.solution = solution;
