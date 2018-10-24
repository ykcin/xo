import { Component } from '@angular/core';
import { BoardService} from 'src/app/game/boardservice.service'
import { GameService } from 'src/app/game/gameservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xs & 0s';
  max_turns = 9;
  player1score = 0;
  player2score = 0;
  win_lines = 8;

  constructor(public gameService: GameService){

  }
}
