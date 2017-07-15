'use strict';
const Promise = require('bluebird');

module.exports.calculateLuminosity = function calculateLuminosity(magnitude) {

    return Promise.resolve(Math.pow(10, (4.8 - magnitude) / 2.5))
};

module.exports.calculateMass = function calculateMass(luminosity) {

    return Promise.resolve(Math.pow(luminosity, 1 / 3.5))
};

module.exports.calculateTemperature = function calculateTemperature(radius, luminosity) {

    return Promise.resolve(Math.pow((Math.pow(luminosity, 1 / 2) / radius), 1 / 2) * 5800);
};

module.exports.calculateLifetime = function calculateLifetime(mass) {
    return Promise.resolve(Math.pow(10, 10) * Math.pow(mass, -2.5))
};