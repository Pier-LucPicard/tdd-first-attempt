'use strict';
const Promise = require('bluebird');
const shortid = require('shortid');
const random = require('./utils/random');

function generateGalaxy(config) {

    const galaxy = {};
    galaxy.id = shortid.generate();
    galaxy.numberOfStar = random.getRandomIntInclusiveForNegativeInteger(config.numberOfStar.minBoundry,config.numberOfStar.maxBoundry);
    return Promise.resolve(galaxy);
}

module.exports = generateGalaxy;