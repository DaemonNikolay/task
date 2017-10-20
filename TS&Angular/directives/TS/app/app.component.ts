import { Component } from '@angular/core';

const todos = [
    'Yes, of course'
];

@Component({
    moduleId: module.id, 
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent{
    todos = todos;
}