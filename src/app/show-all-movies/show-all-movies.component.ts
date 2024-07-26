import { Component, inject } from '@angular/core';
import { GetTopMoviesComponent } from "../get-top-movies/get-top-movies.component";
import { Apidata } from '../apidata';
import { ImdbService } from '../imdb.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-all-movies',
  standalone: true,
  imports: [GetTopMoviesComponent, CommonModule, FormsModule],
  templateUrl: './show-all-movies.component.html',
  styleUrls: ['./show-all-movies.component.css']
})
export class ShowAllMoviesComponent {
  movieList: Apidata[] = [];
  filteredLocationList: Apidata[] = [];
  selectedGenre: string = '';
  searchText: string = '';

  imdbService: ImdbService = inject(ImdbService);

  constructor() {
    this.imdbService.getTopMovies().then((movieList: Apidata[]) => {
      this.movieList = movieList;
      this.filteredLocationList = movieList;
    });
  }

  filterResults(text: string) {
    this.searchText = text;
    this.applyFilters();
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.movieList;

    if (this.searchText) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.selectedGenre) {
      filtered = filtered.filter(movie =>
        movie.genre.includes(this.selectedGenre)
      );
    }

    this.filteredLocationList = filtered;
  }
}
