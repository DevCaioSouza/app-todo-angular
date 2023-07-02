import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent {
  @Output() addTaskEmit = new EventEmitter();
  public addTask: string = '';

  submit() {
    this.addTask = this.addTask.trim()

    if (this.addTask) {
      this.addTaskEmit.emit(this.addTask);
      this.addTask = '';
    }
  }
}
