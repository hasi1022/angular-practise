import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-conditional',
  imports: [],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
  status=signal<'loading'|'success'|'error'>('loading')
}
