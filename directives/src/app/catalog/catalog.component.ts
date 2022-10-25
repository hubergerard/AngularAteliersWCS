import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: Product[] = [
    { id : 1 , name: 'Banane', price: 100, promo: '20%'},
    { id : 2, name: 'Chocolate', price: 0, promo: '15%'},
    { id : 3, name: 'Peanut', price: 80, promo: null},
    { id : 4, name: 'Strawberry', price: 80, promo: null},
    { id : 5, name: 'Broccoli', price: null, promo: '20%'},
    { id : 6, name: 'Carrot', price: 70, promo: '20%'}
  ];
}
