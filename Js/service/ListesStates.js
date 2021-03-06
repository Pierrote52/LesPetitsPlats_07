import { currentListe, currentIngredients, currentAppareils, currentUstensiles} from "../main.js"


//cette methode met à jour la liste courante avec une nouvelle liste.
export function currentListeState(liste){
    currentListe.splice(0,currentListe.length);
    for(let e of liste ){
        currentListe.push(e);
    }
  
}


//Cette methode met a jour les ingredients des elements présents dans les listes de recette. 
export function currentIngredientsState(){
    currentIngredients.splice(0, currentIngredients.length);
    for(var r of currentListe){
        for(var ing of r.ingredients){
            if(!currentIngredients.includes(ing.ingredient)){
                currentIngredients.push(ing.ingredient)
            }
        }
    }

}

//Cette methode permet de mettre à joour les appareils  présents dans la currentliste de recette  
export function currentAppareilState(){
    currentAppareils.splice(0, currentAppareils.length);
    for(var r of currentListe){
            if(!currentAppareils.includes(r.appliance)){
                currentAppareils.push(r.appliance)
            
        }
    }

}

export function currentUstensilsState(){
    currentUstensiles.splice(0, currentUstensiles.length);
    for(var r of currentListe){
        for(var ing of r.ustensils){
            if(!currentUstensiles.includes(ing)){
                currentUstensiles.push(ing)
            }
        }
    }

}