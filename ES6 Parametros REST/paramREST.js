/* La sintaxis de los parámetros rest nos permiten representar un número
indefinido de argumentos como un array. */

//SINTAXIS

/*funtion(a, b, ...theArgs) {
     // ...
} */

//En ES5 podimos hacer algo parecido con arguments ejemplo
//devuelve un objeto iterable no un array 

function miLista(a, b){
    console.log("AGUMENTS"); 
    console.log("a="+a);
    console.log("b="+b);
    console.log("All elemets list: ", arguments); 
    console.log("Tamaño: "+arguments.length);
    console.log(arguments[2]);
}
miLista("Marcela", "Lucia", "Adriana", "Monica", "Lida", "Julieta"); 


//ES6 
//Devuelve un arreglo wow excelent
function miListaREST(a, b, ...otherElements){
    console.log("REST-ES6"); 
    console.log("a="+a);
    console.log("b="+b);
    console.log("All elemets list: ", otherElements); 
    console.log("Tamaño: "+otherElements.length);
    console.log(otherElements[2]);
}
miListaREST("Sofia", "Carolina", "Viviana", "Diana", "Lady", "Luna"); 

// Devuelve un array 
// Devuelve los elementos sin imprimir
// Devuelve tamaño arreglo generado 
// Devuelve posiciones de arreglo generado 

