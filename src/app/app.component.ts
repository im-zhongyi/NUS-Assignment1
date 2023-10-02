import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule
  ],
  template: `
  <main>   
    <header>
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/assets/online_superstore_logo-removebg-preview.png" alt="logo" >
      </a>
      <div class="block"></div>
      <button class="secondary" type="button">LOGIN</button>
    </header>    
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
