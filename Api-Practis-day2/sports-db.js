const sportsApi = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => dsplayPlayerData(data.sports))

}

sportsApi()

let dsplayPlayerData = (data) => {
    console.log(data);
    let container = document.getElementById('container')
    data.forEach(ele => {
        let div = document.createElement('div')
        div.classList.add('player')
        div.innerHTML = `
        
        <h1>idSport: ${ele.idSport}</h1>
        <h2>strFormat:${ele.strFormat}</h2>
        <p>strSpor:t${ele.strSport}</p>
        <p>strSportDescription${ele.strSportDescription.slice(0, 20)}</p>
       <bitton onclick='daynamicData(ele.idSport)'> Detaile</button>
        `
        container.appendChild(div)
    });

}

const daynamicData = (playerId) => {

    url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`


}