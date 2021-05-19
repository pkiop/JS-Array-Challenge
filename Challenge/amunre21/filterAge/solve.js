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

const answer = inputArray.filter(el=>el.age>=30&&el.age<50)
console.log(answer)