export function drawGameOnCanvas(id: string, cells: number[][]): void {
    const canvas = document.getElementById(id);
    const ctx = canvas?.getContext("2d");
    const height = canvas?.height;
    const width = canvas?.width;
    const cellY = Math.floor(height / cells.length);
    const cellX = Math.floor(width / cells[0].length);
    ctx.beginPath();
    drawLines(ctx, cells[0].length, cells.length, cellX, cellY);
    ctx.fillStyle = "gray";
    for (let i=0; i<cells.length; i++) {
        for (let j= 0; j<cells[0].length;j++) {
            if (cells[i][j] === 1) {
                ctx.fillRect(j * cellX +1, i * cellY +1, cellX - 1, cellY - 1);
            }
            else
                ctx.clearRect(j * cellX + 1, i * cellY+ 1, cellX - 1, cellY - 1)
        }
    }
    ctx.closePath();
    ctx.fill();
}

export function drawLines(ctx: CanvasRenderingContext2D, xCount: number, yCount: number, xSize: number, ySize: number) {
    ctx.fillStyle = "black";
    for (let i= 1; i<xCount; i++) {
        ctx.fillRect(i * xSize, 0, 1 ,yCount * ySize);
    }
    for (let i= 1; i<yCount; i++) {
        ctx.fillRect(0,i * ySize, xCount * xSize, 1 );
    }
}