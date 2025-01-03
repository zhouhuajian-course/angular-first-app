import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',   // /
    component: HomeComponent,
    title: 'Home page 首页',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;