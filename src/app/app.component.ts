import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetTopMoviesComponent } from "./get-top-movies/get-top-movies.component";
import { CommonModule } from '@angular/common';
import { ShowAllMoviesComponent } from "./show-all-movies/show-all-movies.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetTopMoviesComponent, CommonModule, ShowAllMoviesComponent, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CINESPHERE - Your Movie Search Engine App';
}
