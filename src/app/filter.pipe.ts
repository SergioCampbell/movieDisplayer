import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './interface/movieInterface';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: Movie[], input: any): any {
    if (input) {
      return value.filter(
        (movie: Movie) =>
          movie.Title.toLowerCase().includes(input) ||
          movie.ReleasedDate.toLowerCase().includes(input)
      );
    } else {
      return value;
    }
  }
}
