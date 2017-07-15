"use strict";
const expect = require('chai').expect;
const equations = require('../../src/utils/equations');

describe('Equation', () => {

    describe('calculateLuminosity', () => {

        it('should be a function', () => {
            expect(equations.calculateLuminosity).to.be.a('function');
        });

        it('should calculate correctly the Luminosity based on the magnitude', () => {

            return equations.calculateLuminosity(6.07903471)
                .then((luminosity) => {
                    expect(luminosity).to.be.equal(0.307883288067841);
                });
        });
    });

    describe('calculateMass', () => {

        it('should be a function', () => {
            expect(equations.calculateMass).to.be.a('function');
        });

        it('should calculate correctly the mass based on the luminosity', () => {

            return equations.calculateMass(0.307883288067841)
                .then((mass) => {
                    expect(mass).to.be.equal(0.7142078257789954)
                })
        });
    });

    describe('calculateTemperature', () => {

        it('should be a function', () => {
            expect(equations.calculateTemperature).to.be.a('function');
        });

        it('should calculate correctly the temperature', () => {
            return equations.calculateTemperature(0.76986505, 0.307883288067841)
                .then((temperature) => {
                    expect(temperature).to.be.equal(4923.99066007011)
                })
        })
    });

    describe('calculateLifetime', () => {

        it('should be a function', () => {
            expect(equations.calculateLifetime).to.be.a('function');
        });

        it('should calculate correctly the lifetime', () => {
            return equations.calculateLifetime(0.7142078257789954)
                .then((lifetime) => {
                    expect(lifetime).to.be.equal(23197356058.560158)
                })
        })
    })
});