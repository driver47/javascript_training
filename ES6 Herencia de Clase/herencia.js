/* HERENCIA
Para clear herencia de clases hay que utilizar la palabra extends.
Una clase creada con herencia hereda todos los métodos de la otra clase. 
*/

//este código del window detiene la ejecución de JavaScript hasta que no cargue la página (load)
window.addEventListener(
  "load",
  function () {
    class Car {
      // Definimos nombre de nuestra clase siempre primer letra con mayuscula
      constructor(marca) {
        // Con el constructor definimos parametros a recibir y Definimos propiedades de de nuestra clase
        this.marca = marca;
        this.modelo = "Ranger";
        this.color = "White";
      }
      mensage() {
        // Definimos metodos de nuestra clase en este caso mensage()
        return (
          "Nuevo modelo de auto " +
          this.marca +
          " " +
          this.modelo +
          " " +
          this.color
        );
      }
    }

    class Truck extends Car {
      // Creamos una nueva clase Truck que hereda de la clase Car con la palabra extends
      constructor(marca, capcarga) {
        // definimos parametros y propiedades
        super(marca); // la propiedad super es el vinculo a los parametros de la herencia
        this.capcarga = capcarga; // nueva propiedad
      }
      mensageTruck() {
        //En este metodo mensageTruck vinculamos el metodo de la clase Car mensage() con this.mensage()
        return this.mensage() + " con capacidad de carga de " + this.capcarga;
      }
    }

    let miTruck = new Truck("Ford", "20 Toneladas"); // Enviamos parametros a la clase Hija Truk

    mensage.innerHTML = miTruck.mensageTruck(); //mostrar variable con metodo de la clase Truck mensageTruck()
  },
  true
);
