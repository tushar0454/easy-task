import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskData } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: TaskData;
  @Output() complete = new EventEmitter<string>();

  onCompleteTasks() {
    this.complete.emit(this.task.id);
  }
}
