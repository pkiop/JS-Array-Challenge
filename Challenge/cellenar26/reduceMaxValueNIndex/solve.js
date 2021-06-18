// reduce 메소드를 사용해 최댓값의 값을 maxValue에, 해당 값의 index를 idx에 넣은 객체를 출력하세요
// write your codes
const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];
function solution(inputArray) {
    let result;
    result = inputArray.reduce(getMaxValueWithIndex);
    return result;
}

const getMaxValueWithIndex = (acc, cur, idxx, origin)=> {
    let maxValue = cur;
    let idx = 0;
    for (let i = 0; i<origin.length; i++) {
        if (origin[i] > maxValue) {
            maxValue = origin[i];
            idx = i;
        }
    }
    return {maxValue, idx};
}
solution(inputArray);
exports.solution = solution;
