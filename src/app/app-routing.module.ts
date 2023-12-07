import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { UserComponent } from './components/user/user.component';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';

const routes: Routes = [
  { path: '', component: MovieThumbnailComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
