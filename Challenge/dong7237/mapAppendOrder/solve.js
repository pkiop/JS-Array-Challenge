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


const a = ['홍길동', '둘리', '루피']
console.log(solution(a))
exports.solution = solution;
