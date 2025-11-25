import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    items =signal([
      {id:1,name:"hasi"},
      {id:2,name:"harsh"},
      {id:3,name:"shivam"},
      {id:4,name:"krishna"}
    ])
    nextId=4;
    rename(){
      this.items.update(arr=> arr.map((it,i)=> i===0? {...it,name:'&'+it.name}:it))
    }
    // shuffle(){
    //   this.items.update(arr=>{ const copy=[...arr];
    //     for(let i=copy.length-1; i>0; i--){
    //       const j=Math.floor(Math.random()*(i+1))
    //       [copy[i],copy[j]]=[copy[j],copy[i]]
    //     }
    //     return copy;
    //   })
    // }
    shuffle() {
  this.items.update(arr => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  });
}
  add(){
    this.items.update(arr => [...arr,{id:this.nextId+1,name:'New'+Date.now()}])
  }

}
