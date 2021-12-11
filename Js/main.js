import { recipesArray } from "../JSON/recipes.js";
import { createRecipe } from "./service/createRecipe.js";
import { checkAllFiltersValue } from "./service/checkFilters.js";
import { displayVignettes } from "./service/displayVignettes.js";
import { createButtons } from "./service/createButtons.js";
import { ifNotFound } from "./service/notFound.js";
import { initState } from "./service/initState.js";

var saisieGenerale = document.getElementById("searchInput");
var saisieIngredients = document.getElementById("ingredients");
var saisieAppareil = document.getElementById("Appareil");
var saisieUstensiles = document.getElementById("Ustensiles");
var listeDesElements = document.getElementById('listeDesElements');
let colone = document.getElementById('coloneElements');
export var section = document.getElementById("section");

//Liste des objets de la liste à l'état initial.
export var listeRecipes = [];
export var listeDesIngredients =[];
export var listeDesUstensiles = [];
export var listeDesAppareils = [];

//CurentListe la liste. 
export var currentListe = [];
var currentFiltreIngredients =[];
var currrentFiltreUstensiles = [];
var currentFiltreAppareils = [];

initState();

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