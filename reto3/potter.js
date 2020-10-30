let pasajeros = [[10,0], [3,5],[5,2],[4,6],[3,3]]; //salida 9

//forma clasica 
function hogwarts (pasajeros) {
    let total = 0;

    for(let i = 0; i<pasajeros.length; i++ ){
        total += pasajeros[i][0]; // suma la posiscion 0 de los arreglos
        total -= pasajeros[i][1]; // suma de valores negativos posicion 1 de los arreglos 
    }
  
    alert('funcion 1 Clasica: ' + total); 
}

console.log(hogwarts(pasajeros));
// usando el metodo reduce de javascript

let hogwarts2 = (pasajeros) => pasajeros.reduce((acumulador,[suben,bajan]) => acumulador + suben - bajan, 0);
console.log(hogwarts2(pasajeros));
alert('funcion 2 con reduce y funcion flecha: ' + hogwarts2(pasajeros)); 
//mas entendible 

let hogwarts3 = (pasajeros) => pasajeros.reduce((acumulador,pasajeros) => acumulador + pasajeros[0] - pasajeros[1], 0);
console.log(hogwarts3(pasajeros));
alert('funcion 3 con reduce y funcion flecha: ' + hogwarts3(pasajeros)); 

