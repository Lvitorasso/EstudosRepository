import { animate, animation, state, style, transition, trigger, useAnimation } from "@angular/animations";

export let fadeInAnimacao =  animation([
  style({ opacity: 0 }),
  animate('2s ease-out')
], {
  params:{
  duration: '2s',
  easing: 'ease-out'
}
});

export let fadeOutAnimacao = animation([
  style({ opacity: 0 }),
  animate('2s ease-in')
], {
  params:{
  duration: '1s',
  easing: 'ease-in'
}
});

export let fade = trigger('fade', [
    // = :enter
    // transition('void => *', [
    //   style({ backgroundColor: 'yellow'}),
    //   animate('2s')
    // ]),

    transition(':enter', [
        useAnimation(fadeInAnimacao)
    ]),

    // = :leave
    // transition('* => void', [
    //   style({ backgroundColor: 'red'}),
    //   animate('1s')
    // ])

    transition(':leave', [
      useAnimation(fadeOutAnimacao)
    ])
  ])