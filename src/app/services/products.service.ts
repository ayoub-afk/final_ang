import { Productcard } from './../models/productcard';
import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  produtsRef = collection(this.db,'products');
  constructor(private db:Firestore) { }

  getproducts():Observable<Productcard[]>{
    // get  an arry of products from firebase
      return collectionData(this.produtsRef,{idField:'id'}) as Observable <Productcard[]>;


  }

}
