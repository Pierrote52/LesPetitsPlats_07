import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";

var value = document.getElementById("searchInput");
var section = document.getElementById("section");
//Liste des objets de la liste. 
var listeRecipes = [];

for(let i=0; i<recipesArray.length; i++){
    var recipe = createRecipe(recipesArray[i][1]);
    listeRecipes.push(recipe);
}
//affiche les vignettes présentent dans la liste listeRecipes.
initVignettes();

function initVignettes(){
    for(let i=0;i<listeRecipes.length;i++){
        section.appendChild(listeRecipes[i].htmlContent());
    }
}


value.addEventListener('keyup', function(v){
    //PLus de 3 caractères ? 
    if(v.target.value.length >=3){
        console.log(v.target.value);
        
    }

});

