'use strict';
const Promise = require('bluebird');

module.exports.calculateLuminosity = function calculateLuminosity(magnitude) {

    return Promise.resolve(Math.pow(10,(4.8-magnitude)/2.5))
};

module.exports.calculateMass = function calculateMass(luminosity) {

    return Promise.resolve(Math.pow(luminosity,1/3.5))
};