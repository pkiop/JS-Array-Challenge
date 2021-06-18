// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
function solution(inputArray) {
    let nowArr = inputArray.filter(item => ((item*item)%3)%2 ==1);
    let temp = 0;
    let result = 0;
    nowArr.forEach(element => {
        temp = element*element;
        result +=temp;
    });
    return result;
}

exports.solution = solution;