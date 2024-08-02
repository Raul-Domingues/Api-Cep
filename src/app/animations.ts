import { animate, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0.6 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);
