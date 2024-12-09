'use strict';

/**
 * Mueve todos los ceros en un arreglo al final, preservando el orden de los demás elementos.
 *
 * @param {Array} arr - El arreglo original que contiene elementos, incluyendo ceros.
 * @returns {Array} Un nuevo arreglo con todos los ceros movidos al final.
 *
 * @example
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // retorna [false,1,1,2,1,3,"a",0,0]
 */
const moveZeros = arr => arr
    .filter(element => element !== 0) // Filtrar elementos no ceros
    .concat(arr.filter(element => element === 0)); // Concatenar con los ceros

// Ejemplos de uso
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([0, 0, 0, 0, 0])); // [0, 0, 0, 0, 0]
console.log(moveZeros([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
