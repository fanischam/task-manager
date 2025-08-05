import { Component, input } from '@angular/core';
import { Task } from '../../types';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  tasks = input.required<Array<Task>>();

  isUserSelected = input.required<boolean>();
}
