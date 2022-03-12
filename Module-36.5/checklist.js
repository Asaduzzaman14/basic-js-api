// 1
const student = {
    id: 101,
    name: { firstName: 'md', lastName: 'Asad' },
    favColor: ['balck', 'blue'],
    calc: function myFun() {
        return this.name
    },
    address: { division: 'chittagong', distric: 'khagrachhary' },


}

let tamplet = `${student.favColor[1]} student id: ${student.id} name: ${student.name.firstName} ${student.name.lastName}`
// console.log(tamplet);


// 3.1

const zeroParm = () => {
    return 89
}
// console.log(zeroParm());

// 3.2

const oneParm = num => {
    return num / 7
}
let res = oneParm(50)
// console.log(res);

// 3.4
const adding = (num1, num2) => {
    let res1 = num1 + 7;
    let res2 = num2 + 7;
    let total = res1 + res2;
    return total

}
let add = adding(10, 10)
// console.log(add);

// 4
const numbers = [14, 49, 70, 140, 7, 21, 30, 11]
const result = numbers.map(num => num / 7)
// console.log(result);

// 5
numbers.forEach(ele => { ///sudu arrar ar element gula diba
    // console.log(ele);
});
let filters = numbers.find(num => num < 20)
// console.log('helloo', filters);


let stu = {
    id: 101,
    name: 'tom',
    address: 'usa'
}

let { id, name } = stu
// console.log(id, name);

const arr = [23, 22, 3]

let [blance] = arr
console.log(blance);

