const test1 = {
    input: [4, 2, 5, 1, 3],
    answer: [5, 1, 3],
  };
  
  const test2 = {
    input: [4, 2, 6, 8, 50, 16],
    answer: [],
  };
  
  const test3 = {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    answer: [1, 3, 5, 7, 9, 11],
  };

function solution(inputArray) {
    const answer = inputArray.filter(x => x % 2 === 1)
    console.log(answer)
}

solution(test1.input)
solution(test2.input)
solution(test3.input)
