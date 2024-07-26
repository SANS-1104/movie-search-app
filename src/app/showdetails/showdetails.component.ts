import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShowAllMoviesComponent } from '../show-all-movies/show-all-movies.component';
import { ImdbService } from '../imdb.service';
import { Apidata } from '../apidata';

@Component({
  selector: 'app-showdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.css'
})
export class ShowdetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  imdbService = inject(ImdbService);
  showAllMovies: Apidata | undefined;
  constructor(){
    const movieId = String(this.route.snapshot.params['id']);
    this.imdbService.getApidataById(movieId).then(showAllMovies =>{
      this.showAllMovies  = showAllMovies;
    })
  }
}
