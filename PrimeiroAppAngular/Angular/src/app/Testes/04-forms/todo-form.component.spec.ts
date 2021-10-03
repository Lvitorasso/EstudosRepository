import { ControlContainer, FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('Deve criar o form com 2 controles', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('Deve fazer o nome required', () => {    
    let control = component.form.get('name');

    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
});