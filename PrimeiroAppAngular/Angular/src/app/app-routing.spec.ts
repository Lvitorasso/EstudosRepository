import { UsersComponent } from './Testes/Testes integrados/users/users.component';
import {  routes } from './app-routing.module'


describe('Rotas', ()=> {
    it('Deve conter a rota users', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent});
    });
});