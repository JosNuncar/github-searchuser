import { Component, Input } from '@angular/core';
import { UserInfo } from '../../models/user.model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent {
  @Input() userInfo!: UserInfo;
  @Input() isLargeScreen = false;
}
