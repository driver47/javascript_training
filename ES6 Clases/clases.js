/* Las clases son una mejor sintáctica sobre la herencia basada en prototipos
de JavaScript 
1) Ofrecen una sintaxis mas simple para crear objetos. 
2) No utiliza la palabra function como en las versiones anteriores, ya tenemos la palabra class.
3) Las propiedades se asignan en un método constructor(), no en la clase en si. */

class Car {
    constructor(marca, modelo){
        this.marca = marca; 
        this.modelo = modelo; 
    }
}

let miCar = new Car ("Mitsubishi", "Lanser"); 

console.log(miCar.marca+" "+miCar.modelo); 
