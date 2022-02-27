const inputArray = [100, 10, 20, 40];

const answer = [];

inputArray.forEach(e => {
    let val = e+'';
    answer.push(val.concat('%'))
})

console.log(answer);