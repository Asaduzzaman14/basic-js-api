
let user = { user: 'max', id: 101, country: 'USA' }


// server aa pathata hola stringifi a convart kora pathata hoy
let userStringyfi = JSON.stringify(user)
console.log(user);
console.log(userStringyfi);


//kono stringi objrct aa access korta hola parse() kora acces korta hoy

let convart = JSON.parse(userStringyfi);
console.log(convart);