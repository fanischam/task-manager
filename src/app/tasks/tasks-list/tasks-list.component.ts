import { Component, input } from '@angular/core';
import { Task } from '../task/task.model';
import { User } from '../../user/user.model';
import dummyTasks from '../../dummy_tasks';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  selectedUser = input<User>();
  tasks = dummyTasks;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks(): Task[] {
    return this.taskService.getUserTasks(this.selectedUser()?.id || '');
  }

  onAddTask() {
    this.isAddingTask = !this.isAddingTask;
    // Logic to add a new task can be implemented here
    console.log('Add Task button clicked');
  }

  onCloseTaskModal() {
    this.isAddingTask = false;
    console.log('Task creation cancelled');
  }
}
