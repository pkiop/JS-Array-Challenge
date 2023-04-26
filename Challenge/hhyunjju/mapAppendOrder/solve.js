// write your codes
function solution(inputArray) {
   function Name(name, order){
    this.name=name;
    this.order=order;
   }
   // let item1=new Name(namevalue, indexvalue);
   let answer=[];
   inputArray.map((el, index)=> answer.push(new Name(el, index+1)));
   return answer;
}

exports.solution = solution;
