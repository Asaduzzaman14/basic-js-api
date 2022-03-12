fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(res => photo(res))


function photo(imgs) {
    let p = document.getElementById('p')
    for (let img1 of imgs) {

        let h3 = document.createElement('h3')
        h3.innerHTML = (img1.title)
        let photoBody = document.createElement('p')
        photoBody.innerHTML = `   <img src="${img1.url}" alt="">`
        p.appendChild(h3)
        p.appendChild(photoBody)

    }


}
