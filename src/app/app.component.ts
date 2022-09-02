import { Component } from '@angular/core';
import { Task } from './task/task';
import { transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogResult } from './task-dialog/task-dialog-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KANBAN';

  todo: Task[] = [
    {id: '1', title: 'Have breakfast', description: 'At 6:00 am, boil water, add milk and sugar'},
    {id: '2', title: 'Go to work', description: 'Take a car an go to the office'}
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog) {}

  drop(event: CdkDragDrop<Task | any>): void {
    if(event.previousContainer === event.container){
      return;
    }

    if(!event.container.data || !event.previousContainer.data) {
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }

  newTask(): void {
    const dialogRef= this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {}
      },
    });

    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => this.todo.push(result.task))
  }
}
