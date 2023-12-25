import { definePrime } from "../definePrime";

xdescribe ('test for definePrime function', () => {
    const simple = 17;
    const complex = 16
    const incorrect = 1001;

    it('should operate correctly with simple number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    }),
    it('should operate correctly with complex number', () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    }),
    it('should operate correctly with invalid number', () => {
        expect(definePrime(incorrect)).toBe(`Данные неверны`);
    })
});

describe ('test for definePrime function', () => {
    const simple = 17;
    const complex = 16
    const incorrect = 1001;

    it('should operate correctly with simple, complex and incorrect numbers', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
        expect(definePrime(incorrect)).toBe(`Данные неверны`);
    })
});