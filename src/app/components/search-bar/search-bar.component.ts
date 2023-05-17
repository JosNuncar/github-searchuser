import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() userReturned = new EventEmitter<User>();
  searchValue = new UntypedFormControl('', Validators.required);
  noResults = false;
  unsubscribe$: Subject<void> = new Subject<void>();
  user$: any;

  constructor(private usersService: UsersService) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();

  }

  searchUser(): void {
    this.user$ = this.usersService
      .getUser(this.searchValue.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (user: User) => {
          this.noResults = false;
          this.userReturned.emit(user);
        },
        (error) => (this.noResults = error)
      );
  }
}
