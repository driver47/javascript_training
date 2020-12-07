/* La sintaxis extendida o spread sintaxis permite : 
->A elementos Iterables como (Array y Cadena...) ser expandidos donde se esperan 
  cero o más argumentos (para llamadas de función) o elementos (para Array Literales)
->A un objeto ser expandido en lugares donde se espera 0 o más pares de valores clave (para literales tipo objeto)*/

//SINTAXIS 
//Para Arrays literales o Cadenas 
//[...objetoIterable, 'a', 'daniel', 5];

//Para llamadas a funciones 
//myFuntion(...objetoIterable); 

//Para literales de tipo Object
//let objClone = { ...obj }

//ARRAY 
console.log(Math.max(5,15,20)); //Devuelve 7

let array = [5,15,23];
console.log(Math.max(array)); //Devuelve NaN -> genera error no es posible hacer esto con un array
//Ahora ussando Spread ...
//EXAMPLE 1 
console.log(Math.max(...array)); //Devuelve 23

//EXAMPLE 2 
let array1 = [3,7,24]; 
console.log(Math.max(...array, 3, 20, ...array1, 12)); // Devuelve 24

//Concatenar 2 Array en 1 
let arrayConca = [...array, ...array1]; 
console.log(arrayConca); // (6) [5, 15, 23, 3, 7, 24]

//Copiar un array en otro 
let arrayCopia = [...array1]; 
console.log(arrayCopia); //Devuelve (3) [3, 7, 24]

//CADENAS

let greting = "Hi, Carolina"; 
console.log([...greting]); //Devuelve (12) ["H", "i", ",", " ", "C", "a", "r", "o", "l", "i", "n", "a"]

//FUNCIONES 

function suma (a, b, c){

    return a + b + c; 

}
const valores  = [1, 3, 5]; 
//console.log(suma(valores)); //Devuelve 1,3,5undefinedundefined  este error
console.log(suma(...valores)); // Devuelve un 9 los valores sumados // el Spread hace esto  1, 3, 5 deja los valores libres

//OBJETOS 

let person = {name: "Daniel", born: 1948};
let person1 = {name1: "Julieta", born1: 1953}; // tuvimos que cambiar los nombres name y born por name1 y born1 

let clonDaniel = {...person}; // forma correcta de copiar un objeto en otro 
console.log(clonDaniel); // Devuelve {name: "Daniel", born: 1948}

let danielJulieta = {...person, ...person1}; 
console.log(danielJulieta); //Devuelve {name: "Daniel", born: 1948, name1: "Julieta", born1: 1953}

