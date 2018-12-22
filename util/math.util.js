'use strict';

function sum (a, b) {
    if (typeof a !== 'number') throw new Error('Arguments must be numbers');
    if (typeof b !== 'number') throw new Error('Arguments must be numbers');
    return a + b;
}

function subtract (a, b) {
    if (typeof a !== 'number') throw new Error('Arguments must be numbers');
    if (typeof b !== 'number') throw new Error('Arguments must be numbers');
    return a - b;
}

module.exports = {
    sum,
    subtract
};
