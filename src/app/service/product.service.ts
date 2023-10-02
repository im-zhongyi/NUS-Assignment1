import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  productList:Product[] =[
    {
      id:1,
      name:"Product 1",
      desc:"Product description 1",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:2,
      name:"Product 2",
      desc:"Product description 2",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },    
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:1,
      name:"Product 1",
      desc:"Product description 1",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:2,
      name:"Product 2",
      desc:"Product description 2",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },    
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:1,
      name:"Product 1",
      desc:"Product description 1",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:2,
      name:"Product 2",
      desc:"Product description 2",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },    
    {
      id:3,
      name:"Product 3",
      desc:"Product description 3",
      price:10.00,
      rating:4,
      seller_id:1,
      stock:10,
      photoUrl:`${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
  ]
  constructor() { }
  getAllProducts(): Product[] {
    return this.productList;
  }
  
  getProductById(id: number): Product | undefined {
    return this.productList.find(product => product.id === id);
  }
}
