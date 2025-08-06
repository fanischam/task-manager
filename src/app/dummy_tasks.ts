import { Task } from './task/task.model';

const dummyTasks: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  {
    id: 't4',
    userId: 'u2',
    title: 'Create a new design',
    summary: 'Create a new design for the online shop website',
    dueDate: '2024-07-01',
  },
  {
    id: 't5',
    userId: 'u1',
    title: 'Write documentation',
    summary:
      'Write documentation for the Angular project to help new developers onboard quickly.',
    dueDate: '2024-08-15',
  },
  {
    id: 't6',
    userId: 'u3',
    title: 'Implement user authentication',
    summary: 'Implement user authentication using JWT and refresh tokens.',
    dueDate: '2024-09-30',
  },
  {
    id: 't7',
    userId: 'u2',
    title: 'Optimize performance',
    summary: 'Analyze and optimize the performance of the Angular application.',
    dueDate: '2024-10-15',
  },
  {
    id: 't8',
    userId: 'u1',
    title: 'Conduct code review',
    summary:
      'Conduct a code review for the latest features implemented in the project.',
    dueDate: '2024-11-01',
  },
  {
    id: 't9',
    userId: 'u6',
    title: 'Deploy to production',
    summary:
      'Deploy the Angular application to the production environment and ensure everything works as expected.',
    dueDate: '2024-12-01',
  },
  {
    id: 't10',
    userId: 'u5',
    title: 'Gather user feedback',
    summary:
      'Gather user feedback on the new features and improvements made in the Angular application.',
    dueDate: '2025-01-15',
  },
  {
    id: 't11',
    userId: 'u4',
    title: 'Conduct user interviews',
    summary:
      'Conduct user interviews to gather insights and feedback on the application.',
    dueDate: '2025-02-28',
  },
];

export default dummyTasks;
