import { Component } from '@angular/core';
import { InjectionComponent } from '../injection/injection.component';
import { localcounterServices } from '../services/counter.service';
@Component({
  selector: 'app-injection4',
  imports: [],
  providers:[localcounterServices],
  templateUrl: './injection4.component.html',
  styleUrl: './injection4.component.css'
})
export class Injection4Component {
  constructor(public counter:localcounterServices){}
}
