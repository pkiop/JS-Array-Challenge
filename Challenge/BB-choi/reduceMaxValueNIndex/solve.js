// write your codes
function solution(inputArray) {
    let result = inputArray.reduce(
        (acc, el, idx) => {
            if (acc.maxValue < el) {
                return {
                    maxValue: el,
                    idx,
                };
            } else {
                return acc;
            }
        },
        {
            maxValue: Number.MIN_SAFE_INTEGER,
            idx: 0,
        }
    );

    return result;
}

exports.solution = solution;
