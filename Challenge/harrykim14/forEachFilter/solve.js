const inputArray = [100, 10, 20, 40];

// write your codes
let biggerThan40 = [];
inputArray.forEach(el => {
    if(el >= 40) {
        biggerThan40.push(el)
    }
})

// let biggerThan40 = inputArray.filter(el => el >= 40)
