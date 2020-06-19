        
    function minhaFuncao() {
      let numero1 = document.getElementById('numero1');
      let numero1Value = numero1.value;
      numero1Value = Number(numero1Value);
    
        
         let numero2;
        numero2 = document.getElementById('numero2'); //'<input id="abc" />' => pega o elmento html
         let numero2Value = numero2.value;
         numero2Value = Number(numero2Value);    

          //calculo//

   
     let resultado = document.getElementById('resultado');

     if (numero1Value > numero2Value) {

            resultado.innerHTML = " O  numero 1 é maior, o qual seria:  " + numero1Value;
  
       }  else if (numero2Value> numero1Value) {
             resultado.innerHTML = " O numero 2 é maior, o qual seria: " + numero2Value ;
        }
     
      else{  
                resultado.innerHTML = "O numeros são iguais:   "+numero1Value+ " e " +numero2Value;
  
        
      } 
    


    }        
 

         
  
      
