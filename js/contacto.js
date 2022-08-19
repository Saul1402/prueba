//Funcion para capturar datos desde un cuadro de texto en un formulario

function captura(){
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    if (nom=="") {
        alert("El nombre es obligatorio");
        document.getElementById("nom").focus();
    }
    if (email==""){
        alert("El email es obligatorio");
        document.getElementById("email").focus();
    }
    if (tel==""){
        alert("El tel es obligatorio");
        document.getElementById("tel").focus();
    }else{
        console.log(nom + " " + email + " " + tel);
        document.getElementById("nom").value="";
        document.getElementById("email").value="";
        document.getElementById("tel").value="";
    }
}