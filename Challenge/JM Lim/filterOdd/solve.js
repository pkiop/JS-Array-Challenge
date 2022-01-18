const inputArray = [1, 5, 6, 7 ,9, 3, 14];

const answer = inputArray.filter(e => {
    return (e%2) == 1
})

console.log(answer);