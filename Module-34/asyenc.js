const searchFood = () => {
    let searchFild = document.getElementById('search-fild')
    let fildValue = searchFild.value
    // console.log(fildValue);
    searchFild.value = ' '
    if (fildValue == '') {
        alert('please write some thing')
    }
    else {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${fildValue}`

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => dislsySearchReasult(data.meals))
    }

}

let dislsySearchReasult = (meals) => {
    // console.log(meals);
    const result = document.getElementById('result')
    // result.textContent = '';
    result.innerHTML = ' ';
    if (meals.length == 0) {
        alert('food not found')
    }
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

const lodeMealDetail = async mealid => {
    // console.log(mealid);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`

    const res = await fetch(url);
    const data = await res.json()
    displauyMile(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displauyMile(data.meals[0]))

}



let displauyMile = (mile) => {
    // console.log(mile);

    let mealDetail = document.getElementById('meal-detailes')
    mealDetail.textContent = '';
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
    mealDetail.appendChild(div)
    console.log("naw kahw");
}
