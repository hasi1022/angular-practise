import { Component,Injectable } from '@angular/core';
import { counterServices } from '../services/counter.service';

@Component({
  selector: 'app-injection',
  imports: [],
  templateUrl: './injection.component.html',
  styleUrl: './injection.component.css'
})
export class InjectionComponent {
 constructor(public counter:counterServices){}
}
