const search = document.querySelector("#search"),
  btn = document.querySelector("#btn"),
  card = document.querySelector("#card");

const GetMeall = async () => {
  const request = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
  );
  const response = await request.json();
  meals = response.meals;

  meals.map((item) => {
    const div = createElement(
      "div",
      "card",

      `<img src="${item.strMealThumb}">
            <h4>${item.strMeal}</h4>
            <button class='btn btn-outline-danger my-2'><a href="${item.strYoutube}">Tutorial</a></button>
            <button class="btn btn-outline-warning my-1"><a href="${item.strSource}">recipe</a></button>
        
            `
    );
    card.appendChild(div);
  });
};
search.addEventListener("change", (e) => {
  card.innerHTML = "";
  GetMeall(e.target.value);
});



const GetMealls = async () => {
  const request = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
  );
  const response = await request.json();
  meals = response.meals;

  meals.forEach((e)=>{
    const div=createElement(
      "div",
      "card",
      `<img src="${e.strMealThumb}">
      <h4>${e.strMeal}</h4>
      <button class='btn btn-outline-danger my-2'><a href="${e.strYoutube}">Tutorial</a></button>
      <button class="btn btn-outline-warning my-1"><a href="${e.strSource}">recipe</a></button>
  
      `
    )
    card.appendChild(div);
  })
};

GetMealls();