import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movieInterface';
import { MoviesData } from 'src/assets/data';

import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  isOnWatchlist = false;

  findMovie = (movieName: string): void => {
    const foundMovie = this.localStorageService.getMovieByName(movieName);

    if (foundMovie) {
      this.movie = foundMovie;
      this.isOnWatchlist = true;
    } else {
      this.movie = undefined;
      this.isOnWatchlist = false;
    }
  };

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private localStorageService: WatchlistService
  ) {}

  addMovieToWatchList(newMovie: Movie): void {
    this.localStorageService.addMovies(newMovie);
    this.isOnWatchlist = true;
  }

  removeMovieFromWatchList(movieName: string): void {
    this.localStorageService.removeMovieByName(movieName);
    this.isOnWatchlist = false;
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('id'));

    this.movie = MoviesData.find(
      (movie: Movie) => movie.id === movieIdFromRoute
    );

    if (this.movie) {
      this.isOnWatchlist = this.localStorageService.getMovieByName(
        this.movie.Title
      )
        ? true
        : false;
    }
  }

  getSafeTrailerUrl(trailerLink: string): SafeResourceUrl {
    const url =
      'https://www.youtube.com/embed/' + this.getYoutubeVideoId(trailerLink);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getYoutubeVideoId(url: string): string {
    const regExp =
      /^(?:(?:(?:https?:)?\/\/)?(?:www\.)?)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    return match?.[1] || '';
  }

  toggleWatchlist() {
    if (
      this.isOnWatchlist &&
      window.localStorage
        .getItem('watchlist')
        ?.localeCompare(JSON.stringify(this.movie))
    ) {
      this.isOnWatchlist = false;
      window.localStorage.removeItem('watchlist');
    } else {
      this.isOnWatchlist = true;
      window.localStorage.setItem('watchlist', JSON.stringify(this.movie));
    }
  }
}
