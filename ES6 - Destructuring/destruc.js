/* DESTRUCTURING
Es un modo de extraer valores de datos almacenados en objetos y arrays, 
descomponiéndolos y asinándolos a un grupo de variables 

*/

//Destructuring de arrays (asignacion basica)

const cauca= ["Popayán", "Piendamo", "Santander", "Belalcazar", "Morales"];
const [h, pi, san] = cauca; 

console.log(h);
console.log(pi);
console.log(san); 



//Destructuring de arrays (asignación separada de la declaración)

let pop, mir; 

//no me toma el valor de la asignacion miranda 
[pop, mir="miranda"] = ["Popayan", "Miraflores"]; 

console.log(pop);
console.log(mir); 



//Destructuring de Objetos (asingnación básica )

const varios = {p: 11, q:true, r:"Hola"}; 
const {p, q, r} = varios; 
console.log(p);
console.log(q);
console.log(r); 

//Destructuring de objetos (asignando a nuevos nombres de variables)
const objeto = {nombre:"Sofia", apellido:"River"};
//Tomamops del objeto la propiedad llamada nombre y la asignamos a la variable llamada n
const {nombre:n, apellido: a} = objeto; 
console.log(`${ n } ${ a }`); 
//Tomamos del objeto el valor del nombre y el apellido 
const {nombre, apellido} = objeto; 
console.log(`${nombre} ${apellido}`);  

//Destructuring de objetos (asignación sin declaración)

let x, y; 
({x,y} = {x:1, y:2} ); //Es necesario el paréntesis en este tipo de asignación
console.log(x);
console.log(y);


