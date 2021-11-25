// ## 설명

// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
function solution(inputArray) {
    const newArr =  inputArray.map(element => element*element);
    
    const fillterd = newArr.filter(item => (item%3) % 2 !== 0)
    let sum = 0;
    for(let i=0; i<fillterd.length; i++) {
        sum += fillterd[i]
    }

    return sum;
}
solution([1, 7, 3, 4, 6]) // expected: 66
exports.solution = solution;