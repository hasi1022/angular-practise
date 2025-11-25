import { Component,Directive,Input,HostBinding,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector:'[directive]',
  standalone:true
})

// @Component({
//   selector: 'app-directive2',
//   imports: [CommonModule],
//   templateUrl: './directive2.component.html',
//   styleUrl: './directive2.component.css'
// })
export class Directive2Component {
 @Input('directive-2')highlight='yellow'
 @HostBinding('style.transition')transition='background-color 150ms ease-in-out';
 @HostBinding('style.background')bg='';
 
 @HostListener('mouseenter') onEnter(){this.bg=this.highlight}
 @HostListener('mouseout') onLeave(){this.bg=''}
}
