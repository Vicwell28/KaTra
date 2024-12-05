'use strict';

/**
 * Cuenta la frecuencia de cada carácter en una cadena.
 *
 * @param {string} s - La cadena de entrada a analizar.
 * @returns {Object} Un objeto con las frecuencias de cada carácter.
 */
const count = s => [...s].reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});

// Ejemplo de uso
console.log(count("hello world"));
// Salida: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
