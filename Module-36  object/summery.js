const pen = {
    brand: 'matador', price: 5,
    color: { first: 'red', second: 'black' }
}
for (let key in pen) {
    console.log(pen[key]);
}


const a = { a: 1 }
const b = { a: 1 }
if (a === b) {

}

const bindd = pen.writePoem.bind(a)
bindd();



// this 