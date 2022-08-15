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
            document.getElementById("texto2").innerHTML = encriptarMensaje(inputValue); 
            ocultarElementos();
        }

    }
}
const getDesencriptado = () =>{
    let inputValue = document.getElementsByClassName("text-input")[0].value;
    if(inputValue != ""){
        if(inputValue != " "){ 
            document.getElementById("texto2").innerHTML = desencriptarMensaje(inputValue); 
            ocultarElementos();
        }
    }
}

const copiarTexto = () => {
    var textarea = document.getElementById("texto2");
    
    textarea.select();
    document.execCommand('copy');
    document.getElementsByClassName("text-input")[0].value = "";
    document.execCommand('paste')
    mostrarElementos();

  }

  function ocultarElementos(){
    
    document.getElementById("imgDer").style.display = 'none';//ocultar una imagen para un elemento se usa visibiliity hidden
    document.getElementById("texto").style.display= 'none';
    document.getElementById("texto2").style.height = '80%';
    document.getElementById("btn-copiar").style.display= 'inline';
  }
  function mostrarElementos(){
    
    document.getElementById("imgDer").style.display = 'inline';//ocultar una imagen para un elemento se usa visibiliity hidden
    document.getElementById("texto2").style.height = '20%';
    document.getElementById("btn-copiar").style.display= 'block';
  }
