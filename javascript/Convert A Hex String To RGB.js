'use strict';

/**
 * Convierte una cadena de color hexadecimal a sus componentes RGB.
 *
 * @param {string} hex - La cadena de color hexadecimal (ej. "#FF9933").
 * @returns {object} - Un objeto con las propiedades r, g, b representando los valores RGB.
 *
 * @example
 * hexToRgb("#FF9933"); // { r: 255, g: 153, b: 51 }
 */
const hexToRgb = hex => {
  // Validación básica de la entrada
  if (typeof hex !== 'string' || !/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error('Entrada inválida: debe ser una cadena hexadecimal de 6 caracteres con un "#" al inicio.');
  }

  // Extrae las partes de rojo, verde y azul usando una expresión regular
  const [, r, g, b] = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/.exec(hex);

  // Convierte cada par hexadecimal a decimal
  const rgb = [r, g, b].map(component => parseInt(component, 16));

  // Desestructura los valores RGB y los asigna a un objeto con propiedades r, g, b
  const [red, green, blue] = rgb;
  return { r: red, g: green, b: blue };
};

// Ejemplos de uso:
console.log(hexToRgb("#FF9933")); // Output: { r: 255, g: 153, b: 51 }
console.log(hexToRgb("#ff9933")); // Output: { r: 255, g: 153, b: 51 }
console.log(hexToRgb("#00FF00")); // Output: { r: 0, g: 255, b: 0 }
console.log(hexToRgb("#000000")); // Output: { r: 0, g: 0, b: 0 }
