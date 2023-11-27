import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuShown = false;
  // We could also use Subject here
  @Input() likedMovies: number = 0;
  @Output() onMovieLiked = new EventEmitter<any>();

  constructor() {}

  toggleMenu() {
    if (this.menuShown) {
      this.menuShown = false;
    } else {
      this.menuShown = true;
    }
  }
}
