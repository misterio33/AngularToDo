import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, TodoItemComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'AngularToDoApp';
}
