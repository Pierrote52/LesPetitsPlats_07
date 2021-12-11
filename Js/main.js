import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";
import { checkAllFiltersValue } from "./service/checkFilters.js";
import { displayVignettes } from "./service/displayVignettes.js";

var saisieGenerale = document.getElementById("searchInput");
var saisieIngredients = document.getElementById("ingredients");
var saisieAppareil = document.getElementById("Appareil");
var saisieUstensiles = document.getElementById("Ustensiles");
var listeDesElements = document.getElementById('listeDesElements');
export var section = document.getElementById("section");
//Liste des objets de la liste. 
var listeRecipes = [];
var listeDesIngredients =[];
var listeDesUstensiles = [];
var listeDesAppareils = [];

//CurentListe la liste. 
export var currentListe = []

for(let i=0; i<recipesArray.length; i++){
    var recipe = createRecipe(recipesArray[i][1]);
    listeRecipes.push(recipe);
    //Ajoute les ingredients à la liste liste des ingredients.
    for(let ingredient of recipe.ingredients){
        if(!listeDesIngredients.includes(ingredient.ingredient)){
            listeDesIngredients.push(ingredient.ingredient)
        }
    }
    //Ajoute les appareils(four, blender, ect...) à la liste.  .
    if(!listeDesAppareils.includes(recipe.appliance)){
            listeDesAppareils.push(recipe.appliance)
    }
    for(let ustenssils of recipe.ustensils){
        if(!listeDesUstensiles.includes(ustenssils)){
            listeDesUstensiles.push(ustenssils)        
        }

    }
    
    
    
   
}
console.log(listeDesUstensiles)

displayVignettes(listeRecipes);
//affiche les vignettes présentent dans la liste liste.






// Quand un element est modifier saisie dans la grande barre de recherche.
saisieGenerale.addEventListener('keyup', function(v){
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

//Declanche un evenement quand le champ ingredient est focus. 
saisieIngredients.addEventListener('focusin', function(){
    
    listeDesElements.style.background = "dodgerblue";
    let colone = document.getElementById('coloneElements');
    //Faire une boucle pour creer et appenchild a la colone les elements ingredients de la liste des ingredients. 
    for(let ingredient of listeDesIngredients){
        let button = document.createElement("BUTTON");
        button.innerHTML = ingredient;
        button.className= "col-3";
        colone.appendChild(button)
    }
    listeDesElements.style.height = colone.offsetHeight + "px";
});
saisieIngredients.addEventListener('focusout', function(){
    listeDesElements.style.height = "0";
    listeDesElements.style.background = "transparent"
    
})