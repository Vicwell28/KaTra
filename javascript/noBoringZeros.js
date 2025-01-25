"use strict";

/**
 * Elimina los ceros finales de un número.
 *
 * @param {number} n - El número del cual se eliminarán los ceros finales.
 * @returns {number} - El número sin ceros finales.
 *
 * @example
 * // returns 145
 * noBoringZeros(1450);
 *
 * @example
 * // returns 96
 * noBoringZeros(960000);
 *
 * @example
 * // returns -105
 * noBoringZeros(-1050);
 *
 * @example
 * // returns 0
 * noBoringZeros(0);
 */
const noBoringZeros = (n) => {
  // Si el número es 0, lo retornamos directamente
  if (n === 0) return 0;

  // Convertimos el número a cadena y eliminamos los ceros finales
  const trimmedString = `${n}`.replace(/0+$/, '');

  // Convertimos la cadena de vuelta a número y lo retornamos
  return Number(trimmedString);
};

// Ejemplos de uso
console.log(noBoringZeros(1450));    // 145
console.log(noBoringZeros(960000));  // 96
console.log(noBoringZeros(1050));    // 105
console.log(noBoringZeros(-1050));   // -105
console.log(noBoringZeros(0));       // 0
