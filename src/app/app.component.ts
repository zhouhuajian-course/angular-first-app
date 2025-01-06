import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from "./details/details.component";
import { RouterModule } from '@angular/router';
// 根组件 -> Home
@Component({
  selector: 'app-root',
  imports: [/*HomeComponent, DetailsComponent,*/ RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">

        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
        <!-- 显示这个标签的下面 http://localhost:4200/ -->
        <!-- URL / app-home /details/1 app-details -->
        <!-- <app-home></app-home>
        <app-details></app-details> -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
