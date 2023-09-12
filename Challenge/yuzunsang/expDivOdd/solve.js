function solution (inputArray) {
    let ansArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] **= 2;

        if ((inputArray[i] % 3) % 2 === 1) ansArray.push(inputArray[i]);
    }

    return ansArray.reduce((a, b) => a + b);
}

exports.solution = solution;
