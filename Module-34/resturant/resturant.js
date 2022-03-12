const searchFood = () => {
    let searchFild = document.getElementById('search-fild')
    let fildValue = searchFild.value
    // console.log(fildValue);
    searchFild.value = ''
    if (fildValue == '') {
        alert('please write some thing')
    }
    else {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${fildValue}`

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchReasult(data.meals))
    }

}

const displaySearchReasult = (meals) => {

    // console.log(meals);
    const result = document.getElementById('result')

    result.textContent = '';
    // result.innerHTML = '';


    if (!meals) {
        alert('food not found')
    }
    else {
        meals.forEach(meal => {
            // console.log(meal);
            let div = document.createElement('div')
            div.innerHTML = `
        <div class="col">
            <div class="card">
                <img onclick='lodeMealDetail(${meal.idMeal})' src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        </div>
        `
            result.appendChild(div)
        });
    }
}

const lodeMealDetail = (mealid) => {
    // console.log(mealid);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMile(data.meals[0]))

}
let displayMile = (mile) => {
    // console.log(mile);

    let id = document.getElementById('meal-detailes')

    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${mile.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${mile.strMeal}</h5>
        <p class="card-text">${mile.strInstructions.slice(0, 100)}</p>
        <a href="${mile.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    id.appendChild(div)

}
