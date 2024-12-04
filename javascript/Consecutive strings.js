'use strict';

/**
 * Devuelve la primera cadena más larga formada por k cadenas consecutivas del arreglo.
 *
 * @param {string[]} strarr - Arreglo de cadenas de caracteres.
 * @param {number} k - Número de cadenas consecutivas a concatenar.
 * @returns {string} - La cadena más larga resultante de la concatenación.
 */
const longestConsec = (strarr, k) => {
  // Validación de parámetros
  if (k <= 0 || k > strarr.length) return "";

  // Utiliza map para crear un arreglo de concatenaciones de k cadenas consecutivas
  // Luego, reduce para encontrar la cadena con la mayor longitud
  return strarr
    .map((_, i) => strarr.slice(i, i + k).join(''))
    .filter(s => s.length > 0) // Filtra cadenas vacías, aunque en este caso no debería ser necesario
    .reduce((max, curr) => curr.length > max.length ? curr : max, "");
};

// Ejemplos de uso:
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); 
// Output: "abigailtheta"

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); 
// Output: "oocccffuucccjjjkkkjyyyeehh"

console.log(longestConsec([], 3)); 
// Output: ""

console.log(longestConsec(["a", "b", "c"], 0)); 
// Output: ""

console.log(longestConsec(["a", "b", "c"], 4)); 
// Output: ""
