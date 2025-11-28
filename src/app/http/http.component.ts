import { Component,inject } from '@angular/core';
import { HttpClient,HttpHandlerFn,HttpResponse,provideHttpClient,HttpErrorResponse ,HttpRequest} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { throwError,of } from 'rxjs';

export function mockHttp(req:HttpRequest<any>,next:HttpHandlerFn){
  if(req.method === "GET" && req.url.includes('http://localhost:8000/api/view_company/2')){
    return throwError(()=> new HttpErrorResponse({status:200,statusText:'fetched succesfull'}))
  }
  else{
    return throwError(()=> new HttpErrorResponse({status:400,statusText:'not a targeted api'}) )
  }
}

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
    this.http.get<any[]>('http://localhost:8000/api/view_company/2')
    .subscribe({
      next:(data)=>{this.users=data; this.loading=false},
      error:(err)=>{this.error=err; this.loading=false}
    })
   }
  }
