window.addEventListener("load", inicio, false);
//esta linea informa a mi javascript que cuando se cargue
//la pagina "load" ejecute la funcion de (inicio)
// esto es mu importante por que sino me produciria un 
// el false representa si se a a recorrer de hijos a padres 

function inicio(){
    document.getElementById("enviar").addEventListener("click",comprobar,false);
}

function comprobar(evento){
    //el value hace referencia a lo que contiene input type text
    let pass = document.getElementById("password").value;

    if (passwordCorrecta(pass)){
        alert("Acceso correcto");

    } else {
        alert("Acceso Erroneo");
        //con este evento en caso que el acceso sea 
        //erroneo no se envia el formulario 
        evento.preventDefault(); 
    }
}

function passwordCorrecta(password){
    const constantes = ['6.62607015','6.5607004', '6,2607015', '6,2607004'];
    return constantes.includes(password);


}