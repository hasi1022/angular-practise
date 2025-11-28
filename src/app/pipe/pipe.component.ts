import { CommonModule } from '@angular/common';
import { Component, Pipe, PipeTransform, } from '@angular/core';
import { pipe } from 'rxjs';
import { map,delay } from 'rxjs';
import { interval,of } from 'rxjs';
@Pipe({name:'camelcase',standalone:true})
export class camelCase implements PipeTransform{
  transform(value:string):string {
    if(!value){
      return ''
    }
    return value.split(/\s+/).map(arr=>arr.charAt(0).toUpperCase()+arr.slice(1).toLowerCase()).join(' ')
  }
}

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,camelCase],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
   text="hello how are you";
   time$=interval(1000).pipe(map(()=>new Date()))
   users$=of([{name:'alice'},{name:'borderland'}]).pipe(delay(1200))
}
