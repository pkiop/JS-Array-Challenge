// function solution(inputArray1, inputArray2) {
//  return inputArray1.filter((item)=>{
//     for(let i=0; i<inputArray2.length; i++){
//         if(inputArray2[i]===item){
//             return inputArray2[i];
//         }
//     }
//  });   
// }

// function solution(inputArray1, inputArray2) {
//     return inputArray1.filter((item)=>{
//        if(inputArray2.includes(item)){return item};
//     });   
//    }

function solution(inputArray1, inputArray2) {
    return inputArray1.filter((el)=>inputArray2.includes(el));   
   }

exports.solution = solution;
