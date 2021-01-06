/*
SET es un onjeto que permite almacenar valores unicos de cualquier tipo, incluidos valores primitivos 
Para considerar dos objetos iguiales debe cumplirse la igualdad estricta (===) con la excepcion 0+ y 0+  Nan+ y Nan-
*/

//SINTAXIS: new Set ([iterable])
// iterable debe ser un array o cualquier otro objeto iterable. Sus elementos se añadirán al SET 


let ciudades = new Set(["Popayan","Pasto","Cali","Popayan", "Cali", "Buga"]);
let numeros = new Set([1,2,5,7,7,1,5,1,8,5]); 
let mezcla = new Set([2, "ET", "mi casa"]); 

//PROPIEDADES
//size: tamaño del set
console.log(`El número de ciudades NO REPETIDAS es: ${ciudades.size}`); 
console.log(`El número de valores numericos NO REPETIDOS es: ${numeros.size}`); 

//MÉTODOS
//has: comprueba si el set contiene un elemento 

console.log(`¿Está el elemento 5? ${numeros.has(5)}`); 
console.log(`¿Está el elemento 2? ${numeros.has(2)}`); 

//delete: borra un elemento del set 
numeros.delete(2); 
console.log(`¿Está el elemento 2? ${numeros.has(2)}`);

//add: añade un elemento al set 

ciudades.add("Barranquilla"); //Nueva
ciudades.add("Popayan"); // Repetida
console.log(`El número de ciudades NO REPETIDAS es: ${ciudades.size}`); 



/* WEAKSET: son similares a los Set pero incorporan una serie de diferencias:
-- solo aceptan colecciones de objetos. 
-- la diferencia a las claves es debil, si no hay otras referencias al objeto que actúa con 
-- Dispone de tres métodos solo: add, delete y has. 
*/



