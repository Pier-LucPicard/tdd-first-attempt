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
            return equation.calculateMass(luminosity);
        })
        .then((mass) => {
            star.mass = mass;
            return equation.calculateTemperature(star.solarRadius, star.luminosity);
        })
        .then((temperature) => {
            star.temperature = temperature;
            return equation.calculateLifetime(star.mass);
        })
        .then((lifetime) => {
            star.lifetime = lifetime;
            return Promise.resolve(star);
        });

}

module.exports = starGenerator;