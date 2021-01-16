/*
for...of es una sentencia que ejecuta un bloque de código para cada uno de los elementos 
de un objeto iterable como podría ser un String, Array, Map, Set y otros iterables 
definidos por el usuario 

for...in itera sobre las propiedades de un objeto; pero for...of es específica para las colecciones y 
no para todos los objetos. 

//SINTAXIS 
for (variable of iterable) {
    sentecia 
}
*/
//Sobre un Array 

let valor;
let precios = [10000, 20000, 30000];
for (valor of precios) {// si valor no cambia podemos usar const 
 console.log(`Precio sin IVA: ${valor}`);
 valor *= 1.16; 
 console.log(`Precio con IVA: ${valor}`); 
}

//Sobre la cadena 
let letra; 
let cadena = "ciclo for con vitaminas";
for(letra of cadena){
    console.log(letra.toUpperCase()); 
}

//Sobre un map
let pais;
let paises = new Map([["CO","Colombia"],["US","United States"], ["AU","Australia"]]); 
for (pais of paises){
  console.log(pais); 
}
// imprimiendo clave valor como cadena desde el Map usando for of 
for (let [clave, valor] of paises){
    console.log(`${clave} ${valor}`); 
}

//Sobre un Set 

let suerte; 
let suerteNumbers = new Set([2,8,55,94,2,55,24,35]); // set no repite valores 

for (suerte of suerteNumbers){
    console.log(suerte); 
}

