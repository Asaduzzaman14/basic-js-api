//  objct literal
const student = { name: 'sakib al hasan', job: 'cricketer' }


//object constractor
const person = new Object()
// console.log(person);



// const son = Object.create(null)
const son = Object.create(student)   // inherite


// console.log('name:', son.name, 'JOB:', son.job);



// 4 create a onject using class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
const detail = new People('tom Hanks', 27)
// console.log(detail);




// cratae a Object using function 

function myObject(name) {
    this.name = name;
}
const access = new myObject('pitter')
// console.log(access);






