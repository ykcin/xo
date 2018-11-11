import { Component, Input } from '@angular/core';

@Component({
    selector: 'square',
    template: `{{state}}`,
    styles: [`
    :host {
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 30px;
        border: 1px solid black;

    }
`]
})

export class Square {
    @Input() state;
    
}