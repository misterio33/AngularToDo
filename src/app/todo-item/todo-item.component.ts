import { Component, Input } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
    @Input({ required: true }) todoItem!: TodoItem;
    isEditing = false;
    handleSave() {}
    handleEdit() {}
    handleDone() {}
    handleUnDone() {}
    handleDelete() {}
}
