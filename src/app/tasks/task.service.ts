import { Injectable } from '@angular/core';
import dummyTasks from '../dummy_tasks';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = dummyTasks;
      this.saveTasks();
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  createTask(task: Partial<Task>, userId: string) {
    const newTask = {
      id: Math.random().toString(),
      title: task.title || 'Untitled Task',
      summary: task.summary || 'No summary provided',
      userId: userId,
      dueDate: task.dueDate || new Date().toISOString(),
    };
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
