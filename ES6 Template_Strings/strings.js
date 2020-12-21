/*
Las plaantillas de cadena de texto (template strings) son literales de texto que habilitan 
- Expreciones Incrustadas (${expresion})
- Cadenas de texto de más de una línea
- Plantillas con una función de procesado (veremos más adelante).
- NOTA: para escapar una comilla delntro de una plantilla se usa \ 
*/

//SINTAXIS 
/*
`cadena de texto`

`línea de cadena de texto
 línea de cadena de texto`

 `cadena de texto ${expresíon} texto`

 tag `cadena de texto ${expresión} texto`
 */

 //ES5 
console.log("hola, \n\
Daniel");

//ES6 
console.log(`Hola, esto es 
ES6 Strings`);

//Interpolar expresiones
let num1 = 8; 
let num2 = 7;
//ES5 
console.log("La suma es / ES5 : " + (num1 + num2) + "\n y La resta: " + (num1 - num2) + ".");
//ES6
console.log(`La suma es /ES6 : ${num2 + num2}
y la Resta: ${num1 - num2}.`); // Wow
