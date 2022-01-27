import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Check);

function Check(){
    let pegaAqui=document.querySelector(".credito").value;
    document.getElementById("cartao").innerHTML = pegaAqui.isValid;

    let pega=document.querySelector(".cvv-input").value;
    document.getElementById("nomeTitular").innerHTML = pega;

    
}




