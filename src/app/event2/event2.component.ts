import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event2',
  imports: [CommonModule],
  templateUrl: './event2.component.html',
  styleUrl: './event2.component.css'
})
export class Event2Component {
  draft='';
  items=['hello there','how are you']
  add(){
    const result=(this.draft || '').trim()
    if(!result) return
    this.items=[...this.items,result]
    this.draft=''
  }
  clear(){
    this.items=[];
  }
}
