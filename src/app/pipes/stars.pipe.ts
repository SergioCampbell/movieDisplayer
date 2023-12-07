import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
})
export class StarRatingPipe implements PipeTransform {
  transform(rating: number): string {
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '½' : '';
    return fullStars + halfStar;
  }
}
