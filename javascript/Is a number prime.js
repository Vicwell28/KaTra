'use strict';

/**
 * Verifica si un número es primo de manera concisa.
 *
 * @param {number} num - El número a verificar.
 * @returns {boolean} `true` si es primo, `false` en caso contrario.
 */
const isPrimeConciso = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

// Ejemplos de uso
console.log(isPrimeConciso(1));   // Output: false
console.log(isPrimeConciso(2));   // Output: true
console.log(isPrimeConciso(-1));  // Output: false
console.log(isPrimeConciso(17));  // Output: true
console.log(isPrimeConciso(18));  // Output: false
