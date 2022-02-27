const inputArray = [-3, -2, -1, 0, 1, 2, 3, '1', 'jmjmjm'];

const answer = [];

inputArray.forEach(e => {
    if (Number.isInteger(e)) {
        answer.push(e)
    }
})
console.log(answer);

