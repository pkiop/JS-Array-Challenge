const test1 = {
    input: ['잠', '자', '고', '싶', '다', '용가리'],
    answer: true,
  };
  const test2 = {
    input: ['맛있는', '용가리치킨'],
    answer: false,
  };
  const test3 = {
    input: ['고질라', '용가리 ', '울트라맨'],
    answer: false,
  };  

function solution(inputArray) {
    console.log(inputArray.includes('용가리'))
}

solution(test1.input)
solution(test2.input)
solution(test3.input)