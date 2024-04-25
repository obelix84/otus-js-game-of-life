import {GameOfLife} from './GameOfLife';
import {drawGameOnCanvas} from './drawGame';
import './styles.css';


let GM = new GameOfLife();
GM.cells = [[0,0,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [0,0,1,1,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0]];

drawGameOnCanvas('canvas', GM.cells);

let mainLoop = setInterval(()=> {
    drawGameOnCanvas('canvas', GM.cells);
    if (!GM.nextGeneration()) {
        clearInterval(mainLoop);
        alert("stop");
    }
    console.log("draw");
}, 1000);

//GM.nextGeneration();
//console.log(GM.cells);

//drawGameOnCanvas('canvas', GM.cells);

//GM.nextGeneration();
console.log(GM.cells);




const canvas = document.getElementById('canvas');
//canvas?.setAttribute('style',"border: 1px solid black")
// const ctx = canvas?.getContext("2d");
// console.log(ctx);
// ctx.beginPath();
// ctx.arc(75, 75, 10, 0, Math.PI*2, true);
// ctx.closePath();
// ctx.fill();


var xPosition = canvas.offsetLeft;
let yPosition = canvas.offsetTop;
console.log(xPosition + " " + yPosition);

var c = canvas.getBoundingClientRect()
console.log('top:' + c.top + ' left: ' + c.left +'');



canvas.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.clientX+ " " + event.clientY);
    var c = canvas.getBoundingClientRect()
    console.log('top:' + c.top + ' left: ' + c.left +'');
})

// const rootEl = document.querySelector("#app")
// if (rootEl) {
//     addForm(rootEl);
// }
