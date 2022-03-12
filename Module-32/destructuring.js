/* let fish = { name: 'King Hilsha', age: '1 year', address: 'chandpur', phone: +11542443, id: 111 }


// regular log 
console.log(fish.name);
console.log(fish.name);
console.log(fish.name);
console.log(fish.name);


// object Destructuring

const { name, age, address, phone, id } = fish

console.log(name, id);
console.log(phone, address);
console.log(age, name);
console.log(name, id);
 */




const Company = {
    name2: 'GP',
    ceo: { id1: 111, age1: 30, height: '5 fit 6 inc' },
    web: {
        work: 'web development', framwork: 'react',
        tack:
            { first: 'html', second: 'css' }
    },

}
const { name2 } = Company;
console.log(name2);
const { id1, age1 } = Company.ceo;
console.log(id1, age1);
const { work, framwork } = Company.web;



const { first, second } = Company.web.tack;
console.log(first, second);

