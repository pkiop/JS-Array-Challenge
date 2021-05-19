const inputArray = ['잠', '자', '고', '싶', '다', '용가리'];

// write your codes

let res = false;
const result = inputArray.find((item)=>
    
{if(item === '용가리'){
        res = true;
    }
    else{
        res = false;
    }
    }
)

console.log(res);