
function encriptado() {
    var cifrado = document.getElementById("ingreseTexto").value.toLowerCase();
    
    var resultado = cifrado.replace(/e/igm,"enter");
    var resultado = resultado.replace(/i/igm,"imes");
    var resultado = resultado.replace(/o/igm,"ober");
    var resultado = resultado.replace(/a/igm,"ai");
    var resultado = resultado.replace(/u/igm,"ufat");

    
    document.getElementById("munheco").style.display = "none"; //para esconder munheco al precionar boton(encriptar y desencriptar)
    document.getElementById("noMensaje").style.display = "none"; //para esconder mensaje al presionar boton (encriptar y desencriptar)
    document.getElementById("textoCifrado").innerHTML = resultado; // para mostrar resultado de texto
    document.getElementById("botonCopiar").style.display = "show"; // para mostrar boton copiar al ingresar mensaja
    document.getElementById("botonCopiar").style.display = "inherit"; // para esconder boton copiar antesd de presionar boton (encriptar y desencriptar)
    
}

function desencriptado() {

    var cifrado = document.getElementById("ingreseTexto").value.toLowerCase();
    
    var resultado = cifrado.replace(/enter/igm,"e");
    var resultado = resultado.replace(/imes/igm,"i");
    var resultado = resultado.replace(/ober/igm,"o");
    var resultado = resultado.replace(/ai/igm,"a");
    var resultado = resultado.replace(/ufat/igm,"u");

    document.getElementById("munheco").style.display = "none"; 
    document.getElementById("noMensaje").style.display = "none"; 
    document.getElementById("textoCifrado").innerHTML = resultado; 
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
   
    
}

function copiar() {
    var contenido = document.querySelector("#textoCifrado");
    contenido.select();
    document.execCommand("copy");
}


