import { Component, input } from '@angular/core';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';
import dummyTasks from '../dummy_tasks';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  selectedUser = input<User>();

  get selectedUserTasks(): Task[] {
    return dummyTasks.filter((task) => task.userId === this.selectedUser()?.id);
  }
}
