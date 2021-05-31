const input = [
    {
      name: '사과',
      price: 1000,
    },
    {
      name: '수박',
      price: 5000,
    },
    {
      name: '당근',
      price: 2000,
    },
    {
      name: '참외',
      price: 10000,
    },
]

const answer = input.sort((x,y) => x.price - y.price)

console.log(answer)