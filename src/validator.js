    const validator = {
        isValid: function(credito) {
        let length = credito.length;
        let count = 0;
        let isValid = false;
    // Percorre todo o número do cartão de crédito. 
         for(let i = 0; i < length; i++) {
                let digito = parseInt(credito[i]);
               // Se o índice + 1 for par, dobre o valor.
                if ( (i+2) % 2 === 0)
                  // Se estiver acima de 9, ajuste o valor.
                    if((digito *= 2) > 9)
                        digito -= 9;
                
                count += digito;
            }
          // Se terminar com o final 0 é verdadeiro
           if (count % 10 === 0){
               isValid = true;
           }
        
        return isValid
        },
        //Mascarando os primeiros números
        maskify(isValid) {
            return isValid.replace(/.(?=.{4})/g, "#");
        }
    }


 export default validator;
 