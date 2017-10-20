import { Component } from '@angular/core';

const array = [
    'Yes, of course'
];

@Component({
    moduleId: module.id, 
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent{
    array = array;
}