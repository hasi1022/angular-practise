import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
 @Input()
 login=false;
 access=false;
 user='hasi'
}
