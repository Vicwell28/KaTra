"use strict";

/**
 * Encuentra el número único en un arreglo donde todos los demás números se repiten.
 * @param {number[]} arr - Arreglo de enteros de longitud impar.
 * @returns {number} - El número único.
 */
function encontrarNumeroUnico(arr) {
    // Contar la frecuencia de cada número en el arreglo
    const frecuencias = arr.reduce((contador, numero) => {
        contador[numero] = (contador[numero] || 0) + 1;
        return contador;
    }, {});

    // Encontrar y retornar el número cuya frecuencia es 1
    return parseInt(Object.keys(frecuencias).find(numero => frecuencias[numero] === 1));
}

// Ejemplos de uso
console.log(encontrarNumeroUnico([1, 1, 2])); // Output: 2
console.log(encontrarNumeroUnico([17, 17, 3, 17, 17, 17, 17])); // Output: 3