// write your codes
function solution(inputArray) {
    //[객체, 객체, 객체]를 하나의 {객채}로 출력.
 return inputArray.reduce((prev, el)=>{
   return{
      ...prev,
      [el.nickname]: el.name,
   };
 }, {});
}

exports.solution = solution;
