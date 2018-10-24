import { Component } from '@angular/core';
import {GameService } from './gameservice.service'
import {BoardService} from './boardservice.service'

@Component({
    selector: 'gameboard',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-xs-4 center-block">
                <h2 class="text-center">Gameboard</h2>
                <div class="myboard" style=" margin: 0 auto; width: 100%;">
                    <div class="row" style=" margin: auto; width: 77%;" *ngFor="let row of [0,1,2]">
                        <square class="col-xs-3 center-block" id="{{col + row * 3}}" 
                            *ngFor="let col of [0,1,2]" 
                            [state]="squares[col+row*3]"
                            (click)="makeMove(col+row*3)"
                            [style.background-color]="state === 'X' ? 'red' : 'black';"></square>
                    </div>
                </div>
                <button class="center-block text-center" (click)="newGame()">New Game</button>
            </div>
            <div class="col-xs-4">
                <h2 class="text-center">TURN</h2>
                <h2 class="status text-center">{{status}}</h2>
                <h2 class="text-center">GAME: </h2>
                <h2 class="status text-center">{{this.gameService.getGameNumber()}}</h2>
            </div>
            <div class="col-xs-4">
                <score-board></score-board>
            </div>
            
        </div>
    </div>
    `,
    styles: [`
        :host {
            margin: auto;
            float: none;
        }
        .myboard {
            border: 10px dotted pink;
        }
    `]
})

export class Gameboard {
    squares = Array(9).fill(null);
    player = 'X';
    winner = null;
    gameService: GameService;

    constructor( gameService: GameService) {
        this.gameService = gameService;
        // this.gameService.incrementGameNumber();
    }
    
    get status() {
        return this.winner ? `Winner: ${this.winner}` :
            `Player: ${this.player}`;
    }
    newGame() {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
        this.gameService.incrementGameNumber();
    }
    makeMove(position) {
        if (!this.winner && !this.squares[position]) {
            this.squares[position] = this.player;
            if (this.winningMove()) {
                this.winner = this.player;
                // if (this.player =='X') {
                //     this.gameService.winPX();
                // }
                this.winner == "X" ? this.gameService.winPX() : this.gameService.winPO();
            }
            this.player = this.player=='X' ? '0' : 'X';
        } 
    }
    winningMove(): boolean {
        const lines = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        for (let line of lines) {
            if (this.squares[line[0]]
                && this.squares[line[0]] == this.squares[line[1]]
                && this.squares[line[1]] == this.squares[line[2]]){
                    return true;
                }
        }
        return false;
    }
}