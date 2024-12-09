'use strict';

/**
 * Divide una cadena en pares de dos caracteres, añadiendo '_' si es necesario.
 *
 * @param {string} str - La cadena a dividir.
 * @returns {string[]} Arreglo de pares de caracteres.
 */
const splitStringIntoPairs = (str) => {
    // Añadir un guion bajo si la longitud es impar
    const paddedStr = str.length % 2 !== 0 ? str + '_' : str;
    
    // Calcular el número de pares necesarios
    const numberOfPairs = Math.ceil(paddedStr.length / 2);
    
    // Crear el arreglo de pares utilizando Array.from
    const pairs = Array.from({ length: numberOfPairs }, (_, i) => {
        // Extraer dos caracteres por cada par
        return paddedStr.slice(i * 2, i * 2 + 2);
    });
    
    return pairs;
};

// Ejemplos de uso
console.log(splitStringIntoPairs('abc'));      // ['ab', 'c_']
console.log(splitStringIntoPairs('abcdef'));   // ['ab', 'cd', 'ef']
console.log(splitStringIntoPairs('a'));        // ['a_']
console.log(splitStringIntoPairs(''));         // []
