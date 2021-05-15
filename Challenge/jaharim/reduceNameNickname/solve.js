const inputArray = [
  {
    name: '홍길동',
    nickname: 'hong',
  },
  {
    name: '둘리',
    nickname: '2li',
  },
  {
    name: '오스트랄로피테쿠스',
    nickname: '1Cin',
  },
];

// write your codes

const doReduce = inputArray.reduce((prev,curr) => { return {...prev, [curr.nickname] : curr.name, }},{});

console.log(doReduce);