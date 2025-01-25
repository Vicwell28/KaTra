"use strict";

/**
 * Verifica si un carácter es una letra.
 * @param {string} char - El carácter a verificar.
 * @returns {boolean} - `true` si es una letra, `false` en caso contrario.
 */
const isLetter = char => {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||  // A-Z
    (code >= 97 && code <= 122)    // a-z
  );
};

/**
 * Invierte las letras de una cadena, filtrando solo caracteres alfabéticos.
 * @param {string} str - La cadena de entrada.
 * @returns {string} - La cadena con las letras invertidas.
 */
const reverseLetter = str => 
  str
    .split('')
    .filter(isLetter)
    .reverse()
    .join('');

// Ejemplos de uso
console.log(reverseLetter("adb"));       // Output: "bda"
console.log(reverseLetter("a1b2c3"));    // Output: "cba"
console.log(reverseLetter("Hello, World!")); // Output: "dlroWolleH"
