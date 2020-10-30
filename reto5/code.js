//resolución clasica sin usar funciones de java 

function rgb (r, g, b){
    return rgbHexadecimalClasica(r)+rgbHexadecimalClasica(g)+rgbHexadecimalClasica(b);
}

function rgbHexadecimalClasica(decimal){
    const caracteresHexadecimales = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hexadecimal = "";
    if (decimal<0) hexadecimal = "00";
    else if (decimal>255) hexadecimal = "FF";
    else {
        let resto = 0;
        while (decimal>=16){
            resto = decimal % 16;
            hexadecimal = caracteresHexadecimales[resto] + hexadecimal;
            decimal = parseInt(decimal / 16); 
        }
        hexadecimal = caracteresHexadecimales[decimal] + hexadecimal; 
        if (hexadecimal.length===1) hexadecimal="0"+hexadecimal; 
    }
    return hexadecimal; 
}

//resolución usando funciones javascript avanzado 

function rgb2 (r, g, b){
    return rgbHexadecimal(r)+rgbHexadecimal(g)+rgbHexadecimal(b);
}

function rgbHexadecimal (decimal){
    let hexadecimal = "";
    if (decimal<0) hexadecimal = "00";
    else if (decimal>255) hexadecimal = "FF";
    else {
        hexadecimal = ("0"+Number(decimal).toString(16)).slice(-2).toUpperCase();
         //Number .toString(16) nos devuelve un numero en hexadecimal sin usar un array de la manera clasica 
         //ponemos un cero por delante por defecto para evitar hacer el if si o si debe tener 2 valores
         // en caso de que nos genere 2 digitos tendriamos 3 con el 0 entonces debemos quedarlos con los 2 ultimos digitos 
         //para quedarmos siempre con los ultimos 2 digitos usamos la funcion slice(-2) como es negativa comienza por atras 
         //y con la funcion toUpperCase() convertiriamos las letras minusculas del hexadecimal a mayusculas
    }
    return hexadecimal;
}

//resolución mas optimizada  practicamente 3 lineas de codigo 
function rgb3 (r, g, b){
    return rgbHexadecimal1(r)+rgbHexadecimal1(g)+rgbHexadecimal1(b);
}

function rgbHexadecimal1 (decimal){
    decimal = Math.max(0,Math.min(255,decimal));
    //Math.min(255,decimal) en caso de que el numero sea mayor a 255 vamos a tomar 255 con la funcion 
    //Math.max(0,Math.min(255,decimal)) con la funcion max estoy haciendo lo mismo entre 0 y el resultado de la funcion Math.min
    //basicamente el 0 y el resultado de la funcion Math.min se convierten en parametros de la funcion Math.max
     //tenemos el numero entre 0 y 255 con Math.max y Math.min
    return ("0"+decimal.toString(16)).slice(-2).toUpperCase();
}

//resolución con funcion unificando codigo 

function rgb4 (r, g, b) {
    const color = function (decimal){
        return ("0"+ Math.max(0,Math.min(255,decimal)).toString(16)).slice(-2).toUpperCase();
    }
    return color(r)+color(g)+color(b); 
}

//resolución con una funcion flecha 

function rgb5 (r, g, b) {
    const color = decimal => ("0"+ Math.max(0,Math.min(255,decimal)).toString(16)).slice(-2).toUpperCase();
    return color(r)+color(g)+color(b); 
}

document.write("<h1> Solución Clasica: " + rgb(12,234,255)); 
document.write("<h1> Con funciones javascript: " + rgb2(12,234,255)); 
document.write("<h1> Resolución mas optimizada: " + rgb3(12,234,255)); 
document.write("<h1> Resolución mas optimizada 2: " + rgb4(12,234,255)); 
document.write("<h1> Resolución con una funcion flecha: " + rgb5(12,234,255));

// Aprendido del canal de ADALOVELACE- DIDACTI-CODE de Youtobe Gracias  