import{currentListe, currentIngredientsFilters}from "../main.js"



export function filtreListeWithFilter(liste, filters){
    var _newList = [];
    for(var l of liste ){
        var resultat=0;
        for(var ingredient of l.ingredients){
            for(var filter of filters){
                if(ingredient.ingredient.toLowerCase()==filter.toLowerCase()){
                    resultat +=1;
                }
            }

        }
        resultat==filters.length ? _newList.push(l):null;
    }
    
    return _newList;

}