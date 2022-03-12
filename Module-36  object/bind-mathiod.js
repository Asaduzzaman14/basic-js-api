const student = {
    name: 'Jhankar',
    id: 101,
    isReach: true,
    money: 10500,

    treat: function (expance) {
        this.money = this.money - expance
        console.log(this);
        return this.money
    }

}
const alom = {
    name: 'alom',
    id: 101,
    money: 5000
}
const heroAlom = {
    name: 'heroAlom',
    id: 201,
    money: 900
}


// student.treat(200)
student.treat(300)

const alomtreet = student.treat.bind(alom)
alomtreet(500)
alomtreet(500)
let heroAloms = student.treat.bind(heroAlom)
heroAloms(50)
heroAloms(100)
