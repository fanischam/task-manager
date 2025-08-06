import { Component, input, output, signal } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  constructor(private taskService: TaskService) {}
  userId = input.required<string>();
  close = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.close.emit();
    console.log('New task creation cancelled');
  }

  onSubmit() {
    const task = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    };
    this.taskService.createTask(task, this.userId());
    this.close.emit();
    console.log('New task created:', task);
  }
}
