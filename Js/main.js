
import { checkAllFiltersValue } from "./service/checkFilters.js";
import { displayVignettes } from "./service/displayVignettes.js";
import { createButtons } from "./service/createButtons.js";
import { ifNotFound } from "./service/notFound.js";
import { initState } from "./service/initState.js";
import { reciseCurrentListeElement } from "./service/recizeCurrentList.js";
import { createFiltreForDisplay } from "./service/checkFilters.js";
import { elementsName } from "./models/elementsName.js";

var saisieGenerale = document.getElementById("searchInput");
var saisieIngredients = document.getElementById("ingredients");
var saisieAppareil = document.getElementById("Appareil");
var saisieUstensiles = document.getElementById("Ustensiles");
export var listeDesElements = document.getElementById('listeDesElements');
export let colone = document.getElementById('coloneElements');
export var section = document.getElementById("section");

//Liste des objets de la liste à l'état initial.
export var listeRecipes = [];
export var listeDesIngredients =[];
export var listeDesUstensiles = [];
export var listeDesAppareils = [];
export let listeNomDeRecette =[];

//CurentListe la liste d'éléments filtrés. dans la fenêtre en bas des choix. 
export var currentListe = [];


//Ici nous avons la liste des filtres actifs selectionnés et présents dans l'algorythme.
export var currentIngredientsFilters=[];
export var currrentUstensilesFilters = [];
export var currentAppareilsFilters = [];

//Creer des objets models pour aide de saisie. 
var name=new elementsName();

initState();

displayVignettes(listeRecipes);
// Quand un element est modifier saisie dans la grande barre de recherche.
saisieGenerale.addEventListener('keyup', function(v){
    //Plus de 3 caractères ? 
    if(v.target.value.length >=3){
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

    //Fait cette action ssi la currentListe est vide. 
        createButtons(listeDesIngredients, name.ingredient);
    
    reciseCurrentListeElement();
});

saisieAppareil.addEventListener('focusin', function(){

    listeDesElements.style.background = "green";
    createButtons(listeDesAppareils, name.appareils);
    reciseCurrentListeElement();
});

saisieUstensiles.addEventListener('focusin', function(){

    listeDesElements.style.background = "red";
    createButtons(listeDesUstensiles, name.ustensiles);
    reciseCurrentListeElement();
});

//Déclanche un evenement quand l'utilisateur saisie des lettres dans le champs. 
saisieIngredients.addEventListener('keyup', function(v){
  
    console.log(name.ingredient)
    createFiltreForDisplay(v, listeDesIngredients, name.ingredient);

});
saisieAppareil.addEventListener('keyup', function(v){
    createFiltreForDisplay(v, listeDesAppareils, name.appareils);

});
saisieUstensiles.addEventListener('keyup', function(v){
        createFiltreForDisplay(v,listeDesUstensiles, name.ustensiles)
});
