import {
  Component,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { User, UserLinks, UserStats, UserInfo } from '../../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() user!: User;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isLargeScreen = window.innerWidth > 1000;
  }

  isLargeScreen = false;
  userLinks!: UserLinks;
  userStats!: UserStats;
  userInfo!: UserInfo;
  userBio!: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.isLargeScreen = window.innerWidth > 1000;
    if (changes['user'] && changes['user'].currentValue) {
      this.userLinks = {
        location: this.user.location,
        blog: this.user.blog,
        twitterUsername: this.user.twitter_username,
        company: this.user.company,
      };
      this.userStats = {
        publicRepos: this.user.public_repos,
        following: this.user.following,
        followers: this.user.followers,
      };
      this.userInfo = {
        avatarUrl: this.user.avatar_url,
        name: this.user.name,
        htmlUrl: this.user.html_url,
        login: this.user.login,
        createdAt: this.user.created_at,
      };
      this.userBio = this.user.bio;
    }
  }
}
