function lodePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
lodePost()
function displayPost(posts) {
    let container = document.getElementById('container')
    for (let post of posts) {
        let div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = ` <h3>${post.title}</h3>
        <p> ${post.body}</p>
        `
        container.appendChild(div)
    }

}