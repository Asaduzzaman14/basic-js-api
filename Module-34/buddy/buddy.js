let lodeBuddes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(res => display(res))
}
lodeBuddes()

const display = data => {

    let id = document.getElementById('buddies')
    let buddeys = data.results
    console.log(buddeys);

    for (let budy of buddeys) {
        const p = document.createElement('p')
        p.innerText = `Email :  ${budy.email}, Name : ${budy.name.first} `
        id.appendChild(p)
        console.log(p);
    }

}
display()