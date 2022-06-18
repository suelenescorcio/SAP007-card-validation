import validator from "./validator.js";


document.querySelector(".btnSalvar").addEventListener("click", check);

function check() {
    let cCredito = document.getElementById('credito').value;
    const validation = document.getElementById('ccValidator');
    let message = "";

    if(validator.isValid(cCredito)){
        message = "Válido";
    }
    else{
        message = "Inválido";
    }
       if(cCredito == ""){
         message = "Por Favor, preencha seus dados.";
        }

    validation.textContent = message;
    cCredito = null;

}

//Função para os input ja escrever no cartão

//Colocando a mascara no input
const msk = document.getElementById('credito')
document.querySelector('.cardNumber').oninput = () =>{
    document.querySelector('.card-number-box').innerText = validator.maskify(msk.value);
}

document.querySelector('.cardNome').oninput = () =>{
    document.querySelector('.card-name').innerText = document.querySelector('.cardNome').value;
}

document.querySelector('.inputMes').oninput = () =>{
    document.querySelector('.expMes').innerText = document.querySelector('.inputMes').value;
}

document.querySelector('.inputAno').oninput = () =>{
    document.querySelector('.expAno').innerText = document.querySelector('.inputAno').value;
}



