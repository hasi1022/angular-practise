import { Component,Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class counterServices{
     value=0;
     inc(){this.value++}
     dec(){this.value--}
     reset(){this.value=0}
}

@Component({
  selector: 'app-injection',
  imports: [],
  templateUrl: './injection.component.html',
  styleUrl: './injection.component.css'
})
export class InjectionComponent {
 constructor(public counter:counterServices){}
}
