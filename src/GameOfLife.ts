import {CellularAutomaton} from "./CellularAutomaton";

export class GameOfLife extends CellularAutomaton {

    nextGeneration(): boolean {
        let nextCells: number[][] = [];
        for(let i = 0; i<this._cells.length; i++) {
            nextCells[i] = [];
            for(let j = 0; j<this._cells[0].length; j++) {
                let count= 0;
                let topI = i - 1 < 0 ? this._cells.length-1: i-1;
                let botI = (i + 1) % this._cells.length;
                let topJ = j - 1 < 0 ? this._cells[0].length-1: j-1;
                let botJ = (j + 1) % this._cells[0].length;
                count += this._cells[topI][topJ] + this._cells[topI][j]  + this._cells[topI][botJ];
                count += this._cells[i][topJ] + this._cells[i][botJ];
                count += this._cells[botI][topJ] + this._cells[botI][j]  + this._cells[botI][botJ];
                nextCells[i][j] = this._cells[i][j];
                if (this._cells[i][j] === 0 && count === 3) {
                    nextCells[i][j] = 1;
                } else if (this._cells[i][j] === 1 && (count < 2 || count > 3 )){
                    nextCells[i][j] = 0;
                }
            }
        }
        let stop = this.stoppingRule(nextCells)
        this._cells = nextCells;
        return !stop;
    }

    stoppingRule(nextCells: number[][]): boolean {
        return nextCells.every(
            (v,i) => nextCells[i].every(
                (v,j) => v === this._cells[i][j]));
    }

    setRandomCells(x:number, y:number):void {
        let cells:number[][] = [];
        for(let i= 0;i<x;i++) {
            cells[i] = [];
            for(let j= 0;j<y;j++) {
                cells[i][j] = Math.floor(Math.random() * 100) < 20? 1:0;
            }
        }
        this._cells = cells;
    }

    resize(i:number, j:number): void {
        let newCells:number[][] = [];
        for(let y= 0;y<i;y++) {
            newCells[y] = [];
            for(let x= 0;x<j;x++) {
                if(typeof this._cells[y] != "undefined" && this._cells[y][x])
                    newCells[y][x] = this._cells[y][x];
                else
                    newCells[y][x] = 0;
            }
        }
        this._cells = newCells;
    }
}