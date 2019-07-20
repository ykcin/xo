import { Component } from '@angular/core';
import {GameService } from './gameservice.service'
import {BoardService} from './boardservice.service'
import { Injectable, ElementRef } from '@angular/core';
// [ngStyle]="{'background-color': boardService.player ==='X' ? 'green' : 'blue' }"
@Component({
    selector: 'gameboard',
    template: `
    <div class="container">
        <div class="row">

            <div class="col-lg-4 col-sm-12 p-3">
                <h2 class="text-center">Gameboard</h2>
                <div class="myboard">
                    <div class="row justify-content-center" *ngFor="let row of [0,1,2]">
                        <square class="col-xs-3 center-block" id="{{col + row * 3}}" 
                            *ngFor="let col of [0,1,2]" 
                            [state]="boardService.squares[col+row*3]"
                            (click)="boardService.makeMove(col+row*3)"
                            (click)="clicked='true'"
                        ></square>
                    </div>
                </div>
                <div class="">              
                    <div [hidden]="!boardService.winner" 
                        class="row justify-content-center align-items-center alert"
                        [ngClass]="{'alert-primary': boardService.winner==='X', 
                                    'alert-success' : boardService.winner==='0'}">
                        <h3 *ngIf="boardService.winner!=='DRAW'" class="">Player {{boardService.winner}} wins</h3>
                        <h3 *ngIf="boardService.winner==='DRAW'" class="">Sorry you both lose!!!</h3>
                    </div>
                </div>  
                <div class="row justify-content-center align-items-center">
                    <button class="btn m-1" 
                     [ngClass]="{'btn-primary': boardService.winner === 'X', 
                                'btn-secondary': boardService.winner === null,
                                 'btn-success': boardService.winner === '0'}"
                     (click)="boardService.newGame()">New Game {{boardService.winner}}</button>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 p-3">
                <h2 class="text-center">TURN</h2>
                <h2 class="status text-center">{{boardService.status()}}</h2>
                <h2 class="text-center">GAME: </h2>
                <h2 class="status text-center">{{this.gameService.getGameNumber()}}</h2>
            </div>

            <div class="col-lg-4 col-sm-12 p-3">
                <score-board></score-board>
            </div>
            
        </div>
        <div class="row">
            <div class="col alert-success">
                <h4>Hey</h4>
                <p>There</p>
            </div>
            <div class="col alert-danger">
                <h4>Grid</h4>
                <p>Flex</p>
            </div>
            <div class="col alert-primary">
                <h4  class="center-block">Hey</h4>
                <p>There</p>
            </div>
        </div>
    </div>
    `,
    styles: [`
        :host {
            margin: auto;
            float: none;
        }
        .container {
            background-color: #C2C0F6;
        }
        .myboard {
            border: 10px dotted pink;
            margin: 0 auto; 
            max-width: 220px;
        }

    `]
})

export class Gameboard {

    gameService: GameService;
    boardService: BoardService;

    constructor( gameService: GameService, boardService: BoardService) {
        this.gameService = gameService; 
        this.boardService = boardService;
    }

    // changeColor() {
    //     this.color = 'orange';
    //     if(this.boardService.player == 'X') {
    //         this.color = 'red';
    //     }
    // }

 
}