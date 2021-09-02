import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioValidators } from '../../Validadores/usuario.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {

form = new FormGroup({
  account: new FormGroup({
  username: new FormControl('', [Validators.required,
                                 UsuarioValidators.cannotContainSpace],
                                 UsuarioValidators.deveSerUnico),
  password: new FormControl('', Validators.required)})
});

get username(){
  return this.form.get('account.username');
}

get password(){
  return this.form.get('account.password');
}

login(){
  // let ehValido = authService.login(this.form.value);

  // if(!ehValido){
  //   this.form.setErrors({
  //     invalidLogin: true
  //   })
  // }

  this.form.setErrors({
        invalidLogin: true
  })
};


}
