const inputArray = ['잠', '자', '고', '싶', '다', '용가리'];

// write your codes
let res = false
const result = inputArray.find(e => {
    if(e == '용가리') res = true
})
console.log(res);