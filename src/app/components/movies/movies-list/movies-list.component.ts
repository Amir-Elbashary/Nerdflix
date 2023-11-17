import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  private URL = '../assets/imdb-top-50.json';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(this.URL).subscribe(console.log);
  }
}
