import { Component, input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
})
export class PersonCardComponent {
  public name = input.required<string>();
  public gender = input.required<string>();
  public birthYear = input.required<string>();
  public films = input.required<number>();
}
