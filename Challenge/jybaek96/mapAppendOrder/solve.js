// write your codes
function solution(inputArray) {
   let result = inputArray.map((item,index) => {
       let obj = {};
       obj.name = item;
       obj.order = index + 1;
       return obj;
   });
   return result;
}

exports.solution = solution;
