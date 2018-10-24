import { Injectable } from '@angular/core';
import { GameService } from './gameservice.service';

@Injectable()
export class BoardService {

    constructor(public gameService: GameService) {
        
    }
    squares = Array(9).fill(null);
    player = 'X';
    winner = null;
    
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
            }
            this.player = this.player=='X' ? '0' : 'X'
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