const input =  [
    {
      name: '사과',
      price: 1000,
      quantity: 2,
    },
    {
      name: '수박',
      price: 5000,
      quantity: 20,
    },
    {
      name: '당근',
      price: 2000,
      quantity: 50,
    },
    {
      name: '참외',
      price: 5000,
      quantity: 10,
    },
    {
      name: '오이',
      price: 2000,
      quantity: 49,
    },
]

const answer = input.sort(a,b => {
    return a.price - b.price || a.quantity - b.quantity
})

console.log(answer)