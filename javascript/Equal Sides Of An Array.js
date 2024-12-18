'use strict';

/**
 * Encuentra el índice equilibrado en un array donde la suma de los elementos a la izquierda
 * es igual a la suma de los elementos a la derecha. Retorna el índice o -1 si no existe.
 *
 * @param {number[]} arr - Array de enteros.
 * @returns {number} El índice equilibrado o -1 si no existe.
 */
const findEvenIndex = (arr) => {
    const totalSum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    return arr.findIndex(val => {
        const isBalanced = leftSum === (totalSum - leftSum - val);
        leftSum += val;
        return isBalanced;
    });
};

// Ejemplos de uso:
console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3
console.log(findEvenIndex([1,100,50,-51,1,1])); // 1
console.log(findEvenIndex([1,2,3,4,5,6])); // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])); // 3
