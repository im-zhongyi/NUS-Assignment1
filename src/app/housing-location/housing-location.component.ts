import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../interface/product';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing zoom" >
    <a routerLink="/details/{{product.id}}">
      <img class="listing-photo" [src]="product.photoUrl" alt="Photo of {{product.name}}">
      <h2 class="listing-heading">{{ product.name }}</h2>
      <p class="listing-location">Rating: {{product.rating}}</p>
      <p class="listing-location">S$ {{ product.price }}</p>
      
    </a>
</section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() product!: Product;
  // @Input() housingLocation!: HousingLocation;
  constructor( private router:Router){
   
  }
  onClick(id:any){
    console.log(id);
    this.router.navigateByUrl('details/'+id);
  }
}
