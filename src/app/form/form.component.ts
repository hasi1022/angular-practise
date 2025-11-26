import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  model={name:'',email:''}
  submitted=false;
  onsubmit(){
    this.submitted=true;
    this.model={name:'',email:''}
  }
}
