// 배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요
// write your codes

const inputArray = [
    {name: '재만', age: 36},
    {name: '준호', age: 30},
    {name: '영희', age: 28},
    {name: '은혜', age: 45},
    {name: '영수', age: 55}
];

let answer = inputArray.filter(e => e.age >= 30 && e.age < 50)
        .sort(function(a, b) {
            if (a.age > b.age) return 1;
            if (a.age == b.age) return 0;
            if (a.age < b.age) return -1;
        })

console.log(answer);
