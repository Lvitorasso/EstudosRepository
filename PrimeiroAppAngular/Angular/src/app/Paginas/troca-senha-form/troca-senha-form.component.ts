import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

import { PasswordValidators } from '../../Validadores/password.validators';

@Component({
  selector: 'trocaSenha',
  templateUrl: './troca-senha-form.component.html',
  styleUrls: ['./troca-senha-form.component.css']
})
export class TrocaSenhaFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      senhaAntiga: new FormControl('',[Validators.required, PasswordValidators.senhaAntigaValida]),
      senhaNova: new FormControl('',Validators.required,),
      senhaNovaConfirmacao: new FormControl('',[Validators.required])
    }, {validators: PasswordValidators.deveSerIgual});
  }

  get senhaAntiga(){
    return this.form.get('senhaAntiga');
  }
  
  get senhaNova(){
    return this.form.get('senhaNova');
  }

  get senhaNovaConfirmacao(){
    return this.form.get('senhaNovaConfirmacao');
  }
}
