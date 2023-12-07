import { Injectable } from '@angular/core';
import { Movie } from '../interface/movieInterface';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private localStorageKey = 'myWatchList';

  constructor() {}

  getMovies(): Movie[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  getMovieByName(movieName: string): Movie | null {
    const movies = this.getMovies();
    const foundMovie = movies.find((movie) => movie.Title === movieName);
    return foundMovie || null;
  }

  addMovies(movie: Movie): void {
    const currentMovies = this.getMovies();
    currentMovies.push(movie);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentMovies));
  }

  removeMovieByName(movieName: string): void {
    const currentMovies = this.getMovies();
    const updatedMovies = currentMovies.filter(
      (movie) => movie.Title !== movieName
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedMovies));
  }
}
