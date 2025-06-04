// calculadora.test.js
const { sumar, dividir } = require('./prueba');

test('suma 2 + 2 debe dar 4', () => {
  expect(sumar(2, 2)).toBe(4);
});


test('la division de 10 entre 5 debe dar 2', () => {
expect(dividir(15,5)).toBe(3);

})