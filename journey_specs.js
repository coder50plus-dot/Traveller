const assert = require('assert');
const Journey = require('./journey.js');
const Traveller = require('./traveller.js')


    /* A Journey has:
- a start location.*/

describe('journey', function(){
    it('journey should have a start location', function(){
        const journey = new Journey('Haddington');
        assert.strictEqual(journey.startLocation, 'Haddington');
    })
    it('journey should have an end location', function(){
        const journey = new Journey('', 'Edinburgh');
        assert.strictEqual(journey.endLocation, 'Edinburgh');
    })
    it('journey should have a mode of transport', function(){
        const journey = new Journey('','','car');
        assert.strictEqual(journey.modeOfTransport, 'car');
    })
})