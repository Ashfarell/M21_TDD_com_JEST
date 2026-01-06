const { soma, dobro } = require('./codigo');

describe('funções matemáticas', () => {
    beforeAll(() => {
        console.log("antes de tudo");
    })

    beforeEach(() => {
        console.log("antes de cada teste");
    })

    afterEach(() => {
        console.log('depois de cada teste')
    });


    it('soma de dois valores', () => {              //TESTE funcionalidade soma
        expect(soma(2,5)).toBe(7);
        expect(soma(2,4)).toBe(6);
        expect(soma(21,44)).toBe(65);
    });
    it('dobro de um valor', () => {                 //TESTE funcionalidade dobro
        expect(dobro(4)).toBe(8);
        expect(dobro(5)).toBe(10);
    });
});