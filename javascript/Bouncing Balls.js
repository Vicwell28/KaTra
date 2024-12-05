'use strict';

/**
 * Calcula el número de veces que una madre puede ver la pelota pasando por su ventana.
 *
 * @param {number} h - La altura inicial de la caída de la pelota en metros. Debe ser mayor que 0.
 * @param {number} bounce - El factor de rebote de la pelota. Debe ser mayor que 0 y menor que 1.
 * @param {number} window - La altura de la ventana en metros. Debe ser menor que h.
 * @returns {number} El número de veces que la madre ve la pelota pasando por la ventana. Retorna -1 si las condiciones no se cumplen.
 */
function bouncingBall(h, bounce, window) {
  // Validación de las condiciones iniciales
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 0; // Contador de veces que la pelota pasa por la ventana

  while (h > window) {
    // La pelota pasa por la ventana al caer
    count += 1;

    // Calcula la altura del rebote
    h *= bounce;

    if (h > window) {
      // La pelota pasa por la ventana al subir
      count += 1;
    }
  }

  return count;
}

// Ejemplos de uso
const h = 3;
const rebote = 0.66;
const ventana = 1.5;

const resultado = bouncingBall(h, rebote, ventana);
console.log(resultado); // Salida: 3
