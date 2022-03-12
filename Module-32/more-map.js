// let friend = ['Tom Crise', 'Tom Hanks', 'Tom Brady'];

// let nameLength = friend.map(friend.length)
// console.log(nameLength);


const products = [
    { name: 'water bottle', price: 50, color: "cilver" },
    { name: 'mobile phone', price: 21500, color: 'red' },
    { name: "smart watch", price: 300, color: 'red' },
    { name: "stickey note", price: 30, color: 'black' },
    { name: "water glass", price: 300, color: 'white' }

]

// with for loop
// for (let product of products) {

//     console.log(product.name);
// }

// simple 
let productName = products.map(products => products.name)

let productprice = products.map(products => products.price)

console.log(productprice);

// forEach
products.forEach(products => console.log(products, 'this is for each'));

