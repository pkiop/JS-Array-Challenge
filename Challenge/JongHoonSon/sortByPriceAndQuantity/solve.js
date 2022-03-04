// write your codes
function solution(inputArray) {
    
    const resultArray = inputArray.sort((a, b) => {

        if(a.price == b.price) {
            return a.quantity - b.quantity;
        }

        return a.price - b.price
    });

    return resultArray;
}

exports.solution = solution;
