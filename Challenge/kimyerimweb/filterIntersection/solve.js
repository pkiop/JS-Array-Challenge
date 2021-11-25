const inputArray = {
    A: [1, 2, 3, 4, 5],
    B: [3, 4, 5, 6, 7],
}

const answer = inputArray.A.filter(x => inputArray.B.includes(x))

console.log(answer)