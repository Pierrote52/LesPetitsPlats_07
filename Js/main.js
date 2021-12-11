import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";
import { checkAllFiltersValue } from "./service/checkAllFilters.js";

var value = document.getElementById("searchInput");
export var section = document.getElementById("section");
//Liste des objets de la liste. 
var listeRecipes = [];

//CurentListe la liste. 
export var currentListe = []

for(let i=0; i<recipesArray.length; i++){
    var recipe = createRecipe(recipesArray[i][1]);
    listeRecipes.push(recipe);
}

displayVignettes(listeRecipes);
//affiche les vignettes présentent dans la liste liste.






// Quand un element est modifier saisie dans la grande barre de recherche.
value.addEventListener('keyup', function(v){
    //Plus de 3 caractères ? 
    if(v.target.value.length >=3){
        console.log(v.target.value);
        //Ici nous envoyons la valeur saisie , ainsi que la liste à tester. 
        currentListe=[];
        checkAllFiltersValue(v.target.value, listeRecipes);
    }else {
        displayVignettes(listeRecipes);
    }

});

//Regarde dans tout les filtres si la value envoyée dans la function 
//est présente dans tous les filtres de la liste. 

