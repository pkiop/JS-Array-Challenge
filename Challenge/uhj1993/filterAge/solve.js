const inputArray = [
  {
    name: "영미",
    age: 25,
  },
  {
    name: "일미",
    age: 35,
  },
  {
    name: "이미",
    age: 45,
  },
  {
    name: "삼미",
    age: 55,
  },
];
// write your codes

// 1. else 조건이 없을 땐 undefined가 return되며 false와 같은 의미로 해석되기 때문에 좋은 방식은 아님
// item.age >= 30 && item.age < 50 의 return값이 true or false 이므로 2번 방식으로 코딩하자

// const result = inputArray.filter((item) => {
//   if (item.age >= 30 && item.age < 50) {
//     return true;
//   } else {
//     return false;
//   }
// });

// 2. 아예 조건을 return 해주자.
const result = inputArray.filter((item) => {
  return item.age >= 30 && item.age < 50;
});

console.log(result);
