"use strict";

/**
 * Transforma una cadena en Pig Latin.
 * Mueve la primera letra de cada palabra al final y añade "ay".
 * Las marcas de puntuación se dejan sin cambios.
 *
 * @param {string} str - La cadena de entrada a transformar.
 * @returns {string} - La cadena transformada en Pig Latin.
 */
const pigIt = (str) =>
  str
    .split(" ")
    .map((word) =>
      /^[a-zA-Z]+$/.test(word) ? `${word.slice(1)}${word[0]}ay` : word
    )
    .join(" ");

// Ejemplos de uso:
console.log(pigIt("Pig latin is cool")); // Output: "igPay atinlay siay oolcay"
console.log(pigIt("Hello world !")); // Output: "elloHay orldway !"
