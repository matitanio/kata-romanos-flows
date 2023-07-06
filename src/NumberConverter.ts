export class NumberConverter {    

  protected romanos: { [key: string]: number } = {
    "L" : 50,
    "XL": 40,
    "X" : 10,
    "IX" : 9,
    "V" : 5, 
    "IV": 4, 
    "I": 1
  };

  arabicToRomanNumber(numero: number) {
    
    let roman = "";
  
    for(const clave in this.romanos){
      const valor = this.romanos[clave]
      while(numero >= valor){
        numero -= valor;
        roman += clave;
      }
    }

    return roman;
  }
      
}