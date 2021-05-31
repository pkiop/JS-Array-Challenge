// write your codes
function solution(inputArray) {
	return inputArray.sort((a, b) => a.price - b.price);
}

exports.solution = solution;
