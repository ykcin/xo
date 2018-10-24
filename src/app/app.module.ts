import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Gameboard } from 'src/app/game/gameboard.component';
import { Square } from 'src/app/game/square.component';
import { ScoreboardComponent }  from 'src/app/game/scoreboard.component';

import { GameService } from 'src/app/game/gameservice.service';
import { BoardService } from 'src/app/game/boardservice.service';

@NgModule({
  declarations: [
    AppComponent,
    Gameboard,
    Square,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
