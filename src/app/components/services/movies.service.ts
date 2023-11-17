import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
        
@Injectable({
  providedIn: 'root'
})      
export class MoviesService { 
            
  constructor(private http: HttpClient) {}

  getMovies() {
    const url = '../assets/imdb-top-50.json';

    return this.http.get(
      url,
      {
        observe: 'response'
      }
    );
  };
}
