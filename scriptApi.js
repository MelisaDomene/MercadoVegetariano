const apiKey = 'bc2f152ee0msh6147949b9f1d4b7p179ec4jsn1044af59bfa0'; 
const apiUrl = 'https://the-vegan-recipes-db.p.rapidapi.com/';

async function fetchRecipes() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching recipes');
        }

        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image_url || 'placeholder.jpg'; // Usar una imagen de marcador de posición si no hay imagen

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description || 'No description available';

        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeDescription);

        recipesContainer.appendChild(recipeCard);
    });
}

document.addEventListener('DOMContentLoaded', fetchRecipes);