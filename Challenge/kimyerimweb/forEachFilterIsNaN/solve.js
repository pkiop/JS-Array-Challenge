const test1 = {
    input: [1, 40, '라매', '개발자', 51.5, 'a', 88],
    answer: [1, 40, 51.5, 88],
  };
  
  const test2 = {
    input: [1, 2, 3, '4', 5, '6'],
    answer: [1, 2, 3, 5],
  };
  
  const test3 = {
    input: [-3, -2, -1, 0, 1, 2, 3],
    answer: [-3, -2, -1, 0, 1, 2, 3],
  };
  

function solution(inputArray) {
    console.log(inputArray.filter(x => !isNaN(x)))
} //'4','6'은 못거름

solution(test1.input)
solution(test2.input)
solution(test3.input)


