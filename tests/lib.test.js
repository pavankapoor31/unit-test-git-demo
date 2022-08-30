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

describe("FizzBuzz : I90494 : Atharsh S", () => {
    it("should return 'FizzBuzz' if input can be divide by 5 and 3", () =>{
        const result = lib.FizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })
    it("should return 'Fizz' if input can be divide by 5", () =>{
        const result = lib.FizzBuzz(5);
        expect(result).toBe('Fizz');
    })
    it("should return 'Buzz' if input can be divide by 3", () =>{
        const result = lib.FizzBuzz(3);
        expect(result).toBe('Buzz');
    })
    it("should return 'BuzzBuzz' if input can be divide by 11", () =>{
        const result = lib.FizzBuzz(11);
        expect(result).toBe('BuzzBuzz');
    })
    
})