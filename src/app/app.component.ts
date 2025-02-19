import { Component } from '@angular/core';
import { PeoplePresentationComponent } from './components/people-presentation/people-presentation.component';

@Component({
  selector: 'app-root',
  imports: [PeoplePresentationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'star-wars-app';
}
