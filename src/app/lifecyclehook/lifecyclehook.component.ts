import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecyclehook',
  imports: [CommonModule],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy{
  @Input() message!:string;
  constructor(){
    console.log("child constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change ",changes)
  }
  ngOnInit(): void {
    console.log("child onchange")
  }
  ngAfterViewInit(): void {
    console.log("child afterviewinit")
  }
  ngOnDestroy(): void {
    console.log('destroyed')
  }

}
