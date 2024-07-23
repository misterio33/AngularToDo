import { Component, inject, Input } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
    @Input({ required: true }) todoItem!: TodoItem;
    todoService = inject(TodoService);
    isEditing = false;

    handleSave() {
        this.isEditing = false;
    }
    handleEdit() {
        this.isEditing = true;
    }
    handleDone() {}
    handleUnDone() {}
    handleDelete() {
        this.todoService.delete(this.todoItem);
    }
}
