import { Component, OnInit } from '@angular/core';
import { GameService } from './gameservice.service'

@Component({
    selector: 'score-board',
    template: `
        <div class="text-center">
            <h2>Scoreboard</h2>
            <h3 class="alert-primary">Player X : {{gameService.getPXScore()}}</h3>
            <h3 class="alert-success">Player O : {{gameService.getPOScore()}}</h3>
            <h4>Game Number {{gameService.getGameNumber()}}</h4>
        </div>
    `,
    styleUrls: []
})
export class ScoreboardComponent implements OnInit {
    gameService: GameService;
    
    constructor(gameService: GameService) {
        this.gameService = gameService;
    }
    
    ngOnInit(): void { ;
    }



}
