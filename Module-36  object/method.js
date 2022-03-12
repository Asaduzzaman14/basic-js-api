const student = {
    name: 'Jhankar',
    id: 101,
    major: 'Methemetis',
    isReach: true,
    money: 10500,
    subject: ['English', 'Bangla', 'Physics', 'chemistry'],
    bestFriend: {
        name: 'i don not know',
        major: 'methematis'
    },
    takeExam: function () {
        console.log(this.name, 'taking Exam');
    },
    treat: function (expance, tips) {
        this.money = this.money - expance
        console.log(this);
        return this.money
    }


}
student.takeExam()
student.treat(5000, 100)
student.treat(5000, 200)



let stuInfo = Object.keys(student)
// console.log(stuInfo);