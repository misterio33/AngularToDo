import { Component, inject, Input } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';
import { TodoService } from '../todo.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
    @Input({ required: true }) todoItem!: TodoItem;
    todoService = inject(TodoService);
    isEditing = false;

    editedTitle = '';
    editedDescription = '';

    handleSave() {
        this.todoService.update(
            this.todoItem,
            this.editedTitle,
            this.editedDescription
        );
        this.isEditing = false;
        console.log('adfasdf');
    }
    handleEdit() {
        this.isEditing = true;
    }
    handleDone() {
        this.todoService.done(this.todoItem);
    }
    handleUnDone() {}
    handleDelete() {
        this.todoService.delete(this.todoItem);
    }
    submitForm(form: NgForm) {
        if (form.valid) {
            form.ngSubmit.emit();
        }
    }
}
