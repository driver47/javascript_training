/* NUEVOS MÉTODOS DEL OBJETO MATH */

//Math.trunc(): devuelve la parte entera de un numero, eliminando el punto y los digitos despues de el
//Equivale a Math.floor() si el argumento es positivo; si no a Math.ceil()
console.log(Math.trunc(15.2849));

//Math.sing(): devuelve el signo de un numero, pudiendo ser el valor devuelto
// 1 (positivo), -1(negativo), 0 (cero positivo), -0(cero negativo), NaN (Valor NaN)

console.log(Math.sign(-4));
console.log(Math.sign(8)); 
console.log(Math.sign(0)); 
console.log(Math.sign(-0)); 
console.log(Math.sign(NaN)); 
console.log(Math.sign("nada de numeros")); 


//Math.cbrt(): devuelve la raíz cúbica de un numero pasado por parámetro 

console.log(Math.cbrt(128));
