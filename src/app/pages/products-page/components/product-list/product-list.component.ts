import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()  products: Product[] = [];
  @Input() size: number = 5;
  @Output() delete = new EventEmitter();

  first = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get productsList(){
    const results = [];
    for(let i=this.first; i<this.first+this.size; i++){
      results.push(this.products[i%this.products.length])
    }
    return results;
  }

  onDelete(id:number){
    this.delete.emit(id);
  }

}
