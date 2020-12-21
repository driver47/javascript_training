/* Utilizamos estatic para definir un método estático en una clase.
Al igual que en otros lenguajes de programación, se llama dírectamente 
sin instanciar la clase (de hecho, no puede hacerse mediande una instancia de clase).
Se suelen utilizar para crear funciones útiles en una aplicación.
No es necesario crear un objeto para llamar un método estatico. 
*/

window.addEventListener("load", function(){

    class Rectangulo {
        constructor(x, y){
            this.x = x; 
            this.y = y; 
        }

        static area (a, b) {

            return a * b; 

        }

        static perimetro (a, b) {

            return a * 2 + b * 2; 

        }
    
    }
    let rectangulo1 = new Rectangulo (5,8); 
    //console.log(rectangulo1.area(5,8)); // no funciona por que es estatico el metodo
   // console.log(rectangulo1.perimetro(5,8)); // no funciona por que es estatico el metodo 

   mensaje.innerHTML = "Area: " + Rectangulo.area(5,7) + "  Perimetro: "+ Rectangulo.perimetro(9,8);  // no definimos objetos ya que usamos metodos estaticos / para eso sirve static

},true);  