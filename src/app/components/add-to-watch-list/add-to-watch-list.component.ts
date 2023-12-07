import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interface/movieInterface';

@Component({
  selector: 'app-add-to-watch-list',
  templateUrl: './add-to-watch-list.component.html',
  styleUrls: ['./add-to-watch-list.component.css'],
})
export class AddToWatchListComponent {
  @Input() movie: Movie | undefined;
  @Output() addToWatchList = new EventEmitter();

  onNotify() {
    window.alert('You will be notified when the product goes on cinemas!');
  }
}
