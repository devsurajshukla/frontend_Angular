import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'learning-angular';
}