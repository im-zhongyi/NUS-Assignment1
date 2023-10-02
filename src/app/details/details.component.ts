import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../service/housing.service';
import { HousingLocation } from '../interface/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //access to current route to retrieve parameter
  route: ActivatedRoute = inject(ActivatedRoute);    
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
