'use strict';

const getAverage = marks => Math.floor(marks.reduce((sum, num) => sum + num, 0) / marks.length);

console.log(getMean([2, 2, 2, 2])); 
