const numeros = "1234 2345 3456 5678 7890";
// SOLUCION 1 
function comprobar(numeros){
    let impares = [];
    let pares = [];
    // split convierte la cadena en un array 
    let codigos = numeros.split(' '); //debe dar espacio para que llene con numeros

    for(let i = 0; i < codigos.length; i++){
        if (codigos[i]%2 === 0){  //si el modulo 2 es igual a 0 es par 
        pares.push(codigos[i]);
    } else {
        impares.push(codigos[i]);
    }
}
 const intruso = impares.length === 1 ? impares[0] : pares[0];
 /* es lo mismo que escribir 
 if(impares.length===1){
  let intruso = impares[0];
 }
 else {
   let intruso = pares[0]; 
 }   */
 return intruso; 
}

console.log(comprobar(numeros));

// SOLUCION 2 MAS MODERNA 

function comprobar2(numeros){
    let codigos = numeros.split(' ');
    /* filter() crea un nuevo array con los elementos 
    que cumplan la condicion de la funcion dada */

    const impares = codigos.filter(num=> num%2);
    const pares = codigos.filter(num=> !(num%2));  
    const intruso = impares.length === 2 ? impares[0] : pares[0]; // ontenemos el valor intruso
    
    console.log(pares);
    console.log(impares);
    return intruso; 
}


console.log(comprobar2(numeros));
