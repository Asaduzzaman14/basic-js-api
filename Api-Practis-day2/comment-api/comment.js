let lodeComment = () => {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(res => dispaly(res)) //1
}
// 3
lodeComment()

//2 4 5
let dispaly = (datas) => {
    let container = document.getElementById('container')

    datas.forEach(data => {
        // console.log(data.id);
        let div = document.createElement('div')
        div.classList.add('divClas')

        div.innerHTML = `
        <h2>ID: ${data.title}</h2>
        <h2>name: ${data.name.slice(0, 10)}</h2>
      
        <button onclick='detailes(${data.id})'>More Detail</button>
        `
        container.appendChild(div)
    })
}
https://jsonplaceholder.typicode.com/posts/1
let detailes = (dataId) => {
    console.log(dataId);
    let url = `https://jsonplaceholder.typicode.com/posts/${dataId}`
    fetch(url)
        .then(res => res.json())
        .then(data => dispalydata(data))


}
let dispalydata = (clickId) => {
    console.log(clickId);

    let informaiton = document.getElementById('user-information')
    let div = document.createElement('div')
    div.classList.add('divClas')

    div.innerHTML = `
    <p>${clickId.name}</p>
    `

    informaiton.appendChild(div)


}


// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক
// করলে(কমেন্ট এর div এ বা কোন একটা বাটন এ)সেই কমেন্ট এর
// আইডি নিয়ে সেটা api এর url এ বসিয়ে(ডাইনামিকভাবে টেমপ্লেট স্ট্রিং
//      দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে
//       পারতেছো কিনা।


// Programming Hero9:14 PM
// https://jsonplaceholder.typicode.com/posts/1
// Programming Hero9:16 PM
// Sports: https://www.thesportsdb.com/api/v1/json/2/all_sports.php
// Sports: https://www.thesportsdb.com/api/v1/json/2/all_countries.php
// Random User: https://randomuser.me/api/
// Food API: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// Country: https://restcountries.com/v3.1/all