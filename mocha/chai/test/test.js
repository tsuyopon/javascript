var chai = require('chai')
        , should = chai.should();
var libsample = require('../lib/sample');

describe('libsample', function() {
    describe('#calculate', function() {
        it('should return 2 when the value is 4', function() {
            libsample.calculate(4).should.equal(2);
        });
        it('should return 1 when the value is 3', function() {
            libsample.calculate(3).should.equal(1);
        });
    });
});
