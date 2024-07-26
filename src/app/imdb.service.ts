import { Injectable } from '@angular/core';
import { Apidata } from './apidata';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private apiHost = 'imdb-top-100-movies.p.rapidapi.com';
  private apiKey = 'c7b4074e6amsha372efdb099a877p1b3c1fjsnc30ace982c89';

  constructor() {}

  async getTopMovies(): Promise<Apidata[]> {
    const response = await fetch(this.apiUrl, {
      headers: {
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      }
    });
    return await response.json() ?? [];
  }

  // Fetch all movies and then find the one with the given ID
  async getMovieById(id: string): Promise<Apidata | undefined> {
    const movies = await this.getTopMovies();
    return movies.find(movie => movie.id === id);
  }
}
