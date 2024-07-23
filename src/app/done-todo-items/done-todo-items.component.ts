import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../models/todoItem.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-done-todo-items',
    standalone: true,
    imports: [TodoItemComponent],
    templateUrl: './done-todo-items.component.html',
    styleUrl: './done-todo-items.component.css',
})
export class DoneTodoItemsComponent {
    todoService = inject(TodoService);
    doneTodoItems: TodoItem[] = this.todoService.getDoneTodoItems();
}
