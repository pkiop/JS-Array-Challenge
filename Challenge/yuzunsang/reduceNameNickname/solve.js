// write your codes
// const test1 = {
//     input: [
//       {
//         name: '홍길동',
//         nickname: 'hong',
//       },
//       {
//         name: '둘리',
//         nickname: '2li',
//       },
//       {
//         name: '오스트랄로피테쿠스',
//         nickname: '1Cin',
//       },
//     ],
//     answer: { hong: '홍길동', '2li': '둘리', '1Cin': '오스트랄로피테쿠스' },
//   };
function solution(inputArray) {
    const result = inputArray.reduce((acc, cur) => function (users, user) {
        for (user in users) {
            return {}
        }

        return acc;
    }, {});

    return result;
}

exports.solution = solution;
