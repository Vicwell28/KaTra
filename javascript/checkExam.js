"use strict";

/**
 * Calcula la puntuación de un examen de manera concisa.
 *
 * @param {Array<string>} correctAnswers - Array de respuestas correctas.
 * @param {Array<string>} studentAnswers - Array de respuestas del estudiante.
 * @returns {number} - Puntuación total del examen.
 *
 * @example
 * // returns 6
 * checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
 *
 * @example
 * // returns 7
 * checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]);
 *
 * @example
 * // returns 16
 * checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]);
 *
 * @example
 * // returns 0
 * checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]);
 */
const checkExam = (correctAnswers, studentAnswers) =>
    Math.max(
        studentAnswers.reduce((score, answer, index) =>
            answer === correctAnswers[index]
                ? score + 4
                : answer === ""
                ? score
                : score - 1,
            0
        ),
        0
    );

// Ejemplos de uso
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));  // 0