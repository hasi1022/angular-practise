import { Component,signal ,computed} from '@angular/core';
import { CommonModule } from '@angular/common';
type product={name:string,price:number}
@Component({
  selector: 'app-list2',
  imports: [CommonModule],
  templateUrl: './list2.component.html',
  styleUrl: './list2.component.css'
})
export class List2Component {
    items=signal<product[]>([
      {name:'React',price:29},
      {name:'Angular',price:19},
      {name:'Vue',price:24},
      {name:'python',price:27},
      {name:'java',price:35}
    ])
    query=signal('');
    sortkey=signal<'name'|'price'>('name');
    sortdir=signal<1|-1>(1);
    view=computed(()=>{
        const q=this.query().toLowerCase()
        const dir=this.sortdir();
        const key=this.sortkey();
        return this.items()
        .filter(it => it.name.toLowerCase().includes(q))
        .sort((a,b)=>{
          const ab:any=(a as any)[key];
          const ba:any=(b as any)[key];
          return ab<ba ? -1 * dir : ab>ba ? 1 * dir :0
        })
    })
    setsort(key:'name'|'price'){
        if(this.sortkey()===key){
          this.toogle()
        }
        else{
          this.sortkey.set(key)
        }
    }
    toogle(){
         this.sortdir.set(this.sortdir()===1? -1: 1)
    }
}
