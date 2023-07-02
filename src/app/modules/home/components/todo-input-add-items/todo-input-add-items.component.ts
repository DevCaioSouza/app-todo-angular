import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent {
  @Output() addTaskEmit = new EventEmitter();
  public addItemToTaskList: string = '';

  submitTask() {
    this.addItemToTaskList = this.addItemToTaskList.trim()

    if (this.addItemToTaskList) {
      this.addTaskEmit.emit(this.addItemToTaskList);
      this.addItemToTaskList = '';
    }
  }
}
