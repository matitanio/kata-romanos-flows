export class Saludador {
    
  saludo: string;
   
    constructor(persona: string) {
      this.saludo = persona;
    }
   
    greet() {
      return "Hola, " + this.saludo;
    }
  }
