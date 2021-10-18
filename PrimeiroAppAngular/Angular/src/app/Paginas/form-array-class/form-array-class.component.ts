import { fadeInAnimacao, fadeOutAnimacao } from './../../animacoes/fade';
import {  deslizar, deslizarPraEsquerdaAnimacao } from '../../animacoes/deslizar';
import { animate, animateChild, query, state, style, transition, trigger, useAnimation, group } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'array-class',
  templateUrl: './form-array-class.component.html',
  styleUrls: ['./form-array-class.component.css'],
  animations: [
    trigger('deslizarPaiAnimacao',[
      transition(':enter', [
        group([        
          query('h3', [
          style({transform: 'translateY(-20px)'}),
          animate(1000)
        ]),
        query('@deslizarAnimacao', animateChild())
      ])])
    ]),
    trigger('deslizarAnimacao', [
      transition(':enter', [
        useAnimation( fadeInAnimacao, {
          params: {
            duration: '500ms',
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red'}),
        useAnimation( fadeOutAnimacao ,{
          params:{
            duration: '5s'
          }
        })
      ])
    ])
  ]
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

  constructor(){    
    this.Topics.push(new FormControl('a'));
    this.Topics.push(new FormControl('b'));
    this.Topics.push(new FormControl('c'));
  }

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
