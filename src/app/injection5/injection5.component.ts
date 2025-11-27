import { Component } from '@angular/core';
import { InjectionComponent } from '../injection/injection.component';
import { localcounterServices } from '../services/counter.service';
@Component({
  selector: 'app-injection5',
  imports: [],
  providers:[localcounterServices],
  templateUrl: './injection5.component.html',
  styleUrl: './injection5.component.css'
})
export class Injection5Component {
  constructor(public counter:localcounterServices){}
}
