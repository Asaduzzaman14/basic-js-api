// 1
/*
// let dia variable deaclear korla value change kor jay
let number = 330;
number = 222;
console.log(number);
 */



/* // const dia variable deaclear korla value change kora jay na
const number = 55;
number = 33 //wrong
console.log(number); */

// 2

/* const name = 'MD:Aaduzzaman';
const address = 'chittagong khagracharry';
const phone = +23332123;
const age = 21;

let tampleatString = `Hi, my name is ${name}  home town ${address}
and my contuct number ${phone} and age ${age} `
console.log(tampleatString);
 */



// 3
// 3.1

/* let division = num1 => num1 / 5;
let res = division(20);
console.log(res);
 */

// 3.2

////////
/* const addAndTimes = (number1, number2) => {
    let num1 = number1 + 2
    let num2 = number2 + 2
    return num1 * num2

}
let result1 = addAndTimes(18, 8)
console.log(result1); */


// 3.3
/*
let thireeTimes = (x1, x2, x3) => {
    return x1 * x2 * x3;

}
console.log(thireeTimes(2, 2, 2)); */


// 3.4
/* let TwoParm = (num1, num2) => {
    let add1 = num1 + 2;
    let add2 = num2 + 2;
    return time = add1 * add2;

}
console.log(TwoParm(10, 20));
 */


// map
// 5 array map and every elemant times 5;


/*
let myNum = [4, 6, 3, 6, 7, 12, 3, 9]
let timeResult = myNum.map(x => x * 5)
console.log(timeResult);
 */

// 6
// return odd number

/*
const numbers = [22, 43, 223, 55, 66, 88, 99, 354, 2, 45]
let odd = numbers.filter(num => num % 2 != 0)
console.log(odd);
 */

// 7
/*
let products = [
    { name: 'book', price: 232 },
    { name: 'pen', price: 550 },
    { name: 'mouse', price: 5000 },
    { name: 'keybord', price: 800 },
]
let myProduct = products.find(x => x.price == 5000)
console.log(myProduct);
 */

// 7.5

// 8

// object destructuring 
/* 
let objects = { name: 'tom', age: 1, color: 'red' };
let { name, color, age } = objects
console.log(name, color, age);
 */


// 9
/* let numberS = [7, 54, 22, 56, 33]
let { 2: three } = numberS

console.log(three);
 */

// 10
/* let thireeParems = (n1, n2, n3 = 7) => {
    let addResult = n1 + n2 + n3;
    return addResult;

}
let adding = thireeParems(11, 22,)
console.log(adding);
 */
// 11
// optional 

let parson = {
    name: 'tom Hanks',
    id: 101,
    Country: 'USA',
    crs: {
        car1: 'Ford',
        car2: 'bmw',
        bike: [
            'yemaha', 'honda', 'bmw'
        ]
    }
};
const [a, b, c] = parson.crs.name.bike;
console.log(a, b, c);



