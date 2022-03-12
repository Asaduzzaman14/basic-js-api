const userInfo = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayuser(data.results))
}
userInfo()
let displayuser = (userInfo) => {
    console.log(userInfo);
    let contain = document.getElementById('container')
    userInfo.forEach(info => {
        let div = document.createElement('div')
        div.classList.add('divStyel')
        div.innerHTML = `
        <h2>name: ${info.name.first}</h2>
        
        <!-- img problem -->
        <img src='${info.picture.large}'>


        <h3>Country: ${info.location.country}</h3>
        <p>City: ${info.location.city}</p>
        <p>PostCode: ${info.location.postcode}</p>
        <p>State: ${info.location.state}</p>
        <h3>street</h3>
        <p> name: ${info.location.street.name}</p>
        <p> number: ${info.location.street.number}</p>
        

        <h3>State</h3>
        <p> latitude: ${info.location.coordinates.latitude}</p>
        <p> longitude: ${info.location.coordinates.longitude}</p>
        
        <h3>TimeZone</h3>
        <p> description: ${info.location.timezone.description}</p>
        <p> offset: ${info.location.timezone.offset}</p>
     

        `
        contain.appendChild(div)

    })

}