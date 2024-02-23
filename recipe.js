const searchBox = document.querySelector(".searchBox")
const searchBtn = document.querySelector(".searchBtn")
const recipeContainer = document.querySelector(".recipe-container")



const fetchrecipe=async (query)=>{  
    recipeContainer.innerHTML="fetching recipes..."
    const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response= await data.json();
    // console.log(response)
    recipeContainer.innerHTML=""
    response.meals.forEach(meal => {
        const recipeDiv=document.createElement('div')
        recipeDiv.classList.add('recipe')
        recipeDiv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        recipeContainer.appendChild(recipeDiv)
        const button=document.createElement('button')
        button.textContent='View Recipe'
        recipeDiv.appendChild(button)
        recipeContainer.appendChild(recipeDiv)
        
        
    });

}



searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const searchInput=searchBox.value.trim()
    fetchrecipe(searchInput)
    //console.log("button clicked");
})