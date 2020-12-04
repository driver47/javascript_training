/* PARAMETROS POR DEFECTO */
/*
los parámetros por defectode una función permite que los parámetros 
formales sean inicializados con valores por defecto si no se pasan valores
a los valores pasados son undefined (por defecto lo son). 
*/

//SINTAXIS 

/* funtion [nombre] ([param1[= valorPorDefecto1] [, ...,paramN[= valorPorDefecto]]])
   declaraciones
} */


//En ES5 podemos hacer esto o versiones anteriores 

//Creamos una funcion que miltiprique 2 valores, en caso de no pasar 
// el segundo valor tomaria un valor por defecto. 

function multiplicaES5 (a, b) {
  //if (typeof b === 'undefined') b = 1; esta es una forma de hacerlo
  // otra forma 
  b = typeof b !== 'undefined' ? b : 1; 
  return a * b; 
}
console.log(multiplicaES5(9, 5)); 


//AHORA ES6

function multiplicaES6(a, b=1){
    return a * b; 
}

console.log(multiplicaES6(5, 9)); 


//My experiment whit Arrow weepee

let multiArrowDef = (a, b=1) => a * b; 

console.log(multiArrowDef(5, 9)); 