// write your codes
function solution(inputArray) {
    let newArr = inputArray.map((item)=>{
        let newObj = {};
        newObj["name"] = item;
        newObj["order"] = inputArray.indexOf(item) +1;
        return newObj;
    })
    return newArr;
}

exports.solution = solution;
