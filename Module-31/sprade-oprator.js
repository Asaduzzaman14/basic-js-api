let number = [23, 453, 23, 563, 23, 53, 34]

// find large number 
let max = Math.max(34, 53, 44)

// large number form array 
let arrayMax = Math.max(...number, 88)

number.push(999)


console.log(arrayMax);

let number2 = number
console.log(number2);
number.push(323)
console.log(number);