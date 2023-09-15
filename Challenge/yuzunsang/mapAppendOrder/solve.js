// write your codes
function solution(inputArray) {
    let result = [];

    inputArray.map((el, idx) => result.push({
        name : el,
        order : idx + 1,
    }
    ));

    return result;
}

exports.solution = solution;
