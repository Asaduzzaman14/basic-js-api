const laptop = { name: 'HP', color: 'silver', weight: '2kg', display: '15inch' };

let key = Object.keys(laptop)   // show object property
let valu = Object.values(laptop)     // show object property values

// console.log(key);
// console.log(valu);



//  entries give pares value
const pairs = Object.entries(laptop)
// console.log(pairs);

//object seal 
Object.seal(laptop)


delete laptop.color
// console.log(laptop);

