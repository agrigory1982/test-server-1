'use strict';

const chai = require('chai');
const expect = chai.expect;

const mathUtil = require('./math.util');

describe('Math function', function () {
    describe('Math functions - sum()', function() {
        it('should return correct sum for positive numbers', function() {
            const a = 10;
            const b = 15;
            const result = mathUtil.sum(a, b);
            expect(result).to.equal(25);
        });
        it('should return correct sum for negative numbers', function() {
            const a = -7;
            const b = -15;
            const result = mathUtil.sum(a, b);
            expect(result).to.equal(-22);
        });
        it('should throw error if "a" not a number', function() {
            const a = '-7';
            const b = -15;

            let error;
            try {
                const result = mathUtil.sum(a, b);
            } catch (err) {
                error = err;
                expect(err.message).to.be.equal('Arguments must be numbers');
            }
            expect(error).to.be.not.undefined;
        });
        it('should throw error if "b" not a number', function() {
            const a = -7;
            const b = '-15';

            let error;
            try {
                const result = mathUtil.sum(a, b);
            } catch (err) {
                error = err;
                expect(err.message).to.be.equal('Arguments must be numbers');
            }
            expect(error).to.be.not.undefined;
        });
    });
    describe('Math functions - subtract()', function () {
        it('should return correct subtract result for positive numbers', function () {
            const a = 20;
            const b = 10;
            const result = mathUtil.subtract(a, b);
            expect(result).to.equal(10);
        });
        it('should throw error if "a" not a number', function() {
            const a = '-7';
            const b = -15;

            let error;
            try {
                const result = mathUtil.subtract(a, b);
            } catch (err) {
                error = err;
                expect(err.message).to.be.equal('Arguments must be numbers');
            }
            expect(error).to.be.not.undefined;
        });
        it('should throw error if "b" not a number', function() {
            const a = -7;
            const b = '-15';

            let error;
            try {
                const result = mathUtil.subtract(a, b);
            } catch (err) {
                error = err;
                expect(err.message).to.be.equal('Arguments must be numbers');
            }
            expect(error).to.be.not.undefined;
        });
    });
});


