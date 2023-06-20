const tempA = [1, 2, 3, 4, 5];
const tempB = [3, 4, 5, 6, 7];

const answer = tempA.filter(e => tempB.includes(e));

console.log(answer);


