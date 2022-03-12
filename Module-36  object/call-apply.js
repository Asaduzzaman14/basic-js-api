const student = {
    name: 'Jhankar',
    id: 101,
    isReach: true,
    money: 8000,

    treat: function (expance, tips, tax) {
        this.money = this.money - expance - tips - tax
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
    money: 10000
}


// student.treat(200)


// const alomtreet = student.treat.bind(alom)
// alomtreet(500)

// let heroAloms = student.treat.bind(heroAlom)
// heroAloms(50)


// student.treat.call(heroAlom, 500, 100, 50)
// student.treat.call(heroAlom, 200, 100, 50)




student.treat.apply(alom, [500, 100, 50])
student.treat.apply(alom, [1000, 300, 200])

student.treat.apply(heroAlom, [1000, 300, 200])


const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend()); 