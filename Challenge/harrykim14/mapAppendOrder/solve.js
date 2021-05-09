const inputArray = ['홍길동', '둘리', '루피'];

// write your codes
let orderedArray = inputArray.map((el, idx) => {
    return {
        name: el,
        order: idx + 1
    }
})
