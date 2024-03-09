const vocalesEncriptadas = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

const vocalesDesencriptadas = [
    ["ai","a"],
    ["enter","e"],
    ["imes","i"],
    ["ober","o"],
    ["ufat","u"]
];


function encriptacion(texto){
    let textoEncriptado=""
    for(let i = 0; i<texto.length;i++){
         const letra = texto[i];
         textoEncriptado += vocalesEncriptadas[letra] || letra;
    }
    return textoEncriptado;
}

function desencriptacion(texto){
    let textoDesencriptado=texto
    for(let i = 0; i<vocalesDesencriptadas.length;i++){
         textoDesencriptado=textoDesencriptado.replaceAll(vocalesDesencriptadas[i][0],vocalesDesencriptadas[i][1])
    }
    return textoDesencriptado;
}


function ejecutar(opcion){
    let textoRecibido=(document.getElementById("caja-texto")).value
    let textoDevuelto=document.getElementById("texto-encriptado")
    textoDevuelto.innerHTML=""
    if(textoRecibido===""){
         alert("Ingresa una cadena")
         return 0;
    }
    if(document.getElementById("mensaje-alerta")!=null)
        document.getElementById("mensaje-alerta").remove()
    let textoProcesado=""
    switch(opcion){
        case 1:{
            textoProcesado=encriptacion(textoRecibido);
            break;
        }
        case 2:{
            textoProcesado=desencriptacion(textoRecibido);
            break;        
        }
    }
    textoDevuelto.removeAttribute("disabled")
    textoDevuelto.innerHTML = textoProcesado
    document.getElementById("caja-texto").value=""
}

function copiarTexto() {
    var textarea = document.getElementById("texto-encriptado");
    textarea.select();
    document.execCommand("copy");
    textarea.selectionEnd = textarea.selectionStart;
  }

 