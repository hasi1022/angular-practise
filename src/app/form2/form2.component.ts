import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form2',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  fb=new FormBuilder();
  submitted=false;
  form=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    newsletter:[false]
  })
  onsubmit(){
    this.submitted=true;
  }

}
