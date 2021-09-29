// write your codes
const myArray = [1, "apple", 34, true];
function typeOfNaN(inputArray) {
  return isNaN(inputArray) === false;
}

let filtered = myArray.filter(typeOfNaN);
console.log(filtered);
//출력 결과: [ 1, 34, true ]
//이해가 안 되는 부분: true는 Number이 아닌데 왜 출력될까?
