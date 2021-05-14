const inputArray = ["잠", "자", "고", "싶", "다", "용가리"];

// write your codes

// 1.
const answer = inputArray.some((val) => val === "용가리");
console.log(answer);

// 2.
const answer2 = inputArray.includes("용가리");
console.log(answer2);
