import { definePrime } from "./definePrime.js";

describe("tests for definePrime function", () => {
    const simple = 31;
    const complex = 30;

    it("should operate correctly with simple, complex and invalid number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
        expect(definePrime(2000)).toBe("Данные неверны");
    });
});