import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-new-todo',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-todo.component.html',
    styleUrl: './new-todo.component.css',
})
export class NewTodoComponent {
    private todoService = inject(TodoService);
    enteredTitle = '';
    enteredDescription = '';

    onSubmit() {
        this.todoService.add(this.enteredTitle, this.enteredDescription);
        this.enteredTitle = '';
        this.enteredDescription = '';
    }
}
