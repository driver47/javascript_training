/*NUEVOS MÉTODOS GLOBALES DEL OBJETO  NUMBER */
// Son métodos que se han incorporado a los objetos globales Number o Math.
// Antes formaban parte de los objetos definidos por el usuario 

//Number.isInteger(numero): devuelve true si es entero (positivo o negativo) y false en caso contrario 

console.log("¿1.5 es entero?" + Number.isInteger(1.5)); 

// Number.isNaN(numero): compruba si un valor contiene NaN (Not a Number) algo que no es un numero 
console.log("NaN" + Number.isNaN("NaN")); 
console.log("undefined" + Number.isNaN(undefined)); 
console.log("Daniel" + Number.isNaN('Daniel'));
console.log("{}" + Number.isNaN({})); 
console.log("NaN" + Number.isNaN(NaN)); 
console.log("47" + Number.isNaN(47));

console.log("-----------------------"); 

//Diferente a isNaN ES5

console.log("NaN" + isNaN("NaN")); 
console.log("undefined" + isNaN(undefined)); 
console.log("Daniel" + isNaN('Daniel'));
console.log("{}" + isNaN({})); 
console.log("NaN" + isNaN(NaN)); 
console.log("47" + isNaN(47));

//Number.isSafeInteger(numero) : Metodo que nos permite saber si un entero es seguro si el el número
// esta dentro del rango de 53 bits que nos indica que ya no hay perdida de 
//presición apartir de allí se obian el resto de numeros
// devuelve true. tambien se definen las constantes Number.MAX_SAFE_INTEGER y Number.MIN_SAFE_INTEGER

console.log(`¿Es seguro el numero 9999999? ${Number.isSafeInteger(9999999)}`); 
console.log(`¿Es seguro el numero 99999999999999999? ${Number.isSafeInteger(99999999999999999)}`); 
console.log(`El mayor entero seguro es: ${Number.MAX_SAFE_INTEGER}`); 
console.log(`El menor entero seguro es: ${Number.MIN_SAFE_INTEGER}`); 


//Funcionan igual que las funciones locales
//Number.isFinite(numero): compruba si un número es finito
//Number.parseInt(numero): parsea un número a entero
//Number.parseFloat(numero): parsea un numero a float



