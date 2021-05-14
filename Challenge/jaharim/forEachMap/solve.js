const inputArray = [100, 10, 20, 40];

// write your codes

// In case of using 'map' method
//const result = inputArray.map((inputElement) => `${inputElement}%`);

let newArray = [];
const result = inputArray.forEach((inputElement)=>
newArray.push(`${inputElement}%`)
);
console.log(newArray);
