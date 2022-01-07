// write your codes
function solution(inputArray) {
    let result = inputArray.reduce((acc, cur) => {
        return {
            ...acc,
            // key값이 동적으로 결정될때 []
            [cur.nickname]: cur.name,
        };
    }, {});
    return result;
}

exports.solution = solution;
