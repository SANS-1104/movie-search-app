import { Injectable } from '@angular/core';
import { Apidata } from './apidata';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class ImdbService {
//   private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
//   private apiHost = 'imdb-top-100-movies.p.rapidapi.com';
//   private apiKey = '37597ded43mshda3cafaf25c7f20p1369f2jsnc91e829a3e6d';

//   constructor(private http: HttpClient) { }

//   getTopMovies(){
//     const headers = new HttpHeaders({
//       'x-rapidapi-host': this.apiHost,
//       'x-rapidapi-key': this.apiKey
//     });

//     return this.http.get(this.apiUrl, { headers });
//   }
// }


export class ImdbService {
  url = "http://localhost:3000/movies"
  constructor(){}
  
  async getTopMovies() :Promise<Apidata[]> {
    const data = await fetch(this.url);
    return await data.json()??[];
  }
  async getApidataById(id:String) : Promise<Apidata | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }

}
