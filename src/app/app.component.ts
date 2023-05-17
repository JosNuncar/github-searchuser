import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user!: User;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getUser('josnuncar')
      .pipe(first())
      .subscribe((user) => {
        this.user = user;
      });
  }

  userReturned(user: User): void {
    this.user = user;
  }
}
