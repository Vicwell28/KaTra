'use strict';

/**
 * Extrae el nombre de dominio de una URL dada de manera concisa.
 *
 * @param {string} url - La URL completa de la cual extraer el dominio.
 * @returns {string} El nombre del dominio.
 */
const getDomainName = url =>
    url
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .split('.')[0];

// Ejemplos de uso:
console.log(getDomainName("http://github.com/carbonfive/raygun"));
console.log(getDomainName("http://www.zombie-bites.com"));
console.log(getDomainName("https://www.cnet.com"));