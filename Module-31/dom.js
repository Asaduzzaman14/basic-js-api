
document.getElementById('borderAdd').addEventListener('click', function () {
    document.getElementById('friend-container').style.border = '2px solid tomato'


})

document.getElementById('addBackground').addEventListener('click', function () {
    let friends = document.getElementsByClassName('friend')


    for (let friend of friends) {
        friend.style.background = 'skyblue'
    }

})
document.getElementById('addFriend').addEventListener('click', function () {

    let friend = document.createElement('div')
    friend.classList.add('friend')
    friend.innerHTML = `  
    <h3 class="friend-name">Friend-new</h3>
    <p>Ipsum, soluta voluptas?</p>
   `
    let friendContainer = document.getElementById('friend-container')
    friendContainer.append(friend)

})
document.querySelector('#input-btn').addEventListener('click', function () {
    console.log('btni s click');

})
