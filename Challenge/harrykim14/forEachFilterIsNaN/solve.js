const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes
let filterNumber = [];
inputArray.forEach(el => { 
    if(!isNaN(el)) {
        filterNumber.push(el);
    }
})

// let filterNumber = inputArray.filter(el => !isNaN(el))