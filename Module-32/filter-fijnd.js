const number = [22, 43, 2, 44, 64, 22, 11, 12, 15, 99]


let bigNumber = number.filter(number => number > 20)
console.log(bigNumber);

const smallist = number.filter(number => number < 10)
console.log(smallist);



// filter expensive product 
const products = [
    { name: 'water bottle', price: 50, color: "cilver" },
    { name: 'mobile phone', price: 21500, color: 'red' },
    { name: "smart watch", price: 300, color: 'red' },
    { name: "stickey note", price: 30, color: 'black' },
    { name: "water glass", price: 300, color: 'white' }

];
let expensiv = products.filter(products => products.price > 100)
console.log(expensiv);



let redColor = products.filter(products => products.color == 'red')
console.log(redColor);



// find  1 ra element return korba
let red = products.find(products => products.color == 'red')
console.log(red);

