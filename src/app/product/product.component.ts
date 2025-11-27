import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  standalone:true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent{
  id='';
  private route=inject(ActivatedRoute)
  constructor(){
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id')?? '';
    })
  }
     
}
