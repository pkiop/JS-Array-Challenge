const inputArray = [100, 10, 20, 40];

const answer = [];

inputArray.forEach(e => {
    e >= 40 ? answer.push(e) : ''
})

console.log(answer);