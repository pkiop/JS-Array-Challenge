// write your codes
function solution(inputArray) {
    return inputArray.map((item, idx) => {
        let obj = {};
        obj["name"] = item;
        obj["order"] = idx+1;
        return obj;
    });

}

exports.solution = solution;
