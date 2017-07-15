'use strict';
const Promise = require('bluebird');
const random = require('./utils/random');
const equation = require('./utils/equations');


function starGenerator(config) {

    const star = {};

    star.magnitude = random.getRandomIntInclusiveForNegative(config.magnitude.min, config.magnitude.max);
    star.solarRadius = random.getRandomIntInclusiveForNegative(config.solarRadius.min, config.solarRadius.max);

    return equation.calculateLuminosity(star.magnitude)
        .then((luminosity) => {
            star.luminosity = luminosity;
            return Promise.resolve(star);
        });

}

module.exports = starGenerator;