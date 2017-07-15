'use strict';
const Promise = require('bluebird');
const random = require('./utils/random');
const equation = require('./utils/equations');
const shortid = require('shortid');


function generateRandomParams(config, star) {
    star.id = shortid.generate();
    star.magnitude = random.getRandomIntInclusiveForNegative(config.magnitude.min, config.magnitude.max);
    star.solarRadius = random.getRandomIntInclusiveForNegative(config.solarRadius.min, config.solarRadius.max);

    return Promise.resolve(star);
}

function addLuminosity(star) {
    return equation.calculateLuminosity(star.magnitude)
        .then((luminosity) => {
            star.luminosity = luminosity;
            return star;
        })
}

function addMass(star) {
    return equation.calculateMass(star.luminosity)
        .then((mass) => {
            star.mass = mass;
            return star;
        })
}

function addTemperature(star) {
    return equation.calculateTemperature(star.solarRadius, star.luminosity)
        .then((temperature) => {
            star.temperature = temperature;
            return star;
        })
}

function addLifetime(star) {
    return equation.calculateLifetime(star.mass)
        .then((lifetime) => {
            star.lifetime = lifetime;
            return star;
        });
}

function starGenerator(config) {

    return generateRandomParams(config, {})
        .then(addLuminosity)
        .then(addMass)
        .then(addTemperature)
        .then(addLifetime);
}

module.exports = starGenerator;