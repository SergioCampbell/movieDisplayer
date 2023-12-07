import { Component } from '@angular/core';
import { Movie } from '../../interface/movieInterface';
import { MoviesData } from 'src/assets/data';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
})
export class MovieThumbnailComponent {
  movies: Movie[] = MoviesData;
  movieName: string = '';
}
