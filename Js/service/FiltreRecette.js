import { listeRecipes, currentGeneralFilter, currentAppareilsFilters, currentIngredientsFilters, currrentUstensilesFilters, currentListe, newMapList } from "../main.js";
import { elementsName } from "../models/elementsName.js";
import { currentListeState } from "./ListesStates.js";


export function filtreRecette() {
    var _newFiltredListe = [];
    for(var e of listeRecipes){
        _newFiltredListe.push(e)
    }
//     //Y at'il un champ saisie dans la recherche générale ? 
//     if(currentGeneralFilter.length>2){
//         var value = currentGeneralFilter.toLowerCase();
//         console.log("Il y a un element dans la recherche generale.");
//         for(let i=0; i<_newFiltredListe.length;i++){
//             if(_newFiltredListe[i].description.toLowerCase().includes(value)||_newFiltredListe[i].ustensils.includes(value)||_newFiltredListe[i].appliance.toLowerCase().includes(value)||_newFiltredListe[i].nom.toLowerCase().includes(value)){
               
//             }else{
//                 var index = _newFiltredListe.indexOf(e);
//                _newFiltredListe.splice(i,1);
//                i-=1;
//             }
        
//     }
// };
    
    //Y at'il un champ saisie dans la recherche générale ? 
    if (currentGeneralFilter.length > 2) {
        var listeASupprimer =[];
        var currentValue = currentGeneralFilter.toLowerCase();
        //     for(let i=0; i<_newFiltredListe.length;i++){
        //         if(_newFiltredListe[i].description.toLowerCase().includes(value)||_newFiltredListe[i].ustensils.includes(value)||_newFiltredListe[i].appliance.toLowerCase().includes(value)||_newFiltredListe[i].nom.toLowerCase().includes(value)){

        //         }else{
        //             var index = _newFiltredListe.indexOf(e);
        //            _newFiltredListe.splice(i,1);
        //            i-=1;
        //         }

        // }

        // let recette = currentListe.find((element)=>{return element.nom.toLowerCase().includes(value.toLowerCase())});
        for(var [key,value] of newMapList){
            var supprimerElement=true;
        value.forEach((elem)=>{
            if(elem.includes(currentValue)){
              supprimerElement =false
            }
        });
        if(supprimerElement){
            listeASupprimer.push(key);
        }
        }
        //Supprimer par la liste.
        for(let i=0; i<_newFiltredListe.length;i++){
            if(listeASupprimer.includes(_newFiltredListe[i].id)){
                _newFiltredListe.splice(i, 1);
                i-=1;
            }
        }

        
    };
    //Y'a t'il des filtres dans les filtres ingrédients ? 
    if (currentIngredientsFilters.length > 0) {
        for (var CIF of currentIngredientsFilters) {
            for (let i = 0; i < _newFiltredListe.length; i++) {
                var error = true;
                for (var ingredient of _newFiltredListe[i].ingredients) {
                    if (CIF.toLowerCase() == ingredient.ingredient.toLowerCase()) {
                        error = false;
                    }
                }
                if (error) {
                    //Supprimer la rectte de la liste 
                    _newFiltredListe.splice(i, 1);
                    i -= 1;
                }
            }
        }


    }
    //appareil n'est pas une liste mais juste un champ. 
    if (currentAppareilsFilters.length > 0) {
        for (var CAF of currentAppareilsFilters) {
            for (let i = 0; i < _newFiltredListe.length; i++) {
                if (CAF.toLowerCase() != _newFiltredListe[i].appliance.toLowerCase()) {
                    //Supprimer la rectte de la liste 
                    _newFiltredListe.splice(i, 1);
                    i -= 1;

                }
            }
        }

    }
    if (currrentUstensilesFilters.length > 0) {
        for (var CUF of currrentUstensilesFilters) {
            for (let i = 0; i < _newFiltredListe.length; i++) {
                var error = true;
                for (var ustensiles of _newFiltredListe[i].ustensils) {
                    if (CUF.toLowerCase() == ustensiles.toLowerCase()) {
                        error = false;
                    }
                }
                if (error) {
                    //Supprimer la rectte de la liste 
                    _newFiltredListe.splice(i, 1);
                    i -= 1;
                }
            }
        }

    }

    console.log(listeRecipes.length);
    currentListeState(_newFiltredListe)
    return _newFiltredListe;
}