import { Component, Input } from '@angular/core';

@Component({
    selector: 'square',
    template: `{{state}}`,
    styles: [`
    :host {
        width: 50px;
        height: 50px;
        // border: 1px solid grey;
        text-align: center;
        font-size: 30px;
        border: 1px dotted black;
        color: red;
        background-color: red;
    }
`]
})

export class Square {
    @Input() state;
    
}