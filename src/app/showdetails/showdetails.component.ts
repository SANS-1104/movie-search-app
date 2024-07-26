import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apidata } from '../apidata';
import { ImdbService } from '../imdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowDetailsComponent implements OnInit {
  movie!: Apidata;

  constructor(
    private route: ActivatedRoute,
    private imdbService: ImdbService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.loadMovieDetails(movieId);
      }
    });
  }

  private async loadMovieDetails(id: string) {
    try {
      this.movie = await this.imdbService.getMovieById(id) || {} as Apidata;
    } catch (error) {
      console.error('Error loading movie details:', error);
    }
  }
}
