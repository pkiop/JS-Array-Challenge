const test1 = {
    input: [100, 10, 20, 40],
    answer: 170,
  };
  
  const test2 = {
    input: [120, -20, -30, 0, 15],
    answer: 85,
  };
  
  const test3 = {
    input: [-10, -20, -30],
    answer: -60,
  };

function solution(inputArray) {
    let answer = 0

    inputArray.forEach(el => {
        answer += el
    });

    console.log(answer)
}

solution(test1.input)
solution(test2.input)
solution(test3.input)