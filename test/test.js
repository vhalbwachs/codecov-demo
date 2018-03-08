const expect = require('chai').expect;
const sinon = require('sinon');
const { utils, algos } = require('../lib');

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
        it('should iterate over each item in the array, producing a new array of values', () => {
            const nums = [1,2,3];
            const doubled = utils.map(nums, n => n * 2);
            expect(doubled).to.deep.equal([2,4,6]);
        });
    });
    describe('every', () => {
        it('should return true if all items in the collection pass the predicate', () => {
            const nums = [2, 4, 6];
            const isEven = n => n % 2 === 0;
            expect(utils.every(nums, isEven)).to.be.true;
        });

        it('should return false if any of the items in the collection pass the predicate', () => {
            const nums = [2, 3, 4];
            const isEven = n => n % 2 === 0;
            expect(utils.every(nums, isEven)).to.be.false;
        });
    });
    describe('reduce', () => {
        it('should reduce each item in the array, passing the memo and current item being iterated over', () => {
            const nums = [1,2,3];
            const sum = (a, b) => a + b;
            const summed = utils.reduce(nums, sum, 0);
            expect(summed).to.equal(6);
        });
    });
    describe('is true', () => {
        it('should return true', () => {
            expect(utils.isTrue(true)).to.be.true;
        });
    });
});

describe('algos', () => {
    describe('one away', () => {
        it('should return true if 2 strings are one edit away', () => {
            expect(algos.oneEditAway('ta', 'tar')).to.be.true;
        });
    });
});

describe('dates', () => {
    const _ = require('lodash');
    describe('is date', () => {
        it('should determine if it is a date', () => {
            expect(_.isDate(utils.date([2010, 1, 12]))).to.be.true;
            expect(_.isDate(utils.date([2010, 1, 12, 1]))).to.be.true;
            expect(_.isDate(utils.date("Aug 9, 1995"))).to.be.true;
        });
    });
    describe('relative time', () => {
        it('should descrive the relative time', () => {
            expect(utils.relativeTime(1000 * 30)).to.equal("less than a minute");
            expect(utils.relativeTime(1000 * 60)).to.equal("about a minute");
            expect(utils.relativeTime(1000 * 60 * 5)).to.equal("5 minutes");
            expect(utils.relativeTime(1000 * 60 * 60)).to.equal("about an hour");
            expect(utils.relativeTime(1000 * 60 * 60 * 5)).to.equal("about 5 hours");
            expect(utils.relativeTime(1000 * 60 * 60 * 24)).to.equal("a day");
            expect(utils.relativeTime(1000 * 60 * 60 * 24 * 5)).to.equal("5 days");
            expect(utils.relativeTime(1000 * 60 * 60 * 24 * 30)).to.equal("about a month");
            expect(utils.relativeTime(1000 * 60 * 60 * 24 * 30 * 5)).to.equal("5 months");
            expect(utils.relativeTime(1000 * 60 * 60 * 24 * 30 * 12)).to.equal("about a year");
            expect(utils.relativeTime(1000 * 60 * 60 * 24 * 365 * 5)).to.equal("5 years");
        });
    });
    describe('format date', () => {
        it('should format the date', () => {
            const dateTest = new Date(2010, 1, 14, 15, 25, 50, 125);
            expect(utils.formatDate([2010, 1, 14, 15, 25, 50, 125], "dddd, MMMM Do YYYY, h:mm:ss a")).to.equal("Sunday, February 14th 2010, 3:25:50 pm");
            expect(utils.formatDate([2010, 1, 14, 15, 25, 50, 125], "ddd, hA")).to.equal("Sun, 3PM");
            expect(utils.formatDate(dateTest, "M Mo MM MMMM MMM")).to.equal("2 2nd 02 February Feb");
            expect(utils.formatDate(dateTest, "YYYY YY")).to.equal("2010 10");
            expect(utils.formatDate(dateTest, "D Do DD")).to.equal("14 14th 14");
            expect(utils.formatDate(dateTest, "d do dddd ddd")).to.equal("0 0th Sunday Sun");
            expect(utils.formatDate(dateTest, "DDD DDDo DDDD")).to.equal("45 45th 045");
            expect(utils.formatDate(dateTest, "w wo ww")).to.equal("8 8th 08");
            expect(utils.formatDate(dateTest, "h hh")).to.equal("3 03");
            expect(utils.formatDate(dateTest, "H HH")).to.equal("15 15");
            expect(utils.formatDate(dateTest, "m mm")).to.equal("25 25");
            expect(utils.formatDate(dateTest, "s ss")).to.equal("50 50");
            expect(utils.formatDate(dateTest, "a A")).to.equal("pm PM");
            expect(utils.formatDate(dateTest, "t\\he DDDo \\d\\ay of t\\he ye\\ar")).to.equal("the 45th day of the year");
        });
    });
    describe('from now', () => {
        it('should say how much time from now', () => {
            expect(utils.fromNow(30000, 0)).to.equal("in less than a minute");
            expect(utils.fromNow(0, 30000)).to.equal("less than a minute ago");
        });
    });
});