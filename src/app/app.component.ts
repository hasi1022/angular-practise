import { Component, Input,inject } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CardComponent } from './ng-content-test/ng-content-test.component';
import { ScoreComponent } from './score/score.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { directive2directive } from './directive2/directive2.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { InjectionComponent } from './injection/injection.component';
import { Injection2Component } from './injection2/injection2.component';
import { Injection3Component } from './injection3/injection3.component';
import { Injection4Component } from './injection4/injection4.component';
import { Injection5Component } from './injection5/injection5.component';
import { provideRouter,RouterOutlet,RouterLink,withHashLocation,RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpComponent } from './http/http.component';


let login=false;
export const authGaurd = () =>{
  if(login) return true;
  const router=inject(Router);
  return router.createUrlTree(['/'])
}
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpComponent,Injection4Component,Injection5Component,Injection2Component,Injection3Component,InjectionComponent,RouterLinkActive,RouterLink,Form2Component,FormComponent,List3Component,List2Component,ListComponent,ConditionalComponent,Event1Component,Event2Component,RouterOutlet, CardComponent,ScoreComponent,directive2directive, CommonModule, FormsModule,DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'new-angular';
  
  type = 'warning';
  msg = 'Hello';
  show=true;
  get items(){
    return this.show ? ['array','list','tuple'] : [];
  }
  toogle(){
    this.show= !this.show;
  }
  login_return(){
    return login;
  }
  toogleLogin(){
   return login = !login;
  }
}

// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
