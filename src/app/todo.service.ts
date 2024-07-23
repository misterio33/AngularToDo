import { Injectable } from '@angular/core';
import { TodoItem } from './models/todoItem.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private todoItems: TodoItem[] = [
        {
            title: 'title1',
            description: 'Description for the first task',
            isDone: false,
            createdAt: new Date().toDateString(),
        },
        {
            title: 'title2',
            description: 'Description for the second task',
            isDone: false,
            createdAt: new Date().toDateString(),
        },
    ];

    getTodoItems() {
        return this.todoItems.filter((item) => item.isDone === false);
    }

    getDoneTodoItems() {
        return this.todoItems.filter((item) => item.isDone === true);
    }

    add(title: string, description: string) {
        this.todoItems.unshift({
            title: title,
            description: description,
            isDone: false,
            createdAt: new Date().toDateString(),
        });
    }

    delete(itemToDelete: TodoItem) {
        this.todoItems = this.todoItems.filter((item) => item !== itemToDelete);
    }

    handleDoneStatus(itemToDone: TodoItem) {
        let itemIndex = this.todoItems.findIndex((item) => item === itemToDone);
        this.todoItems[itemIndex].isDone = !this.todoItems[itemIndex].isDone;
    }

    update(
        itemToDone: TodoItem,
        updatedTitle: string,
        updatedDescription: string
    ) {
        let itemIndex = this.todoItems.findIndex((item) => item === itemToDone);
        this.todoItems[itemIndex].title = updatedTitle;
        this.todoItems[itemIndex].description = updatedDescription;
    }
}
