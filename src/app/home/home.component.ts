import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

//import interface
import { HousingLocation } from '../interface/housing-location';

//import service
import { HousingService } from '../service/housing.service';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section class="search">
      <form class="search-form">
        <input class="search-input" type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location  *ngFor="let product of productList" [product]="product"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  // housingLocationList: HousingLocation[] = [];
  // housingService: HousingService = inject(HousingService);
  productList: Product[] =[];
  productService: ProductService = inject(ProductService);
  constructor() {
    this.productList = this.productService.getAllProducts();
  }
}