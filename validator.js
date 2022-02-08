    const validator = {
        isValid: function(credito) {
        let arr = Array.from(credito).reverse(); //coloca em uma array e reverte
        let count = 0;
        
    // Percorre todo o número do cartão de crédito. 
         for(let i = 0; i < arr.length; i++) {
                let digito = parseInt(arr[i]);
               // Se o índice + 1 for par, dobre o valor.
                if ( (i+2) % 2 === 1)
                  // Se estiver acima de 9, ajuste o valor.
                    if((digito *= 2) > 9)
                        digito -= 9;
                
                count += digito;
            }
            
        
        return count % 10 === 0
        },
        //Mascarando os primeiros números
        maskify: function(isValid) {
            return isValid.replace(/.(?=.{4})/g, "#");
        }
    }


 export default validator;
 