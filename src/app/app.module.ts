import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from '../app/components/movie-detail/movie-detail.component';
import { UserComponent } from '../app/components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToWatchListComponent } from './components/add-to-watch-list/add-to-watch-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { StarRatingPipe } from './pipes/stars.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    UserComponent,
    AddToWatchListComponent,
    HeaderComponent,
    FooterComponent,
    MovieThumbnailComponent,
    FilterPipe,
    StarRatingPipe,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
