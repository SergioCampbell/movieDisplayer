import { Injectable } from '@angular/core';
import { MoviesData, MovieData } from 'src/assets/data';
import { Movie } from '../interface/movieInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  private watchlistSubject = new BehaviorSubject<number[]>([]);
  watchlist$ = this.watchlistSubject.asObservable();

  private movies = MoviesData;

  getMovies() {
    return this.movies;
  }

  getMovieById(movieId: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === movieId);
  }

  addtoWatchlist(movieId: number) {
    const currentWatchlist = this.watchlistSubject.value;
    if (!currentWatchlist.includes(movieId)) {
      this.watchlistSubject.next([...currentWatchlist, movieId]);
      localStorage.setItem(
        'watchlist',
        JSON.stringify(this.watchlistSubject.value)
      );
    }
  }

  removeFromWatchlist(movieId: number) {
    const currentWatchlist = this.watchlistSubject.value;
    const updatedWatchlist = currentWatchlist.filter((id) => id !== movieId);
    this.watchlistSubject.next(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  }

  clearWatchlist() {
    this.movies = [];
    return this.movies;
  }
}
