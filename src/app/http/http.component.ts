import { Component,inject } from '@angular/core';
import { HttpClient,provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http',
  imports: [CommonModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
   http=inject(HttpClient);
   error='';
   users:any[]=[];
   loading=false;
   load(){
    this.loading=true;
    this.error='';
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe({
      next:(data)=>{this.users=data; this.loading=false},
      error:()=>{this.error='failed to load data'; this.loading=false}
    })
   }
  }
