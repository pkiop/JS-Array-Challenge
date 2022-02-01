// write your codes
function solution(inputArray) {
    var isEven = function(value) {
        return value % 2 != 0;
    };
    var outputArray = inputArray.filter(isEven);
    return outputArray;
}

exports.solution = solution;