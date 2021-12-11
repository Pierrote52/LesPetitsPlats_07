import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";
import { checkAllFiltersValue } from "./service/checkFilters.js";
import { displayVignettes } from "./service/displayVignettes.js";
import { createButtons } from "./service/createButtons.js";
import { ifNotFound } from "./service/notFound.js";

var saisieGenerale = document.getElementById("searchInput");
var saisieIngredients = document.getElementById("ingredients");
var saisieAppareil = document.getElementById("Appareil");
var saisieUstensiles = document.getElementById("Ustensiles");
var listeDesElements = document.getElementById('listeDesElements');
let colone = document.getElementById('coloneElements');
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
// Quand un element est modifier saisie dans la grande barre de recherche.
saisieGenerale.addEventListener('keyup', function(v){
    //Plus de 3 caractères ? 
    if(v.target.value.length >=3){

        console.log(v.target.value);
        //Ici nous envoyons la valeur saisie , ainsi que la liste à tester. 
        currentListe=[];
        checkAllFiltersValue(v.target.value, listeRecipes);
        ifNotFound();
        
    }else {
        displayVignettes(listeRecipes);
    }

});

//Declanche un evenement quand le champ ingredient est focus. 
saisieIngredients.addEventListener('focusin', function(){

    listeDesElements.style.background = "dodgerblue";
    createButtons(listeDesIngredients);
    listeDesElements.style.height = colone.offsetHeight + "px";
});
saisieIngredients.addEventListener('focusout', function(){
    listeDesElements.style.height = "0";
    listeDesElements.style.background = "transparent"
    
});
saisieAppareil.addEventListener('focusin', function(){

    listeDesElements.style.background = "green";
    createButtons(listeDesAppareils);
    listeDesElements.style.height = colone.offsetHeight + "px";
});
saisieAppareil.addEventListener('focusout', function(){
    listeDesElements.style.height = "0";
    listeDesElements.style.background = "transparent"
    
});
saisieUstensiles.addEventListener('focusin', function(){

    listeDesElements.style.background = "red";
    createButtons(listeDesUstensiles);
    listeDesElements.style.height = colone.offsetHeight + "px";
});
saisieUstensiles.addEventListener('focusout', function(){
    listeDesElements.style.height = "0";
    listeDesElements.style.background = "transparent"
    
})