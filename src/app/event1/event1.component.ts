import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event1',
  imports: [CommonModule],
  templateUrl: './event1.component.html',
  styleUrl: './event1.component.css'
})
export class Event1Component {
  count=0;
  val='';
  lastkey='';
  inc(){
    this.count += 1;
  }
  update(e:Event){
   { this.val =(e.target as HTMLInputElement ).value}
  }
}
