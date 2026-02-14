import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { RouteLoading } from './components/route-loading/route-loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouteLoading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-matheus';
}
