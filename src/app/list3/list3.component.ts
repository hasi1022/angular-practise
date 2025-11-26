import { Component,signal,computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list3',
  imports: [CommonModule],
  templateUrl: './list3.component.html',
  styleUrl: './list3.component.css'
})
export class List3Component {
  players=signal([
    {name:'rohit',runs:15021,matches:281},
    {name:'Kohli',runs:19078,matches:302},
    {name:'shreyas',runs:10904,matches:175},
    {name:'gill',runs:11775,matches:165},
    {name:'rishab',runs:6040,matches:88},
  ])
  query=signal('');
  sorting=signal<'name'|'runs'|'matches'>('name');
  sorting_type=signal<1|-1>(1);
  view = computed(()=>{
       const q=this.query();
       const sortdir=this.sorting_type();
       const key=this.sorting()
       return this.players()
       .filter(i=> i.name.toLowerCase().includes(q))
       .sort((a,b)=> {
        const ab:any = (a as any)[key];
        const ba:any = (b as any)[key];
        return ab<ba? -1 * sortdir : ab>ba ? 1 * sortdir :0
       })
  })
  setsort(key:'name'|'matches'|'runs'){
    if(this.sorting() === key){
      this.toogle()
    }
    else{
      this.sorting.set(key)
    }
  }
  toogle(){
    this.sorting_type.set(this.sorting_type()===1? -1:1)
  }
}
