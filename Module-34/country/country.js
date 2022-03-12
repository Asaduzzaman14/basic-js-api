

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => displayCounty(res))

const displayCounty = (countries) => {
    // for (let name of data) {
    //     console.log(name.name);

    // }
    let countryDiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country);
        let div = document.createElement('div')
        div.classList.add('h3')
        div.innerHTML = `
        <h3> ${country.name.common} </h3>
        <p> ${country.capital} </p>
        <button onclick='lodeCountryName(" ${country.name.common}")'> Detailes</button>
        `
        countryDiv.appendChild(div)
        // const h3 = document.createElement('h3')
        // h3.innerText = (country.name.common)
        // div.appendChild(h3)

        // let p = document.createElement('p')
        // p.innerText = (country.name.capital)
        // div.appendChild(p)
        // countryDiv.appendChild(div)


    });
}

let lodeCountryName = (names) => {

    const url = `https://restcountries.com/v3.1/name/ ${names}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

let displayCountryDetail = (datas) => {
    console.log(datas);
    const div = document.getElementById('dispaly-detaile')
    div.innerHTML = `
    <h2>${datas.name.common}</h2>
    <h3>${datas.capital}</h3>
    <img src='${datas.flags.png}'>
    `


}