const inputArray =  [3, 29, 38, 12, 57, 74, 40, 85, 61]

const answer = inputArray.reduce((acc,el,idx) => {
    if(acc.maxValue < el){
        return {
            maxValue: el,
            idx
        }
    }

    return acc
},{
    maxValue: 0,
    idx: -1
})


console.log(answer)



















// answer: { maxValue: 85, idx: 7 }
