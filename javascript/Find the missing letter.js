'use strict';

/**
 * Encuentra la letra faltante en una secuencia de letras consecutivas.
 *
 * @param {string[]} array - Un array de letras consecutivas (mayúsculas o minúsculas).
 * @returns {string} La letra faltante en la secuencia. Retorna una cadena vacía si no hay faltante.
 */
const findMissingLetter = array => {
  const startCode = array[0].charCodeAt(0);
  const missingIndex = array.findIndex((char, index) => char.charCodeAt(0) !== startCode + index);
  return missingIndex === -1 ? '' : String.fromCharCode(startCode + missingIndex);
};

// Ejemplos de uso
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // Salida: 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));       // Salida: 'P'
console.log(findMissingLetter(['a', 'c']));                 // Salida: 'b'
console.log(findMissingLetter(['M', 'N', 'P']));            // Salida: 'O'
