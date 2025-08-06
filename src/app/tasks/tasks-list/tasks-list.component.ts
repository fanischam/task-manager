import { Component, input } from '@angular/core';
import { Task } from '../task/task.model';
import { User } from '../../user/user.model';
import dummyTasks from '../../dummy_tasks';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

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

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUser()?.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.isAddingTask = !this.isAddingTask;
    // Logic to add a new task can be implemented here
    console.log('Add Task button clicked');
  }

  onCancelTaskCreation() {
    this.isAddingTask = false;
    console.log('Task creation cancelled');
  }

  onCreateTask(newTask: Partial<Task>) {
    this.tasks.push({
      id: Math.random().toString(),
      title: newTask.title || '',
      summary: newTask.summary || '',
      dueDate: newTask.dueDate || '',
      userId: this.selectedUser()!.id,
    });

    this.isAddingTask = false;
    console.log('New task created:', newTask);
  }
}
