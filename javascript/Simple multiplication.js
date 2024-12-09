'use strict';

/**
 * Multiplica un número por ocho si es par, o por nueve si es impar.
 *
 * @param {number} num - El número a multiplicar.
 * @returns {number} El resultado de la multiplicación.
 */
const simpleMultiplication = num => num * (num % 2 === 0 ? 8 : 9);

// Ejemplos de uso
console.log(simpleMultiplication(2)); // Output: 16
console.log(simpleMultiplication(3)); // Output: 27
