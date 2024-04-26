import {GameOfLife} from './GameOfLife';
import {drawGameOnCanvas, drawLines} from './drawGame';
import './styles.css';


let mainLoop: any;
let delay: number = 1000;
const canvas = document.getElementById('canvas');
let xCount: number;
let yCount: number;
let cellWidth: number;
let cellHeight: number;

let GM = new GameOfLife();

function init() {
    document.getElementById('start')?.addEventListener('click', start);
    document.getElementById('stop')?.addEventListener('click', stop);
    let xInput = <HTMLInputElement>document.getElementById('x');
    let yInput= <HTMLInputElement>document.getElementById('y')
    xCount = +xInput.value;
    yCount = +yInput.value;
    cellHeight = Math.floor((<HTMLCanvasElement>canvas)?.height / xCount);
    cellWidth = Math.floor((<HTMLCanvasElement>canvas)?.width / yCount);
    GM.setRandomCells(xCount, yCount);
    drawGameOnCanvas('canvas', GM.cells);

    canvas?.addEventListener('click', (event) => {
        let c = canvas.getBoundingClientRect()
        let x = event.clientX - c.top;
        let y = event.clientY - c.left;
        let i = Math.floor(x / cellWidth);
        let j = Math.floor(y / cellHeight);
        GM.cells[j][i] = (GM.cells[j][i] + 1)%2;
        drawGameOnCanvas('canvas', GM.cells);
    })

    document.getElementById('resize')?.addEventListener('click', () => {
        let newX = +xInput.value;
        let newY = +yInput.value
        if (newX > 0 && newY >0) {
            GM.resize(newX, newY);
            xCount = newX;
            yCount = newY;
            cellHeight = Math.floor((<HTMLCanvasElement>canvas)?.height / xCount);
            cellWidth = Math.floor((<HTMLCanvasElement>canvas)?.width / yCount);
            drawGameOnCanvas('canvas', GM.cells);
        } else
            alert('something wrong with input');
    });

    document.getElementById('random')?.addEventListener('click', random);

    document.getElementById('range')?.addEventListener('input', () => {
        delay = +(<HTMLInputElement>document.getElementById('range'))?.value;

    });
}
function start():void {
    document.getElementById('start')?.setAttribute('disabled', '');
    document.getElementById('stop')?.removeAttribute('disabled');
    mainLoop = setTimeout(function loop (){
        mainLoop = setTimeout(loop, delay);
        if (!GM.nextGeneration()) {
            stop();
        }
        drawGameOnCanvas('canvas', GM.cells);
    }, delay);
}

function stop():void {
    document.getElementById('stop')?.setAttribute('disabled', '');
    document.getElementById('start')?.removeAttribute('disabled');
    clearTimeout(mainLoop);
}

function random():void {
    GM.setRandomCells(xCount, yCount);
    drawGameOnCanvas('canvas', GM.cells);
}


init();




