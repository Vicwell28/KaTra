'use strict';

/**
 * Suma una secuencia de enteros desde 'begin' hasta 'end' con un incremento de 'step'.
 *
 * @param {number} begin - Inicio de la secuencia.
 * @param {number} end - Fin de la secuencia.
 * @param {number} step - Incremento entre términos.
 * @returns {number} Suma de la secuencia o 0 si begin > end.
 */
const sequenceSum = (begin, end, step) => 
  begin > end 
    ? 0 
    : Array.from(
        { length: Math.floor((end - begin) / step) + 1 }, 
        (_, i) => begin + i * step
      ).reduce((a, b) => a + b, 0);

// Ejemplos de uso
console.log(sequenceSum(2, 2, 2)); // Output: 2
console.log(sequenceSum(2, 6, 2)); // Output: 12
console.log(sequenceSum(1, 5, 1)); // Output: 15
console.log(sequenceSum(1, 5, 3)); // Output: 5
