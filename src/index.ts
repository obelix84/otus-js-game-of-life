import { GameOfLife } from "./GameOfLife";
import { drawGameOnCanvas } from "./drawGame";
import "./styles.css";

let mainLoop;
let delay: number = 1000;
const canvas = document.getElementById("canvas");
let xCount: number;
let yCount: number;
let cellWidth: number;
let cellHeight: number;

const GM = new GameOfLife();

function stop(): void {
  document.getElementById("stop")?.setAttribute("disabled", "");
  document.getElementById("start")?.removeAttribute("disabled");
  clearTimeout(mainLoop);
}
function start(): void {
  document.getElementById("start")?.setAttribute("disabled", "");
  document.getElementById("stop")?.removeAttribute("disabled");
  mainLoop = setTimeout(function loop() {
    mainLoop = setTimeout(loop, delay);
    if (!GM.nextGeneration()) {
      stop();
    }
    drawGameOnCanvas("canvas", GM.cells);
  }, delay);
}

function random(): void {
  GM.setRandomCells(xCount, yCount);
  drawGameOnCanvas("canvas", GM.cells);
}

function init() {
  document.getElementById("start")?.addEventListener("click", start);
  document.getElementById("stop")?.addEventListener("click", stop);
  const xInput = <HTMLInputElement>document.getElementById("x");
  const yInput = <HTMLInputElement>document.getElementById("y");
  xCount = +xInput.value;
  yCount = +yInput.value;
  /* eslint-disable */
  cellHeight = Math.floor((<HTMLCanvasElement>canvas)?.height / xCount);
  cellWidth = Math.floor((<HTMLCanvasElement>canvas)?.width / yCount);
  /* eslint-enable */
  GM.setRandomCells(xCount, yCount);
  drawGameOnCanvas("canvas", GM.cells);

  canvas?.addEventListener("click", (event) => {
    const c = canvas.getBoundingClientRect();
    const x = event.clientX - c.top;
    const y = event.clientY - c.left;
    const i = Math.floor(x / cellWidth);
    const j = Math.floor(y / cellHeight);
    GM.cells[j][i] = (GM.cells[j][i] + 1) % 2;
    drawGameOnCanvas("canvas", GM.cells);
  });

  document.getElementById("resize")?.addEventListener("click", () => {
    const newX = +xInput.value;
    const newY = +yInput.value;
    if (newX > 0 && newY > 0) {
      GM.resize(newX, newY);
      xCount = newX;
      yCount = newY;
      /* eslint-disable */
      cellHeight = Math.floor((<HTMLCanvasElement>canvas)?.height / xCount);
      cellWidth = Math.floor((<HTMLCanvasElement>canvas)?.width / yCount);
      /* eslint-enable */
      drawGameOnCanvas("canvas", GM.cells);
    } else alert("something wrong with input");
  });

  document.getElementById("random")?.addEventListener("click", random);

  document.getElementById("range")?.addEventListener("input", () => {
    /* eslint-disable */
    delay = +(<HTMLInputElement>document.getElementById("range"))?.value;
    /* eslint-enable */
  });
}

init();
