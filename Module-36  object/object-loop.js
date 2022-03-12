const student = {
    name: 'Tom',
    id: 101,
    major: 'Methemetis',
    isReach: true,
    money: 10500,

}
// console.log(student);

// for (let x of student) { } //array loop
// for (let y in objectName) { }      //object loop


for (let prop in student) {
    console.log(prop);
    // console.log(student[prop]);
}


let key = Object.keys(student)
// console.log(key);
for (let prop of key) {
    // console.log(prop, student[prop]);
}


let stu = Object.entries(student)       // two daimansonal arrat diba
// console.log(stu); 


for (const [ke, va] of Object.entries(student)) {

    // console.log(ke, va);
}


let x = ['color', 'name', 'tom']
for (let y in x) {
    // console.log(y);
}
