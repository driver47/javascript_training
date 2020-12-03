//DECLARE CONST ARRAY 

/* Al igual que otros tipos de datos, podemos decarrar array constates con 
const. No podemos redefinirlos utilizando el igual como lo harimos con otra 
variable, pero si podemos cambiar sus valores uno  a uno. */

function cambiarArray(){

    "use strict";

    const MYARRAY = [1, 2, 3];
    console.log(MYARRAY);
    
   // MYARRAY = [4, 5, 6]; De esta forma no es posible con const 
    //pero podemos reasignar indicando la posicion asi: 

    MYARRAY[0] = 5; 
    MYARRAY[1] = 7; 
    MYARRAY[2] = 8; 
    
    console.log(MYARRAY); 


}

cambiarArray();