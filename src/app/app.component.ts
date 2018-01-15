import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './services/data.service';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app';

  constructor(public data: DataService) {
    interval(1000).subscribe(() => {
      this.data.emitter.emit('test');
    });
  }
}
