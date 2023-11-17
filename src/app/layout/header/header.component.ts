import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuShown = false;
  // We could also use Subject here
  likedMovies = 2;
  @Output() onMovieLiked = new EventEmitter<any>();

  constructor(
  ) {}

  ngOnInit() {
  }

  toggleMenu() {
    if (this.menuShown) {
      this.menuShown = false;
    } else {
      this.menuShown = true;
    }
  }
}
