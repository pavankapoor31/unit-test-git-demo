const lib = require('../lib');

// 90232
describe('Absolute : 90232 : Muthu Mathiyazhagan K', () => {
    it('It Should return Positive Number if the Input is Postive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })


    it('It Should return Positive Number if the Input is Negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })

    it('It Should return 0 if the Input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
})


//90501

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
        const result = lib.checkIsEven(-1)
        expect(result).toBe(false);
    })
})
describe('checkIsEven : 90501 : Pavan ', () => {
    it('If input is not a multiple of 2 it should reply false', () => {
        const result = lib.checkIsEven(-1)
        expect(result).toBe(false);
    })
})