const multiply = require('./multiply');

describe('test multiply', ()=> {
    it('multiplies 1 * 0 to equal 0', () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    }),
        it('multiplies 1 * 5 to equal 5', () => {
            const result = multiply(1, 5);
            expect(result).toBe(5);
        });
});