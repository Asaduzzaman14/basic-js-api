fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => display(json))

function display(json) {
    let ul = document.getElementById('ul')
    for (const data of json) {
        console.log(data);
        let li = document.createElement('li');

        li.innerText = `id:${data.id} title: ${data.title}`;
        ul.appendChild(li)
    }

}
