// const test1 = {
//     input: ['홍길동', '둘리', '루피'],
//     answer: [
//         { name: '홍길동', order: 1 },
//         { name: '둘리', order: 2 },
//         { name: '루피', order: 3 },
//     ],
// };

const inputArray = ['홍길동', '둘리', '루피'];

const answer = inputArray.map((el, idx) => {
    return {
        name: el,
        order: idx+1
    }
});

