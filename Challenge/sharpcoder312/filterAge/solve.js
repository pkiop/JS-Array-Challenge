const inputArray = [
	{
		name: '영미',
		age: 25,
	}, 
	{
		name: '일미',
		age: 35,
	},
	{
		name: '이미',
		age: 45,
	},
	{
		name: '삼미',
		age: 55,
	},
]
// write your codes

// const answer = inputArray.filter(function (person) {
// 	return person.age >= 30 && person.age < 50							// 30 <= person.age < 50 - 이런 실수 하지않기
// });
// console.log(answer);

const answer = inputArray.filter(person => person.age >= 30 && person.age < 50)
console.log(answer);


