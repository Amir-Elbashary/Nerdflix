import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any = null;
  moviesLiked = ['The Shawshank Redemption', 'The Dark Knight']
  timeout: any = null;

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.moviesService.getMovies().subscribe((response: any) => {
      this.movies = response.body.data.movies;
      console.log(this.movies)
    });
  }

  search(event: any) {
    let searchKey = event.target.value

    this.timeout = setTimeout(() => {
      this.moviesService.getMovies().subscribe((response: any) => {
        if (searchKey == '') {
          this.movies = response.body.data.movies;
        } else {
          this.movies = response.body.data.movies.filter((movie: any) => movie.title.toLowerCase().includes(searchKey.toLowerCase()))
        }
      }); 
    }, 500);
  }

  // Sorting also should be moved to a service
  // but for the sake of time, I'll finish the
  // like feature first
  onApplyingFilter(event: any) {
    let sortedMovies:any = [];
    let sortingMethod = event.target.value.split('-');
    let sortingBy = sortingMethod[0];
    let sortingDir = sortingMethod[1];

    switch(sortingBy) {
      case 'title': {
        sortedMovies = this.movies.sort((a:any, b:any) => {
          return a.title.localeCompare(b.title);
        });

        if (sortingDir == 'desc') {
          sortedMovies = sortedMovies.reverse();
        }

        break;
      }
      case 'rating': {
        sortedMovies = this.movies.sort((a:any, b:any) => {
          return sortingDir == 'desc' ? a.rating - b.rating : b.rating - a.rating;
        });

        break;
      }
    }

    this.movies = sortedMovies
  }

  movieLiked(event: any) {
    console.log('Movie liked from child component')
  }
}