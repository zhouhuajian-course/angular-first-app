import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works! {{housingLocation.name}} {{housingLocation.city}}
    </p>
  `,
  styles: ``
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  // string 不会给 undefined 
  // 非空断言操作符 TypeScript {{name}}
  // @Input() name!: string 
}
