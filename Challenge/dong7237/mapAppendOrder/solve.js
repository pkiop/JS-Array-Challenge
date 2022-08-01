// write your codes
function solution(inputArray) {

    return inputArray = inputArray.map((element, i) => {
        i++
        return {
            name: element,
            order: i
        }
    })
}

exports.solution = solution;
