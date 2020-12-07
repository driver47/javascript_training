//DECLARE CONST

/* Las variables constantes en javascript  tienen ámbito de bloque 
al igual que las variables definidas utilizando let. 
Es importante tener en cuenta que el valor de una constante no puede variar 
(reasignarse) por tanto se asignan en el mometo que se declaran. 
Para diferenciarlo de las variables conviene utilizar todo mayuscula. */

function saludar(){
    "use strict"
    const SALUDO = "Hola, Daniel"; 
    // SALUDO = "hola, Julieta"; //Muestra error no se puede redefinir la variable
    console.log(SALUDO);
}

saludar(); 