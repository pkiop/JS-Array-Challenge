// write your codes

function solution(inputArray) {
    return result = inputArray.reduce((acc, cur) => {
        acc[cur.nickname] = cur.name;
        // cur.nickname -> key, acc[cur.nickname] -> value 
        return acc;
    }, {});
}

exports.solution = solution;
