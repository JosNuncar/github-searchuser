import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(userName: string): Observable<User> {
    return this.http
      .get<User>(`https://api.github.com/users/${userName}`)
      .pipe(retry(2),catchError(this.handleError));
  }

  handleError(): Observable<never> {
    return throwError(true);
  }
}
