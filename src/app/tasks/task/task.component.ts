import { Component, inject, Input, } from '@angular/core';
import { TaskData } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: TaskData;
  private tasksService = inject(TasksService)

  onCompleteTasks() {
    this.tasksService.removeTask(this.task.id)
  }
}
