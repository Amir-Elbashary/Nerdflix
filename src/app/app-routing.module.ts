import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // Basically we have nothing on homepage
  // so it will jump to movies page, and i
  // prefered to demonestrate the usage of modules
  // as it suits the bigger application,
  // It could be as simple as putting the route with
  // the component here and just import it in app module
  // and it's done
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
