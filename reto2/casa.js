//Tokio, Moscú, Berlín, Nairobi, Río, Denver, Estocolmo, Helsinki

const capitales = ['Tokio', 'Moscú', 'Berlín', 'Nairobi'];


let capitalUsuario = prompt('Introduce el Nombre de la Ciudad');

if (validarCapital(capitalUsuario))

 document.write('La Capital HA SIDO ELEGIDA por el Profesor para el nombre de su atracador');

 else document.write('La ciudad NO HA SIDO ELEGIDA por el Profesor para el nombre de su Atracador');

 function validarCapital1(capital) {
     let encontrado = false;
     if (capital === 'Tokio') encontrado = true;
     if (capital === 'Moscú') encontrado = true;
     if (capital === 'Berlín') encontrado = true;
     if (capital === 'Nairobi') encontrado = true;
     return encontrado; 
     /* Esta solucion no es recomendable
     por que el programa recorrera todos los if 
     demorando el tiempo de ejecucion, es necesario 
     crear un unico return para la respuesta es por esa razon 
     que creamos la variable encontrado */
 }

 function validarCapital2(capital) {
    let encontrado = false;
    if (capital === 'Tokio') encontrado = true;
    else if (capital === 'Moscú') encontrado = true;
    else if (capital === 'Berlín') encontrado = true;
    else if (capital === 'Nairobi') encontrado = true;
    return encontrado; 
    /* con el else solucionariamos el incoveniente del if solo 
    apenas se cumpla la solucion se saldria del programa
    y seria mas eficiente */
}

function validarCapital3 (capital) {

    let encontrado = false;
    switch (capital) {
    case 'Tokio': encontrado = true; break; 
    case 'Moscú': encontrado = true; break;
    case 'Berlin': encontrado = true; break;
    case 'Nairobi': encontrado = true; break;
    //default no es necesario por que creamos una variable encontrado
    }
    return encontrado;
}

function validarCapital4 (capital) {

    let encontrado = false;
    switch (capital) {
    case 'Tokio':  
    case 'Moscú': 
    case 'Berlin': 
    case 'Nairobi': encontrado = true; break;
    //de esta forma tambien ahorrariamos codigo en los
    // case el del final funcionaria por todos 
    }
    return encontrado;
}

function validarCapital5 (capital) {
    let encontrado = false;
    if (capital === 'Tokio' || capital === 'Moscú' || capital === 'Berlín' || capital === 'Nairobi'){
     encontrado = true;
    } 
    
    return encontrado; 
}

//BUENO AHORA SI SE PONE BUENO VAMOS A EXPLOTAR EL PODERIO DE JAVASCRIPT
// Crearemos un arreglo o Array arriba const capitales 

function validarCapital6 (capital) {
    let encontrado = false;
    for (let i = 0; i < capitales.length; i++) {
        if(capitales[i] === capital) encontrado = true; 
    }
    return encontrado;
    // esta es una buena forma 
    // pero el problema es que recorre todo el array
}

//FUNCIONES PROPIAS DE JAVASCRIPT

//indexOf ES5 -> es una funcion de Ecma Script 5

function validarCapital7 (capital) {
    let encontrado = false;
    if (capitales.indexOf(capital) !==-1) encontrado = true;
    return encontrado;

    //indexOf devuelve la posicion donde encuentra el array y en caso contrario devuelve -1 por esa razon 
    // colocamos que si es diferente de -1 retorne encontrado en true
}

//find ES6 -> es una funcion de Ecma Script 6

function validarCapital8 (capital) {
    let encontrado = false;
    //a find le pasamos como parametro una funcion flecha 
    //que comprueba si dada una capital(cap) esta coincide con el parametro capital
    // de la funcion
    encontrado = capitales.find((cap) => cap === capital);
    return encontrado;

    //find devuelve el dato del array directamente ejemplo Tokio 
}


//findIndex ES6 -> es una funcion de Ecma Script 6

function validarCapital9 (capital) {
    let encontrado = false;
    //a findIndex 
   if (capitales.findIndex((cap) => cap === capital) !== -1) encontrado = true;
    console.log(capitales.findIndex((cap) => cap === capital));
    return encontrado;

     //findIndex devuelve la posicion ejemplo Tokio tiene la posicion 0 en el array  
}


//includes ES7 -> es una funcion de Ecma Script 7

function validarCapital (capital) {
    // si capitales incluye a la capital que le pasamos a la
    // funcion devuelve true o false y ya WOW
    let encontrado = capitales.includes(capital);
    return encontrado; 

}










