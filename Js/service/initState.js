import { recipesArray } from "../../JSON/recipes.js";
import { createRecipe } from "./createRecipe.js";
import {listeRecipes, listeDesAppareils, listeDesIngredients, listeDesUstensiles, listeNomDeRecette, newMapList}from "../main.js";

import { displayVignettes } from "./displayVignettes.js";
//Cette fonction initialise les variables et les valeurs par defaut dans l'app. 
export function initState(){
    for(let i=0; i<recipesArray.length; i++){
        var recipe = createRecipe(recipesArray[i][1]);
        listeRecipes.push(recipe);
        //Ajoute les ingredients à la liste liste des ingredients par default.
        for(let ingredient of recipe.ingredients){
            if(!listeDesIngredients.includes(ingredient.ingredient)){
                listeDesIngredients.push(ingredient.ingredient)
            }
        }
        //Ajoute les appareils(four, blender, ect...) à la liste par defaut  .
        if(!listeDesAppareils.includes(recipe.appliance)){
                listeDesAppareils.push(recipe.appliance)
        }
        //Ajoute les ustensils àa la liste d'ustensils par defaut. 
        for(let ustenssils of recipe.ustensils){
            if(!listeDesUstensiles.includes(ustenssils)){
                listeDesUstensiles.push(ustenssils)        
            }
    
        }
        if(!listeNomDeRecette.includes(recipe.nom)){
            listeNomDeRecette.push(recipe.nom)

        }
       
    }
    let section = document.getElementById('rowDesFiltres');
    let focuses = section.getElementsByTagName('input');
    for(let focus of focuses){
        focus.addEventListener('focusout', function(){
            listeDesElements.style.height = "0";
            listeDesElements.style.background = "transparent";
            focus.value = "";

        })
    }

    //Initialise newFiltredListe. 
    for (var e of listeRecipes) {
        var _listeE=[];
        e.ingredients.forEach((ele)=>_listeE.push(ele.ingredient.toLowerCase()));
       _listeE.push(e.description.toLowerCase());
       _listeE.push(e.nom.toLowerCase());
        newMapList.set(e.id,_listeE)
    }
    displayVignettes(listeRecipes);
}


