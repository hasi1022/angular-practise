import { Component } from '@angular/core';
import { LifecyclehookComponent } from '../lifecyclehook/lifecyclehook.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lifecyclehook2',
  imports: [CommonModule,LifecyclehookComponent],
  templateUrl: './lifecyclehook2.component.html',
  styleUrl: './lifecyclehook2.component.css'
})
export class Lifecyclehook2Component {
   showchild=false;
   message="hello there"
   showmessage=false;
   toogleUser(){
    this.showchild=!this.showchild;
   }
   showMessage(){
        this.showmessage=!this.showMessage;
   }

}
