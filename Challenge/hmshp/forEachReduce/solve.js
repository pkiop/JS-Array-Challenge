//forEach 메소드를 사용해서 배열의 총 합을 출력하는 코드를 작성하세요
// write your codes
const numArray = [1, 2, 3, 4];

// let sum = 0;
// numArray.forEach((el) => (sum += el));

// console.log(sum);

//reduce를 사용해 보자 🔽
let result = numArray.reduce((prev, curr) => prev + curr, 0);
//콜백 함수는 return을 해 줘야 한다.(return 키워드 생략 가능)
//우리가 return하는 값이 다음 차례에는 prev로 순차적으로 들어간다.
//curr에는 배열의 값이 순차적으로 전달된다.
//0 -> prev 값 0부터 시작한다는 의미.

console.log(result);
