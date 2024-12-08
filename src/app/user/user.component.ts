import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex]);
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
//
// get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar;
// }

// onSelectUser() {
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.selectedUser.set(DUMMY_USERS[randomIndex]);
// this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }
