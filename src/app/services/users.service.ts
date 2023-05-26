import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getUser(userName: string): Observable<User> {
    const headers = {
      Authorization: `Token ${this.apiKey}`
    };

    return this.http
      .get<User>(`https://api.github.com/users/${userName}`, { headers })
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(): Observable<never> {
    return throwError(true);
  }
}
