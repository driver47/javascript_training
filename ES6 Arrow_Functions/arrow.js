//ARROW FUNCTIONS

/* Son una alternativa compacta a una función convencional. 
No son adecuadas para ser usadas como métodos, 
y no pueden ser usadas como constructores. 
*/

//SINTAXIS1: (param1, param2, ..., paramN) => { setencias }
//SINTAXIS2: (param1, param2, ..., paramN) => { return lo que queramos }
//SINTAXIS3: (param1, param2, ..., paramN) => expresión
//SINTAXIS4: () => {return expresión}
//SINTAXIS5: los parentesis son opcionales con un solo parámetro
//           (parametro) => {sentencias}
//           parametro => {sentencias} 
// Los Parentesis son obligatorios si no tenemos parametros, solo se pueden quitar
// si tenemos Un solo parametro. () => {sentencias}

// EXAMPLES

//1) Normal Function 

let miFuncion1 = function () {
    return new Date();
    
}

//1) Arrow Function

let miFuncion = () => new Date();

console.log(miFuncion()); 

//2) Normal funtion

let ArrayConcat = function (array1, array2) {
    return array1.concat(array2); 
}

console.log(ArrayConcat([1,2,3], [4,5,7])); 


//2) Arrow Function 

let ArrayConcatArrow = (array1, array2) => array1.concat(array2); 

console.log(ArrayConcatArrow([8,9,10], [4,5,7])); 