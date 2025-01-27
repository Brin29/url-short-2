import { Component } from '@angular/core';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';


@Component({
  selector: 'app-root',
  imports: [ShortenUrlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'url-front';
}
