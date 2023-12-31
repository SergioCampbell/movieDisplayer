import { Component } from '@angular/core';
import { Movie } from '../../interface/movieInterface';
import { MoviesData } from 'src/assets/data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
})
export class MovieThumbnailComponent {
  movies: Movie[] = MoviesData;
  movieName: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getMovieImageURL(title: string): SafeResourceUrl {
    const sanitizedTitle = encodeURIComponent(title);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `../../../assets/img/${sanitizedTitle}.png`
    );
  }
}
