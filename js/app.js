const searchBtn = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};

const displaySearchResult = (meals) => {
  // console.log(meals)
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `  <div onclick="loadMeailDetail(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5>${meal.strMeal}</h5>
        <h5>Country: ${meal.strArea}</h5>
       <p>${meal.strInstructions.slice(0, 250)}</p>

      </div>
    </div>`;
    searchResult.appendChild(div);
  });
};

const loadMeailDetail = (meailid) => {
  // console.log(meailid)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meailid}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = ` <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5>${meal.strMeal}</h5>
   <p>${meal.strInstructions}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Youtube</a>
  </div>`;
       mealDetails.appendChild(div);
};
