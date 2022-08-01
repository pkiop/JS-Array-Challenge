// write your codes
const numArray = [10, 20, 30, 40, 50];

let filtered = [];
numArray.forEach((num) => filtered.push(`${num}%`));
console.log(filtered);
/*처음에는 이렇게 🔽 했는데

let filtered = numArray.forEach((el) => el + "%");
console.log(filtered);

undefined가 나와서 (왜일까?)
다른 분들 코드를 참고했다.
*/

// Map을 사용해 보자 🔽
let result = numArray.map((num) => `${num}%`);
console.log(result);
//콜백 함수로 전달되는 인자 이름은 최대한 의미를 이해하기 쉽게
