export class NumberConverter {    


  arabicToRomanNumber(numero: number) {
    
    let roman = "";
    let inicio = 0;
   
    if(numero >= 10){
      roman = 'X';
      numero-=10;
    }

    

    if (numero === 4){
      roman = "IV";
      numero-=4;
    }

    if (numero === 9){
      roman = "IX";
      numero-=9;
    }

    if (numero >= 5){
      roman = "V";
      numero-=5;
    }

    for(let i = inicio; i<numero; i++){
      roman += "I";
    }

    return roman;
  }


      
}
  