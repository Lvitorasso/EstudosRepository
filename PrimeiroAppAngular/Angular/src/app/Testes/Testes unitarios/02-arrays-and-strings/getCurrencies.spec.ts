import { getCurrencies } from "./getCurrencies"

describe('getCurrencies', () =>{
    it('deve retornar moedas', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})