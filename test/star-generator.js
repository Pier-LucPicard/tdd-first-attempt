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

    describe('Star composition', () => {

        it('should have a 3D coordinate', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.position).to.be.a('object');
                    expect(star.position.x).to.be.a('number');
                    expect(star.position.y).to.be.a('number');
                    expect(star.position.z).to.be.a('number');

                });
        })
    });

    describe('Star composition', () => {

        it('should have a id', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.id).to.be.a('string');
                });
        });

        it(`should have a magnitude that is between ${config.magnitude.max} and ${config.magnitude.min}`, () => {
            return Promise.map(new Array(10000), () => {
                return starGenerator(config)
                    .then((star) => {
                        expect(star.magnitude).to.be.a('number');
                        expect(star.magnitude <= config.magnitude.max).to.be.equal(true);
                        expect(star.magnitude >= config.magnitude.min).to.be.equal(true);
                    });
            });

        });

        it(`should have a solar radius that is between ${config.solarRadius.max} and ${config.solarRadius.min}`, () => {
            return Promise.map(new Array(10000), () => {
                return starGenerator(config)
                    .then((star) => {
                        expect(star.solarRadius).to.be.a('number');
                        expect(star.solarRadius <= config.solarRadius.max).to.be.equal(true);
                        expect(star.solarRadius >= config.solarRadius.min).to.be.equal(true);
                    });
            });

        });

        it('should have a luminosity', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.luminosity).to.be.a('number');
                })
        });

        it('should have a mass', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.mass).to.be.a('number');
                })
        });

        it('should have a temperature', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.temperature).to.be.a('number');
                })
        });

        it('should have a lifetime', () => {
            return starGenerator(config)
                .then((star) => {
                    expect(star.lifetime).to.be.a('number');
                })
        });

    });

});