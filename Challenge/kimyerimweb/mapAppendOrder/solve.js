const input = ['홍길동', '둘리', '루피']

const answer = input.map((x,idx) => {
    return {
        name: x,
        order: idx+1,
    }
})

console.log(answer)

