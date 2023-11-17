import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesPageComponent } from "../../pages/movies/movies-page.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesListComponent
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule {}
