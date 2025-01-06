import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <!-- /aaa/bbb/ccc  /details/housingLocation.id -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>

    </section>
  `,
  // styles: ``
  styleUrls: ['./housing-location.component.css'],

})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  // string 不会给 undefined 
  // 非空断言操作符 TypeScript {{name}}
  // @Input() name!: string 
}
