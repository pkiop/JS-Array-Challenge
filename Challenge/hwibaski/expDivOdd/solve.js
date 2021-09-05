function solution(inputArray) {
	const number = inputArray.filter((item) => item ** 2 % 3 === 1);
	const calculate = number.map((item) => item ** 2);
	const result = calculate.reduce((acc, value) => acc + value, 0);
	return result;
}

exports.solution = solution;
