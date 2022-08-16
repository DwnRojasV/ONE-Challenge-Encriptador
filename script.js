function encriptarMensaje(texto){
    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    console.log(texto);
    return texto;
}
function desencriptarMensaje(texto){
    texto = texto.replaceAll("enter","e");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("ober","o");
    texto = texto.replaceAll("ufat","u");
    console.log(texto);
    return texto
}

function ensayo(){
    var input = document.getElementsByClassName("text-input").textContent
    console.log(input);
}

//obtener el valor de un imput
const getEncriptado = () =>{
    let inputValue = document.getElementsByClassName("text-input")[0].value;
    if(inputValue != ""){ 
        if(inputValue != " "){
            document.getElementById("respuesta").innerHTML = encriptarMensaje(inputValue); 
            ocultarElementos();
            borrarInput();
        }

    }
}
const getDesencriptado = () =>{
    let inputValue = document.getElementsByClassName("text-input")[0].value;
    if(inputValue != ""){
        if(inputValue != " "){ 
            document.getElementById("respuesta").innerHTML = desencriptarMensaje(inputValue); 
            ocultarElementos();
            borrarInput();
        }
    }
}

const copiarTexto = () => {
    var textarea = document.getElementById("respuesta");
    
    textarea.select();
    document.execCommand('copy');
    borrarInput();

  }

  function ocultarElementos(){
    
    document.getElementById("munieco").style.display = 'none';//ocultar una imagen para un elemento se usa visibiliity hidden
    document.getElementById("information").style.display= 'none';
    document.getElementById("respuesta").style.display= 'inline';
    document.getElementById("btn-copiar").style.display= 'flex';
  }
  function mostrarElementos(){
    
    document.getElementById("munieco").style.display = 'inline';//ocultar una imagen para un elemento se usa visibiliity hidden
    document.getElementById("information").style.display= 'flex';
    document.getElementById("btn-copiar").style.display= 'none';
    document.getElementById("respuesta").style.display= 'none';

  }
  function borrarInput(){
    document.getElementsByClassName("text-input")[0].value = "";
    document.getElementsByClassName("text-input")[0].focus();
  }
