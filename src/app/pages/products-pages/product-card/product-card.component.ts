import { Productcard } from './../../../models/productcard';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productconfig : Productcard = {
    id: 'productid',
    name: 'productname',
    disc: 'productdis',
    price:100,
    img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

  addtocard(): void {
    console.log("add cart");
  }


}
