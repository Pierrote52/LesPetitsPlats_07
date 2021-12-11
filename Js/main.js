import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";

var value = document.getElementById("searchInput");
var section = document.getElementById("section");
//Liste des objets de la liste. 
var listeRecipes = [];

//CurentListe la liste. 

for(let i=0; i<recipesArray.length; i++){
    var recipe = createRecipe(recipesArray[i][1]);
    listeRecipes.push(recipe);
}

displayVignettes(listeRecipes);

//affiche les vignettes présentent dans la liste liste.
function displayVignettes(liste){
    section.innerHTML="";
    for(let i=0;i<liste.length;i++){
        section.appendChild(liste[i].htmlContent());
    }
}





// Quand un element est modifier saisie dans la grande barre de recherche.
value.addEventListener('keyup', function(v){
    //PLus de 3 caractères ? 
    if(v.target.value.length >=3){
        console.log(v.target.value);
        checkAllFiltersValue(v.target.value);
    }

});

//Regarde dans tout les filtres si la value envoyée dans la function 
//est présente dans tous les filtres de la liste listeRecipes. 
function checkAllFiltersValue(value){
    

}

