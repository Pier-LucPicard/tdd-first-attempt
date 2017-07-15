'use strict';

module.exports.getRandomIntInclusiveForNegative = function getRandomIntInclusive(min, max) {
    const newMin = 0;
    const newMax = max - min;
    return (Math.random() * (newMax - newMin)) + min;
};


module.exports.getRandomIntInclusiveForNegativeInteger = function getRandomIntInclusive(min, max) {
    const newMin = 0;
    const newMax = max - min;
    return Math.floor((Math.random() * (newMax - newMin)) + min);
};