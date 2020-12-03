// AMBITO DE VARIABLES 

/* El ámbito de una variable (scope) es la zona del programa en la que 
se define. Javascript define dos ábitos para variables: local y global. 
Mediante var podemos definir como ámbito local el ámbito de una función.
Con let, por el contrario, podemos diferenciar el ambito de bloque. */

function ambito(){

    "use strict"; 

    let a ="Ambito de una función"; 

    if (true){

        let a = "Ámbito de bloque";
        console.log("El ámbito del bloque a es: " + a);
        
    }

    console.log("El ámbito de función a es: " + a); 

}

ambito(); 