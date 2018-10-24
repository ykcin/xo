import { Injectable } from '@angular/core';

@Injectable()

export class GameService {
    public playerX_score: number;
    public playerO_score: number;
    public game_number: number;

    constructor(){
        this.playerX_score = 0;
        this.playerO_score = 0;
        this.game_number = 1;
    }
    getGameNumber() {
        return this.game_number;
    }
    incrementGameNumber() {
        this.game_number = this.game_number+1;
    }

    getPXScore(){
        return this.playerX_score;
    }
    getPOScore(){
        return this.playerO_score;
    }
    
    winPX() {
        this.playerX_score = this.playerX_score+1;
    }
    winPO() {
        this.playerO_score = this.playerO_score+1;
    }
}