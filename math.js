'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let NumC = Number(c);
    if (Number.isNaN(NumC)) {
        return Number(a) + Number(b);
    } else {
        return Number(a) + Number(b) + NumC;
    }
};
