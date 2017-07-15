"use strict";
const expect = require('chai').expect;
const galaxyGenerator = require('../src/galaxy-generator');
const config = require('../config/realistic');

describe('Galaxy Generator', () => {

    it('should be a function', () => {
        expect(galaxyGenerator).to.be.a('function');
    });

    it('should return a object', () => {
        return galaxyGenerator(config)
            .then((galaxy) => {
                expect(galaxy).to.be.a('object');
            });
    });

    it('should have an id', () => {
        return galaxyGenerator(config)
            .then((galaxy) => {
                expect(galaxy.id).to.be.a('string');
            });
    });

    it('should have a number of star', () => {
        return galaxyGenerator(config)
            .then((galaxy) => {
                expect(galaxy.numberOfStar).to.be.a('number');
            });
    });

});