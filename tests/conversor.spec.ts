import { NumberConverter } from "../src/NumberConverter";

/*
   1 ➔ I
   2 ➔ II
   3 ➔ III
   4 ➔ IV
   5 ➔ V
   9 ➔ IX
*/

describe('COMO CONVERTIR NUMEROS ARABICOS A NUMEROS ROMANOS', () => {
 
  test('Me debe de retornar el numero romano asociado al numero arabico', () => {
    let numberConverter = new NumberConverter();
    expect(numberConverter.arabicToRomanNumber(1))
      .toBe('I');
    expect(numberConverter.arabicToRomanNumber(2))
      .toBe('II');
    expect(numberConverter.arabicToRomanNumber(3))
      .toBe('III');
    expect(numberConverter.arabicToRomanNumber(4))
      .toBe('IV');  
    expect(numberConverter.arabicToRomanNumber(5))
      .toBe('V');
    expect(numberConverter.arabicToRomanNumber(6))
      .toBe('VI');
    expect(numberConverter.arabicToRomanNumber(7))
      .toBe('VII');
    expect(numberConverter.arabicToRomanNumber(8))
      .toBe('VIII');
      expect(numberConverter.arabicToRomanNumber(9))
      .toBe('IX');
    expect(numberConverter.arabicToRomanNumber(10))
      .toBe('X');
      expect(numberConverter.arabicToRomanNumber(11))
    .toBe('XI');
  expect(numberConverter.arabicToRomanNumber(12))
    .toBe('XII');
  expect(numberConverter.arabicToRomanNumber(14))
    .toBe('XIV');
    expect(numberConverter.arabicToRomanNumber(16))
    .toBe('XVI');

    expect(numberConverter.arabicToRomanNumber(20))
    .toBe('XX');

    expect(numberConverter.arabicToRomanNumber(21))
    .toBe('XXI');

    expect(numberConverter.arabicToRomanNumber(30))
    .toBe('XXX');
    
    expect(numberConverter.arabicToRomanNumber(34))
    .toBe('XXXIV');
    expect(numberConverter.arabicToRomanNumber(51))
    .toBe('LI');
    expect(numberConverter.arabicToRomanNumber(40))
    .toBe('XL');

  });



});

