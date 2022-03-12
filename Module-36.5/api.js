let lodeSingleuser = () => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
lodeSingleuser()

let displaySingleUser = (user) => {
    // console.log(user);
}

//meal db


//spiner 
const spinner = (myStyle) => {
    document.getElementById('spiner').style.display = myStyle

}
const toggleResult = (myStyle) => {
    document.getElementById('meals').style.display = myStyle

}



const seachMeal = () => {
    const searchText = document.getElementById('seachFild').value;

    spinner('block')
    toggleResult('none')


    lodeMeal(searchText)
    document.getElementById('seachFild').value = '';

}



const lodeMeal = (searchText) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))


}

const displayMeals = meals => {
    console.log(meals);

    const constainer = document.getElementById('meals');
    constainer.textContent = '';
    if (!meals) {
        alert('meals not found')
    }
    meals?.forEach(meal => {
        let div = document.createElement('div')
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <button onclick="loadeMealDetail('${meal.strMeal}')"> Click Me </button>
        <p> ${meal.strMeasure14 ? meal.strMeasure14 : 'none'} </p>
        `
        constainer.appendChild(div)

    });
    spinner('none')
    toggleResult('block')

}

// lodeMeal('fish')

const loadeMealDetail = (mealname) => {
    console.log(mealname);
}





/* let seacMeal = () => {
    const seacrhText = document.getElementById('seachFild').value;

    displayMeal(seacrhText)
    document.getElementById('seachFild').value = '';
}
 */






























/* 
const displayMeal = (meals) => {

    let id = document.getElementById('id')

    for (let meal of meals) {
        // console.log(meal);
        let div = document.createElement('div')
        div.classList.add('divStyle')
        div.innerHTML = `
        <h2>${meal.strIngredient1}</h2> 
        <img src='${meal.strMealThumb}'>
        <button onclick='moreDetail("${meal.strIngredient1}")'>Detail</button>
        
        `

        id.appendChild(div)
    }

}
let moreDetail = (foodTitle) => {
    // console.log(foodId);
    URL(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodTitle}`)

} */