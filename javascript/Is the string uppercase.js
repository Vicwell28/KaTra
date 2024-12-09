'use strict';

/**
 * Extiende el prototipo de String con el método isUpperCase.
 * Este método verifica si la cadena está completamente en mayúsculas.
 * Las cadenas sin letras también se consideran en mayúsculas.
 */
String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};

// Ejemplos de uso
console.log("c".isUpperCase()); // False
console.log("C".isUpperCase()); // True
console.log("hello I AM DONALD".isUpperCase()); // False
console.log("HELLO I AM DONALD".isUpperCase()); // True
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()); // False
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // True
console.log("1234!".isUpperCase()); // True (no contiene letras)
