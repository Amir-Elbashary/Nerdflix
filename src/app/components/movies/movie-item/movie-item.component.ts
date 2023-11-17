import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  @Input() moviesLiked: string[] = [];
  @Output() onMovieLiked = new EventEmitter<boolean>();
  movieLiked = false;

  constructor() {}

  ngOnInit() {
    if (this.moviesLiked.includes(this.movie.title)) {
      this.movieLiked = true;
    }
  }

  toggleMovieLike() {
    if (this.movieLiked) {
      this.movieLiked = false;
    } else {
      this.movieLiked = true;
    }

    this.onMovieLiked.emit(this.movieLiked);
  }
}
