const inputArray = ["잠", "자", "고", "싶", "다", "용가리"];

// write your codes

let result2 = false;

const result = inputArray.find((item) => {
  if (item === "용가리") {
    result2 = true;
  }
});

console.log(result2);
