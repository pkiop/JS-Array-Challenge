// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.

const inputArray = [2, 3, 6, 8, 10];

let answer = inputArray.map(e => e ** 2)
                .filter(e => e%3 == 1)
                .reduce((acc, cur) => {
                    return acc + cur
                }, 0);
console.log(answer);