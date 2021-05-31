const inputArray = [1, 7, 3, 4, 6];

const answer = inputArray.map(x => x*x)
                        .filter(x => x % 3 === 1)
                        .reduce((prev,next) => (prev + next),0);

console.log(answer);