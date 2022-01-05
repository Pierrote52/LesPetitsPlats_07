import { recipesArray } from "../../JSON/recipes.js";
import { createRecipe } from "./createRecipe.js";
import {saisieIngredients,saisieAppareil,saisieUstensiles,listeRecipes, listeDesElements, listeDesAppareils, listeDesIngredients, listeDesUstensiles, listeNomDeRecette, newMapList, coloneIngredients, coloneAppareil, coloneUstensiles}from "../main.js";

import { displayVignettes } from "./displayVignettes.js";
import { elementsName } from "../models/elementsName.js";
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
        focus.addEventListener('focusout',()=> {
            setTimeout(() => {
                switch(focus.name.toLowerCase()){
                    case "ingredients":
                  
                        coloneIngredients.style.display= "none";
                        coloneIngredients.parentNode.parentNode.className= "col-2";
                        listeDesElements.getElementsByClassName('sparrow')[0].style.transform="rotate(180deg)";
                        saisieIngredients.placeholder="Ingredients";
                    break;
                    case "appareil":
                        coloneAppareil.style.display="none";
                        coloneAppareil.parentNode.parentNode.className= "col-2";
                        document.getElementById('listeDesAppareils').getElementsByClassName('sparrow')[0].style.transform = "rotate(180deg)";
                        saisieAppareil.placeholder='Appareil';
                    break;
                    case "ustensiles": 
                        coloneUstensiles.style.display="none";
                        coloneUstensiles.parentNode.parentNode.className= "col-2";
                        document.getElementById('listeDesUstensiles').getElementsByClassName('sparrow')[0].style.transform = "rotate(180deg)";
                        saisieUstensiles.placeholder='Ustensile';
                    break;           
                }
                //  listeDesElements.style.height = "inherit";
                // listeDesElements.style.background = "transparent";
                focus.value = "";
                
            }, 200);

    
            

        });
        focus.addEventListener('focusin', function(){
           setTimeout(()=>{
            switch(focus.name.toLowerCase()){
                case "ingredients":
                    coloneIngredients.style.display="block"
                    coloneIngredients.parentNode.parentNode.className= "col-6";
                break;
                case "appareil":
                    coloneAppareil.style.display="block";
                    coloneAppareil.parentNode.parentNode.className="col-6";
                break;
                case "ustensiles": 
                    coloneUstensiles.style.display="block";
                    coloneUstensiles.parentNode.parentNode.className="col-6";
                break;            

            }
           }, 200)
           

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



