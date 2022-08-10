import { ProductsService } from './../../services/products.service';
import { Productcard } from './../../models/productcard';
import { ProductCardComponent } from './../products-pages/product-card/product-card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products : Productcard[] = [

  ]

  constructor(private _productsservice:ProductsService) {
    this._productsservice.getproducts().subscribe((productslist) => {this.products = productslist})
  }

  ngOnInit(): void {
  }

}

