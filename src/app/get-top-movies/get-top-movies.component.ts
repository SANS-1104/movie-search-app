import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apidata } from '../apidata';
import { ImdbService } from '../imdb.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-top-movies',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './get-top-movies.component.html',
  styleUrl: './get-top-movies.component.css'
})
// export class GetTopMoviesComponent {
//   title = 'IMDB Top 100 Movies';
//   movies: any;

//   constructor(private imdbServicess: ImdbService) {
//       imdbServicess.getTopMovies().subscribe((data) => {
//         this.movies = data;
//         console.log(this.movies);
//       }
//     );
//   }
// }

export class GetTopMoviesComponent {
  title = 'IMDB Top 100 Movies';
  // movies: Apidata[] = []
  // apidata: ImdbService = inject(ImdbService)
  
  @Input() movie!: Apidata

  // constructor(private imdbService: ImdbService) {}
  // ngOnInit() {
  //   this.loadMovies();
  // }

  // async loadMovies() {
  //   try {
  //     this.movies = await this.imdbService.getTopMovies();
  //   } catch (error) {
  //     console.error('Error fetching movies:', error);
  //   }
  // }

}
