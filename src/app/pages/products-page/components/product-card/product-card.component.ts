import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from '../../models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Output() delete= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get titre() {return this.product.nom}
  

}
