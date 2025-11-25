import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './ng-content-test/ng-content-test.component';
import { ScoreComponent } from './score/score.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { directive2directive } from './directive2/directive2.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';

@Component({
  selector: 'app-root',
  imports: [Event1Component,Event2Component,RouterOutlet, CardComponent,ScoreComponent,directive2directive, CommonModule, FormsModule,DirectiveComponent],
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
}
