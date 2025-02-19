import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiResponse } from '../common/swapi-response.interface';
import { Person } from '../common/person.interface';
import { Film } from '../common/film.interface';

@Injectable({
  providedIn: 'root',
})
export class SwApiService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPeople$(): Observable<SwapiResponse<Person>> {
    return this.http.get<SwapiResponse<Person>>(`${this.apiUrl}/people/`);
  }

  getFilms$(): Observable<SwapiResponse<Film>> {
    return this.http.get<SwapiResponse<Film>>(`${this.apiUrl}/films/`);
  }
}
