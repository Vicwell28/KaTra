'use strict';

/**
 * Cuenta el número de vocales en una cadena dada de manera concisa.
 *
 * @param {string} str - La cadena de entrada.
 * @returns {number} La cantidad de vocales en la cadena.
 */
const contarVocalesConciso = str => [...str].filter(c => 'aeiou'.includes(c)).length;

// Ejemplo de uso
console.log(contarVocalesConciso("abracadabra")); // Output: 5
