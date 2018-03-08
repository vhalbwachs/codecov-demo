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
});