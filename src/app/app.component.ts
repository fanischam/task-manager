import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
