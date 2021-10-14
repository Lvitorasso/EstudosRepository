import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from "@angular/animations";

export let deslizarPraEsquerdaAnimacao = animation(
    animate('500ms ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100%)'
        })
    ]))
)

export let deslizar   =  trigger('deslizar', [

    state('void', style({ opacity: 0 })),

    transition(':enter', [
      style({ transform: 'translateX(-40px)'}),
      animate('1s')
    ]),

    transition(':leave', 
        useAnimation(deslizarPraEsquerdaAnimacao)
        )
  ])

