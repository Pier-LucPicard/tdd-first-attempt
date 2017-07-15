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

        it('should calculate correctly the nass based on the luminosity', () => {

            return equations.calculateMass(0.307883288067841)
                .then((mass) => {
                    expect(mass).to.be.equal(0.7142078257789954)
                })
        });
    });
});