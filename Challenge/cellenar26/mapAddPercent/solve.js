// map 메소드를 사용해 배열 각각 숫자 뒤에 %를 붙인 문자열을 만드세요
// write your codes
function solution(inputArray) {
    const result = inputArray.map(item => item.toString()+"%");
    return result;
}

exports.solution = solution;
