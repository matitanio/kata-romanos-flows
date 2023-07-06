export class NumberConverter {    

  arabicToRomanNumber(numero: number) {
    
    let roman = "";
    let inicio = 0;

    const romanos: { [key: string]: number } = {
      "X" : 10,
      "IX" : 9,
      "V" : 5, 
      "IV": 4, 
      "I": 1
    };

    const arreglo = Object.keys(romanos);
    for(let i = 0;  i < arreglo.length; i++){
      const valor = romanos[arreglo[i]];
      
      while(numero >= valor){
        numero -= valor;
        roman += arreglo[i];
      }

    }

    // if(numero >= 10){
    //   roman = 'X';
    //   numero-=10;
    // }

    // if (numero >= 5){
    //   roman = "V";
    //   numero-=5;
    // }

    // if (numero === 4){
    //   roman = "IV";
    //   numero-=4;
    // }

    // if (numero === 9){
    //   roman = "IX";
    //   numero-=9;
    // }

    

    for(let i = inicio; i<numero; i++){
      roman += "I";
    }

    return roman;
  }
}
  