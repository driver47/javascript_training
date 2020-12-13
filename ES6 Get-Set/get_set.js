/*
Los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser 
el mismo que la propiedad por que se produciria un bucle: al acceder a la propiedad 
invocaríamos el metodo que a su vez accede a la propiedad que invoca al método... 
Por ello, muchos desarrolladores utilizan el guión bajo para nombrar la propiedad. 
*/

window.addEventListener("load", function(){

    class Car {

        constructor(marca){
            this._marca = marca; 
        }
        get marca() {
            return this._marca; 
        }
        set marca(mar) {
            this._marca = mar; 
        }

    }

    let myCar = new Car ("Toyota");
    
    myCar.marca = "Ford";

    mensage.innerHTML = "Mi Automovil es un "+myCar.marca; 




},true); 