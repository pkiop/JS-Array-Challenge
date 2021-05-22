const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes

// # 문제제목

// ## 설명

// reduce 메소드를 사용해서 배열의 모든 수의 합을 구하세요.

// ## Expected Output

// 106

const asw = inputArray.reduce((acc, num) => acc + num, 0);
console.log(asw);
