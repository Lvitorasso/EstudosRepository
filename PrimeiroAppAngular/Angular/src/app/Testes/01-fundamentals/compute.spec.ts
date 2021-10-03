// describe('nome do componente', () => {
//     it('nome do teste', () =>{

import { compute } from "./compute";

//     })
// })

describe('nome do componente', () => {
    it('deve retornar 0 se input for negativo', () =>{
        const result = compute(-1);
        expect(result).toBe(0);

    })

    it('deve incrementar se input for positivo', () =>{
        const result = compute(1);
        expect(result).toBe(2);

    })
})

