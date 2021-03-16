/*NUEVOS MÉTODOS DEL OBJETO STRING */ 

const cad = "¡Hola, Daniel!"; 

//startsWith(cadena_busqueda[, posicion]): devuelve true o false si la cadena comienza
//por el primer argumento indicado apartir del segundo argumento (OPCIONAL)

console.log(cad.startsWith("¡Hol")); // true
console.log(cad.startsWith("Dan",7)); //true

//endsWith(cadena_busqueda[, posicion]): devuelve true o false si la cadena finaliza
//por el primer argumento indicado apartir del segundo argumento (OPCIONAL)

console.log(cad.endsWith("el!")); //true
console.log(cad.endsWith("el!",14)); //true

//includes(cadena_busqueda): devuelve true o false si la cadena 
//contine el texto pasado como argumento.
console.log(cad.includes("Daniel")); //true 
console.log(cad.includes("Bye")); // no esta en la cadena arroja false 

//repeat(): devuelve una cadena repetida tantas veces como se
// indique en el número pasado como argumento

console.log(cad.repeat(500)); 