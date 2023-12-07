import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movieInterface';
import { MoviesData } from 'src/assets/data';

import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-movie-detail',
  template: `
    <h1>Movie Detail</h1>
    <div class="movie-details" *ngIf="movie">
      <h2>{{ movie.Title }}</h2>
      <!-- <img [src]="movie.imageUrl" alt="{{ movie.title }}" /> -->
      <p>{{ movie.Description }}</p>
      <p>Rating: {{ movie.Rating }}</p>
      <p>Duration: {{ movie.Duration }}</p>
      <p>Genre: {{ movie.Genre }}</p>
      <p>Released date: {{ movie.ReleasedDate | date }}</p>
      <section>
        <button *ngIf="!isOnWatchlist" (click)="addMovieToWatchList(movie)">
          Add to Watchlist
        </button>
        <button
          *ngIf="isOnWatchlist"
          (click)="removeMovieFromWatchList(movie.Title)"
        >
          Remove from Watchlist
        </button>
        <span class="on-watchlist" *ngIf="isOnWatchlist">On my watchlist</span>
      </section>
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          [src]="getSafeTrailerUrl(movie.TrailerLink)"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div *ngIf="!movie">No movie details found or deleted 🤔</div>
  `,
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  isOnWatchlist = false;
  currentMovie: Movie = {} as Movie;

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
    return this.sanitizer.bypassSecurityTrustResourceUrl(trailerLink);
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
