const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes

const result = inputArray.map(el => el * el)
                            .filter(el => el % 2 === 1)
                            .reduce((acc, el) => acc + el, 0);
            
console.log(result);

