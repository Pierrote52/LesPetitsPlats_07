import { filtreRecette } from "./service/FiltreRecette.js";
import { displayVignettes } from "./service/displayVignettes.js";
import { createButtons } from "./service/createButtons.js";
import { ifNotFound } from "./service/notFound.js";
import { initState } from "./service/initState.js";
import { reciseCurrentListeElement } from "./service/recizeCurrentList.js";
import { createFiltreForDisplay } from "./service/checkFilters.js";
import { elementsName } from "./models/elementsName.js";
import { currentAppareilState, currentIngredientsState, currentUstensilsState } from "./service/ListesStates.js";

var saisieGenerale = document.getElementById("searchInput");
export var saisieIngredients = document.getElementById("ingredients");
export var saisieAppareil = document.getElementById("Appareil");
export var saisieUstensiles = document.getElementById("Ustensiles");
export var listeDesElements = document.getElementById('listeDesIngredients');
export var listeAppareils = document.getElementById('listeDesAppareils');
export var listeUstensiles = document.getElementById('listeDesUstensiles');
export let colone = document.getElementById('coloneElements');
export let coloneIngredients = document.getElementById("coloneIngredients");
export let coloneAppareil = document.getElementById("coloneAppareil");
export let coloneUstensiles = document.getElementById("coloneUstensiles");

export var section = document.getElementById("section");

//Liste des objets de la liste à l'état initial.
export var listeRecipes = [];
export var listeDesIngredients =[];
export var listeDesUstensiles = [];
export var listeDesAppareils = [];
export let listeNomDeRecette =[];

//CurentListe la liste d'éléments filtrés.
export var currentListe = [];
export var currentIngredients =[];
export var currentUstensiles = [];
export var currentAppareils = [];


//Ici nous avons la liste des filtres actifs selectionnés et présents dans les trois filtres.
export var currentGeneralFilter = "";
export var currentIngredientsFilters=[];
export var currrentUstensilesFilters = [];
export var currentAppareilsFilters = [];
export var newMapList= new Map();

//Creer des objets models pour aide de saisie. 
var name=new elementsName();

initState();

displayVignettes(listeRecipes);
// Quand un element est modifier saisie dans la grande barre de recherche.
saisieGenerale.addEventListener('keyup', function(v){
    currentGeneralFilter = v.target.value;
        //Ici nous envoyons la valeur saisie , ainsi que la liste à tester. 
        var newListe = filtreRecette();
        displayVignettes(newListe);
        ifNotFound();
        
    

});

//Declanche un evenement quand le champ ingredient est focus. 
saisieIngredients.addEventListener('focusin', function(){

    listeDesElements.style.background = "dodgerblue";

    //Change retourne le sparrow, et change le texte du PLaceHolder. 
     listeDesElements.getElementsByClassName('sparrow')[0].style.transform="rotate(0deg)";
    
    saisieIngredients.placeholder="Recherche un ingrédient";


    // saisieIngredients.parentElement.className = "col-8";

    //Fait cette action ssi la currentListe est vide. 
    if(currentListe.length==0){
        createButtons(listeDesIngredients, name.ingredient);
    }else{
        currentIngredientsState();
        createButtons(currentIngredients, name.ingredient)
    }
   
});

saisieAppareil.addEventListener('focusin', function(){

    coloneAppareil.style.background = "green";
    document.getElementById('listeDesAppareils').getElementsByClassName('sparrow')[0].style.transform = "rotate(0deg)";
    saisieAppareil.placeholder='Recherche un appareil';

    if(currentListe.length==0){
        createButtons(listeDesAppareils, name.appareils);
    }else{
        currentAppareilState();
        createButtons(currentAppareils, name.appareils)
    }
    
});

saisieUstensiles.addEventListener('focusin', function(){

    coloneUstensiles.style.background = "red";
    document.getElementById('listeDesUstensiles').getElementsByClassName('sparrow')[0].style.transform = "rotate(0deg)";
    saisieUstensiles.placeholder='Recherche un ustensile';
    if(currentListe.length==0){
        createButtons(listeDesUstensiles, name.ustensiles);
    }else{
        currentUstensilsState();
        createButtons(currentUstensiles, name.ustensiles)
    }
   
});

//Déclanche un evenement quand l'utilisateur saisie des lettres dans le champs. 
saisieIngredients.addEventListener('keyup', function(v){
    if(/[a-zA-Z]+$/.test(v.target.value)){
        listeDesIngredients.forEach(ingredient =>currentIngredients.push(ingredient));
        createFiltreForDisplay(v, currentIngredients, name.ingredient);
    }else{
        saisieIngredients.value="";
        createFiltreForDisplay(v, currentIngredients, name.ingredient)
    }
    

});
saisieAppareil.addEventListener('keyup', function(v){
    if(/[a-zA-Z]+$/.test(v.target.value)){
        listeDesAppareils.forEach(appareil=>currentAppareils.push(appareil))
    createFiltreForDisplay(v, currentAppareils, name.appareils);
    }else{
        saisieAppareil.value="";
        createFiltreForDisplay(v, currentAppareils, name.appareils);
       
    }

});
saisieUstensiles.addEventListener('keyup', function(v){
    if(/[a-zA-Z]+$/.test(v.target.value)){
        listeDesUstensiles.forEach(appareil=>currentUstensiles.push(appareil))
               createFiltreForDisplay(v,currentUstensiles, name.ustensiles)
    }else{
        saisieUstensiles.value="";
        createFiltreForDisplay(v, currentUstensiles, name.ustensiles);
    }
 
});
