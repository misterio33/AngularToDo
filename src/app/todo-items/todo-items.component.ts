import { Component, inject } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-items',
    standalone: true,
    imports: [TodoItemComponent],
    templateUrl: './todo-items.component.html',
    styleUrl: './todo-items.component.css',
})
export class TodoItemsComponent {
    todoService = inject(TodoService);
    todoItems: TodoItem[] = this.todoService.getTodoItems();
}
