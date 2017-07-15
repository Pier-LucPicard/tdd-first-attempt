"use strict";
const expect = require('chai').expect;
const Promise = require('bluebird');
const starGenerator = require('../src/star-generator');
const config = require('../config/realistic');

describe('Generate Star', () => {

    it('should be a function', () => {
        expect(starGenerator).to.be.a('function');
    });

    it('should return an object if no argument is passed', () => {
        return starGenerator(config)
            .then((star) => {
                expect(star).to.be.a('object');
            });
    });

    it('should have a magnitude that is between 36 and -41', () => {
        return Promise.map(new Array(10000), () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.magnitude).to.be.a('number');
                    expect(star.magnitude <= 36).to.be.equal(true);
                    expect(star.magnitude >= -41).to.be.equal(true);
                });
        });

    });

    it('should have a solar radius that is between 1708 and 0.12', () => {
        return Promise.map(new Array(10000), () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.solarRadius).to.be.a('number');
                    expect(star.solarRadius <= 1708).to.be.equal(true);
                    expect(star.solarRadius >= 0.12).to.be.equal(true);
                });
        });

    });

    it('should have a luminosity', () => {
        return starGenerator(config)
            .then((star) => {
                expect(star.luminosity).to.be.a('number');
            })
    });


});