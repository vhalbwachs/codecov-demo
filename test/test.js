const expect = require('chai').expect;
const sinon = require('sinon');
const { utils } = require('../lib');

describe('utils', () => {
    describe('each', () => {
        it('should iterate over each item in the array, passing the item, index, and collection', () => {
            const callback = sinon.spy();
            const letters = ['a', 'b', 'c'];
            utils.each(letters, callback);
            expect(callback.getCall(0).args).to.deep.equal(['a', 0, letters]);
            expect(callback.getCall(1).args).to.deep.equal(['b', 1, letters]);
            expect(callback.getCall(2).args).to.deep.equal(['c', 2, letters]);
        });
    });

    describe('map', () => {
        it('should create a new array of values by running each element in collection thru the callback', () => {
            const numbers = [1,2,3];
            const doubled = utils.map(numbers, n => n * 2);
            expect(numbers).to.deep.equal([1,2,3]);
            expect(doubled).to.deep.equal([2,4,6]);
        });
    });

    describe('flatten', () => {
        it('should deeply flatten a nested array', () => {
            const nested = [1,2,3];
            const flattened = utils.flatten(nested);
            expect(nested).to.deep.equal([1,2,3]);
        });
    });
});