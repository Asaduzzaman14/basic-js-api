const lodeQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayquote(data))


}

let displayquote = (newData) => {
    let container = document.getElementById('quot');
    const p = document.createElement('p')
    p.innerHTML = ` ${newData.quote}`
    container.appendChild(p)
    console.log(newData);
}
