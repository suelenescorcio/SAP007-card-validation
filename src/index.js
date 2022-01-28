import validator from "./validator.js";


document.querySelector(".submit-btn").addEventListener("click", Check);

function Check() {
    const CCredito = document.getElementById('credito');
    const CCValidation = document.getElementById('ccValidator');
    let message = "";

    if(validator(CCredito.value) )
        message = "Válido";
    else
        message = "Não Válido";
    
    CCValidation.textContent = message;
    CCredito.value = null;

};



document.querySelector('.cardNumber').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.cardNumber').value;
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



