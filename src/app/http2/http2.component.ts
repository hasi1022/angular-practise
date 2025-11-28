import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http2',
  imports: [CommonModule],
  templateUrl: './http2.component.html',
  styleUrl: './http2.component.css'
})
export class Http2Component {
  http=inject(HttpClient)
  error='';
  result:any=null;
  loading=false;
  create(){
    this.http.post<any>('http://localhost:8000/api/create_user',{
      user_name:'lion'
    },{ headers: { "Content-Type": "application/json" }})
    .subscribe({
      next: (res)=>{this.result=res; this.loading=false},
      error:(err)=>{this.error=err}
  })
}

}
