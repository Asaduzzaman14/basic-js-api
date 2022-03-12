class Support {

    name;
    role = 'support WEB Developer';
    adress;
    constructor(name, adress) {
        this.name = name;
        this.adress = adress

    }
    myFun() {
        console.log(this.name, 'start a suppor season');
    }

}
let salman = new Support('salman Khan', 'BD');
let amirKhan = new Support('Amir Khan', 'india');
let karina = new Support('karina', 'singapur');
let salmanKhanArBondu = new Support('srk khan', 'bangladesh');

salman.myFun()
amirKhan.myFun()

console.log(salman, amirKhan, karina, salmanKhanArBondu);
// console.log(amirKhan);