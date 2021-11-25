function solution(inputArray) {
	const isEveryElEven = (el) => el % 2 === 0;
	return inputArray.every(isEveryElEven);
}
exports.solution = solution;
