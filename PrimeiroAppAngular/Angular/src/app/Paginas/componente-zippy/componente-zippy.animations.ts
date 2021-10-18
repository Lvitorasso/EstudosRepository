import { animate, transition, state, style, trigger } from '@angular/animations';

export  const animacaoZippy =   trigger('animacaoZippy',[
        state('collapsed', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0
        })),
  
        transition('collapsed => expanded', [
          animate('300ms ease-out', style({
            height: '*',
            paddingTop: '*',
            paddingBottom: '*'
          })),
          animate('1s', style({ opacity: 1}))
        ]),
  
  
        state('expanded', style({
          height: '*',
          overflow: 'auto'
        })),
  
  
        transition('expanded => collapsed', [
          animate('300ms ease-in')
        ])
      ])