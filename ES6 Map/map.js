/*
MAP: Es un objeto que almacena pares clave-valor. Podemos usar objetos o valores primitivos. 

Objetos y Maps son similares en cuanto funcionamiento (Tienen asiciadas claves a valores )

---La claves de un objeto son Strings y Symbols; las de un Map pueden ser de cualquier tipo 
---Para saver el tamaño de un map usamos la propiedad size; en un objeto hay que hacer manualmente 
---Map es iterable; para iterar Object necesitamos primero las claves para iterar sobre él
---Un Object tiene prototipo; claves por defecto en un Map pueden colisionar con las de un objeto 

//SINTAXIS: new Map ([iterable])
//iterable debe ser un array o cualquier otro objeto itgerable con elementos clave valor 


WEAKMAP: son similares a los Maps pero incorporan una serie de diferencias: 
--solo aceptan objetos como claves 
--La referencias a las claves es devil: si no hay otras referencias el objeto actúa como clave
--No dispone de propiedades ni elementos relacionados con mas de un elento a la vez 
--No podemos iterarlo con un bucle for of. */ 

let objetoPostal = [[37, "Popayan"], [41, "Santander"], [33, "Bolivar"]]; 
let objetoMatriculas = [["PA","Popayan"], ["SA","Santander"], ["BA","Bolivar"]]; 

let codigosPostales = new Map(objetoPostal); 
let codigosMatriculas = new Map(objetoMatriculas); 

//Propiedades 
//size tamaño 

console.log(codigosPostales.size); 
console.log(codigosMatriculas.size); 

//MÉTODOS 
//get: Devuelve el valos asiciado a una clave (o undefined si no hay ninguno)

console.log(codigosPostales.get(41)); 

//set: establece un valor asociado a la clave 
console.log(codigosPostales.set(41, "Morales")); 

//has: comprueba si el mapa contiene un elemento indicado por su clave o no, devuelve true o false 
console.log(codigosMatriculas.has("PA")); 

//delete: elimina un elemento indicado por su clave 
codigosMatriculas.delete("PA"); 
console.log(codigosMatriculas.has("PA")); 

//clear: elimina todos los elementos de un objeto Map 
codigosPostales.clear(); 
console.log(`Tamaño de los codigos postales: ${codigosPostales.size}`); 

//Iteradores 

//Keys: devuelve un iterador con las claves del mapa ordenadas
//Values: devuelve un iterador con los valores del mapa ordenatos 
//Entries: devuelve un iterador con los pares clave-valor del mapa ordenado

let itClaves = codigosMatriculas.keys();
let itValores = codigosMatriculas.values();
let itPares = codigosMatriculas.entries(); 

console.log(itClaves.next().value); 
console.log(itValores.next().value); 
console.log(itPares.next().value); 