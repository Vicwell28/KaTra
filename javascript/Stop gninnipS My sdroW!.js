'use strict';

/**
 * Invierte las palabras de una cadena que tengan cinco o más letras.
 *
 * @param {string} sentence - La cadena de entrada que contiene una o más palabras.
 * @returns {string} - La cadena resultante con las palabras de cinco o más letras invertidas.
 */
const spinWords = sentence =>
    sentence
        .split(' ')
        .map(word => (word.length >= 5 ? [...word].reverse().join('') : word))
        .join(' ');

// Ejemplos de uso
console.log(spinWords("Hey fellow warriors"));       // Output: "Hey wollef sroirraw"
console.log(spinWords("This is a test"));            // Output: "This is a test"
console.log(spinWords("This is another test"));      // Output: "This is rehtona test"
