import { Saludador } from "../src/Saludador";



describe('COMO EJECUTAR UN TEST', () => {
 
  test('Me deber retornar hola', () => {
    let saludador = new Saludador("Equipo de Flows");
    expect(saludador.greet())
      .toBe('Hola, Equipo de Flows');
  });

});

