//USE STRICT O MODO ESTRICTO

/* "use strict" es una linea que indica que el código debe ser usado 
en modo estricto es decir, no se pueden utilizar variables no declaradas.
Fuera de una función tiene ámbito global; dentro de ella, 
local (el de la función).

*/

//SINTAXIS DE "use strict"
/*


// MODE GLOBAL 
"use strict";

let persona;
nacimiento; // esto genera error el modo estricto me demanda declarar las variables 

function information(){
    persona = "Julieta";
    nacimiento = "1990"; 
    console.log(persona + " nacio en " + nacimiento); 
} 
information(); */

// MODE LOCAL 

persona3 = "Miriam"; // no me genera error 

// solo lo que esta dentro de la funcion genera error 
function information(){
    "use strict"; // esta vez solo afecta a la funcion 
    let persona = "Julieta";
    nacimiento = "1990"; // genera error solo dentro de la función
    console.log(persona + " nacio en " + nacimiento); 
}

information(); 






