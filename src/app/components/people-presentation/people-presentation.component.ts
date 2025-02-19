import { Component } from '@angular/core';
import { Person } from '../../common/person.interface';
import { SwApiService } from '../../services/sw-api.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { PersonCardComponent } from '../person-card/person-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-people-presentation',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    PersonCardComponent,
  ],
  templateUrl: './people-presentation.component.html',
  styleUrl: './people-presentation.component.scss',
})
export class PeoplePresentationComponent {
  people: Person[] = [];
  filteredPeople: Person[] = [];
  genderFilter = '';
  minBBY = 0;
  maxBBY = 200;

  constructor(private peopleApiService: SwApiService) {}

  ngOnInit() {
    this.peopleApiService.getPeople$().subscribe((data) => {
      this.people = data.results;
      this.filteredPeople = this.people;
    });
  }

  filterBirthYear() {
    this.filteredPeople = this.people.filter((person) => {
      const birthYear = parseInt(person.birth_year);
      return (
        birthYear !== null &&
        birthYear >= this.minBBY &&
        birthYear <= this.maxBBY
      );
    });
  }

  filterPeople() {
    this.filteredPeople = this.people.filter(
      (person) => !this.genderFilter || person.gender === this.genderFilter
    );
  }
}
