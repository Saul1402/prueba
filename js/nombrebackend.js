//Funcion para obtener los datos del servicio de la pagina web http://www.raydelto.org/json.php

function obtenerDatos(){
    fetch("http://www.raydelto.org/json.php").then(function (respuesta) {
        return respuesta.json();
    }).then(function (respuesta){
        var nombre = document.getElementById("nombre");
        nombre.innerHTML = respuesta.lastName;
        var apellido = document.getElementById("apellido");
        apellido.innerHTML = respuesta.name;
    }) 
}