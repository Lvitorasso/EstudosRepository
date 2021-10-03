import { greet } from "./greet"

describe('greet', () =>{
    it('deve retornar welcome mais input', () =>{
        expect(greet('Lucas')).toContain('Lucas');
    })
})

