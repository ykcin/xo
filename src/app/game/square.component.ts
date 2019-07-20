import { Component, Input } from '@angular/core';

@Component({
    selector: 'square',
  
    template: `<p  (click)="clicked=true;" [ngStyle]="{'background-color': getColor()}" >{{state}}</p>`,
    styles: [`
    :host {
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 30px;
        border: 1px solid black;
     
        }
        p {
            
            height: 50px;
            margin: 0; 
        }
    `],
})
    
export class Square {
    @Input() state;
    clicked = false;
    // @Input() bkcolor: boolean;
    
    constructor() {
        
    }

    getColor() {
        switch (this.state) {
            case 'X':
                return '#cce5ff';
 
            case 'O':
                return '#d4edda';
        
            default:
                return 'white';
                
        }
    }

    
 
}