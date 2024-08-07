import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { DoneTodoItemsComponent } from './done-todo-items/done-todo-items.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        TodoItemComponent,
        TodoItemsComponent,
        DoneTodoItemsComponent,
        NewTodoComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'AngularToDoApp';
}
