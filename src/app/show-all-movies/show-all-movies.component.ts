import { Component, inject, OnInit } from '@angular/core';
import { GetTopMoviesComponent } from '../get-top-movies/get-top-movies.component';
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
export class ShowAllMoviesComponent implements OnInit {
  movieList: Apidata[] = [];
  filteredLocationList: Apidata[] = [];
  selectedGenre: string = '';
  searchText: string = '';

  private imdbService: ImdbService = inject(ImdbService);

  ngOnInit() {
    this.loadMovies();
  }

  private async loadMovies() {
    try {
      this.movieList = await this.imdbService.getTopMovies();
      this.filteredLocationList = [...this.movieList]; // Initialize filtered list
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  }

  filterResults(text: string) {
    this.searchText = text;
    console.log('Search Text:', this.searchText); // Debugging log
    this.applyFilters();
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    console.log('Selected Genre:', this.selectedGenre); // Debugging log
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
        movie.genre.map(g => g.toLowerCase()).includes(this.selectedGenre.toLowerCase())
      );
    }

    console.log('Filtered Movies:', filtered); // Debugging log
    this.filteredLocationList = filtered;
  }
}
