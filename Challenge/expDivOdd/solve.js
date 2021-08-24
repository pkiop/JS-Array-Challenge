function solution(inputArray) {
   // 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
   let result = [];
   
   for(let i = 0 ; i < inputArray.length ; i++){
    if(inputArray[i] !== 1){
    if(Math.pow(inputArray[i],2) % 3 === 1){
            result.push(inputArray[i]);
    }
    

   }
} 
   const dd= result.reduce((accumulator, currentValue) => accumulator + currentValue);
   return dd;


}

exports.solution = solution;
