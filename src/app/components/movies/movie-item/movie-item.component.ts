import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from "../../../models/movie.model";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie = {title: '', urlPoster: '', rating: '', year: ''};
  @Input() moviesLiked: string[] = [];
  @Output() onMovieLiked = new EventEmitter<boolean>();
  movieLiked = false;

  constructor() {}

  ngOnInit() {
    if (this.moviesLiked.includes(this.movie.title)) {
      this.movieLiked = true;
    }
  }

  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = './assets/images/no-image.jpg';
  }

  toggleMovieLike() {
    this.movieLiked ? this.movieLiked = false : this.movieLiked = true;

    this.onMovieLiked.emit(this.movieLiked);
  }
}
