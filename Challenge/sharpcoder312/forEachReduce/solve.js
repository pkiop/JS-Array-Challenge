const inputArray = [100, 10, 20, 40];

// write your codes


// method 01
const answer1 = inputArray.reduce((acc, cur) => {
	return acc + cur;
}, 0);
console.log(answer1);


// method 02
let answer2 = 0;
inputArray.forEach((num, i) => {
	for (; i < inputArray.length; i++) {
		return answer2 = answer2 + inputArray[i]
	}
})
console.log(answer2);


// method 03 *
let answer3 = 0;
inputArray.forEach((num) => {
	answer3 += num
})
console.log(answer3);