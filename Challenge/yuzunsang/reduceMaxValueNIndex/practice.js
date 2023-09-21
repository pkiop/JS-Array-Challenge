// 1. 숫자 배열의 합 구하기
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, cur) => {
//     return acc + cur;
// }, 0);

// console.log(sum);

// 2. 객체 배열에서 나이의 총합 구하기
// const users = [
//     { name: "Kim", age: 16 },
//     { name: "Lee", age: 25 },
//     { name: "Park", age: 30 },
//     { name: "Choi", age: 14 },
//     { name: "Jeon", age: 19 },
//   ];

//   const totalAge = users.reduce((acc, cur) => {
//     return acc + cur.age;
//   }, 0);

//   console.log(totalAge);

// 3. 문자열 배열을 하나의 문자열로 합치기
// const words = ["Hello", " ", "World", "!"];

// const sentence = words.reduce((acc, cur) => {
//     acc += cur;
//     return acc;
// }, "");

// console.log(sentence);

// 4. 배열의 최댓값 찾기
// const numbers = [10, 3, 20, 15, 7];

// const findMax = numbers.reduce((acc, cur) => {
//     return Math.max(acc, cur);
// }, numbers[0]);

// console.log(findMax);

// 5. 각 문자열의 등장 횟수 세기
// const words = ["apple", "banana", "apple", "orange", "banana", "orange", "apple"];

// const wordCounter = words.reduce((acc, cur) => {
//     // acc[cur]에서 cur가 key 가 되고, acc[cur]는 value가 됨.
//     acc[cur] = (acc[cur] || 0) + 1;

//     return acc;
// }
// , {});

// console.log(wordCounter);

// 6. 객체 배열에서 각 카테고리별 요소 개수 세기
const items = [
    { name: "A", category: "X" },
    { name: "B", category: "Y" },
    { name: "C", category: "X" },
    { name: "D", category: "Z" },
    { name: "E", category: "Y" },
    { name: "F", category: "X" },
  ];

  const cntItemsByCategories = items.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + 1;

    return acc;
  }, {});

  console.log(cntItemsByCategories);

//   console.log(cntItemsByCategories);

// 7. 중첩 배열을 단일 배열로 평탄화하기
// const nestedArrays = [[1, 2], [3, 4], [5, 6], [7, 8]];

// const normalizeToOne = nestedArrays.reduce((acc, cur) => {
//     return acc.concat(cur);
// }, []);

// console.log(normalizeToOne);

// 8. initialValue 를 사용하는 예제: 숫자 배열에서 각 숫자의 제곱을 담은 새 배열 생성하기

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((acc, cur) => {
//     acc.push(cur ** 2);
//     return acc;
// }, []);

// console.log(result);