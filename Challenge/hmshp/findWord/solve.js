// write your codes
//용가리라는 단어가 있으면 true 없으면 false를 출력
//## Expected Output: true

const words = ["용가리", "용용이", "말랑이"];

// const result = words.find(function (word) {
//   return word === "용가리";
// });
// -> 이렇게 일일이 function 쓸 필요 없고 arrow function 쓰면 된다. 🔽

const result = words.find((word) => word === "용가리");
console.log(result);
//출력값: 용가리
//true가 나오게 하려면?? 🔽

const boolResult = words.includes("용가리");
console.log(boolResult);

//find: 콜백 함수를 사용해야 하고, 콜백 함수는 boolean 타입을 리턴해야 된다.
//콜백함수란? '야, 나중에 호출할게!'라는 의미로 callback함수다.
