const lib = require('../isEven.js');

describe('checkIsEven : 90501 : Pavan ', () => {

    it('If input is multiple of 2 it should reply true', () => {
        const result = lib.checkIsEven(2)
        expect(result).toBe(true);
    })
})
describe('checkIsEven : 90501 : Pavan ', () => {

    it('If input is not a multiple of 2 it should reply false', () => {
        const result = lib.checkIsEven(1)
        expect(result).toBe(false);
    })
})
describe('checkIsEven : 90501 : Pavan ', () => {
    it('If input is negative multiple of 2 result is true', () => {
        const result = lib.checkIsEven(-2)
        expect(result).toBe(true);
    })
})
describe('checkIsEven : 90501 : Pavan ', () => {
    it('If input is <0 and not a multiple of 2 result is false', () => {
        const result = lib.checkIsEven(-)
        expect(result).toBe(false);
    })
})
describe('checkIsEven : 90501 : Pavan ', () => {
    it('If input is not a multiple of 2 it should reply false', () => {
        const result = lib.checkIsEven(0)
        expect(result).toBe(false);
    })
})