'use strict';

/**
 * Calcula la media de un arreglo de números, redondeada hacia abajo al entero más cercano.
 *
 * @param {number[]} marks - Arreglo de números que representan las calificaciones.
 * @returns {number} - La media redondeada hacia abajo.
 */
const getAverage = marks => 
  Math.floor(marks.reduce((sum, num) => sum + num, 0) / marks.length);

// Ejemplos de uso:
console.log(getAverage([2, 2, 2, 2])); // Output: 2
console.log(getAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(getAverage([89, 90, 75, 93, 87, 70, 100, 90, 94])); // Output: 88
