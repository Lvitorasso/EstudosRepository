import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'array-class',
  templateUrl: './form-array-class.component.html',
  styleUrls: ['./form-array-class.component.css']
})
export class FormArrayClassComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics:  new FormArray([])  
  });

  //form builder class
  //constructor(fb: FormBuilder){
  //  fb.group({name:['',Validators.required],
  //  contact: fb.group({
  //    email:[],
  //    phone:[]
  //  }),
  //  topics: fb.array([])
  //  });
  //}

  addTopic(topic: HTMLInputElement){
    this.Topics.push(new FormControl(topic.value));
  }

  getControls() {
    return (this.form.get('topics') as FormArray).controls;
  }

  get Topics(){
    return this.form.get('topics') as FormArray;
  }

  removeItem(topic: any){

    let index = this.Topics.controls.indexOf(topic);

    //opcao 2
    // return this.Topics.removeAt(index);
    
    return this.Topics.controls.splice(index, 1);
  }
}
