function solution(inputArray) {

    const pow = inputArray.map(el => Math.pow(el, 2));
    
    const result = pow.filter((el) => (el%3)%2 === 1);

    return result.reduce((prev, curr) => prev + curr);
}

exports.solution = solution;

