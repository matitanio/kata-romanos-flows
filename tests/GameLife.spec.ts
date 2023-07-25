import {GameLife} from '../src/GameLife';

describe('Test del juego de la vida', () => {
    test('Crear el grid', () => {
        let gameLife = new GameLife()
        expect(gameLife.board.length === 3 && gameLife.board.every(subBoard => Array.isArray(subBoard) && subBoard.length === 3))
        .toBe(true);
    })

});