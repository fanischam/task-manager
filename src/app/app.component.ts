import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import dummyTasks from './dummy_tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks = dummyTasks;
  isUserSelected = false;

  onSelectUser(id: string) {
    this.isUserSelected = true;
    this.tasks = dummyTasks.filter((task) => task.userId === id);
  }
}
