// write your codes
function solution(inputArray) {
    let max=inputArray[0];
    let min=inputArray[0];
    
    inputArray.forEach(element => {
        if(max < element) {
            max = element;
        }
        if(min > element) {
            min = element;
        }
    });

    return `max : ${max}, min : ${min}`
}

exports.solution = solution;
