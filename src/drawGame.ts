export function drawLines(
  id: string,
  xCount: number,
  yCount: number,
  xSize: number,
  ySize: number,
) {
  const canvas = <HTMLCanvasElement>document.getElementById(id);
  const ctx = <CanvasRenderingContext2D>canvas?.getContext("2d");
  ctx.fillStyle = "black";
  for (let i = 0; i < xCount; i++) {
    ctx.fillRect(i * xSize, 0, 1, yCount * ySize);
  }
  for (let i = 0; i < yCount; i++) {
    ctx.fillRect(0, i * ySize, xCount * xSize, 1);
  }
  ctx.fillRect(xCount * xSize - 1, 0, 1, yCount * ySize);
  ctx.fillRect(0, yCount * ySize - 1, xCount * xSize, 1);
}

export function drawGameOnCanvas(id: string, cells: number[][]): void {
  const canvas = document.getElementById(id);
  const ctx = <CanvasRenderingContext2D>(
    (<HTMLCanvasElement>canvas)?.getContext("2d")
  );
  const height = (<HTMLCanvasElement>canvas)?.height;
  const width = (<HTMLCanvasElement>canvas)?.width;
  const cellY = Math.floor(height / cells.length);
  const cellX = Math.floor(width / cells[0].length);
  ctx.clearRect(0, 0, width, height);
  ctx?.beginPath();
  (<CanvasRenderingContext2D>ctx).fillStyle = "gray";
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[0].length; j++) {
      // let moveI = (i === 0)? 0: 1;
      // let moveJ = (j === 0)? 0: 1;
      const moveI = 1;
      const moveJ = 1;
      if (cells[i][j] === 1) {
        const cell = new Path2D();
        cell.rect(
          j * cellX + moveJ,
          i * cellY + moveI,
          cellX - moveJ,
          cellY - moveI,
        );
        ctx.fill(cell);
      } else {
        ctx.clearRect(
          j * cellX + moveJ,
          i * cellY + moveI,
          cellX - moveJ,
          cellY - moveI,
        );
      }
    }
  }
  drawLines(id, cells[0].length, cells.length, cellX, cellY);
  ctx.closePath();
}
