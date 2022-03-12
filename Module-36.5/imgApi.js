const lodePhoto = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))

}
lodePhoto()

const displayPhoto = (users) => {
    console.log(users);
    let container = document.getElementById('container');

    users.forEach(user => {
        let div = document.createElement('div')

        div.innerHTML = `
        <h2>${user.id}</h2>
        <img onclick='showDetail()' src='${user.thumbnailUrl}'>
        <h5>${user.title}</h5>
       
       
       `
        container.appendChild(div)

    });


}
displayPhoto()
let showDetail = () => {


}







