export class NumberConverter {    

  arabicToRomanNumber(numero: number) {
    
    let roman = "";
    let inicio = 0;
    
    if (numero >= 5){
      roman = "V";
      inicio = 5;
    }

    for(let i = inicio; i<numero; i++){
      roman += "I";
    }

    return roman;
  }
}
  